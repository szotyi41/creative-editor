import React from 'react';

export const ToolbarRow = ({ children }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        boxSizing: 'border-box',
        width: 'calc(100% + 8px)',
        margin: '-4px',
      }}
    >
      {children}
    </div>
  );
};
