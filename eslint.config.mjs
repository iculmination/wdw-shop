import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      // Дозволяє оголошення змінних, які не використовуються
      "no-unused-vars": "off", // або "warn" для попередження замість помилки

      // Дозволяє використання типу any у TypeScript
      "@typescript-eslint/no-explicit-any": "off", // або "warn" для попередження
    },
  },
];

export default eslintConfig;
