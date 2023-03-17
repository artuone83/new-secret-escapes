module.exports = {
  extends: [
    "react-app",
    "react-app/jest",
    "airbnb",
    "airbnb/hooks",
    "airbnb-typescript",
    "plugin:prettier/recommended",
    "plugin:react-hooks/recommended",
  ],
  parserOptions: {
    project: "./tsconfig.json",
    sourceType: "module",
    createDefaultProgram: true,
  },
  env: {
    browser: true,
  },
  ignorePatterns: ["/build"],
  rules: {
    "import/prefer-default-export": "off",
    "@typescript-eslint/no-use-before-define": "off",
    "react/prop-types": "off",
    "react/require-default-props": "off",
    "react/jsx-props-no-spreading": "off",
    "no-nested-ternary": "off",
    "no-console": ["error", { allow: ["error"] }],
    "@typescript-eslint/no-explicit-any": "error",
    "react/function-component-definition": [
      2,
      { namedComponents: "arrow-function" },
    ],
    "react/jsx-no-useless-fragment": [2, { allowExpressions: true }],
    "react/react-in-jsx-scope": "off",
  },
};
