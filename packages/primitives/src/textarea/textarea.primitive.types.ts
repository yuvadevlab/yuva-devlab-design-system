export interface TextareaPrimitiveProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  /**
   * When true, prevents the user from interacting with the textarea.
   */
  disabled?: boolean;
  /**
   * When true, indicates that the user must fill the textarea before submitting.
   */
  required?: boolean;
  /**
   * The name of the textarea. Submitted with its owning form as part of a name/value pair.
   */
  name?: string;
  /**
   * The value of the textarea.
   */
  value?: string;
  /**
   * Default value for uncontrolled component.
   */
  defaultValue?: string;
  /**
   * Event handler called when the value changes.
   */
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
}
