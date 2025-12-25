import type * as SelectPrimitive from "@radix-ui/react-select";

export interface SelectPrimitiveProps
  extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Root> {
  /**
   * The controlled value of the select.
   */
  value?: string;
  /**
   * Event handler called when the value changes.
   */
  onValueChange?: (value: string) => void;
  /**
   * The value of the select when initially rendered. Use when you do not need to control the state.
   */
  defaultValue?: string;
  /**
   * When true, prevents the user from interacting with the select.
   */
  disabled?: boolean;
  /**
   * When true, indicates that the user must select a value before submitting.
   */
  required?: boolean;
  /**
   * The name of the select. Submitted with its owning form as part of a name/value pair.
   */
  name?: string;
  /**
   * The reading direction of the select when applicable.
   */
  dir?: "ltr" | "rtl";
}

export interface SelectItemPrimitiveProps
  extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item> {
  /**
   * The value given as data when submitted with a name.
   */
  value: string;
  /**
   * When true, prevents the user from interacting with the item.
   */
  disabled?: boolean;
  /**
   * Optional text used for typeahead purposes.
   */
  textValue?: string;
}
