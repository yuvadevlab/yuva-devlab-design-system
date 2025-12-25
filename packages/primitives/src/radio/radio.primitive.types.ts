import type * as RadioGroupPrimitive from "@radix-ui/react-radio-group";

export interface RadioGroupPrimitiveProps
  extends React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root> {
  /**
   * The controlled value of the radio item to check.
   */
  value?: string;
  /**
   * Event handler called when the value changes.
   */
  onValueChange?: (value: string) => void;
  /**
   * When true, prevents the user from interacting with radio items.
   */
  disabled?: boolean;
  /**
   * When true, indicates that the user must check a radio item before submitting.
   */
  required?: boolean;
  /**
   * The name of the group. Submitted with its owning form as part of a name/value pair.
   */
  name?: string;
  /**
   * The orientation of the component.
   */
  orientation?: "horizontal" | "vertical";
}

export interface RadioItemPrimitiveProps
  extends React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item> {
  /**
   * The value given as data when submitted with a name.
   */
  value: string;
  /**
   * When true, prevents the user from interacting with the radio item.
   */
  disabled?: boolean;
  /**
   * When true, indicates that the user must check the radio item before submitting.
   */
  required?: boolean;
}
