import { Button, ConfigProvider, ThemeProvider } from "@yuva-devlab/ui";

const App: React.FC = () => {
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
        <Button variant="primary">Hello Yuva Devlab</Button>
      </ConfigProvider>
    </ThemeProvider>
  );
};

export default App;
