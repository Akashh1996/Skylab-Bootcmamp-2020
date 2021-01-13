module.exports = {
  env: {
    browser: true,
    es2021: true,
    commonjs: true,
    jest: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'no-underscore-dangle': 0,
    'no-debugger': 0,
    'react/prop-types': 0,
    'react/jsx-no-target-blank': 0,
    'jsx-a11y/anchor-is-valid': 0,
  },
};
