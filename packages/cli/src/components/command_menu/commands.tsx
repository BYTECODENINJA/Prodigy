import type {command} from "./types.ts";
import {ThemeDialogContent} from "../dialogs/theme_dialog.tsx";

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
            ctx.toast.show({message: "Opening browser to initiate a login..."})
        }
    },
    {
        name: "logout",
        description: "Sign out Current account",
        value: "/logout",
        action: ctx => {
            ctx.toast.show({message: "Successfully signed out...", variant: "success"})
        }
    },
    {
        name: "theme",
        description: "Change theme",
        value: "/theme",
        action: ctx => {
           ctx.dialog.open({
               title: "Select Theme",
               children: <ThemeDialogContent/>
           })
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
        description: "Switch Agents",
        value: "/agents",
        action: ctx => {
            ctx.dialog.open({
                title: "Select Mode",
                children: <text>Agent Selection is comming soon...</text>
            })
        }
    },
    {
        name: "models",
        description: "Select AI model",
        value: "/model",
        action: ctx => {
            ctx.dialog.open({
                title: "Select Model",
                children: <text>Model Selection is coming soon...</text>
            })
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
            ctx.toast.show({message: "Opening usage metrics..."})
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