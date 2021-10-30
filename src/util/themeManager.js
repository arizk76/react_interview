import React, { useState, useEffect } from 'react';

export const ThemeContext = React.createContext();

export const ThemeProvider = ({ children }) => {
  // them will be Light or Dark
  const [theme, setTheme] = useState('light');
  const [themeState, setThemeState] = useState(false);

  const ToggleTheme = () => {
    setThemeState(!themeState);

    if (themeState) {
      setTheme('dark');
      localStorage.setItem('Theme', 'dark');
      document.body.classList.add('dark-mode');
    } else {
      setTheme('light');
      localStorage.setItem('Theme', 'light');
      document.body.classList.remove('dark-mode');
    }
  };

  useEffect(() => {
    const getTheme = localStorage.getItem('Theme');
    if (getTheme === 'dark') return document.body.classList.add('dark-mode');
  });

  return (
    <ThemeContext.Provider value={{ theme, ToggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
