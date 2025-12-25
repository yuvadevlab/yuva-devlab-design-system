import {
  SelectRoot,
  SelectTrigger,
  SelectValue,
  SelectIcon,
  SelectPortal,
  SelectContent,
  SelectViewport,
  SelectItem,
  SelectItemText,
  SelectItemIndicator,
  SelectGroup,
  SelectLabel,
  SelectSeparator,
  SelectScrollUpButton,
  SelectScrollDownButton,
} from "@yuva-devlab/primitives";
import clsx from "clsx";
import React, { JSX } from "react";

import { Typography } from "../typography";

import * as styles from "./select.styles.css";
import type {
  SelectProps,
  SelectOption,
  SelectOptionGroup,
} from "./select.types";

/**
 * Select component for choosing from a list of options.
 *
 * @example
 * <Select
 *   label="Country"
 *   placeholder="Select a country"
 *   options={[
 *     { label: "United States", value: "us" },
 *     { label: "Canada", value: "ca" }
 *   ]}
 * />
 */
export const Select = React.forwardRef<HTMLButtonElement, SelectProps>(
  (
    {
      size = "md",
      label,
      placeholder = "Select...",
      helperText,
      error,
      options,
      className,
      ...rest
    },
    ref,
  ) => {
    const selectId = React.useId();

    // Check if options are grouped
    const isGrouped = options.length > 0 && "options" in options[0];

    const renderOptions = (): JSX.Element | JSX.Element[] => {
      if (isGrouped) {
        return (options as SelectOptionGroup[]).map((group, groupIndex) => (
          <React.Fragment key={group.label}>
            <SelectGroup>
              <SelectLabel className={styles.groupLabel}>
                <Typography variant="label">{group.label}</Typography>
              </SelectLabel>
              {group.options.map((option) => (
                <SelectItem
                  key={option.value}
                  value={option.value}
                  disabled={option.disabled}
                  className={styles.item}
                >
                  <SelectItemText>
                    <Typography variant="body">{option.label}</Typography>
                  </SelectItemText>
                  <SelectItemIndicator className={styles.itemIndicator}>
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z"
                        fill="currentColor"
                        fillRule="evenodd"
                        clipRule="evenodd"
                      />
                    </svg>
                  </SelectItemIndicator>
                </SelectItem>
              ))}
            </SelectGroup>
            {groupIndex < options.length - 1 && (
              <SelectSeparator className={styles.separator} />
            )}
          </React.Fragment>
        ));
      }

      return (options as SelectOption[]).map((option) => (
        <SelectItem
          key={option.value}
          value={option.value}
          disabled={option.disabled}
          className={styles.item}
        >
          <SelectItemText>
            <Typography variant="body">{option.label}</Typography>
          </SelectItemText>
          <SelectItemIndicator className={styles.itemIndicator}>
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z"
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
              />
            </svg>
          </SelectItemIndicator>
        </SelectItem>
      ));
    };

    return (
      <div className={styles.wrapper}>
        {label && (
          <Typography
            variant="label"
            htmlFor={selectId}
            style={{ marginBottom: "8px" }}
          >
            {label}
          </Typography>
        )}
        <SelectRoot {...rest}>
          <SelectTrigger
            ref={ref}
            id={selectId}
            className={clsx(
              styles.trigger,
              styles.size[size],
              error && styles.error,
              className,
            )}
          >
            <SelectValue placeholder={placeholder} />
            <SelectIcon className={styles.icon}>
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.18179 6.18181C4.35753 6.00608 4.64245 6.00608 4.81819 6.18181L7.49999 8.86362L10.1818 6.18181C10.3575 6.00608 10.6424 6.00608 10.8182 6.18181C10.9939 6.35755 10.9939 6.64247 10.8182 6.81821L7.81819 9.81821C7.73379 9.9026 7.61934 9.95001 7.49999 9.95001C7.38064 9.95001 7.26618 9.9026 7.18179 9.81821L4.18179 6.81821C4.00605 6.64247 4.00605 6.35755 4.18179 6.18181Z"
                  fill="currentColor"
                  fillRule="evenodd"
                  clipRule="evenodd"
                />
              </svg>
            </SelectIcon>
          </SelectTrigger>
          <SelectPortal>
            <SelectContent
              className={styles.content}
              position="item-aligned"
              sideOffset={4}
            >
              <SelectScrollUpButton className={styles.scrollButton}>
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.14645 2.14645C7.34171 1.95118 7.65829 1.95118 7.85355 2.14645L11.8536 6.14645C12.0488 6.34171 12.0488 6.65829 11.8536 6.85355C11.6583 7.04882 11.3417 7.04882 11.1464 6.85355L7.5 3.20711L3.85355 6.85355C3.65829 7.04882 3.34171 7.04882 3.14645 6.85355C2.95118 6.65829 2.95118 6.34171 3.14645 6.14645L7.14645 2.14645Z"
                    fill="currentColor"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  />
                </svg>
              </SelectScrollUpButton>
              <SelectViewport className={styles.viewport}>
                {renderOptions()}
              </SelectViewport>
              <SelectScrollDownButton className={styles.scrollButton}>
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.14645 12.8536C7.34171 13.0488 7.65829 13.0488 7.85355 12.8536L11.8536 8.85355C12.0488 8.65829 12.0488 8.34171 11.8536 8.14645C11.6583 7.95118 11.3417 7.95118 11.1464 8.14645L7.5 11.7929L3.85355 8.14645C3.65829 7.95118 3.34171 7.95118 3.14645 8.14645C2.95118 8.34171 2.95118 8.65829 3.14645 8.85355L7.14645 12.8536Z"
                    fill="currentColor"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  />
                </svg>
              </SelectScrollDownButton>
            </SelectContent>
          </SelectPortal>
        </SelectRoot>
        {error && (
          <Typography
            variant="captionError"
            className={styles.errorText}
          >
            {error}
          </Typography>
        )}
        {!error && helperText && (
          <Typography
            variant="caption"
            className={styles.helperText}
          >
            {helperText}
          </Typography>
        )}
      </div>
    );
  },
);

Select.displayName = "Select";
