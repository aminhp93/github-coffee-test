import { FixedPropertyGroup, PropertyGroupType } from "../../../types";

export type BorderValues = {
  color: string;
  thickness: number;
  radius: number;
};

export type BorderProperties = FixedPropertyGroup<
  typeof PropertyGroupType.GROUP,
  BorderValues
>;
