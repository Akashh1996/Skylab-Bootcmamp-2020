module.exports = {
  env: {
    browser: true,
    es2021: true,
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
    'no-debugger': 1,
    'no-underscore-dangle': 'off',
    'react/prop-types': 'off',
    'consistent-return': 'off',
    'array-callback-return': 'off',
    'no-param-reassign': 'off',
  },
};
