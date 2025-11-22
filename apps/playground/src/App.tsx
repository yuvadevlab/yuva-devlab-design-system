import { Button, ConfigProvider, ThemeProvider } from "@yuva-devlab/ui";

const App = () => {
  return (
    <ThemeProvider>
      <ConfigProvider
        theme={{
          tokens: {
            color: {
              accentPrimary: "#22c55e",
            },
          },
        }}
      >
        <div style={{ padding: 24 }}>
          <Button variant="primary">Hello Yuva Devlab</Button>
          <div style={{ padding: 20, display: "flex", gap: 10 }}>
            <Button variant="primary">Primary</Button>
            <Button variant="default">Default</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
          </div>
        </div>
      </ConfigProvider>
    </ThemeProvider>
  );
};

export default App;
