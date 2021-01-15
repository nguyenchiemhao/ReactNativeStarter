module.exports = {
  root: true,
  extends: ['@react-native-community', 'prettier/prettier'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'off',
    '@typescript-eslint/no-use-before-define': [
      'error',
      {functions: false, variables: true, classes: true},
    ],
  },
};
