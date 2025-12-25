import {
  Input,
  Textarea,
  NumberInput,
  Box,
  Typography,
  Grid,
  Stack,
  Section,
} from "@yuva-devlab/ui";
import React, { useState } from "react";

export const InputDemo: React.FC = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    message: "",
    quantity: 1,
  });

  return (
    <Section>
      <Typography
        variant="h3"
        style={{ marginBottom: "32px" }}
      >
        Input Components
      </Typography>

      <Stack gap="2xl">
        {/* Input Variants */}
        <Box>
          <Typography
            variant="h4"
            style={{ marginBottom: "16px" }}
          >
            Text Inputs
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
      </Stack>
    </Section>
  );
};
