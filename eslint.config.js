import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: {
      sourceType: "module",
      globals: {
        ...globals.node,
        ...globals.browser,
      },
    },
    plugins: { js },
    rules: {
      "no-unused-vars": "warn", // 👈 this changes it from error to warning
    },
    extends: ["js/recommended"],
  }
]);
