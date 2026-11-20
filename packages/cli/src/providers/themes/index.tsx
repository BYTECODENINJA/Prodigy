import {join} from "node:path";
import {homedir} from "node:os";
import {readFileSync} from "node:fs";
import {mkdirSync, writeFileSync} from "node:fs";
import {DEFAULT_THEME, type Theme, type ThemeColors, THEMES} from "../../theme.ts";
import {createContext, type ReactNode, useCallback, useContext, useState} from "react";

const CONFIG_DIR = join(homedir(), ".prodigy");
const THEME_PREFERENCIES_PATH = join(CONFIG_DIR, "themes.json");

type ThemePreferences = {
    themeName: string;
}

function getInitialTheme(): Theme {
   try {
       const preferenses = JSON.parse(
           readFileSync(THEME_PREFERENCIES_PATH, "utf-8")
       ) as Partial<ThemePreferences>;
       const savedTheme = THEMES.find((theme) => theme.name === preferenses.themeName);
       return savedTheme ?? DEFAULT_THEME;
   } catch {
       return DEFAULT_THEME;
   }
}

function persistTheme(theme: Theme) {
    try{
        mkdirSync(CONFIG_DIR, { recursive: true});
        writeFileSync(
            THEME_PREFERENCIES_PATH,
            JSON.stringify({themeName: theme.name} satisfies ThemePreferences,
            null, 2),
            {encoding: "utf-8"}
        );
    } catch {
        
    }
}

type ThemeContextValue = {
   colors: ThemeColors;
   currentTheme: Theme;
   setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function useTheme(): ThemeContextValue {
    const value = useContext(ThemeContext);
    if (!value) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return value;
}

type ThemeProviderProps = {
    children: ReactNode;
}

export function ThemeProvider({ children}: ThemeProviderProps) {
    const [currentTheme, setCurrentTheme] = useState<Theme>(getInitialTheme());

    const setTheme = useCallback((theme: Theme) => {
        setCurrentTheme(theme);
        persistTheme(theme);
    }, []);

    return (
        <ThemeContext.Provider
            value={{colors: currentTheme.colors, currentTheme,
                setTheme}}>
            {children}
        </ThemeContext.Provider>
    );
}