import {
  Button,
  Input,
  Typography,
  Container,
  Stack,
  Flex,
  Box,
  Grid,
} from "@yuva-devlab/ui";

const App: React.FC = () => {
  return (
    <Container
      size="xl"
      py="4xl"
    >
      <Stack gap="4xl">
        <header>
          <Typography variant="h1">YUVA DevLab</Typography>
          <Typography
            variant="body"
            style={{ marginTop: "8px", opacity: 0.7 }}
          >
            A premium organic Design System built for speed and aesthetics.
          </Typography>
        </header>

        {/* 1. CORE ACTION VARIANTS (MD3 Patterns) */}
        <Box as="section">
          <Typography
            variant="h4"
            style={{ marginBottom: "24px", fontWeight: 700 }}
          >
            Core Action Variants
          </Typography>
          <Flex
            gap="lg"
            wrap="wrap"
          >
            <Button variant="elevated">Elevated</Button>
            <Button variant="filled">Filled</Button>
            <Button variant="tonal">Tonal</Button>
            <Button variant="outlined">Outlined</Button>
            <Button variant="text">Text Button</Button>
          </Flex>
        </Box>

        {/* 2. SEMANTIC ROLES */}
        <Box as="section">
          <Typography
            variant="h4"
            style={{ marginBottom: "24px", fontWeight: 700 }}
          >
            Semantic & Brand Roles
          </Typography>
          <Flex
            gap="lg"
            wrap="wrap"
          >
            <Button variant="primary">Primary Brand</Button>
            <Button variant="secondary">Secondary Action</Button>
            <Button variant="tertiary">Tertiary Emphasis</Button>
            <Button danger>Danger / Destructive</Button>
            <Button variant="link">External Link</Button>
            <Button variant="ghost">Ghost Style</Button>
          </Flex>
        </Box>

        {/* 3. INTERACTIVE & BEHAVIORAL */}
        <Box as="section">
          <Typography
            variant="h4"
            style={{ marginBottom: "24px", fontWeight: 700 }}
          >
            Interactive States
          </Typography>
          <Flex
            gap="2xl"
            align="center"
          >
            <Flex gap="md">
              <Button
                loading
                variant="filled"
              >
                Loading State
              </Button>
              <Button
                disabled
                variant="tonal"
              >
                Disabled Action
              </Button>
            </Flex>
            <Flex gap="md">
              <Button
                variant="primary"
                shape="round"
                morph
              >
                Morph Round
              </Button>
              <Button
                variant="tonal"
                shape="square"
                morph
              >
                Morph Square
              </Button>
            </Flex>
          </Flex>
        </Box>

        {/* 4. LAYOUT & SCALING */}
        <Box as="section">
          <Typography
            variant="h4"
            style={{ marginBottom: "24px", fontWeight: 700 }}
          >
            Layout & Scaling
          </Typography>

          <Stack gap="2xl">
            {/* Sizes */}
            <Box>
              <Typography
                variant="body"
                style={{ marginBottom: "12px", opacity: 0.6 }}
              >
                Component Scaling (XS to XL)
              </Typography>
              <Flex
                gap="md"
                align="center"
              >
                <Button
                  size="xs"
                  variant="outlined"
                >
                  XS
                </Button>
                <Button
                  size="sm"
                  variant="outlined"
                >
                  Small
                </Button>
                <Button
                  size="md"
                  variant="outlined"
                >
                  Medium
                </Button>
                <Button
                  size="lg"
                  variant="outlined"
                >
                  Large
                </Button>
                <Button
                  size="xl"
                  variant="outlined"
                >
                  XL
                </Button>
              </Flex>
            </Box>

            {/* Widths */}
            <Box>
              <Typography
                variant="body"
                style={{ marginBottom: "12px", opacity: 0.6 }}
              >
                Padding Densities
              </Typography>
              <Flex gap="md">
                <Button width="narrow">Narrow</Button>
                <Button width="default">Default</Button>
                <Button width="wide">Wide Action</Button>
              </Flex>
            </Box>
          </Stack>
        </Box>

        {/* 5. FORM CONTROLS */}
        <Box
          as="section"
          style={{ maxWidth: "480px" }}
        >
          <Typography
            variant="h4"
            style={{ marginBottom: "24px", fontWeight: 700 }}
          >
            Form Controls
          </Typography>
          <Stack gap="lg">
            <Input
              label="Email Address"
              placeholder="yuva@devlab.com"
              helperText="We'll never share your email with anyone else."
            />
            <Input
              label="Security Level"
              type="password"
              placeholder="••••••••"
              errorMessage="Password is too weak"
              error
            />
          </Stack>
        </Box>

        {/* 6. GRID SYSTEM DEMO */}
        <Box as="section">
          <Typography
            variant="h4"
            style={{ marginBottom: "24px", fontWeight: 700 }}
          >
            Grid System Demo
          </Typography>
          <Grid
            columns={3}
            gap="lg"
          >
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <Box
                key={i}
                p="xl"
                style={{
                  backgroundColor: "rgba(62, 106, 77, 0.1)",
                  borderRadius: "12px",
                  border: "1px solid rgba(62, 106, 77, 0.2)",
                  textAlign: "center",
                }}
              >
                <Typography variant="h6">Grid Item {i}</Typography>
              </Box>
            ))}
          </Grid>
        </Box>
      </Stack>
    </Container>
  );
};

export default App;
