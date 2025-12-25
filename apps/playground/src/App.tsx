import { Container, Stack, Typography, Divider, Header } from "@yuva-devlab/ui";
import React from "react";

import { ButtonDemo } from "./demos/ButtonDemo";
import { FormDemo } from "./demos/FormDemo";
import { InputDemo } from "./demos/InputDemo";
import { LayoutDemo } from "./demos/LayoutDemo";
import { SelectionDemo } from "./demos/SelectionDemo";

const App: React.FC = () => {
  return (
    <Container
      size="xl"
      py="4xl"
    >
      <Stack gap="4xl">
        <Header>
          <Typography variant="h1">YUVA DevLab Design System</Typography>
          <Typography
            variant="body"
            style={{ marginTop: "8px", opacity: 0.7 }}
          >
            Component Playground & Showcase
          </Typography>
        </Header>

        <Stack gap="4xl">
          <ButtonDemo />
          <Divider />

          <InputDemo />
          <Divider />

          <SelectionDemo />
          <Divider />

          <LayoutDemo />
          <Divider />

          <FormDemo />
        </Stack>
      </Stack>
    </Container>
  );
};

export default App;
