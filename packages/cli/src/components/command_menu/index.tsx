import {COMMANDS} from "./commands.tsx";
import type {RefObject} from "react";
import {ScrollBoxRenderable, TextAttributes} from "@opentui/core";
import {getFilteredCommands} from "./filter_commands.ts";

const MAX_VISIBLE_COMMANDS = 8;

const COMMAND_COL_WIDTH = Math.max(...COMMANDS.map((command) => command.name.length)) + 4;

type CommandMenuProps = {
    query: string;
    selectedIndex?: number;
    scrollRef?: RefObject<ScrollBoxRenderable | null>;
    onSelect?: (index: number) => void;
    onExecute?: (index: number) => void;
}

export function CommandMenu({
    query,
    selectedIndex,
    scrollRef,
    onSelect,
    onExecute,
                            }: CommandMenuProps) {
    const filtered = getFilteredCommands(query)
    const visibleHeight = Math.min(filtered.length, MAX_VISIBLE_COMMANDS);

    if (filtered.length === 0) {
        return (
            <box paddingX={1}>
                <text attributes={TextAttributes.DIM}>
                    No matching commands
                </text>
            </box>
        )
    }

    return (
        <scrollbox
        ref={scrollRef} height={visibleHeight}>
            {filtered.map((command, i) =>{
                const isSelected = i === selectedIndex;
                return (
                    <box
                        paddingX={1}
                        key={command.value}
                        overflow="hidden"
                        flexDirection="row"
                        height={1}
                        backgroundColor={isSelected ? '#89b4fa' : undefined}
                        onMouseMove={() => onSelect?.(i)}
                        onMouseDown={() => onExecute?.(i)}
                    >
                        <box width={COMMAND_COL_WIDTH} flexShrink={0}>
                            <text selectable={false} fg={isSelected ? "black" : "white"}>
                                /{command.name}
                            </text>
                        </box>
                        <box flexGrow={1} flexShrink={1} overflow="hidden">
                            <text selectable={false} fg={isSelected ? "black" : "gray"}>
                                {command.description}
                            </text>
                        </box>
                    </box>
                )
            })}
        </scrollbox>
    )
}