import { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext';

const TutList = () => {

    const { themeState, setThemeState } = useContext(ThemeContext);
    const { isLightTheme, light, dark } = themeState;
    const theme = isLightTheme ? light : dark;

    return (
        <div className="tut-list" style={{
            backgroundColor: theme.bg,
            color: theme.systax,
            
        }}>
            <ul>
                <li style={{backgroundColor: theme.ui}}>React Js</li>
                <li style={{backgroundColor: theme.ui}}>React Hooks</li>
                <li style={{backgroundColor: theme.ui}}>Redux</li>
            </ul>
        </div>
    )
}

export default TutList
