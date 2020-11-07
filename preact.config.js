const { parsed } = require('dotenv-safe').config();

export default {
  /**
   * Function that mutates the original webpack config.
   * Supports asynchronous changes when a promise is returned (or it's an async function).
   *
   * @param {object} config - original webpack config.
   * @param {object} env - options passed to the CLI.
   * @param {WebpackConfigHelpers} helpers - object with useful helpers for working with the webpack config.
   * @param {object} options - this is mainly relevant for plugins (will always be empty in the config), default to an empty object
   **/
  webpack(config, env, helpers, options) {
    // Changing entry point names will likely break all third-party imports so don't.
    config.entry = {
      'recipe-details': './recipe-details.ts',
      'recipe-index': './recipe-index.ts',
    };
    // Set proper name for embed file. This will use entry point as the name (defined above)
    config.output.filename = '[name].js';

    // Set process.env...
    const { plugin } = helpers.getPluginsByName(config, 'DefinePlugin')[0];
    Object.assign(
      plugin.definitions,

      Object.keys(parsed).reduce(
        (env, key) => ({
          ...env,
          [`process.env.${key}`]: JSON.stringify(parsed[key]),
        }),
        {},
      ),
    );
  },
};
