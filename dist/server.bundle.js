/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// object to store loaded chunks
/******/ 	// "1" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		0:1
/******/ 	};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}

/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId, callback) {
/******/ 		// "1" is the signal for "already loaded"
/******/ 		if(!installedChunks[chunkId]) {
/******/ 			var chunk = require("./" + chunkId + ".server.bundle.js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 1;
/******/ 		}
/******/ 		callback.call(null, __webpack_require__);
/******/ 	};

/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__dirname) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _path = __webpack_require__(1);

	var _path2 = _interopRequireDefault(_path);

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _server = __webpack_require__(3);

	var _express = __webpack_require__(4);

	var _express2 = _interopRequireDefault(_express);

	var _webpack = __webpack_require__(5);

	var _webpack2 = _interopRequireDefault(_webpack);

	var _webpackDevMiddleware = __webpack_require__(6);

	var _webpackDevMiddleware2 = _interopRequireDefault(_webpackDevMiddleware);

	var _webpack3 = __webpack_require__(7);

	var _webpack4 = _interopRequireDefault(_webpack3);

	var _reactRouter = __webpack_require__(8);

	var _reactRedux = __webpack_require__(9);

	var _configureStore = __webpack_require__(10);

	var _configureStore2 = _interopRequireDefault(_configureStore);

	var _routes = __webpack_require__(12);

	var _routes2 = _interopRequireDefault(_routes);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var app = (0, _express2.default)();
	app.use(_express2.default.static(_path2.default.resolve(__dirname, '../../dist')));

	// Run Webpack dev server in development mode
	if (process.env.NODE_ENV === 'development') {
	  var compiler = (0, _webpack2.default)(_webpack4.default);

	  app.use((0, _webpackDevMiddleware2.default)(compiler, {
	    noInfo: true, publicPath: _webpack4.default.output.publicPath
	  }));
	}

	var renderFullPage = function renderFullPage(html, initialState) {
	  var assetsManifest = process.env.webpackAssets && JSON.parse(process.env.webpackAssets);

	  return '\n    <!doctype html>\n    <html>\n      <head>\n        <meta charset="utf-8">\n        <title>Isomorphic Redux Example</title>\n        ' + (process.env.NODE_ENV === 'production' ? '<link rel=\'stylesheet\' href=\'' + assetsManifest['/main.css'] + '\' />' : '') + '\n      </head>\n\n      <body>\n        <div class="js-reactApp">' + html + '</div>\n        <script>\n          window.__INITIAL_STATE__ = ' + JSON.stringify(initialState) + '; \n        </script>\n        <script src=\'' + (process.env.NODE_ENV === 'production' ? assetsManifest['/main.js'] : 'application.js') + '\'></script\n      </body>\n    </html>\n  ';
	};

	app.use(function (req, res, next) {
	  (0, _reactRouter.match)({ routes: _routes2.default, location: req.url }, function (err, redirectLocation, renderProps) {
	    if (err) {
	      return res.status(500).end(renderError(err));
	    }

	    if (redirectLocation) {
	      return res.redirect(302, redirectLocation.pathname + redirectLocation.search);
	    }

	    if (!renderProps) {
	      return next();
	    }

	    var initialView = (0, _server.renderToString)(_react2.default.createElement(_reactRouter.RouterContext, renderProps));

	    res.set('Content-Type', 'text/html').status(200).end(renderFullPage(initialView, {}));

	    //   const store = configureStore();

	    //   return fetchComponentData(store, renderProps.components, renderProps.params)
	    //     .then(() => {
	    //       const initialView = renderToString(
	    //         <Provider store={store}>
	    //           <IntlWrapper>
	    //             <RouterContext {...renderProps} />
	    //           </IntlWrapper>
	    //         </Provider>
	    //       );
	    //       const finalState = store.getState();

	    //       res
	    //         .set('Content-Type', 'text/html')
	    //         .status(200)
	    //         .end(renderFullPage(initialView, finalState));
	    //     })
	    //     .catch((error) => next(error));
	  });
	});

	app.listen(5000, function (error) {
	  if (!error) {
	    console.log('IsomorphicApp is running on port: 5000! Build something amazing!');
	  }
	});

	exports.default = app;
	/* WEBPACK VAR INJECTION */}.call(exports, "src/server"))

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("path");

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("react");

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = require("react-dom/server");

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = require("express");

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = require("webpack");

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = require("webpack-dev-middleware");

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__dirname) {'use strict';

	var webpack = __webpack_require__(5);

	module.exports = {
	  devtool: 'eval-source-map',
	  entry: __dirname + "/src/client/index.js",
	  output: {
	    path: __dirname + "/dist",
	    publicPath: '/',
	    filename: "application.js"
	  },

	  resolve: {
	    root: [__dirname + "/src/common", __dirname + "/src/scss", __dirname + "/src"],
	    extensions: ['', '.js', '.scss']
	  },

	  module: {
	    loaders: [{
	      test: /\.js$/,
	      exclude: /node_modules/,
	      loader: 'babel'
	    }, {
	      test: /\.scss$/,
	      loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]--[local]--[hash:base64:5]!sass'
	    }, {
	      test: /\.(jpg|png|svg)$/,
	      exclude: /images\/svg/,
	      loader: 'url?limit=8192'
	    }]
	  },

	  plugins: [new webpack.DefinePlugin({
	    'process.env': {
	      'NODE_ENV': JSON.stringify('development')
	    }
	  })]
	};
	/* WEBPACK VAR INJECTION */}.call(exports, ""))

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = require("react-router");

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = require("react-redux");

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _redux = __webpack_require__(11);

	var reducer = function reducer() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	  var action = arguments[1];
	  return state;
	};

	exports.default = function (initialState) {
	  var store = (0, _redux.createStore)(reducer, initialState);

	  return store;
	};

/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = require("redux");

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(8);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// require.ensure polyfill for node
	if (false) {
	  require.ensure = function requireModule(deps, callback) {
	    callback(require);
	  };
	}

	var rootRoute = {
	  component: 'div',
	  childRoutes: [{
	    path: '/',
	    component: __webpack_require__(13),
	    childRoutes: [__webpack_require__(14)]
	  }]
	};

	exports.default = rootRoute;

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(8);

	var _index = {
	  "link": "_2hl14"
	};

	var _index2 = _interopRequireDefault(_index);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ApplicationTemplate = function (_Component) {
	  _inherits(ApplicationTemplate, _Component);

	  function ApplicationTemplate() {
	    _classCallCheck(this, ApplicationTemplate);

	    return _possibleConstructorReturn(this, (ApplicationTemplate.__proto__ || Object.getPrototypeOf(ApplicationTemplate)).apply(this, arguments));
	  }

	  _createClass(ApplicationTemplate, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: 'vlad' },
	        _react2.default.createElement(
	          'a',
	          { className: _index2.default.link, onClick: function onClick() {
	              return console.log(123);
	            }, href: 'javascript://' },
	          'Main Templates!!'
	        ),
	        _react2.default.createElement(
	          _reactRouter.Link,
	          { to: '/welcome' },
	          'go to welcome'
	        ),
	        this.props.children
	      );
	    }
	  }]);

	  return ApplicationTemplate;
	}(_react.Component);

	module.exports = ApplicationTemplate;

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// require.ensure polyfill for node
	if (false) {
	  require.ensure = function requireModule(deps, callback) {
	    callback(require);
	  };
	}

	module.exports = {
	  path: 'welcome',
	  getComponent: function getComponent(nextState, cb) {
	    __webpack_require__.e/* nsure */(1, function (require) {
	      cb(null, __webpack_require__(15));
	    });
	  }
	};

/***/ }
/******/ ]);