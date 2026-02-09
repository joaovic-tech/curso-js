import { useEffect, useRef, useCallback, useReducer } from 'react';

// ===== TYPES =====
export interface PomodoroSettings {
  pomodoroTime: number; // seconds
  shortRestTime: number;
  longRestTime: number;
  cyclesBeforeLongRest: number;
}

export interface PomodoroStats {
  completedPomodoros: number;
  completedCycles: number;
  totalWorkTime: number; // seconds
}

export type TimerMode = 'idle' | 'working' | 'shortRest' | 'longRest';

interface PomodoroState {
  mainTime: number;
  isRunning: boolean;
  mode: TimerMode;
  cyclesRemaining: number;
  stats: PomodoroStats;
}

type PomodoroAction =
  | { type: 'TICK' }
  | { type: 'START_WORK'; payload: { time: number; cycles: number } }
  | { type: 'START_SHORT_REST'; payload: { time: number } }
  | { type: 'START_LONG_REST'; payload: { time: number; cycles: number } }
  | { type: 'TOGGLE_PAUSE' }
  | { type: 'RESET'; payload: { time: number; cycles: number } }
  | { type: 'LOAD_STATS'; payload: PomodoroStats };

// ===== REDUCER =====
function pomodoroReducer(state: PomodoroState, action: PomodoroAction): PomodoroState {
  switch (action.type) {
    case 'TICK':
      if (state.mainTime <= 0) return state;
      return {
        ...state,
        mainTime: state.mainTime - 1,
        stats: state.mode === 'working'
          ? { ...state.stats, totalWorkTime: state.stats.totalWorkTime + 1 }
          : state.stats,
      };

    case 'START_WORK':
      return {
        ...state,
        mainTime: action.payload.time,
        isRunning: true,
        mode: 'working',
        cyclesRemaining: state.cyclesRemaining || action.payload.cycles,
      };

    case 'START_SHORT_REST':
      return {
        ...state,
        mainTime: action.payload.time,
        isRunning: true,
        mode: 'shortRest',
        stats: {
          ...state.stats,
          completedPomodoros: state.stats.completedPomodoros + 1,
        },
        cyclesRemaining: state.cyclesRemaining - 1,
      };

    case 'START_LONG_REST':
      return {
        ...state,
        mainTime: action.payload.time,
        isRunning: true,
        mode: 'longRest',
        stats: {
          ...state.stats,
          completedPomodoros: state.stats.completedPomodoros + 1,
          completedCycles: state.stats.completedCycles + 1,
        },
        cyclesRemaining: action.payload.cycles,
      };

    case 'TOGGLE_PAUSE':
      return {
        ...state,
        isRunning: !state.isRunning,
      };

    case 'RESET':
      return {
        ...state,
        mainTime: action.payload.time,
        isRunning: false,
        mode: 'idle',
        cyclesRemaining: action.payload.cycles,
      };

    case 'LOAD_STATS':
      return {
        ...state,
        stats: action.payload,
      };

    default:
      return state;
  }
}

// ===== STORAGE HELPERS =====
const STATS_KEY = 'pomodoro-stats';
const SETTINGS_KEY = 'pomodoro-settings';

function loadStats(): PomodoroStats {
  try {
    const saved = localStorage.getItem(STATS_KEY);
    if (saved) return JSON.parse(saved);
  } catch (e) {
    console.error('Failed to load stats:', e);
  }
  return { completedPomodoros: 0, completedCycles: 0, totalWorkTime: 0 };
}

function saveStats(stats: PomodoroStats): void {
  try {
    localStorage.setItem(STATS_KEY, JSON.stringify(stats));
  } catch (e) {
    console.error('Failed to save stats:', e);
  }
}

export function loadSettings(): PomodoroSettings | null {
  try {
    const saved = localStorage.getItem(SETTINGS_KEY);
    if (saved) return JSON.parse(saved);
  } catch (e) {
    console.error('Failed to load settings:', e);
  }
  return null;
}

export function saveSettings(settings: PomodoroSettings): void {
  try {
    localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
  } catch (e) {
    console.error('Failed to save settings:', e);
  }
}

// ===== NOTIFICATION HELPER =====
async function requestNotificationPermission(): Promise<boolean> {
  if (!('Notification' in window)) return false;
  if (Notification.permission === 'granted') return true;
  if (Notification.permission === 'denied') return false;

  const permission = await Notification.requestPermission();
  return permission === 'granted';
}

function showNotification(title: string, body: string): void {
  if (Notification.permission === 'granted') {
    new Notification(title, { body, icon: '🍅' });
  }
}

// ===== SOUNDS =====
// eslint-disable-next-line @typescript-eslint/no-var-requires
const bellStart = require('../sounds/bell-start.mp3');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const bellFinish = require('../sounds/bell-finish.mp3');

const audioStartWorking = new Audio(bellStart);
const audioStopWorking = new Audio(bellFinish);

// ===== HOOK =====
export function usePomodoroTimer(settings: PomodoroSettings) {
  const [state, dispatch] = useReducer(pomodoroReducer, {
    mainTime: settings.pomodoroTime,
    isRunning: false,
    mode: 'idle',
    cyclesRemaining: settings.cyclesBeforeLongRest,
    stats: loadStats(),
  });

  const savedCallback = useRef<() => void | undefined>(undefined);

  // Load stats on mount
  useEffect(() => {
    dispatch({ type: 'LOAD_STATS', payload: loadStats() });
    requestNotificationPermission();
  }, []);

  // Persist stats
  useEffect(() => {
    saveStats(state.stats);
  }, [state.stats]);

  // Interval tick
  const tick = useCallback(() => {
    dispatch({ type: 'TICK' });
  }, []);

  useEffect(() => {
    savedCallback.current = tick;
  }, [tick]);

  useEffect(() => {
    if (!state.isRunning) return;

    const id = setInterval(() => {
      savedCallback.current?.();
    }, 1000);

    return () => clearInterval(id);
  }, [state.isRunning]);

  // Handle timer completion
  useEffect(() => {
    if (state.mainTime > 0 || !state.isRunning) return;

    if (state.mode === 'working') {
      audioStopWorking.play();

      if (state.cyclesRemaining <= 1) {
        showNotification('🎉 Ciclo Completo!', 'Hora de um descanso longo.');
        dispatch({
          type: 'START_LONG_REST',
          payload: {
            time: settings.longRestTime,
            cycles: settings.cyclesBeforeLongRest,
          },
        });
      } else {
        showNotification('✅ Pomodoro Completo!', 'Hora de um descanso curto.');
        dispatch({
          type: 'START_SHORT_REST',
          payload: { time: settings.shortRestTime },
        });
      }
    } else if (state.mode === 'shortRest' || state.mode === 'longRest') {
      audioStartWorking.play();
      showNotification('💪 Hora de Trabalhar!', 'Descanso terminado.');
      dispatch({
        type: 'START_WORK',
        payload: {
          time: settings.pomodoroTime,
          cycles: settings.cyclesBeforeLongRest,
        },
      });
    }
  }, [state.mainTime, state.isRunning, state.mode, state.cyclesRemaining, settings]);

  // Actions
  const startWork = useCallback(() => {
    audioStartWorking.play();
    dispatch({
      type: 'START_WORK',
      payload: {
        time: settings.pomodoroTime,
        cycles: settings.cyclesBeforeLongRest,
      },
    });
  }, [settings.pomodoroTime, settings.cyclesBeforeLongRest]);

  const startRest = useCallback((long: boolean = false) => {
    audioStopWorking.play();
    if (long) {
      dispatch({
        type: 'START_LONG_REST',
        payload: {
          time: settings.longRestTime,
          cycles: settings.cyclesBeforeLongRest,
        },
      });
    } else {
      dispatch({
        type: 'START_SHORT_REST',
        payload: { time: settings.shortRestTime },
      });
    }
  }, [settings.shortRestTime, settings.longRestTime, settings.cyclesBeforeLongRest]);

  const togglePause = useCallback(() => {
    dispatch({ type: 'TOGGLE_PAUSE' });
  }, []);

  const reset = useCallback(() => {
    dispatch({
      type: 'RESET',
      payload: {
        time: settings.pomodoroTime,
        cycles: settings.cyclesBeforeLongRest,
      },
    });
  }, [settings.pomodoroTime, settings.cyclesBeforeLongRest]);

  // Progress calculation (0 to 1)
  const totalTime =
    state.mode === 'working' ? settings.pomodoroTime :
      state.mode === 'shortRest' ? settings.shortRestTime :
        state.mode === 'longRest' ? settings.longRestTime :
          settings.pomodoroTime;

  const progress = 1 - (state.mainTime / totalTime);

  return {
    mainTime: state.mainTime,
    isRunning: state.isRunning,
    mode: state.mode,
    stats: state.stats,
    progress,
    startWork,
    startRest,
    togglePause,
    reset,
  };
}
