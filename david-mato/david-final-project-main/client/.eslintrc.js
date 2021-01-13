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
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    'no-console': 0,
    'no-debugger': 0,
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'no-unused-vars': 'off',
    'no-mixed-operators': 'off',
    'no-undef': 'off',
    'no-param-reassign': 'off',
    'consistent-return': 'off',
    'prefer-destructuring': 'off',
  },
};
