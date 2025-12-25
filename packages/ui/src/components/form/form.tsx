import { FormPrimitive } from "@yuva-devlab/primitives";
import clsx from "clsx";
import React from "react";

import * as styles from "./form.styles.css";
import type { FormProps } from "./form.types";

/**
 * Form component for wrapping form inputs with validation and submission handling.
 *
 * @example
 * <Form onSubmit={handleSubmit} loading={isLoading}>
 *   <Input label="Email" type="email" />
 *   <Button type="submit">Submit</Button>
 * </Form>
 */
export const Form = React.forwardRef<HTMLFormElement, FormProps>(
  (
    {
      loading = false,
      error,
      success,
      className,
      wrapperClassName,
      children,
      onSubmit,
      ...rest
    },
    ref,
  ) => {
    const handleSubmit = React.useCallback(
      (e: React.FormEvent<HTMLFormElement>) => {
        if (loading) {
          e.preventDefault();
          return;
        }
        onSubmit?.(e);
      },
      [loading, onSubmit],
    );

    return (
      <div className={clsx(styles.wrapper, wrapperClassName)}>
        {error && <div className={styles.errorMessage}>{error}</div>}
        {success && <div className={styles.successMessage}>{success}</div>}
        <FormPrimitive
          ref={ref}
          onSubmit={handleSubmit}
          className={clsx(styles.form, loading && styles.loading, className)}
          {...rest}
        >
          {children}
        </FormPrimitive>
      </div>
    );
  },
);

Form.displayName = "Form";
