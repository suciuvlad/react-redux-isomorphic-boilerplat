// require.ensure polyfill for node
if (typeof require.ensure !== 'function') {
  require.ensure = function requireModule(deps, callback) {
    callback(require);
  };
}

module.exports = {
  path: 'welcome',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('../pages/welcome'))
    }, 'welcome')
  }
}
