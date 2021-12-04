module.exports = {
  "plugins": ["@typescript-eslint"],
  "extends": [
    "next/core-web-vitals",
    "plugin:@typescript-eslint/recommended",
    "prettier"
  ],
  "rules": {
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/no-explicit-any": "error"
  }
};
