import type {command} from "./types.ts";

export const COMMANDS: command[] = [
    {
        name: "new",
        description: "Start new conversation",
        value: "/new",
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