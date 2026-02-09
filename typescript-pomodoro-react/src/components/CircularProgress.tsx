import React from 'react';

interface Props {
  progress: number; // 0 to 1
  size?: number;
  strokeWidth?: number;
}

export function CircularProgress({ progress, size = 280, strokeWidth = 8 }: Props) {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress * circumference);

  // Generate clock markers (12 major, 60 minor positions)
  const markers = [];
  for (let i = 0; i < 60; i++) {
    const isMajor = i % 5 === 0;
    const rotation = i * 6; // 360 / 60 = 6 degrees per marker
    markers.push(
      <div
        key={i}
        className={`clock-marker ${isMajor ? 'major' : ''}`}
        style={{ transform: `rotate(${rotation}deg)` }}
      />
    );
  }

  return (
    <div className="circular-progress" style={{ width: size, height: size }}>
      <svg viewBox={`0 0 ${size} ${size}`}>
        {/* Background track */}
        <circle
          className="track"
          cx={size / 2}
          cy={size / 2}
          r={radius}
        />
        {/* Progress arc */}
        <circle
          className="progress"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
        />
      </svg>
      {/* Clock markers */}
      <div className="clock-markers">
        {markers}
      </div>
    </div>
  );
}
