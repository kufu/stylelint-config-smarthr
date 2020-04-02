module.exports = {
  processors: ['stylelint-processor-styled-components'],
  extends: [
    'stylelint-config-standard',
    'stylelint-config-styled-components',
    'stylelint-config-prettier'
  ],
  syntax: 'scss',
  rules: {
    'value-keyword-case': ['lower', {
      ignoreKeywords: 'dummyValue'
    }],
    'property-case': 'lower',
    'unit-case': 'lower',
    'declaration-colon-space-before': 'never',
    'declaration-colon-space-after': 'always-single-line',
    'declaration-block-trailing-semicolon': 'always',
    'declaration-block-semicolon-newline-after': 'always',
    'block-closing-brace-empty-line-before': 'never',
    'block-closing-brace-newline-after': 'always',
    'block-opening-brace-space-before': 'always',
    'selector-attribute-brackets-space-inside': 'never',
    'selector-attribute-operator-space-after': 'never',
    'selector-attribute-operator-space-before': 'never',
    'selector-attribute-quotes': 'always',
    'selector-combinator-space-after': 'always',
    'selector-combinator-space-before': 'always',
    'string-quotes': 'single',
    'font-family-name-quotes': 'always-where-required',
    'value-list-comma-space-after': 'always',
    'number-leading-zero': 'never',
    'color-hex-length': 'short',
    'color-hex-case': 'lower',
    'no-descending-specificity': null,
  }
}