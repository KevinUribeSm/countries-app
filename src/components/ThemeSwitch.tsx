import { useTheme } from "@/context/ThemeContext";

const ThemeSwitch = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <label className="relative inline-flex items-center cursor-pointer">
            <input
                type="checkbox"
                checked={theme === 'dark'}
                onChange={toggleTheme}
                className="sr-only"
            />
            <span className="w-11 h-6 bg-gray-200 dark:bg-gray-600 rounded-full"></span>
            <span
                className={`dot absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition ${theme === 'dark' ? 'translate-x-5' : 'translate-x-0'}`}
            ></span>
            <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-100">
                {theme === 'dark' ? 'Modo Oscuro 🌙 ' : 'Modo Claro 🌞'}
            </span>
        </label>
    );
};

export default ThemeSwitch;
