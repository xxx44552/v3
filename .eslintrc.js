module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: [
        'plugin:vue/vue3-essential',
        '@vue/airbnb',
    ],
    parserOptions: {
        parser: 'babel-eslint',
    },
    rules: {
        'indent': ['error', 4],
        'comma-dangle': ['off'],
        'quote-props': ['off'],
        'no-useless-rename': ['error', {
            'ignoreDestructuring': false,
            'ignoreImport': false,
            'ignoreExport': true
        }],
        'strict': ['error', 'function'],
        'one-var': ['error', 'never'],
        'space-in-parens': ['error', 'never'],
        'no-console': [0],
        'no-undef': [0],
        'array-bracket-spacing': [0],
        'no-unused-vars': [1],
        'computed-property-spacing': [0],
        'camelcase': [1],
        'no-underscore-dangle': [0],
        'object-curly-spacing': [0],
        'arrow-parens': ['off'],
        'import/prefer-default-export': 'off',
        'vue/comment-directive': 0,
        'import/extensions': 'off'
    },
};
