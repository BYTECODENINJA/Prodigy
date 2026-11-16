import {StatusBar} from "./status_bar.tsx";
import type {KeyBinding} from "@opentui/core";
import {CommandMenu} from "./command_menu";

type Props = {
    onSubmit: (text: string) => void;
    disabled?: boolean;
    maxWidth?: number | `${number}%` | "auto";
};

export const TEXT_AREA_KEY_BINDINGS: KeyBinding[] =[
    {name: "return", action: "submit" },
    {name: "enter", action: "submit" },
    {name: "return", shift: true, action: "newline"},
    {name: "enter", shift: true, action: "newline"}
]

export function InputBar({onSubmit, disabled, maxWidth}: Props){
    return (
        <box width="100%" alignItems="center" justifyContent="center">
            <box
                position="relative"
                alignItems="center"
                justifyContent="center"
                paddingX={2}
                paddingY={1}
                backgroundColor="black"
                width="100%"
                maxWidth={maxWidth}
                gap={1}
                border={["left"]}
                borderColor="cyan"
            >
                {true && (
                    <box
                    position="absolute"
                    bottom="100%"
                    left={0}
                    width="100%"
                    backgroundColor="#1a1a24"
                    zIndex={10}>
                        <CommandMenu query=""/>
                    </box>
                )}
                <textarea
                    width="100%"
                    keyBindings={TEXT_AREA_KEY_BINDINGS}
                    focused={!disabled}
                    placeholder="Start a conversation.."
                />
                <StatusBar/>
            </box>
        </box>
    );
}