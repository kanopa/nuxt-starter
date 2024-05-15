import { createConfigForNuxt } from '@nuxt/eslint-config/flat'
import prettier from 'eslint-plugin-prettier/recommended'
import simpleImportSort from 'eslint-plugin-simple-import-sort'
import pluginVue from 'eslint-plugin-vue'

export default createConfigForNuxt(
  {
    features: {
      typescript: {
        strict: true,
      },
    },
  },
  {
    plugins: {
      'simple-import-sort': simpleImportSort,
    },
    rules: {
      'simple-import-sort/imports': 'error',
      'no-console': 'off',
      curly: ['error', 'multi-or-nest'],
      eqeqeq: ['error', 'always', { null: 'ignore' }],
      'no-loss-of-precision': 'error',
      'no-sparse-arrays': 'error',
      'vue/no-v-html': 'off',
      'vue/eqeqeq': ['error', 'always', { null: 'ignore' }],
      'vue/html-quotes': ['error', 'double'],
      'vue/max-attributes-per-line': 'off',
      'vue/no-loss-of-precision': 'error',
      'vue/no-sparse-arrays': 'error',
      'vue/no-unused-refs': 'error',
      'vue/no-useless-v-bind': 'error',
      'vue/prop-name-casing': ['error', 'camelCase'],
      'vue/require-default-prop': 'off',
      'vue/space-infix-ops': 'error',
      'vue/singleline-html-element-content-newline': 'off',
      'vue/html-self-closing': [
        'error',
        {
          html: {
            void: 'always',
            normal: 'always',
            component: 'always',
          },
          svg: 'always',
          math: 'always',
        },
      ],
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          ignoreRestSiblings: true,
          argsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
          destructuredArrayIgnorePattern: '^_',
        },
      ],
    },
  },
).prepend(prettier, pluginVue.configs['flat/recommended'])
