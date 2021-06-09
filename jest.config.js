module.exports = {
  preset: 'ts-jest/presets/js-with-babel',
  testEnvironment: 'node',
  testMatch: ['**/*.spec.ts'],
  testPathIgnorePatterns: ['/node_modules/', '/lib/'],
  /**
   * Files inside node_modules are not transformed by default, we need to
   * transform the specific ESM modules with `babel-ts`.
   */
  transformIgnorePatterns: ['/node_modules/(?!(@digitalbazaar/cborld))'],
  moduleNameMapper: {
    /**
     * The default entry point of `cborld` has been wrapped with the `esm`
     * loader that supposed to export CJS modules, but it has compatibility
     * issue with Jest >=25.x. Let's point to the ESM module and transform
     * with Babel instead.
     */
    '@digitalbazaar/cborld': '<rootDir>/node_modules/@digitalbazaar/cborld/main.js',
  },
  globals: {
    'ts-jest': {
      /**
       * FIXME: Inline Babel options supposed to work, but..
       *
       * > babel.config.js
       *
       *   module.exports = {
       *     plugins: ['@babel/plugin-transform-modules-commonjs'],
       *   };
       *
       * https://kulshekhar.github.io/ts-jest/docs/getting-started/options/babelConfig
       */
      babelConfig: {
        plugins: ['@babel/plugin-transform-modules-commonjs'],
      },
      /**
       * Don't Be Afraid to Get Your Hands Dirty! ;)
       */
      diagnostics: false,
    },
  },
  verbose: true,
};
