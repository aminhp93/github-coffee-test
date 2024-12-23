import { FixedPropertyGroup, PropertyGroupType } from "../../../types";

export type TextAlignment = "left" | "right" | "center" | "justify";

export type TextValues = {
  value: string;
  color: string;
  family: string;
  size: number;
  underline: boolean;
  italic: boolean;
  bold: boolean;
  strikethrough: boolean;
  align: TextAlignment;
  // reverse: boolean;
};

export type TextProperties = FixedPropertyGroup<
  typeof PropertyGroupType.TEXT,
  TextValues
>;
