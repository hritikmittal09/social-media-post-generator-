module.exports = {
  extends: ["next/core-web-vitals"],
  rules: {
    // turn off all rules that cause warnings
    "@typescript-eslint/no-unused-vars": "off",
    "@next/next/no-img-element": "off",
    "@typescript-eslint/no-explicit-any": "off",
  },
};