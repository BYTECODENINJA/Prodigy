import type {command} from "./types.ts";
import {COMMANDS} from "./commands.tsx";

export function getFilteredCommands(query: string): command[] {
    if (query.length === 0) return COMMANDS;
    return COMMANDS.filter((command) => command.name.toLowerCase().startsWith(query.toLowerCase()));
}