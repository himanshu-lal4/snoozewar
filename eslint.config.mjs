// @ts-nocheck
// eslint.config.mjs - ESLint v9+ flat config for React Native

import typescriptEslintPlugin from "@typescript-eslint/eslint-plugin";
import typescriptParser from "@typescript-eslint/parser";
import importPlugin from "eslint-plugin-import";
import prettierPlugin from "eslint-plugin-prettier";
import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import reactNativePlugin from "eslint-plugin-react-native";
import jestPlugin from "eslint-plugin-jest";
import testingLibraryPlugin from "eslint-plugin-testing-library";
import globals from "globals";

export default [
  {
    ignores: ["node_modules/", "ios/", "android/", "dist/", ".expo/"],
  },

  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module",
        ecmaFeatures: { jsx: true },
      },
      globals: {
        ...globals.es2021,
        ...globals.browser,
        __DEV__: true,
      },
    },
    plugins: {
      "@typescript-eslint": typescriptEslintPlugin,
      react: reactPlugin,
      "react-native": reactNativePlugin,
      import: importPlugin,
      prettier: prettierPlugin,
      "react-hooks": reactHooksPlugin,
    },
    settings: {
      "import/resolver": {
        typescript: {
          alwaysTryTypes: true,
          project: "./tsconfig.json",
        },
      },
      react: { version: "detect" },
    },
    rules: {
      // ---------------------------------------------------------
      // REACT NATIVE - Mobile Performance & Best Practices
      // ---------------------------------------------------------
      "react-native/no-inline-styles": "error",
      "react-native/no-unused-styles": "error",
      "react-native/no-color-literals": "error",
      "react-native/no-raw-text": ["error", { skip: [] }],

      // ---------------------------------------------------------
      // REACT - Component Best Practices
      // ---------------------------------------------------------
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
      "react/jsx-boolean-value": ["error", "never"],
      "react/jsx-no-duplicate-props": "error",
      "react/jsx-no-undef": "error",
      "react/no-direct-mutation-state": "error",
      "react/no-unescaped-entities": "error",
      "react/jsx-uses-react": "warn",

      // React - prevent real bugs
      "react/jsx-key": "error",
      "react/no-array-index-key": "warn",
      "react/no-unstable-nested-components": "error",
      "react/jsx-no-constructed-context-values": "error",

      // React - prevent leaked renders (renders 0 instead of nothing)
      "react/jsx-no-leaked-render": [
        "error",
        { validStrategies: ["ternary", "coerce"] },
      ],

      // React - clean components (SRP / composition)
      "react/self-closing-comp": "error",
      "react/jsx-fragments": ["error", "syntax"],
      "react/jsx-no-useless-fragment": "error",
      "react/jsx-no-bind": [
        "error",
        {
          allowArrowFunctions: true,
          allowBind: false,
          allowFunctions: false,
          ignoreDOMComponents: true,
        },
      ],
      "react/no-danger": "error",
      "react/no-deprecated": "error",
      "react/no-string-refs": "error",
      "react/no-this-in-sfc": "error",
      "react/jsx-curly-brace-presence": [
        "error",
        { props: "never", children: "never" },
      ],
      "react/jsx-pascal-case": "error",
      "react/hook-use-state": "warn",
      "react/display-name": "warn",
      "react/no-object-type-as-default-prop": "error",

      // React Hooks
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",

      // ---------------------------------------------------------
      // TYPESCRIPT - Type Safety
      // ---------------------------------------------------------
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_" },
      ],
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/no-inferrable-types": "off",
      "@typescript-eslint/consistent-type-definitions": "off",
      "@typescript-eslint/no-non-null-assertion": "error",
      "@typescript-eslint/no-shadow": "error",
      "no-implicit-coercion": "error",

      // ---------------------------------------------------------
      // IMPORTS - Clean Dependencies
      // ---------------------------------------------------------
      "import/no-unresolved": "off",
      "import/order": [
        "error",
        {
          groups: [
            "builtin",
            "external",
            "internal",
            "parent",
            "sibling",
            "index",
          ],
          "newlines-between": "always",
        },
      ],
      "import/no-duplicates": "error",
      "import/no-cycle": "off",

      // ---------------------------------------------------------
      // FORMATTING - Prettier
      // ---------------------------------------------------------
      "prettier/prettier": [
        "warn",
        {
          arrowParens: "always",
          bracketSpacing: true,
          bracketSameLine: false,
          jsxSingleQuote: false,
          quoteProps: "as-needed",
          singleQuote: true,
          semi: true,
          printWidth: 100,
          useTabs: false,
          tabWidth: 2,
          trailingComma: "es5",
        },
      ],

      // ---------------------------------------------------------
      // SOLID / DRY / CLEAN CODE - Enforceable Principles
      // ---------------------------------------------------------

      // SRP: Single Responsibility - keep functions and files focused
      complexity: ["warn", { max: 15 }],
      "max-lines-per-function": [
        "warn",
        { max: 150, skipBlankLines: true, skipComments: true },
      ],
      "max-depth": ["error", { max: 4 }],
      "max-params": ["warn", { max: 4 }],

      // DRY: Don't Repeat Yourself
      "no-duplicate-case": "error",

      // OCP / Clean Code: Functions should be predictable
      "no-param-reassign": ["error", { props: false }],
      "no-nested-ternary": "error",
      "no-else-return": "error",

      // LSP / Defensive: Proper control flow
      curly: ["error", "multi-line"],
      "default-case": "error",
      "no-fallthrough": "error",
      "no-return-assign": "error",
      "no-sequences": "error",

      // ISP: Keep interfaces/APIs small and focused - ban loose types
      "no-restricted-syntax": [
        "error",
        {
          selector: 'CallExpression[callee.name="require"]',
          message:
            "Use import statements instead of require() - ES modules are the standard.",
        },
        {
          selector: 'TSTypeReference[typeName.name="Function"]',
          message:
            "Do not use Function as a type. Specify the exact signature: (args: Type) => ReturnType.",
        },
        {
          selector: 'TSTypeReference[typeName.name="Object"]',
          message:
            "Do not use Object as a type. Use Record<string, unknown> or a specific interface.",
        },
        {
          selector: 'TSTypeReference[typeName.name="String"]',
          message:
            "Use string (lowercase) instead of String (the wrapper object).",
        },
        {
          selector: 'TSTypeReference[typeName.name="Number"]',
          message:
            "Use number (lowercase) instead of Number (the wrapper object).",
        },
        {
          selector: 'TSTypeReference[typeName.name="Boolean"]',
          message:
            "Use boolean (lowercase) instead of Boolean (the wrapper object).",
        },
      ],

      // DIP: Prevent tight coupling via deep relative imports
      // Note: Enable this once path aliases (@/) are configured in tsconfig.json
      // 'no-restricted-imports': ['error', {
      //   patterns: [{
      //     group: ['../../../../../../*'],
      //     message: 'Avoid deep relative imports. Use path aliases or re-exports.',
      //   }],
      // }],

      // General clean code
      "no-shadow": "off",
      "no-console": ["warn", { allow: ["warn", "error"] }],
      "no-var": "error",
      "prefer-const": "error",
      eqeqeq: ["error", "always"],
      "no-return-await": "error",
      "prefer-template": "error",
      "no-useless-concat": "error",
      "no-lonely-if": "error",
      "no-unneeded-ternary": "error",
      "prefer-destructuring": [
        "warn",
        {
          object: true,
          array: false,
        },
      ],
      "object-shorthand": ["error", "always"],
      "prefer-spread": "error",
      "prefer-rest-params": "error",
      "no-eval": "error",
      "no-implied-eval": "error",
      "no-new-func": "error",
      "no-extend-native": "error",
      "no-iterator": "error",
      "no-label-var": "error",
      "no-multi-assign": "error",
      "no-new-wrappers": "error",
      "no-throw-literal": "error",
      "prefer-promise-reject-errors": "error",
      "no-await-in-loop": "error",
    },
  },

  // ---------------------------------------------------------
  // TEST FILES — Jest & Testing Library rules
  // ---------------------------------------------------------
  {
    files: [
      "**/*.test.{ts,tsx}",
      "**/*.spec.{ts,tsx}",
      "**/test-utils/**/*.{ts,tsx}",
      "jest.setup.js",
      "src/__mocks__/**/*.js",
    ],
    plugins: {
      jest: jestPlugin,
      "testing-library": testingLibraryPlugin,
    },
    languageOptions: {
      globals: {
        ...globals.jest,
      },
    },
    rules: {
      // ── Relax source-code rules that don't apply in tests ──
      "@typescript-eslint/no-explicit-any": "off",
      "max-lines-per-function": "off",
      complexity: "off",
      "max-depth": "off",
      "no-restricted-syntax": "off", // allow require() in tests
      "react-native/no-inline-styles": "off",
      "react-native/no-color-literals": "off",
      "react-native/no-raw-text": "off",
      "no-console": "off",

      // ── Jest: Prevent bad test patterns ──
      "jest/no-disabled-tests": "warn", // flag .skip tests so they don't linger
      "jest/no-focused-tests": "error", // .only must never be committed
      "jest/no-identical-title": "error", // duplicate test names = confusion
      "jest/no-conditional-expect": "error", // expects inside if/catch hide failures
      "jest/no-standalone-expect": "error", // expect() outside it() is always a bug
      "jest/prefer-to-have-length": "warn", // .toHaveLength(3) > .toBe(3)
      "jest/prefer-to-be": "warn", // .toBe(true) > .toEqual(true)
      "jest/valid-expect": "error", // catch missing await on async expects
      "jest/valid-title": "error", // no empty or non-string test titles
      "jest/no-alias-methods": "warn", // .toBeCalled() → .toHaveBeenCalled()
      "jest/expect-expect": [
        // every it() block must have an assertion
        "error",
        { assertFunctionNames: ["expect", "expectSaga"] },
      ],
      "jest/no-duplicate-hooks": "error", // only one beforeEach per describe
      "jest/no-export": "error", // test files should never export
      "jest/no-mocks-import": "error", // don't import from __mocks__ directly
      "jest/prefer-spy-on": "warn", // jest.spyOn > manual assignment
      "jest/prefer-strict-equal": "warn", // toStrictEqual > toEqual (catches undefined props)
      "jest/no-test-return-statement": "error", // return in test = skipped assertions

      // ── Testing Library: Enforce best practices ──
      "testing-library/await-async-queries": "error", // must await findBy*
      "testing-library/no-await-sync-queries": "error", // don't await getBy*
      "testing-library/no-debugging-utils": "warn", // no debug() in committed tests
      "testing-library/no-dom-import": ["error", "react-native"], // use RN testing lib
      "testing-library/prefer-screen-queries": "warn", // screen.getByText > getByText
      "testing-library/prefer-find-by": "warn", // findByText > waitFor + getByText
      "testing-library/no-container": "error", // don't query DOM container directly
      "testing-library/no-node-access": "warn", // avoid .parentElement, .children
      "testing-library/prefer-presence-queries": "warn", // getBy for present, queryBy for absent
      "testing-library/no-wait-for-multiple-assertions": "warn", // one assert per waitFor
      "testing-library/no-wait-for-side-effects": "error", // no fireEvent inside waitFor
      "testing-library/no-unnecessary-act": "warn", // RTL already wraps in act
      "testing-library/prefer-explicit-assert": "warn", // getByText alone isn't an assertion
      "testing-library/render-result-naming-convention": "warn", // destructure render result
    },
  },
];
