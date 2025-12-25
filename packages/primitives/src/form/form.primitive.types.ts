export interface FormPrimitiveProps
  extends React.FormHTMLAttributes<HTMLFormElement> {
  /**
   * Event handler called when the form is submitted.
   */
  onSubmit?: React.FormEventHandler<HTMLFormElement>;
  /**
   * When true, prevents the user from interacting with the form.
   */
  disabled?: boolean;
  /**
   * The name of the form.
   */
  name?: string;
  /**
   * When true, the form will not validate on submit.
   */
  noValidate?: boolean;
}
