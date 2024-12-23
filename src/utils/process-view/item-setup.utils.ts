import {
  GeometryProperties,
  GeometryValues,
  LayoutProperties,
  LayoutValues,
  PropertyGroupType,
  // StyleProperties,
  // StyleValues,
  TextProperties,
  TextValues,
  TransformProperties,
  TransformValues,
} from "../../types";

const initPropertyValues = <T extends { [key: string]: unknown }>(
  defaultValues: T,
  overrides?: Partial<T>,
  omittedProperties?: (keyof T)[]
): T => {
  const initValues = { ...defaultValues };
  if (overrides) {
    Object.entries(overrides).forEach(([key, overrideValue]) => {
      initValues[key as keyof T] = overrideValue;
    });
  }
  if (omittedProperties) {
    omittedProperties.forEach((key) => {
      delete initValues[key];
    });
  }

  return initValues;
};

export const transform = (
  overrides?: Partial<TransformValues>,
  omit?: (keyof TransformValues)[]
): TransformProperties => {
  const defaultValues: TransformValues = {
    anchor: "lt",
    x: 0,
    y: 0,
    zIndex: 0,
    scale: 1,
    rotation: 0,
  };

  return {
    type: PropertyGroupType.TRANSFORM,
    values: initPropertyValues(defaultValues, overrides, omit),
  };
};

export const geometry = (
  overrides?: Partial<GeometryValues>,
  omit?: (keyof GeometryValues)[]
): GeometryProperties => {
  const defaultValues: GeometryValues = {
    width: 40,
    height: 40,
  };

  return {
    type: PropertyGroupType.GEOMETRY,
    values: initPropertyValues(defaultValues, overrides, omit),
  };
};

export const layout = (
  overrides?: Partial<LayoutValues>,
  omit?: (keyof LayoutValues)[]
): LayoutProperties => {
  const defaultValues: LayoutValues = {
    svgLayout: {
      rotate: "0",
      flip: "none",
    },
    textLayout: {
      placement: "top",
      showText: false,
      showValue: true,
    },
  };

  return {
    type: PropertyGroupType.LAYOUT,
    values: initPropertyValues(defaultValues, overrides, omit),
  };
};

// export const style = (
//   overrides?: Partial<StyleValues>,
//   omit?: (keyof StyleValues)[]
// ): StyleProperties => {
//   const defaultValues: StyleValues = {
//     background: "#2196f3",
//     opacity: 100,
//     border: false,
//     borderColor: "#0069c0",
//     borderThickness: 4,
//     borderRadius: 0,
//   };

//   return {
//     type: PropertyGroupType.STYLE,
//     values: initPropertyValues(defaultValues, overrides, omit),
//   };
// };

export const text = (
  overrides?: Partial<TextValues>,
  omit?: (keyof TextValues)[]
): TextProperties => {
  const defaultValues: TextValues = {
    value: "Text",
    color: "#1b1b1b",
    family: "Arial",
    size: 14,
    underline: false,
    italic: false,
    bold: false,
    strikethrough: false,
    align: "left",
  };

  return {
    type: PropertyGroupType.TEXT,
    values: initPropertyValues(defaultValues, overrides, omit),
  };
};

// export const data = (label: string = "source") => ({
//   type: PropertyGroupType.DATA,
//   values: undefined,
// });

export const group = <V>(label: string, values: V) => {
  return {
    type: PropertyGroupType.GROUP,
    label,
    values,
  };
};
