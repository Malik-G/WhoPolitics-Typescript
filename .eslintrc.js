module.exports = {
    parser: "@typescript-eslint/parser",
    extends: ["react-app", "eslint:recommended", "plugin:@typescript-eslint/recommended", "plugin:prettier/recommended"],
    plugins: ["react", "@typescript-eslint", "prettier"],
    env: {
        browser: true,
        node: true,
        es6: true
    },
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: "module",
        ecmaFeatures: {
            jsx: true
        }
    },
    ignorePatterns: ["node_modules/", "newrelic.js"],
    rules: {
        "sort-imports": "error",
        // remove the below as possible
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "@typescript-eslint/no-explicit-any": "off"
    },
    settings: {
        react: {
            version: "detect"
        }
    }
};