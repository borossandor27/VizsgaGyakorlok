import React from 'react';

/**
 * Státusz sáv komponens
 * tipus: 'siker' | 'hiba' | 'info'
 */
function StatuszSav({ uzenet, tipus, onZar }) {
  if (!uzenet) return null;
  return (
    <div className={`statusz-sav ${tipus} fade-in`}>
      <span>{uzenet}</span>
      {onZar && (
        <button
          onClick={onZar}
          style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.1rem' }}
        >×</button>
      )}
    </div>
  );
}

export default StatuszSav;
