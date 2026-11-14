import {StatusBar} from "./status_bar.tsx";

type Props = {
    onSubmit: (text: string) => void;
    disabled?: boolean;
    maxWidth?: number | `${number}%` | "auto";
};

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
            >
                <textarea
                    width="100%"
                    focused={!disabled}
                    placeholder="Start a conversation.."
                />
                <StatusBar/>
            </box>
        </box>
    );
}