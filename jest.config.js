module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/*.spec.ts'],
  testPathIgnorePatterns: ['/node_modules/', '/lib/'],
  globals: {
    'ts-jest': {
      diagnostics: false,
    },
  },
  verbose: true,
};
