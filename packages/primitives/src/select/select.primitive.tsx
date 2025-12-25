import * as SelectPrimitive from "@radix-ui/react-select";
import React from "react";

import {
  type SelectPrimitiveProps,
  type SelectItemPrimitiveProps,
} from "./select.primitive.types";

/**
 * Foundational select primitive with accessibility built-in.
 */
export const SelectRoot = React.forwardRef<
  React.ComponentRef<typeof SelectPrimitive.Root>,
  SelectPrimitiveProps
>((props, _ref) => {
  return <SelectPrimitive.Root {...props} />;
});

SelectRoot.displayName = "SelectRoot";

/**
 * Select trigger - the button that opens the dropdown
 */
export const SelectTrigger = SelectPrimitive.Trigger;
SelectTrigger.displayName = "SelectTrigger";

/**
 * Select value - displays the selected value
 */
export const SelectValue = SelectPrimitive.Value;
SelectValue.displayName = "SelectValue";

/**
 * Select icon - the icon in the trigger
 */
export const SelectIcon = SelectPrimitive.Icon;
SelectIcon.displayName = "SelectIcon";

/**
 * Select portal - portals the content to the body
 */
export const SelectPortal = SelectPrimitive.Portal;
SelectPortal.displayName = "SelectPortal";

/**
 * Select content - the dropdown content
 */
export const SelectContent = SelectPrimitive.Content;
SelectContent.displayName = "SelectContent";

/**
 * Select viewport - the scrollable area
 */
export const SelectViewport = SelectPrimitive.Viewport;
SelectViewport.displayName = "SelectViewport";

/**
 * Select item - an option in the dropdown
 */
export const SelectItem = React.forwardRef<
  React.ComponentRef<typeof SelectPrimitive.Item>,
  SelectItemPrimitiveProps
>((props, ref) => {
  return (
    <SelectPrimitive.Item
      ref={ref}
      {...props}
    />
  );
});

SelectItem.displayName = "SelectItem";

/**
 * Select item text - the text content of an item
 */
export const SelectItemText = SelectPrimitive.ItemText;
SelectItemText.displayName = "SelectItemText";

/**
 * Select item indicator - shows when item is selected
 */
export const SelectItemIndicator = SelectPrimitive.ItemIndicator;
SelectItemIndicator.displayName = "SelectItemIndicator";

/**
 * Select group - groups items together
 */
export const SelectGroup = SelectPrimitive.Group;
SelectGroup.displayName = "SelectGroup";

/**
 * Select label - labels a group
 */
export const SelectLabel = SelectPrimitive.Label;
SelectLabel.displayName = "SelectLabel";

/**
 * Select separator - separates items
 */
export const SelectSeparator = SelectPrimitive.Separator;
SelectSeparator.displayName = "SelectSeparator";

/**
 * Select scroll up button
 */
export const SelectScrollUpButton = SelectPrimitive.ScrollUpButton;
SelectScrollUpButton.displayName = "SelectScrollUpButton";

/**
 * Select scroll down button
 */
export const SelectScrollDownButton = SelectPrimitive.ScrollDownButton;
SelectScrollDownButton.displayName = "SelectScrollDownButton";
