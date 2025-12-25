import type { FormPrimitiveProps } from "@yuva-devlab/primitives";

export interface FormProps extends FormPrimitiveProps {
  /**
   * When true, shows loading state
   */
  loading?: boolean;
  /**
   * Error message to display at form level
   */
  error?: string;
  /**
   * Success message to display
   */
  success?: string;
  /**
   * Additional className for the wrapper
   */
  wrapperClassName?: string;
}
