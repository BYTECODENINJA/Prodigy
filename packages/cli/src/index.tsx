import { createCliRenderer } from "@opentui/core";
import { createRoot } from "@opentui/react";
import { DateTime } from "./components/date_time.tsx";
import { Header } from "./components/header.tsx";
import { InputBar } from "./components/input_bar.tsx";
import {ToastProvider} from "./providers/toast";
import {KeyboardLayerProvider} from "./providers/keyboard_layer";
import {DialogProvider} from "./providers/dialog";
import {ThemeProvider, useTheme} from "./providers/themes";

function ThemeRoot() {
  const { colors } = useTheme();

  return (
      <box
          flexDirection="column"
          justifyContent="space-between"
          alignItems="center"
          backgroundColor={colors.background}
          width="100%"
          height="100%"
          paddingTop={1}
          paddingBottom={1}
      >
        <DateTime />
        <box
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            flexGrow={1}
            gap={2}
            width="100%"
        >
          <Header />
          <box
              width="100%"
              maxWidth={78}
              paddingX={2}
              alignItems="center"
              justifyContent="center"
          >
            <InputBar onSubmit={() => {}} maxWidth={78} />
          </box>
        </box>
      </box>
  )
}

function App() {
  return (
      <ThemeProvider>
        <KeyboardLayerProvider>
          <DialogProvider>
            <ToastProvider>
              <ThemeRoot />
            </ToastProvider>
          </DialogProvider>
        </KeyboardLayerProvider>
      </ThemeProvider>
  );
}

const renderer = await createCliRenderer({
  targetFps: 60,
  exitOnCtrlC: false,
});
createRoot(renderer).render(<App />);
