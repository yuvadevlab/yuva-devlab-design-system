import { Button, Input } from "@yuva-devlab/ui";

const App: React.FC = () => {
  return (
    <div style={{ padding: "2rem" }}>
      <Button
        variant="primary"
        size="large"
      >
        Hello Yuva Devlab
      </Button>
      <Input
        label="Username"
        placeholder="Enter username"
        id="username"
      />
    </div>
  );
};

export default App;
