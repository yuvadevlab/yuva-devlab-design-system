import type * as SwitchPrimitive from "@radix-ui/react-switch";

export interface SwitchPrimitiveProps
  extends React.ComponentPropsWithoutRef<typeof SwitchPrimitive.Root> {
  /**
   * The controlled checked state of the switch.
   */
  checked?: boolean;
  /**
   * Event handler called when the checked state changes.
   */
  onCheckedChange?: (checked: boolean) => void;
  /**
   * When true, prevents the user from interacting with the switch.
   */
  disabled?: boolean;
  /**
   * When true, indicates that the user must check the switch before submitting.
   */
  required?: boolean;
  /**
   * The name of the switch. Submitted with its owning form as part of a name/value pair.
   */
  name?: string;
  /**
   * The value given as data when submitted with a name.
   */
  value?: string;
}
