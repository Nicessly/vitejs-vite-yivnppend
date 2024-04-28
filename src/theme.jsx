import React, { useState } from 'react';
import { Brightness6 as Brightness6Icon, DarkMode as DarkModeIcon } from '@mui/icons-material';

function ThemePage() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    // Aquí puedes guardar el estado del tema en localStorage o en el estado global de la aplicación
  };

  return (
    <div className={`theme-page ${darkMode ? 'dark-theme' : 'light-theme'}`}>
      <button onClick={toggleDarkMode}>
        {darkMode ? <Brightness6Icon /> : <DarkModeIcon />}
      </button>
    </div>
  );
}

export default ThemePage;
