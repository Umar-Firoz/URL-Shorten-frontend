import { Moon, Sun } from 'lucide-react';
import {useContext} from "react";
import {ThemeContext} from '../../context/ThemeContext';

export function ThemeToggle() {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <button
            onClick={toggleTheme}
            className="flex items-center justify-center p-3 cursor-pointer"
        >
            {theme === 'dark' ? <Sun /> : <Moon />}
        </button>
    );
}