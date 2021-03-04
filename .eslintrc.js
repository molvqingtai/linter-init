module.exports = {
  env: {
    node: true,
    es2021: true
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'standard-with-typescript',
    'plugin:prettier/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: ['@typescript-eslint'],
  rules: {
    'prettier/prettier': 'error',
    'no-void': 'off'
  }
}
