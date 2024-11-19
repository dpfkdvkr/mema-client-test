module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'fix',
        'docs',
        'design',
        'style',
        'refactor',
        'test',
        'chore',
        'comment',
        'remove',
        'rename',
      ],
    ],
    'subject-case': [2, 'always', ['sentence-case', 'lower-case']],
  },
};
