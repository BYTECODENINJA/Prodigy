import {useLocation, useNavigate} from "react-router";
import {useTheme} from "../providers/themes";
import {useEffect} from "react";
import {SessionShell} from "../components/session_shell.tsx";
import {UserMessage} from "../components/message/user_message.tsx";
import {BotMessage} from "../components/message/bot_message.tsx";

export function NewSession() {
    const navigate = useNavigate();
    const location = useLocation();
    const { colors } = useTheme();
    const state = location.state as {message?: string} | null;

    useEffect(() => {
        if (!state?.message) {
            navigate("/", { replace: true });
        }
    }, [state, navigate]);

    if (!state?.message) return null;

    return (
        <SessionShell onSubmit={() => {}} inputDisabled loading>
            <UserMessage message={state.message} />
            <BotMessage
                content="This is a simple bot responseto demonstrate layout"
                model="0pus-4-6"
            />
        </SessionShell>
    )
}