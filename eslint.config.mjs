import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const eslintConfig = [...nextCoreWebVitals, ...nextTypescript, {
  ignores: ["**/**"]
}, {
  files: ["**/*.{ts,tsx,js,jsx,css}"],

  rules: {
    // Add individual rules to disable warnings
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "react/no-unescaped-entities": "off",
    "@next/next/no-img-element": "off",
  },
}];

export default eslintConfig;
