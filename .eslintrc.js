const { error } = require('winston');
module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'eslint-plugin-unused-imports'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'prettier',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js', 'libs/cassandra-client'],
  rules: {
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'off',
    '@typescript-eslint/no-unsafe-argument': 'off',
    '@typescript-eslint/no-unsafe-call': 'off',
    '@typescript-eslint/no-unsafe-return': 'off',
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/member-ordering': 'off',
    '@typescript-eslint/explicit-function-return-type': 'error',
    '@typescript-eslint/explicit-module-boundary-types': 'error',
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/adjacent-overload-signatures': 'error',
    '@typescript-eslint/consistent-indexed-object-style': 'error',
    // '@typescript-eslint/consistent-type-assertions': 'error',
    // '@typescript-eslint/consistent-type-definitions': 'error',
    // '@typescript-eslint/consistent-type-exports': 'error',
    // '@typescript-eslint/consistent-type-imports': 'error',

    "@typescript-eslint/no-duplicate-imports": ["error"],
    '@typescript-eslint/await-thenable': 'error',
    '@typescript-eslint/no-unnecessary-type-assertion': 'error',
    '@typescript-eslint/ban-types': 'error',
    "lines-between-class-members": "warn",
    'no-duplicate-imports' : "off",
    "no-console": "error",
    "sort-imports": ["error", {
      "ignoreCase": true,
      "ignoreDeclarationSort": true,
      "ignoreMemberSort": false,
      "memberSyntaxSortOrder": ["none", "all", "multiple", "single"],
      "allowSeparatedGroups": true
    }],

    "unused-imports/no-unused-imports": "error",
  },
};
