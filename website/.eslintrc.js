module.exports = {
    root: true,
    parserOptions: {
        sourceType: 'module',
        ecmaVersion: 9,
    },
    env: {
        browser: true,
        node: true
    },
    extends: [
        'airbnb-base',
        'plugin:vue/recommended'
    ],
    plugins: [
        'only-warn',
    ],
    rules: {
        'prefer-destructuring': ['error', {'object': true, 'array': false}],
        'import/extensions': ['error', 'never'],
        'linebreak-style': 0,
        'arrow-body-style': 0,
        'global-require': 0,
        'import/no-default-export': 0,
        'import/no-unresolved': 0, // Doesn't work in .vue files anyway
        'import/prefer-default-export': 0,
        'indent': [1, 4],
        'lines-between-class-members': 0,
        'max-len': ['warn', {code: 140}],
        'no-console': 1,
        'no-else-return': 0,
        'no-param-reassign': 0,
        'no-plusplus': 0,
        'no-return-await': 0,
        'no-shadow': 0,
        'object-curly-newline': ['warn', {'consistent': true}],
        'object-curly-spacing': 0,
        'operator-linebreak': 0,
        'semi': [1, 'never'],
        'import/order': 0,
        'vue/component-name-in-template-casing': ["error", "PascalCase", {
            "registeredComponentsOnly": true,
            "ignores": []
        }],
        'vue/html-closing-bracket-newline': ['error', {
            'singleline': 'never',
            'multiline': 'always'
        }],
        'vue/html-indent': ['warn', 4],
        'vue/max-attributes-per-line': 'warn',
        'max-len': 0,
        'vue/no-v-html': 0,
    },

    'overrides': [{
        'files': [ '**/*.vue' ],
        'rules': {
            'import/no-default-export': 0,
        }
      }
    ]
};
