module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  packageDir: {
    "import/no-extraneous-dependencies": ["error", { "devDependencies": false, "optionalDependencies": false, "peerDependencies": false }],
  }, 
  extends: [
    'airbnb-base',
    'eslint-config-airbnb-typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'prettier'
  ],
  overrides: [
],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    sourceType: 'module',
    project: 'tsconfig.json',
  },
  plugins: ['import', 'react', '@typescript-eslint', 'prettier'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'import/prefer-default-export': 'off',
    'linebreak-style': ['error', 'unix'],
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
      },
    ],
    quotes: ['warn', 'single'],
    'react/display-name': 'off',
    'react/prop-types': 0,
    semi: ['warn', 'always'],
  },
  settings: {
      react: {
          version: 'detect',  
      }
  }
};