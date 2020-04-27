module.exports = {
  parser: "@typescript-eslint/parser", // Specifies the ESLint parser
  parserOptions: {
    project: "tsconfig.json",
    sourceType: "module", // Allows for the use of imports
  },
  settings: {
    react: {
      version: "detect" // Tells eslint-plugin-react to automatically detect the version of React to use
    }
  },
  extends: [
    "plugin:react/recommended", // Uses the recommended rules from @eslint-plugin-react
    "plugin:@typescript-eslint/recommended", // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    "prettier/@typescript-eslint", // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    "plugin:prettier/recommended" // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
  ],
  rules: {
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    // e.g. "@typescript-eslint/explicit-function-return-type": "off",
    // "@typescript-eslint/class-name-casing": "error",
    // "@typescript-eslint/indent": [
    //   "error",
    //   4,
    //   {
    //     "CallExpression": {
    //       "arguments": "first"
    //     },
    //     "FunctionDeclaration": {
    //       "parameters": "first"
    //     },
    //     "FunctionExpression": {
    //       "parameters": "first"
    //     }
    //   }
    // ],
    // "@typescript-eslint/member-delimiter-style": [
    //   "error",
    //   {
    //     "multiline": {
    //       "delimiter": "semi",
    //       "requireLast": true
    //     },
    //     "singleline": {
    //       "delimiter": "semi",
    //       "requireLast": false
    //     }
    //   }
    // ],
    // "@typescript-eslint/member-ordering": "error",
    // "@typescript-eslint/no-empty-function": "error",
    // "@typescript-eslint/no-param-reassign": "error",
    // "@typescript-eslint/no-this-alias": "error",
    // "@typescript-eslint/quotes": [
    //   "error",
    //   "single"
    // ],
    // "@typescript-eslint/semi": [
    //   "error",
    //   "always"
    // ],
    // "@typescript-eslint/type-annotation-spacing": "error",
    // "arrow-parens": [
    //   "off",
    //   "as-needed"
    // ],
    // "camelcase": "off",
    // "comma-dangle": [
    //   "error",
    //   {
    //     "objects": "always-multiline",
    //     "arrays": "always-multiline",
    //     "functions": "never"
    //   }
    // ],
    // "curly": "error",
    // "dot-notation": "error",
    // "eol-last": "error",
    // "eqeqeq": [
    //   "error",
    //   "smart"
    // ],
    // "guard-for-in": "error",
    // "id-blacklist": "off",
    // "id-match": "off",
    // "import/no-extraneous-dependencies": "off",
    // "import/no-internal-modules": "off",
    // "import/order": "error",
    // "max-len": [
    //   "error",
    //   {
    //     "code": 120
    //   }
    // ],
    // "no-bitwise": "error",
    // "no-caller": "error",
    // "no-console": [
    //   "error",
    //   {
    //     "allow": [
    //       "warn",
    //       "dir",
    //       "timeLog",
    //       "assert",
    //       "clear",
    //       "count",
    //       "countReset",
    //       "group",
    //       "groupEnd",
    //       "table",
    //       "dirxml",
    //       "groupCollapsed",
    //       "Console",
    //       "profile",
    //       "profileEnd",
    //       "timeStamp",
    //       "context"
    //     ]
    //   }
    // ],
    // "no-constant-condition": "error",
    // "no-debugger": "error",
    // "no-duplicate-imports": "error",
    // "no-empty": "error",
    // "no-eval": "error",
    // "no-fallthrough": "error",
    // "no-irregular-whitespace": "error",
    // "no-multiple-empty-lines": "error",
    // "no-new-wrappers": "error",
    // "no-redeclare": "error",
    // "no-trailing-spaces": "error",
    // "no-underscore-dangle": "off",
    // "no-unused-expressions": "error",
    // "no-unused-labels": "error",
    // "no-var": "error",
    // "object-shorthand": "error",
    // "one-var": [
    //   "error",
    //   "never"
    // ],
    // "prefer-const": "error",
    // "prefer-object-spread": "error",
    // "prefer-template": "error",
    // "quote-props": [
    //   "error",
    //   "as-needed"
    // ],
    // "radix": "error",
    // "space-before-function-paren": [
    //   "error",
    //   {
    //     "anonymous": "always",
    //     "named": "never"
    //   }
    // ],
    // "spaced-comment": "error",
    // "@typescript-eslint/tslint/config": [
    //   "error",
    //   {
    //     "rules": {
    //       "array-bracket-spacing": [
    //         true,
    //         "never"
    //       ],
    //       "block-spacing": true,
    //       "brace-style": [
    //         true,
    //         "1tbs",
    //         {
    //           "allowSingleLine": true
    //         }
    //       ],
    //       "function-name": [
    //         true,
    //         {
    //           "function-regex": {},
    //           "method-regex": {},
    //           "private-method-regex": {},
    //           "protected-method-regex": {},
    //           "static-method-regex": {}
    //         }
    //       ],
    //       "import-spacing": true,
    //       "jsdoc-format": [
    //         true,
    //         "check-multiline-start"
    //       ],
    //       "no-boolean-literal-compare": true,
    //       "no-else-after-return": true,
    //       "no-function-constructor-with-string-args": true,
    //       "no-increment-decrement": true,
    //       "no-unused-variable": true,
    //       "object-curly-spacing": [
    //         true,
    //         "always"
    //       ],
    //       "object-shorthand-properties-first": true,
    //       "one-line": [
    //         true,
    //         "check-catch",
    //         "check-else",
    //         "check-open-brace",
    //         "check-whitespace"
    //       ],
    //       "prefer-array-literal": true,
    //       "space-in-parens": [
    //         true,
    //         "never"
    //       ],
    //       "ter-arrow-parens": [
    //         true,
    //         "as-needed",
    //         {
    //           "requireForBlockBody": true
    //         }
    //       ],
    //       "ter-computed-property-spacing": true,
    //       "ter-func-call-spacing": true,
    //       "ter-indent": [
    //         true,
    //         2,
    //         {
    //           "SwitchCase": 1,
    //           "MemberExpression": 1
    //         }
    //       ],
    //       "ter-prefer-arrow-callback": true,
    //       "typedef": [
    //         true,
    //         "property-declaration"
    //       ],
    //       "whitespace": [
    //         true,
    //         "check-branch",
    //         "check-decl",
    //         "check-module",
    //         "check-operator",
    //         "check-separator",
    //         "check-type",
    //         "check-typecast"
    //       ]
    //     }
    //   }
    // ]
  }
};
