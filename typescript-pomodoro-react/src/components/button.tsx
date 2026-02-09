import React from 'react';

interface Props {
  text: string;
  onClick?: () => void;
  className?: string;
  children?: React.ReactNode;
}

export function Button({ text, onClick, className = '', children }: Props) {
  return (
    <button onClick={onClick} className={className}>
      {children || text}
    </button>
  );
}
