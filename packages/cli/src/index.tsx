import { createCliRenderer } from "@opentui/core";
import { createRoot } from "@opentui/react";
import { DateTime } from "./components/date_time.tsx";
import { Header } from "./components/header.tsx";
import { InputBar } from "./components/input_bar.tsx";

function App() {
  return (
    <box
      flexDirection="column"
      justifyContent="space-between"
      alignItems="center"
      backgroundColor="#0d0d12"
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
          <InputBar onSubmit={() => {}} />
        </box>
      </box>
    </box>
  );
}

const renderer = await createCliRenderer();
createRoot(renderer).render(<App />);
