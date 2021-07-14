const { alias } = require('react-app-rewire-alias');

module.exports = function override(config) {
  alias({
    '@assets': 'src/assets',
    '@components': 'src/components',
    '@layout': 'src/layout',
    '@pages': 'src/pages',
    '@utils': 'src/utils',
  })(config);

  return config;
};
