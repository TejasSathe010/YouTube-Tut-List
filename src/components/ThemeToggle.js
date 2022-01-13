import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';


const ThemeToggle = () => {

    const { themeState, setThemeState } = useContext(ThemeContext);
    const { isLightTheme, light, dark } = themeState;
    const theme = isLightTheme ? light : dark;

    const changeTheme = () => {
        const newThemeState = {...themeState};
        newThemeState['isLightTheme'] = !isLightTheme;
        setThemeState(newThemeState);
    }

    return (
        <>
            <button onClick={changeTheme} style={{
                backgroundColor: theme.bg,
                color: theme.systax,
            }}>
                {isLightTheme ? 'Dark' : 'Light'}
            </button>
        </>
    )
}

export default ThemeToggle
