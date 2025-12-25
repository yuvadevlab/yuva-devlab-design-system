import {
  Button,
  Input,
  Typography,
  Stack,
  Flex,
  Box,
  Grid,
  Checkbox,
  RadioGroup,
  Switch,
  Textarea,
  Select,
  Slider,
  NumberInput,
  Form,
  Section,
} from "@yuva-devlab/ui";
import React from "react";

export const FormDemo: React.FC = () => {
  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
    acceptTerms: false,
    notifications: true,
    plan: "pro",
    priority: [50],
    quantity: 1,
    message: "",
    country: "",
    startDate: "",
    startTime: "",
  });

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    // eslint-disable-next-line no-console
    console.log("Form submitted:", formData);
  };

  return (
    <Section>
      <Typography
        variant="h3"
        style={{ marginBottom: "32px" }}
      >
        Form Components
      </Typography>

      <Form onSubmit={handleSubmit}>
        <Stack gap="2xl">
          {/* Input Variants */}
          <Box>
            <Typography
              variant="h4"
              style={{ marginBottom: "16px" }}
            >
              Input Fields
            </Typography>
            <Grid
              columns={2}
              gap="lg"
            >
              <Input
                label="Email Address"
                type="email"
                placeholder="yuva@devlab.com"
                helperText="We'll never share your email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
              <Input
                label="Password"
                type="password"
                placeholder="••••••••"
                helperText="Min 8 characters"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
              />
            </Grid>
          </Box>

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
                value={formData.plan}
                onValueChange={(value) =>
                  setFormData({ ...formData, plan: value })
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
                value={formData.plan}
                onValueChange={(value) =>
                  setFormData({ ...formData, plan: value })
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

          {/* Textarea */}
          <Box>
            <Typography
              variant="h4"
              style={{ marginBottom: "16px" }}
            >
              Textarea - Auto-resize & Character Count
            </Typography>
            <Grid
              columns={2}
              gap="lg"
            >
              <Textarea
                label="Message"
                placeholder="Enter your message..."
                helperText="Tell us what you think"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              />
              <Textarea
                label="Limited Message"
                placeholder="Max 200 characters"
                maxLength={200}
                showCount
                autoResize
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
                value={formData.country}
                onValueChange={(value) =>
                  setFormData({ ...formData, country: value })
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
                value={formData.priority}
                onValueChange={(value) =>
                  setFormData({ ...formData, priority: value })
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

          {/* NumberInput */}
          <Box>
            <Typography
              variant="h4"
              style={{ marginBottom: "16px" }}
            >
              Number Input - All Sizes
            </Typography>
            <Grid
              columns={3}
              gap="lg"
            >
              <NumberInput
                size="sm"
                label="Quantity (Small)"
                min={0}
                max={100}
                defaultValue={1}
              />
              <NumberInput
                size="md"
                label="Quantity (Medium)"
                min={0}
                max={100}
                value={formData.quantity}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    quantity: parseInt(e.target.value) || 0,
                  })
                }
              />
              <NumberInput
                size="lg"
                label="Quantity (Large)"
                min={0}
                max={100}
                defaultValue={1}
              />
            </Grid>
          </Box>

          {/* Submit Button */}
          <Flex
            gap="md"
            justify="end"
          >
            <Button
              type="button"
              variant="outlined"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              variant="filled"
            >
              Submit Form
            </Button>
          </Flex>
        </Stack>
      </Form>
    </Section>
  );
};
