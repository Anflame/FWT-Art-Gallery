module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
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
  plugins: ['import', 'react', '@typescript-eslint', 'simple-import-sort', 'prettier'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'import/prefer-default-export': 'off',
    "import/no-extraneous-dependencies": [
      "error",
      {
        "devDependencies": [
          "**/*.stories.*",
          "**/.storybook/**/*.*"
        ],
        "peerDependencies": true
      }
    ],
    "simple-import-sort/imports": [
      "error",
      {
        "groups": [
          ["^react",
          "^@?\\w",
          "^[A-Z]{1}[a-zA-Z]+$",
          "comon-types$",
          "^\\./(?=.*/)(?!/?$)",
          "^\\.(?!/?$)",
          "constants$",
          "(jpg|jpeg|png|svg)$",
            "^.+\\.?(css)$"],
        ]
      }
    ],
    "simple-import-sort/exports": "error",
    "import/first": "error",
    "import/newline-after-import": "error",
    "import/no-duplicates": "error",
    "linebreak-style": ["error", process.env.NODE_ENV === 'prod' ? "unix" : "windows"],
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        printWidth: 80,
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