type SuffixMapping = {
  [key: string]: string;
};

const SUFFIX_MAPPING: SuffixMapping = {
  root: "-root",
  container: "-container",
};

export function getDataTestId(type: string, data: string) {
  const suffix = SUFFIX_MAPPING[type] ?? "";
  return `${data}${suffix}`;
}
