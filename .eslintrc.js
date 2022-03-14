module.exports = {
  env: {
    es6: true,
  },
  extends: ['airbnb', 'prettier', 'prettier/react'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    __DEV__: 'readonly',
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.jsx', '.js'],
      },
    ],
    'global-require': 'off',
    'jsx-a11y/no-autofocus': 'off',
    'import/prefer-default-export': 'off',
    'react/prop-types': 'off',
    'no-shadow': 'off',
    'no-nested-ternary': 'off',
    'no-underscore-dangle': 'off',
    'no-plusplus': 'off',
    'no-continue': 'off',
    'prefer-destructuring': 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-unused-expressions': [
      'error',
      {
        allowTaggedTemplates: true,
      },
    ],
    'react/jsx-props-no-spreading': 'off',
    camelcase: 'off',
    'no-undef': 'warn',
    'jsx-a11y/media-has-caption': 'off',
    'react/destructuring-assignment': 'off',
    'no-useless-escape': 'off',
  },
};
