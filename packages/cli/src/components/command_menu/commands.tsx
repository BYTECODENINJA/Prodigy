import type {command} from "./types.ts";

export const COMMANDS: command[] = [
    {
        name: "new",
        description: "Start new conversation",
        value: "/new",
        action: ctx => {
            ctx.toast.show({message: "Starting a new conversation..."})
        }
    },
    {
        name: "login",
        description: "Login to your account",
        value: "/login",
        action: ctx => {
            ctx.toast.show({message: "Openning browser to initiate a login..."})
        }
    },
    {
        name: "logout",
        description: "Sign out Current account",
        value: "/logout",
        action: ctx => {
            ctx.toast.show({message: "Successfuly signed out...", variant: "success"})
        }
    },
    {
        name: "theme",
        description: "Change theme",
        value: "/theme",
        action: ctx => {
            ctx.toast.show({message: "Opening theme menu..."})
        }
    },
    {
        name: "sessions",
        description: "View your sessions",
        value: "/sessions",
        action: ctx => {
            ctx.toast.show({message: "Loading sessions..."})
        }
    },
    {
        name: "agents",
        description: "View and Manage your agents",
        value: "/agents",
        action: ctx => {
            ctx.toast.show({message: "Switching to agents..."})
        }
    },
    {
        name: "models",
        description: "Select AI model",
        value: "/model",
        action: ctx => {
            ctx.toast.show({message: "Selecting AI model..."})
        }
    },
    {
        name: "upgrade",
        description: "Purchase more credits",
        value: "/upgrade",
        action: ctx => {
            ctx.toast.show({message: "Opening credits checkout..."})
        }
    },
    {
     name: "usage",
     description: "View usage statistics",
     value: "/usage",
        action: ctx => {
            ctx.toast.show({message: "Openning usage metrics..."})
        }
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