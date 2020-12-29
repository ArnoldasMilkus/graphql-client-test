module.exports = {
    extends: [
        'airbnb',
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'plugin:prettier/recommended',
    ],
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', 'prettier'],
    settings: {
        'import/parsers': {
            '@typescript-eslint/parser': ['.ts', '.tsx'],
        },
        'import/resolver': {
            typescript: {},
        },
        react:  {
            version:  'detect',
        },
    },
    parserOptions:  {
        ecmaVersion:  2018,
        sourceType:  'module',
    },
    rules: {
        'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
        'import/no-extraneous-dependencies': [0],
        '@typescript-eslint/indent': [1, 4],
        'indent': [1, 4],
        'react/jsx-indent-props': [0],
        'react/prefer-stateless-function': [0],
        'import/extensions': [0, {
            'tsx': 'always'
        }],
        'react/jsx-indent': [1, 4],
        'no-console': [0],
        'react/jsx-props-no-spreading': [0],
        'react/jsx-one-expression-per-line': [0],
        'react/destructuring-assignment': [0],
        'no-param-reassign': [0],
        'max-len': [1, 120],
        'jsx-a11y/label-has-associated-control': [0],
        "@typescript-eslint/explicit-function-return-type": "off",
        "prettier/prettier": [1],
        "jsx-a11y/anchor-is-valid": [0], // disable a href
        "jsx-a11y/alt-text": [0], // disable img alt
        "dot-notation": [0], // fix for window['something']
        "jsx-a11y/no-static-element-interactions": [0], // disable html role=
        "jsx-a11y/click-events-have-key-events": [0], // no keyboard listeners
        "react/button-has-type": [0],
        "@typescript-eslint/no-explicit-any": [0], // todo remove all ANY types
        "react/forbid-prop-types": [0],
        "spaced-comment": [0],
        "@typescript-eslint/no-this-alias": [0],
    },
    "overrides": [
        // roles list:
        // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin
        {
            // enable the rule specifically for TypeScript files
            "files": ["*.ts", "*.tsx"],
            "rules": {
                "@typescript-eslint/explicit-function-return-type": ["error"]
            }
        }
    ],
    env: {
        browser: true,
        node: true,
        es6: true
    }
};
