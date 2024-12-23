import { FixedPropertyGroup, PropertyGroupType } from "./index";

export type GeometryValues = {
  width: number;
  height: number;
};

export type GeometryProperties = FixedPropertyGroup<
  typeof PropertyGroupType.GEOMETRY,
  GeometryValues
>;
