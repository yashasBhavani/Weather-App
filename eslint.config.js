import { defineConfig } from "eslint/config";
import js from "@eslint/js";
import globals from "globals";
import eslintConfigPrettier from "eslint-config-prettier";

export default defineConfig([
  { ignores: ["dist/"] },

  js.configs.recommended,

  {
    files: ["**/*.js"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.jest,
      },
    },
    rules: {
      "no-unused-vars": "warn",
      "no-undef": "warn",
    },
  },

  eslintConfigPrettier,
]);
