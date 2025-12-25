import type * as SliderPrimitive from "@radix-ui/react-slider";

export interface SliderPrimitiveProps
  extends React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root> {
  /**
   * The controlled value of the slider.
   */
  value?: number[];
  /**
   * Event handler called when the value changes.
   */
  onValueChange?: (value: number[]) => void;
  /**
   * The value of the slider when initially rendered. Use when you do not need to control the state.
   */
  defaultValue?: number[];
  /**
   * When true, prevents the user from interacting with the slider.
   */
  disabled?: boolean;
  /**
   * The orientation of the slider.
   * @default "horizontal"
   */
  orientation?: "horizontal" | "vertical";
  /**
   * The minimum value of the slider.
   * @default 0
   */
  min?: number;
  /**
   * The maximum value of the slider.
   * @default 100
   */
  max?: number;
  /**
   * The stepping interval.
   * @default 1
   */
  step?: number;
  /**
   * The minimum permitted steps between multiple thumbs.
   */
  minStepsBetweenThumbs?: number;
  /**
   * The name of the slider. Submitted with its owning form as part of a name/value pair.
   */
  name?: string;
  /**
   * Whether the slider should be inverted.
   */
  inverted?: boolean;
}
