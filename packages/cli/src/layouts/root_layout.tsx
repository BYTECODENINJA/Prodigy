import {ThemeProvider} from "../providers/themes";
import {ToastProvider} from "../providers/toast";
import {KeyboardLayerProvider} from "../providers/keyboard_layer";
import {DialogProvider} from "../providers/dialog";
import {ThemeRoot} from "./themed_root.tsx";
import {Outlet} from "react-router";

export function RootLayout() {
    return (
        <ThemeProvider>
            <ToastProvider>
                <KeyboardLayerProvider>
                    <DialogProvider>
                        <ThemeRoot>
                            <Outlet />
                        </ThemeRoot>
                    </DialogProvider>
                </KeyboardLayerProvider>
            </ToastProvider>
        </ThemeProvider>
    )
 }