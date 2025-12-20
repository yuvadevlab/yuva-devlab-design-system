import { BoxProps } from "../box/box.types";

export interface ContainerProps extends BoxProps {
  size?: "sm" | "md" | "lg" | "xl" | "full";
}
