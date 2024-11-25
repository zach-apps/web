module.exports = {
  // ...other configurations

  // Add "plugin:vue/vue3-essential" or "plugin:vue/recommended" for Vue 3 projects
  extends: [
'plugin:vue/recommended',    // ...other extends configurations
  ],

  plugins: [
    'vue',
    // ...other plugins
  ],

  // Specify the parser for Vue files
  parser: 'vue-eslint-parser',

  // Add "parserOptions" for Vue 3 projects
  parserOptions: {
    parser: '@babel/eslint-parser', // or any other parser you're using
  },

  // ...other configurations
};

