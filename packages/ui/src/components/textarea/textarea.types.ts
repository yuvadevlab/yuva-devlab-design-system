import type { TextareaPrimitiveProps } from "@yuva-devlab/primitives";

export type TextareaSize = "sm" | "md" | "lg";

export interface TextareaProps extends TextareaPrimitiveProps {
  /**
   * Size of the textarea
   * @default "md"
   */
  size?: TextareaSize;
  /**
   * Label text for the textarea
   */
  label?: string;
  /**
   * Helper text displayed below the textarea
   */
  helperText?: string;
  /**
   * Error message to display
   */
  error?: string;
  /**
   * When true, shows character count
   */
  showCount?: boolean;
  /**
   * Maximum number of characters allowed
   */
  maxLength?: number;
  /**
   * When true, textarea auto-resizes based on content
   */
  autoResize?: boolean;
}
