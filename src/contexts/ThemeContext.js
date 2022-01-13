import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

const ThemeContextProvider = ({children}) => {

    const [themeState, setThemeState] = useState({
        isLightTheme: true,
        light: {systax: '#555', ui: '#ddd', bg: '#eee'},
        dark: {systax: '#ddd', ui: '#333', bg: '#555'}
    })

    return (
        <ThemeContext.Provider value={{
            themeState, setThemeState
        }}>
            { children }
        </ThemeContext.Provider>
    );
}

export default ThemeContextProvider;
