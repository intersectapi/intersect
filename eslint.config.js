// eslint.config.js
import antfu from '@antfu/eslint-config'

export default antfu({
  // Stylistic conflicts with Prettier
  stylistic: false,
  overrides: {
    typescript: {
      // MThe following rules conflict with Prettier
      'arrow-parens': ['off'],
      // The following rules conflict with Bun
      'node/prefer-global/process': ['off'],
      'unicorn/prefer-node-protocol': ['off'],
    },
  },
})