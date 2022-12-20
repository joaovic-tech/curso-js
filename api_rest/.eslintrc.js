module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: [
    'airbnb-base',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'no-console': 'off',
    'linebreak-style': 'off',
    'class-methods-use-this': 'off',
    'import/first': 'off',
    'quotes': 'off',
    'quote-props': 'off',
    'arrow-body-style': 'off',
    'strict': 'off',
    'no-param-reassign': 'off',
    'no-undef': 'off',
    'no-restricted-syntax': 'off',
  },
};
