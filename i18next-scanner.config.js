module.exports = {
  input: [
    "src/**/*.{js,jsx,ts,tsx}", // Adjust the path to match your source files
    // ignore files src/components/table/localization.ts
    "!src/components/table/localization.ts",
  ],
  output: ".", // Adjust the output path as needed
  options: {
    debug: true,
    func: {
      list: ["t", "i18next.t", "useTranslation"],
      extensions: [".js", ".jsx", ".ts", ".tsx"],
    },
    lngs: ["en", "no", "sv"], // List of languages
    ns: ["common"], // List of namespaces
    defaultLng: "en",
    defaultNs: "common",
    resource: {
      loadPath: "src/utils/translation/locales/{{lng}}/{{ns}}.json",
      savePath: "src/utils/translation/locales/{{lng}}/{{ns}}.json",
      jsonIndent: 2,
    },
    keySeparator: false, // Allow keys to contain dots
    nsSeparator: false, // Allow namespaces to contain colons
    key: (key) => {
      // Ignore keys containing '_plot'
      if (key.includes("_plot")) {
        return null;
      }
      return key;
    },
  },
};
