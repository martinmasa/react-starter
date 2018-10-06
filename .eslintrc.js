module.exports = {
  "parser": "babel-eslint",
  "extends": [
    "airbnb",
    "prettier"
  ],
  "env": {
    "browser": true,
    "node": true,
    "jest": true,
    "es6": true
  },
  "plugins": [
    "react",
    "jsx-a11y",
    "import",
    "prettier"
  ],
  "rules": {
    "prettier/prettier": [
      "error",
      {
        "arrowParens": "always",
        "bracketSpacing": true,
        "jsxBracketSameLine": false,
        "parser": "babylon",
        "printWidth": 100,
        "semi": true,
        "singleQuote": true,
        "trailingComma": "none"
      }
    ],
    "arrow-body-style": "off",
    "arrow-parens": "off",
    "camelcase": "off",
    "class-methods-use-this": "off",
    "comma-dangle": "off",
    "function-paren-newline": "off",
    "object-curly-newline": "off",
    "implicit-arrow-linebreak": "off",
    "import/no-extraneous-dependencies": "off",
    "import/no-named-as-default": "off",
    "import/prefer-default-export": "off",
    "jsx-a11y/anchor-is-valid": "off",
    "jsx-a11y/label-has-associated-control": "off",
    "jsx-a11y/label-has-for": "off",
    "react/prefer-stateless-function": "off",
    "react/prop-types": "off",
    "react/require-default-props": "off",
    "react/jsx-one-expression-per-line": "off",
    "react/jsx-filename-extension": "off"
  }
};
