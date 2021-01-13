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
    'linebreak-style': 0,
    'global-require': 0,
    'eslint linebreak-style': [0, 'error', 'windows'],
    'no-underscore-dangle': 0,
    'react/prop-types': 0,
    'no-case-declarations': 0,
    'prefer-promise-reject-errors': 0,

  },
};
