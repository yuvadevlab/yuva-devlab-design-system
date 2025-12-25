export interface NumberInputPrimitiveProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  /**
   * When true, prevents the user from interacting with the input.
   */
  disabled?: boolean;
  /**
   * When true, indicates that the user must fill the input before submitting.
   */
  required?: boolean;
  /**
   * The name of the input. Submitted with its owning form as part of a name/value pair.
   */
  name?: string;
  /**
   * The value of the input.
   */
  value?: number | string;
  /**
   * Default value for uncontrolled component.
   */
  defaultValue?: number | string;
  /**
   * Event handler called when the value changes.
   */
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  /**
   * Minimum value.
   */
  min?: number;
  /**
   * Maximum value.
   */
  max?: number;
  /**
   * Step increment.
   */
  step?: number;
}
