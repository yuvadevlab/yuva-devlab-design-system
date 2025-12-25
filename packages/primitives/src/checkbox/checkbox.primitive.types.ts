import type * as CheckboxPrimitive from "@radix-ui/react-checkbox";

export interface CheckboxPrimitiveProps
  extends React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> {
  /**
   * The controlled checked state of the checkbox.
   */
  checked?: boolean | "indeterminate";
  /**
   * Event handler called when the checked state changes.
   */
  onCheckedChange?: (checked: boolean | "indeterminate") => void;
  /**
   * When true, prevents the user from interacting with the checkbox.
   */
  disabled?: boolean;
  /**
   * When true, indicates that the user must check the checkbox before submitting.
   */
  required?: boolean;
  /**
   * The name of the checkbox. Submitted with its owning form as part of a name/value pair.
   */
  name?: string;
  /**
   * The value given as data when submitted with a name.
   */
  value?: string;
}
