import {
  Checkbox,
  RadioGroup,
  Switch,
  Slider,
  Select,
  Box,
  Typography,
  Grid,
  Flex,
  Stack,
  Section,
} from "@yuva-devlab/ui";
import React, { useState } from "react";

export const SelectionDemo: React.FC = () => {
  const [selectionData, setSelectionData] = useState({
    plan: "pro",
    priority: [50],
    country: "",
  });

  return (
    <Section>
      <Typography
        variant="h3"
        style={{ marginBottom: "32px" }}
      >
        Selection Controls
      </Typography>

      <Stack gap="2xl">
        {/* Checkbox */}
        <Box>
          <Typography
            variant="h4"
            style={{ marginBottom: "16px" }}
          >
            Checkbox - All Sizes
          </Typography>
          <Flex
            gap="xl"
            align="center"
          >
            <Checkbox
              size="sm"
              label="Small"
            />
            <Checkbox
              size="md"
              label="Medium"
              checked
            />
            <Checkbox
              size="lg"
              label="Large"
            />
            <Checkbox
              label="With Helper"
              helperText="Additional info"
            />
            <Checkbox
              label="Error State"
              error="Required field"
            />
          </Flex>
        </Box>

        {/* Radio Group */}
        <Box>
          <Typography
            variant="h4"
            style={{ marginBottom: "16px" }}
          >
            Radio Group - Horizontal & Vertical
          </Typography>
          <Grid
            columns={2}
            gap="lg"
          >
            <RadioGroup
              label="Select Plan (Horizontal)"
              orientation="horizontal"
              options={[
                { label: "Free", value: "free" },
                { label: "Pro", value: "pro" },
                { label: "Enterprise", value: "enterprise" },
              ]}
              value={selectionData.plan}
              onValueChange={(value) =>
                setSelectionData({ ...selectionData, plan: value })
              }
            />
            <RadioGroup
              label="Select Plan (Vertical)"
              orientation="vertical"
              options={[
                { label: "Free", value: "free", helperText: "$0/month" },
                { label: "Pro", value: "pro", helperText: "$29/month" },
                {
                  label: "Enterprise",
                  value: "enterprise",
                  helperText: "Custom pricing",
                },
              ]}
              value={selectionData.plan}
              onValueChange={(value) =>
                setSelectionData({ ...selectionData, plan: value })
              }
            />
          </Grid>
        </Box>

        {/* Switch */}
        <Box>
          <Typography
            variant="h4"
            style={{ marginBottom: "16px" }}
          >
            Switch - All Sizes & Positions
          </Typography>
          <Grid
            columns={3}
            gap="lg"
          >
            <Switch
              size="sm"
              label="Small"
              labelPosition="right"
            />
            <Switch
              size="md"
              label="Medium"
              labelPosition="right"
              checked
            />
            <Switch
              size="lg"
              label="Large"
              labelPosition="right"
            />
            <Switch
              label="Label Left"
              labelPosition="left"
            />
            <Switch
              label="With Helper"
              helperText="Toggle this"
            />
            <Switch
              label="Error"
              error="Something went wrong"
            />
          </Grid>
        </Box>

        {/* Select */}
        <Box>
          <Typography
            variant="h4"
            style={{ marginBottom: "16px" }}
          >
            Select - Simple & Grouped Options
          </Typography>
          <Grid
            columns={2}
            gap="lg"
          >
            <Select
              label="Country"
              placeholder="Select a country"
              options={[
                { label: "United States", value: "us" },
                { label: "Canada", value: "ca" },
                { label: "United Kingdom", value: "uk" },
                { label: "Australia", value: "au" },
              ]}
              value={selectionData.country}
              onValueChange={(value) =>
                setSelectionData({ ...selectionData, country: value })
              }
            />
            <Select
              label="Category"
              placeholder="Select category"
              options={[
                {
                  label: "Frontend",
                  options: [
                    { label: "React", value: "react" },
                    { label: "Vue", value: "vue" },
                  ],
                },
                {
                  label: "Backend",
                  options: [
                    { label: "Node.js", value: "node" },
                    { label: "Python", value: "python" },
                  ],
                },
              ]}
            />
          </Grid>
        </Box>

        {/* Slider */}
        <Box>
          <Typography
            variant="h4"
            style={{ marginBottom: "16px" }}
          >
            Slider - Single & Range
          </Typography>
          <Grid
            columns={2}
            gap="lg"
          >
            <Slider
              label="Priority"
              min={0}
              max={100}
              value={selectionData.priority}
              onValueChange={(value) =>
                setSelectionData({ ...selectionData, priority: value })
              }
              showValue
            />
            <Slider
              label="Price Range"
              min={0}
              max={1000}
              defaultValue={[200, 800]}
              showValue
              formatValue={(value) => `$${value}`}
            />
          </Grid>
        </Box>
      </Stack>
    </Section>
  );
};
