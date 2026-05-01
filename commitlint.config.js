module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat', // New feature
        'enhancement', // Improve existing feature
        'fix', // Bug fix
        'bugfix', // Bug fix (alias)
        'hotfix', // Production hotfix
        'docs', // Documentation
        'style', // Formatting, missing semicolons, etc.
        'refactor', // Code change that neither fixes a bug nor adds a feature
        'perf', // Performance improvement
        'test', // Adding or updating tests
        'chore', // Build process, dependencies, etc.
        'ci', // CI/CD changes
        'revert', // Revert a previous commit
      ],
    ],
    'subject-case': [0], // Allow any case in subject
    'body-max-line-length': [0], // No max line length for body
    'subject-full-stop': [0], // Allow trailing period
    'header-max-length': [0], // No max length for header
  },
};
