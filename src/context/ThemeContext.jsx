import {
    createContext,
    useState
} from "react";

export const ThemeContext = createContext();

export function ThemeProvider({children}){
    const [theme,setTheme]=useState('dark');
    function toggleTheme(){
        if (theme==='light'){
            setTheme('dark');
            document.documentElement.classList.remove('light');
        }else{
            setTheme('light');
            document.documentElement.classList.add('light');
        }
    }

    return(
        <ThemeContext.Provider value={{
            theme,
            toggleTheme
        }}>
            {children}
        </ThemeContext.Provider>
    )
}