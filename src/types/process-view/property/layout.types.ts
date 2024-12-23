import { FixedPropertyGroup, PropertyGroupType } from "./index";

export type SvgLayoutRotation = "0" | "90" | "180" | "270";
export type SvgLayoutFlip = "none" | "horizontal" | "vertical" | "both";
export type TextLayoutPlacement = "left" | "right" | "top" | "bottom";

export type LayoutValues = {
  svgLayout: {
    rotate: SvgLayoutRotation;
    flip: SvgLayoutFlip;
  };
  textLayout: {
    placement: TextLayoutPlacement;
    showText: boolean;
    showValue: boolean;
  };
};

export type LayoutProperties = FixedPropertyGroup<
  typeof PropertyGroupType.LAYOUT,
  LayoutValues
>;

export type Remove = boolean;
