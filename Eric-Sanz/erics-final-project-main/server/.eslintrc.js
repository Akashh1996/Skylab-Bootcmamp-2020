module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
    jest: true,
  },
  extends: [
    'airbnb-base',
  ],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    'linebreak-style': 0,
    'global-require': 0,
    'no-param-reassign': 0,
    'max-len': 0,
    'no-undescore-dangle': 0,
    'eslint linebreak-style': [0, 'error', 'windows'],
  },
};
