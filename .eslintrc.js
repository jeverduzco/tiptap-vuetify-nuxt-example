module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended',
    'prettier',
    'eslint:recommended',
    'plugin:vue/recommended'
  ],
  plugins: ['prettier'],
  // add your custom rules here
  rules: {
    'vue/html-closing-bracket-spacing': 'error',
    'vue/no-v-html': 'off',
  }
}
