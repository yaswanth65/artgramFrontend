module.exports = {
  root: true,
  env: {
    node: true,
    commonjs: true,
    es2021: true,
  },
  globals: {
    process: 'readonly',
  },
  extends: 'eslint:recommended',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module', // Specify sourceType as 'module' for ES modules
  },
  rules: {
    // Add any specific rules for your backend here
  },
};
