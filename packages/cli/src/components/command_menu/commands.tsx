import type {command} from "./types.ts";

export const COMMANDS: command[] = [
    {
        name: "new",
        description: "Start new conversation",
        value: "/new",
    },
    {
        name: "login",
        description: "Login to your account",
        value: "/login",
    },
    {
        name: "logout",
        description: "Sign out Current account",
        value: "/logout",
    },
    {
        name: "theme",
        description: "Change theme",
        value: "/theme",
    },
    {
        name: "sessions",
        description: "View your sessions",
        value: "/sessions",
    },
    {
        name: "agents",
        description: "View and Manage your agents",
        value: "/agents",
    },
    {
        name: "models",
        description: "Select AI model",
        value: "/model",
    },
    {
        name: "upgrade",
        description: "Purchase more credits",
        value: "/upgrade",
    },
    {
     name: "usage",
     description: "View usage statistics",
     value: "/usage",
    },
    {
        name: "help",
        description: "Show this help message",
        value: "/help",
    },
    {
        name: "exit",
        description: "Quit the app",
        value: "/exit",
        action: (ctx) => {
            ctx.exit()
        }
    }
]