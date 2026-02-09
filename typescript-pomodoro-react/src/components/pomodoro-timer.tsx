import React, { useEffect, useState, useCallback } from 'react';
import { usePomodoroTimer, PomodoroSettings, loadSettings } from '../hooks/usePomodoroTimer';
import { Button } from './button';
import { Timer } from './timer';
import { CircularProgress } from './CircularProgress';
import { Settings } from './Settings';
import { secondsToTime } from '../utils/seconds-to-time';

interface Props {
  pomodoroTime: number;
  shortRestTime: number;
  longRestTime: number;
  cycles: number;
}

const DEFAULT_SETTINGS: PomodoroSettings = {
  pomodoroTime: 1500, // 25 min
  shortRestTime: 300, // 5 min
  longRestTime: 900, // 15 min
  cyclesBeforeLongRest: 4,
};

export function PomodoroTimer(props: Props) {
  const [settings, setSettings] = useState<PomodoroSettings>(() => {
    const saved = loadSettings();
    return saved || {
      pomodoroTime: props.pomodoroTime,
      shortRestTime: props.shortRestTime,
      longRestTime: props.longRestTime,
      cyclesBeforeLongRest: props.cycles,
    };
  });

  const [showSettings, setShowSettings] = useState(false);

  const {
    mainTime,
    isRunning,
    mode,
    stats,
    progress,
    startWork,
    startRest,
    togglePause,
    reset,
  } = usePomodoroTimer(settings);

  // Update body class based on mode
  useEffect(() => {
    document.body.classList.remove('working', 'resting');
    if (mode === 'working') {
      document.body.classList.add('working');
    } else if (mode === 'shortRest' || mode === 'longRest') {
      document.body.classList.add('resting');
    }
  }, [mode]);

  // Keyboard shortcuts
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.target instanceof HTMLInputElement) return;

    if (e.code === 'Space') {
      e.preventDefault();
      if (mode === 'idle') {
        startWork();
      } else {
        togglePause();
      }
    }
    if (e.code === 'KeyR' && e.shiftKey) {
      e.preventDefault();
      reset();
    }
  }, [mode, startWork, togglePause, reset]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  const getStatusText = () => {
    switch (mode) {
      case 'working':
        return 'Trabalhando';
      case 'shortRest':
        return 'Descanso Curto';
      case 'longRest':
        return 'Descanso Longo';
      default:
        return 'Pronto';
    }
  };

  const handleSettingsSave = (newSettings: PomodoroSettings) => {
    setSettings(newSettings);
  };

  return (
    <div className="pomodoro">
      <button
        className="settings-toggle"
        onClick={() => setShowSettings(true)}
        aria-label="Configurações"
      >
        ⚙️
      </button>

      <h2>
        Você está: <span className="status">{getStatusText()}</span>
      </h2>

      <div className="timer-container">
        <CircularProgress progress={progress} />
        <Timer mainTime={mainTime} />
      </div>

      <div className="controls">
        <Button
          text="Trabalhar"
          className="danger"
          onClick={startWork}
        />
        <Button
          text="Descanso"
          className="primary"
          onClick={() => startRest(false)}
        />
        <Button
          text={isRunning ? '⏸' : '▶'}
          className={`icon-btn ${mode === 'idle' ? 'hidden' : ''}`}
          onClick={togglePause}
        />
      </div>

      <p className="keyboard-hint">
        Pressione <kbd>Espaço</kbd> para play/pause
      </p>

      <div className="details">
        <p>
          Ciclos concluídos
          <span>{stats.completedCycles}</span>
        </p>
        <p>
          Horas trabalhadas
          <span>{secondsToTime(stats.totalWorkTime)}</span>
        </p>
        <p>
          Pomodoros concluídos
          <span>{stats.completedPomodoros}</span>
        </p>
      </div>

      {showSettings && (
        <Settings
          settings={settings}
          onSave={handleSettingsSave}
          onClose={() => setShowSettings(false)}
        />
      )}
    </div>
  );
}
