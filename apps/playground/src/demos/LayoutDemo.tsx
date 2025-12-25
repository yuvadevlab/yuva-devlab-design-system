import {
  Box,
  Typography,
  Grid,
  Stack,
  Divider,
  Section,
} from "@yuva-devlab/ui";
import React from "react";

export const LayoutDemo: React.FC = () => {
  return (
    <Section>
      <Stack gap="4xl">
        <Box>
          <Typography
            variant="h3"
            style={{ marginBottom: "32px" }}
          >
            Stack Layout (Vertical)
          </Typography>
          <Stack gap="md">
            {[1, 2, 3].map((i) => (
              <Box
                key={i}
                p="lg"
                style={{
                  backgroundColor: "rgba(62, 106, 77, 0.1)",
                  borderRadius: "8px",
                  border: "1px solid rgba(62, 106, 77, 0.2)",
                  color: "#1a1a1a",
                }}
              >
                <Typography variant="body">Stack Item {i}</Typography>
              </Box>
            ))}
          </Stack>
        </Box>

        <Divider />

        <Box>
          <Typography
            variant="h3"
            style={{ marginBottom: "32px" }}
          >
            Stack Layout (Horizontal)
          </Typography>
          <Stack
            gap="md"
            direction="horizontal"
          >
            {[1, 2, 3].map((i) => (
              <Box
                key={i}
                p="lg"
                style={{
                  backgroundColor: "rgba(62, 106, 77, 0.1)",
                  borderRadius: "8px",
                  border: "1px solid rgba(62, 106, 77, 0.2)",
                  flex: 1,
                  textAlign: "center",
                  color: "#1a1a1a",
                }}
              >
                <Typography variant="body">Item {i}</Typography>
              </Box>
            ))}
          </Stack>
        </Box>

        <Divider />

        <Box>
          <Typography
            variant="h3"
            style={{ marginBottom: "32px" }}
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
                  color: "#1a1a1a",
                }}
              >
                <Typography variant="h6">Grid Item {i}</Typography>
              </Box>
            ))}
          </Grid>
        </Box>
      </Stack>
    </Section>
  );
};
