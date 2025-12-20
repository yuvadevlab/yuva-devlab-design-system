import { Button, Input, Typography } from "@yuva-devlab/ui";

const App: React.FC = () => {
  return (
    <div
      style={{
        padding: "40px",
        display: "flex",
        flexDirection: "column",
        gap: "48px",
      }}
    >
      <Typography variant="h2">YUVA DevLab UI Demo</Typography>

      {/* Shapes & Morphing Section */}
      <section>
        <Typography
          variant="h4"
          style={{ marginBottom: "20px" }}
        >
          Shape Morphing (Press to see transition)
        </Typography>
        <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
          <Button
            variant="primary"
            shape="round"
            morph
          >
            Round Style (Morphs with prop)
          </Button>
          <Button
            variant="tonal"
            shape="square"
            morph
          >
            Square Style (Morphs with prop)
          </Button>
          <Button
            variant="outlined"
            shape="round"
          >
            Round (No Morph)
          </Button>
        </div>
      </section>

      {/* Sizes Section */}
      <section>
        <Typography
          variant="h4"
          style={{ marginBottom: "20px" }}
        >
          Extended Sizes
        </Typography>
        <div
          style={{
            display: "flex",
            gap: "12px",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <Button
            size="xs"
            variant="filled"
          >
            Extra Small
          </Button>
          <Button
            size="sm"
            variant="filled"
          >
            Small
          </Button>
          <Button
            size="md"
            variant="filled"
          >
            Medium (Default)
          </Button>
          <Button
            size="lg"
            variant="filled"
          >
            Large
          </Button>
          <Button
            size="xl"
            variant="filled"
          >
            Extra Large
          </Button>
        </div>
      </section>

      {/* Widths Section */}
      <section>
        <Typography
          variant="h4"
          style={{ marginBottom: "20px" }}
        >
          Width Variations
        </Typography>
        <div
          style={{
            display: "flex",
            gap: "16px",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <Button
            width="narrow"
            variant="outlined"
          >
            Narrow Padding
          </Button>
          <Button
            width="default"
            variant="outlined"
          >
            Default Padding
          </Button>
          <Button
            width="wide"
            variant="outlined"
          >
            Wide Padding
          </Button>
        </div>
      </section>

      {/* Variants Section */}
      <section>
        <Typography
          variant="h4"
          style={{ marginBottom: "20px" }}
        >
          Modern Variants
        </Typography>
        <div
          style={{
            display: "flex",
            gap: "16px",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <Button variant="elevated">Elevated</Button>
          <Button variant="filled">Filled</Button>
          <Button variant="tonal">Tonal</Button>
          <Button variant="outlined">Outlined</Button>
          <Button variant="text">Text</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="tertiary">Tertiary</Button>
        </div>
      </section>

      <section>
        <Typography
          variant="h4"
          style={{ marginBottom: "20px" }}
        >
          Legacy & Utility Variants
        </Typography>
        <div
          style={{
            display: "flex",
            gap: "16px",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <Button variant="primary">Primary</Button>
          <Button variant="default">Default</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
          <Button danger>Danger Action</Button>
          <Button loading>Loading State</Button>
        </div>
      </section>

      {/* Inputs Section */}
      <section style={{ maxWidth: "400px" }}>
        <Typography
          variant="h4"
          style={{ marginBottom: "20px" }}
        >
          Form Controls
        </Typography>
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <Input
            label="Email Address"
            placeholder="yuva@devlab.com"
            helperText="We'll never share your email with anyone else."
          />
          <Input
            label="Password"
            type="password"
            placeholder="••••••••"
            errorMessage="Password must be at least 8 characters"
            error
          />
        </div>
      </section>
    </div>
  );
};

export default App;
