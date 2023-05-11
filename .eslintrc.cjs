// Vue rules: https://eslint.vuejs.org/rules/
// EsLint rules: https://eslint.org/docs/latest/rules
module.exports = {
  env: {
    browser: true, es2021: true, node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-strongly-recommended',
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['vue'],
  rules: {
    'indent': ['error', 2],
    'quotes': ['error', 'single'],
    'semi': ['error', 'always'],
    'comma-spacing': ['error', {
      before: false, after: true,
    }],
    'vue/no-multi-spaces': 1,
    'vue/html-closing-bracket-newline': ['error', {
      singleline: 'never',
      multiline: 'never',
    }],
    'brace-style': [2, 'stroustrup', {
      allowSingleLine: true,
    }],
    'vue/max-attributes-per-line': 1,

    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,

    '@typescript-eslint/no-unused-vars': 'off',
    'import/first': 'off',
    'vue/component-tags-order': ['error', {
      order: [ 'script', 'template', 'style' ]
    }],
  },
};
