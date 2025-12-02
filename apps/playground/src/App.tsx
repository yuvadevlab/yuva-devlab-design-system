import { Button, ThemeProvider } from "@yuva-devlab/ui";

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <div style={{ padding: "2rem" }}>
        <Button variant="primary">Hello Yuva Devlab</Button>
      </div>
    </ThemeProvider>
  );
};

export default App;
