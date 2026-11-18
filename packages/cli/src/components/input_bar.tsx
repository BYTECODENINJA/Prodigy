import {StatusBar} from "./status_bar.tsx";
import {type KeyBinding, TextareaRenderable} from "@opentui/core";
import {CommandMenu} from "./command_menu";
import {useCallback, useEffect, useRef} from "react";
import {useRenderer} from "@opentui/react";
import {useCommandMenu} from "./command_menu/use_command_menu.ts";
import type {command} from "./command_menu/types.ts";
import {useToast} from "../providers/toast";

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
    const textareaRef = useRef<TextareaRenderable>(null);
    const onsubmitRef = useRef<() => void>(() => {});
    const renderer = useRenderer();
    const toast = useToast();
    const {
        showCommandMenu,
        commandQuery,
        selectedIndex,
        scrollRef,
        handleContentChange,
        resolveCommand,
       setSelectedIndex
    } = useCommandMenu();

    const handleCommand = useCallback((
        command: command | undefined
    ) => {
        const textarea = textareaRef.current;
        if(!textarea || !command) return;

        textarea.setText("");

        if (command.action) {
            command.action({ exit: () => renderer.destroy(), toast, });
        } else {
            textarea.insertText(command.value + " ");
        }
    }, [renderer, toast]);

    const handleCommandExecute = useCallback((index: number) => {
       const command = resolveCommand(index);
       handleCommand(command)

        }, [resolveCommand, handleCommand],
    )

    const handleTextareaContentChange = useCallback(() => {
       const textarea = textareaRef.current;
       if(!textarea) return;

       handleContentChange(textarea.plainText);
    }, [handleContentChange]);

    const handleSubmit = useCallback(() => {
        if(!disabled) return;

        const textarea = textareaRef.current;
        if(!textarea) return;

        const text = textarea.plainText.trim();
        if (text.length === 0) return;

        onSubmit(text);
        textarea.setText("");
    }, [disabled, onSubmit]);

    useEffect(() => {
        const textarea = textareaRef.current;
        if (!textarea) return;

        textarea.onSubmit = () => {
            onsubmitRef.current();
        }
    }, []);

    onsubmitRef.current = () => {
        if (disabled) return;

        if (showCommandMenu) {
            const command = resolveCommand(selectedIndex);
            handleCommand(command);
            return;
        }

        handleSubmit();
    }

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
                {showCommandMenu && (
                    <box
                    position="absolute"
                    bottom="100%"
                    left={0}
                    width="100%"
                    backgroundColor="#1a1a24"
                    zIndex={10}>
                        <CommandMenu
                            query={commandQuery}
                            selectedIndex={selectedIndex}
                            scrollRef={scrollRef}
                            onSelect={setSelectedIndex}
                            onExecute={handleCommandExecute}
                        />
                    </box>
                )}
                <textarea
                    ref={textareaRef}
                    width="100%"
                    keyBindings={TEXT_AREA_KEY_BINDINGS}
                    onContentChange={handleTextareaContentChange}
                    focused={!disabled}
                    placeholder="Start a conversation.."
                />
                <StatusBar/>
            </box>
        </box>
    );
}