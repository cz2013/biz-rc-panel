(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-dom"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "react-dom"], factory);
	else if(typeof exports === 'object')
		exports["Panel"] = factory(require("react"), require("react-dom"));
	else
		root["Panel"] = factory(root["react"], root["react-dom"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

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

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _reactAddonsCssTransitionGroup = __webpack_require__(3);

	var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

	__webpack_require__(26);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * React Panel Component
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @Author: chenzhen
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @Date:   2017-07-18
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

	/**
	 * Panel
	 * @class
	 * @param {String}      [props.customClass]    自定义 class
	 * @param {Number}      [props.marginLeft]     左边距（px），默认 200
	 * @param {Number}      [props.top]            顶部距（px），默认 0，用于非body内展示，头部有距离的情况
	 * @param {String}      [props.theme]          主题
	 * @param {Boolean}     [props.leftCloseAble]  是否展示左侧关闭按钮
	 * @param {Boolean}     [props.titleAble]      是否展示title
	 * @param {String}      [props.title]          屉浮层标题
	 * @param {String}      [props.content]        屉浮层内容，也可以是dom
	 * @param {Boolean}     [props.buttonsAble]    是否展示底部默认button
	 * @param {Array}       [props.buttons]        底部按钮的数组对象
	 * @param {Function}    [props.onBeforeClose]  关闭前回调，返回 false 则不关闭
	 * @param {Function}    [props.onCancelFunc]   取消前回调，返回 false 则不关闭
	 * @param {Function}    [props.submitFunc]     提交函数，底部提交按钮点击后触发
	 * @param {Number}      [props.zIndex]         抽屉浮层标 z-index
	 */

	var defaultClass = 'biz-panel',
	    prefix = 'biz-panel-',
	    dataKey = 'bizPanel',
	    speed = 200;
	var currentIndex = 800; //antd的modal浮层z-index是1000

	var Panel = function (_Component) {
	    _inherits(Panel, _Component);

	    _createClass(Panel, [{
	        key: 'getDefaultProps',
	        value: function getDefaultProps() {
	            return {
	                customClass: '',
	                marginLeft: 200,
	                top: '0',
	                theme: "",
	                leftCloseAble: false,
	                titleAble: true,
	                title: 'Title',
	                content: 'Content',
	                buttonsAble: true,
	                buttons: [{
	                    value: '确认',
	                    isSubmit: true
	                }, {
	                    value: '取消'
	                }],
	                onBeforeClose: function onBeforeClose() {
	                    return true;
	                },
	                onCancelFunc: function onCancelFunc() {
	                    return true;
	                },
	                submitFunc: function submitFunc(closeFunc) {
	                    closeFunc();
	                },
	                zIndex: currentIndex
	            };
	        }
	    }]);

	    function Panel(props) {
	        _classCallCheck(this, Panel);

	        var _this = _possibleConstructorReturn(this, (Panel.__proto__ || Object.getPrototypeOf(Panel)).call(this, props));

	        currentIndex++;
	        currentIndex++;

	        _this.state = {
	            visible: true,
	            config: _this.getDefaultProps()
	        };
	        _this.setState({ config: _this._setConfig(props || {}) });
	        return _this;
	    }

	    _createClass(Panel, [{
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {
	            var props = nextProps;
	            this.setState({ config: this._setConfig(props || {}) });
	        }
	    }, {
	        key: '_setConfig',
	        value: function _setConfig(props) {
	            var newConfig = this.state.config;

	            for (var key in props) {
	                newConfig[key] = props[key];
	            }
	            newConfig.wrapClass = [defaultClass, newConfig.customClass, prefix + newConfig.theme].join(' ');
	            return newConfig;
	        }
	    }, {
	        key: '_close',
	        value: function _close() {
	            var result = true;
	            //取消前运行函数，只要取消就运行，也只有返回true，才能关闭弹窗
	            if (typeof this.state.config.onBeforeClose == 'function') {
	                result = this.state.config.onBeforeClose();
	                if (result === false) {
	                    return;
	                }
	            }

	            currentIndex--;
	            currentIndex--;
	            this.setState({ visible: false });
	            if (this.props.el) {
	                var all = document.getElementsByClassName('ReactPanel'),
	                    el = this.props.el;

	                setTimeout(function () {
	                    el.removeChild(all[all.length - 1]);
	                }, speed);
	            }
	        }
	    }, {
	        key: '_cancel',
	        value: function _cancel() {
	            var result = true;
	            //取消前运行函数，只要取消就运行，也只有返回true，才能关闭弹窗
	            if (typeof this.state.config.onCancelFunc == 'function') {
	                result = this.state.config.onCancelFunc();
	                if (result === false) {
	                    return;
	                }
	            }
	            this._close();
	        }
	    }, {
	        key: '_submit',
	        value: function _submit() {
	            this.state.config.submitFunc && this.state.config.submitFunc(this._close.bind(this));
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this2 = this;

	            var _state = this.state,
	                visible = _state.visible,
	                config = _state.config,
	                zIndex = config.zIndex,
	                marginLeft = config.marginLeft,
	                wrapClass = config.wrapClass,
	                top = config.top,
	                leftCloseAble = config.leftCloseAble,
	                titleAble = config.titleAble,
	                title = config.title,
	                content = config.content,
	                buttonsAble = config.buttonsAble,
	                buttons = config.buttons;


	            return _react2.default.createElement(
	                _reactAddonsCssTransitionGroup2.default,
	                {
	                    transitionName: 'panelAnimate',
	                    transitionAppear: true,
	                    transitionAppearTimeout: speed,
	                    transitionLeave: true,
	                    transitionLeaveTimeout: speed
	                },
	                visible ? _react2.default.createElement(
	                    'div',
	                    { style: { zIndex: zIndex, paddingBottom: top, top: top }, className: wrapClass, key: dataKey + zIndex },
	                    _react2.default.createElement('div', { className: 'biz-panel-margin', style: { marginLeft: marginLeft } }),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'biz-panel-wrap' },
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'biz-panel-body' },
	                            titleAble ? _react2.default.createElement(
	                                'div',
	                                { className: 'biz-panel-title' },
	                                _react2.default.createElement(
	                                    'span',
	                                    { className: 'biz-panel-title-text' },
	                                    title
	                                ),
	                                _react2.default.createElement(
	                                    'div',
	                                    { className: 'biz-panel-close', onClick: function onClick() {
	                                            return _this2._close();
	                                        } },
	                                    _react2.default.createElement('span', { className: 'biz-panel-close-x' })
	                                )
	                            ) : null,
	                            _react2.default.createElement(
	                                'div',
	                                { className: 'biz-panel-content' },
	                                _react2.default.createElement(
	                                    'div',
	                                    { className: 'panel-content' },
	                                    content
	                                )
	                            ),
	                            buttonsAble ? _react2.default.createElement(
	                                'div',
	                                { className: 'biz-panel-bottom' },
	                                buttons.map(function (btn, index) {
	                                    return _react2.default.createElement(
	                                        'button',
	                                        { className: btn.isSubmit ? "biz-button biz-button-primary" : "biz-button biz-button-lg", onClick: btn.isSubmit ? _this2._submit.bind(_this2) : _this2._cancel.bind(_this2) },
	                                        btn.value
	                                    );
	                                })
	                            ) : null,
	                            leftCloseAble ? _react2.default.createElement('a', { className: 'biz-panel-leftClose', style: { top: top }, onClick: function onClick() {
	                                    return _this2._close();
	                                } }) : null
	                        )
	                    )
	                ) : null,
	                visible ? _react2.default.createElement('div', { style: { zIndex: zIndex - 1 }, className: 'biz-mask', key: dataKey + "mask" }) : null
	            );
	        }
	    }]);

	    return Panel;
	}(_react.Component);

	Panel.open = function (config, el) {
	    this.node = document.createElement('div');
	    this.node.className = 'ReactPanel';
	    el.appendChild(this.node);
	    _reactDom2.default.render(_react2.default.createElement(Panel, _extends({}, config, { el: el })), this.node);
	    return this.node;
	};
	Panel.close = function (el) {
	    var all = document.getElementsByClassName('ReactPanel');

	    setTimeout(function () {
	        el.removeChild(all[all.length - 1]);
	    }, speed);
	};

	module.exports = Panel;

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	module.exports = __webpack_require__(4);


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(6);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _TransitionGroup = __webpack_require__(14);

	var _TransitionGroup2 = _interopRequireDefault(_TransitionGroup);

	var _CSSTransitionGroupChild = __webpack_require__(18);

	var _CSSTransitionGroupChild2 = _interopRequireDefault(_CSSTransitionGroupChild);

	var _PropTypes = __webpack_require__(25);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var propTypes = {
	  transitionName: _PropTypes.nameShape.isRequired,

	  transitionAppear: _propTypes2.default.bool,
	  transitionEnter: _propTypes2.default.bool,
	  transitionLeave: _propTypes2.default.bool,
	  transitionAppearTimeout: (0, _PropTypes.transitionTimeout)('Appear'),
	  transitionEnterTimeout: (0, _PropTypes.transitionTimeout)('Enter'),
	  transitionLeaveTimeout: (0, _PropTypes.transitionTimeout)('Leave')
	};

	var defaultProps = {
	  transitionAppear: false,
	  transitionEnter: true,
	  transitionLeave: true
	};

	var CSSTransitionGroup = function (_React$Component) {
	  _inherits(CSSTransitionGroup, _React$Component);

	  function CSSTransitionGroup() {
	    var _temp, _this, _ret;

	    _classCallCheck(this, CSSTransitionGroup);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this._wrapChild = function (child) {
	      return _react2.default.createElement(_CSSTransitionGroupChild2.default, {
	        name: _this.props.transitionName,
	        appear: _this.props.transitionAppear,
	        enter: _this.props.transitionEnter,
	        leave: _this.props.transitionLeave,
	        appearTimeout: _this.props.transitionAppearTimeout,
	        enterTimeout: _this.props.transitionEnterTimeout,
	        leaveTimeout: _this.props.transitionLeaveTimeout
	      }, child);
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  // We need to provide this childFactory so that
	  // ReactCSSTransitionGroupChild can receive updates to name, enter, and
	  // leave while it is leaving.


	  CSSTransitionGroup.prototype.render = function render() {
	    return _react2.default.createElement(_TransitionGroup2.default, _extends({}, this.props, { childFactory: this._wrapChild }));
	  };

	  return CSSTransitionGroup;
	}(_react2.default.Component);

	CSSTransitionGroup.displayName = 'CSSTransitionGroup';


	CSSTransitionGroup.propTypes = process.env.NODE_ENV !== "production" ? propTypes : {};
	CSSTransitionGroup.defaultProps = defaultProps;

	exports.default = CSSTransitionGroup;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 5 */
/***/ function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};

	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.

	var cachedSetTimeout;
	var cachedClearTimeout;

	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }


	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }



	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	process.prependListener = noop;
	process.prependOnceListener = noop;

	process.listeners = function (name) { return [] }

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	if (process.env.NODE_ENV !== 'production') {
	  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
	    Symbol.for &&
	    Symbol.for('react.element')) ||
	    0xeac7;

	  var isValidElement = function(object) {
	    return typeof object === 'object' &&
	      object !== null &&
	      object.$$typeof === REACT_ELEMENT_TYPE;
	  };

	  // By explicitly using `prop-types` you are opting into new development behavior.
	  // http://fb.me/prop-types-in-prod
	  var throwOnDirectAccess = true;
	  module.exports = __webpack_require__(7)(isValidElement, throwOnDirectAccess);
	} else {
	  // By explicitly using `prop-types` you are opting into new production behavior.
	  // http://fb.me/prop-types-in-prod
	  module.exports = __webpack_require__(13)();
	}

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	var emptyFunction = __webpack_require__(8);
	var invariant = __webpack_require__(9);
	var warning = __webpack_require__(10);

	var ReactPropTypesSecret = __webpack_require__(11);
	var checkPropTypes = __webpack_require__(12);

	module.exports = function(isValidElement, throwOnDirectAccess) {
	  /* global Symbol */
	  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
	  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

	  /**
	   * Returns the iterator method function contained on the iterable object.
	   *
	   * Be sure to invoke the function with the iterable as context:
	   *
	   *     var iteratorFn = getIteratorFn(myIterable);
	   *     if (iteratorFn) {
	   *       var iterator = iteratorFn.call(myIterable);
	   *       ...
	   *     }
	   *
	   * @param {?object} maybeIterable
	   * @return {?function}
	   */
	  function getIteratorFn(maybeIterable) {
	    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
	    if (typeof iteratorFn === 'function') {
	      return iteratorFn;
	    }
	  }

	  /**
	   * Collection of methods that allow declaration and validation of props that are
	   * supplied to React components. Example usage:
	   *
	   *   var Props = require('ReactPropTypes');
	   *   var MyArticle = React.createClass({
	   *     propTypes: {
	   *       // An optional string prop named "description".
	   *       description: Props.string,
	   *
	   *       // A required enum prop named "category".
	   *       category: Props.oneOf(['News','Photos']).isRequired,
	   *
	   *       // A prop named "dialog" that requires an instance of Dialog.
	   *       dialog: Props.instanceOf(Dialog).isRequired
	   *     },
	   *     render: function() { ... }
	   *   });
	   *
	   * A more formal specification of how these methods are used:
	   *
	   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
	   *   decl := ReactPropTypes.{type}(.isRequired)?
	   *
	   * Each and every declaration produces a function with the same signature. This
	   * allows the creation of custom validation functions. For example:
	   *
	   *  var MyLink = React.createClass({
	   *    propTypes: {
	   *      // An optional string or URI prop named "href".
	   *      href: function(props, propName, componentName) {
	   *        var propValue = props[propName];
	   *        if (propValue != null && typeof propValue !== 'string' &&
	   *            !(propValue instanceof URI)) {
	   *          return new Error(
	   *            'Expected a string or an URI for ' + propName + ' in ' +
	   *            componentName
	   *          );
	   *        }
	   *      }
	   *    },
	   *    render: function() {...}
	   *  });
	   *
	   * @internal
	   */

	  var ANONYMOUS = '<<anonymous>>';

	  // Important!
	  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
	  var ReactPropTypes = {
	    array: createPrimitiveTypeChecker('array'),
	    bool: createPrimitiveTypeChecker('boolean'),
	    func: createPrimitiveTypeChecker('function'),
	    number: createPrimitiveTypeChecker('number'),
	    object: createPrimitiveTypeChecker('object'),
	    string: createPrimitiveTypeChecker('string'),
	    symbol: createPrimitiveTypeChecker('symbol'),

	    any: createAnyTypeChecker(),
	    arrayOf: createArrayOfTypeChecker,
	    element: createElementTypeChecker(),
	    instanceOf: createInstanceTypeChecker,
	    node: createNodeChecker(),
	    objectOf: createObjectOfTypeChecker,
	    oneOf: createEnumTypeChecker,
	    oneOfType: createUnionTypeChecker,
	    shape: createShapeTypeChecker
	  };

	  /**
	   * inlined Object.is polyfill to avoid requiring consumers ship their own
	   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
	   */
	  /*eslint-disable no-self-compare*/
	  function is(x, y) {
	    // SameValue algorithm
	    if (x === y) {
	      // Steps 1-5, 7-10
	      // Steps 6.b-6.e: +0 != -0
	      return x !== 0 || 1 / x === 1 / y;
	    } else {
	      // Step 6.a: NaN == NaN
	      return x !== x && y !== y;
	    }
	  }
	  /*eslint-enable no-self-compare*/

	  /**
	   * We use an Error-like object for backward compatibility as people may call
	   * PropTypes directly and inspect their output. However, we don't use real
	   * Errors anymore. We don't inspect their stack anyway, and creating them
	   * is prohibitively expensive if they are created too often, such as what
	   * happens in oneOfType() for any type before the one that matched.
	   */
	  function PropTypeError(message) {
	    this.message = message;
	    this.stack = '';
	  }
	  // Make `instanceof Error` still work for returned errors.
	  PropTypeError.prototype = Error.prototype;

	  function createChainableTypeChecker(validate) {
	    if (process.env.NODE_ENV !== 'production') {
	      var manualPropTypeCallCache = {};
	      var manualPropTypeWarningCount = 0;
	    }
	    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
	      componentName = componentName || ANONYMOUS;
	      propFullName = propFullName || propName;

	      if (secret !== ReactPropTypesSecret) {
	        if (throwOnDirectAccess) {
	          // New behavior only for users of `prop-types` package
	          invariant(
	            false,
	            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
	            'Use `PropTypes.checkPropTypes()` to call them. ' +
	            'Read more at http://fb.me/use-check-prop-types'
	          );
	        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
	          // Old behavior for people using React.PropTypes
	          var cacheKey = componentName + ':' + propName;
	          if (
	            !manualPropTypeCallCache[cacheKey] &&
	            // Avoid spamming the console because they are often not actionable except for lib authors
	            manualPropTypeWarningCount < 3
	          ) {
	            warning(
	              false,
	              'You are manually calling a React.PropTypes validation ' +
	              'function for the `%s` prop on `%s`. This is deprecated ' +
	              'and will throw in the standalone `prop-types` package. ' +
	              'You may be seeing this warning due to a third-party PropTypes ' +
	              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.',
	              propFullName,
	              componentName
	            );
	            manualPropTypeCallCache[cacheKey] = true;
	            manualPropTypeWarningCount++;
	          }
	        }
	      }
	      if (props[propName] == null) {
	        if (isRequired) {
	          if (props[propName] === null) {
	            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
	          }
	          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
	        }
	        return null;
	      } else {
	        return validate(props, propName, componentName, location, propFullName);
	      }
	    }

	    var chainedCheckType = checkType.bind(null, false);
	    chainedCheckType.isRequired = checkType.bind(null, true);

	    return chainedCheckType;
	  }

	  function createPrimitiveTypeChecker(expectedType) {
	    function validate(props, propName, componentName, location, propFullName, secret) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== expectedType) {
	        // `propValue` being instance of, say, date/regexp, pass the 'object'
	        // check, but we can offer a more precise error message here rather than
	        // 'of type `object`'.
	        var preciseType = getPreciseType(propValue);

	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createAnyTypeChecker() {
	    return createChainableTypeChecker(emptyFunction.thatReturnsNull);
	  }

	  function createArrayOfTypeChecker(typeChecker) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (typeof typeChecker !== 'function') {
	        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
	      }
	      var propValue = props[propName];
	      if (!Array.isArray(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
	      }
	      for (var i = 0; i < propValue.length; i++) {
	        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
	        if (error instanceof Error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createElementTypeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      if (!isValidElement(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createInstanceTypeChecker(expectedClass) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!(props[propName] instanceof expectedClass)) {
	        var expectedClassName = expectedClass.name || ANONYMOUS;
	        var actualClassName = getClassName(props[propName]);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createEnumTypeChecker(expectedValues) {
	    if (!Array.isArray(expectedValues)) {
	      process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOf, expected an instance of array.') : void 0;
	      return emptyFunction.thatReturnsNull;
	    }

	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      for (var i = 0; i < expectedValues.length; i++) {
	        if (is(propValue, expectedValues[i])) {
	          return null;
	        }
	      }

	      var valuesString = JSON.stringify(expectedValues);
	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createObjectOfTypeChecker(typeChecker) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (typeof typeChecker !== 'function') {
	        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
	      }
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
	      }
	      for (var key in propValue) {
	        if (propValue.hasOwnProperty(key)) {
	          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	          if (error instanceof Error) {
	            return error;
	          }
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createUnionTypeChecker(arrayOfTypeCheckers) {
	    if (!Array.isArray(arrayOfTypeCheckers)) {
	      process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
	      return emptyFunction.thatReturnsNull;
	    }

	    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	      var checker = arrayOfTypeCheckers[i];
	      if (typeof checker !== 'function') {
	        warning(
	          false,
	          'Invalid argument supplid to oneOfType. Expected an array of check functions, but ' +
	          'received %s at index %s.',
	          getPostfixForTypeWarning(checker),
	          i
	        );
	        return emptyFunction.thatReturnsNull;
	      }
	    }

	    function validate(props, propName, componentName, location, propFullName) {
	      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	        var checker = arrayOfTypeCheckers[i];
	        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
	          return null;
	        }
	      }

	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createNodeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!isNode(props[propName])) {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createShapeTypeChecker(shapeTypes) {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
	      }
	      for (var key in shapeTypes) {
	        var checker = shapeTypes[key];
	        if (!checker) {
	          continue;
	        }
	        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	        if (error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function isNode(propValue) {
	    switch (typeof propValue) {
	      case 'number':
	      case 'string':
	      case 'undefined':
	        return true;
	      case 'boolean':
	        return !propValue;
	      case 'object':
	        if (Array.isArray(propValue)) {
	          return propValue.every(isNode);
	        }
	        if (propValue === null || isValidElement(propValue)) {
	          return true;
	        }

	        var iteratorFn = getIteratorFn(propValue);
	        if (iteratorFn) {
	          var iterator = iteratorFn.call(propValue);
	          var step;
	          if (iteratorFn !== propValue.entries) {
	            while (!(step = iterator.next()).done) {
	              if (!isNode(step.value)) {
	                return false;
	              }
	            }
	          } else {
	            // Iterator will provide entry [k,v] tuples rather than values.
	            while (!(step = iterator.next()).done) {
	              var entry = step.value;
	              if (entry) {
	                if (!isNode(entry[1])) {
	                  return false;
	                }
	              }
	            }
	          }
	        } else {
	          return false;
	        }

	        return true;
	      default:
	        return false;
	    }
	  }

	  function isSymbol(propType, propValue) {
	    // Native Symbol.
	    if (propType === 'symbol') {
	      return true;
	    }

	    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
	    if (propValue['@@toStringTag'] === 'Symbol') {
	      return true;
	    }

	    // Fallback for non-spec compliant Symbols which are polyfilled.
	    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
	      return true;
	    }

	    return false;
	  }

	  // Equivalent of `typeof` but with special handling for array and regexp.
	  function getPropType(propValue) {
	    var propType = typeof propValue;
	    if (Array.isArray(propValue)) {
	      return 'array';
	    }
	    if (propValue instanceof RegExp) {
	      // Old webkits (at least until Android 4.0) return 'function' rather than
	      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
	      // passes PropTypes.object.
	      return 'object';
	    }
	    if (isSymbol(propType, propValue)) {
	      return 'symbol';
	    }
	    return propType;
	  }

	  // This handles more types than `getPropType`. Only used for error messages.
	  // See `createPrimitiveTypeChecker`.
	  function getPreciseType(propValue) {
	    if (typeof propValue === 'undefined' || propValue === null) {
	      return '' + propValue;
	    }
	    var propType = getPropType(propValue);
	    if (propType === 'object') {
	      if (propValue instanceof Date) {
	        return 'date';
	      } else if (propValue instanceof RegExp) {
	        return 'regexp';
	      }
	    }
	    return propType;
	  }

	  // Returns a string that is postfixed to a warning about an invalid type.
	  // For example, "undefined" or "of type array"
	  function getPostfixForTypeWarning(value) {
	    var type = getPreciseType(value);
	    switch (type) {
	      case 'array':
	      case 'object':
	        return 'an ' + type;
	      case 'boolean':
	      case 'date':
	      case 'regexp':
	        return 'a ' + type;
	      default:
	        return type;
	    }
	  }

	  // Returns class name of the object, if any.
	  function getClassName(propValue) {
	    if (!propValue.constructor || !propValue.constructor.name) {
	      return ANONYMOUS;
	    }
	    return propValue.constructor.name;
	  }

	  ReactPropTypes.checkPropTypes = checkPropTypes;
	  ReactPropTypes.PropTypes = ReactPropTypes;

	  return ReactPropTypes;
	};

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 8 */
/***/ function(module, exports) {

	"use strict";

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */

	function makeEmptyFunction(arg) {
	  return function () {
	    return arg;
	  };
	}

	/**
	 * This function accepts and discards inputs; it has no side effects. This is
	 * primarily useful idiomatically for overridable function endpoints which
	 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
	 */
	var emptyFunction = function emptyFunction() {};

	emptyFunction.thatReturns = makeEmptyFunction;
	emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
	emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
	emptyFunction.thatReturnsNull = makeEmptyFunction(null);
	emptyFunction.thatReturnsThis = function () {
	  return this;
	};
	emptyFunction.thatReturnsArgument = function (arg) {
	  return arg;
	};

	module.exports = emptyFunction;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */

	var validateFormat = function validateFormat(format) {};

	if (process.env.NODE_ENV !== 'production') {
	  validateFormat = function validateFormat(format) {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  };
	}

	function invariant(condition, format, a, b, c, d, e, f) {
	  validateFormat(format);

	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(format.replace(/%s/g, function () {
	        return args[argIndex++];
	      }));
	      error.name = 'Invariant Violation';
	    }

	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	}

	module.exports = invariant;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	var emptyFunction = __webpack_require__(8);

	/**
	 * Similar to invariant but only logs a warning if the condition is not met.
	 * This can be used to log issues in development environments in critical
	 * paths. Removing the logging code for production environments will keep the
	 * same logic and follow the same code paths.
	 */

	var warning = emptyFunction;

	if (process.env.NODE_ENV !== 'production') {
	  var printWarning = function printWarning(format) {
	    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	      args[_key - 1] = arguments[_key];
	    }

	    var argIndex = 0;
	    var message = 'Warning: ' + format.replace(/%s/g, function () {
	      return args[argIndex++];
	    });
	    if (typeof console !== 'undefined') {
	      console.error(message);
	    }
	    try {
	      // --- Welcome to debugging React ---
	      // This error was thrown as a convenience so that you can use this stack
	      // to find the callsite that caused this warning to fire.
	      throw new Error(message);
	    } catch (x) {}
	  };

	  warning = function warning(condition, format) {
	    if (format === undefined) {
	      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
	    }

	    if (format.indexOf('Failed Composite propType: ') === 0) {
	      return; // Ignore CompositeComponent proptype check.
	    }

	    if (!condition) {
	      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
	        args[_key2 - 2] = arguments[_key2];
	      }

	      printWarning.apply(undefined, [format].concat(args));
	    }
	  };
	}

	module.exports = warning;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 11 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

	module.exports = ReactPropTypesSecret;


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	if (process.env.NODE_ENV !== 'production') {
	  var invariant = __webpack_require__(9);
	  var warning = __webpack_require__(10);
	  var ReactPropTypesSecret = __webpack_require__(11);
	  var loggedTypeFailures = {};
	}

	/**
	 * Assert that the values match with the type specs.
	 * Error messages are memorized and will only be shown once.
	 *
	 * @param {object} typeSpecs Map of name to a ReactPropType
	 * @param {object} values Runtime values that need to be type-checked
	 * @param {string} location e.g. "prop", "context", "child context"
	 * @param {string} componentName Name of the component for error messages.
	 * @param {?Function} getStack Returns the component stack.
	 * @private
	 */
	function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
	  if (process.env.NODE_ENV !== 'production') {
	    for (var typeSpecName in typeSpecs) {
	      if (typeSpecs.hasOwnProperty(typeSpecName)) {
	        var error;
	        // Prop type validation may throw. In case they do, we don't want to
	        // fail the render phase where it didn't fail before. So we log it.
	        // After these have been cleaned up, we'll let them throw.
	        try {
	          // This is intentionally an invariant that gets caught. It's the same
	          // behavior as without this statement except with a better message.
	          invariant(typeof typeSpecs[typeSpecName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'React.PropTypes.', componentName || 'React class', location, typeSpecName);
	          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
	        } catch (ex) {
	          error = ex;
	        }
	        warning(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error);
	        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
	          // Only monitor this failure once because there tends to be a lot of the
	          // same error.
	          loggedTypeFailures[error.message] = true;

	          var stack = getStack ? getStack() : '';

	          warning(false, 'Failed %s type: %s%s', location, error.message, stack != null ? stack : '');
	        }
	      }
	    }
	  }
	}

	module.exports = checkPropTypes;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	var emptyFunction = __webpack_require__(8);
	var invariant = __webpack_require__(9);
	var ReactPropTypesSecret = __webpack_require__(11);

	module.exports = function() {
	  function shim(props, propName, componentName, location, propFullName, secret) {
	    if (secret === ReactPropTypesSecret) {
	      // It is still safe when called from React.
	      return;
	    }
	    invariant(
	      false,
	      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
	      'Use PropTypes.checkPropTypes() to call them. ' +
	      'Read more at http://fb.me/use-check-prop-types'
	    );
	  };
	  shim.isRequired = shim;
	  function getShim() {
	    return shim;
	  };
	  // Important!
	  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
	  var ReactPropTypes = {
	    array: shim,
	    bool: shim,
	    func: shim,
	    number: shim,
	    object: shim,
	    string: shim,
	    symbol: shim,

	    any: shim,
	    arrayOf: getShim,
	    element: shim,
	    instanceOf: getShim,
	    node: shim,
	    objectOf: getShim,
	    oneOf: getShim,
	    oneOfType: getShim,
	    shape: getShim
	  };

	  ReactPropTypes.checkPropTypes = emptyFunction;
	  ReactPropTypes.PropTypes = ReactPropTypes;

	  return ReactPropTypes;
	};


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _chainFunction = __webpack_require__(15);

	var _chainFunction2 = _interopRequireDefault(_chainFunction);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(6);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _warning = __webpack_require__(16);

	var _warning2 = _interopRequireDefault(_warning);

	var _ChildMapping = __webpack_require__(17);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var propTypes = {
	  component: _propTypes2.default.any,
	  childFactory: _propTypes2.default.func,
	  children: _propTypes2.default.node
	};

	var defaultProps = {
	  component: 'span',
	  childFactory: function childFactory(child) {
	    return child;
	  }
	};

	var TransitionGroup = function (_React$Component) {
	  _inherits(TransitionGroup, _React$Component);

	  function TransitionGroup(props, context) {
	    _classCallCheck(this, TransitionGroup);

	    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props, context));

	    _this.performAppear = function (key, component) {
	      _this.currentlyTransitioningKeys[key] = true;

	      if (component.componentWillAppear) {
	        component.componentWillAppear(_this._handleDoneAppearing.bind(_this, key, component));
	      } else {
	        _this._handleDoneAppearing(key, component);
	      }
	    };

	    _this._handleDoneAppearing = function (key, component) {
	      if (component.componentDidAppear) {
	        component.componentDidAppear();
	      }

	      delete _this.currentlyTransitioningKeys[key];

	      var currentChildMapping = (0, _ChildMapping.getChildMapping)(_this.props.children);

	      if (!currentChildMapping || !currentChildMapping.hasOwnProperty(key)) {
	        // This was removed before it had fully appeared. Remove it.
	        _this.performLeave(key, component);
	      }
	    };

	    _this.performEnter = function (key, component) {
	      _this.currentlyTransitioningKeys[key] = true;

	      if (component.componentWillEnter) {
	        component.componentWillEnter(_this._handleDoneEntering.bind(_this, key, component));
	      } else {
	        _this._handleDoneEntering(key, component);
	      }
	    };

	    _this._handleDoneEntering = function (key, component) {
	      if (component.componentDidEnter) {
	        component.componentDidEnter();
	      }

	      delete _this.currentlyTransitioningKeys[key];

	      var currentChildMapping = (0, _ChildMapping.getChildMapping)(_this.props.children);

	      if (!currentChildMapping || !currentChildMapping.hasOwnProperty(key)) {
	        // This was removed before it had fully entered. Remove it.
	        _this.performLeave(key, component);
	      }
	    };

	    _this.performLeave = function (key, component) {
	      _this.currentlyTransitioningKeys[key] = true;

	      if (component.componentWillLeave) {
	        component.componentWillLeave(_this._handleDoneLeaving.bind(_this, key, component));
	      } else {
	        // Note that this is somewhat dangerous b/c it calls setState()
	        // again, effectively mutating the component before all the work
	        // is done.
	        _this._handleDoneLeaving(key, component);
	      }
	    };

	    _this._handleDoneLeaving = function (key, component) {
	      if (component.componentDidLeave) {
	        component.componentDidLeave();
	      }

	      delete _this.currentlyTransitioningKeys[key];

	      var currentChildMapping = (0, _ChildMapping.getChildMapping)(_this.props.children);

	      if (currentChildMapping && currentChildMapping.hasOwnProperty(key)) {
	        // This entered again before it fully left. Add it again.
	        _this.keysToEnter.push(key);
	      } else {
	        _this.setState(function (state) {
	          var newChildren = _extends({}, state.children);
	          delete newChildren[key];
	          return { children: newChildren };
	        });
	      }
	    };

	    _this.childRefs = Object.create(null);

	    _this.state = {
	      children: (0, _ChildMapping.getChildMapping)(props.children)
	    };
	    return _this;
	  }

	  TransitionGroup.prototype.componentWillMount = function componentWillMount() {
	    this.currentlyTransitioningKeys = {};
	    this.keysToEnter = [];
	    this.keysToLeave = [];
	  };

	  TransitionGroup.prototype.componentDidMount = function componentDidMount() {
	    var initialChildMapping = this.state.children;
	    for (var key in initialChildMapping) {
	      if (initialChildMapping[key]) {
	        this.performAppear(key, this.childRefs[key]);
	      }
	    }
	  };

	  TransitionGroup.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	    var nextChildMapping = (0, _ChildMapping.getChildMapping)(nextProps.children);
	    var prevChildMapping = this.state.children;

	    this.setState({
	      children: (0, _ChildMapping.mergeChildMappings)(prevChildMapping, nextChildMapping)
	    });

	    for (var key in nextChildMapping) {
	      var hasPrev = prevChildMapping && prevChildMapping.hasOwnProperty(key);
	      if (nextChildMapping[key] && !hasPrev && !this.currentlyTransitioningKeys[key]) {
	        this.keysToEnter.push(key);
	      }
	    }

	    for (var _key in prevChildMapping) {
	      var hasNext = nextChildMapping && nextChildMapping.hasOwnProperty(_key);
	      if (prevChildMapping[_key] && !hasNext && !this.currentlyTransitioningKeys[_key]) {
	        this.keysToLeave.push(_key);
	      }
	    }

	    // If we want to someday check for reordering, we could do it here.
	  };

	  TransitionGroup.prototype.componentDidUpdate = function componentDidUpdate() {
	    var _this2 = this;

	    var keysToEnter = this.keysToEnter;
	    this.keysToEnter = [];
	    keysToEnter.forEach(function (key) {
	      return _this2.performEnter(key, _this2.childRefs[key]);
	    });

	    var keysToLeave = this.keysToLeave;
	    this.keysToLeave = [];
	    keysToLeave.forEach(function (key) {
	      return _this2.performLeave(key, _this2.childRefs[key]);
	    });
	  };

	  TransitionGroup.prototype.render = function render() {
	    var _this3 = this;

	    // TODO: we could get rid of the need for the wrapper node
	    // by cloning a single child
	    var childrenToRender = [];

	    var _loop = function _loop(key) {
	      var child = _this3.state.children[key];
	      if (child) {
	        var isCallbackRef = typeof child.ref !== 'string';
	        var factoryChild = _this3.props.childFactory(child);
	        var ref = function ref(r) {
	          _this3.childRefs[key] = r;
	        };

	        process.env.NODE_ENV !== 'production' ? (0, _warning2.default)(isCallbackRef, 'string refs are not supported on children of TransitionGroup and will be ignored. ' + 'Please use a callback ref instead: https://facebook.github.io/react/docs/refs-and-the-dom.html#the-ref-callback-attribute') : void 0;

	        // Always chaining the refs leads to problems when the childFactory
	        // wraps the child. The child ref callback gets called twice with the
	        // wrapper and the child. So we only need to chain the ref if the
	        // factoryChild is not different from child.
	        if (factoryChild === child && isCallbackRef) {
	          ref = (0, _chainFunction2.default)(child.ref, ref);
	        }

	        // You may need to apply reactive updates to a child as it is leaving.
	        // The normal React way to do it won't work since the child will have
	        // already been removed. In case you need this behavior you can provide
	        // a childFactory function to wrap every child, even the ones that are
	        // leaving.
	        childrenToRender.push(_react2.default.cloneElement(factoryChild, {
	          key: key,
	          ref: ref
	        }));
	      }
	    };

	    for (var key in this.state.children) {
	      _loop(key);
	    }

	    // Do not forward TransitionGroup props to primitive DOM nodes
	    var props = _extends({}, this.props);
	    delete props.transitionLeave;
	    delete props.transitionName;
	    delete props.transitionAppear;
	    delete props.transitionEnter;
	    delete props.childFactory;
	    delete props.transitionLeaveTimeout;
	    delete props.transitionEnterTimeout;
	    delete props.transitionAppearTimeout;
	    delete props.component;

	    return _react2.default.createElement(this.props.component, props, childrenToRender);
	  };

	  return TransitionGroup;
	}(_react2.default.Component);

	TransitionGroup.displayName = 'TransitionGroup';


	TransitionGroup.propTypes = process.env.NODE_ENV !== "production" ? propTypes : {};
	TransitionGroup.defaultProps = defaultProps;

	exports.default = TransitionGroup;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 15 */
/***/ function(module, exports) {

	
	module.exports = function chain(){
	  var len = arguments.length
	  var args = [];

	  for (var i = 0; i < len; i++)
	    args[i] = arguments[i]

	  args = args.filter(function(fn){ return fn != null })

	  if (args.length === 0) return undefined
	  if (args.length === 1) return args[0]

	  return args.reduce(function(current, next){
	    return function chainedFunction() {
	      current.apply(this, arguments);
	      next.apply(this, arguments);
	    };
	  })
	}


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	/**
	 * Similar to invariant but only logs a warning if the condition is not met.
	 * This can be used to log issues in development environments in critical
	 * paths. Removing the logging code for production environments will keep the
	 * same logic and follow the same code paths.
	 */

	var warning = function() {};

	if (process.env.NODE_ENV !== 'production') {
	  warning = function(condition, format, args) {
	    var len = arguments.length;
	    args = new Array(len > 2 ? len - 2 : 0);
	    for (var key = 2; key < len; key++) {
	      args[key - 2] = arguments[key];
	    }
	    if (format === undefined) {
	      throw new Error(
	        '`warning(condition, format, ...args)` requires a warning ' +
	        'message argument'
	      );
	    }

	    if (format.length < 10 || (/^[s\W]*$/).test(format)) {
	      throw new Error(
	        'The warning format should be able to uniquely identify this ' +
	        'warning. Please, use a more descriptive format than: ' + format
	      );
	    }

	    if (!condition) {
	      var argIndex = 0;
	      var message = 'Warning: ' +
	        format.replace(/%s/g, function() {
	          return args[argIndex++];
	        });
	      if (typeof console !== 'undefined') {
	        console.error(message);
	      }
	      try {
	        // This error was thrown as a convenience so that you can use this stack
	        // to find the callsite that caused this warning to fire.
	        throw new Error(message);
	      } catch(x) {}
	    }
	  };
	}

	module.exports = warning;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.getChildMapping = getChildMapping;
	exports.mergeChildMappings = mergeChildMappings;

	var _react = __webpack_require__(1);

	/**
	 * Given `this.props.children`, return an object mapping key to child.
	 *
	 * @param {*} children `this.props.children`
	 * @return {object} Mapping of key to child
	 */
	function getChildMapping(children) {
	  if (!children) {
	    return children;
	  }
	  var result = {};
	  _react.Children.map(children, function (child) {
	    return child;
	  }).forEach(function (child) {
	    result[child.key] = child;
	  });
	  return result;
	}

	/**
	 * When you're adding or removing children some may be added or removed in the
	 * same render pass. We want to show *both* since we want to simultaneously
	 * animate elements in and out. This function takes a previous set of keys
	 * and a new set of keys and merges them with its best guess of the correct
	 * ordering. In the future we may expose some of the utilities in
	 * ReactMultiChild to make this easy, but for now React itself does not
	 * directly have this concept of the union of prevChildren and nextChildren
	 * so we implement it here.
	 *
	 * @param {object} prev prev children as returned from
	 * `ReactTransitionChildMapping.getChildMapping()`.
	 * @param {object} next next children as returned from
	 * `ReactTransitionChildMapping.getChildMapping()`.
	 * @return {object} a key set that contains all keys in `prev` and all keys
	 * in `next` in a reasonable order.
	 */
	function mergeChildMappings(prev, next) {
	  prev = prev || {};
	  next = next || {};

	  function getValueForKey(key) {
	    if (next.hasOwnProperty(key)) {
	      return next[key];
	    }

	    return prev[key];
	  }

	  // For each key of `next`, the list of keys to insert before that key in
	  // the combined list
	  var nextKeysPending = {};

	  var pendingKeys = [];
	  for (var prevKey in prev) {
	    if (next.hasOwnProperty(prevKey)) {
	      if (pendingKeys.length) {
	        nextKeysPending[prevKey] = pendingKeys;
	        pendingKeys = [];
	      }
	    } else {
	      pendingKeys.push(prevKey);
	    }
	  }

	  var i = void 0;
	  var childMapping = {};
	  for (var nextKey in next) {
	    if (nextKeysPending.hasOwnProperty(nextKey)) {
	      for (i = 0; i < nextKeysPending[nextKey].length; i++) {
	        var pendingNextKey = nextKeysPending[nextKey][i];
	        childMapping[nextKeysPending[nextKey][i]] = getValueForKey(pendingNextKey);
	      }
	    }
	    childMapping[nextKey] = getValueForKey(nextKey);
	  }

	  // Finally, add the keys which didn't appear before any key in `next`
	  for (i = 0; i < pendingKeys.length; i++) {
	    childMapping[pendingKeys[i]] = getValueForKey(pendingKeys[i]);
	  }

	  return childMapping;
	}

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _addClass = __webpack_require__(19);

	var _addClass2 = _interopRequireDefault(_addClass);

	var _removeClass = __webpack_require__(21);

	var _removeClass2 = _interopRequireDefault(_removeClass);

	var _requestAnimationFrame = __webpack_require__(22);

	var _requestAnimationFrame2 = _interopRequireDefault(_requestAnimationFrame);

	var _properties = __webpack_require__(24);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(6);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _reactDom = __webpack_require__(2);

	var _PropTypes = __webpack_require__(25);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var events = [];
	if (_properties.transitionEnd) events.push(_properties.transitionEnd);
	if (_properties.animationEnd) events.push(_properties.animationEnd);

	function addEndListener(node, listener) {
	  if (events.length) {
	    events.forEach(function (e) {
	      return node.addEventListener(e, listener, false);
	    });
	  } else {
	    setTimeout(listener, 0);
	  }

	  return function () {
	    if (!events.length) return;
	    events.forEach(function (e) {
	      return node.removeEventListener(e, listener, false);
	    });
	  };
	}

	var propTypes = {
	  children: _propTypes2.default.node,
	  name: _PropTypes.nameShape.isRequired,

	  // Once we require timeouts to be specified, we can remove the
	  // boolean flags (appear etc.) and just accept a number
	  // or a bool for the timeout flags (appearTimeout etc.)
	  appear: _propTypes2.default.bool,
	  enter: _propTypes2.default.bool,
	  leave: _propTypes2.default.bool,
	  appearTimeout: _propTypes2.default.number,
	  enterTimeout: _propTypes2.default.number,
	  leaveTimeout: _propTypes2.default.number
	};

	var CSSTransitionGroupChild = function (_React$Component) {
	  _inherits(CSSTransitionGroupChild, _React$Component);

	  function CSSTransitionGroupChild() {
	    var _temp, _this, _ret;

	    _classCallCheck(this, CSSTransitionGroupChild);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.componentWillAppear = function (done) {
	      if (_this.props.appear) {
	        _this.transition('appear', done, _this.props.appearTimeout);
	      } else {
	        done();
	      }
	    }, _this.componentWillEnter = function (done) {
	      if (_this.props.enter) {
	        _this.transition('enter', done, _this.props.enterTimeout);
	      } else {
	        done();
	      }
	    }, _this.componentWillLeave = function (done) {
	      if (_this.props.leave) {
	        _this.transition('leave', done, _this.props.leaveTimeout);
	      } else {
	        done();
	      }
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  CSSTransitionGroupChild.prototype.componentWillMount = function componentWillMount() {
	    this.classNameAndNodeQueue = [];
	    this.transitionTimeouts = [];
	  };

	  CSSTransitionGroupChild.prototype.componentWillUnmount = function componentWillUnmount() {
	    this.unmounted = true;

	    if (this.timeout) {
	      clearTimeout(this.timeout);
	    }
	    this.transitionTimeouts.forEach(function (timeout) {
	      clearTimeout(timeout);
	    });

	    this.classNameAndNodeQueue.length = 0;
	  };

	  CSSTransitionGroupChild.prototype.transition = function transition(animationType, finishCallback, timeout) {
	    var node = (0, _reactDom.findDOMNode)(this);

	    if (!node) {
	      if (finishCallback) {
	        finishCallback();
	      }
	      return;
	    }

	    var className = this.props.name[animationType] || this.props.name + '-' + animationType;
	    var activeClassName = this.props.name[animationType + 'Active'] || className + '-active';
	    var timer = null;
	    var removeListeners = void 0;

	    (0, _addClass2.default)(node, className);

	    // Need to do this to actually trigger a transition.
	    this.queueClassAndNode(activeClassName, node);

	    // Clean-up the animation after the specified delay
	    var finish = function finish(e) {
	      if (e && e.target !== node) {
	        return;
	      }

	      clearTimeout(timer);
	      if (removeListeners) removeListeners();

	      (0, _removeClass2.default)(node, className);
	      (0, _removeClass2.default)(node, activeClassName);

	      if (removeListeners) removeListeners();

	      // Usually this optional callback is used for informing an owner of
	      // a leave animation and telling it to remove the child.
	      if (finishCallback) {
	        finishCallback();
	      }
	    };

	    if (timeout) {
	      timer = setTimeout(finish, timeout);
	      this.transitionTimeouts.push(timer);
	    } else if (_properties.transitionEnd) {
	      removeListeners = addEndListener(node, finish);
	    }
	  };

	  CSSTransitionGroupChild.prototype.queueClassAndNode = function queueClassAndNode(className, node) {
	    var _this2 = this;

	    this.classNameAndNodeQueue.push({
	      className: className,
	      node: node
	    });

	    if (!this.rafHandle) {
	      this.rafHandle = (0, _requestAnimationFrame2.default)(function () {
	        return _this2.flushClassNameAndNodeQueue();
	      });
	    }
	  };

	  CSSTransitionGroupChild.prototype.flushClassNameAndNodeQueue = function flushClassNameAndNodeQueue() {
	    if (!this.unmounted) {
	      this.classNameAndNodeQueue.forEach(function (obj) {
	        // This is for to force a repaint,
	        // which is necessary in order to transition styles when adding a class name.
	        /* eslint-disable no-unused-expressions */
	        obj.node.scrollTop;
	        /* eslint-enable no-unused-expressions */
	        (0, _addClass2.default)(obj.node, obj.className);
	      });
	    }
	    this.classNameAndNodeQueue.length = 0;
	    this.rafHandle = null;
	  };

	  CSSTransitionGroupChild.prototype.render = function render() {
	    var props = _extends({}, this.props);
	    delete props.name;
	    delete props.appear;
	    delete props.enter;
	    delete props.leave;
	    delete props.appearTimeout;
	    delete props.enterTimeout;
	    delete props.leaveTimeout;
	    delete props.children;
	    return _react2.default.cloneElement(_react2.default.Children.only(this.props.children), props);
	  };

	  return CSSTransitionGroupChild;
	}(_react2.default.Component);

	CSSTransitionGroupChild.displayName = 'CSSTransitionGroupChild';


	CSSTransitionGroupChild.propTypes = process.env.NODE_ENV !== "production" ? propTypes : {};

	exports.default = CSSTransitionGroupChild;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = addClass;

	var _hasClass = __webpack_require__(20);

	var _hasClass2 = _interopRequireDefault(_hasClass);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function addClass(element, className) {
	  if (element.classList) element.classList.add(className);else if (!(0, _hasClass2.default)(element)) element.className = element.className + ' ' + className;
	}
	module.exports = exports['default'];

/***/ },
/* 20 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = hasClass;
	function hasClass(element, className) {
	  if (element.classList) return !!className && element.classList.contains(className);else return (" " + element.className + " ").indexOf(" " + className + " ") !== -1;
	}
	module.exports = exports["default"];

/***/ },
/* 21 */
/***/ function(module, exports) {

	'use strict';

	module.exports = function removeClass(element, className) {
	  if (element.classList) element.classList.remove(className);else element.className = element.className.replace(new RegExp('(^|\\s)' + className + '(?:\\s|$)', 'g'), '$1').replace(/\s+/g, ' ').replace(/^\s*|\s*$/g, '');
	};

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _inDOM = __webpack_require__(23);

	var _inDOM2 = _interopRequireDefault(_inDOM);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var vendors = ['', 'webkit', 'moz', 'o', 'ms'];
	var cancel = 'clearTimeout';
	var raf = fallback;
	var compatRaf = void 0;

	var getKey = function getKey(vendor, k) {
	  return vendor + (!vendor ? k : k[0].toUpperCase() + k.substr(1)) + 'AnimationFrame';
	};

	if (_inDOM2.default) {
	  vendors.some(function (vendor) {
	    var rafKey = getKey(vendor, 'request');

	    if (rafKey in window) {
	      cancel = getKey(vendor, 'cancel');
	      return raf = function raf(cb) {
	        return window[rafKey](cb);
	      };
	    }
	  });
	}

	/* https://github.com/component/raf */
	var prev = new Date().getTime();
	function fallback(fn) {
	  var curr = new Date().getTime(),
	      ms = Math.max(0, 16 - (curr - prev)),
	      req = setTimeout(fn, ms);

	  prev = curr;
	  return req;
	}

	compatRaf = function compatRaf(cb) {
	  return raf(cb);
	};
	compatRaf.cancel = function (id) {
	  window[cancel] && typeof window[cancel] === 'function' && window[cancel](id);
	};
	exports.default = compatRaf;
	module.exports = exports['default'];

/***/ },
/* 23 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
	module.exports = exports['default'];

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.animationEnd = exports.animationDelay = exports.animationTiming = exports.animationDuration = exports.animationName = exports.transitionEnd = exports.transitionDuration = exports.transitionDelay = exports.transitionTiming = exports.transitionProperty = exports.transform = undefined;

	var _inDOM = __webpack_require__(23);

	var _inDOM2 = _interopRequireDefault(_inDOM);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var transform = 'transform';
	var prefix = void 0,
	    transitionEnd = void 0,
	    animationEnd = void 0;
	var transitionProperty = void 0,
	    transitionDuration = void 0,
	    transitionTiming = void 0,
	    transitionDelay = void 0;
	var animationName = void 0,
	    animationDuration = void 0,
	    animationTiming = void 0,
	    animationDelay = void 0;

	if (_inDOM2.default) {
	  var _getTransitionPropert = getTransitionProperties();

	  prefix = _getTransitionPropert.prefix;
	  exports.transitionEnd = transitionEnd = _getTransitionPropert.transitionEnd;
	  exports.animationEnd = animationEnd = _getTransitionPropert.animationEnd;


	  exports.transform = transform = prefix + '-' + transform;
	  exports.transitionProperty = transitionProperty = prefix + '-transition-property';
	  exports.transitionDuration = transitionDuration = prefix + '-transition-duration';
	  exports.transitionDelay = transitionDelay = prefix + '-transition-delay';
	  exports.transitionTiming = transitionTiming = prefix + '-transition-timing-function';

	  exports.animationName = animationName = prefix + '-animation-name';
	  exports.animationDuration = animationDuration = prefix + '-animation-duration';
	  exports.animationTiming = animationTiming = prefix + '-animation-delay';
	  exports.animationDelay = animationDelay = prefix + '-animation-timing-function';
	}

	exports.transform = transform;
	exports.transitionProperty = transitionProperty;
	exports.transitionTiming = transitionTiming;
	exports.transitionDelay = transitionDelay;
	exports.transitionDuration = transitionDuration;
	exports.transitionEnd = transitionEnd;
	exports.animationName = animationName;
	exports.animationDuration = animationDuration;
	exports.animationTiming = animationTiming;
	exports.animationDelay = animationDelay;
	exports.animationEnd = animationEnd;
	exports.default = {
	  transform: transform,
	  end: transitionEnd,
	  property: transitionProperty,
	  timing: transitionTiming,
	  delay: transitionDelay,
	  duration: transitionDuration
	};


	function getTransitionProperties() {
	  var style = document.createElement('div').style;

	  var vendorMap = {
	    O: function O(e) {
	      return 'o' + e.toLowerCase();
	    },
	    Moz: function Moz(e) {
	      return e.toLowerCase();
	    },
	    Webkit: function Webkit(e) {
	      return 'webkit' + e;
	    },
	    ms: function ms(e) {
	      return 'MS' + e;
	    }
	  };

	  var vendors = Object.keys(vendorMap);

	  var transitionEnd = void 0,
	      animationEnd = void 0;
	  var prefix = '';

	  for (var i = 0; i < vendors.length; i++) {
	    var vendor = vendors[i];

	    if (vendor + 'TransitionProperty' in style) {
	      prefix = '-' + vendor.toLowerCase();
	      transitionEnd = vendorMap[vendor]('TransitionEnd');
	      animationEnd = vendorMap[vendor]('AnimationEnd');
	      break;
	    }
	  }

	  if (!transitionEnd && 'transitionProperty' in style) transitionEnd = 'transitionend';

	  if (!animationEnd && 'animationName' in style) animationEnd = 'animationend';

	  style = null;

	  return { animationEnd: animationEnd, transitionEnd: transitionEnd, prefix: prefix };
	}

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.nameShape = undefined;
	exports.transitionTimeout = transitionTimeout;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(6);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function transitionTimeout(transitionType) {
	  var timeoutPropName = 'transition' + transitionType + 'Timeout';
	  var enabledPropName = 'transition' + transitionType;

	  return function (props) {
	    // If the transition is enabled
	    if (props[enabledPropName]) {
	      // If no timeout duration is provided
	      if (props[timeoutPropName] == null) {
	        return new Error(timeoutPropName + ' wasn\'t supplied to CSSTransitionGroup: ' + 'this can cause unreliable animations and won\'t be supported in ' + 'a future version of React. See ' + 'https://fb.me/react-animation-transition-group-timeout for more ' + 'information.');

	        // If the duration isn't a number
	      } else if (typeof props[timeoutPropName] !== 'number') {
	        return new Error(timeoutPropName + ' must be a number (in milliseconds)');
	      }
	    }

	    return null;
	  };
	}

	var nameShape = exports.nameShape = _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.shape({
	  enter: _propTypes2.default.string,
	  leave: _propTypes2.default.string,
	  active: _propTypes2.default.string
	}), _propTypes2.default.shape({
	  enter: _propTypes2.default.string,
	  enterActive: _propTypes2.default.string,
	  leave: _propTypes2.default.string,
	  leaveActive: _propTypes2.default.string,
	  appear: _propTypes2.default.string,
	  appearActive: _propTypes2.default.string
	})]);

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(27);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(30)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../node_modules/css-loader/index.js!./index.css", function() {
				var newContent = require("!!../node_modules/css-loader/index.js!./index.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(28)();
	// imports


	// module
	exports.push([module.id, "/**\r\n * React Panel Component - css\r\n * @Author: chenzhen\r\n * @Date:   2017-07-18\r\n */\r\n\r\n.biz-panel {\r\n    position: fixed;\r\n\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n.biz-panel-margin {\r\n    float: left;\r\n    height: 100%;\r\n    overflow-y: auto;\r\n}\r\n\r\n.biz-panel-wrap{\r\n    height: 100%;\r\n    padding-left:35px;\r\n    position: relative;\r\n    background-color: transparent;\r\n    overflow-y: auto;\r\n}\r\n.biz-panel-body {\r\n    min-height:100%;\r\n    position:relative;\r\n    background-color: #fff;\r\n    box-shadow: -8px 0 16px #bbb;\r\n}\r\n\r\n.biz-panel-title {\r\n    position: relative;\r\n    padding: 13px 20px;\r\n    border-radius: 4px 4px 0 0;\r\n    background: #f2f2f4;\r\n    color: rgba(0,0,0,.65);\r\n}\r\n\r\n.biz-panel-title-text {\r\n    margin: 0;\r\n    font-size: 14px;\r\n    line-height: 21px;\r\n    font-weight: 500;\r\n    color: rgba(0,0,0,.85);\r\n}\r\n.biz-panel-close {\r\n    cursor: pointer;\r\n    border: 0;\r\n    background: transparent;\r\n    position: absolute;\r\n    right:0;\r\n    top: 0;\r\n    z-index: 10;\r\n    font-weight: 700;\r\n    line-height: 1;\r\n    text-decoration: none;\r\n    -webkit-transition: color .3s ease;\r\n    transition: color .3s ease;\r\n    color: rgba(0,0,0,.43);\r\n    outline: 0;\r\n}\r\n.biz-panel-close:focus,.biz-panel-close:hover{color:#444;text-decoration:none}\r\n.biz-panel-close-x{\r\n    display: block;\r\n    font-style: normal;\r\n    vertical-align: baseline;\r\n    text-align: center;\r\n    text-transform: none;\r\n    text-rendering: auto;\r\n    width:48px;\r\n    height:48px;\r\n    line-height:55px;\r\n    font-size: 18px;\r\n}\r\n.biz-panel-close-x:before {\r\n    content: \"\\2716\";\r\n    display: block;\r\n}\r\n\r\n.biz-panel-content {\r\n    padding: 25px;\r\n    min-height: 200px;\r\n}\r\n\r\n.biz-panel-bottom {\r\n\r\n    border-top: 1px solid #e9e9e9;\r\n    padding: 15px 20px;\r\n    line-height: 30px;\r\n    text-align: center;\r\n}\r\n.biz-panel-bottom button+button {\r\n    margin-left: 8px;\r\n    margin-bottom: 0;\r\n}\r\n.biz-button-lg {\r\n    padding: 0 15px;\r\n    border-radius: 4px;\r\n}\r\n.biz-button, .biz-button:active, .biz-button:focus {\r\n    outline: 0;\r\n}\r\n.biz-button {\r\n    display: inline-block;\r\n    margin-bottom: 0;\r\n    font-weight: 500;\r\n    text-align: center;\r\n    -ms-touch-action: manipulation;\r\n    touch-action: manipulation;\r\n    cursor: pointer;\r\n    background-image: none;\r\n    border: 1px solid transparent;\r\n    white-space: nowrap;\r\n    line-height: 1.5;\r\n    padding: 0 15px;\r\n    font-size: 14px;\r\n    border-radius: 4px;\r\n    height: 32px;\r\n    -webkit-user-select: none;\r\n    -moz-user-select: none;\r\n    -ms-user-select: none;\r\n    user-select: none;\r\n    -webkit-transition: all .3s cubic-bezier(.645,.045,.355,1);\r\n    transition: all .3s cubic-bezier(.645,.045,.355,1);\r\n    position: relative;\r\n    color: rgba(0,0,0,.65);\r\n    background-color: #fff;\r\n    border-color: #d9d9d9;\r\n}\r\n\r\n.biz-panel-leftClose{\r\n    position: fixed;\r\n    top: 20px;\r\n    margin-left:-35px;\r\n    width:35px;\r\n    height:65px;\r\n    font-size:20px;\r\n    text-align: center;\r\n    color:#333;\r\n    z-index:803;\r\n    background:url(" + __webpack_require__(29) + ") left no-repeat;\r\n}\r\n.biz-panel-leftClose:before {\r\n    line-height:55px;\r\n    content: \"\\2716\";\r\n    display: inline-block;;\r\n}\r\n\r\n/* 遮罩层 */\r\n.biz-mask{\r\n    position: fixed;\r\n    top: 0;\r\n    right: 0;\r\n    left: 0;\r\n    bottom: 0;\r\n    background-color: #d7d7d7;\r\n    background-color: rgba(0,0,0,.16);\r\n    height: 100%;\r\n    z-index: 800;\r\n    filter: alpha(opacity=50);\r\n}\r\n\r\n/*动画效果*/\r\n.panelAnimate-appear {\r\n    opacity: 0;\r\n    transform: translate(5%, 0);\r\n}\r\n.panelAnimate-appear.panelAnimate-appear-active {\r\n    opacity: 1;\r\n    transform: translate(0, 0);\r\n    transition: opacity 150ms linear, transform 200ms ease-out;\r\n}\r\n.panelAnimate-leave {\r\n    opacity: 1;\r\n    transform: translate(0, 0);\r\n}\r\n.panelAnimate-leave.panelAnimate-leave-active {\r\n    opacity: 0;\r\n    transform: translate(5%, 0);\r\n    transition: opacity 150ms linear, transform 200ms ease-out;\r\n}", ""]);

	// exports


/***/ },
/* 28 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 29 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAABBCAYAAABb5R0IAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpBODZENkY4NzcwMjMxMUU3QTlCNEZDRTY5MzU3MEEwMSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpBODZENkY4ODcwMjMxMUU3QTlCNEZDRTY5MzU3MEEwMSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkE4NkQ2Rjg1NzAyMzExRTdBOUI0RkNFNjkzNTcwQTAxIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkE4NkQ2Rjg2NzAyMzExRTdBOUI0RkNFNjkzNTcwQTAxIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+C6jUkAAAAhlJREFUeNrs2c1q20AQAGCtJP/Jio3jyLJsSTZ2UWwLJYGQthDckh6c3H3LIZA/8gN9gT5EHyC5229iyCWH6gWKb24vvti02FSdLT6EPQQCqXYPM7DsHj9mdmcOSwaDgSZJkhcEwWfXdXu6rpuyLCckDqFSSLfbvbNte0/iHWEY3keCBJlOp+N8Pu9IAgRZLBZzVVUzQmCWy+UvRVFSiEEMYhCDGMQgBjGIQQxiEIMYxCAGMYhBDGIQ82JMFEV/6C4KJpIECbHKNJvNfmiaZoiAkSeTyTdRyiSHYfh1Pp//FAIDZXoYjUZfRAAp/X7/N0C+j8fjx2w26+VyOZMQIvN62v8Ow+EwC5tbLpd77Xb73DTNDqAULpgViGZkjaIAc9Bqtc4sy/IBpcaOYVA6LMcwjA+AuqhUKsH//rskzzXgFYqWzy4Wi/tQvqtqtboFqGTsGAZFf3ntQqHwHjJ17TjOzmt3bvKS0QQosspUBV7dXqfTuQHUrqqq6dgxDIpmytJ1fRdQ167rvk0kElrsGAZFP1stmG/bvu/fAupdMpnUY8cwKFqqcjqd3gLUVa1W20+lUrnYMQyMokyABIC6rNfrH+Gc54JhUCW4Rz7cqfNGo3EAWVvngnmCos+/BG1gk2YKUJ8ymcwGF8wTFG2UBowWD1CngDqEwVzigmFQGxQFHf2k2WweQXuwuGAYVBHWG+jox57n9f4KMADVdMMMKI1RjQAAAABJRU5ErkJggg=="

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ }
/******/ ])
});
;