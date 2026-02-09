import React, { useState } from 'react';
import { PomodoroSettings, saveSettings } from '../hooks/usePomodoroTimer';

interface Props {
  settings: PomodoroSettings;
  onSave: (settings: PomodoroSettings) => void;
  onClose: () => void;
}

export function Settings({ settings, onSave, onClose }: Props) {
  const [pomodoroMinutes, setPomodoroMinutes] = useState(settings.pomodoroTime / 60);
  const [shortRestMinutes, setShortRestMinutes] = useState(settings.shortRestTime / 60);
  const [longRestMinutes, setLongRestMinutes] = useState(settings.longRestTime / 60);
  const [cycles, setCycles] = useState(settings.cyclesBeforeLongRest);

  const handleSave = () => {
    const newSettings: PomodoroSettings = {
      pomodoroTime: pomodoroMinutes * 60,
      shortRestTime: shortRestMinutes * 60,
      longRestTime: longRestMinutes * 60,
      cyclesBeforeLongRest: cycles,
    };
    saveSettings(newSettings);
    onSave(newSettings);
    onClose();
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal">
        <h3>⚙️ Configurações</h3>

        <div className="form-group">
          <label>Tempo de Foco (min)</label>
          <input
            type="number"
            min={1}
            max={120}
            value={pomodoroMinutes}
            onChange={(e) => setPomodoroMinutes(Number(e.target.value))}
          />
        </div>

        <div className="form-group">
          <label>Descanso Curto (min)</label>
          <input
            type="number"
            min={1}
            max={30}
            value={shortRestMinutes}
            onChange={(e) => setShortRestMinutes(Number(e.target.value))}
          />
        </div>

        <div className="form-group">
          <label>Descanso Longo (min)</label>
          <input
            type="number"
            min={1}
            max={60}
            value={longRestMinutes}
            onChange={(e) => setLongRestMinutes(Number(e.target.value))}
          />
        </div>

        <div className="form-group">
          <label>Pomodoros por Ciclo</label>
          <input
            type="number"
            min={1}
            max={10}
            value={cycles}
            onChange={(e) => setCycles(Number(e.target.value))}
          />
        </div>

        <div className="modal-actions">
          <button onClick={onClose}>Cancelar</button>
          <button className="primary" onClick={handleSave}>Salvar</button>
        </div>
      </div>
    </div>
  );
}
