import { FixedPropertyGroup, PropertyGroupType } from "./index";

export type TransformAnchor =
  | "lt"
  | "lc"
  | "lb"
  | "ct"
  | "cc"
  | "cb"
  | "rt"
  | "rc"
  | "rb";

export type TransformValues = {
  anchor: TransformAnchor;
  x: number;
  y: number;
  zIndex: number;
  scale: number;
  rotation: number;
};

export type TransformProperties = FixedPropertyGroup<
  typeof PropertyGroupType.TRANSFORM,
  TransformValues
>;
