module.exports = {
  extends: [
    'stylelint-config-standard'
  ],
  customSyntax: 'postcss-styled-syntax',
  rules: {
    'value-keyword-case': null,
    'function-name-case': null,
    'declaration-empty-line-before': null,
    'selector-attribute-quotes': 'always',
    'font-family-name-quotes': 'always-where-required',
    'color-hex-length': 'short',
    'no-descending-specificity': null,
    'rule-empty-line-before': null,
    'alpha-value-notation': 'number',
    'color-function-notation': 'legacy',
    'selector-class-pattern': null,
    'value-no-vendor-prefix': true,
    'property-no-vendor-prefix': true,
    'no-empty-source': null,
    'declaration-property-value-disallowed-list': [
      {
        'overflow-wrap': ['anywhere'],
        'word-break': ['break-all'],
      },
      {
        'message': '`overflow-wrap: anywhere` `word-break: break-all` は英単語などが不自然に改行される可能性があるため非推奨です。本当に設定が必要か、もしくは他の指定で対応出来ないか検討してください。'
      }
    ]
  }
}
