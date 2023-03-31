import React, { useState } from 'react';

function DarkModeButton() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function toggleDarkMode() {
    setIsDarkMode(!isDarkMode);
  }

  const backgroundColor = isDarkMode ? '#222' : '#fff';
  const color = isDarkMode ? '#fff' : '#222';

  return (
    <div style={{ backgroundColor, color }}>
      <button onClick={toggleDarkMode}>
        {isDarkMode ? 'Light mode' : 'Dark mode'}
      </button>
    
    </div>
  );
}

export default DarkModeButton;