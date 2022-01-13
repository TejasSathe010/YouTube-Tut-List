import { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext';

const Navbar = () => {

    const { themeState, setThemeState } = useContext(ThemeContext);
    const { isLightTheme, light, dark } = themeState;
    const theme = isLightTheme ? light : dark;

    return (
        <nav style={{
            backgroundColor: theme.ui,
            color: theme.systax,

        }}>
            <h1>Context App</h1>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    )
}

export default Navbar
