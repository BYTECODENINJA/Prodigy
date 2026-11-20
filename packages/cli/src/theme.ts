export type ThemeColors = {
    primary: string;
    planMode: string;
    selection: string;
    thinking: string;
    success: string;
    error: string;
    info: string;
    background: string;
    surface: string;
    dialogSurface: string;
    thinkingBorder: string;
    dimSeparator: string;
}

export type Theme = {
    name: string;
    colors: ThemeColors;
}

export const THEMES: Theme[] = [
    {
        name: "NightFox",
        colors: {
            primary: "#56D6C2",
            planMode: "#CF8EF4",
            selection: "#89B4FA",
            thinking: "#CF8EF4",
            success: "#82E0AA",
            error: "#E74C5E",
            info: "#56D6C2",
            background: "#0D0D12",
            surface: "#1A1A24",
            dialogSurface: "#0A0A10",
            thinkingBorder: "#34344A",
            dimSeparator: "#4E4E66",
        }
    },
    {
        name: "Dracula Dark",
        colors: {
            primary: "#BD93F9",
            planMode: "#FF79C6",
            selection: "#44475A",
            thinking: "#FF79C6",
            success: "#50FA7B",
            error: "#FF5555",
            info: "#8BE9FD",
            background: "#282A36",
            surface: "#343746",
            dialogSurface: "#21222C",
            thinkingBorder: "#6272A4",
            dimSeparator: "#44475A"
        }
    },
    {
        name: "Alucard",
        colors: {
            primary: "#644AC9",
            planMode: "#A3144D",
            selection: "#CFCFDE",
            thinking: "#A3144D",
            success: "#14710A",
            error: "#CB3A2A",
            info: "#036A96",
            background: "#FFFBEB",
            surface: "#F5F1E0",
            dialogSurface: "#EBE7D5",
            thinkingBorder: "#9F9D91",
            dimSeparator: "#CFCFDE"
        }
    },
    {
        name: "Catppucin Mocha",
        colors: {
            primary: "#CBA6F7",
            planMode: "#F5C2E7",
            selection: "#89B4FA",
            thinking: "#F5C2E7",
            success: "#A6E3A1",
            error: "#F38BA8",
            info: "#94E2D5",
            background: "#1E1E2E",
            surface: "#313244",
            dialogSurface: "#181825",
            thinkingBorder: "#45475A",
            dimSeparator: "#585B70"
        }
    },
    {
        name: "Catppucin Latte",
        colors: {
            primary: "#8839EF",
            planMode: "#EA76CB",
            selection: "#1E66F5",
            thinking: "#EA76CB",
            success: "#40A02B",
            error: "#D20F39",
            info: "#179299",
            background: "#EFF1F5",
            surface: "#E6E9EF",
            dialogSurface: "#DCE0E8",
            thinkingBorder: "#CCD0DA",
            dimSeparator: "#BCC0CC"
        }
    },
    {
        name: "Gruvbox Dark",
        colors: {
            primary: "#8839EF",
            planMode: "#EA76CB",
            selection: "#1E66F5",
            thinking: "#EA76CB",
            success: "#40A02B",
            error: "#D20F39",
            info: "#179299",
            background: "#EFF1F5",
            surface: "#E6E9EF",
            dialogSurface: "#DCE0E8",
            thinkingBorder: "#CCD0DA",
            dimSeparator: "#BCC0CC"
        }
    },
    {
        name: "Gruvbox Light",
        colors: {
            primary: "#AF3A03",
            planMode: "#8F3F71",
            selection: "#076678",
            thinking: "#8F3F71",
            success: "#79740E",
            error: "#9D0006",
            info: "#427B58",
            background: "#FBF1C7",
            surface: "#EBDBB2",
            dialogSurface: "#F2E5BC",
            thinkingBorder: "#D5C4A1",
            dimSeparator: "#BDAE93"
        }
    },
    {
        name: "Everforest Dark",
        colors: {
            primary: "#A7C080",
            planMode: "#D699B6",
            selection: "#7FBBB3",
            thinking: "#D699B6",
            success: "#A7C080",
            error: "#E67E80",
            info: "#83C092",
            background: "#2D353B",
            surface: "#343F44",
            dialogSurface: "#232A2E",
            thinkingBorder: "#475258",
            dimSeparator: "#4F585E"
        }
    },
    {
        name: "Everforest Light",
        colors: {
            primary: "#8DA101",
            planMode: "#DF69BA",
            selection: "#3A94C5",
            thinking: "#DF69BA",
            success: "#8DA101",
            error: "#F85552",
            info: "#35A77C",
            background: "#FDF6E3",
            surface: "#F4F0D9",
            dialogSurface: "#EFEBD4",
            thinkingBorder: "#E0DCC7",
            dimSeparator: "#D3C6AA"
        }
    },
    {
        name: "Nord Dark",
        colors: {
            primary: "#88C0D0",
            planMode: "#B48EAD",
            selection: "#81A1C1",
            thinking: "#B48EAD",
            success: "#A3BE8C",
            error: "#BF616A",
            info: "#8FBCBB",
            background: "#2E3440",
            surface: "#3B4252",
            dialogSurface: "#242933",
            thinkingBorder: "#434C5E",
            dimSeparator: "#4C566A"
        }
    },
    {
        name: "Nord Light",
        colors: {
            primary: "#5E81AC",
            planMode: "#B48EAD",
            selection: "#81A1C1",
            thinking: "#B48EAD",
            success: "#A3BE8C",
            error: "#BF616A",
            info: "#88C0D0",
            background: "#ECEFF4",
            surface: "#E5E9F0",
            dialogSurface: "#D8DEE9",
            thinkingBorder: "#CBD2E0",
            dimSeparator: "#B8C2D4"
        }
    }
];