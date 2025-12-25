import { Button, Box, Typography, Flex, Stack, Section } from "@yuva-devlab/ui";

export const ButtonDemo: React.FC = () => {
  return (
    <Section>
      <Typography
        variant="h3"
        style={{ marginBottom: "32px" }}
      >
        Button Components
      </Typography>

      <Stack gap="2xl">
        {/* Core Action Variants */}
        <Box>
          <Typography
            variant="h4"
            style={{ marginBottom: "16px" }}
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

        {/* Semantic Roles */}
        <Box>
          <Typography
            variant="h4"
            style={{ marginBottom: "16px" }}
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

        {/* Sizes */}
        <Box>
          <Typography
            variant="h4"
            style={{ marginBottom: "16px" }}
          >
            Component Scaling
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

        {/* States */}
        <Box>
          <Typography
            variant="h4"
            style={{ marginBottom: "16px" }}
          >
            Interactive States
          </Typography>
          <Flex
            gap="lg"
            align="center"
          >
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
            <Button
              variant="primary"
              shape="round"
              morph
            >
              Morph Round
            </Button>
          </Flex>
        </Box>
      </Stack>
    </Section>
  );
};
