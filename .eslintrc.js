'use strict';

module.exports = {
  root: true,
  extends: [
    '@wearegenki/eslint-config',
  ],
  parserOptions: {
    ecmaVersion: 8,
    sourceType: 'module',
  },
  env: {
    es6: true,
    browser: true,
  },
};
