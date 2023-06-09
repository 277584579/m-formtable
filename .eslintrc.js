module.exports = {
    root: true,
    env: {
      node: true
    },
    'extends': [
      'plugin:vue/essential',
      'eslint:recommended',
      '@vue/typescript/recommended'
    ],
    parserOptions: {
      ecmaVersion: 2020
    },
    rules: {
      '@typescript-eslint/no-var-requires': 0,
      "@typescript-eslint/no-explicit-any": ["off"],
      "@typescript-eslint/no-this-alias": ["off"],  //this混淆
      "@typescript-eslint/no-unused-vars": ["off"], //强制未命名变量
      "@typescript-eslint/explicit-module-boundary-types": "off",
      'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
    }
  }
  