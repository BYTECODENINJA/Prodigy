import type {ToastContextValue} from "../../providers/toast";
import type {DialogContextValue} from "../../providers/dialog";

export type CommandContext = {
    exit: () => void;
    toast: ToastContextValue;
    dialog: DialogContextValue;
}

export type command = {
    name: string;
    description: string;
    value: string;
    action?: (ctx: CommandContext) => void | Promise<void>;
}