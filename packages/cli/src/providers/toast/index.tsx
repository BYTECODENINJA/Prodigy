import {DEFAULT_TOAST_DURATION, type ToastOptions, type ToastVariant} from "./types.ts";
import {createContext, type ReactNode, useCallback, useContext, useRef, useState} from "react";
import {useTerminalDimensions} from "@opentui/react";


export type ToastContextValue = {
    show: (options: ToastOptions) => void;
}

const toastContext = createContext<ToastContextValue | null>(null);

export function useToast(): ToastContextValue {
    const value = useContext(toastContext);
    if (!value) {
        throw new Error("useToast must be used within a ToastProvider");
    }

    return value;
};

type ToastProviderProps = {
    children: ReactNode;
};

export function ToastProvider({children}: ToastProviderProps) {
    const [currentToast, setCurrentToast] = useState<ToastOptions | null>(null);
    const timeoutHandleRef = useRef<NodeJS.Timeout | null>(null);

    const clearCurrentTimeout = useCallback(() => {
        if (timeoutHandleRef.current) {
            clearTimeout(timeoutHandleRef.current);
            timeoutHandleRef.current = null;
        }
    }, [])

    const show = useCallback((options: ToastOptions) => {
        const duration = options.duration ?? DEFAULT_TOAST_DURATION;

        clearCurrentTimeout();
        setCurrentToast({
            variant: options.variant ?? "info",
            ...options,
            duration,
        })

        timeoutHandleRef.current = setTimeout(() => {
            setCurrentToast(null);
        }, duration).unref();
    }, [clearCurrentTimeout])

    const value: ToastContextValue = {
        show,
    }

    return (
        <toastContext.Provider value={value}>
            {children}
            <Toast currentToast={currentToast} />
        </toastContext.Provider>
    )
}

type ToastProps = {
    currentToast: ToastOptions | null;
}

function Toast({currentToast}: ToastProps) {
    const {width} = useTerminalDimensions();

    if (!currentToast) {
        return null;
    }

    const variantColors: Record<ToastVariant, string> = {
        info: "bg-blue-500",
        success: "bg-green-500",
        error: "bg-red-500",
    }

    const borderColor = currentToast.variant
    ? variantColors[currentToast.variant]
    : variantColors.info;

    return (
       <box
       position="absolute"
       justifyContent="center"
       alignItems="flex-start"
       top={2}
       right={2}
       width={Math.max(1, Math.min(60, width - 6))}
       paddingLeft={2}
       paddingRight={2}
       paddingTop={1}
       paddingBottom={1}
       borderColor={borderColor}
       backgroundColor="#1a1a24"
       border={["left", "right"]}
       >
           <box flexDirection="column" gap={1} width="100%">
               <text fg="#e1e1e1" wrapMode="word" width="100%">
                   {currentToast.message}
               </text>
           </box>
       </box>
    );
};