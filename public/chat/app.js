var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// node_modules/react/cjs/react.production.min.js
var require_react_production_min = __commonJS({
  "node_modules/react/cjs/react.production.min.js"(exports) {
    "use strict";
    var l = Symbol.for("react.element");
    var n = Symbol.for("react.portal");
    var p = Symbol.for("react.fragment");
    var q = Symbol.for("react.strict_mode");
    var r = Symbol.for("react.profiler");
    var t = Symbol.for("react.provider");
    var u = Symbol.for("react.context");
    var v = Symbol.for("react.forward_ref");
    var w = Symbol.for("react.suspense");
    var x = Symbol.for("react.memo");
    var y = Symbol.for("react.lazy");
    var z = Symbol.iterator;
    function A(a) {
      if (null === a || "object" !== typeof a) return null;
      a = z && a[z] || a["@@iterator"];
      return "function" === typeof a ? a : null;
    }
    var B = { isMounted: function() {
      return false;
    }, enqueueForceUpdate: function() {
    }, enqueueReplaceState: function() {
    }, enqueueSetState: function() {
    } };
    var C = Object.assign;
    var D = {};
    function E(a, b, e) {
      this.props = a;
      this.context = b;
      this.refs = D;
      this.updater = e || B;
    }
    E.prototype.isReactComponent = {};
    E.prototype.setState = function(a, b) {
      if ("object" !== typeof a && "function" !== typeof a && null != a) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
      this.updater.enqueueSetState(this, a, b, "setState");
    };
    E.prototype.forceUpdate = function(a) {
      this.updater.enqueueForceUpdate(this, a, "forceUpdate");
    };
    function F() {
    }
    F.prototype = E.prototype;
    function G(a, b, e) {
      this.props = a;
      this.context = b;
      this.refs = D;
      this.updater = e || B;
    }
    var H = G.prototype = new F();
    H.constructor = G;
    C(H, E.prototype);
    H.isPureReactComponent = true;
    var I = Array.isArray;
    var J = Object.prototype.hasOwnProperty;
    var K = { current: null };
    var L = { key: true, ref: true, __self: true, __source: true };
    function M(a, b, e) {
      var d, c = {}, k = null, h = null;
      if (null != b) for (d in void 0 !== b.ref && (h = b.ref), void 0 !== b.key && (k = "" + b.key), b) J.call(b, d) && !L.hasOwnProperty(d) && (c[d] = b[d]);
      var g = arguments.length - 2;
      if (1 === g) c.children = e;
      else if (1 < g) {
        for (var f = Array(g), m = 0; m < g; m++) f[m] = arguments[m + 2];
        c.children = f;
      }
      if (a && a.defaultProps) for (d in g = a.defaultProps, g) void 0 === c[d] && (c[d] = g[d]);
      return { $$typeof: l, type: a, key: k, ref: h, props: c, _owner: K.current };
    }
    function N(a, b) {
      return { $$typeof: l, type: a.type, key: b, ref: a.ref, props: a.props, _owner: a._owner };
    }
    function O(a) {
      return "object" === typeof a && null !== a && a.$$typeof === l;
    }
    function escape(a) {
      var b = { "=": "=0", ":": "=2" };
      return "$" + a.replace(/[=:]/g, function(a2) {
        return b[a2];
      });
    }
    var P = /\/+/g;
    function Q(a, b) {
      return "object" === typeof a && null !== a && null != a.key ? escape("" + a.key) : b.toString(36);
    }
    function R(a, b, e, d, c) {
      var k = typeof a;
      if ("undefined" === k || "boolean" === k) a = null;
      var h = false;
      if (null === a) h = true;
      else switch (k) {
        case "string":
        case "number":
          h = true;
          break;
        case "object":
          switch (a.$$typeof) {
            case l:
            case n:
              h = true;
          }
      }
      if (h) return h = a, c = c(h), a = "" === d ? "." + Q(h, 0) : d, I(c) ? (e = "", null != a && (e = a.replace(P, "$&/") + "/"), R(c, b, e, "", function(a2) {
        return a2;
      })) : null != c && (O(c) && (c = N(c, e + (!c.key || h && h.key === c.key ? "" : ("" + c.key).replace(P, "$&/") + "/") + a)), b.push(c)), 1;
      h = 0;
      d = "" === d ? "." : d + ":";
      if (I(a)) for (var g = 0; g < a.length; g++) {
        k = a[g];
        var f = d + Q(k, g);
        h += R(k, b, e, f, c);
      }
      else if (f = A(a), "function" === typeof f) for (a = f.call(a), g = 0; !(k = a.next()).done; ) k = k.value, f = d + Q(k, g++), h += R(k, b, e, f, c);
      else if ("object" === k) throw b = String(a), Error("Objects are not valid as a React child (found: " + ("[object Object]" === b ? "object with keys {" + Object.keys(a).join(", ") + "}" : b) + "). If you meant to render a collection of children, use an array instead.");
      return h;
    }
    function S(a, b, e) {
      if (null == a) return a;
      var d = [], c = 0;
      R(a, d, "", "", function(a2) {
        return b.call(e, a2, c++);
      });
      return d;
    }
    function T(a) {
      if (-1 === a._status) {
        var b = a._result;
        b = b();
        b.then(function(b2) {
          if (0 === a._status || -1 === a._status) a._status = 1, a._result = b2;
        }, function(b2) {
          if (0 === a._status || -1 === a._status) a._status = 2, a._result = b2;
        });
        -1 === a._status && (a._status = 0, a._result = b);
      }
      if (1 === a._status) return a._result.default;
      throw a._result;
    }
    var U = { current: null };
    var V = { transition: null };
    var W = { ReactCurrentDispatcher: U, ReactCurrentBatchConfig: V, ReactCurrentOwner: K };
    function X2() {
      throw Error("act(...) is not supported in production builds of React.");
    }
    exports.Children = { map: S, forEach: function(a, b, e) {
      S(a, function() {
        b.apply(this, arguments);
      }, e);
    }, count: function(a) {
      var b = 0;
      S(a, function() {
        b++;
      });
      return b;
    }, toArray: function(a) {
      return S(a, function(a2) {
        return a2;
      }) || [];
    }, only: function(a) {
      if (!O(a)) throw Error("React.Children.only expected to receive a single React element child.");
      return a;
    } };
    exports.Component = E;
    exports.Fragment = p;
    exports.Profiler = r;
    exports.PureComponent = G;
    exports.StrictMode = q;
    exports.Suspense = w;
    exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W;
    exports.act = X2;
    exports.cloneElement = function(a, b, e) {
      if (null === a || void 0 === a) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + a + ".");
      var d = C({}, a.props), c = a.key, k = a.ref, h = a._owner;
      if (null != b) {
        void 0 !== b.ref && (k = b.ref, h = K.current);
        void 0 !== b.key && (c = "" + b.key);
        if (a.type && a.type.defaultProps) var g = a.type.defaultProps;
        for (f in b) J.call(b, f) && !L.hasOwnProperty(f) && (d[f] = void 0 === b[f] && void 0 !== g ? g[f] : b[f]);
      }
      var f = arguments.length - 2;
      if (1 === f) d.children = e;
      else if (1 < f) {
        g = Array(f);
        for (var m = 0; m < f; m++) g[m] = arguments[m + 2];
        d.children = g;
      }
      return { $$typeof: l, type: a.type, key: c, ref: k, props: d, _owner: h };
    };
    exports.createContext = function(a) {
      a = { $$typeof: u, _currentValue: a, _currentValue2: a, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null };
      a.Provider = { $$typeof: t, _context: a };
      return a.Consumer = a;
    };
    exports.createElement = M;
    exports.createFactory = function(a) {
      var b = M.bind(null, a);
      b.type = a;
      return b;
    };
    exports.createRef = function() {
      return { current: null };
    };
    exports.forwardRef = function(a) {
      return { $$typeof: v, render: a };
    };
    exports.isValidElement = O;
    exports.lazy = function(a) {
      return { $$typeof: y, _payload: { _status: -1, _result: a }, _init: T };
    };
    exports.memo = function(a, b) {
      return { $$typeof: x, type: a, compare: void 0 === b ? null : b };
    };
    exports.startTransition = function(a) {
      var b = V.transition;
      V.transition = {};
      try {
        a();
      } finally {
        V.transition = b;
      }
    };
    exports.unstable_act = X2;
    exports.useCallback = function(a, b) {
      return U.current.useCallback(a, b);
    };
    exports.useContext = function(a) {
      return U.current.useContext(a);
    };
    exports.useDebugValue = function() {
    };
    exports.useDeferredValue = function(a) {
      return U.current.useDeferredValue(a);
    };
    exports.useEffect = function(a, b) {
      return U.current.useEffect(a, b);
    };
    exports.useId = function() {
      return U.current.useId();
    };
    exports.useImperativeHandle = function(a, b, e) {
      return U.current.useImperativeHandle(a, b, e);
    };
    exports.useInsertionEffect = function(a, b) {
      return U.current.useInsertionEffect(a, b);
    };
    exports.useLayoutEffect = function(a, b) {
      return U.current.useLayoutEffect(a, b);
    };
    exports.useMemo = function(a, b) {
      return U.current.useMemo(a, b);
    };
    exports.useReducer = function(a, b, e) {
      return U.current.useReducer(a, b, e);
    };
    exports.useRef = function(a) {
      return U.current.useRef(a);
    };
    exports.useState = function(a) {
      return U.current.useState(a);
    };
    exports.useSyncExternalStore = function(a, b, e) {
      return U.current.useSyncExternalStore(a, b, e);
    };
    exports.useTransition = function() {
      return U.current.useTransition();
    };
    exports.version = "18.3.1";
  }
});

// node_modules/react/index.js
var require_react = __commonJS({
  "node_modules/react/index.js"(exports, module) {
    "use strict";
    if (true) {
      module.exports = require_react_production_min();
    } else {
      module.exports = null;
    }
  }
});

// node_modules/scheduler/cjs/scheduler.production.min.js
var require_scheduler_production_min = __commonJS({
  "node_modules/scheduler/cjs/scheduler.production.min.js"(exports) {
    "use strict";
    function f(a, b) {
      var c = a.length;
      a.push(b);
      a: for (; 0 < c; ) {
        var d = c - 1 >>> 1, e = a[d];
        if (0 < g(e, b)) a[d] = b, a[c] = e, c = d;
        else break a;
      }
    }
    function h(a) {
      return 0 === a.length ? null : a[0];
    }
    function k(a) {
      if (0 === a.length) return null;
      var b = a[0], c = a.pop();
      if (c !== b) {
        a[0] = c;
        a: for (var d = 0, e = a.length, w = e >>> 1; d < w; ) {
          var m = 2 * (d + 1) - 1, C = a[m], n = m + 1, x = a[n];
          if (0 > g(C, c)) n < e && 0 > g(x, C) ? (a[d] = x, a[n] = c, d = n) : (a[d] = C, a[m] = c, d = m);
          else if (n < e && 0 > g(x, c)) a[d] = x, a[n] = c, d = n;
          else break a;
        }
      }
      return b;
    }
    function g(a, b) {
      var c = a.sortIndex - b.sortIndex;
      return 0 !== c ? c : a.id - b.id;
    }
    if ("object" === typeof performance && "function" === typeof performance.now) {
      l = performance;
      exports.unstable_now = function() {
        return l.now();
      };
    } else {
      p = Date, q = p.now();
      exports.unstable_now = function() {
        return p.now() - q;
      };
    }
    var l;
    var p;
    var q;
    var r = [];
    var t = [];
    var u = 1;
    var v = null;
    var y = 3;
    var z = false;
    var A = false;
    var B = false;
    var D = "function" === typeof setTimeout ? setTimeout : null;
    var E = "function" === typeof clearTimeout ? clearTimeout : null;
    var F = "undefined" !== typeof setImmediate ? setImmediate : null;
    "undefined" !== typeof navigator && void 0 !== navigator.scheduling && void 0 !== navigator.scheduling.isInputPending && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function G(a) {
      for (var b = h(t); null !== b; ) {
        if (null === b.callback) k(t);
        else if (b.startTime <= a) k(t), b.sortIndex = b.expirationTime, f(r, b);
        else break;
        b = h(t);
      }
    }
    function H(a) {
      B = false;
      G(a);
      if (!A) if (null !== h(r)) A = true, I(J);
      else {
        var b = h(t);
        null !== b && K(H, b.startTime - a);
      }
    }
    function J(a, b) {
      A = false;
      B && (B = false, E(L), L = -1);
      z = true;
      var c = y;
      try {
        G(b);
        for (v = h(r); null !== v && (!(v.expirationTime > b) || a && !M()); ) {
          var d = v.callback;
          if ("function" === typeof d) {
            v.callback = null;
            y = v.priorityLevel;
            var e = d(v.expirationTime <= b);
            b = exports.unstable_now();
            "function" === typeof e ? v.callback = e : v === h(r) && k(r);
            G(b);
          } else k(r);
          v = h(r);
        }
        if (null !== v) var w = true;
        else {
          var m = h(t);
          null !== m && K(H, m.startTime - b);
          w = false;
        }
        return w;
      } finally {
        v = null, y = c, z = false;
      }
    }
    var N = false;
    var O = null;
    var L = -1;
    var P = 5;
    var Q = -1;
    function M() {
      return exports.unstable_now() - Q < P ? false : true;
    }
    function R() {
      if (null !== O) {
        var a = exports.unstable_now();
        Q = a;
        var b = true;
        try {
          b = O(true, a);
        } finally {
          b ? S() : (N = false, O = null);
        }
      } else N = false;
    }
    var S;
    if ("function" === typeof F) S = function() {
      F(R);
    };
    else if ("undefined" !== typeof MessageChannel) {
      T = new MessageChannel(), U = T.port2;
      T.port1.onmessage = R;
      S = function() {
        U.postMessage(null);
      };
    } else S = function() {
      D(R, 0);
    };
    var T;
    var U;
    function I(a) {
      O = a;
      N || (N = true, S());
    }
    function K(a, b) {
      L = D(function() {
        a(exports.unstable_now());
      }, b);
    }
    exports.unstable_IdlePriority = 5;
    exports.unstable_ImmediatePriority = 1;
    exports.unstable_LowPriority = 4;
    exports.unstable_NormalPriority = 3;
    exports.unstable_Profiling = null;
    exports.unstable_UserBlockingPriority = 2;
    exports.unstable_cancelCallback = function(a) {
      a.callback = null;
    };
    exports.unstable_continueExecution = function() {
      A || z || (A = true, I(J));
    };
    exports.unstable_forceFrameRate = function(a) {
      0 > a || 125 < a ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : P = 0 < a ? Math.floor(1e3 / a) : 5;
    };
    exports.unstable_getCurrentPriorityLevel = function() {
      return y;
    };
    exports.unstable_getFirstCallbackNode = function() {
      return h(r);
    };
    exports.unstable_next = function(a) {
      switch (y) {
        case 1:
        case 2:
        case 3:
          var b = 3;
          break;
        default:
          b = y;
      }
      var c = y;
      y = b;
      try {
        return a();
      } finally {
        y = c;
      }
    };
    exports.unstable_pauseExecution = function() {
    };
    exports.unstable_requestPaint = function() {
    };
    exports.unstable_runWithPriority = function(a, b) {
      switch (a) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          a = 3;
      }
      var c = y;
      y = a;
      try {
        return b();
      } finally {
        y = c;
      }
    };
    exports.unstable_scheduleCallback = function(a, b, c) {
      var d = exports.unstable_now();
      "object" === typeof c && null !== c ? (c = c.delay, c = "number" === typeof c && 0 < c ? d + c : d) : c = d;
      switch (a) {
        case 1:
          var e = -1;
          break;
        case 2:
          e = 250;
          break;
        case 5:
          e = 1073741823;
          break;
        case 4:
          e = 1e4;
          break;
        default:
          e = 5e3;
      }
      e = c + e;
      a = { id: u++, callback: b, priorityLevel: a, startTime: c, expirationTime: e, sortIndex: -1 };
      c > d ? (a.sortIndex = c, f(t, a), null === h(r) && a === h(t) && (B ? (E(L), L = -1) : B = true, K(H, c - d))) : (a.sortIndex = e, f(r, a), A || z || (A = true, I(J)));
      return a;
    };
    exports.unstable_shouldYield = M;
    exports.unstable_wrapCallback = function(a) {
      var b = y;
      return function() {
        var c = y;
        y = b;
        try {
          return a.apply(this, arguments);
        } finally {
          y = c;
        }
      };
    };
  }
});

// node_modules/scheduler/index.js
var require_scheduler = __commonJS({
  "node_modules/scheduler/index.js"(exports, module) {
    "use strict";
    if (true) {
      module.exports = require_scheduler_production_min();
    } else {
      module.exports = null;
    }
  }
});

// node_modules/react-dom/cjs/react-dom.production.min.js
var require_react_dom_production_min = __commonJS({
  "node_modules/react-dom/cjs/react-dom.production.min.js"(exports) {
    "use strict";
    var aa = require_react();
    var ca = require_scheduler();
    function p(a) {
      for (var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 1; c < arguments.length; c++) b += "&args[]=" + encodeURIComponent(arguments[c]);
      return "Minified React error #" + a + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
    }
    var da = /* @__PURE__ */ new Set();
    var ea = {};
    function fa(a, b) {
      ha(a, b);
      ha(a + "Capture", b);
    }
    function ha(a, b) {
      ea[a] = b;
      for (a = 0; a < b.length; a++) da.add(b[a]);
    }
    var ia = !("undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement);
    var ja = Object.prototype.hasOwnProperty;
    var ka = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/;
    var la = {};
    var ma = {};
    function oa(a) {
      if (ja.call(ma, a)) return true;
      if (ja.call(la, a)) return false;
      if (ka.test(a)) return ma[a] = true;
      la[a] = true;
      return false;
    }
    function pa(a, b, c, d) {
      if (null !== c && 0 === c.type) return false;
      switch (typeof b) {
        case "function":
        case "symbol":
          return true;
        case "boolean":
          if (d) return false;
          if (null !== c) return !c.acceptsBooleans;
          a = a.toLowerCase().slice(0, 5);
          return "data-" !== a && "aria-" !== a;
        default:
          return false;
      }
    }
    function qa(a, b, c, d) {
      if (null === b || "undefined" === typeof b || pa(a, b, c, d)) return true;
      if (d) return false;
      if (null !== c) switch (c.type) {
        case 3:
          return !b;
        case 4:
          return false === b;
        case 5:
          return isNaN(b);
        case 6:
          return isNaN(b) || 1 > b;
      }
      return false;
    }
    function v(a, b, c, d, e, f, g) {
      this.acceptsBooleans = 2 === b || 3 === b || 4 === b;
      this.attributeName = d;
      this.attributeNamespace = e;
      this.mustUseProperty = c;
      this.propertyName = a;
      this.type = b;
      this.sanitizeURL = f;
      this.removeEmptyString = g;
    }
    var z = {};
    "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a) {
      z[a] = new v(a, 0, false, a, null, false, false);
    });
    [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(a) {
      var b = a[0];
      z[b] = new v(b, 1, false, a[1], null, false, false);
    });
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(a) {
      z[a] = new v(a, 2, false, a.toLowerCase(), null, false, false);
    });
    ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(a) {
      z[a] = new v(a, 2, false, a, null, false, false);
    });
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a) {
      z[a] = new v(a, 3, false, a.toLowerCase(), null, false, false);
    });
    ["checked", "multiple", "muted", "selected"].forEach(function(a) {
      z[a] = new v(a, 3, true, a, null, false, false);
    });
    ["capture", "download"].forEach(function(a) {
      z[a] = new v(a, 4, false, a, null, false, false);
    });
    ["cols", "rows", "size", "span"].forEach(function(a) {
      z[a] = new v(a, 6, false, a, null, false, false);
    });
    ["rowSpan", "start"].forEach(function(a) {
      z[a] = new v(a, 5, false, a.toLowerCase(), null, false, false);
    });
    var ra = /[\-:]([a-z])/g;
    function sa(a) {
      return a[1].toUpperCase();
    }
    "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a) {
      var b = a.replace(
        ra,
        sa
      );
      z[b] = new v(b, 1, false, a, null, false, false);
    });
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a) {
      var b = a.replace(ra, sa);
      z[b] = new v(b, 1, false, a, "http://www.w3.org/1999/xlink", false, false);
    });
    ["xml:base", "xml:lang", "xml:space"].forEach(function(a) {
      var b = a.replace(ra, sa);
      z[b] = new v(b, 1, false, a, "http://www.w3.org/XML/1998/namespace", false, false);
    });
    ["tabIndex", "crossOrigin"].forEach(function(a) {
      z[a] = new v(a, 1, false, a.toLowerCase(), null, false, false);
    });
    z.xlinkHref = new v("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
    ["src", "href", "action", "formAction"].forEach(function(a) {
      z[a] = new v(a, 1, false, a.toLowerCase(), null, true, true);
    });
    function ta(a, b, c, d) {
      var e = z.hasOwnProperty(b) ? z[b] : null;
      if (null !== e ? 0 !== e.type : d || !(2 < b.length) || "o" !== b[0] && "O" !== b[0] || "n" !== b[1] && "N" !== b[1]) qa(b, c, e, d) && (c = null), d || null === e ? oa(b) && (null === c ? a.removeAttribute(b) : a.setAttribute(b, "" + c)) : e.mustUseProperty ? a[e.propertyName] = null === c ? 3 === e.type ? false : "" : c : (b = e.attributeName, d = e.attributeNamespace, null === c ? a.removeAttribute(b) : (e = e.type, c = 3 === e || 4 === e && true === c ? "" : "" + c, d ? a.setAttributeNS(d, b, c) : a.setAttribute(b, c)));
    }
    var ua = aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    var va = Symbol.for("react.element");
    var wa = Symbol.for("react.portal");
    var ya = Symbol.for("react.fragment");
    var za = Symbol.for("react.strict_mode");
    var Aa = Symbol.for("react.profiler");
    var Ba = Symbol.for("react.provider");
    var Ca = Symbol.for("react.context");
    var Da = Symbol.for("react.forward_ref");
    var Ea = Symbol.for("react.suspense");
    var Fa = Symbol.for("react.suspense_list");
    var Ga = Symbol.for("react.memo");
    var Ha = Symbol.for("react.lazy");
    Symbol.for("react.scope");
    Symbol.for("react.debug_trace_mode");
    var Ia = Symbol.for("react.offscreen");
    Symbol.for("react.legacy_hidden");
    Symbol.for("react.cache");
    Symbol.for("react.tracing_marker");
    var Ja = Symbol.iterator;
    function Ka(a) {
      if (null === a || "object" !== typeof a) return null;
      a = Ja && a[Ja] || a["@@iterator"];
      return "function" === typeof a ? a : null;
    }
    var A = Object.assign;
    var La;
    function Ma(a) {
      if (void 0 === La) try {
        throw Error();
      } catch (c) {
        var b = c.stack.trim().match(/\n( *(at )?)/);
        La = b && b[1] || "";
      }
      return "\n" + La + a;
    }
    var Na = false;
    function Oa(a, b) {
      if (!a || Na) return "";
      Na = true;
      var c = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      try {
        if (b) if (b = function() {
          throw Error();
        }, Object.defineProperty(b.prototype, "props", { set: function() {
          throw Error();
        } }), "object" === typeof Reflect && Reflect.construct) {
          try {
            Reflect.construct(b, []);
          } catch (l) {
            var d = l;
          }
          Reflect.construct(a, [], b);
        } else {
          try {
            b.call();
          } catch (l) {
            d = l;
          }
          a.call(b.prototype);
        }
        else {
          try {
            throw Error();
          } catch (l) {
            d = l;
          }
          a();
        }
      } catch (l) {
        if (l && d && "string" === typeof l.stack) {
          for (var e = l.stack.split("\n"), f = d.stack.split("\n"), g = e.length - 1, h = f.length - 1; 1 <= g && 0 <= h && e[g] !== f[h]; ) h--;
          for (; 1 <= g && 0 <= h; g--, h--) if (e[g] !== f[h]) {
            if (1 !== g || 1 !== h) {
              do
                if (g--, h--, 0 > h || e[g] !== f[h]) {
                  var k = "\n" + e[g].replace(" at new ", " at ");
                  a.displayName && k.includes("<anonymous>") && (k = k.replace("<anonymous>", a.displayName));
                  return k;
                }
              while (1 <= g && 0 <= h);
            }
            break;
          }
        }
      } finally {
        Na = false, Error.prepareStackTrace = c;
      }
      return (a = a ? a.displayName || a.name : "") ? Ma(a) : "";
    }
    function Pa(a) {
      switch (a.tag) {
        case 5:
          return Ma(a.type);
        case 16:
          return Ma("Lazy");
        case 13:
          return Ma("Suspense");
        case 19:
          return Ma("SuspenseList");
        case 0:
        case 2:
        case 15:
          return a = Oa(a.type, false), a;
        case 11:
          return a = Oa(a.type.render, false), a;
        case 1:
          return a = Oa(a.type, true), a;
        default:
          return "";
      }
    }
    function Qa(a) {
      if (null == a) return null;
      if ("function" === typeof a) return a.displayName || a.name || null;
      if ("string" === typeof a) return a;
      switch (a) {
        case ya:
          return "Fragment";
        case wa:
          return "Portal";
        case Aa:
          return "Profiler";
        case za:
          return "StrictMode";
        case Ea:
          return "Suspense";
        case Fa:
          return "SuspenseList";
      }
      if ("object" === typeof a) switch (a.$$typeof) {
        case Ca:
          return (a.displayName || "Context") + ".Consumer";
        case Ba:
          return (a._context.displayName || "Context") + ".Provider";
        case Da:
          var b = a.render;
          a = a.displayName;
          a || (a = b.displayName || b.name || "", a = "" !== a ? "ForwardRef(" + a + ")" : "ForwardRef");
          return a;
        case Ga:
          return b = a.displayName || null, null !== b ? b : Qa(a.type) || "Memo";
        case Ha:
          b = a._payload;
          a = a._init;
          try {
            return Qa(a(b));
          } catch (c) {
          }
      }
      return null;
    }
    function Ra(a) {
      var b = a.type;
      switch (a.tag) {
        case 24:
          return "Cache";
        case 9:
          return (b.displayName || "Context") + ".Consumer";
        case 10:
          return (b._context.displayName || "Context") + ".Provider";
        case 18:
          return "DehydratedFragment";
        case 11:
          return a = b.render, a = a.displayName || a.name || "", b.displayName || ("" !== a ? "ForwardRef(" + a + ")" : "ForwardRef");
        case 7:
          return "Fragment";
        case 5:
          return b;
        case 4:
          return "Portal";
        case 3:
          return "Root";
        case 6:
          return "Text";
        case 16:
          return Qa(b);
        case 8:
          return b === za ? "StrictMode" : "Mode";
        case 22:
          return "Offscreen";
        case 12:
          return "Profiler";
        case 21:
          return "Scope";
        case 13:
          return "Suspense";
        case 19:
          return "SuspenseList";
        case 25:
          return "TracingMarker";
        case 1:
        case 0:
        case 17:
        case 2:
        case 14:
        case 15:
          if ("function" === typeof b) return b.displayName || b.name || null;
          if ("string" === typeof b) return b;
      }
      return null;
    }
    function Sa(a) {
      switch (typeof a) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return a;
        case "object":
          return a;
        default:
          return "";
      }
    }
    function Ta(a) {
      var b = a.type;
      return (a = a.nodeName) && "input" === a.toLowerCase() && ("checkbox" === b || "radio" === b);
    }
    function Ua(a) {
      var b = Ta(a) ? "checked" : "value", c = Object.getOwnPropertyDescriptor(a.constructor.prototype, b), d = "" + a[b];
      if (!a.hasOwnProperty(b) && "undefined" !== typeof c && "function" === typeof c.get && "function" === typeof c.set) {
        var e = c.get, f = c.set;
        Object.defineProperty(a, b, { configurable: true, get: function() {
          return e.call(this);
        }, set: function(a2) {
          d = "" + a2;
          f.call(this, a2);
        } });
        Object.defineProperty(a, b, { enumerable: c.enumerable });
        return { getValue: function() {
          return d;
        }, setValue: function(a2) {
          d = "" + a2;
        }, stopTracking: function() {
          a._valueTracker = null;
          delete a[b];
        } };
      }
    }
    function Va(a) {
      a._valueTracker || (a._valueTracker = Ua(a));
    }
    function Wa(a) {
      if (!a) return false;
      var b = a._valueTracker;
      if (!b) return true;
      var c = b.getValue();
      var d = "";
      a && (d = Ta(a) ? a.checked ? "true" : "false" : a.value);
      a = d;
      return a !== c ? (b.setValue(a), true) : false;
    }
    function Xa(a) {
      a = a || ("undefined" !== typeof document ? document : void 0);
      if ("undefined" === typeof a) return null;
      try {
        return a.activeElement || a.body;
      } catch (b) {
        return a.body;
      }
    }
    function Ya(a, b) {
      var c = b.checked;
      return A({}, b, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: null != c ? c : a._wrapperState.initialChecked });
    }
    function Za(a, b) {
      var c = null == b.defaultValue ? "" : b.defaultValue, d = null != b.checked ? b.checked : b.defaultChecked;
      c = Sa(null != b.value ? b.value : c);
      a._wrapperState = { initialChecked: d, initialValue: c, controlled: "checkbox" === b.type || "radio" === b.type ? null != b.checked : null != b.value };
    }
    function ab(a, b) {
      b = b.checked;
      null != b && ta(a, "checked", b, false);
    }
    function bb(a, b) {
      ab(a, b);
      var c = Sa(b.value), d = b.type;
      if (null != c) if ("number" === d) {
        if (0 === c && "" === a.value || a.value != c) a.value = "" + c;
      } else a.value !== "" + c && (a.value = "" + c);
      else if ("submit" === d || "reset" === d) {
        a.removeAttribute("value");
        return;
      }
      b.hasOwnProperty("value") ? cb(a, b.type, c) : b.hasOwnProperty("defaultValue") && cb(a, b.type, Sa(b.defaultValue));
      null == b.checked && null != b.defaultChecked && (a.defaultChecked = !!b.defaultChecked);
    }
    function db(a, b, c) {
      if (b.hasOwnProperty("value") || b.hasOwnProperty("defaultValue")) {
        var d = b.type;
        if (!("submit" !== d && "reset" !== d || void 0 !== b.value && null !== b.value)) return;
        b = "" + a._wrapperState.initialValue;
        c || b === a.value || (a.value = b);
        a.defaultValue = b;
      }
      c = a.name;
      "" !== c && (a.name = "");
      a.defaultChecked = !!a._wrapperState.initialChecked;
      "" !== c && (a.name = c);
    }
    function cb(a, b, c) {
      if ("number" !== b || Xa(a.ownerDocument) !== a) null == c ? a.defaultValue = "" + a._wrapperState.initialValue : a.defaultValue !== "" + c && (a.defaultValue = "" + c);
    }
    var eb = Array.isArray;
    function fb(a, b, c, d) {
      a = a.options;
      if (b) {
        b = {};
        for (var e = 0; e < c.length; e++) b["$" + c[e]] = true;
        for (c = 0; c < a.length; c++) e = b.hasOwnProperty("$" + a[c].value), a[c].selected !== e && (a[c].selected = e), e && d && (a[c].defaultSelected = true);
      } else {
        c = "" + Sa(c);
        b = null;
        for (e = 0; e < a.length; e++) {
          if (a[e].value === c) {
            a[e].selected = true;
            d && (a[e].defaultSelected = true);
            return;
          }
          null !== b || a[e].disabled || (b = a[e]);
        }
        null !== b && (b.selected = true);
      }
    }
    function gb(a, b) {
      if (null != b.dangerouslySetInnerHTML) throw Error(p(91));
      return A({}, b, { value: void 0, defaultValue: void 0, children: "" + a._wrapperState.initialValue });
    }
    function hb(a, b) {
      var c = b.value;
      if (null == c) {
        c = b.children;
        b = b.defaultValue;
        if (null != c) {
          if (null != b) throw Error(p(92));
          if (eb(c)) {
            if (1 < c.length) throw Error(p(93));
            c = c[0];
          }
          b = c;
        }
        null == b && (b = "");
        c = b;
      }
      a._wrapperState = { initialValue: Sa(c) };
    }
    function ib(a, b) {
      var c = Sa(b.value), d = Sa(b.defaultValue);
      null != c && (c = "" + c, c !== a.value && (a.value = c), null == b.defaultValue && a.defaultValue !== c && (a.defaultValue = c));
      null != d && (a.defaultValue = "" + d);
    }
    function jb(a) {
      var b = a.textContent;
      b === a._wrapperState.initialValue && "" !== b && null !== b && (a.value = b);
    }
    function kb(a) {
      switch (a) {
        case "svg":
          return "http://www.w3.org/2000/svg";
        case "math":
          return "http://www.w3.org/1998/Math/MathML";
        default:
          return "http://www.w3.org/1999/xhtml";
      }
    }
    function lb(a, b) {
      return null == a || "http://www.w3.org/1999/xhtml" === a ? kb(b) : "http://www.w3.org/2000/svg" === a && "foreignObject" === b ? "http://www.w3.org/1999/xhtml" : a;
    }
    var mb;
    var nb = (function(a) {
      return "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction ? function(b, c, d, e) {
        MSApp.execUnsafeLocalFunction(function() {
          return a(b, c, d, e);
        });
      } : a;
    })(function(a, b) {
      if ("http://www.w3.org/2000/svg" !== a.namespaceURI || "innerHTML" in a) a.innerHTML = b;
      else {
        mb = mb || document.createElement("div");
        mb.innerHTML = "<svg>" + b.valueOf().toString() + "</svg>";
        for (b = mb.firstChild; a.firstChild; ) a.removeChild(a.firstChild);
        for (; b.firstChild; ) a.appendChild(b.firstChild);
      }
    });
    function ob(a, b) {
      if (b) {
        var c = a.firstChild;
        if (c && c === a.lastChild && 3 === c.nodeType) {
          c.nodeValue = b;
          return;
        }
      }
      a.textContent = b;
    }
    var pb = {
      animationIterationCount: true,
      aspectRatio: true,
      borderImageOutset: true,
      borderImageSlice: true,
      borderImageWidth: true,
      boxFlex: true,
      boxFlexGroup: true,
      boxOrdinalGroup: true,
      columnCount: true,
      columns: true,
      flex: true,
      flexGrow: true,
      flexPositive: true,
      flexShrink: true,
      flexNegative: true,
      flexOrder: true,
      gridArea: true,
      gridRow: true,
      gridRowEnd: true,
      gridRowSpan: true,
      gridRowStart: true,
      gridColumn: true,
      gridColumnEnd: true,
      gridColumnSpan: true,
      gridColumnStart: true,
      fontWeight: true,
      lineClamp: true,
      lineHeight: true,
      opacity: true,
      order: true,
      orphans: true,
      tabSize: true,
      widows: true,
      zIndex: true,
      zoom: true,
      fillOpacity: true,
      floodOpacity: true,
      stopOpacity: true,
      strokeDasharray: true,
      strokeDashoffset: true,
      strokeMiterlimit: true,
      strokeOpacity: true,
      strokeWidth: true
    };
    var qb = ["Webkit", "ms", "Moz", "O"];
    Object.keys(pb).forEach(function(a) {
      qb.forEach(function(b) {
        b = b + a.charAt(0).toUpperCase() + a.substring(1);
        pb[b] = pb[a];
      });
    });
    function rb(a, b, c) {
      return null == b || "boolean" === typeof b || "" === b ? "" : c || "number" !== typeof b || 0 === b || pb.hasOwnProperty(a) && pb[a] ? ("" + b).trim() : b + "px";
    }
    function sb(a, b) {
      a = a.style;
      for (var c in b) if (b.hasOwnProperty(c)) {
        var d = 0 === c.indexOf("--"), e = rb(c, b[c], d);
        "float" === c && (c = "cssFloat");
        d ? a.setProperty(c, e) : a[c] = e;
      }
    }
    var tb = A({ menuitem: true }, { area: true, base: true, br: true, col: true, embed: true, hr: true, img: true, input: true, keygen: true, link: true, meta: true, param: true, source: true, track: true, wbr: true });
    function ub(a, b) {
      if (b) {
        if (tb[a] && (null != b.children || null != b.dangerouslySetInnerHTML)) throw Error(p(137, a));
        if (null != b.dangerouslySetInnerHTML) {
          if (null != b.children) throw Error(p(60));
          if ("object" !== typeof b.dangerouslySetInnerHTML || !("__html" in b.dangerouslySetInnerHTML)) throw Error(p(61));
        }
        if (null != b.style && "object" !== typeof b.style) throw Error(p(62));
      }
    }
    function vb(a, b) {
      if (-1 === a.indexOf("-")) return "string" === typeof b.is;
      switch (a) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return false;
        default:
          return true;
      }
    }
    var wb = null;
    function xb(a) {
      a = a.target || a.srcElement || window;
      a.correspondingUseElement && (a = a.correspondingUseElement);
      return 3 === a.nodeType ? a.parentNode : a;
    }
    var yb = null;
    var zb = null;
    var Ab = null;
    function Bb(a) {
      if (a = Cb(a)) {
        if ("function" !== typeof yb) throw Error(p(280));
        var b = a.stateNode;
        b && (b = Db(b), yb(a.stateNode, a.type, b));
      }
    }
    function Eb(a) {
      zb ? Ab ? Ab.push(a) : Ab = [a] : zb = a;
    }
    function Fb() {
      if (zb) {
        var a = zb, b = Ab;
        Ab = zb = null;
        Bb(a);
        if (b) for (a = 0; a < b.length; a++) Bb(b[a]);
      }
    }
    function Gb(a, b) {
      return a(b);
    }
    function Hb() {
    }
    var Ib = false;
    function Jb(a, b, c) {
      if (Ib) return a(b, c);
      Ib = true;
      try {
        return Gb(a, b, c);
      } finally {
        if (Ib = false, null !== zb || null !== Ab) Hb(), Fb();
      }
    }
    function Kb(a, b) {
      var c = a.stateNode;
      if (null === c) return null;
      var d = Db(c);
      if (null === d) return null;
      c = d[b];
      a: switch (b) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          (d = !d.disabled) || (a = a.type, d = !("button" === a || "input" === a || "select" === a || "textarea" === a));
          a = !d;
          break a;
        default:
          a = false;
      }
      if (a) return null;
      if (c && "function" !== typeof c) throw Error(p(231, b, typeof c));
      return c;
    }
    var Lb = false;
    if (ia) try {
      Mb = {};
      Object.defineProperty(Mb, "passive", { get: function() {
        Lb = true;
      } });
      window.addEventListener("test", Mb, Mb);
      window.removeEventListener("test", Mb, Mb);
    } catch (a) {
      Lb = false;
    }
    var Mb;
    function Nb(a, b, c, d, e, f, g, h, k) {
      var l = Array.prototype.slice.call(arguments, 3);
      try {
        b.apply(c, l);
      } catch (m) {
        this.onError(m);
      }
    }
    var Ob = false;
    var Pb = null;
    var Qb = false;
    var Rb = null;
    var Sb = { onError: function(a) {
      Ob = true;
      Pb = a;
    } };
    function Tb(a, b, c, d, e, f, g, h, k) {
      Ob = false;
      Pb = null;
      Nb.apply(Sb, arguments);
    }
    function Ub(a, b, c, d, e, f, g, h, k) {
      Tb.apply(this, arguments);
      if (Ob) {
        if (Ob) {
          var l = Pb;
          Ob = false;
          Pb = null;
        } else throw Error(p(198));
        Qb || (Qb = true, Rb = l);
      }
    }
    function Vb(a) {
      var b = a, c = a;
      if (a.alternate) for (; b.return; ) b = b.return;
      else {
        a = b;
        do
          b = a, 0 !== (b.flags & 4098) && (c = b.return), a = b.return;
        while (a);
      }
      return 3 === b.tag ? c : null;
    }
    function Wb(a) {
      if (13 === a.tag) {
        var b = a.memoizedState;
        null === b && (a = a.alternate, null !== a && (b = a.memoizedState));
        if (null !== b) return b.dehydrated;
      }
      return null;
    }
    function Xb(a) {
      if (Vb(a) !== a) throw Error(p(188));
    }
    function Yb(a) {
      var b = a.alternate;
      if (!b) {
        b = Vb(a);
        if (null === b) throw Error(p(188));
        return b !== a ? null : a;
      }
      for (var c = a, d = b; ; ) {
        var e = c.return;
        if (null === e) break;
        var f = e.alternate;
        if (null === f) {
          d = e.return;
          if (null !== d) {
            c = d;
            continue;
          }
          break;
        }
        if (e.child === f.child) {
          for (f = e.child; f; ) {
            if (f === c) return Xb(e), a;
            if (f === d) return Xb(e), b;
            f = f.sibling;
          }
          throw Error(p(188));
        }
        if (c.return !== d.return) c = e, d = f;
        else {
          for (var g = false, h = e.child; h; ) {
            if (h === c) {
              g = true;
              c = e;
              d = f;
              break;
            }
            if (h === d) {
              g = true;
              d = e;
              c = f;
              break;
            }
            h = h.sibling;
          }
          if (!g) {
            for (h = f.child; h; ) {
              if (h === c) {
                g = true;
                c = f;
                d = e;
                break;
              }
              if (h === d) {
                g = true;
                d = f;
                c = e;
                break;
              }
              h = h.sibling;
            }
            if (!g) throw Error(p(189));
          }
        }
        if (c.alternate !== d) throw Error(p(190));
      }
      if (3 !== c.tag) throw Error(p(188));
      return c.stateNode.current === c ? a : b;
    }
    function Zb(a) {
      a = Yb(a);
      return null !== a ? $b(a) : null;
    }
    function $b(a) {
      if (5 === a.tag || 6 === a.tag) return a;
      for (a = a.child; null !== a; ) {
        var b = $b(a);
        if (null !== b) return b;
        a = a.sibling;
      }
      return null;
    }
    var ac = ca.unstable_scheduleCallback;
    var bc = ca.unstable_cancelCallback;
    var cc = ca.unstable_shouldYield;
    var dc = ca.unstable_requestPaint;
    var B = ca.unstable_now;
    var ec = ca.unstable_getCurrentPriorityLevel;
    var fc = ca.unstable_ImmediatePriority;
    var gc = ca.unstable_UserBlockingPriority;
    var hc = ca.unstable_NormalPriority;
    var ic = ca.unstable_LowPriority;
    var jc = ca.unstable_IdlePriority;
    var kc = null;
    var lc = null;
    function mc(a) {
      if (lc && "function" === typeof lc.onCommitFiberRoot) try {
        lc.onCommitFiberRoot(kc, a, void 0, 128 === (a.current.flags & 128));
      } catch (b) {
      }
    }
    var oc = Math.clz32 ? Math.clz32 : nc;
    var pc = Math.log;
    var qc = Math.LN2;
    function nc(a) {
      a >>>= 0;
      return 0 === a ? 32 : 31 - (pc(a) / qc | 0) | 0;
    }
    var rc = 64;
    var sc = 4194304;
    function tc(a) {
      switch (a & -a) {
        case 1:
          return 1;
        case 2:
          return 2;
        case 4:
          return 4;
        case 8:
          return 8;
        case 16:
          return 16;
        case 32:
          return 32;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return a & 4194240;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          return a & 130023424;
        case 134217728:
          return 134217728;
        case 268435456:
          return 268435456;
        case 536870912:
          return 536870912;
        case 1073741824:
          return 1073741824;
        default:
          return a;
      }
    }
    function uc(a, b) {
      var c = a.pendingLanes;
      if (0 === c) return 0;
      var d = 0, e = a.suspendedLanes, f = a.pingedLanes, g = c & 268435455;
      if (0 !== g) {
        var h = g & ~e;
        0 !== h ? d = tc(h) : (f &= g, 0 !== f && (d = tc(f)));
      } else g = c & ~e, 0 !== g ? d = tc(g) : 0 !== f && (d = tc(f));
      if (0 === d) return 0;
      if (0 !== b && b !== d && 0 === (b & e) && (e = d & -d, f = b & -b, e >= f || 16 === e && 0 !== (f & 4194240))) return b;
      0 !== (d & 4) && (d |= c & 16);
      b = a.entangledLanes;
      if (0 !== b) for (a = a.entanglements, b &= d; 0 < b; ) c = 31 - oc(b), e = 1 << c, d |= a[c], b &= ~e;
      return d;
    }
    function vc(a, b) {
      switch (a) {
        case 1:
        case 2:
        case 4:
          return b + 250;
        case 8:
        case 16:
        case 32:
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return b + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          return -1;
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
          return -1;
        default:
          return -1;
      }
    }
    function wc(a, b) {
      for (var c = a.suspendedLanes, d = a.pingedLanes, e = a.expirationTimes, f = a.pendingLanes; 0 < f; ) {
        var g = 31 - oc(f), h = 1 << g, k = e[g];
        if (-1 === k) {
          if (0 === (h & c) || 0 !== (h & d)) e[g] = vc(h, b);
        } else k <= b && (a.expiredLanes |= h);
        f &= ~h;
      }
    }
    function xc(a) {
      a = a.pendingLanes & -1073741825;
      return 0 !== a ? a : a & 1073741824 ? 1073741824 : 0;
    }
    function yc() {
      var a = rc;
      rc <<= 1;
      0 === (rc & 4194240) && (rc = 64);
      return a;
    }
    function zc(a) {
      for (var b = [], c = 0; 31 > c; c++) b.push(a);
      return b;
    }
    function Ac(a, b, c) {
      a.pendingLanes |= b;
      536870912 !== b && (a.suspendedLanes = 0, a.pingedLanes = 0);
      a = a.eventTimes;
      b = 31 - oc(b);
      a[b] = c;
    }
    function Bc(a, b) {
      var c = a.pendingLanes & ~b;
      a.pendingLanes = b;
      a.suspendedLanes = 0;
      a.pingedLanes = 0;
      a.expiredLanes &= b;
      a.mutableReadLanes &= b;
      a.entangledLanes &= b;
      b = a.entanglements;
      var d = a.eventTimes;
      for (a = a.expirationTimes; 0 < c; ) {
        var e = 31 - oc(c), f = 1 << e;
        b[e] = 0;
        d[e] = -1;
        a[e] = -1;
        c &= ~f;
      }
    }
    function Cc(a, b) {
      var c = a.entangledLanes |= b;
      for (a = a.entanglements; c; ) {
        var d = 31 - oc(c), e = 1 << d;
        e & b | a[d] & b && (a[d] |= b);
        c &= ~e;
      }
    }
    var C = 0;
    function Dc(a) {
      a &= -a;
      return 1 < a ? 4 < a ? 0 !== (a & 268435455) ? 16 : 536870912 : 4 : 1;
    }
    var Ec;
    var Fc;
    var Gc;
    var Hc;
    var Ic;
    var Jc = false;
    var Kc = [];
    var Lc = null;
    var Mc = null;
    var Nc = null;
    var Oc = /* @__PURE__ */ new Map();
    var Pc = /* @__PURE__ */ new Map();
    var Qc = [];
    var Rc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
    function Sc(a, b) {
      switch (a) {
        case "focusin":
        case "focusout":
          Lc = null;
          break;
        case "dragenter":
        case "dragleave":
          Mc = null;
          break;
        case "mouseover":
        case "mouseout":
          Nc = null;
          break;
        case "pointerover":
        case "pointerout":
          Oc.delete(b.pointerId);
          break;
        case "gotpointercapture":
        case "lostpointercapture":
          Pc.delete(b.pointerId);
      }
    }
    function Tc(a, b, c, d, e, f) {
      if (null === a || a.nativeEvent !== f) return a = { blockedOn: b, domEventName: c, eventSystemFlags: d, nativeEvent: f, targetContainers: [e] }, null !== b && (b = Cb(b), null !== b && Fc(b)), a;
      a.eventSystemFlags |= d;
      b = a.targetContainers;
      null !== e && -1 === b.indexOf(e) && b.push(e);
      return a;
    }
    function Uc(a, b, c, d, e) {
      switch (b) {
        case "focusin":
          return Lc = Tc(Lc, a, b, c, d, e), true;
        case "dragenter":
          return Mc = Tc(Mc, a, b, c, d, e), true;
        case "mouseover":
          return Nc = Tc(Nc, a, b, c, d, e), true;
        case "pointerover":
          var f = e.pointerId;
          Oc.set(f, Tc(Oc.get(f) || null, a, b, c, d, e));
          return true;
        case "gotpointercapture":
          return f = e.pointerId, Pc.set(f, Tc(Pc.get(f) || null, a, b, c, d, e)), true;
      }
      return false;
    }
    function Vc(a) {
      var b = Wc(a.target);
      if (null !== b) {
        var c = Vb(b);
        if (null !== c) {
          if (b = c.tag, 13 === b) {
            if (b = Wb(c), null !== b) {
              a.blockedOn = b;
              Ic(a.priority, function() {
                Gc(c);
              });
              return;
            }
          } else if (3 === b && c.stateNode.current.memoizedState.isDehydrated) {
            a.blockedOn = 3 === c.tag ? c.stateNode.containerInfo : null;
            return;
          }
        }
      }
      a.blockedOn = null;
    }
    function Xc(a) {
      if (null !== a.blockedOn) return false;
      for (var b = a.targetContainers; 0 < b.length; ) {
        var c = Yc(a.domEventName, a.eventSystemFlags, b[0], a.nativeEvent);
        if (null === c) {
          c = a.nativeEvent;
          var d = new c.constructor(c.type, c);
          wb = d;
          c.target.dispatchEvent(d);
          wb = null;
        } else return b = Cb(c), null !== b && Fc(b), a.blockedOn = c, false;
        b.shift();
      }
      return true;
    }
    function Zc(a, b, c) {
      Xc(a) && c.delete(b);
    }
    function $c() {
      Jc = false;
      null !== Lc && Xc(Lc) && (Lc = null);
      null !== Mc && Xc(Mc) && (Mc = null);
      null !== Nc && Xc(Nc) && (Nc = null);
      Oc.forEach(Zc);
      Pc.forEach(Zc);
    }
    function ad(a, b) {
      a.blockedOn === b && (a.blockedOn = null, Jc || (Jc = true, ca.unstable_scheduleCallback(ca.unstable_NormalPriority, $c)));
    }
    function bd(a) {
      function b(b2) {
        return ad(b2, a);
      }
      if (0 < Kc.length) {
        ad(Kc[0], a);
        for (var c = 1; c < Kc.length; c++) {
          var d = Kc[c];
          d.blockedOn === a && (d.blockedOn = null);
        }
      }
      null !== Lc && ad(Lc, a);
      null !== Mc && ad(Mc, a);
      null !== Nc && ad(Nc, a);
      Oc.forEach(b);
      Pc.forEach(b);
      for (c = 0; c < Qc.length; c++) d = Qc[c], d.blockedOn === a && (d.blockedOn = null);
      for (; 0 < Qc.length && (c = Qc[0], null === c.blockedOn); ) Vc(c), null === c.blockedOn && Qc.shift();
    }
    var cd = ua.ReactCurrentBatchConfig;
    var dd = true;
    function ed(a, b, c, d) {
      var e = C, f = cd.transition;
      cd.transition = null;
      try {
        C = 1, fd(a, b, c, d);
      } finally {
        C = e, cd.transition = f;
      }
    }
    function gd(a, b, c, d) {
      var e = C, f = cd.transition;
      cd.transition = null;
      try {
        C = 4, fd(a, b, c, d);
      } finally {
        C = e, cd.transition = f;
      }
    }
    function fd(a, b, c, d) {
      if (dd) {
        var e = Yc(a, b, c, d);
        if (null === e) hd(a, b, d, id, c), Sc(a, d);
        else if (Uc(e, a, b, c, d)) d.stopPropagation();
        else if (Sc(a, d), b & 4 && -1 < Rc.indexOf(a)) {
          for (; null !== e; ) {
            var f = Cb(e);
            null !== f && Ec(f);
            f = Yc(a, b, c, d);
            null === f && hd(a, b, d, id, c);
            if (f === e) break;
            e = f;
          }
          null !== e && d.stopPropagation();
        } else hd(a, b, d, null, c);
      }
    }
    var id = null;
    function Yc(a, b, c, d) {
      id = null;
      a = xb(d);
      a = Wc(a);
      if (null !== a) if (b = Vb(a), null === b) a = null;
      else if (c = b.tag, 13 === c) {
        a = Wb(b);
        if (null !== a) return a;
        a = null;
      } else if (3 === c) {
        if (b.stateNode.current.memoizedState.isDehydrated) return 3 === b.tag ? b.stateNode.containerInfo : null;
        a = null;
      } else b !== a && (a = null);
      id = a;
      return null;
    }
    function jd(a) {
      switch (a) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
          return 1;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
          return 4;
        case "message":
          switch (ec()) {
            case fc:
              return 1;
            case gc:
              return 4;
            case hc:
            case ic:
              return 16;
            case jc:
              return 536870912;
            default:
              return 16;
          }
        default:
          return 16;
      }
    }
    var kd = null;
    var ld = null;
    var md = null;
    function nd() {
      if (md) return md;
      var a, b = ld, c = b.length, d, e = "value" in kd ? kd.value : kd.textContent, f = e.length;
      for (a = 0; a < c && b[a] === e[a]; a++) ;
      var g = c - a;
      for (d = 1; d <= g && b[c - d] === e[f - d]; d++) ;
      return md = e.slice(a, 1 < d ? 1 - d : void 0);
    }
    function od(a) {
      var b = a.keyCode;
      "charCode" in a ? (a = a.charCode, 0 === a && 13 === b && (a = 13)) : a = b;
      10 === a && (a = 13);
      return 32 <= a || 13 === a ? a : 0;
    }
    function pd() {
      return true;
    }
    function qd() {
      return false;
    }
    function rd(a) {
      function b(b2, d, e, f, g) {
        this._reactName = b2;
        this._targetInst = e;
        this.type = d;
        this.nativeEvent = f;
        this.target = g;
        this.currentTarget = null;
        for (var c in a) a.hasOwnProperty(c) && (b2 = a[c], this[c] = b2 ? b2(f) : f[c]);
        this.isDefaultPrevented = (null != f.defaultPrevented ? f.defaultPrevented : false === f.returnValue) ? pd : qd;
        this.isPropagationStopped = qd;
        return this;
      }
      A(b.prototype, { preventDefault: function() {
        this.defaultPrevented = true;
        var a2 = this.nativeEvent;
        a2 && (a2.preventDefault ? a2.preventDefault() : "unknown" !== typeof a2.returnValue && (a2.returnValue = false), this.isDefaultPrevented = pd);
      }, stopPropagation: function() {
        var a2 = this.nativeEvent;
        a2 && (a2.stopPropagation ? a2.stopPropagation() : "unknown" !== typeof a2.cancelBubble && (a2.cancelBubble = true), this.isPropagationStopped = pd);
      }, persist: function() {
      }, isPersistent: pd });
      return b;
    }
    var sd = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(a) {
      return a.timeStamp || Date.now();
    }, defaultPrevented: 0, isTrusted: 0 };
    var td = rd(sd);
    var ud = A({}, sd, { view: 0, detail: 0 });
    var vd = rd(ud);
    var wd;
    var xd;
    var yd;
    var Ad = A({}, ud, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: zd, button: 0, buttons: 0, relatedTarget: function(a) {
      return void 0 === a.relatedTarget ? a.fromElement === a.srcElement ? a.toElement : a.fromElement : a.relatedTarget;
    }, movementX: function(a) {
      if ("movementX" in a) return a.movementX;
      a !== yd && (yd && "mousemove" === a.type ? (wd = a.screenX - yd.screenX, xd = a.screenY - yd.screenY) : xd = wd = 0, yd = a);
      return wd;
    }, movementY: function(a) {
      return "movementY" in a ? a.movementY : xd;
    } });
    var Bd = rd(Ad);
    var Cd = A({}, Ad, { dataTransfer: 0 });
    var Dd = rd(Cd);
    var Ed = A({}, ud, { relatedTarget: 0 });
    var Fd = rd(Ed);
    var Gd = A({}, sd, { animationName: 0, elapsedTime: 0, pseudoElement: 0 });
    var Hd = rd(Gd);
    var Id = A({}, sd, { clipboardData: function(a) {
      return "clipboardData" in a ? a.clipboardData : window.clipboardData;
    } });
    var Jd = rd(Id);
    var Kd = A({}, sd, { data: 0 });
    var Ld = rd(Kd);
    var Md = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified"
    };
    var Nd = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta"
    };
    var Od = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
    function Pd(a) {
      var b = this.nativeEvent;
      return b.getModifierState ? b.getModifierState(a) : (a = Od[a]) ? !!b[a] : false;
    }
    function zd() {
      return Pd;
    }
    var Qd = A({}, ud, { key: function(a) {
      if (a.key) {
        var b = Md[a.key] || a.key;
        if ("Unidentified" !== b) return b;
      }
      return "keypress" === a.type ? (a = od(a), 13 === a ? "Enter" : String.fromCharCode(a)) : "keydown" === a.type || "keyup" === a.type ? Nd[a.keyCode] || "Unidentified" : "";
    }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: zd, charCode: function(a) {
      return "keypress" === a.type ? od(a) : 0;
    }, keyCode: function(a) {
      return "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
    }, which: function(a) {
      return "keypress" === a.type ? od(a) : "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
    } });
    var Rd = rd(Qd);
    var Sd = A({}, Ad, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 });
    var Td = rd(Sd);
    var Ud = A({}, ud, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: zd });
    var Vd = rd(Ud);
    var Wd = A({}, sd, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 });
    var Xd = rd(Wd);
    var Yd = A({}, Ad, {
      deltaX: function(a) {
        return "deltaX" in a ? a.deltaX : "wheelDeltaX" in a ? -a.wheelDeltaX : 0;
      },
      deltaY: function(a) {
        return "deltaY" in a ? a.deltaY : "wheelDeltaY" in a ? -a.wheelDeltaY : "wheelDelta" in a ? -a.wheelDelta : 0;
      },
      deltaZ: 0,
      deltaMode: 0
    });
    var Zd = rd(Yd);
    var $d = [9, 13, 27, 32];
    var ae = ia && "CompositionEvent" in window;
    var be = null;
    ia && "documentMode" in document && (be = document.documentMode);
    var ce = ia && "TextEvent" in window && !be;
    var de = ia && (!ae || be && 8 < be && 11 >= be);
    var ee = String.fromCharCode(32);
    var fe = false;
    function ge(a, b) {
      switch (a) {
        case "keyup":
          return -1 !== $d.indexOf(b.keyCode);
        case "keydown":
          return 229 !== b.keyCode;
        case "keypress":
        case "mousedown":
        case "focusout":
          return true;
        default:
          return false;
      }
    }
    function he(a) {
      a = a.detail;
      return "object" === typeof a && "data" in a ? a.data : null;
    }
    var ie = false;
    function je(a, b) {
      switch (a) {
        case "compositionend":
          return he(b);
        case "keypress":
          if (32 !== b.which) return null;
          fe = true;
          return ee;
        case "textInput":
          return a = b.data, a === ee && fe ? null : a;
        default:
          return null;
      }
    }
    function ke(a, b) {
      if (ie) return "compositionend" === a || !ae && ge(a, b) ? (a = nd(), md = ld = kd = null, ie = false, a) : null;
      switch (a) {
        case "paste":
          return null;
        case "keypress":
          if (!(b.ctrlKey || b.altKey || b.metaKey) || b.ctrlKey && b.altKey) {
            if (b.char && 1 < b.char.length) return b.char;
            if (b.which) return String.fromCharCode(b.which);
          }
          return null;
        case "compositionend":
          return de && "ko" !== b.locale ? null : b.data;
        default:
          return null;
      }
    }
    var le = { color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true };
    function me(a) {
      var b = a && a.nodeName && a.nodeName.toLowerCase();
      return "input" === b ? !!le[a.type] : "textarea" === b ? true : false;
    }
    function ne(a, b, c, d) {
      Eb(d);
      b = oe(b, "onChange");
      0 < b.length && (c = new td("onChange", "change", null, c, d), a.push({ event: c, listeners: b }));
    }
    var pe = null;
    var qe = null;
    function re(a) {
      se(a, 0);
    }
    function te(a) {
      var b = ue(a);
      if (Wa(b)) return a;
    }
    function ve(a, b) {
      if ("change" === a) return b;
    }
    var we = false;
    if (ia) {
      if (ia) {
        ye = "oninput" in document;
        if (!ye) {
          ze = document.createElement("div");
          ze.setAttribute("oninput", "return;");
          ye = "function" === typeof ze.oninput;
        }
        xe = ye;
      } else xe = false;
      we = xe && (!document.documentMode || 9 < document.documentMode);
    }
    var xe;
    var ye;
    var ze;
    function Ae() {
      pe && (pe.detachEvent("onpropertychange", Be), qe = pe = null);
    }
    function Be(a) {
      if ("value" === a.propertyName && te(qe)) {
        var b = [];
        ne(b, qe, a, xb(a));
        Jb(re, b);
      }
    }
    function Ce(a, b, c) {
      "focusin" === a ? (Ae(), pe = b, qe = c, pe.attachEvent("onpropertychange", Be)) : "focusout" === a && Ae();
    }
    function De(a) {
      if ("selectionchange" === a || "keyup" === a || "keydown" === a) return te(qe);
    }
    function Ee(a, b) {
      if ("click" === a) return te(b);
    }
    function Fe(a, b) {
      if ("input" === a || "change" === a) return te(b);
    }
    function Ge(a, b) {
      return a === b && (0 !== a || 1 / a === 1 / b) || a !== a && b !== b;
    }
    var He = "function" === typeof Object.is ? Object.is : Ge;
    function Ie(a, b) {
      if (He(a, b)) return true;
      if ("object" !== typeof a || null === a || "object" !== typeof b || null === b) return false;
      var c = Object.keys(a), d = Object.keys(b);
      if (c.length !== d.length) return false;
      for (d = 0; d < c.length; d++) {
        var e = c[d];
        if (!ja.call(b, e) || !He(a[e], b[e])) return false;
      }
      return true;
    }
    function Je(a) {
      for (; a && a.firstChild; ) a = a.firstChild;
      return a;
    }
    function Ke(a, b) {
      var c = Je(a);
      a = 0;
      for (var d; c; ) {
        if (3 === c.nodeType) {
          d = a + c.textContent.length;
          if (a <= b && d >= b) return { node: c, offset: b - a };
          a = d;
        }
        a: {
          for (; c; ) {
            if (c.nextSibling) {
              c = c.nextSibling;
              break a;
            }
            c = c.parentNode;
          }
          c = void 0;
        }
        c = Je(c);
      }
    }
    function Le(a, b) {
      return a && b ? a === b ? true : a && 3 === a.nodeType ? false : b && 3 === b.nodeType ? Le(a, b.parentNode) : "contains" in a ? a.contains(b) : a.compareDocumentPosition ? !!(a.compareDocumentPosition(b) & 16) : false : false;
    }
    function Me() {
      for (var a = window, b = Xa(); b instanceof a.HTMLIFrameElement; ) {
        try {
          var c = "string" === typeof b.contentWindow.location.href;
        } catch (d) {
          c = false;
        }
        if (c) a = b.contentWindow;
        else break;
        b = Xa(a.document);
      }
      return b;
    }
    function Ne(a) {
      var b = a && a.nodeName && a.nodeName.toLowerCase();
      return b && ("input" === b && ("text" === a.type || "search" === a.type || "tel" === a.type || "url" === a.type || "password" === a.type) || "textarea" === b || "true" === a.contentEditable);
    }
    function Oe(a) {
      var b = Me(), c = a.focusedElem, d = a.selectionRange;
      if (b !== c && c && c.ownerDocument && Le(c.ownerDocument.documentElement, c)) {
        if (null !== d && Ne(c)) {
          if (b = d.start, a = d.end, void 0 === a && (a = b), "selectionStart" in c) c.selectionStart = b, c.selectionEnd = Math.min(a, c.value.length);
          else if (a = (b = c.ownerDocument || document) && b.defaultView || window, a.getSelection) {
            a = a.getSelection();
            var e = c.textContent.length, f = Math.min(d.start, e);
            d = void 0 === d.end ? f : Math.min(d.end, e);
            !a.extend && f > d && (e = d, d = f, f = e);
            e = Ke(c, f);
            var g = Ke(
              c,
              d
            );
            e && g && (1 !== a.rangeCount || a.anchorNode !== e.node || a.anchorOffset !== e.offset || a.focusNode !== g.node || a.focusOffset !== g.offset) && (b = b.createRange(), b.setStart(e.node, e.offset), a.removeAllRanges(), f > d ? (a.addRange(b), a.extend(g.node, g.offset)) : (b.setEnd(g.node, g.offset), a.addRange(b)));
          }
        }
        b = [];
        for (a = c; a = a.parentNode; ) 1 === a.nodeType && b.push({ element: a, left: a.scrollLeft, top: a.scrollTop });
        "function" === typeof c.focus && c.focus();
        for (c = 0; c < b.length; c++) a = b[c], a.element.scrollLeft = a.left, a.element.scrollTop = a.top;
      }
    }
    var Pe = ia && "documentMode" in document && 11 >= document.documentMode;
    var Qe = null;
    var Re = null;
    var Se = null;
    var Te = false;
    function Ue(a, b, c) {
      var d = c.window === c ? c.document : 9 === c.nodeType ? c : c.ownerDocument;
      Te || null == Qe || Qe !== Xa(d) || (d = Qe, "selectionStart" in d && Ne(d) ? d = { start: d.selectionStart, end: d.selectionEnd } : (d = (d.ownerDocument && d.ownerDocument.defaultView || window).getSelection(), d = { anchorNode: d.anchorNode, anchorOffset: d.anchorOffset, focusNode: d.focusNode, focusOffset: d.focusOffset }), Se && Ie(Se, d) || (Se = d, d = oe(Re, "onSelect"), 0 < d.length && (b = new td("onSelect", "select", null, b, c), a.push({ event: b, listeners: d }), b.target = Qe)));
    }
    function Ve(a, b) {
      var c = {};
      c[a.toLowerCase()] = b.toLowerCase();
      c["Webkit" + a] = "webkit" + b;
      c["Moz" + a] = "moz" + b;
      return c;
    }
    var We = { animationend: Ve("Animation", "AnimationEnd"), animationiteration: Ve("Animation", "AnimationIteration"), animationstart: Ve("Animation", "AnimationStart"), transitionend: Ve("Transition", "TransitionEnd") };
    var Xe = {};
    var Ye = {};
    ia && (Ye = document.createElement("div").style, "AnimationEvent" in window || (delete We.animationend.animation, delete We.animationiteration.animation, delete We.animationstart.animation), "TransitionEvent" in window || delete We.transitionend.transition);
    function Ze(a) {
      if (Xe[a]) return Xe[a];
      if (!We[a]) return a;
      var b = We[a], c;
      for (c in b) if (b.hasOwnProperty(c) && c in Ye) return Xe[a] = b[c];
      return a;
    }
    var $e = Ze("animationend");
    var af = Ze("animationiteration");
    var bf = Ze("animationstart");
    var cf = Ze("transitionend");
    var df = /* @__PURE__ */ new Map();
    var ef = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
    function ff(a, b) {
      df.set(a, b);
      fa(b, [a]);
    }
    for (gf = 0; gf < ef.length; gf++) {
      hf = ef[gf], jf = hf.toLowerCase(), kf = hf[0].toUpperCase() + hf.slice(1);
      ff(jf, "on" + kf);
    }
    var hf;
    var jf;
    var kf;
    var gf;
    ff($e, "onAnimationEnd");
    ff(af, "onAnimationIteration");
    ff(bf, "onAnimationStart");
    ff("dblclick", "onDoubleClick");
    ff("focusin", "onFocus");
    ff("focusout", "onBlur");
    ff(cf, "onTransitionEnd");
    ha("onMouseEnter", ["mouseout", "mouseover"]);
    ha("onMouseLeave", ["mouseout", "mouseover"]);
    ha("onPointerEnter", ["pointerout", "pointerover"]);
    ha("onPointerLeave", ["pointerout", "pointerover"]);
    fa("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
    fa("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
    fa("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
    fa("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
    fa("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
    fa("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var lf = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ");
    var mf = new Set("cancel close invalid load scroll toggle".split(" ").concat(lf));
    function nf(a, b, c) {
      var d = a.type || "unknown-event";
      a.currentTarget = c;
      Ub(d, b, void 0, a);
      a.currentTarget = null;
    }
    function se(a, b) {
      b = 0 !== (b & 4);
      for (var c = 0; c < a.length; c++) {
        var d = a[c], e = d.event;
        d = d.listeners;
        a: {
          var f = void 0;
          if (b) for (var g = d.length - 1; 0 <= g; g--) {
            var h = d[g], k = h.instance, l = h.currentTarget;
            h = h.listener;
            if (k !== f && e.isPropagationStopped()) break a;
            nf(e, h, l);
            f = k;
          }
          else for (g = 0; g < d.length; g++) {
            h = d[g];
            k = h.instance;
            l = h.currentTarget;
            h = h.listener;
            if (k !== f && e.isPropagationStopped()) break a;
            nf(e, h, l);
            f = k;
          }
        }
      }
      if (Qb) throw a = Rb, Qb = false, Rb = null, a;
    }
    function D(a, b) {
      var c = b[of];
      void 0 === c && (c = b[of] = /* @__PURE__ */ new Set());
      var d = a + "__bubble";
      c.has(d) || (pf(b, a, 2, false), c.add(d));
    }
    function qf(a, b, c) {
      var d = 0;
      b && (d |= 4);
      pf(c, a, d, b);
    }
    var rf = "_reactListening" + Math.random().toString(36).slice(2);
    function sf(a) {
      if (!a[rf]) {
        a[rf] = true;
        da.forEach(function(b2) {
          "selectionchange" !== b2 && (mf.has(b2) || qf(b2, false, a), qf(b2, true, a));
        });
        var b = 9 === a.nodeType ? a : a.ownerDocument;
        null === b || b[rf] || (b[rf] = true, qf("selectionchange", false, b));
      }
    }
    function pf(a, b, c, d) {
      switch (jd(b)) {
        case 1:
          var e = ed;
          break;
        case 4:
          e = gd;
          break;
        default:
          e = fd;
      }
      c = e.bind(null, b, c, a);
      e = void 0;
      !Lb || "touchstart" !== b && "touchmove" !== b && "wheel" !== b || (e = true);
      d ? void 0 !== e ? a.addEventListener(b, c, { capture: true, passive: e }) : a.addEventListener(b, c, true) : void 0 !== e ? a.addEventListener(b, c, { passive: e }) : a.addEventListener(b, c, false);
    }
    function hd(a, b, c, d, e) {
      var f = d;
      if (0 === (b & 1) && 0 === (b & 2) && null !== d) a: for (; ; ) {
        if (null === d) return;
        var g = d.tag;
        if (3 === g || 4 === g) {
          var h = d.stateNode.containerInfo;
          if (h === e || 8 === h.nodeType && h.parentNode === e) break;
          if (4 === g) for (g = d.return; null !== g; ) {
            var k = g.tag;
            if (3 === k || 4 === k) {
              if (k = g.stateNode.containerInfo, k === e || 8 === k.nodeType && k.parentNode === e) return;
            }
            g = g.return;
          }
          for (; null !== h; ) {
            g = Wc(h);
            if (null === g) return;
            k = g.tag;
            if (5 === k || 6 === k) {
              d = f = g;
              continue a;
            }
            h = h.parentNode;
          }
        }
        d = d.return;
      }
      Jb(function() {
        var d2 = f, e2 = xb(c), g2 = [];
        a: {
          var h2 = df.get(a);
          if (void 0 !== h2) {
            var k2 = td, n = a;
            switch (a) {
              case "keypress":
                if (0 === od(c)) break a;
              case "keydown":
              case "keyup":
                k2 = Rd;
                break;
              case "focusin":
                n = "focus";
                k2 = Fd;
                break;
              case "focusout":
                n = "blur";
                k2 = Fd;
                break;
              case "beforeblur":
              case "afterblur":
                k2 = Fd;
                break;
              case "click":
                if (2 === c.button) break a;
              case "auxclick":
              case "dblclick":
              case "mousedown":
              case "mousemove":
              case "mouseup":
              case "mouseout":
              case "mouseover":
              case "contextmenu":
                k2 = Bd;
                break;
              case "drag":
              case "dragend":
              case "dragenter":
              case "dragexit":
              case "dragleave":
              case "dragover":
              case "dragstart":
              case "drop":
                k2 = Dd;
                break;
              case "touchcancel":
              case "touchend":
              case "touchmove":
              case "touchstart":
                k2 = Vd;
                break;
              case $e:
              case af:
              case bf:
                k2 = Hd;
                break;
              case cf:
                k2 = Xd;
                break;
              case "scroll":
                k2 = vd;
                break;
              case "wheel":
                k2 = Zd;
                break;
              case "copy":
              case "cut":
              case "paste":
                k2 = Jd;
                break;
              case "gotpointercapture":
              case "lostpointercapture":
              case "pointercancel":
              case "pointerdown":
              case "pointermove":
              case "pointerout":
              case "pointerover":
              case "pointerup":
                k2 = Td;
            }
            var t = 0 !== (b & 4), J = !t && "scroll" === a, x = t ? null !== h2 ? h2 + "Capture" : null : h2;
            t = [];
            for (var w = d2, u; null !== w; ) {
              u = w;
              var F = u.stateNode;
              5 === u.tag && null !== F && (u = F, null !== x && (F = Kb(w, x), null != F && t.push(tf(w, F, u))));
              if (J) break;
              w = w.return;
            }
            0 < t.length && (h2 = new k2(h2, n, null, c, e2), g2.push({ event: h2, listeners: t }));
          }
        }
        if (0 === (b & 7)) {
          a: {
            h2 = "mouseover" === a || "pointerover" === a;
            k2 = "mouseout" === a || "pointerout" === a;
            if (h2 && c !== wb && (n = c.relatedTarget || c.fromElement) && (Wc(n) || n[uf])) break a;
            if (k2 || h2) {
              h2 = e2.window === e2 ? e2 : (h2 = e2.ownerDocument) ? h2.defaultView || h2.parentWindow : window;
              if (k2) {
                if (n = c.relatedTarget || c.toElement, k2 = d2, n = n ? Wc(n) : null, null !== n && (J = Vb(n), n !== J || 5 !== n.tag && 6 !== n.tag)) n = null;
              } else k2 = null, n = d2;
              if (k2 !== n) {
                t = Bd;
                F = "onMouseLeave";
                x = "onMouseEnter";
                w = "mouse";
                if ("pointerout" === a || "pointerover" === a) t = Td, F = "onPointerLeave", x = "onPointerEnter", w = "pointer";
                J = null == k2 ? h2 : ue(k2);
                u = null == n ? h2 : ue(n);
                h2 = new t(F, w + "leave", k2, c, e2);
                h2.target = J;
                h2.relatedTarget = u;
                F = null;
                Wc(e2) === d2 && (t = new t(x, w + "enter", n, c, e2), t.target = u, t.relatedTarget = J, F = t);
                J = F;
                if (k2 && n) b: {
                  t = k2;
                  x = n;
                  w = 0;
                  for (u = t; u; u = vf(u)) w++;
                  u = 0;
                  for (F = x; F; F = vf(F)) u++;
                  for (; 0 < w - u; ) t = vf(t), w--;
                  for (; 0 < u - w; ) x = vf(x), u--;
                  for (; w--; ) {
                    if (t === x || null !== x && t === x.alternate) break b;
                    t = vf(t);
                    x = vf(x);
                  }
                  t = null;
                }
                else t = null;
                null !== k2 && wf(g2, h2, k2, t, false);
                null !== n && null !== J && wf(g2, J, n, t, true);
              }
            }
          }
          a: {
            h2 = d2 ? ue(d2) : window;
            k2 = h2.nodeName && h2.nodeName.toLowerCase();
            if ("select" === k2 || "input" === k2 && "file" === h2.type) var na = ve;
            else if (me(h2)) if (we) na = Fe;
            else {
              na = De;
              var xa = Ce;
            }
            else (k2 = h2.nodeName) && "input" === k2.toLowerCase() && ("checkbox" === h2.type || "radio" === h2.type) && (na = Ee);
            if (na && (na = na(a, d2))) {
              ne(g2, na, c, e2);
              break a;
            }
            xa && xa(a, h2, d2);
            "focusout" === a && (xa = h2._wrapperState) && xa.controlled && "number" === h2.type && cb(h2, "number", h2.value);
          }
          xa = d2 ? ue(d2) : window;
          switch (a) {
            case "focusin":
              if (me(xa) || "true" === xa.contentEditable) Qe = xa, Re = d2, Se = null;
              break;
            case "focusout":
              Se = Re = Qe = null;
              break;
            case "mousedown":
              Te = true;
              break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
              Te = false;
              Ue(g2, c, e2);
              break;
            case "selectionchange":
              if (Pe) break;
            case "keydown":
            case "keyup":
              Ue(g2, c, e2);
          }
          var $a;
          if (ae) b: {
            switch (a) {
              case "compositionstart":
                var ba = "onCompositionStart";
                break b;
              case "compositionend":
                ba = "onCompositionEnd";
                break b;
              case "compositionupdate":
                ba = "onCompositionUpdate";
                break b;
            }
            ba = void 0;
          }
          else ie ? ge(a, c) && (ba = "onCompositionEnd") : "keydown" === a && 229 === c.keyCode && (ba = "onCompositionStart");
          ba && (de && "ko" !== c.locale && (ie || "onCompositionStart" !== ba ? "onCompositionEnd" === ba && ie && ($a = nd()) : (kd = e2, ld = "value" in kd ? kd.value : kd.textContent, ie = true)), xa = oe(d2, ba), 0 < xa.length && (ba = new Ld(ba, a, null, c, e2), g2.push({ event: ba, listeners: xa }), $a ? ba.data = $a : ($a = he(c), null !== $a && (ba.data = $a))));
          if ($a = ce ? je(a, c) : ke(a, c)) d2 = oe(d2, "onBeforeInput"), 0 < d2.length && (e2 = new Ld("onBeforeInput", "beforeinput", null, c, e2), g2.push({ event: e2, listeners: d2 }), e2.data = $a);
        }
        se(g2, b);
      });
    }
    function tf(a, b, c) {
      return { instance: a, listener: b, currentTarget: c };
    }
    function oe(a, b) {
      for (var c = b + "Capture", d = []; null !== a; ) {
        var e = a, f = e.stateNode;
        5 === e.tag && null !== f && (e = f, f = Kb(a, c), null != f && d.unshift(tf(a, f, e)), f = Kb(a, b), null != f && d.push(tf(a, f, e)));
        a = a.return;
      }
      return d;
    }
    function vf(a) {
      if (null === a) return null;
      do
        a = a.return;
      while (a && 5 !== a.tag);
      return a ? a : null;
    }
    function wf(a, b, c, d, e) {
      for (var f = b._reactName, g = []; null !== c && c !== d; ) {
        var h = c, k = h.alternate, l = h.stateNode;
        if (null !== k && k === d) break;
        5 === h.tag && null !== l && (h = l, e ? (k = Kb(c, f), null != k && g.unshift(tf(c, k, h))) : e || (k = Kb(c, f), null != k && g.push(tf(c, k, h))));
        c = c.return;
      }
      0 !== g.length && a.push({ event: b, listeners: g });
    }
    var xf = /\r\n?/g;
    var yf = /\u0000|\uFFFD/g;
    function zf(a) {
      return ("string" === typeof a ? a : "" + a).replace(xf, "\n").replace(yf, "");
    }
    function Af(a, b, c) {
      b = zf(b);
      if (zf(a) !== b && c) throw Error(p(425));
    }
    function Bf() {
    }
    var Cf = null;
    var Df = null;
    function Ef(a, b) {
      return "textarea" === a || "noscript" === a || "string" === typeof b.children || "number" === typeof b.children || "object" === typeof b.dangerouslySetInnerHTML && null !== b.dangerouslySetInnerHTML && null != b.dangerouslySetInnerHTML.__html;
    }
    var Ff = "function" === typeof setTimeout ? setTimeout : void 0;
    var Gf = "function" === typeof clearTimeout ? clearTimeout : void 0;
    var Hf = "function" === typeof Promise ? Promise : void 0;
    var Jf = "function" === typeof queueMicrotask ? queueMicrotask : "undefined" !== typeof Hf ? function(a) {
      return Hf.resolve(null).then(a).catch(If);
    } : Ff;
    function If(a) {
      setTimeout(function() {
        throw a;
      });
    }
    function Kf(a, b) {
      var c = b, d = 0;
      do {
        var e = c.nextSibling;
        a.removeChild(c);
        if (e && 8 === e.nodeType) if (c = e.data, "/$" === c) {
          if (0 === d) {
            a.removeChild(e);
            bd(b);
            return;
          }
          d--;
        } else "$" !== c && "$?" !== c && "$!" !== c || d++;
        c = e;
      } while (c);
      bd(b);
    }
    function Lf(a) {
      for (; null != a; a = a.nextSibling) {
        var b = a.nodeType;
        if (1 === b || 3 === b) break;
        if (8 === b) {
          b = a.data;
          if ("$" === b || "$!" === b || "$?" === b) break;
          if ("/$" === b) return null;
        }
      }
      return a;
    }
    function Mf(a) {
      a = a.previousSibling;
      for (var b = 0; a; ) {
        if (8 === a.nodeType) {
          var c = a.data;
          if ("$" === c || "$!" === c || "$?" === c) {
            if (0 === b) return a;
            b--;
          } else "/$" === c && b++;
        }
        a = a.previousSibling;
      }
      return null;
    }
    var Nf = Math.random().toString(36).slice(2);
    var Of = "__reactFiber$" + Nf;
    var Pf = "__reactProps$" + Nf;
    var uf = "__reactContainer$" + Nf;
    var of = "__reactEvents$" + Nf;
    var Qf = "__reactListeners$" + Nf;
    var Rf = "__reactHandles$" + Nf;
    function Wc(a) {
      var b = a[Of];
      if (b) return b;
      for (var c = a.parentNode; c; ) {
        if (b = c[uf] || c[Of]) {
          c = b.alternate;
          if (null !== b.child || null !== c && null !== c.child) for (a = Mf(a); null !== a; ) {
            if (c = a[Of]) return c;
            a = Mf(a);
          }
          return b;
        }
        a = c;
        c = a.parentNode;
      }
      return null;
    }
    function Cb(a) {
      a = a[Of] || a[uf];
      return !a || 5 !== a.tag && 6 !== a.tag && 13 !== a.tag && 3 !== a.tag ? null : a;
    }
    function ue(a) {
      if (5 === a.tag || 6 === a.tag) return a.stateNode;
      throw Error(p(33));
    }
    function Db(a) {
      return a[Pf] || null;
    }
    var Sf = [];
    var Tf = -1;
    function Uf(a) {
      return { current: a };
    }
    function E(a) {
      0 > Tf || (a.current = Sf[Tf], Sf[Tf] = null, Tf--);
    }
    function G(a, b) {
      Tf++;
      Sf[Tf] = a.current;
      a.current = b;
    }
    var Vf = {};
    var H = Uf(Vf);
    var Wf = Uf(false);
    var Xf = Vf;
    function Yf(a, b) {
      var c = a.type.contextTypes;
      if (!c) return Vf;
      var d = a.stateNode;
      if (d && d.__reactInternalMemoizedUnmaskedChildContext === b) return d.__reactInternalMemoizedMaskedChildContext;
      var e = {}, f;
      for (f in c) e[f] = b[f];
      d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = b, a.__reactInternalMemoizedMaskedChildContext = e);
      return e;
    }
    function Zf(a) {
      a = a.childContextTypes;
      return null !== a && void 0 !== a;
    }
    function $f() {
      E(Wf);
      E(H);
    }
    function ag(a, b, c) {
      if (H.current !== Vf) throw Error(p(168));
      G(H, b);
      G(Wf, c);
    }
    function bg(a, b, c) {
      var d = a.stateNode;
      b = b.childContextTypes;
      if ("function" !== typeof d.getChildContext) return c;
      d = d.getChildContext();
      for (var e in d) if (!(e in b)) throw Error(p(108, Ra(a) || "Unknown", e));
      return A({}, c, d);
    }
    function cg(a) {
      a = (a = a.stateNode) && a.__reactInternalMemoizedMergedChildContext || Vf;
      Xf = H.current;
      G(H, a);
      G(Wf, Wf.current);
      return true;
    }
    function dg(a, b, c) {
      var d = a.stateNode;
      if (!d) throw Error(p(169));
      c ? (a = bg(a, b, Xf), d.__reactInternalMemoizedMergedChildContext = a, E(Wf), E(H), G(H, a)) : E(Wf);
      G(Wf, c);
    }
    var eg = null;
    var fg = false;
    var gg = false;
    function hg(a) {
      null === eg ? eg = [a] : eg.push(a);
    }
    function ig(a) {
      fg = true;
      hg(a);
    }
    function jg() {
      if (!gg && null !== eg) {
        gg = true;
        var a = 0, b = C;
        try {
          var c = eg;
          for (C = 1; a < c.length; a++) {
            var d = c[a];
            do
              d = d(true);
            while (null !== d);
          }
          eg = null;
          fg = false;
        } catch (e) {
          throw null !== eg && (eg = eg.slice(a + 1)), ac(fc, jg), e;
        } finally {
          C = b, gg = false;
        }
      }
      return null;
    }
    var kg = [];
    var lg = 0;
    var mg = null;
    var ng = 0;
    var og = [];
    var pg = 0;
    var qg = null;
    var rg = 1;
    var sg = "";
    function tg(a, b) {
      kg[lg++] = ng;
      kg[lg++] = mg;
      mg = a;
      ng = b;
    }
    function ug(a, b, c) {
      og[pg++] = rg;
      og[pg++] = sg;
      og[pg++] = qg;
      qg = a;
      var d = rg;
      a = sg;
      var e = 32 - oc(d) - 1;
      d &= ~(1 << e);
      c += 1;
      var f = 32 - oc(b) + e;
      if (30 < f) {
        var g = e - e % 5;
        f = (d & (1 << g) - 1).toString(32);
        d >>= g;
        e -= g;
        rg = 1 << 32 - oc(b) + e | c << e | d;
        sg = f + a;
      } else rg = 1 << f | c << e | d, sg = a;
    }
    function vg(a) {
      null !== a.return && (tg(a, 1), ug(a, 1, 0));
    }
    function wg(a) {
      for (; a === mg; ) mg = kg[--lg], kg[lg] = null, ng = kg[--lg], kg[lg] = null;
      for (; a === qg; ) qg = og[--pg], og[pg] = null, sg = og[--pg], og[pg] = null, rg = og[--pg], og[pg] = null;
    }
    var xg = null;
    var yg = null;
    var I = false;
    var zg = null;
    function Ag(a, b) {
      var c = Bg(5, null, null, 0);
      c.elementType = "DELETED";
      c.stateNode = b;
      c.return = a;
      b = a.deletions;
      null === b ? (a.deletions = [c], a.flags |= 16) : b.push(c);
    }
    function Cg(a, b) {
      switch (a.tag) {
        case 5:
          var c = a.type;
          b = 1 !== b.nodeType || c.toLowerCase() !== b.nodeName.toLowerCase() ? null : b;
          return null !== b ? (a.stateNode = b, xg = a, yg = Lf(b.firstChild), true) : false;
        case 6:
          return b = "" === a.pendingProps || 3 !== b.nodeType ? null : b, null !== b ? (a.stateNode = b, xg = a, yg = null, true) : false;
        case 13:
          return b = 8 !== b.nodeType ? null : b, null !== b ? (c = null !== qg ? { id: rg, overflow: sg } : null, a.memoizedState = { dehydrated: b, treeContext: c, retryLane: 1073741824 }, c = Bg(18, null, null, 0), c.stateNode = b, c.return = a, a.child = c, xg = a, yg = null, true) : false;
        default:
          return false;
      }
    }
    function Dg(a) {
      return 0 !== (a.mode & 1) && 0 === (a.flags & 128);
    }
    function Eg(a) {
      if (I) {
        var b = yg;
        if (b) {
          var c = b;
          if (!Cg(a, b)) {
            if (Dg(a)) throw Error(p(418));
            b = Lf(c.nextSibling);
            var d = xg;
            b && Cg(a, b) ? Ag(d, c) : (a.flags = a.flags & -4097 | 2, I = false, xg = a);
          }
        } else {
          if (Dg(a)) throw Error(p(418));
          a.flags = a.flags & -4097 | 2;
          I = false;
          xg = a;
        }
      }
    }
    function Fg(a) {
      for (a = a.return; null !== a && 5 !== a.tag && 3 !== a.tag && 13 !== a.tag; ) a = a.return;
      xg = a;
    }
    function Gg(a) {
      if (a !== xg) return false;
      if (!I) return Fg(a), I = true, false;
      var b;
      (b = 3 !== a.tag) && !(b = 5 !== a.tag) && (b = a.type, b = "head" !== b && "body" !== b && !Ef(a.type, a.memoizedProps));
      if (b && (b = yg)) {
        if (Dg(a)) throw Hg(), Error(p(418));
        for (; b; ) Ag(a, b), b = Lf(b.nextSibling);
      }
      Fg(a);
      if (13 === a.tag) {
        a = a.memoizedState;
        a = null !== a ? a.dehydrated : null;
        if (!a) throw Error(p(317));
        a: {
          a = a.nextSibling;
          for (b = 0; a; ) {
            if (8 === a.nodeType) {
              var c = a.data;
              if ("/$" === c) {
                if (0 === b) {
                  yg = Lf(a.nextSibling);
                  break a;
                }
                b--;
              } else "$" !== c && "$!" !== c && "$?" !== c || b++;
            }
            a = a.nextSibling;
          }
          yg = null;
        }
      } else yg = xg ? Lf(a.stateNode.nextSibling) : null;
      return true;
    }
    function Hg() {
      for (var a = yg; a; ) a = Lf(a.nextSibling);
    }
    function Ig() {
      yg = xg = null;
      I = false;
    }
    function Jg(a) {
      null === zg ? zg = [a] : zg.push(a);
    }
    var Kg = ua.ReactCurrentBatchConfig;
    function Lg(a, b, c) {
      a = c.ref;
      if (null !== a && "function" !== typeof a && "object" !== typeof a) {
        if (c._owner) {
          c = c._owner;
          if (c) {
            if (1 !== c.tag) throw Error(p(309));
            var d = c.stateNode;
          }
          if (!d) throw Error(p(147, a));
          var e = d, f = "" + a;
          if (null !== b && null !== b.ref && "function" === typeof b.ref && b.ref._stringRef === f) return b.ref;
          b = function(a2) {
            var b2 = e.refs;
            null === a2 ? delete b2[f] : b2[f] = a2;
          };
          b._stringRef = f;
          return b;
        }
        if ("string" !== typeof a) throw Error(p(284));
        if (!c._owner) throw Error(p(290, a));
      }
      return a;
    }
    function Mg(a, b) {
      a = Object.prototype.toString.call(b);
      throw Error(p(31, "[object Object]" === a ? "object with keys {" + Object.keys(b).join(", ") + "}" : a));
    }
    function Ng(a) {
      var b = a._init;
      return b(a._payload);
    }
    function Og(a) {
      function b(b2, c2) {
        if (a) {
          var d2 = b2.deletions;
          null === d2 ? (b2.deletions = [c2], b2.flags |= 16) : d2.push(c2);
        }
      }
      function c(c2, d2) {
        if (!a) return null;
        for (; null !== d2; ) b(c2, d2), d2 = d2.sibling;
        return null;
      }
      function d(a2, b2) {
        for (a2 = /* @__PURE__ */ new Map(); null !== b2; ) null !== b2.key ? a2.set(b2.key, b2) : a2.set(b2.index, b2), b2 = b2.sibling;
        return a2;
      }
      function e(a2, b2) {
        a2 = Pg(a2, b2);
        a2.index = 0;
        a2.sibling = null;
        return a2;
      }
      function f(b2, c2, d2) {
        b2.index = d2;
        if (!a) return b2.flags |= 1048576, c2;
        d2 = b2.alternate;
        if (null !== d2) return d2 = d2.index, d2 < c2 ? (b2.flags |= 2, c2) : d2;
        b2.flags |= 2;
        return c2;
      }
      function g(b2) {
        a && null === b2.alternate && (b2.flags |= 2);
        return b2;
      }
      function h(a2, b2, c2, d2) {
        if (null === b2 || 6 !== b2.tag) return b2 = Qg(c2, a2.mode, d2), b2.return = a2, b2;
        b2 = e(b2, c2);
        b2.return = a2;
        return b2;
      }
      function k(a2, b2, c2, d2) {
        var f2 = c2.type;
        if (f2 === ya) return m(a2, b2, c2.props.children, d2, c2.key);
        if (null !== b2 && (b2.elementType === f2 || "object" === typeof f2 && null !== f2 && f2.$$typeof === Ha && Ng(f2) === b2.type)) return d2 = e(b2, c2.props), d2.ref = Lg(a2, b2, c2), d2.return = a2, d2;
        d2 = Rg(c2.type, c2.key, c2.props, null, a2.mode, d2);
        d2.ref = Lg(a2, b2, c2);
        d2.return = a2;
        return d2;
      }
      function l(a2, b2, c2, d2) {
        if (null === b2 || 4 !== b2.tag || b2.stateNode.containerInfo !== c2.containerInfo || b2.stateNode.implementation !== c2.implementation) return b2 = Sg(c2, a2.mode, d2), b2.return = a2, b2;
        b2 = e(b2, c2.children || []);
        b2.return = a2;
        return b2;
      }
      function m(a2, b2, c2, d2, f2) {
        if (null === b2 || 7 !== b2.tag) return b2 = Tg(c2, a2.mode, d2, f2), b2.return = a2, b2;
        b2 = e(b2, c2);
        b2.return = a2;
        return b2;
      }
      function q(a2, b2, c2) {
        if ("string" === typeof b2 && "" !== b2 || "number" === typeof b2) return b2 = Qg("" + b2, a2.mode, c2), b2.return = a2, b2;
        if ("object" === typeof b2 && null !== b2) {
          switch (b2.$$typeof) {
            case va:
              return c2 = Rg(b2.type, b2.key, b2.props, null, a2.mode, c2), c2.ref = Lg(a2, null, b2), c2.return = a2, c2;
            case wa:
              return b2 = Sg(b2, a2.mode, c2), b2.return = a2, b2;
            case Ha:
              var d2 = b2._init;
              return q(a2, d2(b2._payload), c2);
          }
          if (eb(b2) || Ka(b2)) return b2 = Tg(b2, a2.mode, c2, null), b2.return = a2, b2;
          Mg(a2, b2);
        }
        return null;
      }
      function r(a2, b2, c2, d2) {
        var e2 = null !== b2 ? b2.key : null;
        if ("string" === typeof c2 && "" !== c2 || "number" === typeof c2) return null !== e2 ? null : h(a2, b2, "" + c2, d2);
        if ("object" === typeof c2 && null !== c2) {
          switch (c2.$$typeof) {
            case va:
              return c2.key === e2 ? k(a2, b2, c2, d2) : null;
            case wa:
              return c2.key === e2 ? l(a2, b2, c2, d2) : null;
            case Ha:
              return e2 = c2._init, r(
                a2,
                b2,
                e2(c2._payload),
                d2
              );
          }
          if (eb(c2) || Ka(c2)) return null !== e2 ? null : m(a2, b2, c2, d2, null);
          Mg(a2, c2);
        }
        return null;
      }
      function y(a2, b2, c2, d2, e2) {
        if ("string" === typeof d2 && "" !== d2 || "number" === typeof d2) return a2 = a2.get(c2) || null, h(b2, a2, "" + d2, e2);
        if ("object" === typeof d2 && null !== d2) {
          switch (d2.$$typeof) {
            case va:
              return a2 = a2.get(null === d2.key ? c2 : d2.key) || null, k(b2, a2, d2, e2);
            case wa:
              return a2 = a2.get(null === d2.key ? c2 : d2.key) || null, l(b2, a2, d2, e2);
            case Ha:
              var f2 = d2._init;
              return y(a2, b2, c2, f2(d2._payload), e2);
          }
          if (eb(d2) || Ka(d2)) return a2 = a2.get(c2) || null, m(b2, a2, d2, e2, null);
          Mg(b2, d2);
        }
        return null;
      }
      function n(e2, g2, h2, k2) {
        for (var l2 = null, m2 = null, u = g2, w = g2 = 0, x = null; null !== u && w < h2.length; w++) {
          u.index > w ? (x = u, u = null) : x = u.sibling;
          var n2 = r(e2, u, h2[w], k2);
          if (null === n2) {
            null === u && (u = x);
            break;
          }
          a && u && null === n2.alternate && b(e2, u);
          g2 = f(n2, g2, w);
          null === m2 ? l2 = n2 : m2.sibling = n2;
          m2 = n2;
          u = x;
        }
        if (w === h2.length) return c(e2, u), I && tg(e2, w), l2;
        if (null === u) {
          for (; w < h2.length; w++) u = q(e2, h2[w], k2), null !== u && (g2 = f(u, g2, w), null === m2 ? l2 = u : m2.sibling = u, m2 = u);
          I && tg(e2, w);
          return l2;
        }
        for (u = d(e2, u); w < h2.length; w++) x = y(u, e2, w, h2[w], k2), null !== x && (a && null !== x.alternate && u.delete(null === x.key ? w : x.key), g2 = f(x, g2, w), null === m2 ? l2 = x : m2.sibling = x, m2 = x);
        a && u.forEach(function(a2) {
          return b(e2, a2);
        });
        I && tg(e2, w);
        return l2;
      }
      function t(e2, g2, h2, k2) {
        var l2 = Ka(h2);
        if ("function" !== typeof l2) throw Error(p(150));
        h2 = l2.call(h2);
        if (null == h2) throw Error(p(151));
        for (var u = l2 = null, m2 = g2, w = g2 = 0, x = null, n2 = h2.next(); null !== m2 && !n2.done; w++, n2 = h2.next()) {
          m2.index > w ? (x = m2, m2 = null) : x = m2.sibling;
          var t2 = r(e2, m2, n2.value, k2);
          if (null === t2) {
            null === m2 && (m2 = x);
            break;
          }
          a && m2 && null === t2.alternate && b(e2, m2);
          g2 = f(t2, g2, w);
          null === u ? l2 = t2 : u.sibling = t2;
          u = t2;
          m2 = x;
        }
        if (n2.done) return c(
          e2,
          m2
        ), I && tg(e2, w), l2;
        if (null === m2) {
          for (; !n2.done; w++, n2 = h2.next()) n2 = q(e2, n2.value, k2), null !== n2 && (g2 = f(n2, g2, w), null === u ? l2 = n2 : u.sibling = n2, u = n2);
          I && tg(e2, w);
          return l2;
        }
        for (m2 = d(e2, m2); !n2.done; w++, n2 = h2.next()) n2 = y(m2, e2, w, n2.value, k2), null !== n2 && (a && null !== n2.alternate && m2.delete(null === n2.key ? w : n2.key), g2 = f(n2, g2, w), null === u ? l2 = n2 : u.sibling = n2, u = n2);
        a && m2.forEach(function(a2) {
          return b(e2, a2);
        });
        I && tg(e2, w);
        return l2;
      }
      function J(a2, d2, f2, h2) {
        "object" === typeof f2 && null !== f2 && f2.type === ya && null === f2.key && (f2 = f2.props.children);
        if ("object" === typeof f2 && null !== f2) {
          switch (f2.$$typeof) {
            case va:
              a: {
                for (var k2 = f2.key, l2 = d2; null !== l2; ) {
                  if (l2.key === k2) {
                    k2 = f2.type;
                    if (k2 === ya) {
                      if (7 === l2.tag) {
                        c(a2, l2.sibling);
                        d2 = e(l2, f2.props.children);
                        d2.return = a2;
                        a2 = d2;
                        break a;
                      }
                    } else if (l2.elementType === k2 || "object" === typeof k2 && null !== k2 && k2.$$typeof === Ha && Ng(k2) === l2.type) {
                      c(a2, l2.sibling);
                      d2 = e(l2, f2.props);
                      d2.ref = Lg(a2, l2, f2);
                      d2.return = a2;
                      a2 = d2;
                      break a;
                    }
                    c(a2, l2);
                    break;
                  } else b(a2, l2);
                  l2 = l2.sibling;
                }
                f2.type === ya ? (d2 = Tg(f2.props.children, a2.mode, h2, f2.key), d2.return = a2, a2 = d2) : (h2 = Rg(f2.type, f2.key, f2.props, null, a2.mode, h2), h2.ref = Lg(a2, d2, f2), h2.return = a2, a2 = h2);
              }
              return g(a2);
            case wa:
              a: {
                for (l2 = f2.key; null !== d2; ) {
                  if (d2.key === l2) if (4 === d2.tag && d2.stateNode.containerInfo === f2.containerInfo && d2.stateNode.implementation === f2.implementation) {
                    c(a2, d2.sibling);
                    d2 = e(d2, f2.children || []);
                    d2.return = a2;
                    a2 = d2;
                    break a;
                  } else {
                    c(a2, d2);
                    break;
                  }
                  else b(a2, d2);
                  d2 = d2.sibling;
                }
                d2 = Sg(f2, a2.mode, h2);
                d2.return = a2;
                a2 = d2;
              }
              return g(a2);
            case Ha:
              return l2 = f2._init, J(a2, d2, l2(f2._payload), h2);
          }
          if (eb(f2)) return n(a2, d2, f2, h2);
          if (Ka(f2)) return t(a2, d2, f2, h2);
          Mg(a2, f2);
        }
        return "string" === typeof f2 && "" !== f2 || "number" === typeof f2 ? (f2 = "" + f2, null !== d2 && 6 === d2.tag ? (c(a2, d2.sibling), d2 = e(d2, f2), d2.return = a2, a2 = d2) : (c(a2, d2), d2 = Qg(f2, a2.mode, h2), d2.return = a2, a2 = d2), g(a2)) : c(a2, d2);
      }
      return J;
    }
    var Ug = Og(true);
    var Vg = Og(false);
    var Wg = Uf(null);
    var Xg = null;
    var Yg = null;
    var Zg = null;
    function $g() {
      Zg = Yg = Xg = null;
    }
    function ah(a) {
      var b = Wg.current;
      E(Wg);
      a._currentValue = b;
    }
    function bh(a, b, c) {
      for (; null !== a; ) {
        var d = a.alternate;
        (a.childLanes & b) !== b ? (a.childLanes |= b, null !== d && (d.childLanes |= b)) : null !== d && (d.childLanes & b) !== b && (d.childLanes |= b);
        if (a === c) break;
        a = a.return;
      }
    }
    function ch(a, b) {
      Xg = a;
      Zg = Yg = null;
      a = a.dependencies;
      null !== a && null !== a.firstContext && (0 !== (a.lanes & b) && (dh = true), a.firstContext = null);
    }
    function eh(a) {
      var b = a._currentValue;
      if (Zg !== a) if (a = { context: a, memoizedValue: b, next: null }, null === Yg) {
        if (null === Xg) throw Error(p(308));
        Yg = a;
        Xg.dependencies = { lanes: 0, firstContext: a };
      } else Yg = Yg.next = a;
      return b;
    }
    var fh = null;
    function gh(a) {
      null === fh ? fh = [a] : fh.push(a);
    }
    function hh(a, b, c, d) {
      var e = b.interleaved;
      null === e ? (c.next = c, gh(b)) : (c.next = e.next, e.next = c);
      b.interleaved = c;
      return ih(a, d);
    }
    function ih(a, b) {
      a.lanes |= b;
      var c = a.alternate;
      null !== c && (c.lanes |= b);
      c = a;
      for (a = a.return; null !== a; ) a.childLanes |= b, c = a.alternate, null !== c && (c.childLanes |= b), c = a, a = a.return;
      return 3 === c.tag ? c.stateNode : null;
    }
    var jh = false;
    function kh(a) {
      a.updateQueue = { baseState: a.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
    }
    function lh(a, b) {
      a = a.updateQueue;
      b.updateQueue === a && (b.updateQueue = { baseState: a.baseState, firstBaseUpdate: a.firstBaseUpdate, lastBaseUpdate: a.lastBaseUpdate, shared: a.shared, effects: a.effects });
    }
    function mh(a, b) {
      return { eventTime: a, lane: b, tag: 0, payload: null, callback: null, next: null };
    }
    function nh(a, b, c) {
      var d = a.updateQueue;
      if (null === d) return null;
      d = d.shared;
      if (0 !== (K & 2)) {
        var e = d.pending;
        null === e ? b.next = b : (b.next = e.next, e.next = b);
        d.pending = b;
        return ih(a, c);
      }
      e = d.interleaved;
      null === e ? (b.next = b, gh(d)) : (b.next = e.next, e.next = b);
      d.interleaved = b;
      return ih(a, c);
    }
    function oh(a, b, c) {
      b = b.updateQueue;
      if (null !== b && (b = b.shared, 0 !== (c & 4194240))) {
        var d = b.lanes;
        d &= a.pendingLanes;
        c |= d;
        b.lanes = c;
        Cc(a, c);
      }
    }
    function ph(a, b) {
      var c = a.updateQueue, d = a.alternate;
      if (null !== d && (d = d.updateQueue, c === d)) {
        var e = null, f = null;
        c = c.firstBaseUpdate;
        if (null !== c) {
          do {
            var g = { eventTime: c.eventTime, lane: c.lane, tag: c.tag, payload: c.payload, callback: c.callback, next: null };
            null === f ? e = f = g : f = f.next = g;
            c = c.next;
          } while (null !== c);
          null === f ? e = f = b : f = f.next = b;
        } else e = f = b;
        c = { baseState: d.baseState, firstBaseUpdate: e, lastBaseUpdate: f, shared: d.shared, effects: d.effects };
        a.updateQueue = c;
        return;
      }
      a = c.lastBaseUpdate;
      null === a ? c.firstBaseUpdate = b : a.next = b;
      c.lastBaseUpdate = b;
    }
    function qh(a, b, c, d) {
      var e = a.updateQueue;
      jh = false;
      var f = e.firstBaseUpdate, g = e.lastBaseUpdate, h = e.shared.pending;
      if (null !== h) {
        e.shared.pending = null;
        var k = h, l = k.next;
        k.next = null;
        null === g ? f = l : g.next = l;
        g = k;
        var m = a.alternate;
        null !== m && (m = m.updateQueue, h = m.lastBaseUpdate, h !== g && (null === h ? m.firstBaseUpdate = l : h.next = l, m.lastBaseUpdate = k));
      }
      if (null !== f) {
        var q = e.baseState;
        g = 0;
        m = l = k = null;
        h = f;
        do {
          var r = h.lane, y = h.eventTime;
          if ((d & r) === r) {
            null !== m && (m = m.next = {
              eventTime: y,
              lane: 0,
              tag: h.tag,
              payload: h.payload,
              callback: h.callback,
              next: null
            });
            a: {
              var n = a, t = h;
              r = b;
              y = c;
              switch (t.tag) {
                case 1:
                  n = t.payload;
                  if ("function" === typeof n) {
                    q = n.call(y, q, r);
                    break a;
                  }
                  q = n;
                  break a;
                case 3:
                  n.flags = n.flags & -65537 | 128;
                case 0:
                  n = t.payload;
                  r = "function" === typeof n ? n.call(y, q, r) : n;
                  if (null === r || void 0 === r) break a;
                  q = A({}, q, r);
                  break a;
                case 2:
                  jh = true;
              }
            }
            null !== h.callback && 0 !== h.lane && (a.flags |= 64, r = e.effects, null === r ? e.effects = [h] : r.push(h));
          } else y = { eventTime: y, lane: r, tag: h.tag, payload: h.payload, callback: h.callback, next: null }, null === m ? (l = m = y, k = q) : m = m.next = y, g |= r;
          h = h.next;
          if (null === h) if (h = e.shared.pending, null === h) break;
          else r = h, h = r.next, r.next = null, e.lastBaseUpdate = r, e.shared.pending = null;
        } while (1);
        null === m && (k = q);
        e.baseState = k;
        e.firstBaseUpdate = l;
        e.lastBaseUpdate = m;
        b = e.shared.interleaved;
        if (null !== b) {
          e = b;
          do
            g |= e.lane, e = e.next;
          while (e !== b);
        } else null === f && (e.shared.lanes = 0);
        rh |= g;
        a.lanes = g;
        a.memoizedState = q;
      }
    }
    function sh(a, b, c) {
      a = b.effects;
      b.effects = null;
      if (null !== a) for (b = 0; b < a.length; b++) {
        var d = a[b], e = d.callback;
        if (null !== e) {
          d.callback = null;
          d = c;
          if ("function" !== typeof e) throw Error(p(191, e));
          e.call(d);
        }
      }
    }
    var th = {};
    var uh = Uf(th);
    var vh = Uf(th);
    var wh = Uf(th);
    function xh(a) {
      if (a === th) throw Error(p(174));
      return a;
    }
    function yh(a, b) {
      G(wh, b);
      G(vh, a);
      G(uh, th);
      a = b.nodeType;
      switch (a) {
        case 9:
        case 11:
          b = (b = b.documentElement) ? b.namespaceURI : lb(null, "");
          break;
        default:
          a = 8 === a ? b.parentNode : b, b = a.namespaceURI || null, a = a.tagName, b = lb(b, a);
      }
      E(uh);
      G(uh, b);
    }
    function zh() {
      E(uh);
      E(vh);
      E(wh);
    }
    function Ah(a) {
      xh(wh.current);
      var b = xh(uh.current);
      var c = lb(b, a.type);
      b !== c && (G(vh, a), G(uh, c));
    }
    function Bh(a) {
      vh.current === a && (E(uh), E(vh));
    }
    var L = Uf(0);
    function Ch(a) {
      for (var b = a; null !== b; ) {
        if (13 === b.tag) {
          var c = b.memoizedState;
          if (null !== c && (c = c.dehydrated, null === c || "$?" === c.data || "$!" === c.data)) return b;
        } else if (19 === b.tag && void 0 !== b.memoizedProps.revealOrder) {
          if (0 !== (b.flags & 128)) return b;
        } else if (null !== b.child) {
          b.child.return = b;
          b = b.child;
          continue;
        }
        if (b === a) break;
        for (; null === b.sibling; ) {
          if (null === b.return || b.return === a) return null;
          b = b.return;
        }
        b.sibling.return = b.return;
        b = b.sibling;
      }
      return null;
    }
    var Dh = [];
    function Eh() {
      for (var a = 0; a < Dh.length; a++) Dh[a]._workInProgressVersionPrimary = null;
      Dh.length = 0;
    }
    var Fh = ua.ReactCurrentDispatcher;
    var Gh = ua.ReactCurrentBatchConfig;
    var Hh = 0;
    var M = null;
    var N = null;
    var O = null;
    var Ih = false;
    var Jh = false;
    var Kh = 0;
    var Lh = 0;
    function P() {
      throw Error(p(321));
    }
    function Mh(a, b) {
      if (null === b) return false;
      for (var c = 0; c < b.length && c < a.length; c++) if (!He(a[c], b[c])) return false;
      return true;
    }
    function Nh(a, b, c, d, e, f) {
      Hh = f;
      M = b;
      b.memoizedState = null;
      b.updateQueue = null;
      b.lanes = 0;
      Fh.current = null === a || null === a.memoizedState ? Oh : Ph;
      a = c(d, e);
      if (Jh) {
        f = 0;
        do {
          Jh = false;
          Kh = 0;
          if (25 <= f) throw Error(p(301));
          f += 1;
          O = N = null;
          b.updateQueue = null;
          Fh.current = Qh;
          a = c(d, e);
        } while (Jh);
      }
      Fh.current = Rh;
      b = null !== N && null !== N.next;
      Hh = 0;
      O = N = M = null;
      Ih = false;
      if (b) throw Error(p(300));
      return a;
    }
    function Sh() {
      var a = 0 !== Kh;
      Kh = 0;
      return a;
    }
    function Th() {
      var a = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
      null === O ? M.memoizedState = O = a : O = O.next = a;
      return O;
    }
    function Uh() {
      if (null === N) {
        var a = M.alternate;
        a = null !== a ? a.memoizedState : null;
      } else a = N.next;
      var b = null === O ? M.memoizedState : O.next;
      if (null !== b) O = b, N = a;
      else {
        if (null === a) throw Error(p(310));
        N = a;
        a = { memoizedState: N.memoizedState, baseState: N.baseState, baseQueue: N.baseQueue, queue: N.queue, next: null };
        null === O ? M.memoizedState = O = a : O = O.next = a;
      }
      return O;
    }
    function Vh(a, b) {
      return "function" === typeof b ? b(a) : b;
    }
    function Wh(a) {
      var b = Uh(), c = b.queue;
      if (null === c) throw Error(p(311));
      c.lastRenderedReducer = a;
      var d = N, e = d.baseQueue, f = c.pending;
      if (null !== f) {
        if (null !== e) {
          var g = e.next;
          e.next = f.next;
          f.next = g;
        }
        d.baseQueue = e = f;
        c.pending = null;
      }
      if (null !== e) {
        f = e.next;
        d = d.baseState;
        var h = g = null, k = null, l = f;
        do {
          var m = l.lane;
          if ((Hh & m) === m) null !== k && (k = k.next = { lane: 0, action: l.action, hasEagerState: l.hasEagerState, eagerState: l.eagerState, next: null }), d = l.hasEagerState ? l.eagerState : a(d, l.action);
          else {
            var q = {
              lane: m,
              action: l.action,
              hasEagerState: l.hasEagerState,
              eagerState: l.eagerState,
              next: null
            };
            null === k ? (h = k = q, g = d) : k = k.next = q;
            M.lanes |= m;
            rh |= m;
          }
          l = l.next;
        } while (null !== l && l !== f);
        null === k ? g = d : k.next = h;
        He(d, b.memoizedState) || (dh = true);
        b.memoizedState = d;
        b.baseState = g;
        b.baseQueue = k;
        c.lastRenderedState = d;
      }
      a = c.interleaved;
      if (null !== a) {
        e = a;
        do
          f = e.lane, M.lanes |= f, rh |= f, e = e.next;
        while (e !== a);
      } else null === e && (c.lanes = 0);
      return [b.memoizedState, c.dispatch];
    }
    function Xh(a) {
      var b = Uh(), c = b.queue;
      if (null === c) throw Error(p(311));
      c.lastRenderedReducer = a;
      var d = c.dispatch, e = c.pending, f = b.memoizedState;
      if (null !== e) {
        c.pending = null;
        var g = e = e.next;
        do
          f = a(f, g.action), g = g.next;
        while (g !== e);
        He(f, b.memoizedState) || (dh = true);
        b.memoizedState = f;
        null === b.baseQueue && (b.baseState = f);
        c.lastRenderedState = f;
      }
      return [f, d];
    }
    function Yh() {
    }
    function Zh(a, b) {
      var c = M, d = Uh(), e = b(), f = !He(d.memoizedState, e);
      f && (d.memoizedState = e, dh = true);
      d = d.queue;
      $h(ai.bind(null, c, d, a), [a]);
      if (d.getSnapshot !== b || f || null !== O && O.memoizedState.tag & 1) {
        c.flags |= 2048;
        bi(9, ci.bind(null, c, d, e, b), void 0, null);
        if (null === Q) throw Error(p(349));
        0 !== (Hh & 30) || di(c, b, e);
      }
      return e;
    }
    function di(a, b, c) {
      a.flags |= 16384;
      a = { getSnapshot: b, value: c };
      b = M.updateQueue;
      null === b ? (b = { lastEffect: null, stores: null }, M.updateQueue = b, b.stores = [a]) : (c = b.stores, null === c ? b.stores = [a] : c.push(a));
    }
    function ci(a, b, c, d) {
      b.value = c;
      b.getSnapshot = d;
      ei(b) && fi(a);
    }
    function ai(a, b, c) {
      return c(function() {
        ei(b) && fi(a);
      });
    }
    function ei(a) {
      var b = a.getSnapshot;
      a = a.value;
      try {
        var c = b();
        return !He(a, c);
      } catch (d) {
        return true;
      }
    }
    function fi(a) {
      var b = ih(a, 1);
      null !== b && gi(b, a, 1, -1);
    }
    function hi(a) {
      var b = Th();
      "function" === typeof a && (a = a());
      b.memoizedState = b.baseState = a;
      a = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Vh, lastRenderedState: a };
      b.queue = a;
      a = a.dispatch = ii.bind(null, M, a);
      return [b.memoizedState, a];
    }
    function bi(a, b, c, d) {
      a = { tag: a, create: b, destroy: c, deps: d, next: null };
      b = M.updateQueue;
      null === b ? (b = { lastEffect: null, stores: null }, M.updateQueue = b, b.lastEffect = a.next = a) : (c = b.lastEffect, null === c ? b.lastEffect = a.next = a : (d = c.next, c.next = a, a.next = d, b.lastEffect = a));
      return a;
    }
    function ji() {
      return Uh().memoizedState;
    }
    function ki(a, b, c, d) {
      var e = Th();
      M.flags |= a;
      e.memoizedState = bi(1 | b, c, void 0, void 0 === d ? null : d);
    }
    function li(a, b, c, d) {
      var e = Uh();
      d = void 0 === d ? null : d;
      var f = void 0;
      if (null !== N) {
        var g = N.memoizedState;
        f = g.destroy;
        if (null !== d && Mh(d, g.deps)) {
          e.memoizedState = bi(b, c, f, d);
          return;
        }
      }
      M.flags |= a;
      e.memoizedState = bi(1 | b, c, f, d);
    }
    function mi(a, b) {
      return ki(8390656, 8, a, b);
    }
    function $h(a, b) {
      return li(2048, 8, a, b);
    }
    function ni(a, b) {
      return li(4, 2, a, b);
    }
    function oi(a, b) {
      return li(4, 4, a, b);
    }
    function pi(a, b) {
      if ("function" === typeof b) return a = a(), b(a), function() {
        b(null);
      };
      if (null !== b && void 0 !== b) return a = a(), b.current = a, function() {
        b.current = null;
      };
    }
    function qi(a, b, c) {
      c = null !== c && void 0 !== c ? c.concat([a]) : null;
      return li(4, 4, pi.bind(null, b, a), c);
    }
    function ri() {
    }
    function si(a, b) {
      var c = Uh();
      b = void 0 === b ? null : b;
      var d = c.memoizedState;
      if (null !== d && null !== b && Mh(b, d[1])) return d[0];
      c.memoizedState = [a, b];
      return a;
    }
    function ti(a, b) {
      var c = Uh();
      b = void 0 === b ? null : b;
      var d = c.memoizedState;
      if (null !== d && null !== b && Mh(b, d[1])) return d[0];
      a = a();
      c.memoizedState = [a, b];
      return a;
    }
    function ui(a, b, c) {
      if (0 === (Hh & 21)) return a.baseState && (a.baseState = false, dh = true), a.memoizedState = c;
      He(c, b) || (c = yc(), M.lanes |= c, rh |= c, a.baseState = true);
      return b;
    }
    function vi(a, b) {
      var c = C;
      C = 0 !== c && 4 > c ? c : 4;
      a(true);
      var d = Gh.transition;
      Gh.transition = {};
      try {
        a(false), b();
      } finally {
        C = c, Gh.transition = d;
      }
    }
    function wi() {
      return Uh().memoizedState;
    }
    function xi(a, b, c) {
      var d = yi(a);
      c = { lane: d, action: c, hasEagerState: false, eagerState: null, next: null };
      if (zi(a)) Ai(b, c);
      else if (c = hh(a, b, c, d), null !== c) {
        var e = R();
        gi(c, a, d, e);
        Bi(c, b, d);
      }
    }
    function ii(a, b, c) {
      var d = yi(a), e = { lane: d, action: c, hasEagerState: false, eagerState: null, next: null };
      if (zi(a)) Ai(b, e);
      else {
        var f = a.alternate;
        if (0 === a.lanes && (null === f || 0 === f.lanes) && (f = b.lastRenderedReducer, null !== f)) try {
          var g = b.lastRenderedState, h = f(g, c);
          e.hasEagerState = true;
          e.eagerState = h;
          if (He(h, g)) {
            var k = b.interleaved;
            null === k ? (e.next = e, gh(b)) : (e.next = k.next, k.next = e);
            b.interleaved = e;
            return;
          }
        } catch (l) {
        } finally {
        }
        c = hh(a, b, e, d);
        null !== c && (e = R(), gi(c, a, d, e), Bi(c, b, d));
      }
    }
    function zi(a) {
      var b = a.alternate;
      return a === M || null !== b && b === M;
    }
    function Ai(a, b) {
      Jh = Ih = true;
      var c = a.pending;
      null === c ? b.next = b : (b.next = c.next, c.next = b);
      a.pending = b;
    }
    function Bi(a, b, c) {
      if (0 !== (c & 4194240)) {
        var d = b.lanes;
        d &= a.pendingLanes;
        c |= d;
        b.lanes = c;
        Cc(a, c);
      }
    }
    var Rh = { readContext: eh, useCallback: P, useContext: P, useEffect: P, useImperativeHandle: P, useInsertionEffect: P, useLayoutEffect: P, useMemo: P, useReducer: P, useRef: P, useState: P, useDebugValue: P, useDeferredValue: P, useTransition: P, useMutableSource: P, useSyncExternalStore: P, useId: P, unstable_isNewReconciler: false };
    var Oh = { readContext: eh, useCallback: function(a, b) {
      Th().memoizedState = [a, void 0 === b ? null : b];
      return a;
    }, useContext: eh, useEffect: mi, useImperativeHandle: function(a, b, c) {
      c = null !== c && void 0 !== c ? c.concat([a]) : null;
      return ki(
        4194308,
        4,
        pi.bind(null, b, a),
        c
      );
    }, useLayoutEffect: function(a, b) {
      return ki(4194308, 4, a, b);
    }, useInsertionEffect: function(a, b) {
      return ki(4, 2, a, b);
    }, useMemo: function(a, b) {
      var c = Th();
      b = void 0 === b ? null : b;
      a = a();
      c.memoizedState = [a, b];
      return a;
    }, useReducer: function(a, b, c) {
      var d = Th();
      b = void 0 !== c ? c(b) : b;
      d.memoizedState = d.baseState = b;
      a = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: a, lastRenderedState: b };
      d.queue = a;
      a = a.dispatch = xi.bind(null, M, a);
      return [d.memoizedState, a];
    }, useRef: function(a) {
      var b = Th();
      a = { current: a };
      return b.memoizedState = a;
    }, useState: hi, useDebugValue: ri, useDeferredValue: function(a) {
      return Th().memoizedState = a;
    }, useTransition: function() {
      var a = hi(false), b = a[0];
      a = vi.bind(null, a[1]);
      Th().memoizedState = a;
      return [b, a];
    }, useMutableSource: function() {
    }, useSyncExternalStore: function(a, b, c) {
      var d = M, e = Th();
      if (I) {
        if (void 0 === c) throw Error(p(407));
        c = c();
      } else {
        c = b();
        if (null === Q) throw Error(p(349));
        0 !== (Hh & 30) || di(d, b, c);
      }
      e.memoizedState = c;
      var f = { value: c, getSnapshot: b };
      e.queue = f;
      mi(ai.bind(
        null,
        d,
        f,
        a
      ), [a]);
      d.flags |= 2048;
      bi(9, ci.bind(null, d, f, c, b), void 0, null);
      return c;
    }, useId: function() {
      var a = Th(), b = Q.identifierPrefix;
      if (I) {
        var c = sg;
        var d = rg;
        c = (d & ~(1 << 32 - oc(d) - 1)).toString(32) + c;
        b = ":" + b + "R" + c;
        c = Kh++;
        0 < c && (b += "H" + c.toString(32));
        b += ":";
      } else c = Lh++, b = ":" + b + "r" + c.toString(32) + ":";
      return a.memoizedState = b;
    }, unstable_isNewReconciler: false };
    var Ph = {
      readContext: eh,
      useCallback: si,
      useContext: eh,
      useEffect: $h,
      useImperativeHandle: qi,
      useInsertionEffect: ni,
      useLayoutEffect: oi,
      useMemo: ti,
      useReducer: Wh,
      useRef: ji,
      useState: function() {
        return Wh(Vh);
      },
      useDebugValue: ri,
      useDeferredValue: function(a) {
        var b = Uh();
        return ui(b, N.memoizedState, a);
      },
      useTransition: function() {
        var a = Wh(Vh)[0], b = Uh().memoizedState;
        return [a, b];
      },
      useMutableSource: Yh,
      useSyncExternalStore: Zh,
      useId: wi,
      unstable_isNewReconciler: false
    };
    var Qh = { readContext: eh, useCallback: si, useContext: eh, useEffect: $h, useImperativeHandle: qi, useInsertionEffect: ni, useLayoutEffect: oi, useMemo: ti, useReducer: Xh, useRef: ji, useState: function() {
      return Xh(Vh);
    }, useDebugValue: ri, useDeferredValue: function(a) {
      var b = Uh();
      return null === N ? b.memoizedState = a : ui(b, N.memoizedState, a);
    }, useTransition: function() {
      var a = Xh(Vh)[0], b = Uh().memoizedState;
      return [a, b];
    }, useMutableSource: Yh, useSyncExternalStore: Zh, useId: wi, unstable_isNewReconciler: false };
    function Ci(a, b) {
      if (a && a.defaultProps) {
        b = A({}, b);
        a = a.defaultProps;
        for (var c in a) void 0 === b[c] && (b[c] = a[c]);
        return b;
      }
      return b;
    }
    function Di(a, b, c, d) {
      b = a.memoizedState;
      c = c(d, b);
      c = null === c || void 0 === c ? b : A({}, b, c);
      a.memoizedState = c;
      0 === a.lanes && (a.updateQueue.baseState = c);
    }
    var Ei = { isMounted: function(a) {
      return (a = a._reactInternals) ? Vb(a) === a : false;
    }, enqueueSetState: function(a, b, c) {
      a = a._reactInternals;
      var d = R(), e = yi(a), f = mh(d, e);
      f.payload = b;
      void 0 !== c && null !== c && (f.callback = c);
      b = nh(a, f, e);
      null !== b && (gi(b, a, e, d), oh(b, a, e));
    }, enqueueReplaceState: function(a, b, c) {
      a = a._reactInternals;
      var d = R(), e = yi(a), f = mh(d, e);
      f.tag = 1;
      f.payload = b;
      void 0 !== c && null !== c && (f.callback = c);
      b = nh(a, f, e);
      null !== b && (gi(b, a, e, d), oh(b, a, e));
    }, enqueueForceUpdate: function(a, b) {
      a = a._reactInternals;
      var c = R(), d = yi(a), e = mh(c, d);
      e.tag = 2;
      void 0 !== b && null !== b && (e.callback = b);
      b = nh(a, e, d);
      null !== b && (gi(b, a, d, c), oh(b, a, d));
    } };
    function Fi(a, b, c, d, e, f, g) {
      a = a.stateNode;
      return "function" === typeof a.shouldComponentUpdate ? a.shouldComponentUpdate(d, f, g) : b.prototype && b.prototype.isPureReactComponent ? !Ie(c, d) || !Ie(e, f) : true;
    }
    function Gi(a, b, c) {
      var d = false, e = Vf;
      var f = b.contextType;
      "object" === typeof f && null !== f ? f = eh(f) : (e = Zf(b) ? Xf : H.current, d = b.contextTypes, f = (d = null !== d && void 0 !== d) ? Yf(a, e) : Vf);
      b = new b(c, f);
      a.memoizedState = null !== b.state && void 0 !== b.state ? b.state : null;
      b.updater = Ei;
      a.stateNode = b;
      b._reactInternals = a;
      d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = e, a.__reactInternalMemoizedMaskedChildContext = f);
      return b;
    }
    function Hi(a, b, c, d) {
      a = b.state;
      "function" === typeof b.componentWillReceiveProps && b.componentWillReceiveProps(c, d);
      "function" === typeof b.UNSAFE_componentWillReceiveProps && b.UNSAFE_componentWillReceiveProps(c, d);
      b.state !== a && Ei.enqueueReplaceState(b, b.state, null);
    }
    function Ii(a, b, c, d) {
      var e = a.stateNode;
      e.props = c;
      e.state = a.memoizedState;
      e.refs = {};
      kh(a);
      var f = b.contextType;
      "object" === typeof f && null !== f ? e.context = eh(f) : (f = Zf(b) ? Xf : H.current, e.context = Yf(a, f));
      e.state = a.memoizedState;
      f = b.getDerivedStateFromProps;
      "function" === typeof f && (Di(a, b, f, c), e.state = a.memoizedState);
      "function" === typeof b.getDerivedStateFromProps || "function" === typeof e.getSnapshotBeforeUpdate || "function" !== typeof e.UNSAFE_componentWillMount && "function" !== typeof e.componentWillMount || (b = e.state, "function" === typeof e.componentWillMount && e.componentWillMount(), "function" === typeof e.UNSAFE_componentWillMount && e.UNSAFE_componentWillMount(), b !== e.state && Ei.enqueueReplaceState(e, e.state, null), qh(a, c, e, d), e.state = a.memoizedState);
      "function" === typeof e.componentDidMount && (a.flags |= 4194308);
    }
    function Ji(a, b) {
      try {
        var c = "", d = b;
        do
          c += Pa(d), d = d.return;
        while (d);
        var e = c;
      } catch (f) {
        e = "\nError generating stack: " + f.message + "\n" + f.stack;
      }
      return { value: a, source: b, stack: e, digest: null };
    }
    function Ki(a, b, c) {
      return { value: a, source: null, stack: null != c ? c : null, digest: null != b ? b : null };
    }
    function Li(a, b) {
      try {
        console.error(b.value);
      } catch (c) {
        setTimeout(function() {
          throw c;
        });
      }
    }
    var Mi = "function" === typeof WeakMap ? WeakMap : Map;
    function Ni(a, b, c) {
      c = mh(-1, c);
      c.tag = 3;
      c.payload = { element: null };
      var d = b.value;
      c.callback = function() {
        Oi || (Oi = true, Pi = d);
        Li(a, b);
      };
      return c;
    }
    function Qi(a, b, c) {
      c = mh(-1, c);
      c.tag = 3;
      var d = a.type.getDerivedStateFromError;
      if ("function" === typeof d) {
        var e = b.value;
        c.payload = function() {
          return d(e);
        };
        c.callback = function() {
          Li(a, b);
        };
      }
      var f = a.stateNode;
      null !== f && "function" === typeof f.componentDidCatch && (c.callback = function() {
        Li(a, b);
        "function" !== typeof d && (null === Ri ? Ri = /* @__PURE__ */ new Set([this]) : Ri.add(this));
        var c2 = b.stack;
        this.componentDidCatch(b.value, { componentStack: null !== c2 ? c2 : "" });
      });
      return c;
    }
    function Si(a, b, c) {
      var d = a.pingCache;
      if (null === d) {
        d = a.pingCache = new Mi();
        var e = /* @__PURE__ */ new Set();
        d.set(b, e);
      } else e = d.get(b), void 0 === e && (e = /* @__PURE__ */ new Set(), d.set(b, e));
      e.has(c) || (e.add(c), a = Ti.bind(null, a, b, c), b.then(a, a));
    }
    function Ui(a) {
      do {
        var b;
        if (b = 13 === a.tag) b = a.memoizedState, b = null !== b ? null !== b.dehydrated ? true : false : true;
        if (b) return a;
        a = a.return;
      } while (null !== a);
      return null;
    }
    function Vi(a, b, c, d, e) {
      if (0 === (a.mode & 1)) return a === b ? a.flags |= 65536 : (a.flags |= 128, c.flags |= 131072, c.flags &= -52805, 1 === c.tag && (null === c.alternate ? c.tag = 17 : (b = mh(-1, 1), b.tag = 2, nh(c, b, 1))), c.lanes |= 1), a;
      a.flags |= 65536;
      a.lanes = e;
      return a;
    }
    var Wi = ua.ReactCurrentOwner;
    var dh = false;
    function Xi(a, b, c, d) {
      b.child = null === a ? Vg(b, null, c, d) : Ug(b, a.child, c, d);
    }
    function Yi(a, b, c, d, e) {
      c = c.render;
      var f = b.ref;
      ch(b, e);
      d = Nh(a, b, c, d, f, e);
      c = Sh();
      if (null !== a && !dh) return b.updateQueue = a.updateQueue, b.flags &= -2053, a.lanes &= ~e, Zi(a, b, e);
      I && c && vg(b);
      b.flags |= 1;
      Xi(a, b, d, e);
      return b.child;
    }
    function $i(a, b, c, d, e) {
      if (null === a) {
        var f = c.type;
        if ("function" === typeof f && !aj(f) && void 0 === f.defaultProps && null === c.compare && void 0 === c.defaultProps) return b.tag = 15, b.type = f, bj(a, b, f, d, e);
        a = Rg(c.type, null, d, b, b.mode, e);
        a.ref = b.ref;
        a.return = b;
        return b.child = a;
      }
      f = a.child;
      if (0 === (a.lanes & e)) {
        var g = f.memoizedProps;
        c = c.compare;
        c = null !== c ? c : Ie;
        if (c(g, d) && a.ref === b.ref) return Zi(a, b, e);
      }
      b.flags |= 1;
      a = Pg(f, d);
      a.ref = b.ref;
      a.return = b;
      return b.child = a;
    }
    function bj(a, b, c, d, e) {
      if (null !== a) {
        var f = a.memoizedProps;
        if (Ie(f, d) && a.ref === b.ref) if (dh = false, b.pendingProps = d = f, 0 !== (a.lanes & e)) 0 !== (a.flags & 131072) && (dh = true);
        else return b.lanes = a.lanes, Zi(a, b, e);
      }
      return cj(a, b, c, d, e);
    }
    function dj(a, b, c) {
      var d = b.pendingProps, e = d.children, f = null !== a ? a.memoizedState : null;
      if ("hidden" === d.mode) if (0 === (b.mode & 1)) b.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, G(ej, fj), fj |= c;
      else {
        if (0 === (c & 1073741824)) return a = null !== f ? f.baseLanes | c : c, b.lanes = b.childLanes = 1073741824, b.memoizedState = { baseLanes: a, cachePool: null, transitions: null }, b.updateQueue = null, G(ej, fj), fj |= a, null;
        b.memoizedState = { baseLanes: 0, cachePool: null, transitions: null };
        d = null !== f ? f.baseLanes : c;
        G(ej, fj);
        fj |= d;
      }
      else null !== f ? (d = f.baseLanes | c, b.memoizedState = null) : d = c, G(ej, fj), fj |= d;
      Xi(a, b, e, c);
      return b.child;
    }
    function gj(a, b) {
      var c = b.ref;
      if (null === a && null !== c || null !== a && a.ref !== c) b.flags |= 512, b.flags |= 2097152;
    }
    function cj(a, b, c, d, e) {
      var f = Zf(c) ? Xf : H.current;
      f = Yf(b, f);
      ch(b, e);
      c = Nh(a, b, c, d, f, e);
      d = Sh();
      if (null !== a && !dh) return b.updateQueue = a.updateQueue, b.flags &= -2053, a.lanes &= ~e, Zi(a, b, e);
      I && d && vg(b);
      b.flags |= 1;
      Xi(a, b, c, e);
      return b.child;
    }
    function hj(a, b, c, d, e) {
      if (Zf(c)) {
        var f = true;
        cg(b);
      } else f = false;
      ch(b, e);
      if (null === b.stateNode) ij(a, b), Gi(b, c, d), Ii(b, c, d, e), d = true;
      else if (null === a) {
        var g = b.stateNode, h = b.memoizedProps;
        g.props = h;
        var k = g.context, l = c.contextType;
        "object" === typeof l && null !== l ? l = eh(l) : (l = Zf(c) ? Xf : H.current, l = Yf(b, l));
        var m = c.getDerivedStateFromProps, q = "function" === typeof m || "function" === typeof g.getSnapshotBeforeUpdate;
        q || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h !== d || k !== l) && Hi(b, g, d, l);
        jh = false;
        var r = b.memoizedState;
        g.state = r;
        qh(b, d, g, e);
        k = b.memoizedState;
        h !== d || r !== k || Wf.current || jh ? ("function" === typeof m && (Di(b, c, m, d), k = b.memoizedState), (h = jh || Fi(b, c, h, d, r, k, l)) ? (q || "function" !== typeof g.UNSAFE_componentWillMount && "function" !== typeof g.componentWillMount || ("function" === typeof g.componentWillMount && g.componentWillMount(), "function" === typeof g.UNSAFE_componentWillMount && g.UNSAFE_componentWillMount()), "function" === typeof g.componentDidMount && (b.flags |= 4194308)) : ("function" === typeof g.componentDidMount && (b.flags |= 4194308), b.memoizedProps = d, b.memoizedState = k), g.props = d, g.state = k, g.context = l, d = h) : ("function" === typeof g.componentDidMount && (b.flags |= 4194308), d = false);
      } else {
        g = b.stateNode;
        lh(a, b);
        h = b.memoizedProps;
        l = b.type === b.elementType ? h : Ci(b.type, h);
        g.props = l;
        q = b.pendingProps;
        r = g.context;
        k = c.contextType;
        "object" === typeof k && null !== k ? k = eh(k) : (k = Zf(c) ? Xf : H.current, k = Yf(b, k));
        var y = c.getDerivedStateFromProps;
        (m = "function" === typeof y || "function" === typeof g.getSnapshotBeforeUpdate) || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h !== q || r !== k) && Hi(b, g, d, k);
        jh = false;
        r = b.memoizedState;
        g.state = r;
        qh(b, d, g, e);
        var n = b.memoizedState;
        h !== q || r !== n || Wf.current || jh ? ("function" === typeof y && (Di(b, c, y, d), n = b.memoizedState), (l = jh || Fi(b, c, l, d, r, n, k) || false) ? (m || "function" !== typeof g.UNSAFE_componentWillUpdate && "function" !== typeof g.componentWillUpdate || ("function" === typeof g.componentWillUpdate && g.componentWillUpdate(d, n, k), "function" === typeof g.UNSAFE_componentWillUpdate && g.UNSAFE_componentWillUpdate(d, n, k)), "function" === typeof g.componentDidUpdate && (b.flags |= 4), "function" === typeof g.getSnapshotBeforeUpdate && (b.flags |= 1024)) : ("function" !== typeof g.componentDidUpdate || h === a.memoizedProps && r === a.memoizedState || (b.flags |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h === a.memoizedProps && r === a.memoizedState || (b.flags |= 1024), b.memoizedProps = d, b.memoizedState = n), g.props = d, g.state = n, g.context = k, d = l) : ("function" !== typeof g.componentDidUpdate || h === a.memoizedProps && r === a.memoizedState || (b.flags |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h === a.memoizedProps && r === a.memoizedState || (b.flags |= 1024), d = false);
      }
      return jj(a, b, c, d, f, e);
    }
    function jj(a, b, c, d, e, f) {
      gj(a, b);
      var g = 0 !== (b.flags & 128);
      if (!d && !g) return e && dg(b, c, false), Zi(a, b, f);
      d = b.stateNode;
      Wi.current = b;
      var h = g && "function" !== typeof c.getDerivedStateFromError ? null : d.render();
      b.flags |= 1;
      null !== a && g ? (b.child = Ug(b, a.child, null, f), b.child = Ug(b, null, h, f)) : Xi(a, b, h, f);
      b.memoizedState = d.state;
      e && dg(b, c, true);
      return b.child;
    }
    function kj(a) {
      var b = a.stateNode;
      b.pendingContext ? ag(a, b.pendingContext, b.pendingContext !== b.context) : b.context && ag(a, b.context, false);
      yh(a, b.containerInfo);
    }
    function lj(a, b, c, d, e) {
      Ig();
      Jg(e);
      b.flags |= 256;
      Xi(a, b, c, d);
      return b.child;
    }
    var mj = { dehydrated: null, treeContext: null, retryLane: 0 };
    function nj(a) {
      return { baseLanes: a, cachePool: null, transitions: null };
    }
    function oj(a, b, c) {
      var d = b.pendingProps, e = L.current, f = false, g = 0 !== (b.flags & 128), h;
      (h = g) || (h = null !== a && null === a.memoizedState ? false : 0 !== (e & 2));
      if (h) f = true, b.flags &= -129;
      else if (null === a || null !== a.memoizedState) e |= 1;
      G(L, e & 1);
      if (null === a) {
        Eg(b);
        a = b.memoizedState;
        if (null !== a && (a = a.dehydrated, null !== a)) return 0 === (b.mode & 1) ? b.lanes = 1 : "$!" === a.data ? b.lanes = 8 : b.lanes = 1073741824, null;
        g = d.children;
        a = d.fallback;
        return f ? (d = b.mode, f = b.child, g = { mode: "hidden", children: g }, 0 === (d & 1) && null !== f ? (f.childLanes = 0, f.pendingProps = g) : f = pj(g, d, 0, null), a = Tg(a, d, c, null), f.return = b, a.return = b, f.sibling = a, b.child = f, b.child.memoizedState = nj(c), b.memoizedState = mj, a) : qj(b, g);
      }
      e = a.memoizedState;
      if (null !== e && (h = e.dehydrated, null !== h)) return rj(a, b, g, d, h, e, c);
      if (f) {
        f = d.fallback;
        g = b.mode;
        e = a.child;
        h = e.sibling;
        var k = { mode: "hidden", children: d.children };
        0 === (g & 1) && b.child !== e ? (d = b.child, d.childLanes = 0, d.pendingProps = k, b.deletions = null) : (d = Pg(e, k), d.subtreeFlags = e.subtreeFlags & 14680064);
        null !== h ? f = Pg(h, f) : (f = Tg(f, g, c, null), f.flags |= 2);
        f.return = b;
        d.return = b;
        d.sibling = f;
        b.child = d;
        d = f;
        f = b.child;
        g = a.child.memoizedState;
        g = null === g ? nj(c) : { baseLanes: g.baseLanes | c, cachePool: null, transitions: g.transitions };
        f.memoizedState = g;
        f.childLanes = a.childLanes & ~c;
        b.memoizedState = mj;
        return d;
      }
      f = a.child;
      a = f.sibling;
      d = Pg(f, { mode: "visible", children: d.children });
      0 === (b.mode & 1) && (d.lanes = c);
      d.return = b;
      d.sibling = null;
      null !== a && (c = b.deletions, null === c ? (b.deletions = [a], b.flags |= 16) : c.push(a));
      b.child = d;
      b.memoizedState = null;
      return d;
    }
    function qj(a, b) {
      b = pj({ mode: "visible", children: b }, a.mode, 0, null);
      b.return = a;
      return a.child = b;
    }
    function sj(a, b, c, d) {
      null !== d && Jg(d);
      Ug(b, a.child, null, c);
      a = qj(b, b.pendingProps.children);
      a.flags |= 2;
      b.memoizedState = null;
      return a;
    }
    function rj(a, b, c, d, e, f, g) {
      if (c) {
        if (b.flags & 256) return b.flags &= -257, d = Ki(Error(p(422))), sj(a, b, g, d);
        if (null !== b.memoizedState) return b.child = a.child, b.flags |= 128, null;
        f = d.fallback;
        e = b.mode;
        d = pj({ mode: "visible", children: d.children }, e, 0, null);
        f = Tg(f, e, g, null);
        f.flags |= 2;
        d.return = b;
        f.return = b;
        d.sibling = f;
        b.child = d;
        0 !== (b.mode & 1) && Ug(b, a.child, null, g);
        b.child.memoizedState = nj(g);
        b.memoizedState = mj;
        return f;
      }
      if (0 === (b.mode & 1)) return sj(a, b, g, null);
      if ("$!" === e.data) {
        d = e.nextSibling && e.nextSibling.dataset;
        if (d) var h = d.dgst;
        d = h;
        f = Error(p(419));
        d = Ki(f, d, void 0);
        return sj(a, b, g, d);
      }
      h = 0 !== (g & a.childLanes);
      if (dh || h) {
        d = Q;
        if (null !== d) {
          switch (g & -g) {
            case 4:
              e = 2;
              break;
            case 16:
              e = 8;
              break;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
              e = 32;
              break;
            case 536870912:
              e = 268435456;
              break;
            default:
              e = 0;
          }
          e = 0 !== (e & (d.suspendedLanes | g)) ? 0 : e;
          0 !== e && e !== f.retryLane && (f.retryLane = e, ih(a, e), gi(d, a, e, -1));
        }
        tj();
        d = Ki(Error(p(421)));
        return sj(a, b, g, d);
      }
      if ("$?" === e.data) return b.flags |= 128, b.child = a.child, b = uj.bind(null, a), e._reactRetry = b, null;
      a = f.treeContext;
      yg = Lf(e.nextSibling);
      xg = b;
      I = true;
      zg = null;
      null !== a && (og[pg++] = rg, og[pg++] = sg, og[pg++] = qg, rg = a.id, sg = a.overflow, qg = b);
      b = qj(b, d.children);
      b.flags |= 4096;
      return b;
    }
    function vj(a, b, c) {
      a.lanes |= b;
      var d = a.alternate;
      null !== d && (d.lanes |= b);
      bh(a.return, b, c);
    }
    function wj(a, b, c, d, e) {
      var f = a.memoizedState;
      null === f ? a.memoizedState = { isBackwards: b, rendering: null, renderingStartTime: 0, last: d, tail: c, tailMode: e } : (f.isBackwards = b, f.rendering = null, f.renderingStartTime = 0, f.last = d, f.tail = c, f.tailMode = e);
    }
    function xj(a, b, c) {
      var d = b.pendingProps, e = d.revealOrder, f = d.tail;
      Xi(a, b, d.children, c);
      d = L.current;
      if (0 !== (d & 2)) d = d & 1 | 2, b.flags |= 128;
      else {
        if (null !== a && 0 !== (a.flags & 128)) a: for (a = b.child; null !== a; ) {
          if (13 === a.tag) null !== a.memoizedState && vj(a, c, b);
          else if (19 === a.tag) vj(a, c, b);
          else if (null !== a.child) {
            a.child.return = a;
            a = a.child;
            continue;
          }
          if (a === b) break a;
          for (; null === a.sibling; ) {
            if (null === a.return || a.return === b) break a;
            a = a.return;
          }
          a.sibling.return = a.return;
          a = a.sibling;
        }
        d &= 1;
      }
      G(L, d);
      if (0 === (b.mode & 1)) b.memoizedState = null;
      else switch (e) {
        case "forwards":
          c = b.child;
          for (e = null; null !== c; ) a = c.alternate, null !== a && null === Ch(a) && (e = c), c = c.sibling;
          c = e;
          null === c ? (e = b.child, b.child = null) : (e = c.sibling, c.sibling = null);
          wj(b, false, e, c, f);
          break;
        case "backwards":
          c = null;
          e = b.child;
          for (b.child = null; null !== e; ) {
            a = e.alternate;
            if (null !== a && null === Ch(a)) {
              b.child = e;
              break;
            }
            a = e.sibling;
            e.sibling = c;
            c = e;
            e = a;
          }
          wj(b, true, c, null, f);
          break;
        case "together":
          wj(b, false, null, null, void 0);
          break;
        default:
          b.memoizedState = null;
      }
      return b.child;
    }
    function ij(a, b) {
      0 === (b.mode & 1) && null !== a && (a.alternate = null, b.alternate = null, b.flags |= 2);
    }
    function Zi(a, b, c) {
      null !== a && (b.dependencies = a.dependencies);
      rh |= b.lanes;
      if (0 === (c & b.childLanes)) return null;
      if (null !== a && b.child !== a.child) throw Error(p(153));
      if (null !== b.child) {
        a = b.child;
        c = Pg(a, a.pendingProps);
        b.child = c;
        for (c.return = b; null !== a.sibling; ) a = a.sibling, c = c.sibling = Pg(a, a.pendingProps), c.return = b;
        c.sibling = null;
      }
      return b.child;
    }
    function yj(a, b, c) {
      switch (b.tag) {
        case 3:
          kj(b);
          Ig();
          break;
        case 5:
          Ah(b);
          break;
        case 1:
          Zf(b.type) && cg(b);
          break;
        case 4:
          yh(b, b.stateNode.containerInfo);
          break;
        case 10:
          var d = b.type._context, e = b.memoizedProps.value;
          G(Wg, d._currentValue);
          d._currentValue = e;
          break;
        case 13:
          d = b.memoizedState;
          if (null !== d) {
            if (null !== d.dehydrated) return G(L, L.current & 1), b.flags |= 128, null;
            if (0 !== (c & b.child.childLanes)) return oj(a, b, c);
            G(L, L.current & 1);
            a = Zi(a, b, c);
            return null !== a ? a.sibling : null;
          }
          G(L, L.current & 1);
          break;
        case 19:
          d = 0 !== (c & b.childLanes);
          if (0 !== (a.flags & 128)) {
            if (d) return xj(a, b, c);
            b.flags |= 128;
          }
          e = b.memoizedState;
          null !== e && (e.rendering = null, e.tail = null, e.lastEffect = null);
          G(L, L.current);
          if (d) break;
          else return null;
        case 22:
        case 23:
          return b.lanes = 0, dj(a, b, c);
      }
      return Zi(a, b, c);
    }
    var zj;
    var Aj;
    var Bj;
    var Cj;
    zj = function(a, b) {
      for (var c = b.child; null !== c; ) {
        if (5 === c.tag || 6 === c.tag) a.appendChild(c.stateNode);
        else if (4 !== c.tag && null !== c.child) {
          c.child.return = c;
          c = c.child;
          continue;
        }
        if (c === b) break;
        for (; null === c.sibling; ) {
          if (null === c.return || c.return === b) return;
          c = c.return;
        }
        c.sibling.return = c.return;
        c = c.sibling;
      }
    };
    Aj = function() {
    };
    Bj = function(a, b, c, d) {
      var e = a.memoizedProps;
      if (e !== d) {
        a = b.stateNode;
        xh(uh.current);
        var f = null;
        switch (c) {
          case "input":
            e = Ya(a, e);
            d = Ya(a, d);
            f = [];
            break;
          case "select":
            e = A({}, e, { value: void 0 });
            d = A({}, d, { value: void 0 });
            f = [];
            break;
          case "textarea":
            e = gb(a, e);
            d = gb(a, d);
            f = [];
            break;
          default:
            "function" !== typeof e.onClick && "function" === typeof d.onClick && (a.onclick = Bf);
        }
        ub(c, d);
        var g;
        c = null;
        for (l in e) if (!d.hasOwnProperty(l) && e.hasOwnProperty(l) && null != e[l]) if ("style" === l) {
          var h = e[l];
          for (g in h) h.hasOwnProperty(g) && (c || (c = {}), c[g] = "");
        } else "dangerouslySetInnerHTML" !== l && "children" !== l && "suppressContentEditableWarning" !== l && "suppressHydrationWarning" !== l && "autoFocus" !== l && (ea.hasOwnProperty(l) ? f || (f = []) : (f = f || []).push(l, null));
        for (l in d) {
          var k = d[l];
          h = null != e ? e[l] : void 0;
          if (d.hasOwnProperty(l) && k !== h && (null != k || null != h)) if ("style" === l) if (h) {
            for (g in h) !h.hasOwnProperty(g) || k && k.hasOwnProperty(g) || (c || (c = {}), c[g] = "");
            for (g in k) k.hasOwnProperty(g) && h[g] !== k[g] && (c || (c = {}), c[g] = k[g]);
          } else c || (f || (f = []), f.push(
            l,
            c
          )), c = k;
          else "dangerouslySetInnerHTML" === l ? (k = k ? k.__html : void 0, h = h ? h.__html : void 0, null != k && h !== k && (f = f || []).push(l, k)) : "children" === l ? "string" !== typeof k && "number" !== typeof k || (f = f || []).push(l, "" + k) : "suppressContentEditableWarning" !== l && "suppressHydrationWarning" !== l && (ea.hasOwnProperty(l) ? (null != k && "onScroll" === l && D("scroll", a), f || h === k || (f = [])) : (f = f || []).push(l, k));
        }
        c && (f = f || []).push("style", c);
        var l = f;
        if (b.updateQueue = l) b.flags |= 4;
      }
    };
    Cj = function(a, b, c, d) {
      c !== d && (b.flags |= 4);
    };
    function Dj(a, b) {
      if (!I) switch (a.tailMode) {
        case "hidden":
          b = a.tail;
          for (var c = null; null !== b; ) null !== b.alternate && (c = b), b = b.sibling;
          null === c ? a.tail = null : c.sibling = null;
          break;
        case "collapsed":
          c = a.tail;
          for (var d = null; null !== c; ) null !== c.alternate && (d = c), c = c.sibling;
          null === d ? b || null === a.tail ? a.tail = null : a.tail.sibling = null : d.sibling = null;
      }
    }
    function S(a) {
      var b = null !== a.alternate && a.alternate.child === a.child, c = 0, d = 0;
      if (b) for (var e = a.child; null !== e; ) c |= e.lanes | e.childLanes, d |= e.subtreeFlags & 14680064, d |= e.flags & 14680064, e.return = a, e = e.sibling;
      else for (e = a.child; null !== e; ) c |= e.lanes | e.childLanes, d |= e.subtreeFlags, d |= e.flags, e.return = a, e = e.sibling;
      a.subtreeFlags |= d;
      a.childLanes = c;
      return b;
    }
    function Ej(a, b, c) {
      var d = b.pendingProps;
      wg(b);
      switch (b.tag) {
        case 2:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
          return S(b), null;
        case 1:
          return Zf(b.type) && $f(), S(b), null;
        case 3:
          d = b.stateNode;
          zh();
          E(Wf);
          E(H);
          Eh();
          d.pendingContext && (d.context = d.pendingContext, d.pendingContext = null);
          if (null === a || null === a.child) Gg(b) ? b.flags |= 4 : null === a || a.memoizedState.isDehydrated && 0 === (b.flags & 256) || (b.flags |= 1024, null !== zg && (Fj(zg), zg = null));
          Aj(a, b);
          S(b);
          return null;
        case 5:
          Bh(b);
          var e = xh(wh.current);
          c = b.type;
          if (null !== a && null != b.stateNode) Bj(a, b, c, d, e), a.ref !== b.ref && (b.flags |= 512, b.flags |= 2097152);
          else {
            if (!d) {
              if (null === b.stateNode) throw Error(p(166));
              S(b);
              return null;
            }
            a = xh(uh.current);
            if (Gg(b)) {
              d = b.stateNode;
              c = b.type;
              var f = b.memoizedProps;
              d[Of] = b;
              d[Pf] = f;
              a = 0 !== (b.mode & 1);
              switch (c) {
                case "dialog":
                  D("cancel", d);
                  D("close", d);
                  break;
                case "iframe":
                case "object":
                case "embed":
                  D("load", d);
                  break;
                case "video":
                case "audio":
                  for (e = 0; e < lf.length; e++) D(lf[e], d);
                  break;
                case "source":
                  D("error", d);
                  break;
                case "img":
                case "image":
                case "link":
                  D(
                    "error",
                    d
                  );
                  D("load", d);
                  break;
                case "details":
                  D("toggle", d);
                  break;
                case "input":
                  Za(d, f);
                  D("invalid", d);
                  break;
                case "select":
                  d._wrapperState = { wasMultiple: !!f.multiple };
                  D("invalid", d);
                  break;
                case "textarea":
                  hb(d, f), D("invalid", d);
              }
              ub(c, f);
              e = null;
              for (var g in f) if (f.hasOwnProperty(g)) {
                var h = f[g];
                "children" === g ? "string" === typeof h ? d.textContent !== h && (true !== f.suppressHydrationWarning && Af(d.textContent, h, a), e = ["children", h]) : "number" === typeof h && d.textContent !== "" + h && (true !== f.suppressHydrationWarning && Af(
                  d.textContent,
                  h,
                  a
                ), e = ["children", "" + h]) : ea.hasOwnProperty(g) && null != h && "onScroll" === g && D("scroll", d);
              }
              switch (c) {
                case "input":
                  Va(d);
                  db(d, f, true);
                  break;
                case "textarea":
                  Va(d);
                  jb(d);
                  break;
                case "select":
                case "option":
                  break;
                default:
                  "function" === typeof f.onClick && (d.onclick = Bf);
              }
              d = e;
              b.updateQueue = d;
              null !== d && (b.flags |= 4);
            } else {
              g = 9 === e.nodeType ? e : e.ownerDocument;
              "http://www.w3.org/1999/xhtml" === a && (a = kb(c));
              "http://www.w3.org/1999/xhtml" === a ? "script" === c ? (a = g.createElement("div"), a.innerHTML = "<script><\/script>", a = a.removeChild(a.firstChild)) : "string" === typeof d.is ? a = g.createElement(c, { is: d.is }) : (a = g.createElement(c), "select" === c && (g = a, d.multiple ? g.multiple = true : d.size && (g.size = d.size))) : a = g.createElementNS(a, c);
              a[Of] = b;
              a[Pf] = d;
              zj(a, b, false, false);
              b.stateNode = a;
              a: {
                g = vb(c, d);
                switch (c) {
                  case "dialog":
                    D("cancel", a);
                    D("close", a);
                    e = d;
                    break;
                  case "iframe":
                  case "object":
                  case "embed":
                    D("load", a);
                    e = d;
                    break;
                  case "video":
                  case "audio":
                    for (e = 0; e < lf.length; e++) D(lf[e], a);
                    e = d;
                    break;
                  case "source":
                    D("error", a);
                    e = d;
                    break;
                  case "img":
                  case "image":
                  case "link":
                    D(
                      "error",
                      a
                    );
                    D("load", a);
                    e = d;
                    break;
                  case "details":
                    D("toggle", a);
                    e = d;
                    break;
                  case "input":
                    Za(a, d);
                    e = Ya(a, d);
                    D("invalid", a);
                    break;
                  case "option":
                    e = d;
                    break;
                  case "select":
                    a._wrapperState = { wasMultiple: !!d.multiple };
                    e = A({}, d, { value: void 0 });
                    D("invalid", a);
                    break;
                  case "textarea":
                    hb(a, d);
                    e = gb(a, d);
                    D("invalid", a);
                    break;
                  default:
                    e = d;
                }
                ub(c, e);
                h = e;
                for (f in h) if (h.hasOwnProperty(f)) {
                  var k = h[f];
                  "style" === f ? sb(a, k) : "dangerouslySetInnerHTML" === f ? (k = k ? k.__html : void 0, null != k && nb(a, k)) : "children" === f ? "string" === typeof k ? ("textarea" !== c || "" !== k) && ob(a, k) : "number" === typeof k && ob(a, "" + k) : "suppressContentEditableWarning" !== f && "suppressHydrationWarning" !== f && "autoFocus" !== f && (ea.hasOwnProperty(f) ? null != k && "onScroll" === f && D("scroll", a) : null != k && ta(a, f, k, g));
                }
                switch (c) {
                  case "input":
                    Va(a);
                    db(a, d, false);
                    break;
                  case "textarea":
                    Va(a);
                    jb(a);
                    break;
                  case "option":
                    null != d.value && a.setAttribute("value", "" + Sa(d.value));
                    break;
                  case "select":
                    a.multiple = !!d.multiple;
                    f = d.value;
                    null != f ? fb(a, !!d.multiple, f, false) : null != d.defaultValue && fb(
                      a,
                      !!d.multiple,
                      d.defaultValue,
                      true
                    );
                    break;
                  default:
                    "function" === typeof e.onClick && (a.onclick = Bf);
                }
                switch (c) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    d = !!d.autoFocus;
                    break a;
                  case "img":
                    d = true;
                    break a;
                  default:
                    d = false;
                }
              }
              d && (b.flags |= 4);
            }
            null !== b.ref && (b.flags |= 512, b.flags |= 2097152);
          }
          S(b);
          return null;
        case 6:
          if (a && null != b.stateNode) Cj(a, b, a.memoizedProps, d);
          else {
            if ("string" !== typeof d && null === b.stateNode) throw Error(p(166));
            c = xh(wh.current);
            xh(uh.current);
            if (Gg(b)) {
              d = b.stateNode;
              c = b.memoizedProps;
              d[Of] = b;
              if (f = d.nodeValue !== c) {
                if (a = xg, null !== a) switch (a.tag) {
                  case 3:
                    Af(d.nodeValue, c, 0 !== (a.mode & 1));
                    break;
                  case 5:
                    true !== a.memoizedProps.suppressHydrationWarning && Af(d.nodeValue, c, 0 !== (a.mode & 1));
                }
              }
              f && (b.flags |= 4);
            } else d = (9 === c.nodeType ? c : c.ownerDocument).createTextNode(d), d[Of] = b, b.stateNode = d;
          }
          S(b);
          return null;
        case 13:
          E(L);
          d = b.memoizedState;
          if (null === a || null !== a.memoizedState && null !== a.memoizedState.dehydrated) {
            if (I && null !== yg && 0 !== (b.mode & 1) && 0 === (b.flags & 128)) Hg(), Ig(), b.flags |= 98560, f = false;
            else if (f = Gg(b), null !== d && null !== d.dehydrated) {
              if (null === a) {
                if (!f) throw Error(p(318));
                f = b.memoizedState;
                f = null !== f ? f.dehydrated : null;
                if (!f) throw Error(p(317));
                f[Of] = b;
              } else Ig(), 0 === (b.flags & 128) && (b.memoizedState = null), b.flags |= 4;
              S(b);
              f = false;
            } else null !== zg && (Fj(zg), zg = null), f = true;
            if (!f) return b.flags & 65536 ? b : null;
          }
          if (0 !== (b.flags & 128)) return b.lanes = c, b;
          d = null !== d;
          d !== (null !== a && null !== a.memoizedState) && d && (b.child.flags |= 8192, 0 !== (b.mode & 1) && (null === a || 0 !== (L.current & 1) ? 0 === T && (T = 3) : tj()));
          null !== b.updateQueue && (b.flags |= 4);
          S(b);
          return null;
        case 4:
          return zh(), Aj(a, b), null === a && sf(b.stateNode.containerInfo), S(b), null;
        case 10:
          return ah(b.type._context), S(b), null;
        case 17:
          return Zf(b.type) && $f(), S(b), null;
        case 19:
          E(L);
          f = b.memoizedState;
          if (null === f) return S(b), null;
          d = 0 !== (b.flags & 128);
          g = f.rendering;
          if (null === g) if (d) Dj(f, false);
          else {
            if (0 !== T || null !== a && 0 !== (a.flags & 128)) for (a = b.child; null !== a; ) {
              g = Ch(a);
              if (null !== g) {
                b.flags |= 128;
                Dj(f, false);
                d = g.updateQueue;
                null !== d && (b.updateQueue = d, b.flags |= 4);
                b.subtreeFlags = 0;
                d = c;
                for (c = b.child; null !== c; ) f = c, a = d, f.flags &= 14680066, g = f.alternate, null === g ? (f.childLanes = 0, f.lanes = a, f.child = null, f.subtreeFlags = 0, f.memoizedProps = null, f.memoizedState = null, f.updateQueue = null, f.dependencies = null, f.stateNode = null) : (f.childLanes = g.childLanes, f.lanes = g.lanes, f.child = g.child, f.subtreeFlags = 0, f.deletions = null, f.memoizedProps = g.memoizedProps, f.memoizedState = g.memoizedState, f.updateQueue = g.updateQueue, f.type = g.type, a = g.dependencies, f.dependencies = null === a ? null : { lanes: a.lanes, firstContext: a.firstContext }), c = c.sibling;
                G(L, L.current & 1 | 2);
                return b.child;
              }
              a = a.sibling;
            }
            null !== f.tail && B() > Gj && (b.flags |= 128, d = true, Dj(f, false), b.lanes = 4194304);
          }
          else {
            if (!d) if (a = Ch(g), null !== a) {
              if (b.flags |= 128, d = true, c = a.updateQueue, null !== c && (b.updateQueue = c, b.flags |= 4), Dj(f, true), null === f.tail && "hidden" === f.tailMode && !g.alternate && !I) return S(b), null;
            } else 2 * B() - f.renderingStartTime > Gj && 1073741824 !== c && (b.flags |= 128, d = true, Dj(f, false), b.lanes = 4194304);
            f.isBackwards ? (g.sibling = b.child, b.child = g) : (c = f.last, null !== c ? c.sibling = g : b.child = g, f.last = g);
          }
          if (null !== f.tail) return b = f.tail, f.rendering = b, f.tail = b.sibling, f.renderingStartTime = B(), b.sibling = null, c = L.current, G(L, d ? c & 1 | 2 : c & 1), b;
          S(b);
          return null;
        case 22:
        case 23:
          return Hj(), d = null !== b.memoizedState, null !== a && null !== a.memoizedState !== d && (b.flags |= 8192), d && 0 !== (b.mode & 1) ? 0 !== (fj & 1073741824) && (S(b), b.subtreeFlags & 6 && (b.flags |= 8192)) : S(b), null;
        case 24:
          return null;
        case 25:
          return null;
      }
      throw Error(p(156, b.tag));
    }
    function Ij(a, b) {
      wg(b);
      switch (b.tag) {
        case 1:
          return Zf(b.type) && $f(), a = b.flags, a & 65536 ? (b.flags = a & -65537 | 128, b) : null;
        case 3:
          return zh(), E(Wf), E(H), Eh(), a = b.flags, 0 !== (a & 65536) && 0 === (a & 128) ? (b.flags = a & -65537 | 128, b) : null;
        case 5:
          return Bh(b), null;
        case 13:
          E(L);
          a = b.memoizedState;
          if (null !== a && null !== a.dehydrated) {
            if (null === b.alternate) throw Error(p(340));
            Ig();
          }
          a = b.flags;
          return a & 65536 ? (b.flags = a & -65537 | 128, b) : null;
        case 19:
          return E(L), null;
        case 4:
          return zh(), null;
        case 10:
          return ah(b.type._context), null;
        case 22:
        case 23:
          return Hj(), null;
        case 24:
          return null;
        default:
          return null;
      }
    }
    var Jj = false;
    var U = false;
    var Kj = "function" === typeof WeakSet ? WeakSet : Set;
    var V = null;
    function Lj(a, b) {
      var c = a.ref;
      if (null !== c) if ("function" === typeof c) try {
        c(null);
      } catch (d) {
        W(a, b, d);
      }
      else c.current = null;
    }
    function Mj(a, b, c) {
      try {
        c();
      } catch (d) {
        W(a, b, d);
      }
    }
    var Nj = false;
    function Oj(a, b) {
      Cf = dd;
      a = Me();
      if (Ne(a)) {
        if ("selectionStart" in a) var c = { start: a.selectionStart, end: a.selectionEnd };
        else a: {
          c = (c = a.ownerDocument) && c.defaultView || window;
          var d = c.getSelection && c.getSelection();
          if (d && 0 !== d.rangeCount) {
            c = d.anchorNode;
            var e = d.anchorOffset, f = d.focusNode;
            d = d.focusOffset;
            try {
              c.nodeType, f.nodeType;
            } catch (F) {
              c = null;
              break a;
            }
            var g = 0, h = -1, k = -1, l = 0, m = 0, q = a, r = null;
            b: for (; ; ) {
              for (var y; ; ) {
                q !== c || 0 !== e && 3 !== q.nodeType || (h = g + e);
                q !== f || 0 !== d && 3 !== q.nodeType || (k = g + d);
                3 === q.nodeType && (g += q.nodeValue.length);
                if (null === (y = q.firstChild)) break;
                r = q;
                q = y;
              }
              for (; ; ) {
                if (q === a) break b;
                r === c && ++l === e && (h = g);
                r === f && ++m === d && (k = g);
                if (null !== (y = q.nextSibling)) break;
                q = r;
                r = q.parentNode;
              }
              q = y;
            }
            c = -1 === h || -1 === k ? null : { start: h, end: k };
          } else c = null;
        }
        c = c || { start: 0, end: 0 };
      } else c = null;
      Df = { focusedElem: a, selectionRange: c };
      dd = false;
      for (V = b; null !== V; ) if (b = V, a = b.child, 0 !== (b.subtreeFlags & 1028) && null !== a) a.return = b, V = a;
      else for (; null !== V; ) {
        b = V;
        try {
          var n = b.alternate;
          if (0 !== (b.flags & 1024)) switch (b.tag) {
            case 0:
            case 11:
            case 15:
              break;
            case 1:
              if (null !== n) {
                var t = n.memoizedProps, J = n.memoizedState, x = b.stateNode, w = x.getSnapshotBeforeUpdate(b.elementType === b.type ? t : Ci(b.type, t), J);
                x.__reactInternalSnapshotBeforeUpdate = w;
              }
              break;
            case 3:
              var u = b.stateNode.containerInfo;
              1 === u.nodeType ? u.textContent = "" : 9 === u.nodeType && u.documentElement && u.removeChild(u.documentElement);
              break;
            case 5:
            case 6:
            case 4:
            case 17:
              break;
            default:
              throw Error(p(163));
          }
        } catch (F) {
          W(b, b.return, F);
        }
        a = b.sibling;
        if (null !== a) {
          a.return = b.return;
          V = a;
          break;
        }
        V = b.return;
      }
      n = Nj;
      Nj = false;
      return n;
    }
    function Pj(a, b, c) {
      var d = b.updateQueue;
      d = null !== d ? d.lastEffect : null;
      if (null !== d) {
        var e = d = d.next;
        do {
          if ((e.tag & a) === a) {
            var f = e.destroy;
            e.destroy = void 0;
            void 0 !== f && Mj(b, c, f);
          }
          e = e.next;
        } while (e !== d);
      }
    }
    function Qj(a, b) {
      b = b.updateQueue;
      b = null !== b ? b.lastEffect : null;
      if (null !== b) {
        var c = b = b.next;
        do {
          if ((c.tag & a) === a) {
            var d = c.create;
            c.destroy = d();
          }
          c = c.next;
        } while (c !== b);
      }
    }
    function Rj(a) {
      var b = a.ref;
      if (null !== b) {
        var c = a.stateNode;
        switch (a.tag) {
          case 5:
            a = c;
            break;
          default:
            a = c;
        }
        "function" === typeof b ? b(a) : b.current = a;
      }
    }
    function Sj(a) {
      var b = a.alternate;
      null !== b && (a.alternate = null, Sj(b));
      a.child = null;
      a.deletions = null;
      a.sibling = null;
      5 === a.tag && (b = a.stateNode, null !== b && (delete b[Of], delete b[Pf], delete b[of], delete b[Qf], delete b[Rf]));
      a.stateNode = null;
      a.return = null;
      a.dependencies = null;
      a.memoizedProps = null;
      a.memoizedState = null;
      a.pendingProps = null;
      a.stateNode = null;
      a.updateQueue = null;
    }
    function Tj(a) {
      return 5 === a.tag || 3 === a.tag || 4 === a.tag;
    }
    function Uj(a) {
      a: for (; ; ) {
        for (; null === a.sibling; ) {
          if (null === a.return || Tj(a.return)) return null;
          a = a.return;
        }
        a.sibling.return = a.return;
        for (a = a.sibling; 5 !== a.tag && 6 !== a.tag && 18 !== a.tag; ) {
          if (a.flags & 2) continue a;
          if (null === a.child || 4 === a.tag) continue a;
          else a.child.return = a, a = a.child;
        }
        if (!(a.flags & 2)) return a.stateNode;
      }
    }
    function Vj(a, b, c) {
      var d = a.tag;
      if (5 === d || 6 === d) a = a.stateNode, b ? 8 === c.nodeType ? c.parentNode.insertBefore(a, b) : c.insertBefore(a, b) : (8 === c.nodeType ? (b = c.parentNode, b.insertBefore(a, c)) : (b = c, b.appendChild(a)), c = c._reactRootContainer, null !== c && void 0 !== c || null !== b.onclick || (b.onclick = Bf));
      else if (4 !== d && (a = a.child, null !== a)) for (Vj(a, b, c), a = a.sibling; null !== a; ) Vj(a, b, c), a = a.sibling;
    }
    function Wj(a, b, c) {
      var d = a.tag;
      if (5 === d || 6 === d) a = a.stateNode, b ? c.insertBefore(a, b) : c.appendChild(a);
      else if (4 !== d && (a = a.child, null !== a)) for (Wj(a, b, c), a = a.sibling; null !== a; ) Wj(a, b, c), a = a.sibling;
    }
    var X2 = null;
    var Xj = false;
    function Yj(a, b, c) {
      for (c = c.child; null !== c; ) Zj(a, b, c), c = c.sibling;
    }
    function Zj(a, b, c) {
      if (lc && "function" === typeof lc.onCommitFiberUnmount) try {
        lc.onCommitFiberUnmount(kc, c);
      } catch (h) {
      }
      switch (c.tag) {
        case 5:
          U || Lj(c, b);
        case 6:
          var d = X2, e = Xj;
          X2 = null;
          Yj(a, b, c);
          X2 = d;
          Xj = e;
          null !== X2 && (Xj ? (a = X2, c = c.stateNode, 8 === a.nodeType ? a.parentNode.removeChild(c) : a.removeChild(c)) : X2.removeChild(c.stateNode));
          break;
        case 18:
          null !== X2 && (Xj ? (a = X2, c = c.stateNode, 8 === a.nodeType ? Kf(a.parentNode, c) : 1 === a.nodeType && Kf(a, c), bd(a)) : Kf(X2, c.stateNode));
          break;
        case 4:
          d = X2;
          e = Xj;
          X2 = c.stateNode.containerInfo;
          Xj = true;
          Yj(a, b, c);
          X2 = d;
          Xj = e;
          break;
        case 0:
        case 11:
        case 14:
        case 15:
          if (!U && (d = c.updateQueue, null !== d && (d = d.lastEffect, null !== d))) {
            e = d = d.next;
            do {
              var f = e, g = f.destroy;
              f = f.tag;
              void 0 !== g && (0 !== (f & 2) ? Mj(c, b, g) : 0 !== (f & 4) && Mj(c, b, g));
              e = e.next;
            } while (e !== d);
          }
          Yj(a, b, c);
          break;
        case 1:
          if (!U && (Lj(c, b), d = c.stateNode, "function" === typeof d.componentWillUnmount)) try {
            d.props = c.memoizedProps, d.state = c.memoizedState, d.componentWillUnmount();
          } catch (h) {
            W(c, b, h);
          }
          Yj(a, b, c);
          break;
        case 21:
          Yj(a, b, c);
          break;
        case 22:
          c.mode & 1 ? (U = (d = U) || null !== c.memoizedState, Yj(a, b, c), U = d) : Yj(a, b, c);
          break;
        default:
          Yj(a, b, c);
      }
    }
    function ak(a) {
      var b = a.updateQueue;
      if (null !== b) {
        a.updateQueue = null;
        var c = a.stateNode;
        null === c && (c = a.stateNode = new Kj());
        b.forEach(function(b2) {
          var d = bk.bind(null, a, b2);
          c.has(b2) || (c.add(b2), b2.then(d, d));
        });
      }
    }
    function ck(a, b) {
      var c = b.deletions;
      if (null !== c) for (var d = 0; d < c.length; d++) {
        var e = c[d];
        try {
          var f = a, g = b, h = g;
          a: for (; null !== h; ) {
            switch (h.tag) {
              case 5:
                X2 = h.stateNode;
                Xj = false;
                break a;
              case 3:
                X2 = h.stateNode.containerInfo;
                Xj = true;
                break a;
              case 4:
                X2 = h.stateNode.containerInfo;
                Xj = true;
                break a;
            }
            h = h.return;
          }
          if (null === X2) throw Error(p(160));
          Zj(f, g, e);
          X2 = null;
          Xj = false;
          var k = e.alternate;
          null !== k && (k.return = null);
          e.return = null;
        } catch (l) {
          W(e, b, l);
        }
      }
      if (b.subtreeFlags & 12854) for (b = b.child; null !== b; ) dk(b, a), b = b.sibling;
    }
    function dk(a, b) {
      var c = a.alternate, d = a.flags;
      switch (a.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          ck(b, a);
          ek(a);
          if (d & 4) {
            try {
              Pj(3, a, a.return), Qj(3, a);
            } catch (t) {
              W(a, a.return, t);
            }
            try {
              Pj(5, a, a.return);
            } catch (t) {
              W(a, a.return, t);
            }
          }
          break;
        case 1:
          ck(b, a);
          ek(a);
          d & 512 && null !== c && Lj(c, c.return);
          break;
        case 5:
          ck(b, a);
          ek(a);
          d & 512 && null !== c && Lj(c, c.return);
          if (a.flags & 32) {
            var e = a.stateNode;
            try {
              ob(e, "");
            } catch (t) {
              W(a, a.return, t);
            }
          }
          if (d & 4 && (e = a.stateNode, null != e)) {
            var f = a.memoizedProps, g = null !== c ? c.memoizedProps : f, h = a.type, k = a.updateQueue;
            a.updateQueue = null;
            if (null !== k) try {
              "input" === h && "radio" === f.type && null != f.name && ab(e, f);
              vb(h, g);
              var l = vb(h, f);
              for (g = 0; g < k.length; g += 2) {
                var m = k[g], q = k[g + 1];
                "style" === m ? sb(e, q) : "dangerouslySetInnerHTML" === m ? nb(e, q) : "children" === m ? ob(e, q) : ta(e, m, q, l);
              }
              switch (h) {
                case "input":
                  bb(e, f);
                  break;
                case "textarea":
                  ib(e, f);
                  break;
                case "select":
                  var r = e._wrapperState.wasMultiple;
                  e._wrapperState.wasMultiple = !!f.multiple;
                  var y = f.value;
                  null != y ? fb(e, !!f.multiple, y, false) : r !== !!f.multiple && (null != f.defaultValue ? fb(
                    e,
                    !!f.multiple,
                    f.defaultValue,
                    true
                  ) : fb(e, !!f.multiple, f.multiple ? [] : "", false));
              }
              e[Pf] = f;
            } catch (t) {
              W(a, a.return, t);
            }
          }
          break;
        case 6:
          ck(b, a);
          ek(a);
          if (d & 4) {
            if (null === a.stateNode) throw Error(p(162));
            e = a.stateNode;
            f = a.memoizedProps;
            try {
              e.nodeValue = f;
            } catch (t) {
              W(a, a.return, t);
            }
          }
          break;
        case 3:
          ck(b, a);
          ek(a);
          if (d & 4 && null !== c && c.memoizedState.isDehydrated) try {
            bd(b.containerInfo);
          } catch (t) {
            W(a, a.return, t);
          }
          break;
        case 4:
          ck(b, a);
          ek(a);
          break;
        case 13:
          ck(b, a);
          ek(a);
          e = a.child;
          e.flags & 8192 && (f = null !== e.memoizedState, e.stateNode.isHidden = f, !f || null !== e.alternate && null !== e.alternate.memoizedState || (fk = B()));
          d & 4 && ak(a);
          break;
        case 22:
          m = null !== c && null !== c.memoizedState;
          a.mode & 1 ? (U = (l = U) || m, ck(b, a), U = l) : ck(b, a);
          ek(a);
          if (d & 8192) {
            l = null !== a.memoizedState;
            if ((a.stateNode.isHidden = l) && !m && 0 !== (a.mode & 1)) for (V = a, m = a.child; null !== m; ) {
              for (q = V = m; null !== V; ) {
                r = V;
                y = r.child;
                switch (r.tag) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    Pj(4, r, r.return);
                    break;
                  case 1:
                    Lj(r, r.return);
                    var n = r.stateNode;
                    if ("function" === typeof n.componentWillUnmount) {
                      d = r;
                      c = r.return;
                      try {
                        b = d, n.props = b.memoizedProps, n.state = b.memoizedState, n.componentWillUnmount();
                      } catch (t) {
                        W(d, c, t);
                      }
                    }
                    break;
                  case 5:
                    Lj(r, r.return);
                    break;
                  case 22:
                    if (null !== r.memoizedState) {
                      gk(q);
                      continue;
                    }
                }
                null !== y ? (y.return = r, V = y) : gk(q);
              }
              m = m.sibling;
            }
            a: for (m = null, q = a; ; ) {
              if (5 === q.tag) {
                if (null === m) {
                  m = q;
                  try {
                    e = q.stateNode, l ? (f = e.style, "function" === typeof f.setProperty ? f.setProperty("display", "none", "important") : f.display = "none") : (h = q.stateNode, k = q.memoizedProps.style, g = void 0 !== k && null !== k && k.hasOwnProperty("display") ? k.display : null, h.style.display = rb("display", g));
                  } catch (t) {
                    W(a, a.return, t);
                  }
                }
              } else if (6 === q.tag) {
                if (null === m) try {
                  q.stateNode.nodeValue = l ? "" : q.memoizedProps;
                } catch (t) {
                  W(a, a.return, t);
                }
              } else if ((22 !== q.tag && 23 !== q.tag || null === q.memoizedState || q === a) && null !== q.child) {
                q.child.return = q;
                q = q.child;
                continue;
              }
              if (q === a) break a;
              for (; null === q.sibling; ) {
                if (null === q.return || q.return === a) break a;
                m === q && (m = null);
                q = q.return;
              }
              m === q && (m = null);
              q.sibling.return = q.return;
              q = q.sibling;
            }
          }
          break;
        case 19:
          ck(b, a);
          ek(a);
          d & 4 && ak(a);
          break;
        case 21:
          break;
        default:
          ck(
            b,
            a
          ), ek(a);
      }
    }
    function ek(a) {
      var b = a.flags;
      if (b & 2) {
        try {
          a: {
            for (var c = a.return; null !== c; ) {
              if (Tj(c)) {
                var d = c;
                break a;
              }
              c = c.return;
            }
            throw Error(p(160));
          }
          switch (d.tag) {
            case 5:
              var e = d.stateNode;
              d.flags & 32 && (ob(e, ""), d.flags &= -33);
              var f = Uj(a);
              Wj(a, f, e);
              break;
            case 3:
            case 4:
              var g = d.stateNode.containerInfo, h = Uj(a);
              Vj(a, h, g);
              break;
            default:
              throw Error(p(161));
          }
        } catch (k) {
          W(a, a.return, k);
        }
        a.flags &= -3;
      }
      b & 4096 && (a.flags &= -4097);
    }
    function hk(a, b, c) {
      V = a;
      ik(a, b, c);
    }
    function ik(a, b, c) {
      for (var d = 0 !== (a.mode & 1); null !== V; ) {
        var e = V, f = e.child;
        if (22 === e.tag && d) {
          var g = null !== e.memoizedState || Jj;
          if (!g) {
            var h = e.alternate, k = null !== h && null !== h.memoizedState || U;
            h = Jj;
            var l = U;
            Jj = g;
            if ((U = k) && !l) for (V = e; null !== V; ) g = V, k = g.child, 22 === g.tag && null !== g.memoizedState ? jk(e) : null !== k ? (k.return = g, V = k) : jk(e);
            for (; null !== f; ) V = f, ik(f, b, c), f = f.sibling;
            V = e;
            Jj = h;
            U = l;
          }
          kk(a, b, c);
        } else 0 !== (e.subtreeFlags & 8772) && null !== f ? (f.return = e, V = f) : kk(a, b, c);
      }
    }
    function kk(a) {
      for (; null !== V; ) {
        var b = V;
        if (0 !== (b.flags & 8772)) {
          var c = b.alternate;
          try {
            if (0 !== (b.flags & 8772)) switch (b.tag) {
              case 0:
              case 11:
              case 15:
                U || Qj(5, b);
                break;
              case 1:
                var d = b.stateNode;
                if (b.flags & 4 && !U) if (null === c) d.componentDidMount();
                else {
                  var e = b.elementType === b.type ? c.memoizedProps : Ci(b.type, c.memoizedProps);
                  d.componentDidUpdate(e, c.memoizedState, d.__reactInternalSnapshotBeforeUpdate);
                }
                var f = b.updateQueue;
                null !== f && sh(b, f, d);
                break;
              case 3:
                var g = b.updateQueue;
                if (null !== g) {
                  c = null;
                  if (null !== b.child) switch (b.child.tag) {
                    case 5:
                      c = b.child.stateNode;
                      break;
                    case 1:
                      c = b.child.stateNode;
                  }
                  sh(b, g, c);
                }
                break;
              case 5:
                var h = b.stateNode;
                if (null === c && b.flags & 4) {
                  c = h;
                  var k = b.memoizedProps;
                  switch (b.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      k.autoFocus && c.focus();
                      break;
                    case "img":
                      k.src && (c.src = k.src);
                  }
                }
                break;
              case 6:
                break;
              case 4:
                break;
              case 12:
                break;
              case 13:
                if (null === b.memoizedState) {
                  var l = b.alternate;
                  if (null !== l) {
                    var m = l.memoizedState;
                    if (null !== m) {
                      var q = m.dehydrated;
                      null !== q && bd(q);
                    }
                  }
                }
                break;
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break;
              default:
                throw Error(p(163));
            }
            U || b.flags & 512 && Rj(b);
          } catch (r) {
            W(b, b.return, r);
          }
        }
        if (b === a) {
          V = null;
          break;
        }
        c = b.sibling;
        if (null !== c) {
          c.return = b.return;
          V = c;
          break;
        }
        V = b.return;
      }
    }
    function gk(a) {
      for (; null !== V; ) {
        var b = V;
        if (b === a) {
          V = null;
          break;
        }
        var c = b.sibling;
        if (null !== c) {
          c.return = b.return;
          V = c;
          break;
        }
        V = b.return;
      }
    }
    function jk(a) {
      for (; null !== V; ) {
        var b = V;
        try {
          switch (b.tag) {
            case 0:
            case 11:
            case 15:
              var c = b.return;
              try {
                Qj(4, b);
              } catch (k) {
                W(b, c, k);
              }
              break;
            case 1:
              var d = b.stateNode;
              if ("function" === typeof d.componentDidMount) {
                var e = b.return;
                try {
                  d.componentDidMount();
                } catch (k) {
                  W(b, e, k);
                }
              }
              var f = b.return;
              try {
                Rj(b);
              } catch (k) {
                W(b, f, k);
              }
              break;
            case 5:
              var g = b.return;
              try {
                Rj(b);
              } catch (k) {
                W(b, g, k);
              }
          }
        } catch (k) {
          W(b, b.return, k);
        }
        if (b === a) {
          V = null;
          break;
        }
        var h = b.sibling;
        if (null !== h) {
          h.return = b.return;
          V = h;
          break;
        }
        V = b.return;
      }
    }
    var lk = Math.ceil;
    var mk = ua.ReactCurrentDispatcher;
    var nk = ua.ReactCurrentOwner;
    var ok = ua.ReactCurrentBatchConfig;
    var K = 0;
    var Q = null;
    var Y = null;
    var Z = 0;
    var fj = 0;
    var ej = Uf(0);
    var T = 0;
    var pk = null;
    var rh = 0;
    var qk = 0;
    var rk = 0;
    var sk = null;
    var tk = null;
    var fk = 0;
    var Gj = Infinity;
    var uk = null;
    var Oi = false;
    var Pi = null;
    var Ri = null;
    var vk = false;
    var wk = null;
    var xk = 0;
    var yk = 0;
    var zk = null;
    var Ak = -1;
    var Bk = 0;
    function R() {
      return 0 !== (K & 6) ? B() : -1 !== Ak ? Ak : Ak = B();
    }
    function yi(a) {
      if (0 === (a.mode & 1)) return 1;
      if (0 !== (K & 2) && 0 !== Z) return Z & -Z;
      if (null !== Kg.transition) return 0 === Bk && (Bk = yc()), Bk;
      a = C;
      if (0 !== a) return a;
      a = window.event;
      a = void 0 === a ? 16 : jd(a.type);
      return a;
    }
    function gi(a, b, c, d) {
      if (50 < yk) throw yk = 0, zk = null, Error(p(185));
      Ac(a, c, d);
      if (0 === (K & 2) || a !== Q) a === Q && (0 === (K & 2) && (qk |= c), 4 === T && Ck(a, Z)), Dk(a, d), 1 === c && 0 === K && 0 === (b.mode & 1) && (Gj = B() + 500, fg && jg());
    }
    function Dk(a, b) {
      var c = a.callbackNode;
      wc(a, b);
      var d = uc(a, a === Q ? Z : 0);
      if (0 === d) null !== c && bc(c), a.callbackNode = null, a.callbackPriority = 0;
      else if (b = d & -d, a.callbackPriority !== b) {
        null != c && bc(c);
        if (1 === b) 0 === a.tag ? ig(Ek.bind(null, a)) : hg(Ek.bind(null, a)), Jf(function() {
          0 === (K & 6) && jg();
        }), c = null;
        else {
          switch (Dc(d)) {
            case 1:
              c = fc;
              break;
            case 4:
              c = gc;
              break;
            case 16:
              c = hc;
              break;
            case 536870912:
              c = jc;
              break;
            default:
              c = hc;
          }
          c = Fk(c, Gk.bind(null, a));
        }
        a.callbackPriority = b;
        a.callbackNode = c;
      }
    }
    function Gk(a, b) {
      Ak = -1;
      Bk = 0;
      if (0 !== (K & 6)) throw Error(p(327));
      var c = a.callbackNode;
      if (Hk() && a.callbackNode !== c) return null;
      var d = uc(a, a === Q ? Z : 0);
      if (0 === d) return null;
      if (0 !== (d & 30) || 0 !== (d & a.expiredLanes) || b) b = Ik(a, d);
      else {
        b = d;
        var e = K;
        K |= 2;
        var f = Jk();
        if (Q !== a || Z !== b) uk = null, Gj = B() + 500, Kk(a, b);
        do
          try {
            Lk();
            break;
          } catch (h) {
            Mk(a, h);
          }
        while (1);
        $g();
        mk.current = f;
        K = e;
        null !== Y ? b = 0 : (Q = null, Z = 0, b = T);
      }
      if (0 !== b) {
        2 === b && (e = xc(a), 0 !== e && (d = e, b = Nk(a, e)));
        if (1 === b) throw c = pk, Kk(a, 0), Ck(a, d), Dk(a, B()), c;
        if (6 === b) Ck(a, d);
        else {
          e = a.current.alternate;
          if (0 === (d & 30) && !Ok(e) && (b = Ik(a, d), 2 === b && (f = xc(a), 0 !== f && (d = f, b = Nk(a, f))), 1 === b)) throw c = pk, Kk(a, 0), Ck(a, d), Dk(a, B()), c;
          a.finishedWork = e;
          a.finishedLanes = d;
          switch (b) {
            case 0:
            case 1:
              throw Error(p(345));
            case 2:
              Pk(a, tk, uk);
              break;
            case 3:
              Ck(a, d);
              if ((d & 130023424) === d && (b = fk + 500 - B(), 10 < b)) {
                if (0 !== uc(a, 0)) break;
                e = a.suspendedLanes;
                if ((e & d) !== d) {
                  R();
                  a.pingedLanes |= a.suspendedLanes & e;
                  break;
                }
                a.timeoutHandle = Ff(Pk.bind(null, a, tk, uk), b);
                break;
              }
              Pk(a, tk, uk);
              break;
            case 4:
              Ck(a, d);
              if ((d & 4194240) === d) break;
              b = a.eventTimes;
              for (e = -1; 0 < d; ) {
                var g = 31 - oc(d);
                f = 1 << g;
                g = b[g];
                g > e && (e = g);
                d &= ~f;
              }
              d = e;
              d = B() - d;
              d = (120 > d ? 120 : 480 > d ? 480 : 1080 > d ? 1080 : 1920 > d ? 1920 : 3e3 > d ? 3e3 : 4320 > d ? 4320 : 1960 * lk(d / 1960)) - d;
              if (10 < d) {
                a.timeoutHandle = Ff(Pk.bind(null, a, tk, uk), d);
                break;
              }
              Pk(a, tk, uk);
              break;
            case 5:
              Pk(a, tk, uk);
              break;
            default:
              throw Error(p(329));
          }
        }
      }
      Dk(a, B());
      return a.callbackNode === c ? Gk.bind(null, a) : null;
    }
    function Nk(a, b) {
      var c = sk;
      a.current.memoizedState.isDehydrated && (Kk(a, b).flags |= 256);
      a = Ik(a, b);
      2 !== a && (b = tk, tk = c, null !== b && Fj(b));
      return a;
    }
    function Fj(a) {
      null === tk ? tk = a : tk.push.apply(tk, a);
    }
    function Ok(a) {
      for (var b = a; ; ) {
        if (b.flags & 16384) {
          var c = b.updateQueue;
          if (null !== c && (c = c.stores, null !== c)) for (var d = 0; d < c.length; d++) {
            var e = c[d], f = e.getSnapshot;
            e = e.value;
            try {
              if (!He(f(), e)) return false;
            } catch (g) {
              return false;
            }
          }
        }
        c = b.child;
        if (b.subtreeFlags & 16384 && null !== c) c.return = b, b = c;
        else {
          if (b === a) break;
          for (; null === b.sibling; ) {
            if (null === b.return || b.return === a) return true;
            b = b.return;
          }
          b.sibling.return = b.return;
          b = b.sibling;
        }
      }
      return true;
    }
    function Ck(a, b) {
      b &= ~rk;
      b &= ~qk;
      a.suspendedLanes |= b;
      a.pingedLanes &= ~b;
      for (a = a.expirationTimes; 0 < b; ) {
        var c = 31 - oc(b), d = 1 << c;
        a[c] = -1;
        b &= ~d;
      }
    }
    function Ek(a) {
      if (0 !== (K & 6)) throw Error(p(327));
      Hk();
      var b = uc(a, 0);
      if (0 === (b & 1)) return Dk(a, B()), null;
      var c = Ik(a, b);
      if (0 !== a.tag && 2 === c) {
        var d = xc(a);
        0 !== d && (b = d, c = Nk(a, d));
      }
      if (1 === c) throw c = pk, Kk(a, 0), Ck(a, b), Dk(a, B()), c;
      if (6 === c) throw Error(p(345));
      a.finishedWork = a.current.alternate;
      a.finishedLanes = b;
      Pk(a, tk, uk);
      Dk(a, B());
      return null;
    }
    function Qk(a, b) {
      var c = K;
      K |= 1;
      try {
        return a(b);
      } finally {
        K = c, 0 === K && (Gj = B() + 500, fg && jg());
      }
    }
    function Rk(a) {
      null !== wk && 0 === wk.tag && 0 === (K & 6) && Hk();
      var b = K;
      K |= 1;
      var c = ok.transition, d = C;
      try {
        if (ok.transition = null, C = 1, a) return a();
      } finally {
        C = d, ok.transition = c, K = b, 0 === (K & 6) && jg();
      }
    }
    function Hj() {
      fj = ej.current;
      E(ej);
    }
    function Kk(a, b) {
      a.finishedWork = null;
      a.finishedLanes = 0;
      var c = a.timeoutHandle;
      -1 !== c && (a.timeoutHandle = -1, Gf(c));
      if (null !== Y) for (c = Y.return; null !== c; ) {
        var d = c;
        wg(d);
        switch (d.tag) {
          case 1:
            d = d.type.childContextTypes;
            null !== d && void 0 !== d && $f();
            break;
          case 3:
            zh();
            E(Wf);
            E(H);
            Eh();
            break;
          case 5:
            Bh(d);
            break;
          case 4:
            zh();
            break;
          case 13:
            E(L);
            break;
          case 19:
            E(L);
            break;
          case 10:
            ah(d.type._context);
            break;
          case 22:
          case 23:
            Hj();
        }
        c = c.return;
      }
      Q = a;
      Y = a = Pg(a.current, null);
      Z = fj = b;
      T = 0;
      pk = null;
      rk = qk = rh = 0;
      tk = sk = null;
      if (null !== fh) {
        for (b = 0; b < fh.length; b++) if (c = fh[b], d = c.interleaved, null !== d) {
          c.interleaved = null;
          var e = d.next, f = c.pending;
          if (null !== f) {
            var g = f.next;
            f.next = e;
            d.next = g;
          }
          c.pending = d;
        }
        fh = null;
      }
      return a;
    }
    function Mk(a, b) {
      do {
        var c = Y;
        try {
          $g();
          Fh.current = Rh;
          if (Ih) {
            for (var d = M.memoizedState; null !== d; ) {
              var e = d.queue;
              null !== e && (e.pending = null);
              d = d.next;
            }
            Ih = false;
          }
          Hh = 0;
          O = N = M = null;
          Jh = false;
          Kh = 0;
          nk.current = null;
          if (null === c || null === c.return) {
            T = 1;
            pk = b;
            Y = null;
            break;
          }
          a: {
            var f = a, g = c.return, h = c, k = b;
            b = Z;
            h.flags |= 32768;
            if (null !== k && "object" === typeof k && "function" === typeof k.then) {
              var l = k, m = h, q = m.tag;
              if (0 === (m.mode & 1) && (0 === q || 11 === q || 15 === q)) {
                var r = m.alternate;
                r ? (m.updateQueue = r.updateQueue, m.memoizedState = r.memoizedState, m.lanes = r.lanes) : (m.updateQueue = null, m.memoizedState = null);
              }
              var y = Ui(g);
              if (null !== y) {
                y.flags &= -257;
                Vi(y, g, h, f, b);
                y.mode & 1 && Si(f, l, b);
                b = y;
                k = l;
                var n = b.updateQueue;
                if (null === n) {
                  var t = /* @__PURE__ */ new Set();
                  t.add(k);
                  b.updateQueue = t;
                } else n.add(k);
                break a;
              } else {
                if (0 === (b & 1)) {
                  Si(f, l, b);
                  tj();
                  break a;
                }
                k = Error(p(426));
              }
            } else if (I && h.mode & 1) {
              var J = Ui(g);
              if (null !== J) {
                0 === (J.flags & 65536) && (J.flags |= 256);
                Vi(J, g, h, f, b);
                Jg(Ji(k, h));
                break a;
              }
            }
            f = k = Ji(k, h);
            4 !== T && (T = 2);
            null === sk ? sk = [f] : sk.push(f);
            f = g;
            do {
              switch (f.tag) {
                case 3:
                  f.flags |= 65536;
                  b &= -b;
                  f.lanes |= b;
                  var x = Ni(f, k, b);
                  ph(f, x);
                  break a;
                case 1:
                  h = k;
                  var w = f.type, u = f.stateNode;
                  if (0 === (f.flags & 128) && ("function" === typeof w.getDerivedStateFromError || null !== u && "function" === typeof u.componentDidCatch && (null === Ri || !Ri.has(u)))) {
                    f.flags |= 65536;
                    b &= -b;
                    f.lanes |= b;
                    var F = Qi(f, h, b);
                    ph(f, F);
                    break a;
                  }
              }
              f = f.return;
            } while (null !== f);
          }
          Sk(c);
        } catch (na) {
          b = na;
          Y === c && null !== c && (Y = c = c.return);
          continue;
        }
        break;
      } while (1);
    }
    function Jk() {
      var a = mk.current;
      mk.current = Rh;
      return null === a ? Rh : a;
    }
    function tj() {
      if (0 === T || 3 === T || 2 === T) T = 4;
      null === Q || 0 === (rh & 268435455) && 0 === (qk & 268435455) || Ck(Q, Z);
    }
    function Ik(a, b) {
      var c = K;
      K |= 2;
      var d = Jk();
      if (Q !== a || Z !== b) uk = null, Kk(a, b);
      do
        try {
          Tk();
          break;
        } catch (e) {
          Mk(a, e);
        }
      while (1);
      $g();
      K = c;
      mk.current = d;
      if (null !== Y) throw Error(p(261));
      Q = null;
      Z = 0;
      return T;
    }
    function Tk() {
      for (; null !== Y; ) Uk(Y);
    }
    function Lk() {
      for (; null !== Y && !cc(); ) Uk(Y);
    }
    function Uk(a) {
      var b = Vk(a.alternate, a, fj);
      a.memoizedProps = a.pendingProps;
      null === b ? Sk(a) : Y = b;
      nk.current = null;
    }
    function Sk(a) {
      var b = a;
      do {
        var c = b.alternate;
        a = b.return;
        if (0 === (b.flags & 32768)) {
          if (c = Ej(c, b, fj), null !== c) {
            Y = c;
            return;
          }
        } else {
          c = Ij(c, b);
          if (null !== c) {
            c.flags &= 32767;
            Y = c;
            return;
          }
          if (null !== a) a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null;
          else {
            T = 6;
            Y = null;
            return;
          }
        }
        b = b.sibling;
        if (null !== b) {
          Y = b;
          return;
        }
        Y = b = a;
      } while (null !== b);
      0 === T && (T = 5);
    }
    function Pk(a, b, c) {
      var d = C, e = ok.transition;
      try {
        ok.transition = null, C = 1, Wk(a, b, c, d);
      } finally {
        ok.transition = e, C = d;
      }
      return null;
    }
    function Wk(a, b, c, d) {
      do
        Hk();
      while (null !== wk);
      if (0 !== (K & 6)) throw Error(p(327));
      c = a.finishedWork;
      var e = a.finishedLanes;
      if (null === c) return null;
      a.finishedWork = null;
      a.finishedLanes = 0;
      if (c === a.current) throw Error(p(177));
      a.callbackNode = null;
      a.callbackPriority = 0;
      var f = c.lanes | c.childLanes;
      Bc(a, f);
      a === Q && (Y = Q = null, Z = 0);
      0 === (c.subtreeFlags & 2064) && 0 === (c.flags & 2064) || vk || (vk = true, Fk(hc, function() {
        Hk();
        return null;
      }));
      f = 0 !== (c.flags & 15990);
      if (0 !== (c.subtreeFlags & 15990) || f) {
        f = ok.transition;
        ok.transition = null;
        var g = C;
        C = 1;
        var h = K;
        K |= 4;
        nk.current = null;
        Oj(a, c);
        dk(c, a);
        Oe(Df);
        dd = !!Cf;
        Df = Cf = null;
        a.current = c;
        hk(c, a, e);
        dc();
        K = h;
        C = g;
        ok.transition = f;
      } else a.current = c;
      vk && (vk = false, wk = a, xk = e);
      f = a.pendingLanes;
      0 === f && (Ri = null);
      mc(c.stateNode, d);
      Dk(a, B());
      if (null !== b) for (d = a.onRecoverableError, c = 0; c < b.length; c++) e = b[c], d(e.value, { componentStack: e.stack, digest: e.digest });
      if (Oi) throw Oi = false, a = Pi, Pi = null, a;
      0 !== (xk & 1) && 0 !== a.tag && Hk();
      f = a.pendingLanes;
      0 !== (f & 1) ? a === zk ? yk++ : (yk = 0, zk = a) : yk = 0;
      jg();
      return null;
    }
    function Hk() {
      if (null !== wk) {
        var a = Dc(xk), b = ok.transition, c = C;
        try {
          ok.transition = null;
          C = 16 > a ? 16 : a;
          if (null === wk) var d = false;
          else {
            a = wk;
            wk = null;
            xk = 0;
            if (0 !== (K & 6)) throw Error(p(331));
            var e = K;
            K |= 4;
            for (V = a.current; null !== V; ) {
              var f = V, g = f.child;
              if (0 !== (V.flags & 16)) {
                var h = f.deletions;
                if (null !== h) {
                  for (var k = 0; k < h.length; k++) {
                    var l = h[k];
                    for (V = l; null !== V; ) {
                      var m = V;
                      switch (m.tag) {
                        case 0:
                        case 11:
                        case 15:
                          Pj(8, m, f);
                      }
                      var q = m.child;
                      if (null !== q) q.return = m, V = q;
                      else for (; null !== V; ) {
                        m = V;
                        var r = m.sibling, y = m.return;
                        Sj(m);
                        if (m === l) {
                          V = null;
                          break;
                        }
                        if (null !== r) {
                          r.return = y;
                          V = r;
                          break;
                        }
                        V = y;
                      }
                    }
                  }
                  var n = f.alternate;
                  if (null !== n) {
                    var t = n.child;
                    if (null !== t) {
                      n.child = null;
                      do {
                        var J = t.sibling;
                        t.sibling = null;
                        t = J;
                      } while (null !== t);
                    }
                  }
                  V = f;
                }
              }
              if (0 !== (f.subtreeFlags & 2064) && null !== g) g.return = f, V = g;
              else b: for (; null !== V; ) {
                f = V;
                if (0 !== (f.flags & 2048)) switch (f.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Pj(9, f, f.return);
                }
                var x = f.sibling;
                if (null !== x) {
                  x.return = f.return;
                  V = x;
                  break b;
                }
                V = f.return;
              }
            }
            var w = a.current;
            for (V = w; null !== V; ) {
              g = V;
              var u = g.child;
              if (0 !== (g.subtreeFlags & 2064) && null !== u) u.return = g, V = u;
              else b: for (g = w; null !== V; ) {
                h = V;
                if (0 !== (h.flags & 2048)) try {
                  switch (h.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Qj(9, h);
                  }
                } catch (na) {
                  W(h, h.return, na);
                }
                if (h === g) {
                  V = null;
                  break b;
                }
                var F = h.sibling;
                if (null !== F) {
                  F.return = h.return;
                  V = F;
                  break b;
                }
                V = h.return;
              }
            }
            K = e;
            jg();
            if (lc && "function" === typeof lc.onPostCommitFiberRoot) try {
              lc.onPostCommitFiberRoot(kc, a);
            } catch (na) {
            }
            d = true;
          }
          return d;
        } finally {
          C = c, ok.transition = b;
        }
      }
      return false;
    }
    function Xk(a, b, c) {
      b = Ji(c, b);
      b = Ni(a, b, 1);
      a = nh(a, b, 1);
      b = R();
      null !== a && (Ac(a, 1, b), Dk(a, b));
    }
    function W(a, b, c) {
      if (3 === a.tag) Xk(a, a, c);
      else for (; null !== b; ) {
        if (3 === b.tag) {
          Xk(b, a, c);
          break;
        } else if (1 === b.tag) {
          var d = b.stateNode;
          if ("function" === typeof b.type.getDerivedStateFromError || "function" === typeof d.componentDidCatch && (null === Ri || !Ri.has(d))) {
            a = Ji(c, a);
            a = Qi(b, a, 1);
            b = nh(b, a, 1);
            a = R();
            null !== b && (Ac(b, 1, a), Dk(b, a));
            break;
          }
        }
        b = b.return;
      }
    }
    function Ti(a, b, c) {
      var d = a.pingCache;
      null !== d && d.delete(b);
      b = R();
      a.pingedLanes |= a.suspendedLanes & c;
      Q === a && (Z & c) === c && (4 === T || 3 === T && (Z & 130023424) === Z && 500 > B() - fk ? Kk(a, 0) : rk |= c);
      Dk(a, b);
    }
    function Yk(a, b) {
      0 === b && (0 === (a.mode & 1) ? b = 1 : (b = sc, sc <<= 1, 0 === (sc & 130023424) && (sc = 4194304)));
      var c = R();
      a = ih(a, b);
      null !== a && (Ac(a, b, c), Dk(a, c));
    }
    function uj(a) {
      var b = a.memoizedState, c = 0;
      null !== b && (c = b.retryLane);
      Yk(a, c);
    }
    function bk(a, b) {
      var c = 0;
      switch (a.tag) {
        case 13:
          var d = a.stateNode;
          var e = a.memoizedState;
          null !== e && (c = e.retryLane);
          break;
        case 19:
          d = a.stateNode;
          break;
        default:
          throw Error(p(314));
      }
      null !== d && d.delete(b);
      Yk(a, c);
    }
    var Vk;
    Vk = function(a, b, c) {
      if (null !== a) if (a.memoizedProps !== b.pendingProps || Wf.current) dh = true;
      else {
        if (0 === (a.lanes & c) && 0 === (b.flags & 128)) return dh = false, yj(a, b, c);
        dh = 0 !== (a.flags & 131072) ? true : false;
      }
      else dh = false, I && 0 !== (b.flags & 1048576) && ug(b, ng, b.index);
      b.lanes = 0;
      switch (b.tag) {
        case 2:
          var d = b.type;
          ij(a, b);
          a = b.pendingProps;
          var e = Yf(b, H.current);
          ch(b, c);
          e = Nh(null, b, d, a, e, c);
          var f = Sh();
          b.flags |= 1;
          "object" === typeof e && null !== e && "function" === typeof e.render && void 0 === e.$$typeof ? (b.tag = 1, b.memoizedState = null, b.updateQueue = null, Zf(d) ? (f = true, cg(b)) : f = false, b.memoizedState = null !== e.state && void 0 !== e.state ? e.state : null, kh(b), e.updater = Ei, b.stateNode = e, e._reactInternals = b, Ii(b, d, a, c), b = jj(null, b, d, true, f, c)) : (b.tag = 0, I && f && vg(b), Xi(null, b, e, c), b = b.child);
          return b;
        case 16:
          d = b.elementType;
          a: {
            ij(a, b);
            a = b.pendingProps;
            e = d._init;
            d = e(d._payload);
            b.type = d;
            e = b.tag = Zk(d);
            a = Ci(d, a);
            switch (e) {
              case 0:
                b = cj(null, b, d, a, c);
                break a;
              case 1:
                b = hj(null, b, d, a, c);
                break a;
              case 11:
                b = Yi(null, b, d, a, c);
                break a;
              case 14:
                b = $i(null, b, d, Ci(d.type, a), c);
                break a;
            }
            throw Error(p(
              306,
              d,
              ""
            ));
          }
          return b;
        case 0:
          return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Ci(d, e), cj(a, b, d, e, c);
        case 1:
          return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Ci(d, e), hj(a, b, d, e, c);
        case 3:
          a: {
            kj(b);
            if (null === a) throw Error(p(387));
            d = b.pendingProps;
            f = b.memoizedState;
            e = f.element;
            lh(a, b);
            qh(b, d, null, c);
            var g = b.memoizedState;
            d = g.element;
            if (f.isDehydrated) if (f = { element: d, isDehydrated: false, cache: g.cache, pendingSuspenseBoundaries: g.pendingSuspenseBoundaries, transitions: g.transitions }, b.updateQueue.baseState = f, b.memoizedState = f, b.flags & 256) {
              e = Ji(Error(p(423)), b);
              b = lj(a, b, d, c, e);
              break a;
            } else if (d !== e) {
              e = Ji(Error(p(424)), b);
              b = lj(a, b, d, c, e);
              break a;
            } else for (yg = Lf(b.stateNode.containerInfo.firstChild), xg = b, I = true, zg = null, c = Vg(b, null, d, c), b.child = c; c; ) c.flags = c.flags & -3 | 4096, c = c.sibling;
            else {
              Ig();
              if (d === e) {
                b = Zi(a, b, c);
                break a;
              }
              Xi(a, b, d, c);
            }
            b = b.child;
          }
          return b;
        case 5:
          return Ah(b), null === a && Eg(b), d = b.type, e = b.pendingProps, f = null !== a ? a.memoizedProps : null, g = e.children, Ef(d, e) ? g = null : null !== f && Ef(d, f) && (b.flags |= 32), gj(a, b), Xi(a, b, g, c), b.child;
        case 6:
          return null === a && Eg(b), null;
        case 13:
          return oj(a, b, c);
        case 4:
          return yh(b, b.stateNode.containerInfo), d = b.pendingProps, null === a ? b.child = Ug(b, null, d, c) : Xi(a, b, d, c), b.child;
        case 11:
          return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Ci(d, e), Yi(a, b, d, e, c);
        case 7:
          return Xi(a, b, b.pendingProps, c), b.child;
        case 8:
          return Xi(a, b, b.pendingProps.children, c), b.child;
        case 12:
          return Xi(a, b, b.pendingProps.children, c), b.child;
        case 10:
          a: {
            d = b.type._context;
            e = b.pendingProps;
            f = b.memoizedProps;
            g = e.value;
            G(Wg, d._currentValue);
            d._currentValue = g;
            if (null !== f) if (He(f.value, g)) {
              if (f.children === e.children && !Wf.current) {
                b = Zi(a, b, c);
                break a;
              }
            } else for (f = b.child, null !== f && (f.return = b); null !== f; ) {
              var h = f.dependencies;
              if (null !== h) {
                g = f.child;
                for (var k = h.firstContext; null !== k; ) {
                  if (k.context === d) {
                    if (1 === f.tag) {
                      k = mh(-1, c & -c);
                      k.tag = 2;
                      var l = f.updateQueue;
                      if (null !== l) {
                        l = l.shared;
                        var m = l.pending;
                        null === m ? k.next = k : (k.next = m.next, m.next = k);
                        l.pending = k;
                      }
                    }
                    f.lanes |= c;
                    k = f.alternate;
                    null !== k && (k.lanes |= c);
                    bh(
                      f.return,
                      c,
                      b
                    );
                    h.lanes |= c;
                    break;
                  }
                  k = k.next;
                }
              } else if (10 === f.tag) g = f.type === b.type ? null : f.child;
              else if (18 === f.tag) {
                g = f.return;
                if (null === g) throw Error(p(341));
                g.lanes |= c;
                h = g.alternate;
                null !== h && (h.lanes |= c);
                bh(g, c, b);
                g = f.sibling;
              } else g = f.child;
              if (null !== g) g.return = f;
              else for (g = f; null !== g; ) {
                if (g === b) {
                  g = null;
                  break;
                }
                f = g.sibling;
                if (null !== f) {
                  f.return = g.return;
                  g = f;
                  break;
                }
                g = g.return;
              }
              f = g;
            }
            Xi(a, b, e.children, c);
            b = b.child;
          }
          return b;
        case 9:
          return e = b.type, d = b.pendingProps.children, ch(b, c), e = eh(e), d = d(e), b.flags |= 1, Xi(a, b, d, c), b.child;
        case 14:
          return d = b.type, e = Ci(d, b.pendingProps), e = Ci(d.type, e), $i(a, b, d, e, c);
        case 15:
          return bj(a, b, b.type, b.pendingProps, c);
        case 17:
          return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Ci(d, e), ij(a, b), b.tag = 1, Zf(d) ? (a = true, cg(b)) : a = false, ch(b, c), Gi(b, d, e), Ii(b, d, e, c), jj(null, b, d, true, a, c);
        case 19:
          return xj(a, b, c);
        case 22:
          return dj(a, b, c);
      }
      throw Error(p(156, b.tag));
    };
    function Fk(a, b) {
      return ac(a, b);
    }
    function $k(a, b, c, d) {
      this.tag = a;
      this.key = c;
      this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
      this.index = 0;
      this.ref = null;
      this.pendingProps = b;
      this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
      this.mode = d;
      this.subtreeFlags = this.flags = 0;
      this.deletions = null;
      this.childLanes = this.lanes = 0;
      this.alternate = null;
    }
    function Bg(a, b, c, d) {
      return new $k(a, b, c, d);
    }
    function aj(a) {
      a = a.prototype;
      return !(!a || !a.isReactComponent);
    }
    function Zk(a) {
      if ("function" === typeof a) return aj(a) ? 1 : 0;
      if (void 0 !== a && null !== a) {
        a = a.$$typeof;
        if (a === Da) return 11;
        if (a === Ga) return 14;
      }
      return 2;
    }
    function Pg(a, b) {
      var c = a.alternate;
      null === c ? (c = Bg(a.tag, b, a.key, a.mode), c.elementType = a.elementType, c.type = a.type, c.stateNode = a.stateNode, c.alternate = a, a.alternate = c) : (c.pendingProps = b, c.type = a.type, c.flags = 0, c.subtreeFlags = 0, c.deletions = null);
      c.flags = a.flags & 14680064;
      c.childLanes = a.childLanes;
      c.lanes = a.lanes;
      c.child = a.child;
      c.memoizedProps = a.memoizedProps;
      c.memoizedState = a.memoizedState;
      c.updateQueue = a.updateQueue;
      b = a.dependencies;
      c.dependencies = null === b ? null : { lanes: b.lanes, firstContext: b.firstContext };
      c.sibling = a.sibling;
      c.index = a.index;
      c.ref = a.ref;
      return c;
    }
    function Rg(a, b, c, d, e, f) {
      var g = 2;
      d = a;
      if ("function" === typeof a) aj(a) && (g = 1);
      else if ("string" === typeof a) g = 5;
      else a: switch (a) {
        case ya:
          return Tg(c.children, e, f, b);
        case za:
          g = 8;
          e |= 8;
          break;
        case Aa:
          return a = Bg(12, c, b, e | 2), a.elementType = Aa, a.lanes = f, a;
        case Ea:
          return a = Bg(13, c, b, e), a.elementType = Ea, a.lanes = f, a;
        case Fa:
          return a = Bg(19, c, b, e), a.elementType = Fa, a.lanes = f, a;
        case Ia:
          return pj(c, e, f, b);
        default:
          if ("object" === typeof a && null !== a) switch (a.$$typeof) {
            case Ba:
              g = 10;
              break a;
            case Ca:
              g = 9;
              break a;
            case Da:
              g = 11;
              break a;
            case Ga:
              g = 14;
              break a;
            case Ha:
              g = 16;
              d = null;
              break a;
          }
          throw Error(p(130, null == a ? a : typeof a, ""));
      }
      b = Bg(g, c, b, e);
      b.elementType = a;
      b.type = d;
      b.lanes = f;
      return b;
    }
    function Tg(a, b, c, d) {
      a = Bg(7, a, d, b);
      a.lanes = c;
      return a;
    }
    function pj(a, b, c, d) {
      a = Bg(22, a, d, b);
      a.elementType = Ia;
      a.lanes = c;
      a.stateNode = { isHidden: false };
      return a;
    }
    function Qg(a, b, c) {
      a = Bg(6, a, null, b);
      a.lanes = c;
      return a;
    }
    function Sg(a, b, c) {
      b = Bg(4, null !== a.children ? a.children : [], a.key, b);
      b.lanes = c;
      b.stateNode = { containerInfo: a.containerInfo, pendingChildren: null, implementation: a.implementation };
      return b;
    }
    function al(a, b, c, d, e) {
      this.tag = b;
      this.containerInfo = a;
      this.finishedWork = this.pingCache = this.current = this.pendingChildren = null;
      this.timeoutHandle = -1;
      this.callbackNode = this.pendingContext = this.context = null;
      this.callbackPriority = 0;
      this.eventTimes = zc(0);
      this.expirationTimes = zc(-1);
      this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0;
      this.entanglements = zc(0);
      this.identifierPrefix = d;
      this.onRecoverableError = e;
      this.mutableSourceEagerHydrationData = null;
    }
    function bl(a, b, c, d, e, f, g, h, k) {
      a = new al(a, b, c, h, k);
      1 === b ? (b = 1, true === f && (b |= 8)) : b = 0;
      f = Bg(3, null, null, b);
      a.current = f;
      f.stateNode = a;
      f.memoizedState = { element: d, isDehydrated: c, cache: null, transitions: null, pendingSuspenseBoundaries: null };
      kh(f);
      return a;
    }
    function cl(a, b, c) {
      var d = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
      return { $$typeof: wa, key: null == d ? null : "" + d, children: a, containerInfo: b, implementation: c };
    }
    function dl(a) {
      if (!a) return Vf;
      a = a._reactInternals;
      a: {
        if (Vb(a) !== a || 1 !== a.tag) throw Error(p(170));
        var b = a;
        do {
          switch (b.tag) {
            case 3:
              b = b.stateNode.context;
              break a;
            case 1:
              if (Zf(b.type)) {
                b = b.stateNode.__reactInternalMemoizedMergedChildContext;
                break a;
              }
          }
          b = b.return;
        } while (null !== b);
        throw Error(p(171));
      }
      if (1 === a.tag) {
        var c = a.type;
        if (Zf(c)) return bg(a, c, b);
      }
      return b;
    }
    function el(a, b, c, d, e, f, g, h, k) {
      a = bl(c, d, true, a, e, f, g, h, k);
      a.context = dl(null);
      c = a.current;
      d = R();
      e = yi(c);
      f = mh(d, e);
      f.callback = void 0 !== b && null !== b ? b : null;
      nh(c, f, e);
      a.current.lanes = e;
      Ac(a, e, d);
      Dk(a, d);
      return a;
    }
    function fl(a, b, c, d) {
      var e = b.current, f = R(), g = yi(e);
      c = dl(c);
      null === b.context ? b.context = c : b.pendingContext = c;
      b = mh(f, g);
      b.payload = { element: a };
      d = void 0 === d ? null : d;
      null !== d && (b.callback = d);
      a = nh(e, b, g);
      null !== a && (gi(a, e, g, f), oh(a, e, g));
      return g;
    }
    function gl(a) {
      a = a.current;
      if (!a.child) return null;
      switch (a.child.tag) {
        case 5:
          return a.child.stateNode;
        default:
          return a.child.stateNode;
      }
    }
    function hl(a, b) {
      a = a.memoizedState;
      if (null !== a && null !== a.dehydrated) {
        var c = a.retryLane;
        a.retryLane = 0 !== c && c < b ? c : b;
      }
    }
    function il(a, b) {
      hl(a, b);
      (a = a.alternate) && hl(a, b);
    }
    function jl() {
      return null;
    }
    var kl = "function" === typeof reportError ? reportError : function(a) {
      console.error(a);
    };
    function ll(a) {
      this._internalRoot = a;
    }
    ml.prototype.render = ll.prototype.render = function(a) {
      var b = this._internalRoot;
      if (null === b) throw Error(p(409));
      fl(a, b, null, null);
    };
    ml.prototype.unmount = ll.prototype.unmount = function() {
      var a = this._internalRoot;
      if (null !== a) {
        this._internalRoot = null;
        var b = a.containerInfo;
        Rk(function() {
          fl(null, a, null, null);
        });
        b[uf] = null;
      }
    };
    function ml(a) {
      this._internalRoot = a;
    }
    ml.prototype.unstable_scheduleHydration = function(a) {
      if (a) {
        var b = Hc();
        a = { blockedOn: null, target: a, priority: b };
        for (var c = 0; c < Qc.length && 0 !== b && b < Qc[c].priority; c++) ;
        Qc.splice(c, 0, a);
        0 === c && Vc(a);
      }
    };
    function nl(a) {
      return !(!a || 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType);
    }
    function ol(a) {
      return !(!a || 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType && (8 !== a.nodeType || " react-mount-point-unstable " !== a.nodeValue));
    }
    function pl() {
    }
    function ql(a, b, c, d, e) {
      if (e) {
        if ("function" === typeof d) {
          var f = d;
          d = function() {
            var a2 = gl(g);
            f.call(a2);
          };
        }
        var g = el(b, d, a, 0, null, false, false, "", pl);
        a._reactRootContainer = g;
        a[uf] = g.current;
        sf(8 === a.nodeType ? a.parentNode : a);
        Rk();
        return g;
      }
      for (; e = a.lastChild; ) a.removeChild(e);
      if ("function" === typeof d) {
        var h = d;
        d = function() {
          var a2 = gl(k);
          h.call(a2);
        };
      }
      var k = bl(a, 0, false, null, null, false, false, "", pl);
      a._reactRootContainer = k;
      a[uf] = k.current;
      sf(8 === a.nodeType ? a.parentNode : a);
      Rk(function() {
        fl(b, k, c, d);
      });
      return k;
    }
    function rl(a, b, c, d, e) {
      var f = c._reactRootContainer;
      if (f) {
        var g = f;
        if ("function" === typeof e) {
          var h = e;
          e = function() {
            var a2 = gl(g);
            h.call(a2);
          };
        }
        fl(b, g, a, e);
      } else g = ql(c, b, a, e, d);
      return gl(g);
    }
    Ec = function(a) {
      switch (a.tag) {
        case 3:
          var b = a.stateNode;
          if (b.current.memoizedState.isDehydrated) {
            var c = tc(b.pendingLanes);
            0 !== c && (Cc(b, c | 1), Dk(b, B()), 0 === (K & 6) && (Gj = B() + 500, jg()));
          }
          break;
        case 13:
          Rk(function() {
            var b2 = ih(a, 1);
            if (null !== b2) {
              var c2 = R();
              gi(b2, a, 1, c2);
            }
          }), il(a, 1);
      }
    };
    Fc = function(a) {
      if (13 === a.tag) {
        var b = ih(a, 134217728);
        if (null !== b) {
          var c = R();
          gi(b, a, 134217728, c);
        }
        il(a, 134217728);
      }
    };
    Gc = function(a) {
      if (13 === a.tag) {
        var b = yi(a), c = ih(a, b);
        if (null !== c) {
          var d = R();
          gi(c, a, b, d);
        }
        il(a, b);
      }
    };
    Hc = function() {
      return C;
    };
    Ic = function(a, b) {
      var c = C;
      try {
        return C = a, b();
      } finally {
        C = c;
      }
    };
    yb = function(a, b, c) {
      switch (b) {
        case "input":
          bb(a, c);
          b = c.name;
          if ("radio" === c.type && null != b) {
            for (c = a; c.parentNode; ) c = c.parentNode;
            c = c.querySelectorAll("input[name=" + JSON.stringify("" + b) + '][type="radio"]');
            for (b = 0; b < c.length; b++) {
              var d = c[b];
              if (d !== a && d.form === a.form) {
                var e = Db(d);
                if (!e) throw Error(p(90));
                Wa(d);
                bb(d, e);
              }
            }
          }
          break;
        case "textarea":
          ib(a, c);
          break;
        case "select":
          b = c.value, null != b && fb(a, !!c.multiple, b, false);
      }
    };
    Gb = Qk;
    Hb = Rk;
    var sl = { usingClientEntryPoint: false, Events: [Cb, ue, Db, Eb, Fb, Qk] };
    var tl = { findFiberByHostInstance: Wc, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" };
    var ul = { bundleType: tl.bundleType, version: tl.version, rendererPackageName: tl.rendererPackageName, rendererConfig: tl.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ua.ReactCurrentDispatcher, findHostInstanceByFiber: function(a) {
      a = Zb(a);
      return null === a ? null : a.stateNode;
    }, findFiberByHostInstance: tl.findFiberByHostInstance || jl, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
    if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
      vl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (!vl.isDisabled && vl.supportsFiber) try {
        kc = vl.inject(ul), lc = vl;
      } catch (a) {
      }
    }
    var vl;
    exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = sl;
    exports.createPortal = function(a, b) {
      var c = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
      if (!nl(b)) throw Error(p(200));
      return cl(a, b, null, c);
    };
    exports.createRoot = function(a, b) {
      if (!nl(a)) throw Error(p(299));
      var c = false, d = "", e = kl;
      null !== b && void 0 !== b && (true === b.unstable_strictMode && (c = true), void 0 !== b.identifierPrefix && (d = b.identifierPrefix), void 0 !== b.onRecoverableError && (e = b.onRecoverableError));
      b = bl(a, 1, false, null, null, c, false, d, e);
      a[uf] = b.current;
      sf(8 === a.nodeType ? a.parentNode : a);
      return new ll(b);
    };
    exports.findDOMNode = function(a) {
      if (null == a) return null;
      if (1 === a.nodeType) return a;
      var b = a._reactInternals;
      if (void 0 === b) {
        if ("function" === typeof a.render) throw Error(p(188));
        a = Object.keys(a).join(",");
        throw Error(p(268, a));
      }
      a = Zb(b);
      a = null === a ? null : a.stateNode;
      return a;
    };
    exports.flushSync = function(a) {
      return Rk(a);
    };
    exports.hydrate = function(a, b, c) {
      if (!ol(b)) throw Error(p(200));
      return rl(null, a, b, true, c);
    };
    exports.hydrateRoot = function(a, b, c) {
      if (!nl(a)) throw Error(p(405));
      var d = null != c && c.hydratedSources || null, e = false, f = "", g = kl;
      null !== c && void 0 !== c && (true === c.unstable_strictMode && (e = true), void 0 !== c.identifierPrefix && (f = c.identifierPrefix), void 0 !== c.onRecoverableError && (g = c.onRecoverableError));
      b = el(b, null, a, 1, null != c ? c : null, e, false, f, g);
      a[uf] = b.current;
      sf(a);
      if (d) for (a = 0; a < d.length; a++) c = d[a], e = c._getVersion, e = e(c._source), null == b.mutableSourceEagerHydrationData ? b.mutableSourceEagerHydrationData = [c, e] : b.mutableSourceEagerHydrationData.push(
        c,
        e
      );
      return new ml(b);
    };
    exports.render = function(a, b, c) {
      if (!ol(b)) throw Error(p(200));
      return rl(null, a, b, false, c);
    };
    exports.unmountComponentAtNode = function(a) {
      if (!ol(a)) throw Error(p(40));
      return a._reactRootContainer ? (Rk(function() {
        rl(null, null, a, false, function() {
          a._reactRootContainer = null;
          a[uf] = null;
        });
      }), true) : false;
    };
    exports.unstable_batchedUpdates = Qk;
    exports.unstable_renderSubtreeIntoContainer = function(a, b, c, d) {
      if (!ol(c)) throw Error(p(200));
      if (null == a || void 0 === a._reactInternals) throw Error(p(38));
      return rl(a, b, c, false, d);
    };
    exports.version = "18.3.1-next-f1338f8080-20240426";
  }
});

// node_modules/react-dom/index.js
var require_react_dom = __commonJS({
  "node_modules/react-dom/index.js"(exports, module) {
    "use strict";
    function checkDCE() {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== "function") {
        return;
      }
      if (false) {
        throw new Error("^_^");
      }
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
      } catch (err) {
        console.error(err);
      }
    }
    if (true) {
      checkDCE();
      module.exports = require_react_dom_production_min();
    } else {
      module.exports = null;
    }
  }
});

// node_modules/react-dom/client.js
var require_client = __commonJS({
  "node_modules/react-dom/client.js"(exports) {
    "use strict";
    var m = require_react_dom();
    if (true) {
      exports.createRoot = m.createRoot;
      exports.hydrateRoot = m.hydrateRoot;
    } else {
      i = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
      exports.createRoot = function(c, o) {
        i.usingClientEntryPoint = true;
        try {
          return m.createRoot(c, o);
        } finally {
          i.usingClientEntryPoint = false;
        }
      };
      exports.hydrateRoot = function(c, h, o) {
        i.usingClientEntryPoint = true;
        try {
          return m.hydrateRoot(c, h, o);
        } finally {
          i.usingClientEntryPoint = false;
        }
      };
    }
    var i;
  }
});

// node_modules/react/cjs/react-jsx-runtime.production.min.js
var require_react_jsx_runtime_production_min = __commonJS({
  "node_modules/react/cjs/react-jsx-runtime.production.min.js"(exports) {
    "use strict";
    var f = require_react();
    var k = Symbol.for("react.element");
    var l = Symbol.for("react.fragment");
    var m = Object.prototype.hasOwnProperty;
    var n = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner;
    var p = { key: true, ref: true, __self: true, __source: true };
    function q(c, a, g) {
      var b, d = {}, e = null, h = null;
      void 0 !== g && (e = "" + g);
      void 0 !== a.key && (e = "" + a.key);
      void 0 !== a.ref && (h = a.ref);
      for (b in a) m.call(a, b) && !p.hasOwnProperty(b) && (d[b] = a[b]);
      if (c && c.defaultProps) for (b in a = c.defaultProps, a) void 0 === d[b] && (d[b] = a[b]);
      return { $$typeof: k, type: c, key: e, ref: h, props: d, _owner: n.current };
    }
    exports.Fragment = l;
    exports.jsx = q;
    exports.jsxs = q;
  }
});

// node_modules/react/jsx-runtime.js
var require_jsx_runtime = __commonJS({
  "node_modules/react/jsx-runtime.js"(exports, module) {
    "use strict";
    if (true) {
      module.exports = require_react_jsx_runtime_production_min();
    } else {
      module.exports = null;
    }
  }
});

// src/app.tsx
var import_react12 = __toESM(require_react(), 1);
var import_client = __toESM(require_client(), 1);

// node_modules/lucide-react/dist/esm/createLucideIcon.js
var import_react2 = __toESM(require_react());

// node_modules/lucide-react/dist/esm/shared/src/utils.js
var toKebabCase = (string) => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
var mergeClasses = (...classes) => classes.filter((className, index2, array) => {
  return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index2;
}).join(" ").trim();

// node_modules/lucide-react/dist/esm/Icon.js
var import_react = __toESM(require_react());

// node_modules/lucide-react/dist/esm/defaultAttributes.js
var defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};

// node_modules/lucide-react/dist/esm/Icon.js
var Icon = (0, import_react.forwardRef)(
  ({
    color = "currentColor",
    size: size4 = 24,
    strokeWidth = 2,
    absoluteStrokeWidth,
    className = "",
    children,
    iconNode,
    ...rest
  }, ref) => {
    return (0, import_react.createElement)(
      "svg",
      {
        ref,
        ...defaultAttributes,
        width: size4,
        height: size4,
        stroke: color,
        strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size4) : strokeWidth,
        className: mergeClasses("lucide", className),
        ...rest
      },
      [
        ...iconNode.map(([tag, attrs]) => (0, import_react.createElement)(tag, attrs)),
        ...Array.isArray(children) ? children : [children]
      ]
    );
  }
);

// node_modules/lucide-react/dist/esm/createLucideIcon.js
var createLucideIcon = (iconName, iconNode) => {
  const Component = (0, import_react2.forwardRef)(
    ({ className, ...props }, ref) => (0, import_react2.createElement)(Icon, {
      ref,
      iconNode,
      className: mergeClasses(`lucide-${toKebabCase(iconName)}`, className),
      ...props
    })
  );
  Component.displayName = `${iconName}`;
  return Component;
};

// node_modules/lucide-react/dist/esm/icons/arrow-down.js
var ArrowDown = createLucideIcon("ArrowDown", [
  ["path", { d: "M12 5v14", key: "s699le" }],
  ["path", { d: "m19 12-7 7-7-7", key: "1idqje" }]
]);

// node_modules/lucide-react/dist/esm/icons/arrow-left.js
var ArrowLeft = createLucideIcon("ArrowLeft", [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
]);

// node_modules/lucide-react/dist/esm/icons/arrow-right.js
var ArrowRight = createLucideIcon("ArrowRight", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
]);

// node_modules/lucide-react/dist/esm/icons/arrow-up-right.js
var ArrowUpRight = createLucideIcon("ArrowUpRight", [
  ["path", { d: "M7 7h10v10", key: "1tivn9" }],
  ["path", { d: "M7 17 17 7", key: "1vkiza" }]
]);

// node_modules/lucide-react/dist/esm/icons/arrow-up.js
var ArrowUp = createLucideIcon("ArrowUp", [
  ["path", { d: "m5 12 7-7 7 7", key: "hav0vg" }],
  ["path", { d: "M12 19V5", key: "x0mq9r" }]
]);

// node_modules/lucide-react/dist/esm/icons/bell.js
var Bell = createLucideIcon("Bell", [
  ["path", { d: "M10.268 21a2 2 0 0 0 3.464 0", key: "vwvbt9" }],
  [
    "path",
    {
      d: "M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",
      key: "11g9vi"
    }
  ]
]);

// node_modules/lucide-react/dist/esm/icons/bookmark.js
var Bookmark = createLucideIcon("Bookmark", [
  ["path", { d: "m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z", key: "1fy3hk" }]
]);

// node_modules/lucide-react/dist/esm/icons/briefcase-business.js
var BriefcaseBusiness = createLucideIcon("BriefcaseBusiness", [
  ["path", { d: "M12 12h.01", key: "1mp3jc" }],
  ["path", { d: "M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2", key: "1ksdt3" }],
  ["path", { d: "M22 13a18.15 18.15 0 0 1-20 0", key: "12hx5q" }],
  ["rect", { width: "20", height: "14", x: "2", y: "6", rx: "2", key: "i6l2r4" }]
]);

// node_modules/lucide-react/dist/esm/icons/calendar-days.js
var CalendarDays = createLucideIcon("CalendarDays", [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
  ["path", { d: "M3 10h18", key: "8toen8" }],
  ["path", { d: "M8 14h.01", key: "6423bh" }],
  ["path", { d: "M12 14h.01", key: "1etili" }],
  ["path", { d: "M16 14h.01", key: "1gbofw" }],
  ["path", { d: "M8 18h.01", key: "lrp35t" }],
  ["path", { d: "M12 18h.01", key: "mhygvu" }],
  ["path", { d: "M16 18h.01", key: "kzsmim" }]
]);

// node_modules/lucide-react/dist/esm/icons/check.js
var Check = createLucideIcon("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);

// node_modules/lucide-react/dist/esm/icons/chevron-down.js
var ChevronDown = createLucideIcon("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]);

// node_modules/lucide-react/dist/esm/icons/chevron-left.js
var ChevronLeft = createLucideIcon("ChevronLeft", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]
]);

// node_modules/lucide-react/dist/esm/icons/chevron-right.js
var ChevronRight = createLucideIcon("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);

// node_modules/lucide-react/dist/esm/icons/chevron-up.js
var ChevronUp = createLucideIcon("ChevronUp", [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]]);

// node_modules/lucide-react/dist/esm/icons/circle-alert.js
var CircleAlert = createLucideIcon("CircleAlert", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }]
]);

// node_modules/lucide-react/dist/esm/icons/clock-3.js
var Clock3 = createLucideIcon("Clock3", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 16.5 12", key: "1aq6pp" }]
]);

// node_modules/lucide-react/dist/esm/icons/clock.js
var Clock = createLucideIcon("Clock", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }]
]);

// node_modules/lucide-react/dist/esm/icons/download.js
var Download = createLucideIcon("Download", [
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["polyline", { points: "7 10 12 15 17 10", key: "2ggqvy" }],
  ["line", { x1: "12", x2: "12", y1: "15", y2: "3", key: "1vk2je" }]
]);

// node_modules/lucide-react/dist/esm/icons/ellipsis.js
var Ellipsis = createLucideIcon("Ellipsis", [
  ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
  ["circle", { cx: "19", cy: "12", r: "1", key: "1wjl8i" }],
  ["circle", { cx: "5", cy: "12", r: "1", key: "1pcz8c" }]
]);

// node_modules/lucide-react/dist/esm/icons/eye-off.js
var EyeOff = createLucideIcon("EyeOff", [
  [
    "path",
    {
      d: "M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",
      key: "ct8e1f"
    }
  ],
  ["path", { d: "M14.084 14.158a3 3 0 0 1-4.242-4.242", key: "151rxh" }],
  [
    "path",
    {
      d: "M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",
      key: "13bj9a"
    }
  ],
  ["path", { d: "m2 2 20 20", key: "1ooewy" }]
]);

// node_modules/lucide-react/dist/esm/icons/eye.js
var Eye = createLucideIcon("Eye", [
  [
    "path",
    {
      d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
      key: "1nclc0"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
]);

// node_modules/lucide-react/dist/esm/icons/file-archive.js
var FileArchive = createLucideIcon("FileArchive", [
  ["path", { d: "M10 12v-1", key: "v7bkov" }],
  ["path", { d: "M10 18v-2", key: "1cjy8d" }],
  ["path", { d: "M10 7V6", key: "dljcrl" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  [
    "path",
    { d: "M15.5 22H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v16a2 2 0 0 0 .274 1.01", key: "gkbcor" }
  ],
  ["circle", { cx: "10", cy: "20", r: "2", key: "1xzdoj" }]
]);

// node_modules/lucide-react/dist/esm/icons/file-image.js
var FileImage = createLucideIcon("FileImage", [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["circle", { cx: "10", cy: "12", r: "2", key: "737tya" }],
  ["path", { d: "m20 17-1.296-1.296a2.41 2.41 0 0 0-3.408 0L9 22", key: "wt3hpn" }]
]);

// node_modules/lucide-react/dist/esm/icons/file-spreadsheet.js
var FileSpreadsheet = createLucideIcon("FileSpreadsheet", [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "M8 13h2", key: "yr2amv" }],
  ["path", { d: "M14 13h2", key: "un5t4a" }],
  ["path", { d: "M8 17h2", key: "2yhykz" }],
  ["path", { d: "M14 17h2", key: "10kma7" }]
]);

// node_modules/lucide-react/dist/esm/icons/file-text.js
var FileText = createLucideIcon("FileText", [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "M10 9H8", key: "b1mrlr" }],
  ["path", { d: "M16 13H8", key: "t4e002" }],
  ["path", { d: "M16 17H8", key: "z1uh3a" }]
]);

// node_modules/lucide-react/dist/esm/icons/file.js
var File = createLucideIcon("File", [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }]
]);

// node_modules/lucide-react/dist/esm/icons/graduation-cap.js
var GraduationCap = createLucideIcon("GraduationCap", [
  [
    "path",
    {
      d: "M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",
      key: "j76jl0"
    }
  ],
  ["path", { d: "M22 10v6", key: "1lu8f3" }],
  ["path", { d: "M6 12.5V16a6 3 0 0 0 12 0v-3.5", key: "1r8lef" }]
]);

// node_modules/lucide-react/dist/esm/icons/info.js
var Info = createLucideIcon("Info", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
]);

// node_modules/lucide-react/dist/esm/icons/loader-circle.js
var LoaderCircle = createLucideIcon("LoaderCircle", [
  ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]
]);

// node_modules/lucide-react/dist/esm/icons/map-pin.js
var MapPin = createLucideIcon("MapPin", [
  [
    "path",
    {
      d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
      key: "1r0f0z"
    }
  ],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }]
]);

// node_modules/lucide-react/dist/esm/icons/message-circle-more.js
var MessageCircleMore = createLucideIcon("MessageCircleMore", [
  ["path", { d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z", key: "vv11sd" }],
  ["path", { d: "M8 12h.01", key: "czm47f" }],
  ["path", { d: "M12 12h.01", key: "1mp3jc" }],
  ["path", { d: "M16 12h.01", key: "1l6xoz" }]
]);

// node_modules/lucide-react/dist/esm/icons/message-circle.js
var MessageCircle = createLucideIcon("MessageCircle", [
  ["path", { d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z", key: "vv11sd" }]
]);

// node_modules/lucide-react/dist/esm/icons/message-square.js
var MessageSquare = createLucideIcon("MessageSquare", [
  ["path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z", key: "1lielz" }]
]);

// node_modules/lucide-react/dist/esm/icons/paperclip.js
var Paperclip = createLucideIcon("Paperclip", [
  ["path", { d: "M13.234 20.252 21 12.3", key: "1cbrk9" }],
  [
    "path",
    {
      d: "m16 6-8.414 8.586a2 2 0 0 0 0 2.828 2 2 0 0 0 2.828 0l8.414-8.586a4 4 0 0 0 0-5.656 4 4 0 0 0-5.656 0l-8.415 8.585a6 6 0 1 0 8.486 8.486",
      key: "1pkts6"
    }
  ]
]);

// node_modules/lucide-react/dist/esm/icons/pencil.js
var Pencil = createLucideIcon("Pencil", [
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ],
  ["path", { d: "m15 5 4 4", key: "1mk7zo" }]
]);

// node_modules/lucide-react/dist/esm/icons/rotate-ccw.js
var RotateCcw = createLucideIcon("RotateCcw", [
  ["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" }],
  ["path", { d: "M3 3v5h5", key: "1xhq8a" }]
]);

// node_modules/lucide-react/dist/esm/icons/search.js
var Search = createLucideIcon("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]);

// node_modules/lucide-react/dist/esm/icons/send-horizontal.js
var SendHorizontal = createLucideIcon("SendHorizontal", [
  [
    "path",
    {
      d: "M3.714 3.048a.498.498 0 0 0-.683.627l2.843 7.627a2 2 0 0 1 0 1.396l-2.842 7.627a.498.498 0 0 0 .682.627l18-8.5a.5.5 0 0 0 0-.904z",
      key: "117uat"
    }
  ],
  ["path", { d: "M6 12h16", key: "s4cdu5" }]
]);

// node_modules/lucide-react/dist/esm/icons/smile.js
var Smile = createLucideIcon("Smile", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M8 14s1.5 2 4 2 4-2 4-2", key: "1y1vjs" }],
  ["line", { x1: "9", x2: "9.01", y1: "9", y2: "9", key: "yxxnd0" }],
  ["line", { x1: "15", x2: "15.01", y1: "9", y2: "9", key: "1p4y9e" }]
]);

// node_modules/lucide-react/dist/esm/icons/star.js
var Star = createLucideIcon("Star", [
  [
    "path",
    {
      d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
      key: "r04s7s"
    }
  ]
]);

// node_modules/lucide-react/dist/esm/icons/trash-2.js
var Trash2 = createLucideIcon("Trash2", [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }],
  ["line", { x1: "10", x2: "10", y1: "11", y2: "17", key: "1uufr5" }],
  ["line", { x1: "14", x2: "14", y1: "11", y2: "17", key: "xtxkd" }]
]);

// node_modules/lucide-react/dist/esm/icons/users-round.js
var UsersRound = createLucideIcon("UsersRound", [
  ["path", { d: "M18 21a8 8 0 0 0-16 0", key: "3ypg7q" }],
  ["circle", { cx: "10", cy: "8", r: "5", key: "o932ke" }],
  ["path", { d: "M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3", key: "10s06x" }]
]);

// node_modules/lucide-react/dist/esm/icons/x.js
var X = createLucideIcon("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);

// src/ui.tsx
var import_react5 = __toESM(require_react(), 1);

// src/assets/default-avatar-1.webp
var default_avatar_1_default = "data:image/webp;base64,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";

// src/assets/default-avatar-2.webp
var default_avatar_2_default = "data:image/webp;base64,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";

// src/assets/default-avatar-3.webp
var default_avatar_3_default = "data:image/webp;base64,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";

// src/assets/default-avatar-4.webp
var default_avatar_4_default = "data:image/webp;base64,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";

// src/assets/default-avatar-5.webp
var default_avatar_5_default = "data:image/webp;base64,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";

// src/assets/default-avatar-6.webp
var default_avatar_6_default = "data:image/webp;base64,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";

// src/avatar-policy.ts
var DEFAULT_AVATAR_COUNT = 6;
function normalizeAvatarSelection(value) {
  if (value?.kind === "uploaded" && value.url.trim()) return { ...value, url: value.url.trim() };
  const index2 = value?.kind === "default" ? value.defaultIndex : 0;
  return { kind: "default", defaultIndex: Number.isInteger(index2) && index2 >= 0 && index2 < DEFAULT_AVATAR_COUNT ? index2 : 0 };
}

// src/default-avatars.ts
var DEFAULT_AVATARS = [default_avatar_1_default, default_avatar_2_default, default_avatar_3_default, default_avatar_4_default, default_avatar_5_default, default_avatar_6_default];
function avatarSource(value) {
  const avatar = normalizeAvatarSelection(value);
  return avatar.kind === "uploaded" ? avatar.url : DEFAULT_AVATARS[avatar.defaultIndex];
}

// node_modules/@radix-ui/react-dropdown-menu/dist/index.mjs
var React34 = __toESM(require_react(), 1);

// node_modules/@radix-ui/primitive/dist/index.mjs
var __defProp2 = Object.defineProperty;
var __name = (target, value) => __defProp2(target, "name", { value, configurable: true });
var canUseDOM = !!(typeof window !== "undefined" && window.document && window.document.createElement);
function composeEventHandlers(originalEventHandler, ourEventHandler, { checkForDefaultPrevented = true } = {}) {
  return /* @__PURE__ */ __name(function handleEvent(event) {
    originalEventHandler?.(event);
    if (checkForDefaultPrevented === false || !event || !event.defaultPrevented) {
      return ourEventHandler?.(event);
    }
  }, "handleEvent");
}
__name(composeEventHandlers, "composeEventHandlers");
function getOwnerWindow(element) {
  if (!canUseDOM) {
    throw new Error("Cannot access window outside of the DOM");
  }
  return element?.ownerDocument?.defaultView ?? window;
}
__name(getOwnerWindow, "getOwnerWindow");
function getOwnerDocument(element) {
  if (!canUseDOM) {
    throw new Error("Cannot access document outside of the DOM");
  }
  return element?.ownerDocument ?? document;
}
__name(getOwnerDocument, "getOwnerDocument");
function getActiveElement(node, activeDescendant = false) {
  const { activeElement } = getOwnerDocument(node);
  if (!activeElement?.nodeName) {
    return null;
  }
  if (isFrame(activeElement) && activeElement.contentDocument) {
    return getActiveElement(activeElement.contentDocument.body, activeDescendant);
  }
  if (activeDescendant) {
    const id = activeElement.getAttribute("aria-activedescendant");
    if (id) {
      const element = getOwnerDocument(activeElement).getElementById(id);
      if (element) {
        return element;
      }
    }
  }
  return activeElement;
}
__name(getActiveElement, "getActiveElement");
function isFrame(element) {
  return element.tagName === "IFRAME";
}
__name(isFrame, "isFrame");

// node_modules/@radix-ui/react-compose-refs/dist/index.mjs
var React = __toESM(require_react(), 1);
var __defProp3 = Object.defineProperty;
var __name2 = (target, value) => __defProp3(target, "name", { value, configurable: true });
function setRef(ref, value) {
  if (typeof ref === "function") {
    return ref(value);
  } else if (ref !== null && ref !== void 0) {
    ref.current = value;
  }
}
__name2(setRef, "setRef");
function composeRefs(...refs) {
  return (node) => {
    let hasCleanup = false;
    const cleanups = refs.map((ref) => {
      const cleanup = setRef(ref, node);
      if (!hasCleanup && typeof cleanup == "function") {
        hasCleanup = true;
      }
      return cleanup;
    });
    if (hasCleanup) {
      return () => {
        for (let i = 0; i < cleanups.length; i++) {
          const cleanup = cleanups[i];
          if (typeof cleanup == "function") {
            cleanup();
          } else {
            setRef(refs[i], null);
          }
        }
      };
    }
  };
}
__name2(composeRefs, "composeRefs");
function useComposedRefs(...refs) {
  return React.useCallback(composeRefs(...refs), refs);
}
__name2(useComposedRefs, "useComposedRefs");

// node_modules/@radix-ui/react-context/dist/index.mjs
var React2 = __toESM(require_react(), 1);
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var __defProp4 = Object.defineProperty;
var __name3 = (target, value) => __defProp4(target, "name", { value, configurable: true });
// @__NO_SIDE_EFFECTS__
function createContext2(rootComponentName, defaultContext) {
  const Context = React2.createContext(defaultContext);
  Context.displayName = rootComponentName + "Context";
  const Provider = /* @__PURE__ */ __name3((props) => {
    const { children, ...context } = props;
    const value = React2.useMemo(() => context, Object.values(context));
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Context.Provider, { value, children });
  }, "Provider");
  Provider.displayName = rootComponentName + "Provider";
  function useContext22(consumerName, options = {}) {
    const { optional = false } = options;
    const context = React2.useContext(Context);
    if (context) return context;
    if (defaultContext !== void 0) return defaultContext;
    if (optional) return void 0;
    throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``);
  }
  __name3(useContext22, "useContext");
  return [Provider, useContext22];
}
__name3(createContext2, "createContext");
// @__NO_SIDE_EFFECTS__
function createContextScope(scopeName, createContextScopeDeps = []) {
  let defaultContexts = [];
  function createContext32(rootComponentName, defaultContext) {
    const BaseContext = React2.createContext(defaultContext);
    BaseContext.displayName = rootComponentName + "Context";
    const index2 = defaultContexts.length;
    defaultContexts = [...defaultContexts, defaultContext];
    const Provider = /* @__PURE__ */ __name3((props) => {
      const { scope, children, ...context } = props;
      const Context = scope?.[scopeName]?.[index2] || BaseContext;
      const value = React2.useMemo(() => context, Object.values(context));
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Context.Provider, { value, children });
    }, "Provider");
    Provider.displayName = rootComponentName + "Provider";
    function useContext22(consumerName, scope, options = {}) {
      const { optional = false } = options;
      const Context = scope?.[scopeName]?.[index2] || BaseContext;
      const context = React2.useContext(Context);
      if (context) return context;
      if (defaultContext !== void 0) return defaultContext;
      if (optional) return void 0;
      throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``);
    }
    __name3(useContext22, "useContext");
    return [Provider, useContext22];
  }
  __name3(createContext32, "createContext");
  const createScope = /* @__PURE__ */ __name3(() => {
    const scopeContexts = defaultContexts.map((defaultContext) => {
      return React2.createContext(defaultContext);
    });
    return /* @__PURE__ */ __name3(function useScope(scope) {
      const contexts = scope?.[scopeName] || scopeContexts;
      return React2.useMemo(
        () => ({ [`__scope${scopeName}`]: { ...scope, [scopeName]: contexts } }),
        [scope, contexts]
      );
    }, "useScope");
  }, "createScope");
  createScope.scopeName = scopeName;
  return [createContext32, composeContextScopes(createScope, ...createContextScopeDeps)];
}
__name3(createContextScope, "createContextScope");
function composeContextScopes(...scopes) {
  const baseScope = scopes[0];
  if (scopes.length === 1) return baseScope;
  const createScope = /* @__PURE__ */ __name3(() => {
    const scopeHooks = scopes.map((createScope2) => ({
      useScope: createScope2(),
      scopeName: createScope2.scopeName
    }));
    return /* @__PURE__ */ __name3(function useComposedScopes(overrideScopes) {
      const nextScopes = scopeHooks.reduce((nextScopes2, { useScope, scopeName }) => {
        const scopeProps = useScope(overrideScopes);
        const currentScope = scopeProps[`__scope${scopeName}`];
        return { ...nextScopes2, ...currentScope };
      }, {});
      return React2.useMemo(() => ({ [`__scope${baseScope.scopeName}`]: nextScopes }), [nextScopes]);
    }, "useComposedScopes");
  }, "createScope");
  createScope.scopeName = baseScope.scopeName;
  return createScope;
}
__name3(composeContextScopes, "composeContextScopes");

// node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs
var React5 = __toESM(require_react(), 1);

// node_modules/@radix-ui/primitive/dist/internal/is-development.false.mjs
var IS_DEVELOPMENT = false;

// node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs
var React3 = __toESM(require_react(), 1);
var useLayoutEffect2 = globalThis?.document ? React3.useLayoutEffect : () => {
};

// node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs
var React22 = __toESM(require_react(), 1);

// node_modules/@radix-ui/react-use-effect-event/dist/index.mjs
var React4 = __toESM(require_react(), 1);
var __defProp5 = Object.defineProperty;
var __name4 = (target, value) => __defProp5(target, "name", { value, configurable: true });
var useReactEffectEvent = React4[" useEffectEvent ".trim().toString()];
var useReactInsertionEffect = React4[" useInsertionEffect ".trim().toString()];
function useEffectEvent(callback) {
  if (typeof useReactEffectEvent === "function") {
    return useReactEffectEvent(callback);
  }
  const ref = React4.useRef(() => {
    throw new Error("Cannot call an event handler while rendering.");
  });
  if (typeof useReactInsertionEffect === "function") {
    useReactInsertionEffect(() => {
      ref.current = callback;
    });
  } else {
    useLayoutEffect2(() => {
      ref.current = callback;
    });
  }
  return React4.useMemo(() => ((...args) => ref.current?.(...args)), []);
}
__name4(useEffectEvent, "useEffectEvent");

// node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs
var __defProp6 = Object.defineProperty;
var __name5 = (target, value) => __defProp6(target, "name", { value, configurable: true });
var useInsertionEffect = React5[" useInsertionEffect ".trim().toString()] || useLayoutEffect2;
function useControllableState({
  prop,
  defaultProp,
  onChange = /* @__PURE__ */ __name5(() => {
  }, "onChange"),
  caller
}) {
  const [uncontrolledProp, setUncontrolledProp, onChangeRef] = useUncontrolledState({
    defaultProp,
    onChange
  });
  const isControlled = prop !== void 0;
  const value = isControlled ? prop : uncontrolledProp;
  if (IS_DEVELOPMENT) {
    const isControlledRef = React5.useRef(prop !== void 0);
    React5.useEffect(() => {
      const wasControlled = isControlledRef.current;
      if (wasControlled !== isControlled) {
        const from = wasControlled ? "controlled" : "uncontrolled";
        const to = isControlled ? "controlled" : "uncontrolled";
        console.warn(
          `${caller} is changing from ${from} to ${to}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
        );
      }
      isControlledRef.current = isControlled;
    }, [isControlled, caller]);
  }
  const setValue = React5.useCallback(
    (nextValue) => {
      if (isControlled) {
        const value2 = isFunction(nextValue) ? nextValue(prop) : nextValue;
        if (value2 !== prop) {
          onChangeRef.current?.(value2);
        }
      } else {
        setUncontrolledProp(nextValue);
      }
    },
    [isControlled, prop, setUncontrolledProp, onChangeRef]
  );
  return [value, setValue];
}
__name5(useControllableState, "useControllableState");
function useUncontrolledState({
  defaultProp,
  onChange
}) {
  const [value, setValue] = React5.useState(defaultProp);
  const prevValueRef = React5.useRef(value);
  const onChangeRef = React5.useRef(onChange);
  useInsertionEffect(() => {
    onChangeRef.current = onChange;
  }, [onChange]);
  React5.useEffect(() => {
    if (prevValueRef.current !== value) {
      onChangeRef.current?.(value);
      prevValueRef.current = value;
    }
  }, [value, prevValueRef]);
  return [value, setValue, onChangeRef];
}
__name5(useUncontrolledState, "useUncontrolledState");
function isFunction(value) {
  return typeof value === "function";
}
__name5(isFunction, "isFunction");
var SYNC_STATE = Symbol("RADIX:SYNC_STATE");
function useControllableStateReducer(reducer, userArgs, initialArg, init) {
  const { prop: controlledState, defaultProp, onChange: onChangeProp, caller } = userArgs;
  const isControlled = controlledState !== void 0;
  const onChange = useEffectEvent(onChangeProp);
  if (IS_DEVELOPMENT) {
    const isControlledRef = React22.useRef(controlledState !== void 0);
    React22.useEffect(() => {
      const wasControlled = isControlledRef.current;
      if (wasControlled !== isControlled) {
        const from = wasControlled ? "controlled" : "uncontrolled";
        const to = isControlled ? "controlled" : "uncontrolled";
        console.warn(
          `${caller} is changing from ${from} to ${to}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
        );
      }
      isControlledRef.current = isControlled;
    }, [isControlled, caller]);
  }
  const args = [{ ...initialArg, state: defaultProp }];
  if (init) {
    args.push(init);
  }
  const [internalState, dispatch] = React22.useReducer(
    (state2, action) => {
      if (action.type === SYNC_STATE) {
        return { ...state2, state: action.state };
      }
      const next = reducer(state2, action);
      if (isControlled && !Object.is(next.state, state2.state)) {
        onChange(next.state);
      }
      return next;
    },
    ...args
  );
  const uncontrolledState = internalState.state;
  const prevValueRef = React22.useRef(uncontrolledState);
  React22.useEffect(() => {
    if (prevValueRef.current !== uncontrolledState) {
      prevValueRef.current = uncontrolledState;
      if (!isControlled) {
        onChange(uncontrolledState);
      }
    }
  }, [uncontrolledState, prevValueRef, isControlled]);
  const state = React22.useMemo(() => {
    const isControlled2 = controlledState !== void 0;
    if (isControlled2) {
      return { ...internalState, state: controlledState };
    }
    return internalState;
  }, [internalState, controlledState]);
  React22.useEffect(() => {
    if (isControlled && !Object.is(controlledState, internalState.state)) {
      dispatch({ type: SYNC_STATE, state: controlledState });
    }
  }, [controlledState, internalState.state, isControlled]);
  return [state, dispatch];
}
__name5(useControllableStateReducer, "useControllableStateReducer");

// node_modules/@radix-ui/react-primitive/dist/index.mjs
var React7 = __toESM(require_react(), 1);
var ReactDOM = __toESM(require_react_dom(), 1);

// node_modules/@radix-ui/react-slot/dist/index.mjs
var React6 = __toESM(require_react(), 1);
var __defProp7 = Object.defineProperty;
var __name6 = (target, value) => __defProp7(target, "name", { value, configurable: true });
// @__NO_SIDE_EFFECTS__
function createSlot(ownerName) {
  const Slot22 = React6.forwardRef((props, forwardedRef) => {
    let { children, ...slotProps } = props;
    let slottableElement = null;
    let hasSlottable = false;
    const newChildren = [];
    children = useUnwrappedLazy(children);
    React6.Children.forEach(children, (maybeSlottable) => {
      if (isSlottable(maybeSlottable)) {
        hasSlottable = true;
        const slottable = maybeSlottable;
        let child = "child" in slottable.props ? slottable.props.child : slottable.props.children;
        while (isLazyComponent(child) && typeof use === "function") {
          child = use(child._payload);
        }
        slottableElement = getSlottableElementFromSlottable(slottable, child);
        newChildren.push(slottableElement?.props?.children);
      } else {
        newChildren.push(maybeSlottable);
      }
    });
    if (slottableElement) {
      slottableElement = React6.cloneElement(slottableElement, void 0, newChildren);
    } else if (
      // A `Slottable` was found but it didn't resolve to a single element (e.g.
      // it wrapped multiple elements, text, or a render-prop `child` that
      // wasn't an element). Don't fall back to treating the `Slottable` wrapper
      // itself as the slot target — throw a descriptive error below instead.
      !hasSlottable && React6.Children.count(children) === 1 && React6.isValidElement(children)
    ) {
      slottableElement = children;
    }
    const slottableElementRef = slottableElement ? getElementRef(slottableElement) : void 0;
    const composedRef = useComposedRefs(forwardedRef, slottableElementRef);
    if (!slottableElement) {
      if (children || children === 0) {
        throw new Error(
          hasSlottable ? createSlottableError(ownerName) : createSlotError(ownerName)
        );
      }
      return children;
    }
    const mergedProps = mergeProps(slotProps, slottableElement.props ?? {});
    if (slottableElement.type !== React6.Fragment) {
      mergedProps.ref = forwardedRef ? composedRef : slottableElementRef;
    }
    return React6.cloneElement(slottableElement, mergedProps);
  });
  Slot22.displayName = `${ownerName}.Slot`;
  return Slot22;
}
__name6(createSlot, "createSlot");
var SLOTTABLE_IDENTIFIER = Symbol.for("radix.slottable");
// @__NO_SIDE_EFFECTS__
function createSlottable(ownerName) {
  const Slottable2 = /* @__PURE__ */ __name6((props) => "child" in props ? props.children(props.child) : props.children, "Slottable");
  Slottable2.displayName = `${ownerName}.Slottable`;
  Slottable2.__radixId = SLOTTABLE_IDENTIFIER;
  return Slottable2;
}
__name6(createSlottable, "createSlottable");
var getSlottableElementFromSlottable = /* @__PURE__ */ __name6((slottable, child) => {
  if ("child" in slottable.props) {
    if (!React6.isValidElement(child)) return null;
    return React6.cloneElement(child, void 0, slottable.props.children(child.props.children));
  }
  return React6.isValidElement(child) ? child : null;
}, "getSlottableElementFromSlottable");
function mergeProps(slotProps, childProps) {
  const overrideProps = { ...childProps };
  for (const propName in childProps) {
    const slotPropValue = slotProps[propName];
    const childPropValue = childProps[propName];
    const isHandler = /^on[A-Z]/.test(propName);
    if (isHandler) {
      if (slotPropValue && childPropValue) {
        overrideProps[propName] = (...args) => {
          const result = childPropValue(...args);
          slotPropValue(...args);
          return result;
        };
      } else if (slotPropValue) {
        overrideProps[propName] = slotPropValue;
      }
    } else if (propName === "style") {
      overrideProps[propName] = { ...slotPropValue, ...childPropValue };
    } else if (propName === "className") {
      overrideProps[propName] = [slotPropValue, childPropValue].filter(Boolean).join(" ");
    } else if (propName === "aria-describedby") {
      overrideProps[propName] = concatAriaDescribedby(childPropValue, slotPropValue);
    }
  }
  return { ...slotProps, ...overrideProps };
}
__name6(mergeProps, "mergeProps");
function getElementRef(element) {
  let getter = Object.getOwnPropertyDescriptor(element.props, "ref")?.get;
  let mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
  if (mayWarn) {
    return element.ref;
  }
  getter = Object.getOwnPropertyDescriptor(element, "ref")?.get;
  mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
  if (mayWarn) {
    return element.props.ref;
  }
  return element.props.ref || element.ref;
}
__name6(getElementRef, "getElementRef");
function isSlottable(child) {
  return React6.isValidElement(child) && typeof child.type === "function" && "__radixId" in child.type && child.type.__radixId === SLOTTABLE_IDENTIFIER;
}
__name6(isSlottable, "isSlottable");
var REACT_LAZY_TYPE = Symbol.for("react.lazy");
function isLazyComponent(element) {
  return element != null && typeof element === "object" && "$$typeof" in element && element.$$typeof === REACT_LAZY_TYPE && "_payload" in element && isPromiseLike(element._payload);
}
__name6(isLazyComponent, "isLazyComponent");
function isPromiseLike(value) {
  return typeof value === "object" && value !== null && "then" in value;
}
__name6(isPromiseLike, "isPromiseLike");
function useUnwrappedLazy(value) {
  let unwrapped = value;
  while (isLazyComponent(unwrapped) && typeof use === "function") {
    unwrapped = use(unwrapped._payload);
  }
  return unwrapped;
}
__name6(useUnwrappedLazy, "useUnwrappedLazy");
function concatAriaDescribedby(...values) {
  const ids = /* @__PURE__ */ new Set();
  for (const value of values) {
    if (typeof value !== "string") continue;
    for (const id of String(value).trim().split(/\s+/)) {
      if (id) ids.add(id);
    }
  }
  return ids.size > 0 ? Array.from(ids).join(" ") : void 0;
}
__name6(concatAriaDescribedby, "concatAriaDescribedby");
var createSlotError = /* @__PURE__ */ __name6((ownerName) => {
  return `${ownerName} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`;
}, "createSlotError");
var createSlottableError = /* @__PURE__ */ __name6((ownerName) => {
  return `${ownerName} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`;
}, "createSlottableError");
var use = React6[" use ".trim().toString()];

// node_modules/@radix-ui/react-primitive/dist/index.mjs
var import_jsx_runtime2 = __toESM(require_jsx_runtime(), 1);
var __defProp8 = Object.defineProperty;
var __name7 = (target, value) => __defProp8(target, "name", { value, configurable: true });
var NODES = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "select",
  "span",
  "svg",
  "ul"
];
var Primitive = NODES.reduce((primitive, node) => {
  const Slot3 = createSlot(`Primitive.${node}`);
  const Node2 = React7.forwardRef((props, forwardedRef) => {
    const { asChild, ...primitiveProps } = props;
    const Comp = asChild ? Slot3 : node;
    if (typeof window !== "undefined") {
      window[Symbol.for("radix-ui")] = true;
    }
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Comp, { ...primitiveProps, ref: forwardedRef });
  });
  Node2.displayName = `Primitive.${node}`;
  return { ...primitive, [node]: Node2 };
}, {});
function dispatchDiscreteCustomEvent(target, event) {
  if (target) ReactDOM.flushSync(() => target.dispatchEvent(event));
}
__name7(dispatchDiscreteCustomEvent, "dispatchDiscreteCustomEvent");

// node_modules/@radix-ui/react-menu/dist/index.mjs
var React33 = __toESM(require_react(), 1);

// node_modules/@radix-ui/react-collection/dist/index.mjs
var React8 = __toESM(require_react(), 1);
var import_jsx_runtime3 = __toESM(require_jsx_runtime(), 1);
var React23 = __toESM(require_react(), 1);
var import_jsx_runtime4 = __toESM(require_jsx_runtime(), 1);
var __defProp9 = Object.defineProperty;
var __name8 = (target, value) => __defProp9(target, "name", { value, configurable: true });
// @__NO_SIDE_EFFECTS__
function createCollection(name) {
  const PROVIDER_NAME = name + "CollectionProvider";
  const [createCollectionContext, createCollectionScope3] = createContextScope(PROVIDER_NAME);
  const [CollectionProviderImpl, useCollectionContext] = createCollectionContext(
    PROVIDER_NAME,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  );
  const CollectionProvider = /* @__PURE__ */ __name8((props) => {
    const { scope, children } = props;
    const ref = React8.useRef(null);
    const itemMap = React8.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(CollectionProviderImpl, { scope, itemMap, collectionRef: ref, children });
  }, "CollectionProvider");
  CollectionProvider.displayName = PROVIDER_NAME;
  const COLLECTION_SLOT_NAME = name + "CollectionSlot";
  const CollectionSlotImpl = createSlot(COLLECTION_SLOT_NAME);
  const CollectionSlot = React8.forwardRef(
    (props, forwardedRef) => {
      const { scope, children } = props;
      const context = useCollectionContext(COLLECTION_SLOT_NAME, scope);
      const composedRefs = useComposedRefs(forwardedRef, context.collectionRef);
      return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(CollectionSlotImpl, { ref: composedRefs, children });
    }
  );
  CollectionSlot.displayName = COLLECTION_SLOT_NAME;
  const ITEM_SLOT_NAME = name + "CollectionItemSlot";
  const ITEM_DATA_ATTR = "data-radix-collection-item";
  const CollectionItemSlotImpl = createSlot(ITEM_SLOT_NAME);
  const CollectionItemSlot = React8.forwardRef(
    (props, forwardedRef) => {
      const { scope, children, ...itemData } = props;
      const ref = React8.useRef(null);
      const composedRefs = useComposedRefs(forwardedRef, ref);
      const context = useCollectionContext(ITEM_SLOT_NAME, scope);
      React8.useEffect(() => {
        context.itemMap.set(ref, { ref, ...itemData });
        return () => void context.itemMap.delete(ref);
      });
      return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(CollectionItemSlotImpl, { ...{ [ITEM_DATA_ATTR]: "" }, ref: composedRefs, children });
    }
  );
  CollectionItemSlot.displayName = ITEM_SLOT_NAME;
  function useCollection3(scope) {
    const context = useCollectionContext(name + "CollectionConsumer", scope);
    const getItems = React8.useCallback(() => {
      const collectionNode = context.collectionRef.current;
      if (!collectionNode) return [];
      const orderedNodes = Array.from(collectionNode.querySelectorAll(`[${ITEM_DATA_ATTR}]`));
      const items = Array.from(context.itemMap.values());
      const orderedItems = items.sort(
        (a, b) => orderedNodes.indexOf(a.ref.current) - orderedNodes.indexOf(b.ref.current)
      );
      return orderedItems;
    }, [context.collectionRef, context.itemMap]);
    return getItems;
  }
  __name8(useCollection3, "useCollection");
  return [
    { Provider: CollectionProvider, Slot: CollectionSlot, ItemSlot: CollectionItemSlot },
    useCollection3,
    createCollectionScope3
  ];
}
__name8(createCollection, "createCollection");
var __instanciated = /* @__PURE__ */ new WeakMap();
var OrderedDict = class _OrderedDict extends Map {
  static {
    __name8(this, "OrderedDict");
  }
  #keys;
  constructor(entries) {
    super(entries);
    this.#keys = [...super.keys()];
    __instanciated.set(this, true);
  }
  set(key, value) {
    if (__instanciated.get(this) && !this.has(key)) {
      this.#keys.push(key);
    }
    super.set(key, value);
    return this;
  }
  /**
   * Sets a key-value pair so that it ends up at the given index.
   * - Existing keys are moved
   * - Negative indices count from the end of the resulting dictionary, so
   *   inserting at -1 makes the item the last one, -2 the second to last, etc.
   * - Out-of-range indices are clamped
   */
  insert(index2, key, value) {
    const has = this.has(key);
    const finalSize = has ? this.size : this.size + 1;
    const relativeIndex = toSafeInteger(index2);
    const targetIndex = relativeIndex >= 0 ? Math.min(relativeIndex, finalSize - 1) : Math.max(finalSize + relativeIndex, 0);
    if (has ? this.#keys.indexOf(key) === targetIndex : targetIndex === this.size) {
      this.set(key, value);
      return this;
    }
    const keys = this.#keys.filter((existingKey) => existingKey !== key);
    keys.splice(targetIndex, 0, key);
    const entries = keys.map((entryKey) => [
      entryKey,
      entryKey === key ? value : this.get(entryKey)
    ]);
    this.clear();
    for (const [entryKey, entryValue] of entries) {
      this.set(entryKey, entryValue);
    }
    return this;
  }
  with(index2, key, value) {
    const copy = new _OrderedDict(this);
    copy.insert(index2, key, value);
    return copy;
  }
  before(key) {
    const index2 = this.#keys.indexOf(key) - 1;
    if (index2 < 0) {
      return void 0;
    }
    return this.entryAt(index2);
  }
  /**
   * Sets a new key-value pair at the position before the given key.
   */
  setBefore(key, newKey, value) {
    const index2 = this.#keys.indexOf(key);
    if (index2 === -1) {
      return this;
    }
    const currentIndex = this.#keys.indexOf(newKey);
    const targetIndex = currentIndex !== -1 && currentIndex < index2 ? index2 - 1 : index2;
    return this.insert(targetIndex, newKey, value);
  }
  after(key) {
    let index2 = this.#keys.indexOf(key);
    index2 = index2 === -1 || index2 === this.size - 1 ? -1 : index2 + 1;
    if (index2 === -1) {
      return void 0;
    }
    return this.entryAt(index2);
  }
  /**
   * Sets a new key-value pair at the position after the given key.
   */
  setAfter(key, newKey, value) {
    const index2 = this.#keys.indexOf(key);
    if (index2 === -1) {
      return this;
    }
    const currentIndex = this.#keys.indexOf(newKey);
    const targetIndex = currentIndex !== -1 && currentIndex <= index2 ? index2 : index2 + 1;
    return this.insert(targetIndex, newKey, value);
  }
  first() {
    return this.entryAt(0);
  }
  last() {
    return this.entryAt(-1);
  }
  clear() {
    this.#keys = [];
    return super.clear();
  }
  delete(key) {
    const deleted = super.delete(key);
    if (deleted) {
      this.#keys.splice(this.#keys.indexOf(key), 1);
    }
    return deleted;
  }
  deleteAt(index2) {
    const key = this.keyAt(index2);
    if (key !== void 0) {
      return this.delete(key);
    }
    return false;
  }
  at(index2) {
    const key = at(this.#keys, index2);
    if (key !== void 0) {
      return this.get(key);
    }
  }
  entryAt(index2) {
    const key = at(this.#keys, index2);
    if (key !== void 0) {
      return [key, this.get(key)];
    }
  }
  indexOf(key) {
    return this.#keys.indexOf(key);
  }
  keyAt(index2) {
    return at(this.#keys, index2);
  }
  from(key, offset4) {
    const index2 = this.indexOf(key);
    if (index2 === -1) {
      return void 0;
    }
    let dest = index2 + offset4;
    if (dest < 0) dest = 0;
    if (dest >= this.size) dest = this.size - 1;
    return this.at(dest);
  }
  keyFrom(key, offset4) {
    const index2 = this.indexOf(key);
    if (index2 === -1) {
      return void 0;
    }
    let dest = index2 + offset4;
    if (dest < 0) dest = 0;
    if (dest >= this.size) dest = this.size - 1;
    return this.keyAt(dest);
  }
  find(predicate, thisArg) {
    let index2 = 0;
    for (const entry of this) {
      if (Reflect.apply(predicate, thisArg, [entry, index2, this])) {
        return entry;
      }
      index2++;
    }
    return void 0;
  }
  findIndex(predicate, thisArg) {
    let index2 = 0;
    for (const entry of this) {
      if (Reflect.apply(predicate, thisArg, [entry, index2, this])) {
        return index2;
      }
      index2++;
    }
    return -1;
  }
  filter(predicate, thisArg) {
    const entries = [];
    let index2 = 0;
    for (const entry of this) {
      if (Reflect.apply(predicate, thisArg, [entry, index2, this])) {
        entries.push(entry);
      }
      index2++;
    }
    return new _OrderedDict(entries);
  }
  map(callbackfn, thisArg) {
    const entries = [];
    let index2 = 0;
    for (const entry of this) {
      entries.push([entry[0], Reflect.apply(callbackfn, thisArg, [entry, index2, this])]);
      index2++;
    }
    return new _OrderedDict(entries);
  }
  reduce(...args) {
    const [callbackfn, initialValue] = args;
    const hasInitialValue = args.length > 1;
    if (!hasInitialValue && this.size === 0) {
      throw new TypeError("Reduce of empty OrderedDict with no initial value");
    }
    let index2 = 0;
    let accumulator = initialValue;
    for (const entry of this) {
      if (index2 === 0 && !hasInitialValue) {
        accumulator = entry;
      } else {
        accumulator = Reflect.apply(callbackfn, this, [accumulator, entry, index2, this]);
      }
      index2++;
    }
    return accumulator;
  }
  reduceRight(...args) {
    const [callbackfn, initialValue] = args;
    const hasInitialValue = args.length > 1;
    if (!hasInitialValue && this.size === 0) {
      throw new TypeError("Reduce of empty OrderedDict with no initial value");
    }
    let accumulator = initialValue;
    for (let index2 = this.size - 1; index2 >= 0; index2--) {
      const entry = this.entryAt(index2);
      if (index2 === this.size - 1 && !hasInitialValue) {
        accumulator = entry;
      } else {
        accumulator = Reflect.apply(callbackfn, this, [accumulator, entry, index2, this]);
      }
    }
    return accumulator;
  }
  /**
   * Sorts the dictionary in place. This method mutates the dictionary and
   * returns a reference to the same object
   *
   * @param compareFn Function used to determine the order of the elements. It
   * is expected to return a negative value if the first argument is less than
   * the second argument, zero if they're equal, and a positive value otherwise.
   */
  sort(compareFn) {
    if (typeof compareFn !== "function") {
      throw new TypeError(`OrderedDict.sort requires a compare function`);
    }
    const entries = [...this.entries()].sort(compareFn);
    this.clear();
    for (const [key, value] of entries) {
      this.set(key, value);
    }
    return this;
  }
  /**
   * Returns a copy of the dictionary with its elements sorted.
   *
   * @param compareFn Function used to determine the order of the elements. It
   * is expected to return a negative value if the first argument is less than
   * the second argument, zero if they're equal, and a positive value otherwise.
   */
  toSorted(compareFn) {
    if (typeof compareFn !== "function") {
      throw new TypeError(`OrderedDict.toSorted requires a compare function`);
    }
    const entries = [...this.entries()].sort(compareFn);
    return new _OrderedDict(entries);
  }
  toReversed() {
    const reversed = new _OrderedDict();
    for (let index2 = this.size - 1; index2 >= 0; index2--) {
      const key = this.keyAt(index2);
      const element = this.get(key);
      reversed.set(key, element);
    }
    return reversed;
  }
  toSpliced(...args) {
    const entries = [...this.entries()];
    entries.splice(...args);
    return new _OrderedDict(entries);
  }
  slice(start, end) {
    const result = new _OrderedDict();
    for (const key of this.#keys.slice(start, end)) {
      result.set(key, this.get(key));
    }
    return result;
  }
  every(predicate, thisArg) {
    let index2 = 0;
    for (const entry of this) {
      if (!Reflect.apply(predicate, thisArg, [entry, index2, this])) {
        return false;
      }
      index2++;
    }
    return true;
  }
  some(predicate, thisArg) {
    let index2 = 0;
    for (const entry of this) {
      if (Reflect.apply(predicate, thisArg, [entry, index2, this])) {
        return true;
      }
      index2++;
    }
    return false;
  }
};
function at(array, index2) {
  if ("at" in Array.prototype) {
    return Array.prototype.at.call(array, index2);
  }
  const actualIndex = toSafeIndex(array, index2);
  return actualIndex === -1 ? void 0 : array[actualIndex];
}
__name8(at, "at");
function toSafeIndex(array, index2) {
  const length = array.length;
  const relativeIndex = toSafeInteger(index2);
  const actualIndex = relativeIndex >= 0 ? relativeIndex : length + relativeIndex;
  return actualIndex < 0 || actualIndex >= length ? -1 : actualIndex;
}
__name8(toSafeIndex, "toSafeIndex");
function toSafeInteger(number) {
  return number !== number || number === 0 ? 0 : Math.trunc(number);
}
__name8(toSafeInteger, "toSafeInteger");
// @__NO_SIDE_EFFECTS__
function createCollection2(name) {
  const PROVIDER_NAME = name + "CollectionProvider";
  const [createCollectionContext, createCollectionScope3] = createContextScope(PROVIDER_NAME);
  const [CollectionStableContextProvider, useStableCollectionContext] = createCollectionContext(PROVIDER_NAME);
  CollectionStableContextProvider.displayName = name + "CollectionStableContextProvider";
  const [CollectionStatefulContextProvider, useStatefulCollectionContext] = createCollectionContext(PROVIDER_NAME);
  CollectionStatefulContextProvider.displayName = name + "CollectionStatefulContextProvider";
  const CollectionProvider = /* @__PURE__ */ __name8(({ state, ...props }) => {
    return state ? /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(CollectionProviderImpl, { ...props, state }) : /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(CollectionInit, { ...props });
  }, "CollectionProvider");
  CollectionProvider.displayName = PROVIDER_NAME;
  const CollectionInit = /* @__PURE__ */ __name8((props) => {
    const state = useInitCollection();
    return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(CollectionProviderImpl, { ...props, state });
  }, "CollectionInit");
  CollectionInit.displayName = name + "CollectionInit";
  const CollectionProviderImpl = /* @__PURE__ */ __name8((props) => {
    const { scope, children, state } = props;
    const ref = React23.useRef(null);
    const [collectionElement, setCollectionElement] = React23.useState(
      null
    );
    const composeRefs2 = useComposedRefs(ref, setCollectionElement);
    const [collection, setCollection] = state;
    const registryRef = React23.useRef(
      new OrderedDict()
    );
    const getCollection = React23.useCallback(() => {
      const registry = registryRef.current;
      if (!isInDocumentOrder(registry)) {
        registry.sort(sortByDocumentPosition);
      }
      return registry;
    }, []);
    React23.useEffect(() => {
      if (!collectionElement) {
        return;
      }
      const observer = getChildListObserver(() => {
        setCollection((map) => {
          const sorted = map.toSorted(sortByDocumentPosition);
          const orderChanged = sorted.some(([key], index2) => map.keyAt(index2) !== key);
          return orderChanged ? sorted : map;
        });
      });
      observer.observe(collectionElement, {
        childList: true,
        subtree: true
      });
      return () => {
        observer.disconnect();
      };
    }, [collectionElement, setCollection]);
    return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
      CollectionStableContextProvider,
      {
        scope,
        collectionElementRef: composeRefs2,
        collectionElementRefObject: ref,
        getCollection,
        setCollection,
        registryRef,
        children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
          CollectionStatefulContextProvider,
          {
            scope,
            collectionElement,
            collection,
            children
          }
        )
      }
    );
  }, "CollectionProviderImpl");
  CollectionProviderImpl.displayName = name + "CollectionProviderImpl";
  const COLLECTION_SLOT_NAME = name + "CollectionSlot";
  const CollectionSlotImpl = createSlot(COLLECTION_SLOT_NAME);
  const CollectionSlot = React23.forwardRef(
    (props, forwardedRef) => {
      const { scope, children } = props;
      const context = useStableCollectionContext(COLLECTION_SLOT_NAME, scope);
      const composedRefs = useComposedRefs(forwardedRef, context.collectionElementRef);
      return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(CollectionSlotImpl, { ref: composedRefs, children });
    }
  );
  CollectionSlot.displayName = COLLECTION_SLOT_NAME;
  const ITEM_SLOT_NAME = name + "CollectionItemSlot";
  const ITEM_DATA_ATTR = "data-radix-collection-item";
  const CollectionItemSlotImpl = createSlot(ITEM_SLOT_NAME);
  const CollectionItemSlot = React23.forwardRef(
    (props, forwardedRef) => {
      const { scope, children, ...itemData } = props;
      const ref = React23.useRef(null);
      const context = useStableCollectionContext(ITEM_SLOT_NAME, scope);
      const { setCollection, registryRef } = context;
      const itemDataRef = React23.useRef(itemData);
      if (!shallowEqual(itemDataRef.current, itemData)) {
        itemDataRef.current = itemData;
      }
      const memoizedItemData = itemDataRef.current;
      const registerElement = React23.useCallback(
        (node) => {
          const registry = registryRef.current;
          if (node) {
            registry.set(node, {
              ...itemDataRef.current,
              element: node
            });
          } else if (ref.current) {
            registry.delete(ref.current);
          }
        },
        [registryRef]
      );
      const composedRefs = useComposedRefs(forwardedRef, registerElement, ref);
      useLayoutEffect2(() => {
        const node = ref.current;
        const registry = registryRef.current;
        if (node && registry.has(node)) {
          registry.set(node, { ...memoizedItemData, element: node });
        }
      }, [memoizedItemData, registryRef]);
      const registeredRef = React23.useRef(null);
      React23.useEffect(() => {
        const element = ref.current;
        const registered = registeredRef.current;
        if ((registered?.element ?? null) === element && (!element || registered?.itemData === memoizedItemData)) {
          return;
        }
        registeredRef.current = element ? { element, itemData: memoizedItemData } : null;
        setCollection((map) => {
          const next = new OrderedDict(map);
          if (registered && registered.element !== element) {
            next.delete(registered.element);
          }
          if (element) {
            next.set(element, { ...memoizedItemData, element });
          }
          return next.sort(sortByDocumentPosition);
        });
      });
      React23.useEffect(() => {
        return () => {
          const registered = registeredRef.current;
          registeredRef.current = null;
          if (!registered) {
            return;
          }
          setCollection((map) => {
            if (!map.has(registered.element)) {
              return map;
            }
            const next = new OrderedDict(map);
            next.delete(registered.element);
            return next;
          });
        };
      }, [setCollection]);
      return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(CollectionItemSlotImpl, { ...{ [ITEM_DATA_ATTR]: "" }, ref: composedRefs, children });
    }
  );
  CollectionItemSlot.displayName = ITEM_SLOT_NAME;
  function useInitCollection() {
    return React23.useState(new OrderedDict());
  }
  __name8(useInitCollection, "useInitCollection");
  function useCollection3(scope) {
    const { collection } = useStatefulCollectionContext(name + "CollectionConsumer", scope);
    return collection;
  }
  __name8(useCollection3, "useCollection");
  function useGetCollection(scope) {
    const { getCollection } = useStableCollectionContext(name + "CollectionConsumer", scope);
    return getCollection;
  }
  __name8(useGetCollection, "useGetCollection");
  const functions = {
    createCollectionScope: createCollectionScope3,
    useCollection: useCollection3,
    useGetCollection,
    useInitCollection
  };
  return [
    { Provider: CollectionProvider, Slot: CollectionSlot, ItemSlot: CollectionItemSlot },
    functions
  ];
}
__name8(createCollection2, "createCollection");
function shallowEqual(a, b) {
  if (a === b) return true;
  if (typeof a !== "object" || typeof b !== "object") return false;
  if (a == null || b == null) return false;
  const keysA = Object.keys(a);
  const keysB = Object.keys(b);
  if (keysA.length !== keysB.length) return false;
  for (const key of keysA) {
    if (!Object.prototype.hasOwnProperty.call(b, key)) return false;
    if (a[key] !== b[key]) return false;
  }
  return true;
}
__name8(shallowEqual, "shallowEqual");
function isElementPreceding(a, b) {
  return !!(b.compareDocumentPosition(a) & Node.DOCUMENT_POSITION_PRECEDING);
}
__name8(isElementPreceding, "isElementPreceding");
function isInDocumentOrder(dict) {
  let previous;
  for (const element of dict.keys()) {
    if (previous) {
      const position = previous.compareDocumentPosition(element);
      if (!(position & Node.DOCUMENT_POSITION_DISCONNECTED) && position & Node.DOCUMENT_POSITION_PRECEDING) {
        return false;
      }
    }
    previous = element;
  }
  return true;
}
__name8(isInDocumentOrder, "isInDocumentOrder");
function sortByDocumentPosition(a, b) {
  return !a[1].element || !b[1].element ? 0 : isElementPreceding(a[1].element, b[1].element) ? -1 : 1;
}
__name8(sortByDocumentPosition, "sortByDocumentPosition");
function getChildListObserver(callback) {
  const observer = new MutationObserver((mutationsList) => {
    for (const mutation of mutationsList) {
      if (mutation.type === "childList") {
        callback();
        return;
      }
    }
  });
  return observer;
}
__name8(getChildListObserver, "getChildListObserver");

// node_modules/@radix-ui/react-direction/dist/index.mjs
var React9 = __toESM(require_react(), 1);
var import_jsx_runtime5 = __toESM(require_jsx_runtime(), 1);
var __defProp10 = Object.defineProperty;
var __name9 = (target, value) => __defProp10(target, "name", { value, configurable: true });
var Direction = {
  LTR: "ltr",
  RTL: "rtl"
};
var DirectionContext = React9.createContext(void 0);
function useDirection(localDir) {
  const globalDir = React9.useContext(DirectionContext);
  return localDir || globalDir || Direction.LTR;
}
__name9(useDirection, "useDirection");

// node_modules/@radix-ui/react-dismissable-layer/dist/index.mjs
var React11 = __toESM(require_react(), 1);

// node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs
var React10 = __toESM(require_react(), 1);
var __defProp11 = Object.defineProperty;
var __name10 = (target, value) => __defProp11(target, "name", { value, configurable: true });
var useReactInsertionEffect2 = React10[" useInsertionEffect ".trim().toString()];
function useCallbackRef(callback) {
  const callbackRef = React10.useRef(callback);
  if (typeof useReactInsertionEffect2 === "function") {
    useReactInsertionEffect2(() => {
      callbackRef.current = callback;
    });
  } else {
    useLayoutEffect2(() => {
      callbackRef.current = callback;
    });
  }
  return React10.useMemo(() => ((...args) => callbackRef.current?.(...args)), []);
}
__name10(useCallbackRef, "useCallbackRef");

// node_modules/@radix-ui/react-dismissable-layer/dist/index.mjs
var import_jsx_runtime6 = __toESM(require_jsx_runtime(), 1);
var __defProp12 = Object.defineProperty;
var __name11 = (target, value) => __defProp12(target, "name", { value, configurable: true });
var CONTEXT_UPDATE = "dismissableLayer.update";
var POINTER_DOWN_OUTSIDE = "dismissableLayer.pointerDownOutside";
var FOCUS_OUTSIDE = "dismissableLayer.focusOutside";
var originalBodyPointerEvents;
var DismissableLayerContext = React11.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set(),
  // Outside elements that belong to a layer's own dismiss affordance (eg, a
  // dialog overlay). Pressing them should dismiss the layer regardless of
  // whether or not they stop propagation.
  //
  // See https://github.com/radix-ui/primitives/issues/3346
  dismissableSurfaces: /* @__PURE__ */ new Set()
});
var DismissableLayer = /* @__PURE__ */ React11.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ __name11(function DismissableLayer2(props, forwardedRef) {
    const {
      disableOutsidePointerEvents = false,
      deferPointerDownOutside = false,
      onEscapeKeyDown,
      onPointerDownOutside,
      onFocusOutside,
      onInteractOutside,
      onDismiss,
      ...layerProps
    } = props;
    const context = React11.useContext(DismissableLayerContext);
    const [node, setNode] = React11.useState(null);
    const ownerDocument = node?.ownerDocument ?? globalThis?.document;
    const [, force] = React11.useState({});
    const composedRefs = useComposedRefs(forwardedRef, setNode);
    const layers = Array.from(context.layers);
    const [highestLayerWithOutsidePointerEventsDisabled] = [
      ...context.layersWithOutsidePointerEventsDisabled
    ].slice(-1);
    const highestLayerWithOutsidePointerEventsDisabledIndex = highestLayerWithOutsidePointerEventsDisabled ? layers.indexOf(highestLayerWithOutsidePointerEventsDisabled) : -1;
    const index2 = node ? layers.indexOf(node) : -1;
    const isBodyPointerEventsDisabled = context.layersWithOutsidePointerEventsDisabled.size > 0;
    const isPointerEventsEnabled = index2 >= highestLayerWithOutsidePointerEventsDisabledIndex;
    const isDeferredPointerDownOutsideRef = React11.useRef(false);
    const pointerDownOutside = usePointerDownOutside(
      (event) => {
        onPointerDownOutside?.(event);
        onInteractOutside?.(event);
        if (!event.defaultPrevented) onDismiss?.();
      },
      {
        ownerDocument,
        deferPointerDownOutside,
        isDeferredPointerDownOutsideRef,
        dismissableSurfaces: context.dismissableSurfaces,
        shouldHandlePointerDownOutside: React11.useCallback(
          (target) => {
            if (!(target instanceof Node)) {
              return false;
            }
            const isPointerDownOnBranch = [...context.branches].some(
              (branch) => branch.contains(target)
            );
            return isPointerEventsEnabled && !isPointerDownOnBranch;
          },
          [context.branches, isPointerEventsEnabled]
        )
      }
    );
    const focusOutside = useFocusOutside((event) => {
      if (deferPointerDownOutside && isDeferredPointerDownOutsideRef.current) {
        return;
      }
      const target = event.target;
      const isFocusInBranch = [...context.branches].some((branch) => branch.contains(target));
      if (isFocusInBranch) return;
      onFocusOutside?.(event);
      onInteractOutside?.(event);
      if (!event.defaultPrevented) onDismiss?.();
    }, ownerDocument);
    const isHighestLayer = node ? index2 === layers.length - 1 : false;
    const handleKeyDown = useCallbackRef((event) => {
      if (event.key !== "Escape") {
        return;
      }
      onEscapeKeyDown?.(event);
      if (!event.defaultPrevented && onDismiss) {
        event.preventDefault();
        onDismiss();
      }
    });
    React11.useEffect(() => {
      if (!isHighestLayer) {
        return;
      }
      ownerDocument.addEventListener("keydown", handleKeyDown, { capture: true });
      return () => ownerDocument.removeEventListener("keydown", handleKeyDown, { capture: true });
    }, [ownerDocument, isHighestLayer, handleKeyDown]);
    React11.useEffect(() => {
      if (!node) return;
      if (disableOutsidePointerEvents) {
        if (context.layersWithOutsidePointerEventsDisabled.size === 0) {
          originalBodyPointerEvents = ownerDocument.body.style.pointerEvents;
          ownerDocument.body.style.pointerEvents = "none";
        }
        context.layersWithOutsidePointerEventsDisabled.add(node);
      }
      context.layers.add(node);
      dispatchUpdate();
      return () => {
        if (disableOutsidePointerEvents) {
          context.layersWithOutsidePointerEventsDisabled.delete(node);
          if (context.layersWithOutsidePointerEventsDisabled.size === 0) {
            ownerDocument.body.style.pointerEvents = originalBodyPointerEvents;
          }
        }
      };
    }, [node, ownerDocument, disableOutsidePointerEvents, context]);
    React11.useEffect(() => {
      return () => {
        if (!node) return;
        context.layers.delete(node);
        context.layersWithOutsidePointerEventsDisabled.delete(node);
        dispatchUpdate();
      };
    }, [node, context]);
    React11.useEffect(() => {
      const handleUpdate = /* @__PURE__ */ __name11(() => force({}), "handleUpdate");
      document.addEventListener(CONTEXT_UPDATE, handleUpdate);
      return () => document.removeEventListener(CONTEXT_UPDATE, handleUpdate);
    }, []);
    return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
      Primitive.div,
      {
        ...layerProps,
        ref: composedRefs,
        style: {
          pointerEvents: isBodyPointerEventsDisabled ? isPointerEventsEnabled ? "auto" : "none" : void 0,
          ...props.style
        },
        onFocusCapture: composeEventHandlers(props.onFocusCapture, focusOutside.onFocusCapture),
        onBlurCapture: composeEventHandlers(props.onBlurCapture, focusOutside.onBlurCapture),
        onPointerDownCapture: composeEventHandlers(
          props.onPointerDownCapture,
          pointerDownOutside.onPointerDownCapture
        )
      }
    );
  }, "DismissableLayer")
);
function useDismissableLayerSurface() {
  const context = React11.useContext(DismissableLayerContext);
  const [node, setNode] = React11.useState(null);
  React11.useEffect(() => {
    if (!node) {
      return;
    }
    context.dismissableSurfaces.add(node);
    return () => {
      context.dismissableSurfaces.delete(node);
    };
  }, [node, context.dismissableSurfaces]);
  return setNode;
}
__name11(useDismissableLayerSurface, "useDismissableLayerSurface");
var IS_TRUE = /* @__PURE__ */ __name11(() => true, "IS_TRUE");
function usePointerDownOutside(onPointerDownOutside, args) {
  const {
    ownerDocument = globalThis?.document,
    deferPointerDownOutside = false,
    isDeferredPointerDownOutsideRef,
    dismissableSurfaces,
    shouldHandlePointerDownOutside = IS_TRUE
  } = args;
  const handlePointerDownOutside = useCallbackRef(onPointerDownOutside);
  const isPointerInsideReactTreeRef = React11.useRef(false);
  const isPointerDownOutsideRef = React11.useRef(false);
  const interceptedOutsideInteractionEventsRef = React11.useRef(/* @__PURE__ */ new Map());
  const handleClickRef = React11.useRef(() => {
  });
  React11.useEffect(() => {
    function resetOutsideInteraction() {
      isPointerDownOutsideRef.current = false;
      isDeferredPointerDownOutsideRef.current = false;
      interceptedOutsideInteractionEventsRef.current.clear();
    }
    __name11(resetOutsideInteraction, "resetOutsideInteraction");
    function isOutsideInteractionIntercepted() {
      return Array.from(interceptedOutsideInteractionEventsRef.current.values()).some(Boolean);
    }
    __name11(isOutsideInteractionIntercepted, "isOutsideInteractionIntercepted");
    function handleInteractionCapture(event) {
      if (!isPointerDownOutsideRef.current) {
        return;
      }
      const target = event.target;
      const isDismissableSurface = target instanceof Node && [...dismissableSurfaces].some((surface) => surface.contains(target));
      if (!isDismissableSurface) {
        interceptedOutsideInteractionEventsRef.current.set(event.type, true);
      }
      if (event.type === "click") {
        window.setTimeout(() => {
          if (isPointerDownOutsideRef.current) {
            handleClickRef.current();
          }
        }, 0);
      }
    }
    __name11(handleInteractionCapture, "handleInteractionCapture");
    function handleInteractionBubble(event) {
      if (isPointerDownOutsideRef.current) {
        interceptedOutsideInteractionEventsRef.current.set(event.type, false);
      }
    }
    __name11(handleInteractionBubble, "handleInteractionBubble");
    const handlePointerDown = /* @__PURE__ */ __name11((event) => {
      if (event.target && !isPointerInsideReactTreeRef.current) {
        let handleAndDispatchPointerDownOutsideEvent2 = function() {
          ownerDocument.removeEventListener("click", handleClickRef.current);
          const wasOutsideInteractionIntercepted = isOutsideInteractionIntercepted();
          resetOutsideInteraction();
          if (!wasOutsideInteractionIntercepted) {
            handleAndDispatchCustomEvent(
              POINTER_DOWN_OUTSIDE,
              handlePointerDownOutside,
              eventDetail,
              { discrete: true }
            );
          }
        };
        var handleAndDispatchPointerDownOutsideEvent = handleAndDispatchPointerDownOutsideEvent2;
        __name11(handleAndDispatchPointerDownOutsideEvent2, "handleAndDispatchPointerDownOutsideEvent");
        if (!shouldHandlePointerDownOutside(event.target)) {
          ownerDocument.removeEventListener("click", handleClickRef.current);
          resetOutsideInteraction();
          isPointerInsideReactTreeRef.current = false;
          return;
        }
        const eventDetail = { originalEvent: event };
        isPointerDownOutsideRef.current = true;
        isDeferredPointerDownOutsideRef.current = deferPointerDownOutside && event.button === 0;
        interceptedOutsideInteractionEventsRef.current.clear();
        if (!deferPointerDownOutside || event.button !== 0) {
          handleAndDispatchPointerDownOutsideEvent2();
        } else {
          ownerDocument.removeEventListener("click", handleClickRef.current);
          handleClickRef.current = handleAndDispatchPointerDownOutsideEvent2;
          ownerDocument.addEventListener("click", handleClickRef.current, { once: true });
        }
      } else {
        ownerDocument.removeEventListener("click", handleClickRef.current);
        resetOutsideInteraction();
      }
      isPointerInsideReactTreeRef.current = false;
    }, "handlePointerDown");
    const outsideInteractionEvents = [
      "pointerup",
      "mousedown",
      "mouseup",
      "touchstart",
      "touchend",
      "click"
    ];
    for (const eventName of outsideInteractionEvents) {
      ownerDocument.addEventListener(eventName, handleInteractionCapture, true);
      ownerDocument.addEventListener(eventName, handleInteractionBubble);
    }
    const timerId = window.setTimeout(() => {
      ownerDocument.addEventListener("pointerdown", handlePointerDown);
    }, 0);
    return () => {
      window.clearTimeout(timerId);
      ownerDocument.removeEventListener("pointerdown", handlePointerDown);
      ownerDocument.removeEventListener("click", handleClickRef.current);
      for (const eventName of outsideInteractionEvents) {
        ownerDocument.removeEventListener(eventName, handleInteractionCapture, true);
        ownerDocument.removeEventListener(eventName, handleInteractionBubble);
      }
    };
  }, [
    ownerDocument,
    handlePointerDownOutside,
    deferPointerDownOutside,
    isDeferredPointerDownOutsideRef,
    dismissableSurfaces,
    shouldHandlePointerDownOutside
  ]);
  return {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: /* @__PURE__ */ __name11(() => isPointerInsideReactTreeRef.current = true, "onPointerDownCapture")
  };
}
__name11(usePointerDownOutside, "usePointerDownOutside");
function useFocusOutside(onFocusOutside, ownerDocument = globalThis?.document) {
  const handleFocusOutside = useCallbackRef(onFocusOutside);
  const isFocusInsideReactTreeRef = React11.useRef(false);
  React11.useEffect(() => {
    const handleFocus = /* @__PURE__ */ __name11((event) => {
      if (event.target && !isFocusInsideReactTreeRef.current) {
        const eventDetail = { originalEvent: event };
        handleAndDispatchCustomEvent(FOCUS_OUTSIDE, handleFocusOutside, eventDetail, {
          discrete: false
        });
      }
    }, "handleFocus");
    ownerDocument.addEventListener("focusin", handleFocus);
    return () => ownerDocument.removeEventListener("focusin", handleFocus);
  }, [ownerDocument, handleFocusOutside]);
  return {
    onFocusCapture: /* @__PURE__ */ __name11(() => isFocusInsideReactTreeRef.current = true, "onFocusCapture"),
    onBlurCapture: /* @__PURE__ */ __name11(() => isFocusInsideReactTreeRef.current = false, "onBlurCapture")
  };
}
__name11(useFocusOutside, "useFocusOutside");
function dispatchUpdate() {
  const event = new CustomEvent(CONTEXT_UPDATE);
  document.dispatchEvent(event);
}
__name11(dispatchUpdate, "dispatchUpdate");
function handleAndDispatchCustomEvent(name, handler, detail, { discrete }) {
  const target = detail.originalEvent.target;
  const event = new CustomEvent(name, { bubbles: false, cancelable: true, detail });
  if (handler) target.addEventListener(name, handler, { once: true });
  if (discrete) {
    dispatchDiscreteCustomEvent(target, event);
  } else {
    target.dispatchEvent(event);
  }
}
__name11(handleAndDispatchCustomEvent, "handleAndDispatchCustomEvent");

// node_modules/@radix-ui/react-focus-guards/dist/index.mjs
var React12 = __toESM(require_react(), 1);
var __defProp13 = Object.defineProperty;
var __name12 = (target, value) => __defProp13(target, "name", { value, configurable: true });
var count = 0;
var guards = null;
function FocusGuards(props) {
  useFocusGuards();
  return props.children;
}
__name12(FocusGuards, "FocusGuards");
function useFocusGuards() {
  React12.useEffect(() => {
    if (!guards) {
      guards = { start: createFocusGuard(), end: createFocusGuard() };
    }
    const { start, end } = guards;
    if (document.body.firstElementChild !== start) {
      document.body.insertAdjacentElement("afterbegin", start);
    }
    if (document.body.lastElementChild !== end) {
      document.body.insertAdjacentElement("beforeend", end);
    }
    count++;
    return () => {
      if (count === 1) {
        guards?.start.remove();
        guards?.end.remove();
        guards = null;
      }
      count = Math.max(0, count - 1);
    };
  }, []);
}
__name12(useFocusGuards, "useFocusGuards");
function createFocusGuard() {
  const element = document.createElement("span");
  element.setAttribute("data-radix-focus-guard", "");
  element.tabIndex = 0;
  element.style.outline = "none";
  element.style.opacity = "0";
  element.style.position = "fixed";
  element.style.pointerEvents = "none";
  return element;
}
__name12(createFocusGuard, "createFocusGuard");

// node_modules/@radix-ui/react-focus-scope/dist/index.mjs
var React13 = __toESM(require_react(), 1);
var import_jsx_runtime7 = __toESM(require_jsx_runtime(), 1);
var __defProp14 = Object.defineProperty;
var __name13 = (target, value) => __defProp14(target, "name", { value, configurable: true });
var AUTOFOCUS_ON_MOUNT = "focusScope.autoFocusOnMount";
var AUTOFOCUS_ON_UNMOUNT = "focusScope.autoFocusOnUnmount";
var EVENT_OPTIONS = { bubbles: false, cancelable: true };
var FocusScope = /* @__PURE__ */ React13.forwardRef(
  /* @__PURE__ */ __name13(function FocusScope2(props, forwardedRef) {
    const {
      loop = false,
      trapped = false,
      branches,
      onMountAutoFocus: onMountAutoFocusProp,
      onUnmountAutoFocus: onUnmountAutoFocusProp,
      ...scopeProps
    } = props;
    const [container, setContainer] = React13.useState(null);
    const onMountAutoFocus = useCallbackRef(onMountAutoFocusProp);
    const onUnmountAutoFocus = useCallbackRef(onUnmountAutoFocusProp);
    const lastFocusedElementRef = React13.useRef(null);
    const composedRefs = useComposedRefs(forwardedRef, setContainer);
    const branchesRef = React13.useRef(branches);
    React13.useEffect(() => {
      branchesRef.current = branches;
    });
    const isTargetInScope = React13.useCallback(
      (target) => {
        if (!target) return false;
        if (container?.contains(target)) return true;
        return Boolean(branchesRef.current?.some((branch) => branch.contains(target)));
      },
      [container]
    );
    const focusScope = React13.useRef({
      paused: false,
      pause() {
        this.paused = true;
      },
      resume() {
        this.paused = false;
      }
    }).current;
    React13.useEffect(() => {
      if (trapped) {
        let handleFocusIn2 = function(event) {
          if (focusScope.paused || !container) return;
          const target = event.target;
          if (isTargetInScope(target)) {
            lastFocusedElementRef.current = target;
          } else {
            focus(lastFocusedElementRef.current, { select: true });
          }
        }, handleFocusOut2 = function(event) {
          if (focusScope.paused || !container) return;
          const relatedTarget = event.relatedTarget;
          if (relatedTarget === null) return;
          if (!isTargetInScope(relatedTarget)) {
            focus(lastFocusedElementRef.current, { select: true });
          }
        }, handleMutations2 = function(mutations) {
          const focusedElement = document.activeElement;
          if (focusedElement !== document.body) return;
          for (const mutation of mutations) {
            if (mutation.removedNodes.length > 0) focus(container);
          }
        };
        var handleFocusIn = handleFocusIn2, handleFocusOut = handleFocusOut2, handleMutations = handleMutations2;
        __name13(handleFocusIn2, "handleFocusIn");
        __name13(handleFocusOut2, "handleFocusOut");
        __name13(handleMutations2, "handleMutations");
        document.addEventListener("focusin", handleFocusIn2);
        document.addEventListener("focusout", handleFocusOut2);
        const mutationObserver = new MutationObserver(handleMutations2);
        if (container) mutationObserver.observe(container, { childList: true, subtree: true });
        return () => {
          document.removeEventListener("focusin", handleFocusIn2);
          document.removeEventListener("focusout", handleFocusOut2);
          mutationObserver.disconnect();
        };
      }
    }, [trapped, container, focusScope.paused, isTargetInScope]);
    React13.useEffect(() => {
      if (container) {
        focusScopesStack.add(focusScope);
        const previouslyFocusedElement = document.activeElement;
        const hasFocusedCandidate = container.contains(previouslyFocusedElement);
        if (!hasFocusedCandidate) {
          const mountEvent = new CustomEvent(AUTOFOCUS_ON_MOUNT, EVENT_OPTIONS);
          container.addEventListener(AUTOFOCUS_ON_MOUNT, onMountAutoFocus);
          container.dispatchEvent(mountEvent);
          if (!mountEvent.defaultPrevented) {
            focusFirst(removeLinks(getTabbableCandidates(container)), { select: true });
            if (document.activeElement === previouslyFocusedElement) {
              focus(container);
            }
          }
        }
        return () => {
          container.removeEventListener(AUTOFOCUS_ON_MOUNT, onMountAutoFocus);
          const ownerDocument = container.ownerDocument;
          const UnmountEvent = CustomEvent;
          setTimeout(() => {
            const unmountEvent = new UnmountEvent(AUTOFOCUS_ON_UNMOUNT, EVENT_OPTIONS);
            container.addEventListener(AUTOFOCUS_ON_UNMOUNT, onUnmountAutoFocus);
            container.dispatchEvent(unmountEvent);
            if (!unmountEvent.defaultPrevented) {
              focus(previouslyFocusedElement ?? ownerDocument.body, { select: true });
            }
            container.removeEventListener(AUTOFOCUS_ON_UNMOUNT, onUnmountAutoFocus);
            focusScopesStack.remove(focusScope);
          }, 0);
        };
      }
    }, [container, onMountAutoFocus, onUnmountAutoFocus, focusScope]);
    const handleKeyDown = React13.useCallback(
      (event) => {
        if (!loop && !trapped) return;
        if (focusScope.paused) return;
        const isTabKey = event.key === "Tab" && !event.altKey && !event.ctrlKey && !event.metaKey;
        const focusedElement = document.activeElement;
        if (isTabKey && focusedElement) {
          const container2 = event.currentTarget;
          const [first, last] = getTabbableEdges(container2);
          const hasTabbableElementsInside = first && last;
          if (!hasTabbableElementsInside) {
            if (focusedElement === container2) event.preventDefault();
          } else {
            if (!event.shiftKey && focusedElement === last) {
              event.preventDefault();
              if (loop) focus(first, { select: true });
            } else if (event.shiftKey && focusedElement === first) {
              event.preventDefault();
              if (loop) focus(last, { select: true });
            }
          }
        }
      },
      [loop, trapped, focusScope.paused]
    );
    return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(Primitive.div, { tabIndex: -1, ...scopeProps, ref: composedRefs, onKeyDown: handleKeyDown });
  }, "FocusScope")
);
var FocusScopeBranchContext = React13.createContext(null);
function FocusScopeBranchProvider({ registry, children }) {
  if (!registry) {
    return children;
  }
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(FocusScopeBranchContext.Provider, { value: registry, children });
}
__name13(FocusScopeBranchProvider, "FocusScopeBranchProvider");
function useFocusScopeBranchRegistry() {
  const [nodes, setNodes] = React13.useState([]);
  const registry = React13.useMemo(
    () => ({
      add: /* @__PURE__ */ __name13((node) => setNodes((prev) => prev.includes(node) ? prev : [...prev, node]), "add"),
      remove: /* @__PURE__ */ __name13((node) => setNodes((prev) => prev.filter((current) => current !== node)), "remove")
    }),
    []
  );
  return { nodes, registry };
}
__name13(useFocusScopeBranchRegistry, "useFocusScopeBranchRegistry");
function useFocusScopeBranch(node) {
  const registry = React13.useContext(FocusScopeBranchContext);
  React13.useEffect(() => {
    if (!node || !registry) return;
    registry.add(node);
    return () => registry.remove(node);
  }, [node, registry]);
}
__name13(useFocusScopeBranch, "useFocusScopeBranch");
function focusFirst(candidates, { select = false } = {}) {
  const previouslyFocusedElement = document.activeElement;
  for (const candidate of candidates) {
    focus(candidate, { select });
    if (document.activeElement !== previouslyFocusedElement) return;
  }
}
__name13(focusFirst, "focusFirst");
function getTabbableEdges(container) {
  const candidates = getTabbableCandidates(container);
  const first = findVisible(candidates, container);
  const last = findVisible(candidates.reverse(), container);
  return [first, last];
}
__name13(getTabbableEdges, "getTabbableEdges");
function getTabbableCandidates(container) {
  const nodes = [];
  const document2 = container.ownerDocument;
  const walker = document2.createTreeWalker(container, NodeFilter.SHOW_ELEMENT, {
    acceptNode: /* @__PURE__ */ __name13((node) => {
      const isHiddenInput = node.tagName === "INPUT" && node.type === "hidden";
      if (node.disabled || node.hidden || isHiddenInput) {
        return NodeFilter.FILTER_SKIP;
      }
      return node.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }, "acceptNode")
  });
  while (walker.nextNode()) {
    nodes.push(walker.currentNode);
  }
  return nodes;
}
__name13(getTabbableCandidates, "getTabbableCandidates");
function findVisible(elements, container) {
  const canUseCheckVisibility = typeof container.checkVisibility === "function" && container.checkVisibility({ checkVisibilityCSS: true });
  for (const element of elements) {
    const hidden = canUseCheckVisibility ? !element.checkVisibility({ checkVisibilityCSS: true }) : isHidden(element, { upTo: container });
    if (!hidden) {
      return element;
    }
  }
}
__name13(findVisible, "findVisible");
function isHidden(node, { upTo }) {
  if (getComputedStyle(node).visibility === "hidden") return true;
  while (node) {
    if (upTo !== void 0 && node === upTo) return false;
    if (getComputedStyle(node).display === "none") return true;
    node = node.parentElement;
  }
  return false;
}
__name13(isHidden, "isHidden");
function isSelectableInput(element) {
  return element.tagName === "INPUT" && typeof element.select === "function";
}
__name13(isSelectableInput, "isSelectableInput");
function focus(element, { select = false } = {}) {
  if (element && element.focus) {
    const ownerDocument = element.ownerDocument ?? document;
    const previouslyFocusedElement = ownerDocument.activeElement;
    element.focus({ preventScroll: true });
    if (element !== previouslyFocusedElement && isSelectableInput(element) && select)
      element.select();
  }
}
__name13(focus, "focus");
var focusScopesStack = createFocusScopesStack();
function createFocusScopesStack() {
  let stack = [];
  return {
    add(focusScope) {
      const activeFocusScope = stack[0];
      if (focusScope !== activeFocusScope) {
        activeFocusScope?.pause();
      }
      stack = arrayRemove(stack, focusScope);
      stack.unshift(focusScope);
    },
    remove(focusScope) {
      stack = arrayRemove(stack, focusScope);
      stack[0]?.resume();
    }
  };
}
__name13(createFocusScopesStack, "createFocusScopesStack");
function arrayRemove(array, item) {
  const updatedArray = [...array];
  const index2 = updatedArray.indexOf(item);
  if (index2 !== -1) {
    updatedArray.splice(index2, 1);
  }
  return updatedArray;
}
__name13(arrayRemove, "arrayRemove");
function removeLinks(items) {
  return items.filter((item) => item.tagName !== "A");
}
__name13(removeLinks, "removeLinks");

// node_modules/@radix-ui/react-id/dist/index.mjs
var React14 = __toESM(require_react(), 1);
var __defProp15 = Object.defineProperty;
var __name14 = (target, value) => __defProp15(target, "name", { value, configurable: true });
var useReactId = React14[" useId ".trim().toString()] || (() => void 0);
var count2 = 0;
function useId(deterministicId) {
  const [id, setId] = React14.useState(useReactId());
  useLayoutEffect2(() => {
    if (!deterministicId) setId((reactId) => reactId ?? String(count2++));
  }, [deterministicId]);
  return deterministicId || (id ? `radix-${id}` : "");
}
__name14(useId, "useId");

// node_modules/@radix-ui/react-popper/dist/index.mjs
var React17 = __toESM(require_react(), 1);

// node_modules/@floating-ui/utils/dist/floating-ui.utils.mjs
var sides = ["top", "right", "bottom", "left"];
var min = Math.min;
var max = Math.max;
var round = Math.round;
var floor = Math.floor;
var createCoords = (v) => ({
  x: v,
  y: v
});
var oppositeSideMap = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function clamp(start, value, end) {
  return max(start, min(value, end));
}
function evaluate(value, param) {
  return typeof value === "function" ? value(param) : value;
}
function getSide(placement) {
  return placement.split("-")[0];
}
function getAlignment(placement) {
  return placement.split("-")[1];
}
function getOppositeAxis(axis) {
  return axis === "x" ? "y" : "x";
}
function getAxisLength(axis) {
  return axis === "y" ? "height" : "width";
}
function getSideAxis(placement) {
  const firstChar = placement[0];
  return firstChar === "t" || firstChar === "b" ? "y" : "x";
}
function getAlignmentAxis(placement) {
  return getOppositeAxis(getSideAxis(placement));
}
function getAlignmentSides(placement, rects, rtl) {
  if (rtl === void 0) {
    rtl = false;
  }
  const alignment = getAlignment(placement);
  const alignmentAxis = getAlignmentAxis(placement);
  const length = getAxisLength(alignmentAxis);
  let mainAlignmentSide = alignmentAxis === "x" ? alignment === (rtl ? "end" : "start") ? "right" : "left" : alignment === "start" ? "bottom" : "top";
  if (rects.reference[length] > rects.floating[length]) {
    mainAlignmentSide = getOppositePlacement(mainAlignmentSide);
  }
  return [mainAlignmentSide, getOppositePlacement(mainAlignmentSide)];
}
function getExpandedPlacements(placement) {
  const oppositePlacement = getOppositePlacement(placement);
  return [getOppositeAlignmentPlacement(placement), oppositePlacement, getOppositeAlignmentPlacement(oppositePlacement)];
}
function getOppositeAlignmentPlacement(placement) {
  return placement.includes("start") ? placement.replace("start", "end") : placement.replace("end", "start");
}
var lrPlacement = ["left", "right"];
var rlPlacement = ["right", "left"];
var tbPlacement = ["top", "bottom"];
var btPlacement = ["bottom", "top"];
function getSideList(side, isStart, rtl) {
  switch (side) {
    case "top":
    case "bottom":
      if (rtl) return isStart ? rlPlacement : lrPlacement;
      return isStart ? lrPlacement : rlPlacement;
    case "left":
    case "right":
      return isStart ? tbPlacement : btPlacement;
    default:
      return [];
  }
}
function getOppositeAxisPlacements(placement, flipAlignment, direction, rtl) {
  const alignment = getAlignment(placement);
  let list = getSideList(getSide(placement), direction === "start", rtl);
  if (alignment) {
    list = list.map((side) => side + "-" + alignment);
    if (flipAlignment) {
      list = list.concat(list.map(getOppositeAlignmentPlacement));
    }
  }
  return list;
}
function getOppositePlacement(placement) {
  const side = getSide(placement);
  return oppositeSideMap[side] + placement.slice(side.length);
}
function expandPaddingObject(padding) {
  var _padding$top, _padding$right, _padding$bottom, _padding$left;
  return {
    top: (_padding$top = padding.top) != null ? _padding$top : 0,
    right: (_padding$right = padding.right) != null ? _padding$right : 0,
    bottom: (_padding$bottom = padding.bottom) != null ? _padding$bottom : 0,
    left: (_padding$left = padding.left) != null ? _padding$left : 0
  };
}
function getPaddingObject(padding) {
  return typeof padding !== "number" ? expandPaddingObject(padding) : {
    top: padding,
    right: padding,
    bottom: padding,
    left: padding
  };
}
function rectToClientRect(rect) {
  const {
    x,
    y,
    width,
    height
  } = rect;
  return {
    width,
    height,
    top: y,
    left: x,
    right: x + width,
    bottom: y + height,
    x,
    y
  };
}

// node_modules/@floating-ui/core/dist/floating-ui.core.mjs
function computeCoordsFromPlacement(_ref, placement, rtl) {
  let {
    reference,
    floating
  } = _ref;
  const sideAxis = getSideAxis(placement);
  const alignmentAxis = getAlignmentAxis(placement);
  const alignLength = getAxisLength(alignmentAxis);
  const side = getSide(placement);
  const isVertical = sideAxis === "y";
  const commonX = reference.x + reference.width / 2 - floating.width / 2;
  const commonY = reference.y + reference.height / 2 - floating.height / 2;
  const commonAlign = reference[alignLength] / 2 - floating[alignLength] / 2;
  let coords;
  switch (side) {
    case "top":
      coords = {
        x: commonX,
        y: reference.y - floating.height
      };
      break;
    case "bottom":
      coords = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;
    case "right":
      coords = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;
    case "left":
      coords = {
        x: reference.x - floating.width,
        y: commonY
      };
      break;
    default:
      coords = {
        x: reference.x,
        y: reference.y
      };
  }
  const alignment = getAlignment(placement);
  if (alignment) {
    coords[alignmentAxis] += commonAlign * (alignment === "end" ? 1 : -1) * (rtl && isVertical ? -1 : 1);
  }
  return coords;
}
async function detectOverflow(state, options) {
  var _await$platform$isEle;
  if (options === void 0) {
    options = {};
  }
  const {
    x,
    y,
    platform: platform2,
    rects,
    elements,
    strategy
  } = state;
  const {
    boundary = "clippingAncestors",
    rootBoundary = "viewport",
    elementContext = "floating",
    altBoundary = false,
    padding = 0
  } = evaluate(options, state);
  const paddingObject = getPaddingObject(padding);
  const altContext = elementContext === "floating" ? "reference" : "floating";
  const element = elements[altBoundary ? altContext : elementContext];
  const clippingClientRect = rectToClientRect(await platform2.getClippingRect({
    element: ((_await$platform$isEle = await (platform2.isElement == null ? void 0 : platform2.isElement(element))) != null ? _await$platform$isEle : true) ? element : element.contextElement || await (platform2.getDocumentElement == null ? void 0 : platform2.getDocumentElement(elements.floating)),
    boundary,
    rootBoundary,
    strategy
  }));
  const rect = elementContext === "floating" ? {
    x,
    y,
    width: rects.floating.width,
    height: rects.floating.height
  } : rects.reference;
  const offsetParent = await (platform2.getOffsetParent == null ? void 0 : platform2.getOffsetParent(elements.floating));
  const offsetScale = await (platform2.isElement == null ? void 0 : platform2.isElement(offsetParent)) && await (platform2.getScale == null ? void 0 : platform2.getScale(offsetParent)) || {
    x: 1,
    y: 1
  };
  const elementClientRect = rectToClientRect(platform2.convertOffsetParentRelativeRectToViewportRelativeRect ? await platform2.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements,
    rect,
    offsetParent,
    strategy
  }) : rect);
  return {
    top: (clippingClientRect.top - elementClientRect.top + paddingObject.top) / offsetScale.y,
    bottom: (elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom) / offsetScale.y,
    left: (clippingClientRect.left - elementClientRect.left + paddingObject.left) / offsetScale.x,
    right: (elementClientRect.right - clippingClientRect.right + paddingObject.right) / offsetScale.x
  };
}
var MAX_RESET_COUNT = 50;
var computePosition = async (reference, floating, config) => {
  const {
    placement = "bottom",
    strategy = "absolute",
    middleware = [],
    platform: platform2
  } = config;
  const platformWithDetectOverflow = platform2.detectOverflow ? platform2 : {
    ...platform2,
    detectOverflow
  };
  const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(floating));
  let rects = await platform2.getElementRects({
    reference,
    floating,
    strategy
  });
  let {
    x,
    y
  } = computeCoordsFromPlacement(rects, placement, rtl);
  let statefulPlacement = placement;
  let resetCount = 0;
  const middlewareData = {};
  for (let i = 0; i < middleware.length; i++) {
    const currentMiddleware = middleware[i];
    if (!currentMiddleware) {
      continue;
    }
    const {
      name,
      fn
    } = currentMiddleware;
    const {
      x: nextX,
      y: nextY,
      data,
      reset
    } = await fn({
      x,
      y,
      initialPlacement: placement,
      placement: statefulPlacement,
      strategy,
      middlewareData,
      rects,
      platform: platformWithDetectOverflow,
      elements: {
        reference,
        floating
      }
    });
    x = nextX != null ? nextX : x;
    y = nextY != null ? nextY : y;
    middlewareData[name] = {
      ...middlewareData[name],
      ...data
    };
    if (reset && resetCount < MAX_RESET_COUNT) {
      resetCount++;
      if (typeof reset === "object") {
        if (reset.placement) {
          statefulPlacement = reset.placement;
        }
        if (reset.rects) {
          rects = reset.rects === true ? await platform2.getElementRects({
            reference,
            floating,
            strategy
          }) : reset.rects;
        }
        ({
          x,
          y
        } = computeCoordsFromPlacement(rects, statefulPlacement, rtl));
      }
      i = -1;
    }
  }
  return {
    x,
    y,
    placement: statefulPlacement,
    strategy,
    middlewareData
  };
};
var arrow = (options) => ({
  name: "arrow",
  options,
  async fn(state) {
    const {
      x,
      y,
      placement,
      rects,
      platform: platform2,
      elements,
      middlewareData
    } = state;
    const {
      element,
      padding = 0
    } = evaluate(options, state) || {};
    if (element == null) {
      return {};
    }
    const paddingObject = getPaddingObject(padding);
    const coords = {
      x,
      y
    };
    const axis = getAlignmentAxis(placement);
    const length = getAxisLength(axis);
    const arrowDimensions = await platform2.getDimensions(element);
    const isYAxis = axis === "y";
    const minProp = isYAxis ? "top" : "left";
    const maxProp = isYAxis ? "bottom" : "right";
    const clientProp = isYAxis ? "clientHeight" : "clientWidth";
    const endDiff = rects.reference[length] + rects.reference[axis] - coords[axis] - rects.floating[length];
    const startDiff = coords[axis] - rects.reference[axis];
    const arrowOffsetParent = await (platform2.getOffsetParent == null ? void 0 : platform2.getOffsetParent(element));
    let clientSize = arrowOffsetParent ? arrowOffsetParent[clientProp] : 0;
    if (!clientSize || !await (platform2.isElement == null ? void 0 : platform2.isElement(arrowOffsetParent))) {
      clientSize = elements.floating[clientProp] || rects.floating[length];
    }
    const centerToReference = endDiff / 2 - startDiff / 2;
    const largestPossiblePadding = clientSize / 2 - arrowDimensions[length] / 2 - 1;
    const minPadding = min(paddingObject[minProp], largestPossiblePadding);
    const maxPadding = min(paddingObject[maxProp], largestPossiblePadding);
    const max2 = clientSize - arrowDimensions[length] - maxPadding;
    const center = clientSize / 2 - arrowDimensions[length] / 2 + centerToReference;
    const offset4 = clamp(minPadding, center, max2);
    const shouldAddOffset = !middlewareData.arrow && getAlignment(placement) != null && center !== offset4 && rects.reference[length] / 2 - (center < minPadding ? minPadding : maxPadding) - arrowDimensions[length] / 2 < 0;
    const alignmentOffset = shouldAddOffset ? center < minPadding ? center - minPadding : center - max2 : 0;
    return {
      [axis]: coords[axis] + alignmentOffset,
      data: {
        [axis]: offset4,
        centerOffset: center - offset4 - alignmentOffset,
        ...shouldAddOffset && {
          alignmentOffset
        }
      },
      reset: shouldAddOffset
    };
  }
});
var flip = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "flip",
    options,
    async fn(state) {
      var _middlewareData$arrow, _middlewareData$flip;
      const {
        placement,
        middlewareData,
        rects,
        initialPlacement,
        platform: platform2,
        elements
      } = state;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = true,
        fallbackPlacements: specifiedFallbackPlacements,
        fallbackStrategy = "bestFit",
        fallbackAxisSideDirection = "none",
        flipAlignment = true,
        ...detectOverflowOptions
      } = evaluate(options, state);
      if ((_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
        return {};
      }
      const side = getSide(placement);
      const initialSideAxis = getSideAxis(initialPlacement);
      const isBasePlacement = getSide(initialPlacement) === initialPlacement;
      const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating));
      const fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipAlignment ? [getOppositePlacement(initialPlacement)] : getExpandedPlacements(initialPlacement));
      const hasFallbackAxisSideDirection = fallbackAxisSideDirection !== "none";
      if (!specifiedFallbackPlacements && hasFallbackAxisSideDirection) {
        fallbackPlacements.push(...getOppositeAxisPlacements(initialPlacement, flipAlignment, fallbackAxisSideDirection, rtl));
      }
      const placements2 = [initialPlacement, ...fallbackPlacements];
      const overflow = await platform2.detectOverflow(state, detectOverflowOptions);
      const overflows = [];
      let overflowsData = ((_middlewareData$flip = middlewareData.flip) == null ? void 0 : _middlewareData$flip.overflows) || [];
      if (checkMainAxis) {
        overflows.push(overflow[side]);
      }
      if (checkCrossAxis) {
        const sides2 = getAlignmentSides(placement, rects, rtl);
        overflows.push(overflow[sides2[0]], overflow[sides2[1]]);
      }
      overflowsData = [...overflowsData, {
        placement,
        overflows
      }];
      if (!overflows.every((side2) => side2 <= 0)) {
        var _middlewareData$flip2, _overflowsData$filter;
        const nextIndex = (((_middlewareData$flip2 = middlewareData.flip) == null ? void 0 : _middlewareData$flip2.index) || 0) + 1;
        const nextPlacement = placements2[nextIndex];
        if (nextPlacement) {
          const ignoreCrossAxisOverflow = checkCrossAxis === "alignment" ? initialSideAxis !== getSideAxis(nextPlacement) : false;
          if (!ignoreCrossAxisOverflow || // We leave the current main axis only if every placement on that axis
          // overflows the main axis.
          overflowsData.every((d) => getSideAxis(d.placement) === initialSideAxis ? d.overflows[0] > 0 : true)) {
            return {
              data: {
                index: nextIndex,
                overflows: overflowsData
              },
              reset: {
                placement: nextPlacement
              }
            };
          }
        }
        let resetPlacement = (_overflowsData$filter = overflowsData.filter((d) => d.overflows[0] <= 0).sort((a, b) => a.overflows[1] - b.overflows[1])[0]) == null ? void 0 : _overflowsData$filter.placement;
        if (!resetPlacement) {
          switch (fallbackStrategy) {
            case "bestFit": {
              var _overflowsData$filter2;
              const placement2 = (_overflowsData$filter2 = overflowsData.filter((d) => {
                if (hasFallbackAxisSideDirection) {
                  const currentSideAxis = getSideAxis(d.placement);
                  return currentSideAxis === initialSideAxis || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  currentSideAxis === "y";
                }
                return true;
              }).map((d) => [d.placement, d.overflows.filter((overflow2) => overflow2 > 0).reduce((acc, overflow2) => acc + overflow2, 0)]).sort((a, b) => a[1] - b[1])[0]) == null ? void 0 : _overflowsData$filter2[0];
              if (placement2) {
                resetPlacement = placement2;
              }
              break;
            }
            case "initialPlacement":
              resetPlacement = initialPlacement;
              break;
          }
        }
        if (placement !== resetPlacement) {
          return {
            reset: {
              placement: resetPlacement
            }
          };
        }
      }
      return {};
    }
  };
};
function getSideOffsets(overflow, rect) {
  return {
    top: overflow.top - rect.height,
    right: overflow.right - rect.width,
    bottom: overflow.bottom - rect.height,
    left: overflow.left - rect.width
  };
}
function isAnySideFullyClipped(overflow) {
  return sides.some((side) => overflow[side] >= 0);
}
var hide = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "hide",
    options,
    async fn(state) {
      const {
        rects,
        platform: platform2
      } = state;
      const {
        strategy = "referenceHidden",
        ...detectOverflowOptions
      } = evaluate(options, state);
      switch (strategy) {
        case "referenceHidden": {
          const overflow = await platform2.detectOverflow(state, {
            ...detectOverflowOptions,
            elementContext: "reference"
          });
          const offsets = getSideOffsets(overflow, rects.reference);
          return {
            data: {
              referenceHiddenOffsets: offsets,
              referenceHidden: isAnySideFullyClipped(offsets)
            }
          };
        }
        case "escaped": {
          const overflow = await platform2.detectOverflow(state, {
            ...detectOverflowOptions,
            altBoundary: true
          });
          const offsets = getSideOffsets(overflow, rects.floating);
          return {
            data: {
              escapedOffsets: offsets,
              escaped: isAnySideFullyClipped(offsets)
            }
          };
        }
        default: {
          return {};
        }
      }
    }
  };
};
var originSides = /* @__PURE__ */ new Set(["left", "top"]);
async function convertValueToCoords(state, options) {
  const {
    placement,
    platform: platform2,
    elements
  } = state;
  const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating));
  const side = getSide(placement);
  const alignment = getAlignment(placement);
  const isVertical = getSideAxis(placement) === "y";
  const mainAxisMulti = originSides.has(side) ? -1 : 1;
  const crossAxisMulti = rtl && isVertical ? -1 : 1;
  const rawValue = evaluate(options, state);
  let {
    mainAxis,
    crossAxis,
    alignmentAxis
  } = typeof rawValue === "number" ? {
    mainAxis: rawValue,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: rawValue.mainAxis || 0,
    crossAxis: rawValue.crossAxis || 0,
    alignmentAxis: rawValue.alignmentAxis
  };
  if (alignment && typeof alignmentAxis === "number") {
    crossAxis = alignment === "end" ? alignmentAxis * -1 : alignmentAxis;
  }
  return isVertical ? {
    x: crossAxis * crossAxisMulti,
    y: mainAxis * mainAxisMulti
  } : {
    x: mainAxis * mainAxisMulti,
    y: crossAxis * crossAxisMulti
  };
}
var offset = function(options) {
  if (options === void 0) {
    options = 0;
  }
  return {
    name: "offset",
    options,
    async fn(state) {
      var _middlewareData$offse, _middlewareData$arrow;
      const {
        x,
        y,
        placement,
        middlewareData
      } = state;
      const diffCoords = await convertValueToCoords(state, options);
      if (placement === ((_middlewareData$offse = middlewareData.offset) == null ? void 0 : _middlewareData$offse.placement) && (_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
        return {};
      }
      return {
        x: x + diffCoords.x,
        y: y + diffCoords.y,
        data: {
          ...diffCoords,
          placement
        }
      };
    }
  };
};
var shift = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "shift",
    options,
    async fn(state) {
      const {
        x,
        y,
        placement,
        platform: platform2
      } = state;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = false,
        limiter = {
          fn: (_ref) => {
            let {
              x: x2,
              y: y2
            } = _ref;
            return {
              x: x2,
              y: y2
            };
          }
        },
        ...detectOverflowOptions
      } = evaluate(options, state);
      const coords = {
        x,
        y
      };
      const overflow = await platform2.detectOverflow(state, detectOverflowOptions);
      const crossAxis = getSideAxis(placement);
      const mainAxis = getOppositeAxis(crossAxis);
      let mainAxisCoord = coords[mainAxis];
      let crossAxisCoord = coords[crossAxis];
      const clampCoord = (axis, coord) => clamp(coord + overflow[axis === "y" ? "top" : "left"], coord, coord - overflow[axis === "y" ? "bottom" : "right"]);
      if (checkMainAxis) {
        mainAxisCoord = clampCoord(mainAxis, mainAxisCoord);
      }
      if (checkCrossAxis) {
        crossAxisCoord = clampCoord(crossAxis, crossAxisCoord);
      }
      const limitedCoords = limiter.fn({
        ...state,
        [mainAxis]: mainAxisCoord,
        [crossAxis]: crossAxisCoord
      });
      return {
        ...limitedCoords,
        data: {
          x: limitedCoords.x - x,
          y: limitedCoords.y - y,
          enabled: {
            [mainAxis]: checkMainAxis,
            [crossAxis]: checkCrossAxis
          }
        }
      };
    }
  };
};
var limitShift = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    options,
    fn(state) {
      var _rawOffset$mainAxis, _rawOffset$crossAxis;
      const {
        x,
        y,
        placement,
        rects,
        middlewareData
      } = state;
      const {
        offset: offset4 = 0,
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = true
      } = evaluate(options, state);
      const coords = {
        x,
        y
      };
      const crossAxis = getSideAxis(placement);
      const mainAxis = getOppositeAxis(crossAxis);
      let mainAxisCoord = coords[mainAxis];
      let crossAxisCoord = coords[crossAxis];
      const rawOffset = evaluate(offset4, state);
      const computedOffset = typeof rawOffset === "number" ? {
        mainAxis: rawOffset,
        crossAxis: 0
      } : {
        mainAxis: (_rawOffset$mainAxis = rawOffset.mainAxis) != null ? _rawOffset$mainAxis : 0,
        crossAxis: (_rawOffset$crossAxis = rawOffset.crossAxis) != null ? _rawOffset$crossAxis : 0
      };
      if (checkMainAxis) {
        const len = mainAxis === "y" ? "height" : "width";
        const limitMin = rects.reference[mainAxis] - rects.floating[len] + computedOffset.mainAxis;
        const limitMax = rects.reference[mainAxis] + rects.reference[len] - computedOffset.mainAxis;
        if (mainAxisCoord < limitMin) {
          mainAxisCoord = limitMin;
        } else if (mainAxisCoord > limitMax) {
          mainAxisCoord = limitMax;
        }
      }
      if (checkCrossAxis) {
        var _middlewareData$offse, _middlewareData$offse2;
        const len = mainAxis === "y" ? "width" : "height";
        const isOriginSide = originSides.has(getSide(placement));
        const limitMin = rects.reference[crossAxis] - rects.floating[len] + (isOriginSide ? ((_middlewareData$offse = middlewareData.offset) == null ? void 0 : _middlewareData$offse[crossAxis]) || 0 : 0) + (isOriginSide ? 0 : computedOffset.crossAxis);
        const limitMax = rects.reference[crossAxis] + rects.reference[len] + (isOriginSide ? 0 : ((_middlewareData$offse2 = middlewareData.offset) == null ? void 0 : _middlewareData$offse2[crossAxis]) || 0) - (isOriginSide ? computedOffset.crossAxis : 0);
        if (crossAxisCoord < limitMin) {
          crossAxisCoord = limitMin;
        } else if (crossAxisCoord > limitMax) {
          crossAxisCoord = limitMax;
        }
      }
      return {
        [mainAxis]: mainAxisCoord,
        [crossAxis]: crossAxisCoord
      };
    }
  };
};
var size = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "size",
    options,
    async fn(state) {
      const {
        placement,
        rects,
        platform: platform2,
        elements
      } = state;
      const {
        apply = () => {
        },
        ...detectOverflowOptions
      } = evaluate(options, state);
      const overflow = await platform2.detectOverflow(state, detectOverflowOptions);
      const side = getSide(placement);
      const alignment = getAlignment(placement);
      const isYAxis = getSideAxis(placement) === "y";
      const {
        width,
        height
      } = rects.floating;
      let heightSide;
      let widthSide;
      if (side === "top" || side === "bottom") {
        heightSide = side;
        widthSide = alignment === (await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating)) ? "start" : "end") ? "left" : "right";
      } else {
        widthSide = side;
        heightSide = alignment === "end" ? "top" : "bottom";
      }
      const maximumClippingHeight = height - overflow.top - overflow.bottom;
      const maximumClippingWidth = width - overflow.left - overflow.right;
      const overflowAvailableHeight = min(height - overflow[heightSide], maximumClippingHeight);
      const overflowAvailableWidth = min(width - overflow[widthSide], maximumClippingWidth);
      const shiftData = state.middlewareData.shift;
      const noShift = !shiftData;
      let availableHeight = overflowAvailableHeight;
      let availableWidth = overflowAvailableWidth;
      if (shiftData != null && shiftData.enabled.x) {
        availableWidth = maximumClippingWidth;
      }
      if (shiftData != null && shiftData.enabled.y) {
        availableHeight = maximumClippingHeight;
      }
      if (noShift && !alignment) {
        if (isYAxis) {
          availableWidth = width - 2 * max(overflow.left, overflow.right);
        } else {
          availableHeight = height - 2 * max(overflow.top, overflow.bottom);
        }
      }
      await apply({
        ...state,
        availableWidth,
        availableHeight
      });
      const nextDimensions = await platform2.getDimensions(elements.floating);
      if (width !== nextDimensions.width || height !== nextDimensions.height) {
        return {
          reset: {
            rects: true
          }
        };
      }
      return {};
    }
  };
};

// node_modules/@floating-ui/utils/dist/floating-ui.utils.dom.mjs
function hasWindow() {
  return typeof window !== "undefined";
}
function getNodeName(node) {
  if (isNode(node)) {
    return (node.nodeName || "").toLowerCase();
  }
  return "#document";
}
function getWindow(node) {
  var _node$ownerDocument;
  return (node == null || (_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.defaultView) || window;
}
function getDocumentElement(node) {
  var _ref;
  return (_ref = (isNode(node) ? node.ownerDocument : node.document) || window.document) == null ? void 0 : _ref.documentElement;
}
function isNode(value) {
  if (!hasWindow()) {
    return false;
  }
  return value instanceof Node || value instanceof getWindow(value).Node;
}
function isElement(value) {
  if (!hasWindow()) {
    return false;
  }
  return value instanceof Element || value instanceof getWindow(value).Element;
}
function isHTMLElement(value) {
  if (!hasWindow()) {
    return false;
  }
  return value instanceof HTMLElement || value instanceof getWindow(value).HTMLElement;
}
function isShadowRoot(value) {
  if (!hasWindow() || typeof ShadowRoot === "undefined") {
    return false;
  }
  return value instanceof ShadowRoot || value instanceof getWindow(value).ShadowRoot;
}
function isOverflowElement(element) {
  const {
    overflow,
    overflowX,
    overflowY,
    display
  } = getComputedStyle2(element);
  return /auto|scroll|overlay|hidden|clip/.test(overflow + overflowY + overflowX) && display !== "inline" && display !== "contents";
}
function isTableElement(element) {
  return /^(table|td|th)$/.test(getNodeName(element));
}
function isTopLayer(element) {
  try {
    if (element.matches(":popover-open")) {
      return true;
    }
  } catch (_e) {
  }
  try {
    return element.matches(":modal");
  } catch (_e) {
    return false;
  }
}
var willChangeRe = /transform|translate|scale|rotate|perspective|filter/;
var containRe = /paint|layout|strict|content/;
var isNotNone = (value) => !!value && value !== "none";
var isWebKitValue;
function isContainingBlock(elementOrCss) {
  const css = isElement(elementOrCss) ? getComputedStyle2(elementOrCss) : elementOrCss;
  return isNotNone(css.transform) || isNotNone(css.translate) || isNotNone(css.scale) || isNotNone(css.rotate) || isNotNone(css.perspective) || !isWebKit() && (isNotNone(css.backdropFilter) || isNotNone(css.filter)) || willChangeRe.test(css.willChange || "") || containRe.test(css.contain || "");
}
function getContainingBlock(element) {
  let currentNode = getParentNode(element);
  while (isHTMLElement(currentNode) && !isLastTraversableNode(currentNode)) {
    if (isContainingBlock(currentNode)) {
      return currentNode;
    } else if (isTopLayer(currentNode)) {
      return null;
    }
    currentNode = getParentNode(currentNode);
  }
  return null;
}
function isWebKit() {
  if (isWebKitValue == null) {
    isWebKitValue = typeof CSS !== "undefined" && CSS.supports && CSS.supports("-webkit-backdrop-filter", "none");
  }
  return isWebKitValue;
}
function isLastTraversableNode(node) {
  return /^(html|body|#document)$/.test(getNodeName(node));
}
function getComputedStyle2(element) {
  return getWindow(element).getComputedStyle(element);
}
function getNodeScroll(element) {
  if (isElement(element)) {
    return {
      scrollLeft: element.scrollLeft,
      scrollTop: element.scrollTop
    };
  }
  return {
    scrollLeft: element.scrollX,
    scrollTop: element.scrollY
  };
}
function getParentNode(node) {
  if (getNodeName(node) === "html") {
    return node;
  }
  const result = (
    // Step into the shadow DOM of the parent of a slotted node.
    node.assignedSlot || // DOM Element detected.
    node.parentNode || // ShadowRoot detected.
    isShadowRoot(node) && node.host || // Fallback.
    getDocumentElement(node)
  );
  return isShadowRoot(result) ? result.host : result;
}
function getNearestOverflowAncestor(node) {
  const parentNode = getParentNode(node);
  if (isLastTraversableNode(parentNode)) {
    return (node.ownerDocument || node).body;
  }
  if (isHTMLElement(parentNode) && isOverflowElement(parentNode)) {
    return parentNode;
  }
  return getNearestOverflowAncestor(parentNode);
}
function getOverflowAncestors(node, list, traverseIframes) {
  var _node$ownerDocument2;
  if (list === void 0) {
    list = [];
  }
  if (traverseIframes === void 0) {
    traverseIframes = true;
  }
  const scrollableAncestor = getNearestOverflowAncestor(node);
  const isBody = scrollableAncestor === ((_node$ownerDocument2 = node.ownerDocument) == null ? void 0 : _node$ownerDocument2.body);
  const win = getWindow(scrollableAncestor);
  if (isBody) {
    const frameElement = getFrameElement(win);
    return list.concat(win, win.visualViewport || [], isOverflowElement(scrollableAncestor) ? scrollableAncestor : [], frameElement && traverseIframes ? getOverflowAncestors(frameElement) : []);
  } else {
    return list.concat(scrollableAncestor, getOverflowAncestors(scrollableAncestor, [], traverseIframes));
  }
}
function getFrameElement(win) {
  return win.parent && Object.getPrototypeOf(win.parent) ? win.frameElement : null;
}

// node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs
function getCssDimensions(element) {
  const css = getComputedStyle2(element);
  let width = parseFloat(css.width) || 0;
  let height = parseFloat(css.height) || 0;
  const hasOffset = isHTMLElement(element);
  const offsetWidth = hasOffset ? element.offsetWidth : width;
  const offsetHeight = hasOffset ? element.offsetHeight : height;
  const shouldFallback = round(width) !== offsetWidth || round(height) !== offsetHeight;
  if (shouldFallback) {
    width = offsetWidth;
    height = offsetHeight;
  }
  return {
    width,
    height,
    $: shouldFallback
  };
}
function unwrapElement(element) {
  return !isElement(element) ? element.contextElement : element;
}
function getScale(element) {
  const domElement = unwrapElement(element);
  if (!isHTMLElement(domElement)) {
    return createCoords(1);
  }
  const rect = domElement.getBoundingClientRect();
  const {
    width,
    height,
    $
  } = getCssDimensions(domElement);
  let x = ($ ? round(rect.width) : rect.width) / width;
  let y = ($ ? round(rect.height) : rect.height) / height;
  if (!x || !Number.isFinite(x)) {
    x = 1;
  }
  if (!y || !Number.isFinite(y)) {
    y = 1;
  }
  return {
    x,
    y
  };
}
var noOffsets = /* @__PURE__ */ createCoords(0);
function getVisualOffsets(element) {
  const win = getWindow(element);
  if (!isWebKit() || !win.visualViewport) {
    return noOffsets;
  }
  return {
    x: win.visualViewport.offsetLeft,
    y: win.visualViewport.offsetTop
  };
}
function shouldAddVisualOffsets(element, isFixed, floatingOffsetParent) {
  if (isFixed === void 0) {
    isFixed = false;
  }
  return !!floatingOffsetParent && isFixed && floatingOffsetParent === getWindow(element);
}
function getBoundingClientRect(element, includeScale, isFixedStrategy, offsetParent) {
  if (includeScale === void 0) {
    includeScale = false;
  }
  if (isFixedStrategy === void 0) {
    isFixedStrategy = false;
  }
  const clientRect = element.getBoundingClientRect();
  const domElement = unwrapElement(element);
  let scale = createCoords(1);
  if (includeScale) {
    if (offsetParent) {
      if (isElement(offsetParent)) {
        scale = getScale(offsetParent);
      }
    } else {
      scale = getScale(element);
    }
  }
  const visualOffsets = shouldAddVisualOffsets(domElement, isFixedStrategy, offsetParent) ? getVisualOffsets(domElement) : createCoords(0);
  let x = (clientRect.left + visualOffsets.x) / scale.x;
  let y = (clientRect.top + visualOffsets.y) / scale.y;
  let width = clientRect.width / scale.x;
  let height = clientRect.height / scale.y;
  if (domElement && offsetParent) {
    const win = getWindow(domElement);
    const offsetWin = isElement(offsetParent) ? getWindow(offsetParent) : offsetParent;
    let currentWin = win;
    let currentIFrame = getFrameElement(currentWin);
    while (currentIFrame && offsetWin !== currentWin) {
      const iframeScale = getScale(currentIFrame);
      const iframeRect = currentIFrame.getBoundingClientRect();
      const css = getComputedStyle2(currentIFrame);
      const left = iframeRect.left + (currentIFrame.clientLeft + parseFloat(css.paddingLeft)) * iframeScale.x;
      const top = iframeRect.top + (currentIFrame.clientTop + parseFloat(css.paddingTop)) * iframeScale.y;
      x *= iframeScale.x;
      y *= iframeScale.y;
      width *= iframeScale.x;
      height *= iframeScale.y;
      x += left;
      y += top;
      currentWin = getWindow(currentIFrame);
      currentIFrame = getFrameElement(currentWin);
    }
  }
  return rectToClientRect({
    width,
    height,
    x,
    y
  });
}
function getWindowScrollBarX(element, rect) {
  const leftScroll = getNodeScroll(element).scrollLeft;
  if (!rect) {
    return getBoundingClientRect(getDocumentElement(element)).left + leftScroll;
  }
  return rect.left + leftScroll;
}
function getHTMLOffset(documentElement, scroll) {
  const htmlRect = documentElement.getBoundingClientRect();
  const x = htmlRect.left + scroll.scrollLeft - getWindowScrollBarX(documentElement, htmlRect);
  const y = htmlRect.top + scroll.scrollTop;
  return {
    x,
    y
  };
}
function convertOffsetParentRelativeRectToViewportRelativeRect(_ref) {
  let {
    elements,
    rect,
    offsetParent,
    strategy
  } = _ref;
  const isFixed = strategy === "fixed";
  const documentElement = getDocumentElement(offsetParent);
  const topLayer = elements ? isTopLayer(elements.floating) : false;
  if (offsetParent === documentElement || topLayer && isFixed) {
    return rect;
  }
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  let scale = createCoords(1);
  const offsets = createCoords(0);
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  if (isOffsetParentAnElement || !isFixed) {
    if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isOffsetParentAnElement) {
      const offsetRect = getBoundingClientRect(offsetParent);
      scale = getScale(offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    }
  }
  const htmlOffset = documentElement && !isOffsetParentAnElement && !isFixed ? getHTMLOffset(documentElement, scroll) : createCoords(0);
  return {
    width: rect.width * scale.x,
    height: rect.height * scale.y,
    x: rect.x * scale.x - scroll.scrollLeft * scale.x + offsets.x + htmlOffset.x,
    y: rect.y * scale.y - scroll.scrollTop * scale.y + offsets.y + htmlOffset.y
  };
}
function getClientRects(element) {
  return element.getClientRects ? Array.from(element.getClientRects()) : [];
}
function getDocumentRect(html) {
  const scroll = getNodeScroll(html);
  const body = html.ownerDocument.body;
  const width = max(html.scrollWidth, html.clientWidth, body.scrollWidth, body.clientWidth);
  const height = max(html.scrollHeight, html.clientHeight, body.scrollHeight, body.clientHeight);
  let x = -scroll.scrollLeft + getWindowScrollBarX(html);
  const y = -scroll.scrollTop;
  if (getComputedStyle2(body).direction === "rtl") {
    x += max(html.clientWidth, body.clientWidth) - width;
  }
  return {
    width,
    height,
    x,
    y
  };
}
var SCROLLBAR_MAX = 25;
function getViewportRect(element, strategy, rootBoundary) {
  if (rootBoundary === void 0) {
    rootBoundary = "viewport";
  }
  const isLayoutViewport = rootBoundary === "layoutViewport";
  const win = getWindow(element);
  const html = getDocumentElement(element);
  const visualViewport = win.visualViewport;
  let width = html.clientWidth;
  let height = html.clientHeight;
  let x = 0;
  let y = 0;
  if (visualViewport) {
    const layoutRelativeClientCoords = !isWebKit() || strategy === "fixed";
    if (isLayoutViewport) {
      if (!layoutRelativeClientCoords) {
        x = -visualViewport.offsetLeft;
        y = -visualViewport.offsetTop;
      }
    } else {
      width = visualViewport.width;
      height = visualViewport.height;
      if (layoutRelativeClientCoords) {
        x = visualViewport.offsetLeft;
        y = visualViewport.offsetTop;
      }
    }
  }
  const windowScrollbarX = getWindowScrollBarX(html);
  if (windowScrollbarX <= 0) {
    const doc = html.ownerDocument;
    const body = doc.body;
    const bodyStyles = getComputedStyle(body);
    const bodyMarginInline = doc.compatMode === "CSS1Compat" ? parseFloat(bodyStyles.marginLeft) + parseFloat(bodyStyles.marginRight) || 0 : 0;
    const reservedWidth = Math.abs(html.clientWidth - body.clientWidth - bodyMarginInline);
    const gutter = getComputedStyle(html).scrollbarGutter === "stable both-edges" ? reservedWidth / 2 : reservedWidth;
    if (gutter <= SCROLLBAR_MAX) {
      width -= gutter;
    }
  }
  return {
    width,
    height,
    x,
    y
  };
}
function getInnerBoundingClientRect(element, strategy) {
  const clientRect = getBoundingClientRect(element, true, strategy === "fixed");
  const top = clientRect.top + element.clientTop;
  const left = clientRect.left + element.clientLeft;
  const scale = getScale(element);
  const width = element.clientWidth * scale.x;
  const height = element.clientHeight * scale.y;
  const x = left * scale.x;
  const y = top * scale.y;
  return {
    width,
    height,
    x,
    y
  };
}
function getClientRectFromClippingAncestor(element, clippingAncestor, strategy) {
  let rect;
  if (clippingAncestor === "viewport" || clippingAncestor === "layoutViewport") {
    rect = getViewportRect(element, strategy, clippingAncestor);
  } else if (clippingAncestor === "document") {
    rect = getDocumentRect(getDocumentElement(element));
  } else if (isElement(clippingAncestor)) {
    rect = getInnerBoundingClientRect(clippingAncestor, strategy);
  } else {
    const visualOffsets = getVisualOffsets(element);
    rect = {
      x: clippingAncestor.x - visualOffsets.x,
      y: clippingAncestor.y - visualOffsets.y,
      width: clippingAncestor.width,
      height: clippingAncestor.height
    };
  }
  return rectToClientRect(rect);
}
function getClippingElementAncestors(element, cache) {
  const cachedResult = cache.get(element);
  if (cachedResult) {
    return cachedResult;
  }
  let result = getOverflowAncestors(element, [], false).filter((el) => isElement(el) && getNodeName(el) !== "body");
  let lastKeptComputedStyle = null;
  const elementIsFixed = getComputedStyle2(element).position === "fixed";
  let currentNode = elementIsFixed ? getParentNode(element) : element;
  while (isElement(currentNode) && !isLastTraversableNode(currentNode)) {
    const computedStyle = getComputedStyle2(currentNode);
    const currentNodeIsContaining = isContainingBlock(currentNode);
    const lastPosition = lastKeptComputedStyle ? lastKeptComputedStyle.position : elementIsFixed ? "fixed" : "";
    const shouldDropCurrentNode = !currentNodeIsContaining && (lastPosition === "fixed" || lastPosition === "absolute" && computedStyle.position === "static");
    if (shouldDropCurrentNode) {
      result = result.filter((ancestor) => ancestor !== currentNode);
    } else {
      lastKeptComputedStyle = computedStyle;
    }
    currentNode = getParentNode(currentNode);
  }
  cache.set(element, result);
  return result;
}
function getClippingRect(_ref) {
  let {
    element,
    boundary,
    rootBoundary,
    strategy
  } = _ref;
  const elementClippingAncestors = boundary === "clippingAncestors" ? isTopLayer(element) ? [] : getClippingElementAncestors(element, this._c) : [].concat(boundary);
  const clippingAncestors = [...elementClippingAncestors, rootBoundary];
  const firstRect = getClientRectFromClippingAncestor(element, clippingAncestors[0], strategy);
  let top = firstRect.top;
  let right = firstRect.right;
  let bottom = firstRect.bottom;
  let left = firstRect.left;
  for (let i = 1; i < clippingAncestors.length; i++) {
    const rect = getClientRectFromClippingAncestor(element, clippingAncestors[i], strategy);
    top = max(rect.top, top);
    right = min(rect.right, right);
    bottom = min(rect.bottom, bottom);
    left = max(rect.left, left);
  }
  return {
    width: right - left,
    height: bottom - top,
    x: left,
    y: top
  };
}
function getDimensions(element) {
  const {
    width,
    height
  } = getCssDimensions(element);
  return {
    width,
    height
  };
}
function getRectRelativeToOffsetParent(element, offsetParent, strategy) {
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  const documentElement = getDocumentElement(offsetParent);
  const isFixed = strategy === "fixed";
  const rect = getBoundingClientRect(element, true, isFixed, offsetParent);
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const offsets = createCoords(0);
  if (isOffsetParentAnElement || !isFixed) {
    if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isOffsetParentAnElement) {
      const offsetRect = getBoundingClientRect(offsetParent, true, isFixed, offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    }
  }
  if (!isOffsetParentAnElement && documentElement) {
    offsets.x = getWindowScrollBarX(documentElement);
  }
  const htmlOffset = documentElement && !isOffsetParentAnElement && !isFixed ? getHTMLOffset(documentElement, scroll) : createCoords(0);
  const x = rect.left + scroll.scrollLeft - offsets.x - htmlOffset.x;
  const y = rect.top + scroll.scrollTop - offsets.y - htmlOffset.y;
  return {
    x,
    y,
    width: rect.width,
    height: rect.height
  };
}
function isStaticPositioned(element) {
  return getComputedStyle2(element).position === "static";
}
function getTrueOffsetParent(element, polyfill) {
  if (!isHTMLElement(element) || getComputedStyle2(element).position === "fixed") {
    return null;
  }
  if (polyfill) {
    return polyfill(element);
  }
  let rawOffsetParent = element.offsetParent;
  if (getDocumentElement(element) === rawOffsetParent) {
    rawOffsetParent = rawOffsetParent.ownerDocument.body;
  }
  return rawOffsetParent;
}
function getOffsetParent(element, polyfill) {
  const win = getWindow(element);
  if (isTopLayer(element)) {
    return win;
  }
  if (!isHTMLElement(element)) {
    let svgOffsetParent = getParentNode(element);
    while (svgOffsetParent && !isLastTraversableNode(svgOffsetParent)) {
      if (isElement(svgOffsetParent) && !isStaticPositioned(svgOffsetParent)) {
        return svgOffsetParent;
      }
      svgOffsetParent = getParentNode(svgOffsetParent);
    }
    return win;
  }
  let offsetParent = getTrueOffsetParent(element, polyfill);
  while (offsetParent && isTableElement(offsetParent) && isStaticPositioned(offsetParent)) {
    offsetParent = getTrueOffsetParent(offsetParent, polyfill);
  }
  if (offsetParent && isLastTraversableNode(offsetParent) && isStaticPositioned(offsetParent) && !isContainingBlock(offsetParent)) {
    return win;
  }
  return offsetParent || getContainingBlock(element) || win;
}
var getElementRects = async function(data) {
  const getOffsetParentFn = this.getOffsetParent || getOffsetParent;
  const getDimensionsFn = this.getDimensions;
  const floatingDimensions = await getDimensionsFn(data.floating);
  return {
    reference: getRectRelativeToOffsetParent(data.reference, await getOffsetParentFn(data.floating), data.strategy),
    floating: {
      x: 0,
      y: 0,
      width: floatingDimensions.width,
      height: floatingDimensions.height
    }
  };
};
function isRTL(element) {
  return getComputedStyle2(element).direction === "rtl";
}
var platform = {
  convertOffsetParentRelativeRectToViewportRelativeRect,
  getDocumentElement,
  getClippingRect,
  getOffsetParent,
  getElementRects,
  getClientRects,
  getDimensions,
  getScale,
  isElement,
  isRTL
};
function rectsAreEqual(a, b) {
  return a.x === b.x && a.y === b.y && a.width === b.width && a.height === b.height;
}
function observeMove(element, onMove, ancestorResize) {
  let io = null;
  let timeoutId;
  const root = getDocumentElement(element);
  function cleanup() {
    var _io;
    clearTimeout(timeoutId);
    (_io = io) == null || _io.disconnect();
    io = null;
  }
  function refresh(skip, threshold) {
    if (skip === void 0) {
      skip = false;
    }
    if (threshold === void 0) {
      threshold = 1;
    }
    cleanup();
    const elementRectForRootMargin = element.getBoundingClientRect();
    const {
      left,
      top,
      width,
      height
    } = elementRectForRootMargin;
    if (!skip) {
      onMove();
    }
    if (!width || !height) {
      return;
    }
    const insetTop = floor(top);
    const insetRight = floor(root.clientWidth - (left + width));
    const insetBottom = floor(root.clientHeight - (top + height));
    const insetLeft = floor(left);
    const rootMargin = -insetTop + "px " + -insetRight + "px " + -insetBottom + "px " + -insetLeft + "px";
    const options = {
      rootMargin,
      threshold: max(0, min(1, threshold)) || 1
    };
    let isFirstUpdate = true;
    function handleObserve(entries) {
      const ratio = entries[0].intersectionRatio;
      if (!rectsAreEqual(elementRectForRootMargin, element.getBoundingClientRect())) {
        return refresh();
      }
      if (ratio !== threshold) {
        if (!isFirstUpdate) {
          return refresh();
        }
        if (!ratio) {
          timeoutId = setTimeout(() => {
            refresh(false, 1e-7);
          }, 1e3);
        } else {
          refresh(false, ratio);
        }
      }
      isFirstUpdate = false;
    }
    try {
      io = new IntersectionObserver(handleObserve, {
        ...options,
        // Handle <iframe>s
        root: root.ownerDocument
      });
    } catch (_e) {
      io = new IntersectionObserver(handleObserve, options);
    }
    io.observe(element);
  }
  const win = getWindow(element);
  const handleResize = () => refresh(ancestorResize);
  win.addEventListener("resize", handleResize);
  refresh(true);
  return () => {
    win.removeEventListener("resize", handleResize);
    cleanup();
  };
}
function autoUpdate(reference, floating, update, options) {
  if (options === void 0) {
    options = {};
  }
  const {
    ancestorScroll = true,
    ancestorResize = true,
    elementResize = typeof ResizeObserver === "function",
    layoutShift = typeof IntersectionObserver === "function",
    animationFrame = false
  } = options;
  const referenceEl = unwrapElement(reference);
  const ancestors = ancestorScroll || ancestorResize ? [...referenceEl ? getOverflowAncestors(referenceEl) : [], ...floating ? getOverflowAncestors(floating) : []] : [];
  ancestors.forEach((ancestor) => {
    ancestorScroll && ancestor.addEventListener("scroll", update);
    ancestorResize && ancestor.addEventListener("resize", update);
  });
  const cleanupIo = referenceEl && layoutShift ? observeMove(referenceEl, update, ancestorResize) : null;
  let reobserveFrame = -1;
  let resizeObserver = null;
  if (elementResize) {
    resizeObserver = new ResizeObserver((_ref) => {
      let [firstEntry] = _ref;
      if (firstEntry && firstEntry.target === referenceEl && resizeObserver && floating) {
        resizeObserver.unobserve(floating);
        cancelAnimationFrame(reobserveFrame);
        reobserveFrame = requestAnimationFrame(() => {
          var _resizeObserver;
          (_resizeObserver = resizeObserver) == null || _resizeObserver.observe(floating);
        });
      }
      update();
    });
    if (referenceEl && !animationFrame) {
      resizeObserver.observe(referenceEl);
    }
    if (floating) {
      resizeObserver.observe(floating);
    }
  }
  let frameId;
  let prevRefRect = animationFrame ? getBoundingClientRect(reference) : null;
  if (animationFrame) {
    frameLoop();
  }
  function frameLoop() {
    const nextRefRect = getBoundingClientRect(reference);
    if (prevRefRect && !rectsAreEqual(prevRefRect, nextRefRect)) {
      update();
    }
    prevRefRect = nextRefRect;
    frameId = requestAnimationFrame(frameLoop);
  }
  update();
  return () => {
    var _resizeObserver2;
    ancestors.forEach((ancestor) => {
      ancestorScroll && ancestor.removeEventListener("scroll", update);
      ancestorResize && ancestor.removeEventListener("resize", update);
    });
    cleanupIo == null || cleanupIo();
    (_resizeObserver2 = resizeObserver) == null || _resizeObserver2.disconnect();
    resizeObserver = null;
    if (animationFrame) {
      cancelAnimationFrame(frameId);
    }
  };
}
var offset2 = offset;
var shift2 = shift;
var flip2 = flip;
var size2 = size;
var hide2 = hide;
var arrow2 = arrow;
var limitShift2 = limitShift;
var computePosition2 = (reference, floating, options) => {
  const cache = /* @__PURE__ */ new Map();
  const mergedOptions = options != null ? options : {};
  const platformWithCache = {
    ...platform,
    ...mergedOptions.platform,
    _c: cache
  };
  return computePosition(reference, floating, {
    ...mergedOptions,
    platform: platformWithCache
  });
};

// node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.mjs
var React15 = __toESM(require_react(), 1);
var import_react3 = __toESM(require_react(), 1);
var ReactDOM2 = __toESM(require_react_dom(), 1);
var isClient = typeof document !== "undefined";
var noop = function noop2() {
};
var index = isClient ? import_react3.useLayoutEffect : noop;
function deepEqual(a, b) {
  if (a === b) {
    return true;
  }
  if (typeof a !== typeof b) {
    return false;
  }
  if (typeof a === "function" && a.toString() === b.toString()) {
    return true;
  }
  let length;
  let i;
  let keys;
  if (a && b && typeof a === "object") {
    if (Array.isArray(a)) {
      length = a.length;
      if (length !== b.length) return false;
      for (i = length; i-- !== 0; ) {
        if (!deepEqual(a[i], b[i])) {
          return false;
        }
      }
      return true;
    }
    keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length) {
      return false;
    }
    for (i = length; i-- !== 0; ) {
      if (!{}.hasOwnProperty.call(b, keys[i])) {
        return false;
      }
    }
    for (i = length; i-- !== 0; ) {
      const key = keys[i];
      if (key === "_owner" && a.$$typeof) {
        continue;
      }
      if (!deepEqual(a[key], b[key])) {
        return false;
      }
    }
    return true;
  }
  return a !== a && b !== b;
}
function getDPR(element) {
  if (typeof window === "undefined") {
    return 1;
  }
  const win = element.ownerDocument.defaultView || window;
  return win.devicePixelRatio || 1;
}
function roundByDPR(element, value) {
  const dpr = getDPR(element);
  return Math.round(value * dpr) / dpr;
}
function useLatestRef(value) {
  const ref = React15.useRef(value);
  index(() => {
    ref.current = value;
  });
  return ref;
}
function useFloating(options) {
  if (options === void 0) {
    options = {};
  }
  const {
    placement = "bottom",
    strategy = "absolute",
    middleware = [],
    platform: platform2,
    elements: {
      reference: externalReference,
      floating: externalFloating
    } = {},
    transform = true,
    whileElementsMounted,
    open
  } = options;
  const [data, setData] = React15.useState({
    x: 0,
    y: 0,
    strategy,
    placement,
    middlewareData: {},
    isPositioned: false
  });
  const [latestMiddleware, setLatestMiddleware] = React15.useState(middleware);
  if (!deepEqual(latestMiddleware, middleware)) {
    setLatestMiddleware(middleware);
  }
  const [_reference, _setReference] = React15.useState(null);
  const [_floating, _setFloating] = React15.useState(null);
  const setReference = React15.useCallback((node) => {
    if (node !== referenceRef.current) {
      referenceRef.current = node;
      _setReference(node);
    }
  }, []);
  const setFloating = React15.useCallback((node) => {
    if (node !== floatingRef.current) {
      floatingRef.current = node;
      _setFloating(node);
    }
  }, []);
  const referenceEl = externalReference || _reference;
  const floatingEl = externalFloating || _floating;
  const referenceRef = React15.useRef(null);
  const floatingRef = React15.useRef(null);
  const dataRef = React15.useRef(data);
  const hasWhileElementsMounted = whileElementsMounted != null;
  const whileElementsMountedRef = useLatestRef(whileElementsMounted);
  const platformRef = useLatestRef(platform2);
  const openRef = useLatestRef(open);
  const update = React15.useCallback(() => {
    if (!referenceRef.current || !floatingRef.current) {
      return;
    }
    const config = {
      placement,
      strategy,
      middleware: latestMiddleware
    };
    if (platformRef.current) {
      config.platform = platformRef.current;
    }
    computePosition2(referenceRef.current, floatingRef.current, config).then((data2) => {
      const fullData = {
        ...data2,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: openRef.current !== false
      };
      if (isMountedRef.current && !deepEqual(dataRef.current, fullData)) {
        dataRef.current = fullData;
        ReactDOM2.flushSync(() => {
          setData(fullData);
        });
      }
    });
  }, [latestMiddleware, placement, strategy, platformRef, openRef]);
  index(() => {
    if (open === false && dataRef.current.isPositioned) {
      dataRef.current.isPositioned = false;
      setData((data2) => ({
        ...data2,
        isPositioned: false
      }));
    }
  }, [open]);
  const isMountedRef = React15.useRef(false);
  index(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
    };
  }, []);
  index(() => {
    if (referenceEl) referenceRef.current = referenceEl;
    if (floatingEl) floatingRef.current = floatingEl;
    if (referenceEl && floatingEl) {
      if (whileElementsMountedRef.current) {
        return whileElementsMountedRef.current(referenceEl, floatingEl, update);
      }
      update();
    }
  }, [referenceEl, floatingEl, update, whileElementsMountedRef, hasWhileElementsMounted]);
  const refs = React15.useMemo(() => ({
    reference: referenceRef,
    floating: floatingRef,
    setReference,
    setFloating
  }), [setReference, setFloating]);
  const elements = React15.useMemo(() => ({
    reference: referenceEl,
    floating: floatingEl
  }), [referenceEl, floatingEl]);
  const floatingStyles = React15.useMemo(() => {
    const initialStyles = {
      position: strategy,
      left: 0,
      top: 0
    };
    if (!elements.floating) {
      return initialStyles;
    }
    const x = roundByDPR(elements.floating, data.x);
    const y = roundByDPR(elements.floating, data.y);
    if (transform) {
      return {
        ...initialStyles,
        transform: "translate(" + x + "px, " + y + "px)",
        ...getDPR(elements.floating) >= 1.5 && {
          willChange: "transform"
        }
      };
    }
    return {
      position: strategy,
      left: x,
      top: y
    };
  }, [strategy, transform, elements.floating, data.x, data.y]);
  return React15.useMemo(() => ({
    ...data,
    update,
    refs,
    elements,
    floatingStyles
  }), [data, update, refs, elements, floatingStyles]);
}
var arrow$1 = (options) => {
  function isRef(value) {
    return {}.hasOwnProperty.call(value, "current");
  }
  return {
    name: "arrow",
    options,
    fn(state) {
      const {
        element,
        padding
      } = typeof options === "function" ? options(state) : options;
      if (element && isRef(element)) {
        if (element.current != null) {
          return arrow2({
            element: element.current,
            padding
          }).fn(state);
        }
        return {};
      }
      if (element) {
        return arrow2({
          element,
          padding
        }).fn(state);
      }
      return {};
    }
  };
};
var offset3 = (options, deps) => {
  const result = offset2(options);
  return {
    name: result.name,
    fn: result.fn,
    options: [options, deps]
  };
};
var shift3 = (options, deps) => {
  const result = shift2(options);
  return {
    name: result.name,
    fn: result.fn,
    options: [options, deps]
  };
};
var limitShift3 = (options, deps) => {
  const result = limitShift2(options);
  return {
    fn: result.fn,
    options: [options, deps]
  };
};
var flip3 = (options, deps) => {
  const result = flip2(options);
  return {
    name: result.name,
    fn: result.fn,
    options: [options, deps]
  };
};
var size3 = (options, deps) => {
  const result = size2(options);
  return {
    name: result.name,
    fn: result.fn,
    options: [options, deps]
  };
};
var hide3 = (options, deps) => {
  const result = hide2(options);
  return {
    name: result.name,
    fn: result.fn,
    options: [options, deps]
  };
};
var arrow3 = (options, deps) => {
  const result = arrow$1(options);
  return {
    name: result.name,
    fn: result.fn,
    options: [options, deps]
  };
};

// node_modules/@radix-ui/react-use-size/dist/index.mjs
var React16 = __toESM(require_react(), 1);
var __defProp16 = Object.defineProperty;
var __name15 = (target, value) => __defProp16(target, "name", { value, configurable: true });
function useSize(element) {
  const [size4, setSize] = React16.useState(void 0);
  useLayoutEffect2(() => {
    if (element) {
      setSize({ width: element.offsetWidth, height: element.offsetHeight });
      let rAF = 0;
      const resizeObserver = new ResizeObserver((entries) => {
        if (!Array.isArray(entries)) {
          return;
        }
        if (!entries.length) {
          return;
        }
        const entry = entries[0];
        window.cancelAnimationFrame(rAF);
        rAF = window.requestAnimationFrame(() => {
          let width;
          let height;
          if ("borderBoxSize" in entry) {
            const borderSizeEntry = entry["borderBoxSize"];
            const borderSize = Array.isArray(borderSizeEntry) ? borderSizeEntry[0] : borderSizeEntry;
            width = borderSize["inlineSize"];
            height = borderSize["blockSize"];
          } else {
            width = element.offsetWidth;
            height = element.offsetHeight;
          }
          setSize({ width, height });
        });
      });
      resizeObserver.observe(element, { box: "border-box" });
      return () => {
        window.cancelAnimationFrame(rAF);
        resizeObserver.unobserve(element);
      };
    } else {
      setSize(void 0);
    }
  }, [element]);
  return size4;
}
__name15(useSize, "useSize");

// node_modules/@radix-ui/react-popper/dist/index.mjs
var import_jsx_runtime8 = __toESM(require_jsx_runtime(), 1);
var __defProp17 = Object.defineProperty;
var __name16 = (target, value) => __defProp17(target, "name", { value, configurable: true });
var Sticky = {
  Partial: "partial",
  Always: "always"
};
var UpdatePositionStrategy = {
  Optimized: "optimized",
  Always: "always"
};
var POPPER_NAME = "Popper";
var [createPopperContext, createPopperScope] = createContextScope(POPPER_NAME);
var [PopperProvider, usePopperContext] = createPopperContext(POPPER_NAME);
var Popper = /* @__PURE__ */ __name16((props) => {
  const { __scopePopper, children } = props;
  const [anchor, setAnchor] = React17.useState(null);
  const [placementState, setPlacementState] = React17.useState(void 0);
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
    PopperProvider,
    {
      scope: __scopePopper,
      anchor,
      onAnchorChange: setAnchor,
      placementState,
      setPlacementState,
      children
    }
  );
}, "Popper");
var ANCHOR_NAME = "PopperAnchor";
var PopperAnchor = /* @__PURE__ */ React17.forwardRef(
  /* @__PURE__ */ __name16(function PopperAnchor2(props, forwardedRef) {
    const { __scopePopper, virtualRef, ...anchorProps } = props;
    const context = usePopperContext(ANCHOR_NAME, __scopePopper);
    const ref = React17.useRef(null);
    const onAnchorChange = context.onAnchorChange;
    const callbackRef = React17.useCallback(
      (node) => {
        ref.current = node;
        if (node) {
          onAnchorChange(node);
        }
      },
      [onAnchorChange]
    );
    const composedRefs = useComposedRefs(forwardedRef, callbackRef);
    const anchorRef = React17.useRef(null);
    React17.useEffect(() => {
      if (!virtualRef) {
        return;
      }
      const previousAnchor = anchorRef.current;
      anchorRef.current = virtualRef.current;
      if (previousAnchor !== anchorRef.current) {
        onAnchorChange(anchorRef.current);
      }
    });
    const sideAndAlign = context.placementState && getSideAndAlignFromPlacement(context.placementState);
    const placedSide = sideAndAlign?.[0];
    const placedAlign = sideAndAlign?.[1];
    return virtualRef ? null : /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
      Primitive.div,
      {
        "data-radix-popper-side": placedSide,
        "data-radix-popper-align": placedAlign,
        ...anchorProps,
        ref: composedRefs
      }
    );
  }, "PopperAnchor")
);
var CONTENT_NAME = "PopperContent";
var [PopperContentProvider, useContentContext] = createPopperContext(CONTENT_NAME);
var PopperContent = /* @__PURE__ */ React17.forwardRef(
  /* @__PURE__ */ __name16(function PopperContent2(props, forwardedRef) {
    const {
      __scopePopper,
      side = "bottom",
      sideOffset = 0,
      align = "center",
      alignOffset = 0,
      arrowPadding = 0,
      avoidCollisions = true,
      collisionBoundary = [],
      collisionPadding: collisionPaddingProp = 0,
      sticky = Sticky.Partial,
      hideWhenDetached = false,
      updatePositionStrategy = UpdatePositionStrategy.Optimized,
      onPlaced,
      ...contentProps
    } = props;
    const context = usePopperContext(CONTENT_NAME, __scopePopper);
    const [content, setContent] = React17.useState(null);
    const composedRefs = useComposedRefs(forwardedRef, setContent);
    const [arrow4, setArrow] = React17.useState(null);
    const arrowSize = useSize(arrow4);
    const arrowWidth = arrowSize?.width ?? 0;
    const arrowHeight = arrowSize?.height ?? 0;
    const desiredPlacement = side + (align !== "center" ? "-" + align : "");
    const collisionPadding = typeof collisionPaddingProp === "number" ? collisionPaddingProp : { top: 0, right: 0, bottom: 0, left: 0, ...collisionPaddingProp };
    const boundary = Array.isArray(collisionBoundary) ? collisionBoundary : [collisionBoundary];
    const hasExplicitBoundaries = boundary.length > 0;
    const detectOverflowOptions = {
      padding: collisionPadding,
      boundary: boundary.filter(isNotNull),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: hasExplicitBoundaries
    };
    const { refs, floatingStyles, placement, isPositioned, middlewareData } = useFloating({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: desiredPlacement,
      whileElementsMounted: /* @__PURE__ */ __name16((...args) => {
        const cleanup = autoUpdate(...args, {
          animationFrame: updatePositionStrategy === UpdatePositionStrategy.Always
        });
        return cleanup;
      }, "whileElementsMounted"),
      elements: {
        reference: context.anchor
      },
      middleware: [
        offset3({ mainAxis: sideOffset + arrowHeight, alignmentAxis: alignOffset }),
        avoidCollisions && shift3({
          mainAxis: true,
          crossAxis: false,
          // Spread rather than passing `limiter: undefined`, which
          // `exactOptionalPropertyTypes` rejects for Floating UI's optional option.
          ...sticky === Sticky.Partial ? { limiter: limitShift3() } : {},
          ...detectOverflowOptions
        }),
        avoidCollisions && flip3({ ...detectOverflowOptions }),
        size3({
          ...detectOverflowOptions,
          apply: /* @__PURE__ */ __name16(({ elements, rects, availableWidth, availableHeight }) => {
            const { width: anchorWidth, height: anchorHeight } = rects.reference;
            const contentStyle = elements.floating.style;
            contentStyle.setProperty("--radix-popper-available-width", `${availableWidth}px`);
            contentStyle.setProperty("--radix-popper-available-height", `${availableHeight}px`);
            contentStyle.setProperty("--radix-popper-anchor-width", `${anchorWidth}px`);
            contentStyle.setProperty("--radix-popper-anchor-height", `${anchorHeight}px`);
          }, "apply")
        }),
        arrow4 && arrow3({ element: arrow4, padding: arrowPadding }),
        transformOrigin({ arrowWidth, arrowHeight }),
        hideWhenDetached && // `hide` detects whether the anchor (reference) is clipped, so when
        // no explicit `collisionBoundary` is set we omit `boundary` entirely
        // and fall back to Floating UI's default clipping ancestors (e.g. a
        // scrollable menu). This lets an occluded submenu hide once its anchor
        // scrolls out of view (#3237). The collision/size middlewares
        // deliberately keep the viewport-based default to avoid clamping
        // content rendered inside transformed or overflow-clipping portal
        // containers. The key is omitted rather than set to `undefined`
        // because `exactOptionalPropertyTypes` rejects the explicit value.
        hide3(
          hasExplicitBoundaries ? { strategy: "referenceHidden", ...detectOverflowOptions } : {
            strategy: "referenceHidden",
            padding: detectOverflowOptions.padding,
            altBoundary: detectOverflowOptions.altBoundary
          }
        )
      ]
    });
    const setPlacementState = context.setPlacementState;
    useLayoutEffect2(() => {
      setPlacementState(placement);
      return () => {
        setPlacementState(void 0);
      };
    }, [placement, setPlacementState]);
    const [placedSide, placedAlign] = getSideAndAlignFromPlacement(placement);
    const handlePlaced = useCallbackRef(onPlaced);
    useLayoutEffect2(() => {
      if (isPositioned) {
        handlePlaced?.();
      }
    }, [isPositioned, handlePlaced]);
    const arrowX = middlewareData.arrow?.x;
    const arrowY = middlewareData.arrow?.y;
    const cannotCenterArrow = middlewareData.arrow?.centerOffset !== 0;
    const [contentZIndex, setContentZIndex] = React17.useState();
    useLayoutEffect2(() => {
      if (content) setContentZIndex(window.getComputedStyle(content).zIndex);
    }, [content]);
    return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
      "div",
      {
        ref: refs.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...floatingStyles,
          transform: isPositioned ? floatingStyles.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: contentZIndex,
          "--radix-popper-transform-origin": [
            middlewareData.transformOrigin?.x,
            middlewareData.transformOrigin?.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...middlewareData.hide?.referenceHidden && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        },
        dir: props.dir,
        children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
          PopperContentProvider,
          {
            scope: __scopePopper,
            placedSide,
            placedAlign,
            onArrowChange: setArrow,
            arrowX,
            arrowY,
            shouldHideArrow: cannotCenterArrow,
            children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
              Primitive.div,
              {
                "data-side": placedSide,
                "data-align": placedAlign,
                ...contentProps,
                ref: composedRefs,
                style: {
                  ...contentProps.style,
                  // if the PopperContent hasn't been placed yet (not all
                  // measurements done) we prevent animations so that users'
                  // animations don't kick in too early from the wrong sides.
                  animation: !isPositioned ? "none" : contentProps.style?.animation
                }
              }
            )
          }
        )
      }
    );
  }, "PopperContent")
);
function isNotNull(value) {
  return value !== null;
}
__name16(isNotNull, "isNotNull");
var transformOrigin = /* @__PURE__ */ __name16((options) => ({
  name: "transformOrigin",
  options,
  fn(data) {
    const { placement, rects, middlewareData } = data;
    const cannotCenterArrow = middlewareData.arrow?.centerOffset !== 0;
    const isArrowHidden = cannotCenterArrow;
    const arrowWidth = isArrowHidden ? 0 : options.arrowWidth;
    const arrowHeight = isArrowHidden ? 0 : options.arrowHeight;
    const [placedSide, placedAlign] = getSideAndAlignFromPlacement(placement);
    const noArrowAlign = { start: "0%", center: "50%", end: "100%" }[placedAlign];
    const arrowXCenter = (middlewareData.arrow?.x ?? 0) + arrowWidth / 2;
    const arrowYCenter = (middlewareData.arrow?.y ?? 0) + arrowHeight / 2;
    let x = "";
    let y = "";
    if (placedSide === "bottom") {
      x = isArrowHidden ? noArrowAlign : `${arrowXCenter}px`;
      y = `${-arrowHeight}px`;
    } else if (placedSide === "top") {
      x = isArrowHidden ? noArrowAlign : `${arrowXCenter}px`;
      y = `${rects.floating.height + arrowHeight}px`;
    } else if (placedSide === "right") {
      x = `${-arrowHeight}px`;
      y = isArrowHidden ? noArrowAlign : `${arrowYCenter}px`;
    } else if (placedSide === "left") {
      x = `${rects.floating.width + arrowHeight}px`;
      y = isArrowHidden ? noArrowAlign : `${arrowYCenter}px`;
    }
    return { data: { x, y } };
  }
}), "transformOrigin");
function getSideAndAlignFromPlacement(placement) {
  const [side, align = "center"] = placement.split("-");
  return [side, align];
}
__name16(getSideAndAlignFromPlacement, "getSideAndAlignFromPlacement");

// node_modules/@radix-ui/react-portal/dist/index.mjs
var React18 = __toESM(require_react(), 1);
var ReactDOM3 = __toESM(require_react_dom(), 1);
var import_jsx_runtime9 = __toESM(require_jsx_runtime(), 1);
var __defProp18 = Object.defineProperty;
var __name17 = (target, value) => __defProp18(target, "name", { value, configurable: true });
var Portal = /* @__PURE__ */ React18.forwardRef(
  /* @__PURE__ */ __name17(function Portal2(props, forwardedRef) {
    const { container: containerProp, ...portalProps } = props;
    const [mounted, setMounted] = React18.useState(false);
    useLayoutEffect2(() => setMounted(true), []);
    const container = containerProp || mounted && globalThis?.document?.body;
    return container ? ReactDOM3.createPortal(/* @__PURE__ */ (0, import_jsx_runtime9.jsx)(Primitive.div, { ...portalProps, ref: forwardedRef }), container) : null;
  }, "Portal")
);

// node_modules/@radix-ui/react-presence/dist/index.mjs
var React24 = __toESM(require_react(), 1);
var React19 = __toESM(require_react(), 1);
var __defProp19 = Object.defineProperty;
var __name18 = (target, value) => __defProp19(target, "name", { value, configurable: true });
function useStateMachine(initialState2, machine) {
  return React19.useReducer((state, event) => {
    const nextState = machine[state][event];
    return nextState ?? state;
  }, initialState2);
}
__name18(useStateMachine, "useStateMachine");
var Presence = /* @__PURE__ */ __name18((props) => {
  const { present, children } = props;
  const presence = usePresence(present);
  const child = typeof children === "function" ? children({ present: presence.isPresent }) : React24.Children.only(children);
  const ref = useStableComposedRefs(presence.ref, getElementRef2(child));
  const forceMount = typeof children === "function";
  return forceMount || presence.isPresent ? React24.cloneElement(child, { ref }) : null;
}, "Presence");
function usePresence(present) {
  const [node, setNode] = React24.useState();
  const stylesRef = React24.useRef(null);
  const prevPresentRef = React24.useRef(present);
  const prevAnimationNameRef = React24.useRef("none");
  const mountAnimationNameRef = React24.useRef(void 0);
  const initialState2 = present ? "mounted" : "unmounted";
  const [state, send] = useStateMachine(initialState2, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  });
  React24.useEffect(() => {
    if (state === "mounted") {
      prevAnimationNameRef.current = mountAnimationNameRef.current ?? getAnimationName(stylesRef.current);
      mountAnimationNameRef.current = void 0;
    } else {
      prevAnimationNameRef.current = "none";
    }
  }, [state]);
  useLayoutEffect2(() => {
    const styles = stylesRef.current;
    const wasPresent = prevPresentRef.current;
    const hasPresentChanged = wasPresent !== present;
    if (hasPresentChanged) {
      const prevAnimationName = prevAnimationNameRef.current;
      const currentAnimationName = getAnimationName(styles);
      if (present) {
        mountAnimationNameRef.current = currentAnimationName;
        send("MOUNT");
      } else if (currentAnimationName === "none" || styles?.display === "none") {
        send("UNMOUNT");
      } else {
        const isAnimating = prevAnimationName !== currentAnimationName;
        if (wasPresent && isAnimating) {
          send("ANIMATION_OUT");
        } else {
          send("UNMOUNT");
        }
      }
      prevPresentRef.current = present;
    }
  }, [present, send]);
  useLayoutEffect2(() => {
    if (node) {
      let timeoutId;
      const ownerWindow = node.ownerDocument.defaultView ?? window;
      const handleAnimationEnd = /* @__PURE__ */ __name18((event) => {
        const currentAnimationName = getAnimationName(stylesRef.current);
        const isCurrentAnimation = currentAnimationName.includes(CSS.escape(event.animationName));
        if (event.target === node && isCurrentAnimation) {
          send("ANIMATION_END");
          if (!prevPresentRef.current) {
            const currentFillMode = node.style.animationFillMode;
            node.style.animationFillMode = "forwards";
            timeoutId = ownerWindow.setTimeout(() => {
              if (node.style.animationFillMode === "forwards") {
                node.style.animationFillMode = currentFillMode;
              }
            });
          }
        }
      }, "handleAnimationEnd");
      const handleAnimationStart = /* @__PURE__ */ __name18((event) => {
        if (event.target === node) {
          prevAnimationNameRef.current = getAnimationName(stylesRef.current);
        }
      }, "handleAnimationStart");
      node.addEventListener("animationstart", handleAnimationStart);
      node.addEventListener("animationcancel", handleAnimationEnd);
      node.addEventListener("animationend", handleAnimationEnd);
      return () => {
        ownerWindow.clearTimeout(timeoutId);
        node.removeEventListener("animationstart", handleAnimationStart);
        node.removeEventListener("animationcancel", handleAnimationEnd);
        node.removeEventListener("animationend", handleAnimationEnd);
      };
    } else {
      send("ANIMATION_END");
    }
  }, [node, send]);
  return {
    isPresent: ["mounted", "unmountSuspended"].includes(state),
    ref: React24.useCallback((node2) => {
      if (node2) {
        const styles = getComputedStyle(node2);
        stylesRef.current = styles;
        mountAnimationNameRef.current = getAnimationName(styles);
      } else {
        stylesRef.current = null;
      }
      setNode(node2);
    }, [])
  };
}
__name18(usePresence, "usePresence");
function setRef2(ref, value) {
  if (typeof ref === "function") {
    return ref(value);
  } else if (ref !== null && ref !== void 0) {
    ref.current = value;
  }
}
__name18(setRef2, "setRef");
function useStableComposedRefs(...refs) {
  const refsRef = React24.useRef(refs);
  refsRef.current = refs;
  return React24.useCallback((node) => {
    const currentRefs = refsRef.current;
    let hasCleanup = false;
    const cleanups = currentRefs.map((ref) => {
      const cleanup = setRef2(ref, node);
      if (!hasCleanup && typeof cleanup === "function") {
        hasCleanup = true;
      }
      return cleanup;
    });
    if (hasCleanup) {
      return () => {
        for (let i = 0; i < cleanups.length; i++) {
          const cleanup = cleanups[i];
          if (typeof cleanup === "function") {
            cleanup();
          } else {
            setRef2(currentRefs[i], null);
          }
        }
      };
    }
  }, []);
}
__name18(useStableComposedRefs, "useStableComposedRefs");
function getAnimationName(styles) {
  return styles?.animationName || "none";
}
__name18(getAnimationName, "getAnimationName");
function getElementRef2(element) {
  let getter = Object.getOwnPropertyDescriptor(element.props, "ref")?.get;
  let mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
  if (mayWarn) {
    return element.ref;
  }
  getter = Object.getOwnPropertyDescriptor(element, "ref")?.get;
  mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
  if (mayWarn) {
    return element.props.ref;
  }
  return element.props.ref || element.ref;
}
__name18(getElementRef2, "getElementRef");

// node_modules/@radix-ui/react-roving-focus/dist/index.mjs
var React21 = __toESM(require_react(), 1);

// node_modules/@radix-ui/react-use-is-hydrated/dist/index.mjs
var React25 = __toESM(require_react(), 1);
var React20 = __toESM(require_react(), 1);
var __defProp20 = Object.defineProperty;
var __name19 = (target, value) => __defProp20(target, "name", { value, configurable: true });
var _isHydrated = false;
function useIsHydrated() {
  const [isHydrated, setIsHydrated] = React20.useState(_isHydrated);
  React20.useEffect(() => {
    if (!_isHydrated) {
      _isHydrated = true;
      setIsHydrated(true);
    }
  }, []);
  return isHydrated;
}
__name19(useIsHydrated, "useIsHydrated");
var useReactSyncExternalStore = React25[" useSyncExternalStore ".trim().toString()];
function subscribe() {
  return () => {
  };
}
__name19(subscribe, "subscribe");
function useIsHydratedModern() {
  return useReactSyncExternalStore(
    subscribe,
    () => true,
    () => false
  );
}
__name19(useIsHydratedModern, "useIsHydratedModern");
var useIsHydrated2 = typeof useReactSyncExternalStore === "function" ? useIsHydratedModern : useIsHydrated;

// node_modules/@radix-ui/react-roving-focus/dist/index.mjs
var import_jsx_runtime10 = __toESM(require_jsx_runtime(), 1);
var __defProp21 = Object.defineProperty;
var __name20 = (target, value) => __defProp21(target, "name", { value, configurable: true });
var ENTRY_FOCUS = "rovingFocusGroup.onEntryFocus";
var EVENT_OPTIONS2 = { bubbles: false, cancelable: true };
var GROUP_NAME = "RovingFocusGroup";
var [Collection, useCollection, createCollectionScope] = createCollection(GROUP_NAME);
var [createRovingFocusGroupContext, createRovingFocusGroupScope] = createContextScope(
  GROUP_NAME,
  [createCollectionScope]
);
var Orientation = {
  Vertical: "vertical",
  Horizontal: "horizontal"
};
var Direction2 = {
  LTR: "ltr",
  RTL: "rtl"
};
var [RovingFocusProvider, useRovingFocusContext] = createRovingFocusGroupContext(GROUP_NAME);
var RovingFocusGroup = /* @__PURE__ */ React21.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ __name20(function RovingFocusGroup2(props, forwardedRef) {
    return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Collection.Provider, { scope: props.__scopeRovingFocusGroup, children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Collection.Slot, { scope: props.__scopeRovingFocusGroup, children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(RovingFocusGroupImpl, { ...props, ref: forwardedRef }) }) });
  }, "RovingFocusGroup")
);
var RovingFocusGroupImpl = /* @__PURE__ */ React21.forwardRef(/* @__PURE__ */ __name20(function RovingFocusGroupImpl2(props, forwardedRef) {
  const {
    __scopeRovingFocusGroup,
    orientation,
    loop = false,
    dir,
    currentTabStopId: currentTabStopIdProp,
    defaultCurrentTabStopId,
    onCurrentTabStopIdChange,
    onEntryFocus,
    preventScrollOnEntryFocus = false,
    ...groupProps
  } = props;
  const ref = React21.useRef(null);
  const composedRefs = useComposedRefs(forwardedRef, ref);
  const direction = useDirection(dir);
  const [currentTabStopId, setCurrentTabStopId] = useControllableState({
    prop: currentTabStopIdProp,
    defaultProp: defaultCurrentTabStopId ?? null,
    onChange: onCurrentTabStopIdChange,
    caller: GROUP_NAME
  });
  const [isTabbingBackOut, setIsTabbingBackOut] = React21.useState(false);
  const handleEntryFocus = useCallbackRef(onEntryFocus);
  const getItems = useCollection(__scopeRovingFocusGroup);
  const isClickFocusRef = React21.useRef(false);
  const [focusableItemsCount, setFocusableItemsCount] = React21.useState(0);
  React21.useEffect(() => {
    const node = ref.current;
    if (node) {
      node.addEventListener(ENTRY_FOCUS, handleEntryFocus);
      return () => node.removeEventListener(ENTRY_FOCUS, handleEntryFocus);
    }
  }, [handleEntryFocus]);
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
    RovingFocusProvider,
    {
      scope: __scopeRovingFocusGroup,
      orientation,
      dir: direction,
      loop,
      currentTabStopId,
      onItemFocus: React21.useCallback(
        (tabStopId) => setCurrentTabStopId(tabStopId),
        [setCurrentTabStopId]
      ),
      onItemShiftTab: React21.useCallback(() => setIsTabbingBackOut(true), []),
      onFocusableItemAdd: React21.useCallback(
        () => setFocusableItemsCount((prevCount) => prevCount + 1),
        []
      ),
      onFocusableItemRemove: React21.useCallback(
        () => setFocusableItemsCount((prevCount) => prevCount - 1),
        []
      ),
      children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
        Primitive.div,
        {
          tabIndex: isTabbingBackOut || focusableItemsCount === 0 ? -1 : 0,
          "data-orientation": orientation,
          ...groupProps,
          ref: composedRefs,
          style: { outline: "none", ...props.style },
          onMouseDown: composeEventHandlers(props.onMouseDown, () => {
            isClickFocusRef.current = true;
          }),
          onFocus: composeEventHandlers(props.onFocus, (event) => {
            const isKeyboardFocus = !isClickFocusRef.current;
            if (event.target === event.currentTarget && isKeyboardFocus && !isTabbingBackOut) {
              const entryFocusEvent = new CustomEvent(ENTRY_FOCUS, EVENT_OPTIONS2);
              event.currentTarget.dispatchEvent(entryFocusEvent);
              if (!entryFocusEvent.defaultPrevented) {
                const items = getItems().filter((item) => item.focusable);
                const activeItem = items.find((item) => item.active);
                const currentItem = items.find((item) => item.id === currentTabStopId);
                const candidateItems = [activeItem, currentItem, ...items].filter(
                  Boolean
                );
                const candidateNodes = candidateItems.map((item) => item.ref.current);
                focusFirst2(candidateNodes, preventScrollOnEntryFocus);
              }
            }
            isClickFocusRef.current = false;
          }),
          onBlur: composeEventHandlers(props.onBlur, () => setIsTabbingBackOut(false))
        }
      )
    }
  );
}, "RovingFocusGroupImpl"));
var ITEM_NAME = "RovingFocusGroupItem";
var RovingFocusGroupItem = /* @__PURE__ */ React21.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ __name20(function RovingFocusGroupItem2(props, forwardedRef) {
    const {
      __scopeRovingFocusGroup,
      focusable = true,
      active = false,
      tabStopId,
      children,
      ...itemProps
    } = props;
    const autoId = useId();
    const id = tabStopId || autoId;
    const context = useRovingFocusContext(ITEM_NAME, __scopeRovingFocusGroup);
    const isCurrentTabStop = context.currentTabStopId === id;
    const getItems = useCollection(__scopeRovingFocusGroup);
    const { onFocusableItemAdd, onFocusableItemRemove, currentTabStopId } = context;
    const isHydrated = useIsHydrated2();
    useLayoutEffect2(() => {
      if (!isHydrated || !focusable) {
        return;
      }
      onFocusableItemAdd();
      return () => onFocusableItemRemove();
    }, [isHydrated, focusable, onFocusableItemAdd, onFocusableItemRemove]);
    React21.useEffect(() => {
      if (isHydrated || !focusable) {
        return;
      }
      onFocusableItemAdd();
      return () => onFocusableItemRemove();
    }, [isHydrated, focusable, onFocusableItemAdd, onFocusableItemRemove]);
    return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
      Collection.ItemSlot,
      {
        scope: __scopeRovingFocusGroup,
        id,
        focusable,
        active,
        children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
          Primitive.span,
          {
            tabIndex: isCurrentTabStop ? 0 : -1,
            "data-orientation": context.orientation,
            ...itemProps,
            ref: forwardedRef,
            onMouseDown: composeEventHandlers(props.onMouseDown, (event) => {
              if (!focusable) event.preventDefault();
              else context.onItemFocus(id);
            }),
            onFocus: composeEventHandlers(props.onFocus, () => context.onItemFocus(id)),
            onKeyDown: composeEventHandlers(props.onKeyDown, (event) => {
              if (event.key === "Tab" && event.shiftKey) {
                context.onItemShiftTab();
                return;
              }
              if (event.target !== event.currentTarget) return;
              const focusIntent = getFocusIntent(event, context.orientation, context.dir);
              if (focusIntent !== void 0) {
                if (event.metaKey || event.ctrlKey || event.altKey || event.shiftKey) return;
                event.preventDefault();
                const items = getItems().filter((item) => item.focusable);
                let candidateNodes = items.map((item) => item.ref.current);
                if (focusIntent === "last") candidateNodes.reverse();
                else if (focusIntent === "prev" || focusIntent === "next") {
                  if (focusIntent === "prev") candidateNodes.reverse();
                  const currentIndex = candidateNodes.indexOf(event.currentTarget);
                  candidateNodes = context.loop ? wrapArray(candidateNodes, currentIndex + 1) : candidateNodes.slice(currentIndex + 1);
                }
                setTimeout(() => focusFirst2(candidateNodes));
              }
            }),
            children: typeof children === "function" ? children({ isCurrentTabStop, hasTabStop: currentTabStopId != null }) : children
          }
        )
      }
    );
  }, "RovingFocusGroupItem")
);
var MAP_KEY_TO_FOCUS_INTENT = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function getDirectionAwareKey(key, dir) {
  if (dir !== Direction2.RTL) return key;
  return key === "ArrowLeft" ? "ArrowRight" : key === "ArrowRight" ? "ArrowLeft" : key;
}
__name20(getDirectionAwareKey, "getDirectionAwareKey");
function getFocusIntent(event, orientation, dir) {
  const key = getDirectionAwareKey(event.key, dir);
  if (orientation === Orientation.Vertical && ["ArrowLeft", "ArrowRight"].includes(key)) {
    return void 0;
  }
  if (orientation === Orientation.Horizontal && ["ArrowUp", "ArrowDown"].includes(key)) {
    return void 0;
  }
  return MAP_KEY_TO_FOCUS_INTENT[key];
}
__name20(getFocusIntent, "getFocusIntent");
function focusFirst2(candidates, preventScroll = false) {
  const PREVIOUSLY_FOCUSED_ELEMENT = document.activeElement;
  for (const candidate of candidates) {
    if (candidate === PREVIOUSLY_FOCUSED_ELEMENT) return;
    candidate.focus({ preventScroll });
    if (document.activeElement !== PREVIOUSLY_FOCUSED_ELEMENT) return;
  }
}
__name20(focusFirst2, "focusFirst");
function wrapArray(array, startIndex) {
  return array.map((_, index2) => array[(startIndex + index2) % array.length]);
}
__name20(wrapArray, "wrapArray");

// node_modules/aria-hidden/dist/es2015/index.js
var getDefaultParent = function(originalTarget) {
  if (typeof document === "undefined") {
    return null;
  }
  var sampleTarget = Array.isArray(originalTarget) ? originalTarget[0] : originalTarget;
  return sampleTarget.ownerDocument.body;
};
var counterMap = /* @__PURE__ */ new WeakMap();
var uncontrolledNodes = /* @__PURE__ */ new WeakMap();
var markerMap = {};
var lockCount = 0;
var unwrapHost = function(node) {
  return node && (node.host || unwrapHost(node.parentNode));
};
var correctTargets = function(parent2, targets) {
  return targets.map(function(target) {
    if (parent2.contains(target)) {
      return target;
    }
    var correctedTarget = unwrapHost(target);
    if (correctedTarget && parent2.contains(correctedTarget)) {
      return correctedTarget;
    }
    console.error("aria-hidden", target, "in not contained inside", parent2, ". Doing nothing");
    return null;
  }).filter(function(x) {
    return Boolean(x);
  });
};
var applyAttributeToOthers = function(originalTarget, parentNode, markerName, controlAttribute) {
  var targets = correctTargets(parentNode, Array.isArray(originalTarget) ? originalTarget : [originalTarget]);
  if (!markerMap[markerName]) {
    markerMap[markerName] = /* @__PURE__ */ new WeakMap();
  }
  var markerCounter = markerMap[markerName];
  var hiddenNodes = [];
  var elementsToKeep = /* @__PURE__ */ new Set();
  var elementsToStop = new Set(targets);
  var keep = function(el) {
    if (!el || elementsToKeep.has(el)) {
      return;
    }
    elementsToKeep.add(el);
    keep(el.parentNode);
  };
  targets.forEach(keep);
  var deep = function(parent2) {
    if (!parent2 || elementsToStop.has(parent2)) {
      return;
    }
    Array.prototype.forEach.call(parent2.children, function(node) {
      if (elementsToKeep.has(node)) {
        deep(node);
      } else {
        try {
          var attr = node.getAttribute(controlAttribute);
          var alreadyHidden = attr !== null && attr !== "false";
          var counterValue = (counterMap.get(node) || 0) + 1;
          var markerValue = (markerCounter.get(node) || 0) + 1;
          counterMap.set(node, counterValue);
          markerCounter.set(node, markerValue);
          hiddenNodes.push(node);
          if (counterValue === 1 && alreadyHidden) {
            uncontrolledNodes.set(node, true);
          }
          if (markerValue === 1) {
            node.setAttribute(markerName, "true");
          }
          if (!alreadyHidden) {
            node.setAttribute(controlAttribute, "true");
          }
        } catch (e) {
          console.error("aria-hidden: cannot operate on ", node, e);
        }
      }
    });
  };
  deep(parentNode);
  elementsToKeep.clear();
  lockCount++;
  return function() {
    hiddenNodes.forEach(function(node) {
      var counterValue = counterMap.get(node) - 1;
      var markerValue = markerCounter.get(node) - 1;
      counterMap.set(node, counterValue);
      markerCounter.set(node, markerValue);
      if (!counterValue) {
        if (!uncontrolledNodes.has(node)) {
          node.removeAttribute(controlAttribute);
        }
        uncontrolledNodes.delete(node);
      }
      if (!markerValue) {
        node.removeAttribute(markerName);
      }
    });
    lockCount--;
    if (!lockCount) {
      counterMap = /* @__PURE__ */ new WeakMap();
      counterMap = /* @__PURE__ */ new WeakMap();
      uncontrolledNodes = /* @__PURE__ */ new WeakMap();
      markerMap = {};
    }
  };
};
var hideOthers = function(originalTarget, parentNode, markerName) {
  if (markerName === void 0) {
    markerName = "data-aria-hidden";
  }
  var targets = Array.from(Array.isArray(originalTarget) ? originalTarget : [originalTarget]);
  var activeParentNode = parentNode || getDefaultParent(originalTarget);
  if (!activeParentNode) {
    return function() {
      return null;
    };
  }
  targets.push.apply(targets, Array.from(activeParentNode.querySelectorAll("[aria-live], script")));
  return applyAttributeToOthers(targets, activeParentNode, markerName, "aria-hidden");
};

// node_modules/tslib/tslib.es6.mjs
var __assign = function() {
  __assign = Object.assign || function __assign2(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
function __rest(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
    t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
}
function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
    if (ar || !(i in from)) {
      if (!ar) ar = Array.prototype.slice.call(from, 0, i);
      ar[i] = from[i];
    }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
}

// node_modules/react-remove-scroll/dist/es2015/Combination.js
var React32 = __toESM(require_react());

// node_modules/react-remove-scroll/dist/es2015/UI.js
var React28 = __toESM(require_react());

// node_modules/react-remove-scroll-bar/dist/es2015/constants.js
var zeroRightClassName = "right-scroll-bar-position";
var fullWidthClassName = "width-before-scroll-bar";
var noScrollbarsClassName = "with-scroll-bars-hidden";
var removedBarSizeVariable = "--removed-body-scroll-bar-size";

// node_modules/use-callback-ref/dist/es2015/assignRef.js
function assignRef(ref, value) {
  if (typeof ref === "function") {
    ref(value);
  } else if (ref) {
    ref.current = value;
  }
  return ref;
}

// node_modules/use-callback-ref/dist/es2015/useRef.js
var import_react4 = __toESM(require_react());
function useCallbackRef2(initialValue, callback) {
  var ref = (0, import_react4.useState)(function() {
    return {
      // value
      value: initialValue,
      // last callback
      callback,
      // "memoized" public interface
      facade: {
        get current() {
          return ref.value;
        },
        set current(value) {
          var last = ref.value;
          if (last !== value) {
            ref.value = value;
            ref.callback(value, last);
          }
        }
      }
    };
  })[0];
  ref.callback = callback;
  return ref.facade;
}

// node_modules/use-callback-ref/dist/es2015/useMergeRef.js
var React26 = __toESM(require_react());
var useIsomorphicLayoutEffect = typeof window !== "undefined" ? React26.useLayoutEffect : React26.useEffect;
var currentValues = /* @__PURE__ */ new WeakMap();
function useMergeRefs(refs, defaultValue) {
  var callbackRef = useCallbackRef2(defaultValue || null, function(newValue) {
    return refs.forEach(function(ref) {
      return assignRef(ref, newValue);
    });
  });
  useIsomorphicLayoutEffect(function() {
    var oldValue = currentValues.get(callbackRef);
    if (oldValue) {
      var prevRefs_1 = new Set(oldValue);
      var nextRefs_1 = new Set(refs);
      var current_1 = callbackRef.current;
      prevRefs_1.forEach(function(ref) {
        if (!nextRefs_1.has(ref)) {
          assignRef(ref, null);
        }
      });
      nextRefs_1.forEach(function(ref) {
        if (!prevRefs_1.has(ref)) {
          assignRef(ref, current_1);
        }
      });
    }
    currentValues.set(callbackRef, refs);
  }, [refs]);
  return callbackRef;
}

// node_modules/use-sidecar/dist/es2015/medium.js
function ItoI(a) {
  return a;
}
function innerCreateMedium(defaults, middleware) {
  if (middleware === void 0) {
    middleware = ItoI;
  }
  var buffer = [];
  var assigned = false;
  var medium = {
    read: function() {
      if (assigned) {
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      }
      if (buffer.length) {
        return buffer[buffer.length - 1];
      }
      return defaults;
    },
    useMedium: function(data) {
      var item = middleware(data, assigned);
      buffer.push(item);
      return function() {
        buffer = buffer.filter(function(x) {
          return x !== item;
        });
      };
    },
    assignSyncMedium: function(cb) {
      assigned = true;
      while (buffer.length) {
        var cbs = buffer;
        buffer = [];
        cbs.forEach(cb);
      }
      buffer = {
        push: function(x) {
          return cb(x);
        },
        filter: function() {
          return buffer;
        }
      };
    },
    assignMedium: function(cb) {
      assigned = true;
      var pendingQueue = [];
      if (buffer.length) {
        var cbs = buffer;
        buffer = [];
        cbs.forEach(cb);
        pendingQueue = buffer;
      }
      var executeQueue = function() {
        var cbs2 = pendingQueue;
        pendingQueue = [];
        cbs2.forEach(cb);
      };
      var cycle = function() {
        return Promise.resolve().then(executeQueue);
      };
      cycle();
      buffer = {
        push: function(x) {
          pendingQueue.push(x);
          cycle();
        },
        filter: function(filter) {
          pendingQueue = pendingQueue.filter(filter);
          return buffer;
        }
      };
    }
  };
  return medium;
}
function createSidecarMedium(options) {
  if (options === void 0) {
    options = {};
  }
  var medium = innerCreateMedium(null);
  medium.options = __assign({ async: true, ssr: false }, options);
  return medium;
}

// node_modules/use-sidecar/dist/es2015/exports.js
var React27 = __toESM(require_react());
var SideCar = function(_a) {
  var sideCar = _a.sideCar, rest = __rest(_a, ["sideCar"]);
  if (!sideCar) {
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  }
  var Target = sideCar.read();
  if (!Target) {
    throw new Error("Sidecar medium not found");
  }
  return React27.createElement(Target, __assign({}, rest));
};
SideCar.isSideCarExport = true;
function exportSidecar(medium, exported) {
  medium.useMedium(exported);
  return SideCar;
}

// node_modules/react-remove-scroll/dist/es2015/medium.js
var effectCar = createSidecarMedium();

// node_modules/react-remove-scroll/dist/es2015/UI.js
var nothing = function() {
  return;
};
var RemoveScroll = React28.forwardRef(function(props, parentRef) {
  var ref = React28.useRef(null);
  var _a = React28.useState({
    onScrollCapture: nothing,
    onWheelCapture: nothing,
    onTouchMoveCapture: nothing
  }), callbacks = _a[0], setCallbacks = _a[1];
  var forwardProps = props.forwardProps, children = props.children, className = props.className, removeScrollBar = props.removeScrollBar, enabled = props.enabled, shards = props.shards, sideCar = props.sideCar, noRelative = props.noRelative, noIsolation = props.noIsolation, inert = props.inert, allowPinchZoom = props.allowPinchZoom, _b = props.as, Container = _b === void 0 ? "div" : _b, gapMode = props.gapMode, rest = __rest(props, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]);
  var SideCar2 = sideCar;
  var containerRef = useMergeRefs([ref, parentRef]);
  var containerProps = __assign(__assign({}, rest), callbacks);
  return React28.createElement(
    React28.Fragment,
    null,
    enabled && React28.createElement(SideCar2, { sideCar: effectCar, removeScrollBar, shards, noRelative, noIsolation, inert, setCallbacks, allowPinchZoom: !!allowPinchZoom, lockRef: ref, gapMode }),
    forwardProps ? React28.cloneElement(React28.Children.only(children), __assign(__assign({}, containerProps), { ref: containerRef })) : React28.createElement(Container, __assign({}, containerProps, { className, ref: containerRef }), children)
  );
});
RemoveScroll.defaultProps = {
  enabled: true,
  removeScrollBar: true,
  inert: false
};
RemoveScroll.classNames = {
  fullWidth: fullWidthClassName,
  zeroRight: zeroRightClassName
};

// node_modules/react-remove-scroll/dist/es2015/SideEffect.js
var React31 = __toESM(require_react());

// node_modules/react-remove-scroll-bar/dist/es2015/component.js
var React30 = __toESM(require_react());

// node_modules/react-style-singleton/dist/es2015/hook.js
var React29 = __toESM(require_react());

// node_modules/get-nonce/dist/es2015/index.js
var currentNonce;
var getNonce = function() {
  if (currentNonce) {
    return currentNonce;
  }
  if (typeof __webpack_nonce__ !== "undefined") {
    return __webpack_nonce__;
  }
  return void 0;
};

// node_modules/react-style-singleton/dist/es2015/singleton.js
function makeStyleTag() {
  if (!document)
    return null;
  var tag = document.createElement("style");
  tag.type = "text/css";
  var nonce = getNonce();
  if (nonce) {
    tag.setAttribute("nonce", nonce);
  }
  return tag;
}
function injectStyles(tag, css) {
  if (tag.styleSheet) {
    tag.styleSheet.cssText = css;
  } else {
    tag.appendChild(document.createTextNode(css));
  }
}
function insertStyleTag(tag) {
  var head = document.head || document.getElementsByTagName("head")[0];
  head.appendChild(tag);
}
var stylesheetSingleton = function() {
  var counter = 0;
  var stylesheet = null;
  return {
    add: function(style) {
      if (counter == 0) {
        if (stylesheet = makeStyleTag()) {
          injectStyles(stylesheet, style);
          insertStyleTag(stylesheet);
        }
      }
      counter++;
    },
    remove: function() {
      counter--;
      if (!counter && stylesheet) {
        stylesheet.parentNode && stylesheet.parentNode.removeChild(stylesheet);
        stylesheet = null;
      }
    }
  };
};

// node_modules/react-style-singleton/dist/es2015/hook.js
var styleHookSingleton = function() {
  var sheet = stylesheetSingleton();
  return function(styles, isDynamic) {
    React29.useEffect(function() {
      sheet.add(styles);
      return function() {
        sheet.remove();
      };
    }, [styles && isDynamic]);
  };
};

// node_modules/react-style-singleton/dist/es2015/component.js
var styleSingleton = function() {
  var useStyle = styleHookSingleton();
  var Sheet = function(_a) {
    var styles = _a.styles, dynamic = _a.dynamic;
    useStyle(styles, dynamic);
    return null;
  };
  return Sheet;
};

// node_modules/react-remove-scroll-bar/dist/es2015/utils.js
var zeroGap = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
};
var parse = function(x) {
  return parseInt(x || "", 10) || 0;
};
var getOffset = function(gapMode) {
  var cs = window.getComputedStyle(document.body);
  var left = cs[gapMode === "padding" ? "paddingLeft" : "marginLeft"];
  var top = cs[gapMode === "padding" ? "paddingTop" : "marginTop"];
  var right = cs[gapMode === "padding" ? "paddingRight" : "marginRight"];
  return [parse(left), parse(top), parse(right)];
};
var getGapWidth = function(gapMode) {
  if (gapMode === void 0) {
    gapMode = "margin";
  }
  if (typeof window === "undefined") {
    return zeroGap;
  }
  var offsets = getOffset(gapMode);
  var documentWidth = document.documentElement.clientWidth;
  var windowWidth = window.innerWidth;
  return {
    left: offsets[0],
    top: offsets[1],
    right: offsets[2],
    gap: Math.max(0, windowWidth - documentWidth + offsets[2] - offsets[0])
  };
};

// node_modules/react-remove-scroll-bar/dist/es2015/component.js
var Style = styleSingleton();
var lockAttribute = "data-scroll-locked";
var getStyles = function(_a, allowRelative, gapMode, important) {
  var left = _a.left, top = _a.top, right = _a.right, gap = _a.gap;
  if (gapMode === void 0) {
    gapMode = "margin";
  }
  return "\n  .".concat(noScrollbarsClassName, " {\n   overflow: hidden ").concat(important, ";\n   padding-right: ").concat(gap, "px ").concat(important, ";\n  }\n  body[").concat(lockAttribute, "] {\n    overflow: hidden ").concat(important, ";\n    overscroll-behavior: contain;\n    ").concat([
    allowRelative && "position: relative ".concat(important, ";"),
    gapMode === "margin" && "\n    padding-left: ".concat(left, "px;\n    padding-top: ").concat(top, "px;\n    padding-right: ").concat(right, "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(gap, "px ").concat(important, ";\n    "),
    gapMode === "padding" && "padding-right: ".concat(gap, "px ").concat(important, ";")
  ].filter(Boolean).join(""), "\n  }\n  \n  .").concat(zeroRightClassName, " {\n    right: ").concat(gap, "px ").concat(important, ";\n  }\n  \n  .").concat(fullWidthClassName, " {\n    margin-right: ").concat(gap, "px ").concat(important, ";\n  }\n  \n  .").concat(zeroRightClassName, " .").concat(zeroRightClassName, " {\n    right: 0 ").concat(important, ";\n  }\n  \n  .").concat(fullWidthClassName, " .").concat(fullWidthClassName, " {\n    margin-right: 0 ").concat(important, ";\n  }\n  \n  body[").concat(lockAttribute, "] {\n    ").concat(removedBarSizeVariable, ": ").concat(gap, "px;\n  }\n");
};
var getCurrentUseCounter = function() {
  var counter = parseInt(document.body.getAttribute(lockAttribute) || "0", 10);
  return isFinite(counter) ? counter : 0;
};
var useLockAttribute = function() {
  React30.useEffect(function() {
    document.body.setAttribute(lockAttribute, (getCurrentUseCounter() + 1).toString());
    return function() {
      var newCounter = getCurrentUseCounter() - 1;
      if (newCounter <= 0) {
        document.body.removeAttribute(lockAttribute);
      } else {
        document.body.setAttribute(lockAttribute, newCounter.toString());
      }
    };
  }, []);
};
var RemoveScrollBar = function(_a) {
  var noRelative = _a.noRelative, noImportant = _a.noImportant, _b = _a.gapMode, gapMode = _b === void 0 ? "margin" : _b;
  useLockAttribute();
  var gap = React30.useMemo(function() {
    return getGapWidth(gapMode);
  }, [gapMode]);
  return React30.createElement(Style, { styles: getStyles(gap, !noRelative, gapMode, !noImportant ? "!important" : "") });
};

// node_modules/react-remove-scroll/dist/es2015/aggresiveCapture.js
var passiveSupported = false;
if (typeof window !== "undefined") {
  try {
    options = Object.defineProperty({}, "passive", {
      get: function() {
        passiveSupported = true;
        return true;
      }
    });
    window.addEventListener("test", options, options);
    window.removeEventListener("test", options, options);
  } catch (err) {
    passiveSupported = false;
  }
}
var options;
var nonPassive = passiveSupported ? { passive: false } : false;

// node_modules/react-remove-scroll/dist/es2015/handleScroll.js
var alwaysContainsScroll = function(node) {
  return node.tagName === "TEXTAREA";
};
var elementCanBeScrolled = function(node, overflow) {
  if (!(node instanceof Element)) {
    return false;
  }
  var styles = window.getComputedStyle(node);
  return (
    // not-not-scrollable
    styles[overflow] !== "hidden" && // contains scroll inside self
    !(styles.overflowY === styles.overflowX && !alwaysContainsScroll(node) && styles[overflow] === "visible")
  );
};
var elementCouldBeVScrolled = function(node) {
  return elementCanBeScrolled(node, "overflowY");
};
var elementCouldBeHScrolled = function(node) {
  return elementCanBeScrolled(node, "overflowX");
};
var locationCouldBeScrolled = function(axis, node) {
  var ownerDocument = node.ownerDocument;
  var current = node;
  do {
    if (typeof ShadowRoot !== "undefined" && current instanceof ShadowRoot) {
      current = current.host;
    }
    var isScrollable = elementCouldBeScrolled(axis, current);
    if (isScrollable) {
      var _a = getScrollVariables(axis, current), scrollHeight = _a[1], clientHeight = _a[2];
      if (scrollHeight > clientHeight) {
        return true;
      }
    }
    current = current.parentNode;
  } while (current && current !== ownerDocument.body);
  return false;
};
var getVScrollVariables = function(_a) {
  var scrollTop = _a.scrollTop, scrollHeight = _a.scrollHeight, clientHeight = _a.clientHeight;
  return [
    scrollTop,
    scrollHeight,
    clientHeight
  ];
};
var getHScrollVariables = function(_a) {
  var scrollLeft = _a.scrollLeft, scrollWidth = _a.scrollWidth, clientWidth = _a.clientWidth;
  return [
    scrollLeft,
    scrollWidth,
    clientWidth
  ];
};
var elementCouldBeScrolled = function(axis, node) {
  return axis === "v" ? elementCouldBeVScrolled(node) : elementCouldBeHScrolled(node);
};
var getScrollVariables = function(axis, node) {
  return axis === "v" ? getVScrollVariables(node) : getHScrollVariables(node);
};
var getDirectionFactor = function(axis, direction) {
  return axis === "h" && direction === "rtl" ? -1 : 1;
};
var handleScroll = function(axis, endTarget, event, sourceDelta, noOverscroll) {
  var directionFactor = getDirectionFactor(axis, window.getComputedStyle(endTarget).direction);
  var delta = directionFactor * sourceDelta;
  var target = event.target;
  var targetInLock = endTarget.contains(target);
  var shouldCancelScroll = false;
  var isDeltaPositive = delta > 0;
  var availableScroll = 0;
  var availableScrollTop = 0;
  do {
    if (!target) {
      break;
    }
    var _a = getScrollVariables(axis, target), position = _a[0], scroll_1 = _a[1], capacity = _a[2];
    var elementScroll = scroll_1 - capacity - directionFactor * position;
    if (position || elementScroll) {
      if (elementCouldBeScrolled(axis, target)) {
        availableScroll += elementScroll;
        availableScrollTop += position;
      }
    }
    var parent_1 = target.parentNode;
    target = parent_1 && parent_1.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? parent_1.host : parent_1;
  } while (
    // portaled content
    !targetInLock && target !== document.body || // self content
    targetInLock && (endTarget.contains(target) || endTarget === target)
  );
  if (isDeltaPositive && (noOverscroll && Math.abs(availableScroll) < 1 || !noOverscroll && delta > availableScroll)) {
    shouldCancelScroll = true;
  } else if (!isDeltaPositive && (noOverscroll && Math.abs(availableScrollTop) < 1 || !noOverscroll && -delta > availableScrollTop)) {
    shouldCancelScroll = true;
  }
  return shouldCancelScroll;
};

// node_modules/react-remove-scroll/dist/es2015/SideEffect.js
var getTouchXY = function(event) {
  return "changedTouches" in event ? [event.changedTouches[0].clientX, event.changedTouches[0].clientY] : [0, 0];
};
var getDeltaXY = function(event) {
  return [event.deltaX, event.deltaY];
};
var extractRef = function(ref) {
  return ref && "current" in ref ? ref.current : ref;
};
var deltaCompare = function(x, y) {
  return x[0] === y[0] && x[1] === y[1];
};
var generateStyle = function(id) {
  return "\n  .block-interactivity-".concat(id, " {pointer-events: none;}\n  .allow-interactivity-").concat(id, " {pointer-events: all;}\n");
};
var idCounter = 0;
var lockStack = [];
function RemoveScrollSideCar(props) {
  var shouldPreventQueue = React31.useRef([]);
  var touchStartRef = React31.useRef([0, 0]);
  var activeAxis = React31.useRef();
  var id = React31.useState(idCounter++)[0];
  var Style2 = React31.useState(styleSingleton)[0];
  var lastProps = React31.useRef(props);
  React31.useEffect(function() {
    lastProps.current = props;
  }, [props]);
  React31.useEffect(function() {
    if (props.inert) {
      document.body.classList.add("block-interactivity-".concat(id));
      var allow_1 = __spreadArray([props.lockRef.current], (props.shards || []).map(extractRef), true).filter(Boolean);
      allow_1.forEach(function(el) {
        return el.classList.add("allow-interactivity-".concat(id));
      });
      return function() {
        document.body.classList.remove("block-interactivity-".concat(id));
        allow_1.forEach(function(el) {
          return el.classList.remove("allow-interactivity-".concat(id));
        });
      };
    }
    return;
  }, [props.inert, props.lockRef.current, props.shards]);
  var shouldCancelEvent = React31.useCallback(function(event, parent2) {
    if ("touches" in event && event.touches.length === 2 || event.type === "wheel" && event.ctrlKey) {
      return !lastProps.current.allowPinchZoom;
    }
    var touch = getTouchXY(event);
    var touchStart = touchStartRef.current;
    var deltaX = "deltaX" in event ? event.deltaX : touchStart[0] - touch[0];
    var deltaY = "deltaY" in event ? event.deltaY : touchStart[1] - touch[1];
    var currentAxis;
    var target = event.target;
    var moveDirection = Math.abs(deltaX) > Math.abs(deltaY) ? "h" : "v";
    if ("touches" in event && moveDirection === "h" && target.type === "range") {
      return false;
    }
    var selection = window.getSelection();
    var anchorNode = selection && selection.anchorNode;
    var isTouchingSelection = anchorNode ? anchorNode === target || anchorNode.contains(target) : false;
    if (isTouchingSelection) {
      return false;
    }
    var canBeScrolledInMainDirection = locationCouldBeScrolled(moveDirection, target);
    if (!canBeScrolledInMainDirection) {
      return true;
    }
    if (canBeScrolledInMainDirection) {
      currentAxis = moveDirection;
    } else {
      currentAxis = moveDirection === "v" ? "h" : "v";
      canBeScrolledInMainDirection = locationCouldBeScrolled(moveDirection, target);
    }
    if (!canBeScrolledInMainDirection) {
      return false;
    }
    if (!activeAxis.current && "changedTouches" in event && (deltaX || deltaY)) {
      activeAxis.current = currentAxis;
    }
    if (!currentAxis) {
      return true;
    }
    var cancelingAxis = activeAxis.current || currentAxis;
    return handleScroll(cancelingAxis, parent2, event, cancelingAxis === "h" ? deltaX : deltaY, true);
  }, []);
  var shouldPrevent = React31.useCallback(function(_event) {
    var event = _event;
    if (!lockStack.length || lockStack[lockStack.length - 1] !== Style2) {
      return;
    }
    var delta = "deltaY" in event ? getDeltaXY(event) : getTouchXY(event);
    var sourceEvent = shouldPreventQueue.current.filter(function(e) {
      return e.name === event.type && (e.target === event.target || event.target === e.shadowParent) && deltaCompare(e.delta, delta);
    })[0];
    if (sourceEvent && sourceEvent.should) {
      if (event.cancelable) {
        event.preventDefault();
      }
      return;
    }
    if (!sourceEvent) {
      var shardNodes = (lastProps.current.shards || []).map(extractRef).filter(Boolean).filter(function(node) {
        return node.contains(event.target);
      });
      var shouldStop = shardNodes.length > 0 ? shouldCancelEvent(event, shardNodes[0]) : !lastProps.current.noIsolation;
      if (shouldStop) {
        if (event.cancelable) {
          event.preventDefault();
        }
      }
    }
  }, []);
  var shouldCancel = React31.useCallback(function(name, delta, target, should) {
    var event = { name, delta, target, should, shadowParent: getOutermostShadowParent(target) };
    shouldPreventQueue.current.push(event);
    setTimeout(function() {
      shouldPreventQueue.current = shouldPreventQueue.current.filter(function(e) {
        return e !== event;
      });
    }, 1);
  }, []);
  var scrollTouchStart = React31.useCallback(function(event) {
    touchStartRef.current = getTouchXY(event);
    activeAxis.current = void 0;
  }, []);
  var scrollWheel = React31.useCallback(function(event) {
    shouldCancel(event.type, getDeltaXY(event), event.target, shouldCancelEvent(event, props.lockRef.current));
  }, []);
  var scrollTouchMove = React31.useCallback(function(event) {
    shouldCancel(event.type, getTouchXY(event), event.target, shouldCancelEvent(event, props.lockRef.current));
  }, []);
  React31.useEffect(function() {
    lockStack.push(Style2);
    props.setCallbacks({
      onScrollCapture: scrollWheel,
      onWheelCapture: scrollWheel,
      onTouchMoveCapture: scrollTouchMove
    });
    document.addEventListener("wheel", shouldPrevent, nonPassive);
    document.addEventListener("touchmove", shouldPrevent, nonPassive);
    document.addEventListener("touchstart", scrollTouchStart, nonPassive);
    return function() {
      lockStack = lockStack.filter(function(inst) {
        return inst !== Style2;
      });
      document.removeEventListener("wheel", shouldPrevent, nonPassive);
      document.removeEventListener("touchmove", shouldPrevent, nonPassive);
      document.removeEventListener("touchstart", scrollTouchStart, nonPassive);
    };
  }, []);
  var removeScrollBar = props.removeScrollBar, inert = props.inert;
  return React31.createElement(
    React31.Fragment,
    null,
    inert ? React31.createElement(Style2, { styles: generateStyle(id) }) : null,
    removeScrollBar ? React31.createElement(RemoveScrollBar, { noRelative: props.noRelative, gapMode: props.gapMode }) : null
  );
}
function getOutermostShadowParent(node) {
  var shadowParent = null;
  while (node !== null) {
    if (node instanceof ShadowRoot) {
      shadowParent = node.host;
      node = node.host;
    }
    node = node.parentNode;
  }
  return shadowParent;
}

// node_modules/react-remove-scroll/dist/es2015/sidecar.js
var sidecar_default = exportSidecar(effectCar, RemoveScrollSideCar);

// node_modules/react-remove-scroll/dist/es2015/Combination.js
var ReactRemoveScroll = React32.forwardRef(function(props, ref) {
  return React32.createElement(RemoveScroll, __assign({}, props, { ref, sideCar: sidecar_default }));
});
ReactRemoveScroll.classNames = RemoveScroll.classNames;
var Combination_default = ReactRemoveScroll;

// node_modules/@radix-ui/react-menu/dist/index.mjs
var import_jsx_runtime11 = __toESM(require_jsx_runtime(), 1);
var __defProp22 = Object.defineProperty;
var __name21 = (target, value) => __defProp22(target, "name", { value, configurable: true });
var SELECTION_KEYS = ["Enter", " "];
var FIRST_KEYS = ["ArrowDown", "PageUp", "Home"];
var LAST_KEYS = ["ArrowUp", "PageDown", "End"];
var FIRST_LAST_KEYS = [...FIRST_KEYS, ...LAST_KEYS];
var SUB_OPEN_KEYS = {
  ltr: [...SELECTION_KEYS, "ArrowRight"],
  rtl: [...SELECTION_KEYS, "ArrowLeft"]
};
var MENU_NAME = "Menu";
var [Collection2, useCollection2, createCollectionScope2] = createCollection(MENU_NAME);
var [createMenuContext, createMenuScope] = createContextScope(MENU_NAME, [
  createCollectionScope2,
  createPopperScope,
  createRovingFocusGroupScope
]);
var usePopperScope = createPopperScope();
var useRovingFocusGroupScope = createRovingFocusGroupScope();
var [MenuProvider, useMenuContext] = createMenuContext(MENU_NAME);
var [MenuRootProvider, useMenuRootContext] = createMenuContext(MENU_NAME);
var Menu = /* @__PURE__ */ __name21((props) => {
  const { __scopeMenu, open = false, children, dir, onOpenChange, modal = true } = props;
  const popperScope = usePopperScope(__scopeMenu);
  const [content, setContent] = React33.useState(null);
  const isUsingKeyboardRef = React33.useRef(false);
  const handleOpenChange = useCallbackRef(onOpenChange);
  const direction = useDirection(dir);
  React33.useEffect(() => {
    const handleKeyDown = /* @__PURE__ */ __name21(() => {
      isUsingKeyboardRef.current = true;
      document.addEventListener("pointerdown", handlePointer, { capture: true, once: true });
      document.addEventListener("pointermove", handlePointer, { capture: true, once: true });
    }, "handleKeyDown");
    const handlePointer = /* @__PURE__ */ __name21(() => isUsingKeyboardRef.current = false, "handlePointer");
    document.addEventListener("keydown", handleKeyDown, { capture: true });
    return () => {
      document.removeEventListener("keydown", handleKeyDown, { capture: true });
      document.removeEventListener("pointerdown", handlePointer, { capture: true });
      document.removeEventListener("pointermove", handlePointer, { capture: true });
    };
  }, []);
  React33.useEffect(() => {
    if (!open) {
      return;
    }
    const handleBlur = /* @__PURE__ */ __name21(() => handleOpenChange(false), "handleBlur");
    window.addEventListener("blur", handleBlur);
    return () => window.removeEventListener("blur", handleBlur);
  }, [open, handleOpenChange]);
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(Popper, { ...popperScope, children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
    MenuProvider,
    {
      scope: __scopeMenu,
      open,
      onOpenChange: handleOpenChange,
      content,
      onContentChange: setContent,
      children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
        MenuRootProvider,
        {
          scope: __scopeMenu,
          onClose: React33.useCallback(() => handleOpenChange(false), [handleOpenChange]),
          isUsingKeyboardRef,
          dir: direction,
          modal,
          children
        }
      )
    }
  ) });
}, "Menu");
var MenuAnchor = /* @__PURE__ */ React33.forwardRef(
  /* @__PURE__ */ __name21(function MenuAnchor2(props, forwardedRef) {
    const { __scopeMenu, ...anchorProps } = props;
    const popperScope = usePopperScope(__scopeMenu);
    return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(PopperAnchor, { ...popperScope, ...anchorProps, ref: forwardedRef });
  }, "MenuAnchor")
);
var PORTAL_NAME = "MenuPortal";
var [PortalProvider, usePortalContext] = createMenuContext(PORTAL_NAME, {
  forceMount: void 0
});
var MenuPortal = /* @__PURE__ */ __name21((props) => {
  const { __scopeMenu, forceMount, children, container } = props;
  const context = useMenuContext(PORTAL_NAME, __scopeMenu);
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(PortalProvider, { scope: __scopeMenu, forceMount, children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(Presence, { present: forceMount || context.open, children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(Portal, { asChild: true, container, children }) }) });
}, "MenuPortal");
var CONTENT_NAME2 = "MenuContent";
var [MenuContentProvider, useMenuContentContext] = createMenuContext(CONTENT_NAME2);
var MenuContent = /* @__PURE__ */ React33.forwardRef(
  /* @__PURE__ */ __name21(function MenuContent2(props, forwardedRef) {
    const portalContext = usePortalContext(CONTENT_NAME2, props.__scopeMenu);
    const { forceMount = portalContext.forceMount, ...contentProps } = props;
    const context = useMenuContext(CONTENT_NAME2, props.__scopeMenu);
    const rootContext = useMenuRootContext(CONTENT_NAME2, props.__scopeMenu);
    return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(Collection2.Provider, { scope: props.__scopeMenu, children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(Presence, { present: forceMount || context.open, children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(Collection2.Slot, { scope: props.__scopeMenu, children: rootContext.modal ? /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(MenuRootContentModal, { ...contentProps, ref: forwardedRef }) : /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(MenuRootContentNonModal, { ...contentProps, ref: forwardedRef }) }) }) });
  }, "MenuContent")
);
var MenuRootContentModal = /* @__PURE__ */ React33.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ __name21(function MenuRootContentModal2(props, forwardedRef) {
    const context = useMenuContext(CONTENT_NAME2, props.__scopeMenu);
    const ref = React33.useRef(null);
    const composedRefs = useComposedRefs(forwardedRef, ref);
    React33.useEffect(() => {
      const content = ref.current;
      if (content) return hideOthers(content);
    }, []);
    return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
      MenuContentImpl,
      {
        ...props,
        ref: composedRefs,
        trapFocus: context.open,
        disableOutsidePointerEvents: context.open,
        disableOutsideScroll: true,
        onFocusOutside: composeEventHandlers(
          props.onFocusOutside,
          (event) => event.preventDefault(),
          { checkForDefaultPrevented: false }
        ),
        onDismiss: () => context.onOpenChange(false)
      }
    );
  }, "MenuRootContentModal")
);
var MenuRootContentNonModal = /* @__PURE__ */ React33.forwardRef(/* @__PURE__ */ __name21(function MenuRootContentNonModal2(props, forwardedRef) {
  const context = useMenuContext(CONTENT_NAME2, props.__scopeMenu);
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
    MenuContentImpl,
    {
      ...props,
      ref: forwardedRef,
      trapFocus: false,
      disableOutsidePointerEvents: false,
      disableOutsideScroll: false,
      onDismiss: () => context.onOpenChange(false)
    }
  );
}, "MenuRootContentNonModal"));
var Slot = createSlot("MenuContent.ScrollLock");
var MenuContentImpl = /* @__PURE__ */ React33.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ __name21(function MenuContentImpl2(props, forwardedRef) {
    const {
      __scopeMenu,
      loop = false,
      trapFocus,
      onOpenAutoFocus,
      onCloseAutoFocus,
      disableOutsidePointerEvents,
      onEntryFocus,
      onEscapeKeyDown,
      onPointerDownOutside,
      onFocusOutside,
      onInteractOutside,
      onDismiss,
      disableOutsideScroll,
      ...contentProps
    } = props;
    const context = useMenuContext(CONTENT_NAME2, __scopeMenu);
    const rootContext = useMenuRootContext(CONTENT_NAME2, __scopeMenu);
    const popperScope = usePopperScope(__scopeMenu);
    const rovingFocusGroupScope = useRovingFocusGroupScope(__scopeMenu);
    const getItems = useCollection2(__scopeMenu);
    const [currentItemId, setCurrentItemId] = React33.useState(null);
    const contentRef = React33.useRef(null);
    const [branchNode, setBranchNode] = React33.useState(null);
    useFocusScopeBranch(branchNode);
    const { nodes: branchNodes, registry: branchRegistry } = useFocusScopeBranchRegistry();
    const isModal = Boolean(trapFocus || disableOutsideScroll);
    const composedRefs = useComposedRefs(
      forwardedRef,
      contentRef,
      context.onContentChange,
      setBranchNode
    );
    const timerRef = React33.useRef(0);
    const searchRef = React33.useRef("");
    const pointerGraceTimerRef = React33.useRef(0);
    const pointerGraceIntentRef = React33.useRef(null);
    const pointerDirRef = React33.useRef("right");
    const lastPointerXRef = React33.useRef(0);
    const shards = React33.useMemo(
      () => disableOutsideScroll ? [contentRef, ...branchNodes.map((node) => ({ current: node }))] : [],
      [contentRef, branchNodes, disableOutsideScroll]
    );
    const ScrollLockWrapper = disableOutsideScroll ? Combination_default : React33.Fragment;
    const scrollLockWrapperProps = disableOutsideScroll ? {
      as: Slot,
      allowPinchZoom: true,
      shards
    } : void 0;
    const handleTypeaheadSearch = /* @__PURE__ */ __name21((key) => {
      const search = searchRef.current + key;
      const items = getItems().filter((item) => !item.disabled);
      const currentItem = document.activeElement;
      const currentMatch = items.find((item) => item.ref.current === currentItem)?.textValue;
      const values = items.map((item) => item.textValue);
      const nextMatch = getNextMatch(values, search, currentMatch);
      const newItem = items.find((item) => item.textValue === nextMatch)?.ref.current;
      function updateSearch(value) {
        searchRef.current = value;
        window.clearTimeout(timerRef.current);
        if (value !== "") timerRef.current = window.setTimeout(() => updateSearch(""), 1e3);
      }
      __name21(updateSearch, "updateSearch");
      updateSearch(search);
      if (newItem) {
        setTimeout(() => newItem.focus());
      }
    }, "handleTypeaheadSearch");
    React33.useEffect(() => {
      return () => window.clearTimeout(timerRef.current);
    }, []);
    useFocusGuards();
    const isPointerMovingToSubmenu = React33.useCallback((event) => {
      const isMovingTowards = pointerDirRef.current === pointerGraceIntentRef.current?.side;
      return isMovingTowards && isPointerInGraceArea(event, pointerGraceIntentRef.current?.area);
    }, []);
    return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
      MenuContentProvider,
      {
        scope: __scopeMenu,
        searchRef,
        onItemEnter: React33.useCallback(
          (event) => {
            if (isPointerMovingToSubmenu(event)) event.preventDefault();
          },
          [isPointerMovingToSubmenu]
        ),
        onItemLeave: React33.useCallback(
          (event) => {
            if (isPointerMovingToSubmenu(event)) return;
            contentRef.current?.focus();
            setCurrentItemId(null);
          },
          [isPointerMovingToSubmenu]
        ),
        onTriggerLeave: React33.useCallback(
          (event) => {
            if (isPointerMovingToSubmenu(event)) event.preventDefault();
          },
          [isPointerMovingToSubmenu]
        ),
        pointerGraceTimerRef,
        onPointerGraceIntentChange: React33.useCallback((intent) => {
          pointerGraceIntentRef.current = intent;
        }, []),
        children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(FocusScopeBranchProvider, { registry: isModal ? branchRegistry : null, children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(ScrollLockWrapper, { ...scrollLockWrapperProps, children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
          FocusScope,
          {
            asChild: true,
            trapped: trapFocus,
            branches: branchNodes,
            onMountAutoFocus: composeEventHandlers(onOpenAutoFocus, (event) => {
              event.preventDefault();
              contentRef.current?.focus({ preventScroll: true });
            }),
            onUnmountAutoFocus: onCloseAutoFocus,
            children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
              DismissableLayer,
              {
                asChild: true,
                disableOutsidePointerEvents,
                onEscapeKeyDown,
                onPointerDownOutside,
                onFocusOutside,
                onInteractOutside,
                onDismiss,
                children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
                  RovingFocusGroup,
                  {
                    asChild: true,
                    ...rovingFocusGroupScope,
                    dir: rootContext.dir,
                    orientation: "vertical",
                    loop,
                    currentTabStopId: currentItemId,
                    onCurrentTabStopIdChange: setCurrentItemId,
                    onEntryFocus: composeEventHandlers(onEntryFocus, (event) => {
                      if (!rootContext.isUsingKeyboardRef.current) event.preventDefault();
                    }),
                    preventScrollOnEntryFocus: true,
                    children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
                      PopperContent,
                      {
                        role: "menu",
                        "aria-orientation": "vertical",
                        "data-state": getOpenState(context.open),
                        "data-radix-menu-content": "",
                        dir: rootContext.dir,
                        ...popperScope,
                        ...contentProps,
                        ref: composedRefs,
                        style: { outline: "none", ...contentProps.style },
                        onKeyDown: composeEventHandlers(contentProps.onKeyDown, (event) => {
                          const target = event.target;
                          const isKeyDownInside = target.closest("[data-radix-menu-content]") === event.currentTarget;
                          const isModifierKey = event.ctrlKey || event.altKey || event.metaKey;
                          const isCharacterKey = event.key.length === 1;
                          if (isKeyDownInside) {
                            if (event.key === "Tab") event.preventDefault();
                            if (!isModifierKey && isCharacterKey) handleTypeaheadSearch(event.key);
                          }
                          const content = contentRef.current;
                          if (event.target !== content) return;
                          if (!FIRST_LAST_KEYS.includes(event.key)) return;
                          event.preventDefault();
                          const items = getItems().filter((item) => !item.disabled);
                          const candidateNodes = items.map((item) => item.ref.current);
                          if (LAST_KEYS.includes(event.key)) candidateNodes.reverse();
                          focusFirst3(candidateNodes);
                        }),
                        onBlur: composeEventHandlers(props.onBlur, (event) => {
                          if (!event.currentTarget.contains(event.target)) {
                            window.clearTimeout(timerRef.current);
                            searchRef.current = "";
                          }
                        }),
                        onPointerMove: composeEventHandlers(
                          props.onPointerMove,
                          whenMouse((event) => {
                            const target = event.target;
                            const pointerXHasChanged = lastPointerXRef.current !== event.clientX;
                            if (event.currentTarget.contains(target) && pointerXHasChanged) {
                              const newDir = event.clientX > lastPointerXRef.current ? "right" : "left";
                              pointerDirRef.current = newDir;
                              lastPointerXRef.current = event.clientX;
                            }
                          })
                        )
                      }
                    )
                  }
                )
              }
            )
          }
        ) }) })
      }
    );
  }, "MenuContentImpl")
);
var MenuGroup = /* @__PURE__ */ React33.forwardRef(
  /* @__PURE__ */ __name21(function MenuGroup2(props, forwardedRef) {
    const { __scopeMenu, ...groupProps } = props;
    return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(Primitive.div, { role: "group", ...groupProps, ref: forwardedRef });
  }, "MenuGroup")
);
var MenuLabel = /* @__PURE__ */ React33.forwardRef(
  /* @__PURE__ */ __name21(function MenuLabel2(props, forwardedRef) {
    const { __scopeMenu, ...labelProps } = props;
    return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(Primitive.div, { ...labelProps, ref: forwardedRef });
  }, "MenuLabel")
);
var ITEM_NAME2 = "MenuItem";
var ITEM_SELECT = "menu.itemSelect";
var MenuItem = /* @__PURE__ */ React33.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ __name21(function MenuItem2(props, forwardedRef) {
    const { disabled = false, onSelect, ...itemProps } = props;
    const ref = React33.useRef(null);
    const rootContext = useMenuRootContext(ITEM_NAME2, props.__scopeMenu);
    const contentContext = useMenuContentContext(ITEM_NAME2, props.__scopeMenu);
    const composedRefs = useComposedRefs(forwardedRef, ref);
    const isPointerDownRef = React33.useRef(false);
    const handleSelect = /* @__PURE__ */ __name21(() => {
      const menuItem = ref.current;
      if (!disabled && menuItem) {
        const itemSelectEvent = new CustomEvent(ITEM_SELECT, { bubbles: true, cancelable: true });
        menuItem.addEventListener(ITEM_SELECT, (event) => onSelect?.(event), { once: true });
        dispatchDiscreteCustomEvent(menuItem, itemSelectEvent);
        if (itemSelectEvent.defaultPrevented) {
          isPointerDownRef.current = false;
        } else {
          rootContext.onClose();
        }
      }
    }, "handleSelect");
    return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
      MenuItemImpl,
      {
        ...itemProps,
        ref: composedRefs,
        disabled,
        onClick: composeEventHandlers(props.onClick, handleSelect),
        onPointerDown: (event) => {
          props.onPointerDown?.(event);
          isPointerDownRef.current = true;
        },
        onPointerUp: composeEventHandlers(props.onPointerUp, (event) => {
          if (!isPointerDownRef.current) event.currentTarget?.click();
        }),
        onKeyDown: composeEventHandlers(props.onKeyDown, (event) => {
          if (disabled || event.target !== event.currentTarget) {
            return;
          }
          const isTypingAhead = contentContext.searchRef.current !== "";
          if (isTypingAhead && event.key === " ") {
            return;
          }
          if (SELECTION_KEYS.includes(event.key)) {
            event.currentTarget.click();
            event.preventDefault();
          }
        })
      }
    );
  }, "MenuItem")
);
var MenuItemImpl = /* @__PURE__ */ React33.forwardRef(
  /* @__PURE__ */ __name21(function MenuItemImpl2(props, forwardedRef) {
    const { __scopeMenu, disabled = false, textValue, ...itemProps } = props;
    const contentContext = useMenuContentContext(ITEM_NAME2, __scopeMenu);
    const rovingFocusGroupScope = useRovingFocusGroupScope(__scopeMenu);
    const ref = React33.useRef(null);
    const composedRefs = useComposedRefs(forwardedRef, ref);
    const [isFocused, setIsFocused] = React33.useState(false);
    const [textContent, setTextContent] = React33.useState("");
    React33.useEffect(() => {
      const menuItem = ref.current;
      if (menuItem) {
        setTextContent((menuItem.textContent ?? "").trim());
      }
    }, [itemProps.children]);
    return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
      Collection2.ItemSlot,
      {
        scope: __scopeMenu,
        disabled,
        textValue: textValue ?? textContent,
        children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(RovingFocusGroupItem, { asChild: true, ...rovingFocusGroupScope, focusable: !disabled, children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
          Primitive.div,
          {
            role: "menuitem",
            "data-highlighted": isFocused ? "" : void 0,
            "aria-disabled": disabled || void 0,
            "data-disabled": disabled ? "" : void 0,
            ...itemProps,
            ref: composedRefs,
            onPointerMove: composeEventHandlers(
              props.onPointerMove,
              whenMouse((event) => {
                if (disabled) {
                  contentContext.onItemLeave(event);
                } else {
                  contentContext.onItemEnter(event);
                  if (!event.defaultPrevented) {
                    const item = event.currentTarget;
                    item.focus({ preventScroll: true });
                  }
                }
              })
            ),
            onPointerLeave: composeEventHandlers(
              props.onPointerLeave,
              whenMouse((event) => contentContext.onItemLeave(event))
            ),
            onFocus: composeEventHandlers(props.onFocus, () => setIsFocused(true)),
            onBlur: composeEventHandlers(props.onBlur, () => setIsFocused(false))
          }
        ) })
      }
    );
  }, "MenuItemImpl")
);
var RADIO_GROUP_NAME = "MenuRadioGroup";
var [RadioGroupProvider, useRadioGroupContext] = createMenuContext(
  RADIO_GROUP_NAME,
  { value: void 0, onValueChange: /* @__PURE__ */ __name21(() => {
  }, "onValueChange") }
);
var MenuRadioGroup = /* @__PURE__ */ React33.forwardRef(
  /* @__PURE__ */ __name21(function MenuRadioGroup2(props, forwardedRef) {
    const { value, onValueChange, ...groupProps } = props;
    const handleValueChange = useCallbackRef(onValueChange);
    return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(RadioGroupProvider, { scope: props.__scopeMenu, value, onValueChange: handleValueChange, children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(MenuGroup, { ...groupProps, ref: forwardedRef }) });
  }, "MenuRadioGroup")
);
var RADIO_ITEM_NAME = "MenuRadioItem";
var MenuRadioItem = /* @__PURE__ */ React33.forwardRef(
  /* @__PURE__ */ __name21(function MenuRadioItem2(props, forwardedRef) {
    const { value, ...radioItemProps } = props;
    const context = useRadioGroupContext(RADIO_ITEM_NAME, props.__scopeMenu);
    const checked = value === context.value;
    return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(ItemIndicatorProvider, { scope: props.__scopeMenu, checked, children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
      MenuItem,
      {
        role: "menuitemradio",
        "aria-checked": checked,
        ...radioItemProps,
        ref: forwardedRef,
        "data-state": getCheckedState(checked),
        onSelect: composeEventHandlers(
          radioItemProps.onSelect,
          () => context.onValueChange?.(value),
          { checkForDefaultPrevented: false }
        )
      }
    ) });
  }, "MenuRadioItem")
);
var ITEM_INDICATOR_NAME = "MenuItemIndicator";
var [ItemIndicatorProvider, useItemIndicatorContext] = createMenuContext(
  ITEM_INDICATOR_NAME,
  { checked: false }
);
var MenuItemIndicator = /* @__PURE__ */ React33.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ __name21(function MenuItemIndicator2(props, forwardedRef) {
    const { __scopeMenu, forceMount, ...itemIndicatorProps } = props;
    const indicatorContext = useItemIndicatorContext(ITEM_INDICATOR_NAME, __scopeMenu);
    return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
      Presence,
      {
        present: forceMount || isIndeterminate(indicatorContext.checked) || indicatorContext.checked === true,
        children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
          Primitive.span,
          {
            ...itemIndicatorProps,
            ref: forwardedRef,
            "data-state": getCheckedState(indicatorContext.checked)
          }
        )
      }
    );
  }, "MenuItemIndicator")
);
var MenuSeparator = /* @__PURE__ */ React33.forwardRef(
  /* @__PURE__ */ __name21(function MenuSeparator2(props, forwardedRef) {
    const { __scopeMenu, ...separatorProps } = props;
    return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
      Primitive.div,
      {
        role: "separator",
        "aria-orientation": "horizontal",
        ...separatorProps,
        ref: forwardedRef
      }
    );
  }, "MenuSeparator")
);
var SUB_NAME = "MenuSub";
var [MenuSubProvider, useMenuSubContext] = createMenuContext(SUB_NAME);
function getOpenState(open) {
  return open ? "open" : "closed";
}
__name21(getOpenState, "getOpenState");
function isIndeterminate(checked) {
  return checked === "indeterminate";
}
__name21(isIndeterminate, "isIndeterminate");
function getCheckedState(checked) {
  return isIndeterminate(checked) ? "indeterminate" : checked ? "checked" : "unchecked";
}
__name21(getCheckedState, "getCheckedState");
function focusFirst3(candidates) {
  const PREVIOUSLY_FOCUSED_ELEMENT = document.activeElement;
  for (const candidate of candidates) {
    if (candidate === PREVIOUSLY_FOCUSED_ELEMENT) return;
    candidate.focus();
    if (document.activeElement !== PREVIOUSLY_FOCUSED_ELEMENT) return;
  }
}
__name21(focusFirst3, "focusFirst");
function wrapArray2(array, startIndex) {
  return array.map((_, index2) => array[(startIndex + index2) % array.length]);
}
__name21(wrapArray2, "wrapArray");
function getNextMatch(values, search, currentMatch) {
  const isRepeated = search.length > 1 && Array.from(search).every((char) => char === search[0]);
  const normalizedSearch = isRepeated ? search[0] : search;
  const currentMatchIndex = currentMatch ? values.indexOf(currentMatch) : -1;
  let wrappedValues = wrapArray2(values, Math.max(currentMatchIndex, 0));
  const excludeCurrentMatch = normalizedSearch.length === 1;
  if (excludeCurrentMatch) wrappedValues = wrappedValues.filter((v) => v !== currentMatch);
  const nextMatch = wrappedValues.find(
    (value) => value.toLowerCase().startsWith(normalizedSearch.toLowerCase())
  );
  return nextMatch !== currentMatch ? nextMatch : void 0;
}
__name21(getNextMatch, "getNextMatch");
function isPointInPolygon(point, polygon) {
  const { x, y } = point;
  let inside = false;
  for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
    const ii = polygon[i];
    const jj = polygon[j];
    const xi = ii.x;
    const yi = ii.y;
    const xj = jj.x;
    const yj = jj.y;
    const intersect = yi > y !== yj > y && x < (xj - xi) * (y - yi) / (yj - yi) + xi;
    if (intersect) inside = !inside;
  }
  return inside;
}
__name21(isPointInPolygon, "isPointInPolygon");
function isPointerInGraceArea(event, area) {
  if (!area) return false;
  const cursorPos = { x: event.clientX, y: event.clientY };
  return isPointInPolygon(cursorPos, area);
}
__name21(isPointerInGraceArea, "isPointerInGraceArea");
function whenMouse(handler) {
  return (event) => event.pointerType === "mouse" ? handler(event) : void 0;
}
__name21(whenMouse, "whenMouse");

// node_modules/@radix-ui/react-dropdown-menu/dist/index.mjs
var import_jsx_runtime12 = __toESM(require_jsx_runtime(), 1);
var __defProp23 = Object.defineProperty;
var __name22 = (target, value) => __defProp23(target, "name", { value, configurable: true });
var DROPDOWN_MENU_NAME = "DropdownMenu";
var [createDropdownMenuContext, createDropdownMenuScope] = createContextScope(
  DROPDOWN_MENU_NAME,
  [createMenuScope]
);
var useMenuScope = createMenuScope();
var [DropdownMenuProvider, useDropdownMenuContext] = createDropdownMenuContext(DROPDOWN_MENU_NAME);
var DropdownMenu = /* @__PURE__ */ __name22((props) => {
  const {
    __scopeDropdownMenu,
    children,
    dir,
    open: openProp,
    defaultOpen,
    onOpenChange,
    modal = true
  } = props;
  const menuScope = useMenuScope(__scopeDropdownMenu);
  const triggerRef = React34.useRef(null);
  const [open, setOpen] = useControllableState({
    prop: openProp,
    defaultProp: defaultOpen ?? false,
    onChange: onOpenChange,
    caller: DROPDOWN_MENU_NAME
  });
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
    DropdownMenuProvider,
    {
      scope: __scopeDropdownMenu,
      triggerId: useId(),
      triggerRef,
      contentId: useId(),
      open,
      onOpenChange: setOpen,
      onOpenToggle: React34.useCallback(() => setOpen((prevOpen) => !prevOpen), [setOpen]),
      modal,
      children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(Menu, { ...menuScope, open, onOpenChange: setOpen, dir, modal, children })
    }
  );
}, "DropdownMenu");
var TRIGGER_NAME = "DropdownMenuTrigger";
var DropdownMenuTrigger = /* @__PURE__ */ React34.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ __name22(function DropdownMenuTrigger2(props, forwardedRef) {
    const { __scopeDropdownMenu, disabled = false, ...triggerProps } = props;
    const context = useDropdownMenuContext(TRIGGER_NAME, __scopeDropdownMenu);
    const menuScope = useMenuScope(__scopeDropdownMenu);
    const composedRefs = useComposedRefs(forwardedRef, context.triggerRef);
    return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(MenuAnchor, { asChild: true, ...menuScope, children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
      Primitive.button,
      {
        type: "button",
        id: context.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": context.open,
        "aria-controls": context.open ? context.contentId : void 0,
        "data-state": context.open ? "open" : "closed",
        "data-disabled": disabled ? "" : void 0,
        disabled,
        ...triggerProps,
        ref: composedRefs,
        onPointerDown: composeEventHandlers(props.onPointerDown, (event) => {
          if (!disabled && event.button === 0 && event.ctrlKey === false) {
            context.onOpenToggle();
            if (!context.open) event.preventDefault();
          }
        }),
        onKeyDown: composeEventHandlers(props.onKeyDown, (event) => {
          if (disabled) return;
          if (["Enter", " "].includes(event.key)) context.onOpenToggle();
          if (event.key === "ArrowDown") context.onOpenChange(true);
          if (["Enter", " ", "ArrowDown"].includes(event.key)) event.preventDefault();
        })
      }
    ) });
  }, "DropdownMenuTrigger")
);
var DropdownMenuPortal = /* @__PURE__ */ __name22((props) => {
  const { __scopeDropdownMenu, ...portalProps } = props;
  const menuScope = useMenuScope(__scopeDropdownMenu);
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(MenuPortal, { ...menuScope, ...portalProps });
}, "DropdownMenuPortal");
var CONTENT_NAME3 = "DropdownMenuContent";
var DropdownMenuContent = /* @__PURE__ */ React34.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ __name22(function DropdownMenuContent2(props, forwardedRef) {
    const { __scopeDropdownMenu, ...contentProps } = props;
    const context = useDropdownMenuContext(CONTENT_NAME3, __scopeDropdownMenu);
    const menuScope = useMenuScope(__scopeDropdownMenu);
    const hasInteractedOutsideRef = React34.useRef(false);
    return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
      MenuContent,
      {
        id: context.contentId,
        "aria-labelledby": context.triggerId,
        ...menuScope,
        ...contentProps,
        ref: forwardedRef,
        onCloseAutoFocus: composeEventHandlers(props.onCloseAutoFocus, (event) => {
          if (!hasInteractedOutsideRef.current) context.triggerRef.current?.focus();
          hasInteractedOutsideRef.current = false;
          event.preventDefault();
        }),
        onInteractOutside: composeEventHandlers(props.onInteractOutside, (event) => {
          const originalEvent = event.detail.originalEvent;
          const ctrlLeftClick = originalEvent.button === 0 && originalEvent.ctrlKey === true;
          const isRightClick = originalEvent.button === 2 || ctrlLeftClick;
          if (!context.modal || isRightClick) hasInteractedOutsideRef.current = true;
        }),
        style: {
          ...props.style,
          // re-namespace exposed content custom properties
          ...{
            "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
            "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
            "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
            "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
            "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
          }
        }
      }
    );
  }, "DropdownMenuContent")
);
var DropdownMenuLabel = /* @__PURE__ */ React34.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ __name22(function DropdownMenuLabel2(props, forwardedRef) {
    const { __scopeDropdownMenu, ...labelProps } = props;
    const menuScope = useMenuScope(__scopeDropdownMenu);
    return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(MenuLabel, { ...menuScope, ...labelProps, ref: forwardedRef });
  }, "DropdownMenuLabel")
);
var DropdownMenuItem = /* @__PURE__ */ React34.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ __name22(function DropdownMenuItem2(props, forwardedRef) {
    const { __scopeDropdownMenu, ...itemProps } = props;
    const menuScope = useMenuScope(__scopeDropdownMenu);
    return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(MenuItem, { ...menuScope, ...itemProps, ref: forwardedRef });
  }, "DropdownMenuItem")
);
var DropdownMenuRadioGroup = /* @__PURE__ */ React34.forwardRef(/* @__PURE__ */ __name22(function DropdownMenuRadioGroup2(props, forwardedRef) {
  const { __scopeDropdownMenu, ...radioGroupProps } = props;
  const menuScope = useMenuScope(__scopeDropdownMenu);
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(MenuRadioGroup, { ...menuScope, ...radioGroupProps, ref: forwardedRef });
}, "DropdownMenuRadioGroup"));
var DropdownMenuRadioItem = /* @__PURE__ */ React34.forwardRef(/* @__PURE__ */ __name22(function DropdownMenuRadioItem2(props, forwardedRef) {
  const { __scopeDropdownMenu, ...radioItemProps } = props;
  const menuScope = useMenuScope(__scopeDropdownMenu);
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(MenuRadioItem, { ...menuScope, ...radioItemProps, ref: forwardedRef });
}, "DropdownMenuRadioItem"));
var DropdownMenuItemIndicator = /* @__PURE__ */ React34.forwardRef(/* @__PURE__ */ __name22(function DropdownMenuItemIndicator2(props, forwardedRef) {
  const { __scopeDropdownMenu, ...itemIndicatorProps } = props;
  const menuScope = useMenuScope(__scopeDropdownMenu);
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(MenuItemIndicator, { ...menuScope, ...itemIndicatorProps, ref: forwardedRef });
}, "DropdownMenuItemIndicator"));
var DropdownMenuSeparator = /* @__PURE__ */ React34.forwardRef(/* @__PURE__ */ __name22(function DropdownMenuSeparator2(props, forwardedRef) {
  const { __scopeDropdownMenu, ...separatorProps } = props;
  const menuScope = useMenuScope(__scopeDropdownMenu);
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(MenuSeparator, { ...menuScope, ...separatorProps, ref: forwardedRef });
}, "DropdownMenuSeparator"));

// node_modules/@radix-ui/react-dialog/dist/index.mjs
var React35 = __toESM(require_react(), 1);
var import_jsx_runtime13 = __toESM(require_jsx_runtime(), 1);
var __defProp24 = Object.defineProperty;
var __name23 = (target, value) => __defProp24(target, "name", { value, configurable: true });
var DIALOG_NAME = "Dialog";
var [createDialogContext, createDialogScope] = createContextScope(DIALOG_NAME);
var [DialogProvider, useDialogContext] = createDialogContext(DIALOG_NAME);
var Dialog = /* @__PURE__ */ __name23((props) => {
  const {
    __scopeDialog,
    children,
    open: openProp,
    defaultOpen,
    onOpenChange,
    modal = true
  } = props;
  const triggerRef = React35.useRef(null);
  const contentRef = React35.useRef(null);
  const { nodes: branchNodes, registry: branchRegistry } = useFocusScopeBranchRegistry();
  const [open, setOpen] = useControllableState({
    prop: openProp,
    defaultProp: defaultOpen ?? false,
    onChange: onOpenChange,
    caller: DIALOG_NAME
  });
  const [titleCount, setTitleCount] = React35.useState(0);
  const [descriptionCount, setDescriptionCount] = React35.useState(0);
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
    DialogProvider,
    {
      scope: __scopeDialog,
      triggerRef,
      contentRef,
      contentId: useId(),
      titleId: useId(),
      descriptionId: useId(),
      titlePresent: titleCount > 0,
      descriptionPresent: descriptionCount > 0,
      setTitleCount,
      setDescriptionCount,
      open,
      onOpenChange: setOpen,
      onOpenToggle: React35.useCallback(() => setOpen((prevOpen) => !prevOpen), [setOpen]),
      modal,
      branchNodes,
      branchRegistry,
      children
    }
  );
}, "Dialog");
var PORTAL_NAME2 = "DialogPortal";
var [PortalProvider2, usePortalContext2] = createDialogContext(PORTAL_NAME2, {
  forceMount: void 0
});
var DialogPortal = /* @__PURE__ */ __name23((props) => {
  const { __scopeDialog, forceMount, children, container } = props;
  const context = useDialogContext(PORTAL_NAME2, __scopeDialog);
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(PortalProvider2, { scope: __scopeDialog, forceMount, children: React35.Children.map(children, (child) => /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(Presence, { present: forceMount || context.open, children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(Portal, { asChild: true, container, children: child }) })) });
}, "DialogPortal");
var OVERLAY_NAME = "DialogOverlay";
var DialogOverlay = /* @__PURE__ */ React35.forwardRef(
  /* @__PURE__ */ __name23(function DialogOverlay2(props, forwardedRef) {
    const portalContext = usePortalContext2(OVERLAY_NAME, props.__scopeDialog);
    const { forceMount = portalContext.forceMount, ...overlayProps } = props;
    const context = useDialogContext(OVERLAY_NAME, props.__scopeDialog);
    return context.modal ? /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(Presence, { present: forceMount || context.open, children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(DialogOverlayImpl, { ...overlayProps, ref: forwardedRef }) }) : null;
  }, "DialogOverlay")
);
var Slot2 = createSlot("DialogOverlay.RemoveScroll");
var DialogOverlayImpl = /* @__PURE__ */ React35.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ __name23(function DialogOverlayImpl2(props, forwardedRef) {
    const { __scopeDialog, ...overlayProps } = props;
    const context = useDialogContext(OVERLAY_NAME, __scopeDialog);
    const registerDismissableSurface = useDismissableLayerSurface();
    const composedRefs = useComposedRefs(forwardedRef, registerDismissableSurface);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside
      // `RemoveScroll` (eg. when `Overlay` and `Content` are siblings). Nested
      // layers are registered as branches and added as shards so they remain
      // scrollable too. See https://github.com/radix-ui/primitives/issues/3423
      /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
        Combination_default,
        {
          as: Slot2,
          allowPinchZoom: true,
          shards: React35.useMemo(
            () => [context.contentRef, ...context.branchNodes.map((node) => ({ current: node }))],
            [context.contentRef, context.branchNodes]
          ),
          children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
            Primitive.div,
            {
              "data-state": getState(context.open),
              ...overlayProps,
              ref: composedRefs,
              style: { pointerEvents: "auto", ...overlayProps.style }
            }
          )
        }
      )
    );
  }, "DialogOverlayImpl")
);
var CONTENT_NAME4 = "DialogContent";
var DialogContent = /* @__PURE__ */ React35.forwardRef(
  /* @__PURE__ */ __name23(function DialogContent2(props, forwardedRef) {
    const portalContext = usePortalContext2(CONTENT_NAME4, props.__scopeDialog);
    const { forceMount = portalContext.forceMount, ...contentProps } = props;
    const context = useDialogContext(CONTENT_NAME4, props.__scopeDialog);
    return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(Presence, { present: forceMount || context.open, children: context.modal ? /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(DialogContentModal, { ...contentProps, ref: forwardedRef }) : /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(DialogContentNonModal, { ...contentProps, ref: forwardedRef }) });
  }, "DialogContent")
);
var DialogContentModal = /* @__PURE__ */ React35.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ __name23(function DialogContentModal2(props, forwardedRef) {
    const context = useDialogContext(CONTENT_NAME4, props.__scopeDialog);
    const contentRef = React35.useRef(null);
    const composedRefs = useComposedRefs(forwardedRef, context.contentRef, contentRef);
    React35.useEffect(() => {
      const content = contentRef.current;
      if (content) return hideOthers(content);
    }, []);
    return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
      DialogContentImpl,
      {
        ...props,
        ref: composedRefs,
        trapFocus: context.open,
        disableOutsidePointerEvents: context.open,
        onCloseAutoFocus: composeEventHandlers(props.onCloseAutoFocus, (event) => {
          event.preventDefault();
          context.triggerRef.current?.focus();
        }),
        onPointerDownOutside: composeEventHandlers(props.onPointerDownOutside, (event) => {
          const originalEvent = event.detail.originalEvent;
          const ctrlLeftClick = originalEvent.button === 0 && originalEvent.ctrlKey === true;
          const isRightClick = originalEvent.button === 2 || ctrlLeftClick;
          if (isRightClick) event.preventDefault();
        }),
        onFocusOutside: composeEventHandlers(
          props.onFocusOutside,
          (event) => event.preventDefault()
        )
      }
    );
  }, "DialogContentModal")
);
var DialogContentNonModal = /* @__PURE__ */ React35.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ __name23(function DialogContentNonModal2(props, forwardedRef) {
    const context = useDialogContext(CONTENT_NAME4, props.__scopeDialog);
    const hasInteractedOutsideRef = React35.useRef(false);
    const hasPointerDownOutsideRef = React35.useRef(false);
    return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
      DialogContentImpl,
      {
        ...props,
        ref: forwardedRef,
        trapFocus: false,
        disableOutsidePointerEvents: false,
        onCloseAutoFocus: (event) => {
          props.onCloseAutoFocus?.(event);
          if (!event.defaultPrevented) {
            if (!hasInteractedOutsideRef.current) context.triggerRef.current?.focus();
            event.preventDefault();
          }
          hasInteractedOutsideRef.current = false;
          hasPointerDownOutsideRef.current = false;
        },
        onInteractOutside: (event) => {
          props.onInteractOutside?.(event);
          if (!event.defaultPrevented) {
            hasInteractedOutsideRef.current = true;
            if (event.detail.originalEvent.type === "pointerdown") {
              hasPointerDownOutsideRef.current = true;
            }
          }
          const target = event.target;
          const targetIsTrigger = context.triggerRef.current?.contains(target);
          if (targetIsTrigger) event.preventDefault();
          if (event.detail.originalEvent.type === "focusin" && hasPointerDownOutsideRef.current) {
            event.preventDefault();
          }
        }
      }
    );
  }, "DialogContentNonModal")
);
var DialogContentImpl = /* @__PURE__ */ React35.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ __name23(function DialogContentImpl2(props, forwardedRef) {
    const {
      __scopeDialog,
      trapFocus,
      onOpenAutoFocus,
      onCloseAutoFocus,
      "aria-describedby": ariaDescribedby,
      children,
      ...contentProps
    } = props;
    const context = useDialogContext(CONTENT_NAME4, __scopeDialog);
    useFocusGuards();
    return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(FocusScopeBranchProvider, { registry: context.branchRegistry, children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
      FocusScope,
      {
        asChild: true,
        loop: true,
        trapped: trapFocus,
        branches: context.branchNodes,
        onMountAutoFocus: onOpenAutoFocus,
        onUnmountAutoFocus: onCloseAutoFocus,
        children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
          DismissableLayer,
          {
            role: "dialog",
            id: context.contentId,
            "aria-labelledby": context.titlePresent ? context.titleId : void 0,
            "aria-describedby": context.descriptionPresent ? concatAriaDescribedby2(ariaDescribedby, context.descriptionId) : ariaDescribedby,
            "data-state": getState(context.open),
            ...contentProps,
            ref: forwardedRef,
            deferPointerDownOutside: true,
            onDismiss: () => context.onOpenChange(false),
            children
          }
        )
      }
    ) });
  }, "DialogContentImpl")
);
var DialogTitle = /* @__PURE__ */ React35.forwardRef(
  /* @__PURE__ */ __name23(function DialogTitle2(props, forwardedRef) {
    const { __scopeDialog, ...titleProps } = props;
    const context = useDialogContext("DialogTitle", __scopeDialog);
    const { setTitleCount } = context;
    useLayoutEffect2(() => {
      setTitleCount((count3) => count3 + 1);
      return () => setTitleCount((count3) => count3 - 1);
    }, [setTitleCount]);
    return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(Primitive.h2, { id: context.titleId, ...titleProps, ref: forwardedRef });
  }, "DialogTitle")
);
var DialogDescription = /* @__PURE__ */ React35.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ __name23(function DialogDescription2(props, forwardedRef) {
    const { __scopeDialog, ...descriptionProps } = props;
    const context = useDialogContext("DialogDescription", __scopeDialog);
    const { setDescriptionCount } = context;
    useLayoutEffect2(() => {
      setDescriptionCount((count3) => count3 + 1);
      return () => setDescriptionCount((count3) => count3 - 1);
    }, [setDescriptionCount]);
    return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(Primitive.p, { id: context.descriptionId, ...descriptionProps, ref: forwardedRef });
  }, "DialogDescription")
);
var CLOSE_NAME = "DialogClose";
var DialogClose = /* @__PURE__ */ React35.forwardRef(
  /* @__PURE__ */ __name23(function DialogClose2(props, forwardedRef) {
    const { __scopeDialog, ...closeProps } = props;
    const context = useDialogContext(CLOSE_NAME, __scopeDialog);
    return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
      Primitive.button,
      {
        type: "button",
        ...closeProps,
        ref: forwardedRef,
        onClick: composeEventHandlers(props.onClick, () => context.onOpenChange(false))
      }
    );
  }, "DialogClose")
);
function concatAriaDescribedby2(...values) {
  const ids = /* @__PURE__ */ new Set();
  for (const value of values) {
    if (typeof value !== "string") continue;
    for (const id of String(value).trim().split(/\s+/)) {
      if (id) ids.add(id);
    }
  }
  return ids.size > 0 ? Array.from(ids).join(" ") : void 0;
}
__name23(concatAriaDescribedby2, "concatAriaDescribedby");
function getState(open) {
  return open ? "open" : "closed";
}
__name23(getState, "getState");

// src/ui.tsx
var import_jsx_runtime14 = __toESM(require_jsx_runtime(), 1);
function IconButton({ label, children, onClick, className = "", ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("button", { type: "button", className: `icon-button ${className}`, "aria-label": label, "data-tooltip": label, onClick, ...props, children });
}
function Modal({ open, title, children, onClose, actions, className = "" }) {
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(Dialog, { open, onOpenChange: (next) => !next && onClose(), children: /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(DialogPortal, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(DialogOverlay, { className: "dialog-overlay" }),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(DialogContent, { className: `confirm-dialog ${className}`, "aria-describedby": void 0, children: [
      /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(DialogTitle, { children: title }),
      children,
      actions && /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: "dialog-actions", children: actions }),
      /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(DialogClose, { className: "dialog-close", "aria-label": "\u95DC\u9589", children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(X, { size: 20 }) })
    ] })
  ] }) });
}
var deletedAvatar = "./assets/deleted-account-avatar.png";
function Avatar({ person, deleted = false, className = "" }) {
  const [failedSource, setFailedSource] = (0, import_react5.useState)(null);
  const defaultAvatar = avatarSource({ kind: "default", defaultIndex: person.avatarPreset ?? 0 });
  const source = deleted ? deletedAvatar : person.avatar && failedSource !== person.avatar ? person.avatar : defaultAvatar;
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("img", { className: `avatar ${className}`, src: source, alt: "", "data-avatar-kind": deleted ? "deleted" : source === defaultAvatar ? "default" : "uploaded", onError: source === person.avatar ? () => setFailedSource(person.avatar) : void 0 });
}
function MessageActions({ id, failed, onRetry, onDeleteFailed, onDelete, hasAttachments = false, hasText = false, onTextOnly }) {
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: `message-actions ${failed ? "is-failed" : ""}`, children: /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(DropdownMenu, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(DropdownMenuTrigger, { className: "message-action-trigger", "data-message-action": id, "aria-label": failed ? "\u5931\u6557\u8A0A\u606F\u9078\u9805" : "\u8A0A\u606F\u9078\u9805", children: failed ? /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(CircleAlert, { size: 18 }) : /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(Ellipsis, { size: 18 }) }),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(DropdownMenuPortal, { children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(DropdownMenuContent, { className: "message-menu", side: "top", align: "start", sideOffset: 4, collisionPadding: 12, children: failed ? /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(import_jsx_runtime14.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(DropdownMenuItem, { onSelect: onRetry, children: [
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(RotateCcw, { size: 16 }),
        "\u91CD\u65B0\u50B3\u9001"
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(DropdownMenuItem, { className: "menu-item-danger", onSelect: onDeleteFailed, children: [
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(Trash2, { size: 16 }),
        "\u522A\u9664"
      ] })
    ] }) : /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(DropdownMenuItem, { className: "menu-item-danger", onSelect: onDelete, children: [
      /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(Trash2, { size: 16 }),
      "\u522A\u9664"
    ] }) }) })
  ] }) });
}
function DeleteConfirmation({ open, onClose, onConfirm }) {
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(Dialog, { open, onOpenChange: (next) => {
    if (!next) onClose();
  }, children: /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(DialogPortal, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(DialogOverlay, { className: "dialog-overlay" }),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(DialogContent, { className: "confirm-dialog", children: [
      /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(DialogTitle, { children: "\u522A\u9664\u9019\u5247\u8A0A\u606F\uFF1F" }),
      /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(DialogDescription, { children: "\u522A\u9664\u5F8C\uFF0C\u96D9\u65B9\u5C07\u7121\u6CD5\u67E5\u770B\u539F\u672C\u7684\u5167\u5BB9\u3002" }),
      /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: "dialog-actions", children: [
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(DialogClose, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("button", { className: "outline-button", children: "\u53D6\u6D88" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("button", { className: "primary-button danger-button", onClick: onConfirm, children: "\u522A\u9664\u8A0A\u606F" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(DialogClose, { className: "dialog-close", "aria-label": "\u95DC\u9589", children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(X, { size: 20 }) })
    ] })
  ] }) });
}

// src/Header.tsx
var import_react6 = __toESM(require_react(), 1);

// src/booking-records.ts
var bookingSeeds = [{ id: "u1", person: "zahra", tab: "upcoming", date: "2026/11/12", time: "19:00\u201319:30" }, { id: "u2", person: "emily", tab: "upcoming", date: "2026/11/15", time: "20:00\u201320:30" }, { id: "p1", person: "sarah", tab: "pending", date: "2026/11/20", time: "19:00\u201319:30" }, { id: "h1", person: "zahra", tab: "history", date: "2026/10/28", time: "19:00\u201319:30", feedback: { rating: 8, comment: "\u7D66\u4E86\u6211\u5F88\u5177\u9AD4\u7684\u4F5C\u54C1\u96C6\u5EFA\u8B70\uFF0C\u8B93\u6211\u66F4\u6E05\u695A\u4E0B\u4E00\u6B65\u7684\u6E96\u5099\u65B9\u5411\u3002" } }, { id: "h2", person: "emily", tab: "history", date: "2026/10/26", time: "20:00\u201320:30" }, { id: "h3", person: "alex", tab: "history", date: "2026/10/20", time: "19:00\u201319:30", status: "Cancelled" }, { id: "h4", person: "sarah", tab: "history", date: "2026/10/19", time: "20:00\u201320:30", status: "\u5DF2\u5A49\u62D2" }];

// src/model.ts
var asset = (name) => `./assets/753-${name}`;
var basePeople = [
  { id: "zahra", name: "Zahra Mirzakhani", avatar: asset("zahra.png"), role: "Senior UX Designer" },
  { id: "emily", name: "Emily Chen", avatar: asset("emily.png"), role: "UI/UX \u8A2D\u8A08\u5E2B" },
  { id: "alex", name: "Alex Wang", avatar: asset("alex.png"), role: "\u5F8C\u7AEF\u5DE5\u7A0B\u5E2B" },
  { id: "sarah", name: "Sarah Lin", avatar: asset("sarah.png"), role: "Product Designer" }
];
var suggestions = ["\u4F60\u597D\uFF01\u6211\u6B63\u5728\u63A2\u7D22\u8077\u6DAF\u65B9\u5411\uFF0C\u60F3\u8ACB\u6559\u4F60\u5728\u9019\u500B\u9818\u57DF\u7684\u7D93\u9A57\u8207\u5EFA\u8B70\u3002", "\u4F60\u597D\uFF01\u9810\u7D04\u524D\u60F3\u5148\u78BA\u8A8D\uFF0C\u6211\u76EE\u524D\u9047\u5230\u7684\u554F\u984C\u662F\u5426\u9069\u5408\u5411\u4F60\u8ACB\u6559\uFF1F", "\u4F60\u597D\uFF01\u60F3\u8ACB\u554F\u4F60\u8FD1\u671F\u662F\u5426\u6709\u958B\u653E\u7684\u8AEE\u8A62\u6642\u6BB5\uFF1F"];
var today = /* @__PURE__ */ new Date();
today.setHours(14, 40, 0, 0);
var BASE_TIME = today.getTime();
var now = (s) => Math.max(Date.now(), BASE_TIME) + s.offset;
var days = (count3, hour = 14, minute = 32) => {
  const d = new Date(BASE_TIME);
  d.setDate(d.getDate() - count3);
  d.setHours(hour, minute, 0, 0);
  return d.getTime();
};
var msg = (id, own, text, at2, extra = {}) => ({ id, own, text, at: at2, status: "sent", ...own ? { read: true } : {}, ...extra });
var emptyThread = () => ({ messages: [], draft: "", files: [], openedAt: Date.now(), unread: false });
var initialThreads = () => ({
  zahra: { ...emptyThread(), messages: [msg("z1", true, "Zahra \u4F60\u597D\uFF01\u6211\u6700\u8FD1\u60F3\u5F9E\u5E73\u9762\u8A2D\u8A08\u8F49\u5411 UX\uFF0C\u60F3\u8ACB\u6559\u4F60\u4F5C\u54C1\u96C6\u7684\u6E96\u5099\u65B9\u5411\u3002", days(0, 14, 26)), msg("z2", false, "\u4F60\u597D\uFF0C\u5F88\u9AD8\u8208\u8A8D\u8B58\u4F60 \u{1F60A}\n\u4F60\u76EE\u524D\u6709\u5728\u9032\u884C\u7684 UX \u5C08\u6848\uFF0C\u6216\u662F\u60F3\u4E00\u8D77\u8A0E\u8AD6\u7684\u4F5C\u54C1\u55CE\uFF1F", days(0, 14, 28)), msg("z3", true, "\u6709\u7684\uFF0C\u6211\u6B63\u5728\u505A\u4E00\u500B\u65C5\u904A App \u7684 redesign\uFF0C\u60F3\u628A\u7814\u7A76\u904E\u7A0B\u548C\u8A2D\u8A08\u6C7A\u7B56\u8AAA\u5F97\u66F4\u6E05\u695A\u3002", days(0, 14, 30)), msg("z4", false, "\u7576\u7136\u53EF\u4EE5\uFF01\u6211\u5011\u53EF\u4EE5\u5148\u5F9E\u4F60\u7684\u4F5C\u54C1\u96C6\u958B\u59CB\u3002", days(0)), msg("z5", false, "\u6703\u8AC7\u6642\u5E36\u8457\u4F60\u6700\u60F3\u8A0E\u8AD6\u7684\u5C08\u6848\u5C31\u597D\uFF0C\u6211\u5011\u4E00\u8D77\u6574\u7406\u51FA\u4E0B\u4E00\u6B65\u7684\u65B9\u5411\u3002", days(0))] },
  emily: { ...emptyThread(), unread: true, messages: [msg("e1", true, "\u4F60\u597D\uFF01\u60F3\u8ACB\u6559\u4F60 UX \u9762\u8A66\u7684\u6E96\u5099\u65B9\u5411\u3002", days(0, 10, 56)), msg("e2", false, "\u6211\u6574\u7406\u4E86\u5E7E\u500B\u65B9\u5411\uFF0C\u53EF\u4EE5\u4E00\u8D77\u8A0E\u8AD6\u770B\u770B\u3002", days(0, 11, 8))] },
  alex: { ...emptyThread(), messages: [msg("a1", false, "\u53EF\u4EE5\u5148\u6E96\u5099\u4E00\u500B\u4F60\u6700\u719F\u6089\u7684\u5C08\u6848\uFF0C\u6211\u5011\u4E00\u8D77\u8A0E\u8AD6\u67B6\u69CB\u548C\u6280\u8853\u9078\u64C7\u3002", days(2, 16, 20)), msg("a2", true, "\u8B1D\u8B1D\u4F60\u7684\u5EFA\u8B70\uFF0C\u4E0B\u6B21\u6703\u8AC7\u898B\uFF01", days(2, 16, 23))] },
  sarah: { ...emptyThread(), messages: [msg("s1", false, "\u5F88\u958B\u5FC3\u9019\u6B21\u7684\u4EA4\u6D41\u5C0D\u4F60\u6709\u5E6B\u52A9 \u{1F60A}", days(5, 19, 6))] }
});
function initialState(scene2) {
  const profileScenes = ["favorite-login", "favorite-self", "profile-v2", "profile", "guest", "login-failure", "self-profile", "paused", "open-failure", "missing-profile", "mentor-profile", "role-switch", "mobile-entry", "profile-no-reviews", "reservation-message", "reservation-empty", "reservation-existing", "reservation-failure", "reservation-message-failure"];
  const booking = scene2.startsWith("booking-") || scene2 === "feedback-unlisted";
  const s = { threads: initialThreads(), people: basePeople.map((p) => ({ ...p })), route: { view: profileScenes.includes(scene2) ? "profile" : booking ? "bookings" : "chat", active: ["list", "empty", "list-failure", "search", "unread", "unread-99", "notifications", "empty-unread", "search-short", "search-content"].includes(scene2) ? null : ["invalid-link", "forbidden-link"].includes(scene2) ? "invalid" : "zahra", origin: booking ? "bookings" : "profile" }, member: !["guest", "login-failure", "favorite-login", "favorite-self"].includes(scene2), role: ["self-profile", "mentor-profile", "role-switch"].includes(scene2) || scene2.startsWith("booking-mentor") ? "mentor" : "mentee", search: "", filter: scene2.startsWith("unread") || scene2 === "empty-unread" ? "unread" : "all", scroll: 0, offset: 0, listError: scene2 === "list-failure", profileMode: scene2 === "self-profile" ? "self" : scene2 === "paused" ? "paused" : scene2 === "missing-profile" ? "missing" : "normal", bookingTab: scene2.includes("history") || scene2 === "feedback-unlisted" ? "history" : scene2.includes("pending") ? "pending" : "upcoming" };
  if (profileScenes.includes(scene2) && scene2 !== "reservation-existing" || ["new", "first-failure", "drafts"].includes(scene2)) s.threads.zahra = emptyThread();
  if (scene2 === "guest") s.route = { view: "login", active: null, origin: "profile" };
  if (scene2 === "search") {
    s.filter = "unread";
    s.search = "Alex";
  }
  if (scene2 === "sending") {
    const text = "\u8B1D\u8B1D\uFF01\u6211\u6703\u5148\u6574\u7406\u597D\u4F5C\u54C1\u96C6\u3002";
    s.threads.zahra.draft = text;
    s.threads.zahra.messages.push(msg("sending-preview", true, text, now(s), { status: "sending", read: false }));
  }
  if (scene2 === "search-content") {
    s.filter = "all";
    s.search = "\u7814\u7A76\u904E\u7A0B";
  }
  if (scene2 === "search-short") s.search = "\u9673";
  if (scene2 === "search-file") {
    s.route.active = null;
    s.search = "\u5C65\u6B77";
    s.threads.zahra.messages.push(msg("search-file-first", true, "\u9019\u662F\u6211\u7684\u7533\u8ACB\u8CC7\u6599\u3002", now(s) - 6e4, { files: [sampleDocument] }), msg("search-file-later", false, "\u6536\u5230\u4F60\u7684\u5C65\u6B77\uFF0C\u6211\u5011\u6703\u8AC7\u6642\u4E00\u8D77\u770B\u3002", now(s) - 3e4));
  }
  if (scene2 === "attachment-limit") s.threads.zahra.files = Array.from({ length: 10 }, (_, i) => ({ ...sampleDocument, name: `\u4F5C\u54C1\u8CC7\u6599 ${i + 1}.txt` }));
  if (scene2 === "history-loading") s.threads.zahra.messages = Array.from({ length: 100 }, (_, i) => msg("history-" + i, i % 3 !== 0, ["\u9019\u662F\u6211\u6574\u7406\u7684\u4F5C\u54C1\u96C6\uFF0C\u60F3\u8ACB\u4F60\u770B\u770B\u5167\u5BB9\u7684\u5B89\u6392\u3002", "\u53EF\u4EE5\u5148\u5F9E\u554F\u984C\u5B9A\u7FA9\u548C\u7814\u7A76\u7D50\u679C\u958B\u59CB\u8AAA\u660E\u3002", "\u8B1D\u8B1D\u4F60\u7684\u5EFA\u8B70\uFF0C\u6211\u6703\u628A\u8A2D\u8A08\u6C7A\u7B56\u88DC\u5F97\u66F4\u5B8C\u6574\u3002"][i % 3], days(5) + i * 6e4));
  if (scene2 === "empty") s.threads = {};
  if (booking && scene2.endsWith("-new")) {
    const targets = scene2.includes("history") ? Object.keys(s.threads) : scene2.includes("pending") ? ["sarah"] : ["zahra"];
    targets.forEach((id) => s.threads[id] = emptyThread());
  }
  if (s.role === "mentor") s.people = s.people.map((p) => p.id === "emily" ? { ...p, avatar: "", avatarPreset: 0 } : p);
  if (scene2 === "empty-unread") Object.values(s.threads).forEach((t) => t.unread = false);
  if (scene2 === "failure" || scene2 === "attachment-failure" || scene2 === "first-failure") {
    s.threads.zahra.messages.push(msg("failed", true, "\u8B1D\u8B1D\uFF01\u6211\u6703\u5148\u6574\u7406\u597D\u5C08\u6848\uFF0C\u671F\u5F85\u548C\u4F60\u4EA4\u6D41\u3002", now(s), { status: "failed", read: false, reason: scene2 === "attachment-failure" ? "\u9644\u4EF6\u4E0A\u50B3\u5931\u6557\uFF0C\u6574\u5247\u8A0A\u606F\u5C1A\u672A\u9001\u51FA\u3002" : "\u7DB2\u8DEF\u9023\u7DDA\u4E2D\u65B7\uFF0C\u8A0A\u606F\u672A\u9001\u51FA\u3002", files: scene2 === "attachment-failure" ? [sampleDocument] : [] }));
  }
  if (scene2.startsWith("deleted-")) s.people[0] = { ...s.people[0], name: "\u5DF2\u522A\u9664\u5E33\u865F", avatar: "", deleted: scene2 === "deleted-mentee" ? "mentee" : "mentor" };
  if (scene2 === "drafts") {
    s.threads.zahra.draft = "\u4F60\u597D\uFF01\u9810\u7D04\u524D\u60F3\u5148\u78BA\u8A8D\u4F5C\u54C1\u96C6\u7684\u6E96\u5099\u65B9\u5411\u3002";
    s.threads.zahra.files = [sampleDocument];
    s.threads.emily.draft = "\u8B1D\u8B1D\u4F60\u7684\u5EFA\u8B70\uFF0C\u6211\u60F3\u518D\u8ACB\u6559\u2026";
  }
  if (/^attachments-(1|3|10)$/.test(scene2)) {
    const count3 = Number(scene2.split("-")[1]);
    s.threads.zahra.messages.push(msg("attachment-example", true, "\u9019\u662F\u6211\u6574\u7406\u7684\u4F5C\u54C1\u8CC7\u6599\uFF0C\u60F3\u5728\u6703\u8AC7\u4E2D\u4E00\u8D77\u8A0E\u8AD6\u3002", now(s) - 6e4, { files: Array.from({ length: count3 }, (_, i) => i === 0 ? sampleImage : { ...sampleDocument, name: `\u4F5C\u54C1\u8CC7\u6599 ${i + 1}.txt` }), read: false }));
  }
  if (scene2 === "attachments") {
    s.threads.zahra.messages.push(msg("attachment", true, "\u9019\u662F\u6211\u7684\u4F5C\u54C1\u96C6\u8207\u5C65\u6B77\u3002", now(s) - 6e4, { files: [sampleImage, sampleDocument], read: false }));
  }
  if (scene2 === "previews") {
    s.threads.zahra.messages = [msg("p1", false, "", now(s) - 1e3, { files: [sampleImage] })];
    s.threads.emily.messages = [msg("p2", true, "", now(s) - 1e4, { files: [sampleDocument] })];
    s.threads.alex.messages = [msg("p3", true, "", now(s) - 2e4, { files: [sampleImage, sampleDocument] })];
    s.threads.sarah.messages = [msg("p4", true, "", new Date(today.getFullYear() - 1, 10, 2, 19, 6).getTime(), { removed: true })];
    s.route.active = null;
  }
  if (scene2 === "unread-99") {
    for (let i = 1; i <= 100; i++) {
      const id = "extra-" + i;
      s.people.push({ id, name: "\u793A\u7BC4\u5B78\u54E1 " + String(i).padStart(3, "0"), avatar: "", role: "\u5B78\u54E1" });
      s.threads[id] = { ...emptyThread(), unread: true, messages: [msg("u" + i, false, "\u60F3\u8ACB\u6559\u4F60\u95DC\u65BC\u8077\u6DAF\u767C\u5C55\u7684\u5EFA\u8B70\u3002", now(s) - i * 1e3)] };
    }
  }
  if (scene2 === "notifications") s.threads.zahra.unread = true;
  return s;
}
var sampleImage = { name: "\u4F5C\u54C1\u96C6\u5C01\u9762.png", url: "./assets/sample-portfolio.png", image: true, type: "PNG" };
var sampleDocument = { name: "\u5C65\u6B77.txt", url: "./assets/sample-resume.txt", image: false, type: "TXT" };
var success = (t) => t?.messages.filter((m) => m.status === "sent") || [];
var latest = (t) => success(t).reduce((last, m) => !last || m.at >= last.at ? m : last, void 0);
var isEstablished = (t) => success(t).length > 0;
function preview(t) {
  if (t.draft.trim() || t.files.length) return "\u8349\u7A3F\uFF1A" + (t.draft.trim() || "[\u9644\u4EF6]");
  const m = latest(t);
  if (!m) return "\u8349\u7A3F\uFF1A\u8A0A\u606F\u672A\u9001\u51FA";
  if (m.removed) return "\u6B64\u8A0A\u606F\u5DF2\u522A\u9664";
  return (m.own ? "\u4F60\uFF1A" : "") + (m.text || (m.files?.length === 1 ? m.files[0].image ? "[\u5716\u7247]" : m.files[0].name : "[\u591A\u500B\u9644\u4EF6]"));
}
function listTime(at2, reference = Date.now()) {
  const d = new Date(at2), n = new Date(reference);
  return d.toDateString() === n.toDateString() ? d.toLocaleTimeString("zh-TW", { hour: "2-digit", minute: "2-digit", hour12: false }) : `${d.getFullYear() !== n.getFullYear() ? d.getFullYear() + "/" : ""}${d.getMonth() + 1}/${d.getDate()}`;
}
var MAX_ATTACHMENTS = 10;
var HISTORY_PAGE_SIZE = 20;
function ownsReservation(s, personId, bookingId) {
  return [...bookingSeeds, ...s.reservations || []].some((b) => b.id === bookingId && b.person === personId);
}
function authorizeReservationContact(s, personId, bookingId) {
  const person = s.people.find((p) => p.id === personId);
  if (!s.member || s.route.view !== "bookings" || !person || person.deleted || !ownsReservation(s, personId, bookingId)) return s;
  return { ...s, reservationChatAccess: { ...s.reservationChatAccess, [personId]: bookingId } };
}
var canMessage = (s, id) => {
  const person = s.people.find((p) => p.id === id), grant = s.reservationChatAccess?.[id];
  return s.member && !!person && !person.deleted && (s.role === "mentee" || isEstablished(s.threads[id]) || !!grant && ownsReservation(s, id, grant));
};
var searchQuery = (s) => s.search.trim().toLocaleLowerCase();
var isSearching = (s) => Array.from(searchQuery(s)).length >= 2;
function matchedMessages(s, id) {
  const q = searchQuery(s);
  return isSearching(s) ? success(s.threads[id]).filter((m) => !m.removed && (m.text.toLocaleLowerCase().includes(q) || m.files?.some((f) => f.name.toLocaleLowerCase().includes(q)))).sort((a, b) => a.at - b.at) : [];
}
function matchedMessage(s, id) {
  return matchedMessages(s, id)[0];
}
function matchPreview(s, m) {
  const q = searchQuery(s), text = m.text.toLocaleLowerCase().includes(q) ? m.text : m.files?.find((f) => f.name.toLocaleLowerCase().includes(q))?.name || m.text;
  const start = Math.max(0, text.toLocaleLowerCase().indexOf(q) - 16);
  return (m.own ? "\u4F60\uFF1A" : "") + (start ? "\u2026" : "") + text.slice(start);
}
function listedPeople(s) {
  const query = searchQuery(s);
  return s.people.filter((p) => {
    const t = s.threads[p.id];
    if (!t) return false;
    const established = isEstablished(t);
    if (isSearching(s)) return established && (p.name.toLocaleLowerCase().includes(query) || !!matchedMessage(s, p.id));
    if (s.filter === "unread") return established && t.unread;
    return established || !!t.draft.trim() || t.files.length > 0 || t.messages.length > 0;
  }).sort((a, b) => {
    const score = (p) => latest(s.threads[p.id])?.at || s.threads[p.id].openedAt;
    return score(b) - score(a);
  });
}
function confirmReservation(s, reservation, note, messageFailure) {
  if (!s.member || s.role !== "mentee" || s.profileMode !== "normal" || !s.people.some((p) => p.id === reservation.person && !p.deleted) || s.reservations?.some((b) => b.id === reservation.id)) return s;
  const hasNote = !!note.trim(), messageId = hasNote ? "reservation-" + reservation.id : void 0;
  const next = { ...s, reservations: [...s.reservations || [], { ...reservation, messageId }] };
  if (!hasNote) return next;
  const t = s.threads[reservation.person] || emptyThread();
  const message = { id: messageId, own: true, text: note, at: now(s), status: messageFailure ? "failed" : "sent", read: false, reason: messageFailure };
  return { ...next, search: "", filter: "all", scroll: 0, threads: { ...s.threads, [reservation.person]: { ...t, messages: [...t.messages, message], unread: false } }, route: { view: "chat", active: reservation.person, origin: "profile" } };
}
function readThread(s, id) {
  return { ...s, threads: { ...s.threads, [id]: { ...s.threads[id] || emptyThread(), unread: false } } };
}
function leaveChat(s) {
  return { ...s, search: "", filter: "all", scroll: 0, reservationChatAccess: {}, threads: Object.fromEntries(Object.entries(s.threads).filter(([, t]) => isEstablished(t)).map(([id, t]) => [id, { ...t, draft: "", files: [] }])) };
}
function receive(s, id, failed = false) {
  if (failed) return s;
  const t = s.threads[id] || emptyThread(), at2 = now(s), visible = s.route.view === "chat" && s.route.active === id;
  return { ...s, threads: { ...s.threads, [id]: { ...t, messages: [...t.messages, msg(crypto.randomUUID(), false, "\u6536\u5230\uFF0C\u8B1D\u8B1D\uFF01\u6211\u5011\u53EF\u4EE5\u5728\u6703\u8AC7\u4E2D\u7E7C\u7E8C\u8A0E\u8AD6\u3002", at2)], unread: !visible } } };
}

// src/Header.tsx
var import_jsx_runtime15 = __toESM(require_jsx_runtime(), 1);
function Header({ state: s, unread, noticeOpen, setNoticeOpen, onMessages, onProfile, onFind, onLogin, onRole, roleMenuOpen = false }) {
  const panel = (0, import_react6.useRef)(null);
  (0, import_react6.useEffect)(() => {
    if (!noticeOpen) return;
    const close = (e) => {
      if (e.type === "keydown" ? e.key === "Escape" : !panel.current?.contains(e.target)) setNoticeOpen(false);
    };
    document.addEventListener("pointerdown", close);
    document.addEventListener("keydown", close);
    return () => {
      document.removeEventListener("pointerdown", close);
      document.removeEventListener("keydown", close);
    };
  }, [noticeOpen, setNoticeOpen]);
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("header", { className: "site-header", children: [
    /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("button", { className: "logo", onClick: onProfile, "aria-label": "X-Talent", children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("img", { src: asset("logo.svg"), alt: "X-Talent" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("nav", { "aria-label": "\u4E3B\u9078\u55AE", children: [
      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("button", { onClick: onFind, children: "\u5C0B\u627E\u5C0E\u5E2B" }),
      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("span", { children: "\u6210\u70BA\u5C0E\u5E2B" }),
      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("span", { children: "\u95DC\u65BC X-Talent" }),
      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("span", { children: "\u63D0\u4F9B\u56DE\u994B" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { className: "header-actions", children: s.member ? /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(import_jsx_runtime15.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(IconButton, { label: "\u8A0A\u606F\u4E2D\u5FC3", className: `global-message ${s.route.view === "chat" ? "active" : ""}`, "aria-current": s.route.view === "chat" ? "page" : void 0, onClick: onMessages, children: [
        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(MessageSquare, { size: 20 }),
        unread > 0 && /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("span", { className: "unread-count", children: unread > 99 ? "99+" : unread })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { className: "notification-anchor", ref: panel, children: [
        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(IconButton, { label: "\u901A\u77E5", className: `notification-button ${noticeOpen ? "active" : ""}`, "aria-expanded": noticeOpen, onClick: () => setNoticeOpen(!noticeOpen), children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Bell, { size: 20 }) }),
        noticeOpen && /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("section", { className: "notification-popover", "aria-label": "\u901A\u77E5\u7D00\u9304", children: [
          /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("h2", { children: "\u901A\u77E5" }),
          /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { className: "notification-empty", children: [
            /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Bell, { size: 36 }),
            /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("p", { children: "\u5C1A\u7121\u65B0\u901A\u77E5" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(DropdownMenu, { defaultOpen: roleMenuOpen, children: [
        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("button", { className: "user-button", "aria-label": "\u5E33\u865F\u9078\u55AE", children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("img", { src: asset("user.png"), alt: "" }) }) }),
        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(DropdownMenuPortal, { children: /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(DropdownMenuContent, { className: "message-menu role-menu", align: "end", sideOffset: 10, collisionPadding: 16, children: [
          /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(DropdownMenuLabel, { className: "role-label", children: [
            "\u76EE\u524D\u8EAB\u5206\uFF1A",
            s.role === "mentor" ? "\u5C0E\u5E2B" : "\u5B78\u54E1"
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(DropdownMenuSeparator, {}),
          /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(DropdownMenuRadioGroup, { value: s.role, onValueChange: onRole, children: [["mentee", "\u5B78\u54E1\uFF08Mentee\uFF09"], ["mentor", "\u5C0E\u5E2B\uFF08Mentor\uFF09"]].map(([value, label]) => /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(DropdownMenuRadioItem, { value, children: [
            /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("span", { className: "role-check", children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(DropdownMenuItemIndicator, { children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Check, { size: 16 }) }) }),
            "\u5207\u63DB\u70BA",
            label
          ] }, value)) })
        ] }) })
      ] })
    ] }) : /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(import_jsx_runtime15.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("button", { className: "outline-button", onClick: onLogin, children: "\u767B\u5165" }),
      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("button", { className: "primary-button", "aria-disabled": "true", children: "\u8A3B\u518A" })
    ] }) })
  ] });
}
function ChatFab({ unread, onClick }) {
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("button", { className: "chat-fab", "aria-label": "\u7AD9\u5167\u804A\u804A", onClick, children: [
    /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(MessageSquare, { size: 25, fill: "currentColor" }),
    unread > 0 && /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("span", { className: "unread-count", children: unread > 99 ? "99+" : unread })
  ] });
}

// src/Profile.tsx
var import_react9 = __toESM(require_react(), 1);

// src/MentorReadView.tsx
var import_react8 = __toESM(require_react(), 1);

// src/LevelVisual.tsx
var import_react7 = __toESM(require_react(), 1);
var import_jsx_runtime16 = __toESM(require_jsx_runtime(), 1);
var clamp2 = (level) => Math.min(5, Math.max(1, Math.round(level) || 1));
var LEVEL_HOURS = [0, 50, 100, 150, 200];
var rounded = (pts, r) => pts.map((p, i) => {
  const a = pts[(i - 1 + pts.length) % pts.length], b = pts[(i + 1) % pts.length], v1 = [a[0] - p[0], a[1] - p[1]], v2 = [b[0] - p[0], b[1] - p[1]], l1 = Math.hypot(v1[0], v1[1]), l2 = Math.hypot(v2[0], v2[1]), k = Math.min(r, l1 / 2, l2 / 2), f = (n) => n.toFixed(2);
  return (i ? "L" : "M") + f(p[0] + v1[0] / l1 * k) + " " + f(p[1] + v1[1] / l1 * k) + "Q" + f(p[0]) + " " + f(p[1]) + " " + f(p[0] + v2[0] / l2 * k) + " " + f(p[1] + v2[1] / l2 * k);
}).join("") + "Z";
var ring = (n, outer, inner = outer, turn = -90, cx = 60, cy = 56) => Array.from({ length: n }, (_, i) => {
  const a = (turn + i * 360 / n) * Math.PI / 180, r = i % 2 ? inner : outer;
  return [cx + r * Math.cos(a), cy + r * Math.sin(a)];
});
var star = rounded(ring(16, 48, 39), 7);
var tiers = [
  { shape: rounded(ring(40, 44), 0), face: ["#fbfcfd", "#cdd6de"], side: "#9eabb7", plate: ["#dfe5ea", "#bcc7d1"], gem: ["#ffffff", "#c9f4f0", "#6bd9d4", "#27b3b6"], scale: 0.86, twinkles: 0 },
  { shape: rounded(ring(6, 48), 11), face: ["#9df3ea", "#1cbcc0"], side: "#10868b", plate: ["#34cdd0", "#149ea4"], gem: ["#ffffff", "#e3fcfa", "#b4f0ed", "#7fdedc"], scale: 1, twinkles: 0 },
  { shape: rounded([[22, 16], [98, 16], [98, 58], [60, 98], [22, 58]], 13), face: ["#a9d0ff", "#2b7af0"], side: "#1b54b8", plate: ["#4a93f8", "#2163d6"], gem: ["#ffffff", "#e2efff", "#b7d6ff", "#86b8fb"], scale: 1.06, twinkles: 1 },
  { shape: star, face: ["#d2c3ff", "#7653e6"], side: "#4f34b4", plate: ["#8f70f3", "#613fd0"], gem: ["#ffffff", "#f3ebff", "#dccaff", "#bea2fb"], scale: 1.1, twinkles: 2 },
  { shape: star, back: rounded(ring(16, 50, 40, -67.5), 7), face: ["#fff0b5", "#f6ab0e"], side: "#c27a03", plate: ["#fcc537", "#e2950a"], gem: ["#f4eaff", "#cfb2ff", "#9c6cf2", "#6f41d6"], scale: 1.16, twinkles: 3 }
];
var twinkle = (x, y, s) => `M${x} ${y - s}Q${x} ${y} ${x + s} ${y}Q${x} ${y} ${x} ${y + s}Q${x} ${y} ${x - s} ${y}Q${x} ${y} ${x} ${y - s}Z`;
var twinkleSpots = [[93, 22, 7], [24, 30, 4.5], [100, 74, 3.5]];
function LevelEmblem({ level = 1, className = "" }) {
  const n = clamp2(level), t = tiers[n - 1], id = "xl" + (0, import_react7.useId)().replace(/[^a-zA-Z0-9]/g, ""), [g0, g1, g2, g3] = t.gem;
  return /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("svg", { className: "xl-emblem " + className, viewBox: "0 0 120 120", "aria-hidden": "true", focusable: "false", children: [
    /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("defs", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("linearGradient", { id: id + "f", x1: ".2", y1: "0", x2: ".8", y2: "1", children: [
        /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("stop", { offset: "0", stopColor: t.face[0] }),
        /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("stop", { offset: "1", stopColor: t.face[1] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("linearGradient", { id: id + "p", x1: ".2", y1: "0", x2: ".8", y2: "1", children: [
        /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("stop", { offset: "0", stopColor: t.plate[0] }),
        /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("stop", { offset: "1", stopColor: t.plate[1] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("linearGradient", { id: id + "s", x1: "0", y1: "0", x2: "1", y2: "1", children: [
        /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("stop", { offset: "0", stopColor: "#fff", stopOpacity: ".7" }),
        /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("stop", { offset: ".55", stopColor: "#fff", stopOpacity: "0" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("clipPath", { id: id + "c", children: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("path", { d: t.shape }) })
    ] }),
    t.back && /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)(import_jsx_runtime16.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("path", { d: t.back, transform: "translate(0 7)", fill: t.side, opacity: ".85" }),
      /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("path", { d: t.back, fill: t.plate[1] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("path", { d: t.shape, transform: "translate(0 7)", fill: t.side }),
    /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("path", { d: t.shape, fill: `url(#${id}f)` }),
    /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("g", { clipPath: `url(#${id}c)`, children: [
      /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("ellipse", { cx: "34", cy: "20", rx: "52", ry: "30", transform: "rotate(-24 34 20)", fill: "#fff", opacity: ".3" }),
      /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("path", { d: t.shape, fill: "none", stroke: `url(#${id}s)`, strokeWidth: "4" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("g", { transform: "translate(60 56) scale(.7) translate(-60 -56)", children: [
      /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("path", { d: t.shape, transform: "translate(0 2.5)", fill: "#fff", opacity: ".45" }),
      /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("path", { d: t.shape, fill: `url(#${id}p)` })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("g", { transform: `translate(60 57) scale(${t.scale}) translate(-60 -58)`, children: [
      /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("ellipse", { cx: "60", cy: "78", rx: "12", ry: "2.6", fill: "#000", opacity: ".14" }),
      /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("path", { d: "M49.5 44H70.5L78 53.5H42Z", fill: g1 }),
      /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("path", { d: "M42 53.5H78L60 76Z", fill: g2 }),
      /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("path", { d: "M42 53.5L49.5 44L53 53.5Z", fill: g2 }),
      /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("path", { d: "M78 53.5L70.5 44L67 53.5Z", fill: g2 }),
      /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("path", { d: "M53 53.5L60 44L67 53.5Z", fill: g0 }),
      /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("path", { d: "M53 53.5H67L60 76Z", fill: g1 }),
      /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("path", { d: "M67 53.5H78L60 76Z", fill: g3 })
    ] }),
    twinkleSpots.slice(0, t.twinkles).map(([x, y, s]) => /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("path", { d: twinkle(x, y, s), fill: "#fff" }, x))
  ] });
}
function LevelTile({ level = 1, locked = false, className = "" }) {
  return /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("span", { className: "xl-tile " + className, "data-level": clamp2(level), "data-locked": locked || void 0, "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(LevelEmblem, { level }) });
}
function LevelPill({ level = 1 }) {
  return /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("span", { className: "xl-pill", "data-level": clamp2(level), children: [
    /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(LevelEmblem, { level }),
    /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("span", { children: [
      "L",
      clamp2(level)
    ] })
  ] });
}
function LevelLadder({ level }) {
  const current = level === void 0 ? 0 : clamp2(level);
  return /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("ol", { className: "xl-ladder", "aria-label": "\u7B49\u7D1A\u8207\u6240\u9700\u6642\u6578", children: LEVEL_HOURS.map((hours, i) => {
    const n = i + 1, state = !current ? "plain" : n === current ? "current" : n < current ? "earned" : "locked";
    return /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("li", { "data-level": n, "data-state": state, "aria-current": state === "current" ? "step" : void 0, children: [
      /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("span", { className: "xl-ladder-node", children: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(LevelEmblem, { level: n }) }),
      /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("b", { children: [
        "L",
        n
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("span", { children: [
        hours,
        " \u5C0F\u6642"
      ] })
    ] }, n);
  }) });
}
function ProfileLevel({ level }) {
  const [open, setOpen] = (0, import_react7.useState)(false), root = (0, import_react7.useRef)(null);
  (0, import_react7.useEffect)(() => {
    if (!open) return;
    const close = (e) => {
      if (e.type === "keydown" ? e.key === "Escape" : !root.current?.contains(e.target)) setOpen(false);
    };
    document.addEventListener("pointerdown", close);
    document.addEventListener("keydown", close);
    return () => {
      document.removeEventListener("pointerdown", close);
      document.removeEventListener("keydown", close);
    };
  }, [open]);
  return /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("span", { className: "mp-level-group", ref: root, children: [
    /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(LevelPill, { level }),
    /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("span", { className: "xl-info", children: [
      /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("button", { type: "button", className: "xl-info-button", "aria-label": "\u67E5\u770B\u5C0E\u5E2B\u7B49\u7D1A\u8AAA\u660E", "aria-expanded": open, onClick: () => setOpen(!open), children: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(Info, { size: 16 }) }),
      open && /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { className: "xl-popover", role: "dialog", "aria-label": "\u5C0E\u5E2B\u7B49\u7D1A\u8AAA\u660E", children: [
        /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { className: "xl-popover-head", children: [
          /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(LevelTile, { level }),
          /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("small", { children: "\u5C0E\u5E2B\u7B49\u7D1A" }),
            /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("strong", { children: [
              "L",
              clamp2(level)
            ] })
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("p", { className: "xl-lead", children: "\u7B49\u7D1A\u4F9D\u6709\u6548\u670D\u52D9\u6642\u6578\u7D2F\u7A4D\uFF0C\u4EE3\u8868\u5728 X-Talent \u7684\u4EA4\u6D41\u6B77\u7A0B\u3002" }),
        /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(LevelLadder, { level }),
        /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("p", { className: "xl-popover-note", children: "\u96D9\u65B9\u78BA\u8A8D\u5B8C\u6210\u7684\u6703\u8AC7\u624D\u6703\u8A08\u5165\u6642\u6578\u3002" })
      ] })
    ] })
  ] });
}

// src/SocialLinks.tsx
var import_jsx_runtime17 = __toESM(require_jsx_runtime(), 1);
var linkedin = /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
  "svg",
  {
    width: "1em",
    height: "1em",
    viewBox: "2.5 2.5 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "social-platform-icon",
    "aria-hidden": "true",
    children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
      "path",
      {
        d: "M15.2801 15.2825H13.0589V11.8018C13.0589 10.9718 13.0421 9.90375 11.9014 9.90375C10.7433 9.90375 10.5664 10.8069 10.5664 11.7406V15.2825H8.34514V8.125H10.4789V9.10058H10.5076C10.8058 8.53808 11.5308 7.94437 12.6139 7.94437C14.8646 7.94437 15.2808 9.42567 15.2808 11.3538L15.2801 15.2825ZM5.83642 7.14562C5.12142 7.14562 4.54704 6.56687 4.54704 5.855C4.54704 5.14375 5.12204 4.56563 5.83642 4.56563C6.54892 4.56563 7.12642 5.14375 7.12642 5.855C7.12642 6.56687 6.54829 7.14562 5.83642 7.14562ZM6.95017 15.2825H4.72267V8.125H6.95017V15.2825ZM16.3914 2.5H3.60767C2.99579 2.5 2.50079 2.98375 2.50079 3.58063V16.4194C2.50079 17.0168 2.99579 17.5 3.60767 17.5H16.3896C17.0008 17.5 17.5008 17.0168 17.5008 16.4194V3.58063C17.5008 2.98375 17.0008 2.5 16.3896 2.5H16.3914Z",
        fill: "#0A66C2"
      }
    )
  }
);
var facebook = /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
  "svg",
  {
    width: "1em",
    height: "1em",
    viewBox: "0 0 18 18",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "social-platform-icon",
    "aria-hidden": "true",
    children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
      "path",
      {
        d: "M12.4024 18V11.0344H14.7347L15.0838 8.3265H12.4024V6.59765C12.4024 5.81364 12.62 5.27934 13.7443 5.27934L15.1783 5.27867V2.85676C14.9302 2.82382 14.0791 2.75006 13.0888 2.75006C11.0213 2.75006 9.606 4.01198 9.606 6.32952V8.3265H7.2677V11.0344H9.606V18H1C0.44772 18 0 17.5523 0 17V1C0 0.44772 0.44772 0 1 0H17C17.5523 0 18 0.44772 18 1V17C18 17.5523 17.5523 18 17 18H12.4024Z",
        fill: "#1877F2"
      }
    )
  }
);
var github = /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("svg", { width: "1em", height: "1em", viewBox: "0 0 16 16", className: "social-platform-icon", "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("path", { fill: "#181717", d: "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8Z" }) });
var instagram = /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
  "svg",
  {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "social-platform-icon",
    "aria-hidden": "true",
    children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
      "path",
      {
        d: "M10.002 7C8.34457 7 7.00195 8.3431 7.00195 10C7.00195 11.6573 8.34507 13 10.002 13C11.6593 13 13.002 11.6569 13.002 10C13.002 8.3427 11.6589 7 10.002 7ZM10.002 5C12.7624 5 15.002 7.2371 15.002 10C15.002 12.7605 12.7649 15 10.002 15C7.24148 15 5.00195 12.7629 5.00195 10C5.00195 7.23953 7.23905 5 10.002 5ZM16.502 4.74915C16.502 5.43926 15.9412 5.99917 15.252 5.99917C14.5619 5.99917 14.002 5.4384 14.002 4.74915C14.002 4.0599 14.5627 3.5 15.252 3.5C15.9403 3.49913 16.502 4.0599 16.502 4.74915ZM10.002 2C7.52747 2 7.12415 2.00655 5.97324 2.0578C5.18912 2.09461 4.6635 2.20007 4.17513 2.38967C3.74113 2.55799 3.42806 2.75898 3.09449 3.09255C2.75964 3.4274 2.55901 3.73963 2.39137 4.17383C2.20133 4.66332 2.0959 5.18811 2.05975 5.97115C2.008 7.0752 2.00195 7.46105 2.00195 10C2.00195 12.4745 2.0085 12.8778 2.05974 14.0286C2.09657 14.8124 2.20217 15.3388 2.39131 15.826C2.56007 16.2606 2.76147 16.5744 3.09343 16.9064C3.4296 17.2421 3.74276 17.4434 4.17284 17.6094C4.66716 17.8005 5.19245 17.9061 5.97309 17.9422C7.07715 17.9939 7.463 18 10.002 18C12.4765 18 12.8798 17.9934 14.0306 17.9422C14.8127 17.9055 15.3395 17.7996 15.828 17.6106C16.2614 17.4423 16.5762 17.2402 16.9084 16.9085C17.2446 16.5718 17.4455 16.2594 17.6117 15.8283C17.8023 15.3358 17.9081 14.8098 17.9442 14.0289C17.9959 12.9248 18.002 12.5389 18.002 10C18.002 7.52552 17.9954 7.12221 17.9442 5.97137C17.9074 5.18906 17.8015 4.66149 17.6123 4.17318C17.4444 3.74038 17.2427 3.42635 16.9094 3.09255C16.574 2.75715 16.2626 2.55693 15.8281 2.38942C15.339 2.19954 14.8134 2.09396 14.0308 2.05781C12.9268 2.00605 12.5409 2 10.002 2ZM10.002 0C12.7186 0 13.0578 0.00999994 14.1245 0.0599999C15.1886 0.10917 15.9145 0.2775 16.552 0.525C17.2111 0.77917 17.7678 1.1225 18.3236 1.67833C18.8786 2.23417 19.222 2.7925 19.477 3.45C19.7236 4.08667 19.892 4.81333 19.942 5.8775C19.9895 6.94417 20.002 7.28333 20.002 10C20.002 12.7167 19.992 13.0558 19.942 14.1225C19.8928 15.1867 19.7236 15.9125 19.477 16.55C19.2228 17.2092 18.8786 17.7658 18.3236 18.3217C17.7678 18.8767 17.2086 19.22 16.552 19.475C15.9145 19.7217 15.1886 19.89 14.1245 19.94C13.0578 19.9875 12.7186 20 10.002 20C7.28528 20 6.94611 19.99 5.87945 19.94C4.81528 19.8908 4.09028 19.7217 3.45195 19.475C2.79361 19.2208 2.23611 18.8767 1.68028 18.3217C1.12445 17.7658 0.781953 17.2067 0.526953 16.55C0.279453 15.9125 0.111953 15.1867 0.0619533 14.1225C0.0144533 13.0558 0.00195312 12.7167 0.00195312 10C0.00195312 7.28333 0.0119533 6.94417 0.0619533 5.8775C0.111113 4.8125 0.279453 4.0875 0.526953 3.45C0.781113 2.79167 1.12445 2.23417 1.68028 1.67833C2.23611 1.1225 2.79445 0.78 3.45195 0.525C4.08945 0.2775 4.81445 0.11 5.87945 0.0599999C6.94611 0.0124999 7.28528 0 10.002 0Z",
        fill: "#E1306C"
      }
    )
  }
);
var twitter = /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
  "svg",
  {
    width: "1em",
    height: "1em",
    viewBox: "0 0 22 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "social-platform-icon",
    "aria-hidden": "true",
    children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
      "path",
      {
        d: "M17.2048 0.25H20.5128L13.2858 8.51L21.7878 19.75H15.1308L9.9168 12.933L3.95084 19.75H0.640844L8.37084 10.915L0.214844 0.25H7.04084L11.7538 6.481L17.2048 0.25ZM16.0438 17.77H17.8768L6.04484 2.126H4.07784L16.0438 17.77Z",
        fill: "#000000"
      }
    )
  }
);
var youtube = /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
  "svg",
  {
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "social-platform-icon",
    "aria-hidden": "true",
    children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
      "path",
      {
        d: "M10.2439 0C10.778 0.00294 12.1143 0.0158601 13.5341 0.0727301L14.0375 0.0946798C15.467 0.16236 16.8953 0.27798 17.6037 0.4755C18.5486 0.74095 19.2913 1.5155 19.5423 2.49732C19.942 4.05641 19.992 7.0994 19.9982 7.8358L19.9991 7.9884V7.9991C19.9991 7.9991 19.9991 8.0028 19.9991 8.0099L19.9982 8.1625C19.992 8.8989 19.942 11.9419 19.5423 13.501C19.2878 14.4864 18.5451 15.261 17.6037 15.5228C16.8953 15.7203 15.467 15.8359 14.0375 15.9036L13.5341 15.9255C12.1143 15.9824 10.778 15.9953 10.2439 15.9983L10.0095 15.9991H9.9991C9.9991 15.9991 9.9956 15.9991 9.9887 15.9991L9.7545 15.9983C8.6241 15.9921 3.89772 15.941 2.39451 15.5228C1.4496 15.2573 0.70692 14.4828 0.45587 13.501C0.0561999 11.9419 0.00624 8.8989 0 8.1625V7.8358C0.00624 7.0994 0.0561999 4.05641 0.45587 2.49732C0.7104 1.51186 1.45308 0.73732 2.39451 0.4755C3.89772 0.0572301 8.6241 0.00622 9.7545 0H10.2439ZM7.99911 4.49914V11.4991L13.9991 7.9991L7.99911 4.49914Z",
        fill: "#FF0000"
      }
    )
  }
);
var website = /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
  "svg",
  {
    width: "1em",
    height: "1em",
    viewBox: "0 0 18 18",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "social-platform-icon",
    "aria-hidden": "true",
    children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
      "path",
      {
        d: "M14.6572 11.8287L13.243 10.4145L14.6572 9.00031C16.2193 7.43821 16.2193 4.90555 14.6572 3.34345C13.0951 1.78136 10.5624 1.78136 9.00029 3.34345L7.58609 4.75767L6.17188 3.34345L7.58609 1.92924C9.92919 -0.413913 13.7282 -0.413913 16.0714 1.92924C18.4145 4.27239 18.4145 8.07141 16.0714 10.4145L14.6572 11.8287ZM11.8287 14.6572L10.4145 16.0714C8.07139 18.4145 4.27238 18.4145 1.92924 16.0714C-0.413913 13.7282 -0.413913 9.92921 1.92924 7.58611L3.34345 6.17188L4.75766 7.58611L3.34345 9.00031C1.78135 10.5624 1.78135 13.0951 3.34345 14.6572C4.90555 16.2192 7.43819 16.2192 9.00029 14.6572L10.4145 13.2429L11.8287 14.6572ZM11.8287 4.75767L13.243 6.17188L6.17188 13.2429L4.75766 11.8287L11.8287 4.75767Z",
        fill: "#4F46E5"
      }
    )
  }
);
var platforms = [
  ["linkedin", "LinkedIn", linkedin],
  ["facebook", "Facebook", facebook],
  ["instagram", "Instagram", instagram],
  ["twitter", "X (formerly Twitter)", twitter],
  ["youtube", "YouTube", youtube],
  ["github", "GitHub", github],
  ["website", "\u500B\u4EBA\u7DB2\u7AD9", website]
];
function SocialLinks({ links }) {
  return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("nav", { className: "xt-social-links", "aria-label": "\u500B\u4EBA\u9023\u7D50", children: platforms.map(([key, label, icon]) => {
    const raw = links[key]?.url?.trim();
    const url = raw && key === "github" && !/^https?:\/\//i.test(raw) ? "https://" + raw : raw;
    const available = !!url && /^https?:\/\//i.test(url);
    const content = /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(import_jsx_runtime17.Fragment, { children: [
      icon,
      /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("span", { children: label }),
      available && /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(ArrowUpRight, { className: "social-open-arrow", size: 14, "aria-hidden": "true" })
    ] });
    return available ? /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("a", { className: "xt-social-item available", href: url, target: "_blank", rel: "noopener noreferrer", "aria-label": "\u958B\u555F " + label, children: content }, key) : /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("span", { className: "xt-social-item unavailable", "aria-disabled": "true", children: content }, key);
  }) });
}

// src/MentorReadView.tsx
var import_jsx_runtime18 = __toESM(require_jsx_runtime(), 1);
var reviewNotes = [
  "\u5206\u4EAB\u4E86\u5F88\u5177\u9AD4\u7684\u5EFA\u8B70\uFF0C\u4E5F\u5E6B\u52A9\u6211\u91D0\u6E05\u4E0B\u4E00\u6B65\u7684\u65B9\u5411\u3002",
  "\u5F9E\u4F5C\u54C1\u96C6\u7684\u67B6\u69CB\u5230\u7814\u7A76\u6545\u4E8B\uFF0C\u90FD\u7D66\u4E86\u6211\u53EF\u4EE5\u5BE6\u969B\u57F7\u884C\u7684\u4FEE\u6539\u65B9\u5411\u3002",
  "\u5F88\u6709\u8010\u5FC3\u5730\u56DE\u7B54\u554F\u984C\uFF0C\u6703\u8AC7\u524D\u4E5F\u6709\u5148\u4E86\u89E3\u6211\u7684\u9700\u6C42\u3002",
  "\u4E00\u8D77\u91D0\u6E05\u4E86\u8F49\u8077\u76EE\u6A19\uFF0C\u8B93\u6211\u77E5\u9053\u53EF\u4EE5\u5F9E\u54EA\u4E9B\u6280\u80FD\u958B\u59CB\u6E96\u5099\u3002",
  "\u6A21\u64EC\u9762\u8A66\u7684\u56DE\u994B\u5F88\u5BE6\u7528\uFF0C\u8B93\u6211\u66F4\u6709\u4FE1\u5FC3\u8AAA\u660E\u81EA\u5DF1\u7684\u8A2D\u8A08\u6C7A\u7B56\u3002",
  "\u5354\u52A9\u6211\u6574\u7406\u4E86\u5C65\u6B77\u91CD\u9EDE\uFF0C\u4E5F\u63D0\u9192\u6211\u7528\u6210\u679C\u4F86\u8AAA\u660E\u81EA\u5DF1\u7684\u8CA2\u737B\u3002",
  "\u7528\u5F88\u5BB9\u6613\u7406\u89E3\u7684\u4F8B\u5B50\uFF0C\u8AAA\u660E\u5982\u4F55\u628A\u8A2A\u8AC7\u6D1E\u5BDF\u8F49\u5316\u6210\u8A2D\u8A08\u65B9\u5411\u3002",
  "\u5728\u6709\u9650\u7684\u6642\u9593\u88E1\u805A\u7126\u6700\u9700\u8981\u89E3\u6C7A\u7684\u554F\u984C\uFF0C\u4EA4\u6D41\u904E\u7A0B\u5F88\u81EA\u5728\u3002",
  "\u5C0D\u8A2D\u8A08\u7CFB\u7D71\u7684\u5EFA\u8B70\u5F88\u6E05\u695A\uFF0C\u6703\u8AC7\u5F8C\u5DF2\u7D93\u958B\u59CB\u8ABF\u6574\u5143\u4EF6\u5206\u985E\u3002",
  "\u8B1D\u8B1D\u4F60\u5206\u4EAB\u8207\u5DE5\u7A0B\u5E2B\u5408\u4F5C\u7684\u7D93\u9A57\uFF0C\u4E5F\u8B93\u6211\u91CD\u65B0\u770B\u5F85\u6E9D\u901A\u65B9\u5F0F\u3002",
  "\u8B93\u6211\u767C\u73FE\u4F5C\u54C1\u96C6\u88E1\u53EF\u4EE5\u66F4\u6E05\u695A\u5448\u73FE\u7684\u7814\u7A76\u904E\u7A0B\uFF0C\u6536\u7A6B\u5F88\u591A\u3002",
  "\u4E0D\u53EA\u63D0\u4F9B\u7B54\u6848\uFF0C\u4E5F\u900F\u904E\u63D0\u554F\u5354\u52A9\u6211\u627E\u5230\u9069\u5408\u81EA\u5DF1\u7684\u4E0B\u4E00\u6B65\u3002"
];
function ProfileOwnerActions({ onEdit, onBackend }) {
  return /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("div", { className: "mp-actions mp-owner-actions", children: [
    /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("button", { type: "button", className: "mp-action", "aria-label": "\u7DE8\u8F2F\u8CC7\u6599", title: "\u7DE8\u8F2F\u8CC7\u6599", onClick: onEdit, children: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(Pencil, { size: 20 }) }),
    /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("button", { type: "button", className: "mp-backend-action", onClick: onBackend, children: [
      "\u524D\u5F80\u5F8C\u53F0",
      /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(ArrowUpRight, { size: 16 })
    ] })
  ] });
}
function ProfilePlans({ plans, owner = false, onManage }) {
  const published = plans.filter((p) => p.published);
  return /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("section", { className: "xt-profile-setting-card mp-plans", children: [
    /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("div", { className: "mp-booking-title", children: [
      /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("h2", { children: owner ? "\u6211\u7684\u65B9\u6848" : "\u9810\u7D04\u6703\u8AC7" }),
      /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(CalendarDays, { size: 20 })
    ] }),
    published.length ? published.map((plan) => /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("article", { className: "mp-plan", children: [
      /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("h3", { children: plan.name }),
      /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("p", { children: plan.description }),
      /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("span", { children: [
          plan.duration,
          " \u5206\u9418"
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("strong", { children: plan.price ? "NT$ " + plan.price.toLocaleString() : "\u514D\u8CBB" })
      ] }),
      plan.slots.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("small", { children: [
        "\u53EF\u9810\u7D04 \xB7 ",
        plan.slots[0]
      ] })
    ] }, plan.id)) : /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("div", { className: "mp-plans-empty", children: [
      /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(CalendarDays, { size: 26 }),
      /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("h3", { children: owner ? "\u4F60\u9084\u6C92\u6709\u4E0A\u67B6\u7684\u65B9\u6848" : "\u76EE\u524D\u6C92\u6709\u958B\u653E\u7684\u65B9\u6848" })
    ] }),
    owner && /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("button", { className: "mp-manage-plans", type: "button", onClick: onManage, children: "\u7BA1\u7406\u65B9\u6848" })
  ] });
}
function ProfileSummary({ hasReviews, completed, owner, minutes, experience, location: location2 }) {
  return /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("dl", { className: "mp-summary", "data-has-rating": hasReviews, style: { "--summary-count": (hasReviews ? 1 : 0) + (completed > 0 ? 1 : 0) + (owner ? 1 : 0) + 2 }, "aria-label": "\u5C0E\u5E2B\u6703\u8AC7\u8207\u80CC\u666F\u8CC7\u8A0A", children: [
    hasReviews && /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("div", { className: "mp-summary-item", children: [
      /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("dt", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(Star, { size: 16, fill: "currentColor", className: "mp-summary-star" }),
        "\u8A55\u5206"
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("dd", { children: [
        "8.5 ",
        /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("span", { children: "/ 10" })
      ] })
    ] }),
    completed > 0 && /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("div", { className: "mp-summary-item", children: [
      /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("dt", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(UsersRound, { size: 16 }),
        "\u5DF2\u5B8C\u6210 1-on-1"
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("dd", { children: [
        completed,
        " ",
        /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("span", { children: "\u5834" })
      ] })
    ] }),
    owner && /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("div", { className: "mp-summary-item", children: [
      /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("dt", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(Clock3, { size: 16 }),
        "\u6709\u6548\u670D\u52D9\u6642\u6578"
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("dd", { children: [
        (minutes / 60).toFixed(1),
        " ",
        /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("span", { children: "\u5C0F\u6642" })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("div", { className: "mp-summary-item", children: [
      /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("dt", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(BriefcaseBusiness, { size: 16 }),
        "\u7D93\u9A57"
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("dd", { children: experience })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("div", { className: "mp-summary-item", children: [
      /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("dt", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(MapPin, { size: 16 }),
        "\u5730\u9EDE"
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("dd", { className: "mp-summary-location", children: location2 })
    ] })
  ] });
}
function ProfileIndustries({ items }) {
  if (!items?.length) return null;
  return /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("div", { className: "mp-about-hashtags", "aria-label": "\u7522\u696D", children: items.map((v) => /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("span", { children: [
    "#",
    v
  ] }, v)) });
}
function MentorReadView({ profile: p, owner = false, level, minutes = 0, completed = 128, reviewCount = 12, initialTab = "overview", onContact, aside, ownerActions, favorite, onFavorite }) {
  const [tab, setTab] = (0, import_react8.useState)(initialTab), [reviewPage, setReviewPage] = (0, import_react8.useState)(0), [saved, setSaved] = (0, import_react8.useState)(false);
  const isSaved = favorite ?? saved;
  const reviews = reviewNotes.slice(0, reviewCount), hasReviews = reviews.length > 0;
  const tabKey = (e) => {
    if (["ArrowLeft", "ArrowRight", "Home", "End"].includes(e.key)) {
      e.preventDefault();
      const next = e.key === "Home" ? "overview" : e.key === "End" ? "reviews" : tab === "overview" ? "reviews" : "overview";
      setTab(next);
      document.getElementById("profile-tab-" + next)?.focus();
    }
  };
  return /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("div", { className: "profile-view-container", children: /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("main", { id: "xt-mentor-profile", children: [
    /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("section", { className: "mp-identity-section", "aria-label": "\u5C0E\u5E2B\u500B\u4EBA\u8CC7\u6599", children: [
      /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("div", { className: "mp-cover", "aria-hidden": "true" }),
      /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("div", { className: "mp-identity-body", children: [
        /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("div", { className: "xt-profile-identity", children: [
          /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("img", { className: "mp-avatar", src: p.avatar, alt: p.name }),
          /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("div", { className: "mp-identity-copy", children: [
            /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("div", { className: "mp-name-row", children: [
              /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("h1", { children: p.name }),
              level !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(ProfileLevel, { level })
            ] }),
            p.position && /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("p", { className: "mp-position", children: p.position })
          ] }),
          owner && ownerActions,
          !owner && /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("div", { className: "mp-actions", children: [
            onContact && /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("button", { type: "button", className: "mp-action", "aria-label": "\u806F\u7D61\u5C0E\u5E2B", title: "\u806F\u7D61\u5C0E\u5E2B", onClick: onContact, children: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(MessageCircleMore, { size: 20 }) }),
            /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("button", { type: "button", className: "mp-action", "aria-label": isSaved ? "\u53D6\u6D88\u6536\u85CF" : "\u6536\u85CF\u5C0E\u5E2B", title: isSaved ? "\u53D6\u6D88\u6536\u85CF" : "\u6536\u85CF\u5C0E\u5E2B", "aria-pressed": isSaved, onClick: onFavorite || (() => setSaved(!saved)), children: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(Bookmark, { size: 20, fill: isSaved ? "currentColor" : "none" }) })
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(ProfileSummary, { hasReviews, completed, owner, minutes, experience: p.experience, location: p.location })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("div", { className: "mp-wrap", children: /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("div", { className: "mp-columns", children: [
      /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("div", { className: "mp-main", children: [
        /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("div", { className: "xt-profile-nav", role: "tablist", "aria-label": "\u5C0E\u5E2B\u8CC7\u6599", children: [["overview", "\u7C21\u4ECB"], ["reviews", "\u8A55\u50F9"]].map(([id, label]) => /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("button", { type: "button", id: "profile-tab-" + id, role: "tab", "aria-controls": "profile-panel-" + id, "aria-selected": tab === id, tabIndex: tab === id ? 0 : -1, onKeyDown: tabKey, onClick: () => setTab(id), children: [
          label,
          id === "reviews" && /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("span", { children: reviews.length })
        ] }, id)) }),
        /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("div", { id: "profile-panel-overview", role: "tabpanel", "aria-labelledby": "profile-tab-overview", hidden: tab !== "overview", children: [
          /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("section", { className: "xt-profile-block", children: [
            /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("h2", { children: "\u95DC\u65BC\u6211" }),
            /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(ProfileIndustries, { items: p.industries }),
            /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("div", { className: "mp-about", children: p.about.split(/\n\s*\n/).map((text, i) => /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("p", { children: text }, i)) })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("section", { className: "xt-profile-block", children: [
            /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("h2", { children: "\u670D\u52D9\u8207\u5C08\u9577" }),
            /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("div", { className: "mp-services", children: [
              /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("h3", { children: "\u6211\u80FD\u63D0\u4F9B\u7684\u670D\u52D9" }),
              /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("ul", { className: "xt-compact-chips", children: p.services.map((v) => /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("li", { className: "xt-compact-chip", children: v }, v)) })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("div", { className: "mp-skills", children: [
              /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("h3", { children: "\u5C08\u696D\u80FD\u529B" }),
              /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("ul", { className: "xt-member-card__skills", children: p.skills.map((v) => /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("li", { children: v }, v)) })
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("section", { className: "xt-profile-block", children: [
            /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("h2", { children: "\u5DE5\u4F5C\u7D93\u9A57" }),
            /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("div", { className: "xt-experience-rows", children: p.work.map((w) => /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("article", { children: [
              /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("span", { className: "xt-experience-icon", children: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(BriefcaseBusiness, { size: 20 }) }),
              /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("h3", { children: w.title }),
                /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("p", { children: w.subtitle }),
                /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("p", { className: "xt-experience-date", children: w.period }),
                /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("p", { className: "xt-experience-description", children: w.description })
              ] })
            ] }, w.id)) })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("section", { className: "xt-profile-block", children: [
            /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("h2", { children: "\u6559\u80B2\u7D93\u6B77" }),
            /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("div", { className: "xt-experience-rows", children: p.education.map((w) => /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("article", { children: [
              /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("span", { className: "xt-experience-icon", children: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(GraduationCap, { size: 20 }) }),
              /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("h3", { children: w.title }),
                /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("p", { children: w.subtitle }),
                /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("p", { className: "xt-experience-date", children: w.period })
              ] })
            ] }, w.id)) })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("section", { className: "xt-profile-block", children: [
            /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("h2", { children: "\u500B\u4EBA\u9023\u7D50" }),
            /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(SocialLinks, { links: p.links })
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("div", { id: "profile-panel-reviews", role: "tabpanel", "aria-labelledby": "profile-tab-reviews", hidden: tab !== "reviews", children: hasReviews ? /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)(import_jsx_runtime18.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("div", { className: "mp-review-summary", children: [
            /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("span", { className: "mp-review-score", children: [
              "8.5 ",
              /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("small", { children: "/ 10" })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("span", { className: "mp-review-stars", children: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(Star, { size: 16, fill: "currentColor" }) }),
              /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("p", { children: [
                reviews.length,
                " \u5247\u6703\u8AC7\u8A55\u50F9"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("div", { className: "mp-reviews", children: reviews.slice(reviewPage * 3, reviewPage * 3 + 3).map((text, i) => {
            const index2 = reviewPage * 3 + i;
            return /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("article", { className: "mp-review", children: [
              /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("div", { className: "mp-review-head", children: [
                /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("img", { className: "mp-review-avatar", src: avatarSource({ kind: "default", defaultIndex: index2 % 6 }), alt: "" }),
                /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("strong", { children: ["\u9673**", "\u6797**", "\u738B**", "\u674E**"][index2 % 4] }),
                /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("span", { className: "mp-review-rating", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(Star, { size: 14 }),
                  index2 % 2 === 0 ? 9 : 8,
                  " / 10"
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("time", { children: [
                  "2026/",
                  index2 < 6 ? "10" : "9",
                  "/",
                  28 - index2
                ] })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("p", { children: text })
            ] }, index2);
          }) }),
          /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("nav", { className: "mp-review-pagination", "aria-label": "\u8A55\u50F9\u5206\u9801", children: Array.from({ length: Math.ceil(reviews.length / 3) }, (_, i) => /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("button", { type: "button", "aria-label": "\u7B2C " + (i + 1) + " \u9801\u8A55\u50F9", "aria-current": reviewPage === i ? "page" : void 0, onClick: () => setReviewPage(i), children: i + 1 }, i)) })
        ] }) : /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("div", { className: "mp-review-empty", children: [
          /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(MessageCircle, { size: 28 }),
          /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("h2", { children: "\u76EE\u524D\u9084\u6C92\u6709\u8A55\u50F9" }),
          /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("p", { children: "\u5B8C\u6210\u6703\u8AC7\u5F8C\uFF0C\u5B78\u54E1\u7684\u8A55\u50F9\u6703\u986F\u793A\u5728\u9019\u88E1\u3002" })
        ] }) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("aside", { className: "mp-booking", "aria-label": owner ? "\u6211\u7684\u65B9\u6848" : "\u9810\u7D04\u6703\u8AC7", children: aside })
    ] }) })
  ] }) });
}

// src/profile-fixture.ts
var zahraProfile = { name: "Zahra Mirzakhani", position: "Senior UX Designer \xB7 CreativeUX Design Studio", about: "\u4F60\u597D\uFF0C\u6211\u662F Zahra\uFF0C\u76EE\u524D\u5728 CreativeUX Design Studio \u64D4\u4EFB Senior UX Designer\uFF0C\u7D2F\u7A4D\u8D85\u904E\u4E03\u5E74\u7684\u6578\u4F4D\u7522\u54C1\u8A2D\u8A08\u7D93\u9A57\u3002\u6211\u559C\u6B61\u5F9E\u4F7F\u7528\u8005\u7814\u7A76\u51FA\u767C\uFF0C\u548C\u4E0D\u540C\u9818\u57DF\u7684\u5925\u4F34\u4E00\u8D77\u5C07\u8907\u96DC\u554F\u984C\u8F49\u5316\u70BA\u6E05\u695A\u3001\u5BE6\u7528\u7684\u7522\u54C1\u9AD4\u9A57\u3002\n\n\u5F9E\u5E73\u9762\u8A2D\u8A08\u8D70\u5411 UX \u7684\u904E\u7A0B\u4E2D\uFF0C\u6211\u4E5F\u66FE\u7D93\u9762\u5C0D\u8F49\u8077\u7684\u4E0D\u78BA\u5B9A\u8207\u4F5C\u54C1\u96C6\u6574\u7406\u7684\u6311\u6230\u3002\u5982\u679C\u4F60\u6B63\u5728\u6E96\u5099\u8F49\u8077\u3001\u6574\u7406\u5C08\u6848\u6545\u4E8B\uFF0C\u6216\u5E0C\u671B\u66F4\u6709\u4FE1\u5FC3\u5730\u9762\u5C0D\u9762\u8A66\uFF0C\u6211\u5F88\u6A02\u610F\u966A\u4F60\u68B3\u7406\u60F3\u6CD5\uFF0C\u5F9E\u4F60\u7684\u7D93\u9A57\u88E1\u627E\u5230\u512A\u52E2\uFF0C\u4E00\u8D77\u898F\u5283\u80FD\u5BE6\u969B\u524D\u9032\u7684\u4E0B\u4E00\u6B65\u3002", industries: ["\u8A2D\u8A08\u53CA\u5275\u610F\u76F8\u95DC\u696D"], services: ["\u5C65\u6B77\u5065\u6AA2", "\u4F5C\u54C1\u96C6\u6AA2\u8996", "\u8077\u6DAF\u898F\u5283", "\u6A21\u64EC\u9762\u8A66"], skills: ["UI Design", "UX Research", "\u8A2D\u8A08\u7CFB\u7D71", "Figma", "\u7522\u54C1\u7B56\u7565", "\u8DE8\u90E8\u9580\u5354\u4F5C"], experience: "5\u201310 \u5E74", location: "\u81FA\u7063", work: [{ id: 1, title: "Senior UX Designer", subtitle: "CreativeUX Design Studio \xB7 \u81FA\u7063 \xB7 \u8A2D\u8A08\u53CA\u5275\u610F\u76F8\u95DC\u696D", period: "2021 \u2014 \u81F3\u4ECA", description: "\u8CA0\u8CAC\u6578\u4F4D\u7522\u54C1\u7684\u4F7F\u7528\u8005\u7814\u7A76\u8207\u9AD4\u9A57\u8A2D\u8A08\uFF0C\u900F\u904E\u8A2A\u8AC7\u3001\u539F\u578B\u8207\u4F7F\u7528\u6027\u6E2C\u8A66\u91D0\u6E05\u9700\u6C42\uFF0C\u4E26\u8207\u7522\u54C1\u53CA\u5DE5\u7A0B\u5718\u968A\u5408\u4F5C\uFF0C\u5EFA\u7ACB\u4E00\u81F4\u7684\u8A2D\u8A08\u7CFB\u7D71\u8207\u670D\u52D9\u9AD4\u9A57\u3002" }, { id: 2, title: "UI / UX Designer", subtitle: "Design Matter Studio \xB7 \u81FA\u7063 \xB7 \u8A2D\u8A08\u53CA\u5275\u610F\u76F8\u95DC\u696D", period: "2018 \u2014 2021", description: "\u53C3\u8207\u7DB2\u7AD9\u8207\u884C\u52D5\u61C9\u7528\u7684\u4ECB\u9762\u8A2D\u8A08\uFF0C\u6574\u7406\u4F7F\u7528\u8005\u6D41\u7A0B\u3001\u88FD\u4F5C\u4E92\u52D5\u539F\u578B\uFF0C\u5354\u52A9\u5718\u968A\u5C07\u7814\u7A76\u767C\u73FE\u8F49\u5316\u70BA\u53EF\u9A57\u8B49\u7684\u8A2D\u8A08\u65B9\u6848\u3002" }], education: [{ id: 1, title: "\u570B\u7ACB\u81FA\u7063\u79D1\u6280\u5927\u5B78", subtitle: "\u8A2D\u8A08\u7CFB \u5DE5\u696D\u8A2D\u8A08\u7D44 \xB7 \u78A9\u58EB", period: "2016 \u2014 2018" }, { id: 2, title: "\u570B\u7ACB\u96F2\u6797\u79D1\u6280\u5927\u5B78", subtitle: "\u8996\u89BA\u50B3\u9054\u8A2D\u8A08\u7CFB \xB7 \u5B78\u58EB", period: "2012 \u2014 2016" }], links: { linkedin: { url: "https://www.linkedin.com/" }, website: { url: "https://example.com/" } } };
var profileExamplePlans = [{ id: "portfolio", name: "\u4F5C\u54C1\u96C6\u8207\u8077\u6DAF\u65B9\u5411", description: "\u4E00\u8D77\u68B3\u7406\u4F5C\u54C1\u96C6\u6545\u4E8B\uFF0C\u627E\u5230\u9069\u5408\u81EA\u5DF1\u7684\u4E0B\u4E00\u6B65\u3002", duration: 60, price: 0, published: true, slots: ["\u9031\u4E8C 19:00\u201320:00", "\u9031\u56DB 20:00\u201321:00"], questions: [] }, { id: "interview", name: "UX \u6A21\u64EC\u9762\u8A66", description: "\u7DF4\u7FD2\u8AAA\u660E\u4F60\u7684\u8A2D\u8A08\u6C7A\u7B56\uFF0C\u6574\u7406\u5177\u9AD4\u7684\u9762\u8A66\u56DE\u994B\u3002", duration: 45, price: 600, published: true, slots: ["\u9031\u4E94 19:00\u201319:45"], questions: [] }];

// src/Profile.tsx
var import_jsx_runtime19 = __toESM(require_jsx_runtime(), 1);
function Profile({ onContact, mode = "normal", onFind, allowContact = true, allowBooking = false, onBook, initialNote = "", reviewCount = 12, v2 = false, favorite, onFavorite }) {
  const [day, setDay] = (0, import_react9.useState)(17), [month, setMonth] = (0, import_react9.useState)(11), [year, setYear] = (0, import_react9.useState)(2026);
  const [slot, setSlot] = (0, import_react9.useState)(""), [note, setNote] = (0, import_react9.useState)(initialNote), [confirming, setConfirming] = (0, import_react9.useState)(false), [completed, setCompleted] = (0, import_react9.useState)(false);
  const reservationKey = (0, import_react9.useState)(() => crypto.randomUUID())[0];
  const changeDate = () => {
    setSlot("");
    setCompleted(false);
  };
  const changeMonth = (delta) => {
    const d = new Date(year, month - 1 + delta, 1);
    setYear(d.getFullYear());
    setMonth(d.getMonth() + 1);
    setDay((n) => Math.min(n, new Date(d.getFullYear(), d.getMonth() + 1, 0).getDate()));
    changeDate();
  };
  const date = year + "/" + month + "/" + day, monthDays = new Date(year, month, 0).getDate(), firstWeekday = new Date(year, month - 1, 1).getDay();
  const owner = mode === "self", center = "https://xtalent-mentor-742.bonny80.chatgpt.site/";
  if (mode === "missing") return /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("main", { className: "page-empty", children: [
    /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("h1", { children: "\u6B64\u5C0E\u5E2B\u4E0D\u5B58\u5728" }),
    /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("button", { className: "primary-button", onClick: onFind, children: "\u5C0B\u627E\u5C0E\u5E2B" })
  ] });
  return /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(import_jsx_runtime19.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(MentorReadView, { favorite, onFavorite, profile: { ...zahraProfile, avatar: asset("zahra.png") }, owner, level: owner || v2 ? 2 : void 0, minutes: 4110, reviewCount, onContact: !owner && allowContact ? onContact : void 0, ownerActions: owner ? /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(ProfileOwnerActions, { onEdit: () => location.assign(center + "?scene=owner-edit"), onBackend: () => location.assign(center + "?scene=growth-l2") }) : void 0, aside: owner || v2 ? /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(ProfilePlans, { plans: profileExamplePlans, owner, onManage: () => location.assign(center + "?scene=plans-filled") }) : /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(import_jsx_runtime19.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "xt-profile-setting-card", children: [
      /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "mp-booking-title", children: [
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("h2", { children: "\u9810\u7D04\u6703\u8AC7" }),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(CalendarDays, { size: 20, "aria-hidden": "true" })
      ] }),
      mode === "paused" ? /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "mp-booking-paused", children: [
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(CalendarDays, { size: 28 }),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("h3", { children: "\u76EE\u524D\u66AB\u505C\u63A5\u53D7\u9810\u7D04" }),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("p", { children: "\u4F60\u4ECD\u53EF\u4EE5\u900F\u904E\u804A\u804A\u8207\u5C0E\u5E2B\u4EA4\u6D41\u3002" })
      ] }) : /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(import_jsx_runtime19.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "mp-calendar", children: [
          /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "mp-calendar-month", children: [
            /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("h3", { children: [
              year,
              " \u5E74 ",
              month,
              " \u6708"
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(IconButton, { label: "\u4E0A\u500B\u6708", onClick: () => changeMonth(-1), children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(ChevronLeft, { size: 18 }) }),
            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(IconButton, { label: "\u4E0B\u500B\u6708", onClick: () => changeMonth(1), children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(ChevronRight, { size: 18 }) })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "mp-calendar-grid", children: [
            ["\u65E5", "\u4E00", "\u4E8C", "\u4E09", "\u56DB", "\u4E94", "\u516D"].map((d) => /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: "mp-weekday", children: d }, d)),
            Array.from({ length: firstWeekday }, (_, i) => /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { "aria-hidden": "true" }, "offset-" + i)),
            Array.from({ length: monthDays }, (_, i) => /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("button", { className: "mp-day", "aria-label": month + " \u6708 " + (i + 1) + " \u65E5", "aria-pressed": day === i + 1, disabled: year === 2026 && month === 11 && i + 1 < 8, onClick: () => {
              setDay(i + 1);
              changeDate();
            }, children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { children: i + 1 }) }, i))
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("p", { className: "mp-selected-date", children: [
            month,
            " \u6708 ",
            day,
            " \u65E5",
            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { children: "\u81FA\u7063\u6642\u9593\uFF08GMT+8\uFF09" })
          ] })
        ] }),
        allowBooking && /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("section", { className: "reservation-form", "aria-label": "\u9810\u7D04\u5C0E\u5E2B", children: [
          /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("fieldset", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("legend", { children: "\u7576\u65E5\u53EF\u9810\u7D04\u6642\u6BB5" }),
            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { className: "reservation-slots", children: ["19:00\u201319:30", "20:00\u201320:30", "21:00\u201321:30"].map((time) => /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("button", { type: "button", "aria-pressed": slot === time, disabled: completed, onClick: () => setSlot(time), children: time }, time)) })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("label", { htmlFor: "reservation-note", children: "\u4F60\u60F3\u554F\u5C0E\u5E2B\u7684\u554F\u984C\uFF08\u9078\u586B\uFF09" }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("textarea", { id: "reservation-note", className: "form-textarea", placeholder: "\u7C21\u55AE\u5206\u4EAB\u4F60\u60F3\u8A0E\u8AD6\u7684\u554F\u984C\u2026", value: note, disabled: completed, onChange: (e) => setNote(e.target.value) }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("p", { className: "reservation-help", children: "\u6709\u586B\u5BEB\u554F\u984C\u6642\uFF0C\u9810\u7D04\u6210\u529F\u5F8C\u6703\u9001\u5230\u8207\u5C0E\u5E2B\u7684\u804A\u804A\u3002" }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("button", { className: "primary-button", disabled: !slot || completed, onClick: () => setConfirming(true), children: completed ? "\u9810\u7D04\u5DF2\u6210\u7ACB" : "\u78BA\u8A8D\u9810\u7D04" }),
          completed && /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("p", { className: "reservation-success", role: "status", children: "\u9810\u7D04\u5DF2\u6210\u7ACB\uFF0C\u7B49\u5F85\u5C0E\u5E2B\u56DE\u8986\u3002" })
        ] }),
        !allowBooking && /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("p", { className: "mp-booking-help", children: "\u767B\u5165\u4E26\u4EE5\u5B78\u54E1\u8EAB\u5206\u9810\u7D04\u6703\u8AC7\u3002" })
      ] })
    ] }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(Modal, { open: confirming, title: "\u78BA\u8A8D\u9810\u7D04\u8CC7\u8A0A", onClose: () => setConfirming(false), actions: /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(import_jsx_runtime19.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("button", { className: "outline-button", onClick: () => setConfirming(false), children: "\u8FD4\u56DE" }),
      /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("button", { className: "primary-button", disabled: completed, onClick: () => {
        if (onBook({ id: reservationKey + "-" + date + "-" + slot, person: "zahra", date, time: slot }, note)) {
          setCompleted(true);
          setConfirming(false);
        }
      }, children: "\u78BA\u8A8D\u9810\u7D04" })
    ] }), children: [
      /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("p", { children: "Zahra Mirzakhani" }),
      /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("p", { children: [
        date,
        " \xB7 ",
        slot
      ] }),
      note.trim() ? /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(import_jsx_runtime19.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("p", { children: "\u4F60\u60F3\u554F\u5C0E\u5E2B\u7684\u554F\u984C" }),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("p", { className: "reservation-note-preview", children: note })
      ] }) : /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("p", { children: "\u672A\u586B\u5BEB\u554F\u984C\u7559\u8A00" })
    ] })
  ] });
}

// src/Chat.tsx
var import_react10 = __toESM(require_react(), 1);
var import_jsx_runtime20 = __toESM(require_jsx_runtime(), 1);
function AttachmentIcon({ file }) {
  const type = file.type.toUpperCase();
  const Icon2 = file.image ? FileImage : /^(CSV|XLSX?)$/.test(type) ? FileSpreadsheet : /^(ZIP|RAR|7Z)$/.test(type) ? FileArchive : /^(PDF|DOCX?|TXT|PPTX?)$/.test(type) ? FileText : File;
  return /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("span", { className: "attachment-type", "data-type": file.image ? "image" : type.toLowerCase(), title: type, children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(Icon2, { size: 22 }) });
}
function Highlight({ text, query = "" }) {
  const q = query.trim();
  if (Array.from(q).length < 2) return /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(import_jsx_runtime20.Fragment, { children: text });
  const parts = [];
  let start = 0, index2 = 0;
  const lower = text.toLocaleLowerCase(), needle = q.toLocaleLowerCase();
  while ((index2 = lower.indexOf(needle, start)) !== -1) {
    parts.push(text.slice(start, index2), /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("mark", { children: text.slice(index2, index2 + q.length) }, index2));
    start = index2 + q.length;
  }
  parts.push(text.slice(start));
  return /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(import_jsx_runtime20.Fragment, { children: parts });
}
function TextContent({ text, query = "" }) {
  return /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(import_jsx_runtime20.Fragment, { children: text.split(/(https?:\/\/[^\s]+)/g).map((p, i) => /^https?:\/\//.test(p) ? /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("a", { href: p, target: "_blank", rel: "noreferrer", children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(Highlight, { text: p, query }) }, i) : /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(Highlight, { text: p, query }, i)) });
}
var groupEnd = (items, i) => items[i].status === "sent" && (!items[i + 1] || items[i + 1].own !== items[i].own || items[i + 1].status !== "sent" || new Date(items[i].at).toDateString() !== new Date(items[i + 1].at).toDateString());
function Chat({ state: s, setState, open, back, find, send, retry, toast }) {
  const active = s.route.active, visible = s.route.view === "chat", person = s.people.find((p) => p.id === active), thread = active ? s.threads[active] || emptyThread() : emptyThread(), allItems = thread.messages;
  const [historyLimit, setHistoryLimit] = (0, import_react10.useState)(HISTORY_PAGE_SIZE), [loadingHistory, setLoadingHistory] = (0, import_react10.useState)(false);
  const matches = active ? matchedMessages(s, active) : [];
  const [matchIndex, setMatchIndex] = (0, import_react10.useState)(0);
  const match = matches[matchIndex % Math.max(1, matches.length)];
  const matchOffset = match ? allItems.findIndex((m) => m.id === match.id) : -1;
  const items = allItems.slice(-Math.max(historyLimit, matchOffset >= 0 ? allItems.length - matchOffset : 0)), canCompose = !!active && canMessage(s, active), searching = isSearching(s);
  const overview = active === null, invalid = active === "invalid", first = !isEstablished(thread) && !allItems.some((m) => m.status === "failed" || m.status === "sending"), deleted = !!person?.deleted;
  const [emojis, setEmojis] = (0, import_react10.useState)(false), [deleteId, setDeleteId] = (0, import_react10.useState)(null);
  const composer = (0, import_react10.useRef)(null), transcript = (0, import_react10.useRef)(null), listScroll = (0, import_react10.useRef)(null), uploader = (0, import_react10.useRef)(null);
  const unread = s.people.filter((p) => s.threads[p.id]?.unread && isEstablished(s.threads[p.id])).length;
  const listed = listedPeople(s);
  const update = (fn) => {
    if (active) setState((p) => ({ ...p, threads: { ...p.threads, [active]: fn(p.threads[active] || emptyThread()) } }));
  };
  const write = (draft) => update((t) => ({ ...t, draft }));
  const removeFailed = (id) => update((t) => ({ ...t, messages: t.messages.filter((m) => m.id !== id) }));
  (0, import_react10.useEffect)(() => {
    setEmojis(false);
  }, [active]);
  (0, import_react10.useEffect)(() => {
    if (listScroll.current && visible) listScroll.current.scrollTop = s.scroll;
  }, [overview, visible]);
  (0, import_react10.useEffect)(() => {
    const el = composer.current;
    if (el) {
      el.style.height = "auto";
      el.style.height = Math.min(el.scrollHeight, 120) + "px";
    }
  }, [thread.draft, active, visible]);
  const prepend = (0, import_react10.useRef)(null), historyTimer = (0, import_react10.useRef)(), wasNearBottom = (0, import_react10.useRef)(true);
  (0, import_react10.useEffect)(() => {
    clearTimeout(historyTimer.current);
    setLoadingHistory(false);
    setHistoryLimit(HISTORY_PAGE_SIZE);
    prepend.current = null;
    wasNearBottom.current = !searching;
    if (transcript.current && !searching) transcript.current.scrollTop = transcript.current.scrollHeight;
    return () => clearTimeout(historyTimer.current);
  }, [active]);
  (0, import_react10.useLayoutEffect)(() => {
    if (!visible || !transcript.current) return;
    const el = transcript.current;
    if (prepend.current) {
      el.scrollTop = el.scrollHeight - prepend.current.height + prepend.current.top;
      prepend.current = null;
    } else if (wasNearBottom.current) el.scrollTop = el.scrollHeight;
  }, [active, visible, items.length]);
  (0, import_react10.useEffect)(() => setMatchIndex(0), [active, s.search]);
  (0, import_react10.useEffect)(() => {
    if (!visible || !match || !transcript.current) return;
    wasNearBottom.current = false;
    setHistoryLimit((n) => Math.max(n, allItems.length - matchOffset));
    transcript.current.querySelector('[data-message-id="' + CSS.escape(match.id) + '"]')?.scrollIntoView({ block: "center" });
  }, [active, visible, match?.id, s.search]);
  const clearSearch = () => {
    wasNearBottom.current = false;
    setState((p) => ({ ...p, search: "" }));
  };
  const scrollHistory = () => {
    const el = transcript.current;
    if (!el) return;
    wasNearBottom.current = el.scrollHeight - el.scrollTop - el.clientHeight < 64;
    if (el.scrollTop > 24 || loadingHistory || items.length >= allItems.length) return;
    prepend.current = { height: el.scrollHeight, top: el.scrollTop };
    setLoadingHistory(true);
    historyTimer.current = setTimeout(() => {
      setHistoryLimit((n) => n + HISTORY_PAGE_SIZE);
      setLoadingHistory(false);
    }, 240);
  };
  const saveScroll = () => {
    const scroll = listScroll.current?.scrollTop || 0;
    setState((p) => ({ ...p, scroll }));
  };
  async function attach(files) {
    const allowed = /\.(jpe?g|png|webp|gif|pdf|docx?|xlsx?|pptx?|txt|csv|zip|rar|7z)$/i;
    const valid = files.filter((f) => allowed.test(f.name));
    if (thread.files.length + valid.length > MAX_ATTACHMENTS) {
      toast("\u7121\u6CD5\u52A0\u5165\u9644\u4EF6", "\u6BCF\u6B21\u6700\u591A\u53EF\u52A0\u5165 10 \u500B\u6A94\u6848\uFF0C\u8ACB\u79FB\u9664\u90E8\u5206\u9644\u4EF6\u5F8C\u518D\u8A66\u3002");
      return;
    }
    const ok = valid;
    if (ok.length !== files.length) toast("\u7121\u6CD5\u52A0\u5165\u9644\u4EF6", "\u4E0D\u652F\u63F4\u6B64\u6A94\u6848\u683C\u5F0F\uFF0C\u8ACB\u9078\u64C7\u5716\u7247\u3001\u6587\u4EF6\u6216\u58D3\u7E2E\u6A94\u3002");
    const next = await Promise.all(ok.map((f) => new Promise((resolve, reject) => {
      const r = new FileReader();
      r.onload = () => resolve({ name: f.name, url: String(r.result), image: f.type.startsWith("image/"), type: f.name.split(".").at(-1)?.toUpperCase() || "FILE" });
      r.onerror = reject;
      r.readAsDataURL(f);
    }))).catch(() => {
      toast("\u7121\u6CD5\u52A0\u5165\u9644\u4EF6", "\u7121\u6CD5\u8B80\u53D6\u6A94\u6848\uFF0C\u8ACB\u91CD\u65B0\u9078\u64C7\u3002");
      return [];
    });
    update((t) => ({ ...t, files: [...t.files, ...next] }));
  }
  return /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("main", { className: `chat-shell ${overview ? "no-thread inbox-overview" : "has-thread"}`, children: [
    /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("aside", { className: "conversation-list", "aria-label": "\u5C0D\u8A71\u5217\u8868", children: [
      /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "list-tools", children: [
        /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "list-search-row", children: [
          /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(IconButton, { label: "\u8FD4\u56DE\u539F\u9801", className: "list-back", onClick: back, children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(ArrowLeft, { size: 20 }) }),
          /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "search-wrap", children: [
            /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(Search, { size: 18 }),
            /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("input", { "aria-label": "\u641C\u5C0B\u59D3\u540D\u3001\u8A0A\u606F\u6216\u9644\u4EF6\u6A94\u540D", placeholder: "\u641C\u5C0B\u59D3\u540D\u3001\u8A0A\u606F\u6216\u6A94\u540D", value: s.search, onChange: (e) => setState((p) => ({ ...p, search: e.target.value })) }),
            s.search && /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(IconButton, { label: "\u6E05\u9664\u641C\u5C0B", onClick: clearSearch, children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(X, { size: 16 }) })
          ] })
        ] }),
        s.search.trim() && !searching && /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("p", { className: "search-hint", role: "status", children: "\u8ACB\u8F38\u5165\u81F3\u5C11 2 \u500B\u5B57\uFF0C\u624D\u6703\u958B\u59CB\u641C\u5C0B\u3002" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "list-tabs", role: "tablist", "aria-label": "\u8A0A\u606F\u7BE9\u9078", children: [["all", "\u5168\u90E8"], ["unread", "\u672A\u8B80"]].map(([value, label]) => /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("button", { role: "tab", "aria-selected": s.filter === value, onClick: () => setState((p) => ({ ...p, filter: value })), children: [
        label,
        value === "unread" && unread > 0 && /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("span", { children: unread > 99 ? "99+" : unread })
      ] }, value)) }),
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "list-scroll", ref: listScroll, children: s.listError ? /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "list-state", children: [
        /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(Info, { size: 24 }),
        /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("p", { children: "\u76EE\u524D\u7121\u6CD5\u8F09\u5165\u5C0D\u8A71\uFF0C\u8ACB\u7A0D\u5F8C\u518D\u8A66" }),
        /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("button", { className: "outline-button", onClick: () => setState((p) => ({ ...p, listError: false })), children: "\u91CD\u8A66" })
      ] }) : listed.length ? listed.map((p) => {
        const t = s.threads[p.id], match2 = matchedMessage(s, p.id), last = match2 || latest(t), isUnread = t.unread && isEstablished(t);
        return /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("button", { className: `conversation ${p.id === active ? "selected" : ""} ${isUnread ? "unread" : ""}`, onClick: () => {
          saveScroll();
          open(p.id);
        }, "aria-current": p.id === active ? "true" : void 0, children: [
          /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(Avatar, { person: p, deleted: !!p.deleted }),
          /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "conversation-copy", children: [
            /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("strong", { children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(Highlight, { text: p.name, query: s.search }) }),
              last && /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("time", { children: listTime(last.at, now(s)) })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("p", { className: !match2 && preview(t).startsWith("\u8349\u7A3F\uFF1A") ? "draft-label" : "", children: match2 ? /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(Highlight, { text: matchPreview(s, match2), query: s.search }) : preview(t) })
          ] }),
          isUnread && /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("span", { className: "unread-dot", "aria-label": "\u672A\u8B80" })
        ] }, p.id);
      }) : /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "list-state", children: [
        !searching && s.filter === "all" && /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(MessageSquare, { size: 28 }),
        /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("p", { children: searching ? "\u627E\u4E0D\u5230\u7B26\u5408\u7684\u5C0D\u8A71" : s.filter === "unread" ? "\u76EE\u524D\u6C92\u6709\u672A\u8B80\u8A0A\u606F" : "\u76EE\u524D\u6C92\u6709\u5C0D\u8A71" }),
        !searching && s.filter === "all" && /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("button", { className: "primary-button", onClick: find, children: "\u5C0B\u627E\u5C0E\u5E2B" })
      ] }) })
    ] }),
    (overview || invalid) && /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("section", { className: "chat-room empty-room " + (invalid ? "invalid-desktop" : ""), "aria-label": "\u5C1A\u672A\u9078\u53D6\u5C0D\u8A71", children: /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "chat-empty-content", children: [
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("span", { children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(MessageSquare, { size: 30, strokeWidth: 1.6 }) }),
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("h2", { children: "\u8ACB\u9078\u64C7\u4E00\u5247\u5C0D\u8A71" }),
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("p", { children: "\u5F9E\u5DE6\u5074\u5217\u8868\u9078\u53D6\u5C0D\u8A71\uFF0C\u958B\u59CB\u4EA4\u6D41\u3002" })
    ] }) }),
    invalid ? /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("section", { className: "chat-room invalid-room invalid-mobile", children: [
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("header", { className: "thread-header", children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(IconButton, { label: "\u8FD4\u56DE\u5C0D\u8A71\u5217\u8868", onClick: back, children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(ChevronLeft, { size: 22 }) }) }),
      /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "invalid-content", children: [
        /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(Info, { size: 28 }),
        /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("h2", { children: "\u7121\u6CD5\u958B\u555F\u6B64\u5C0D\u8A71" }),
        /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("button", { className: "outline-button", onClick: back, children: "\u8FD4\u56DE\u5C0D\u8A71\u5217\u8868" })
      ] })
    ] }) : person && /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("section", { className: "chat-room", "aria-label": `\u8207 ${person.name} \u7684\u5C0D\u8A71`, children: [
      /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("header", { className: "thread-header", children: [
        /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(IconButton, { label: "\u8FD4\u56DE\u5C0D\u8A71\u5217\u8868", className: "thread-back", onClick: back, children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(ChevronLeft, { size: 22 }) }),
        /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(Avatar, { person, deleted }),
        /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "thread-identity", children: [
          /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("h2", { children: person.name }),
          !deleted && /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("p", { children: person.role })
        ] })
      ] }),
      matches.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "thread-search", role: "region", "aria-label": "\u5C0D\u8A71\u5167\u641C\u5C0B", children: [
        /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("span", { children: [
          "\u641C\u5C0B\u300C",
          s.search.trim(),
          "\u300D"
        ] }),
        matches.length > 1 && /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)(import_jsx_runtime20.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("span", { className: "search-position", role: "status", children: [
            matchIndex % matches.length + 1,
            " / ",
            matches.length
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(IconButton, { label: "\u4E0A\u4E00\u7B46\u641C\u5C0B\u7D50\u679C", onClick: () => setMatchIndex((i) => (i - 1 + matches.length) % matches.length), children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(ArrowUp, { size: 16 }) }),
          /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(IconButton, { label: "\u4E0B\u4E00\u7B46\u641C\u5C0B\u7D50\u679C", onClick: () => setMatchIndex((i) => (i + 1) % matches.length), children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(ArrowDown, { size: 16 }) })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(IconButton, { label: "\u95DC\u9589\u5C0D\u8A71\u641C\u5C0B", onClick: clearSearch, children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(X, { size: 16 }) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "transcript", tabIndex: 0, "aria-label": "\u804A\u5929\u7D00\u9304", ref: transcript, onScroll: scrollHistory, children: [
        loadingHistory && /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "history-loading", role: "status", "aria-label": "\u8F09\u5165\u8F03\u65E9\u8A0A\u606F", children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(LoaderCircle, { size: 16 }) }),
        items.length === 0 && !deleted ? /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "first-conversation", children: [
          /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "first-portrait", children: [
            /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(Avatar, { person }),
            /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("span", { children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(MessageSquare, { size: 20 }) })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("h2", { children: [
            "\u8207 ",
            person.name,
            " \u958B\u59CB\u5C0D\u8A71"
          ] })
        ] }) : items.map((m, i) => {
          const newDate = i === 0 || new Date(items[i - 1].at).toDateString() !== new Date(m.at).toDateString();
          return /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)(import_react10.default.Fragment, { children: [
            newDate && /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "date-divider", children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("span", { children: new Date(m.at).toDateString() === new Date(now(s)).toDateString() ? "\u4ECA\u5929" : new Date(m.at).toLocaleDateString("zh-TW") }) }),
            /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: `message-row ${m.own ? "own" : "incoming"} ${!newDate && items[i - 1]?.own === m.own ? "grouped" : ""}`, "data-message-id": m.id, "data-search-current": m.id === match?.id || void 0, "data-message-status": m.status, children: [
              !m.own && /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(Avatar, { person, deleted }),
              /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "message-content", children: [
                (m.text || m.removed) && /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: `bubble ${m.removed ? "removed" : ""}`, children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(TextContent, { text: m.removed ? "\u6B64\u8A0A\u606F\u5DF2\u522A\u9664" : m.text, query: m.status === "sent" && !m.removed ? s.search : "" }) }),
                !m.removed && !!m.files?.length && /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "sent-attachments", "aria-label": `${m.files.length} \u500B\u9644\u4EF6`, children: m.files.map((f, j) => /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "sent-file", children: /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "sent-file-heading", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(AttachmentIcon, { file: f }),
                  /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("span", { children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(Highlight, { text: f.name, query: m.status === "sent" ? s.search : "" }) }),
                  m.status === "sent" && /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("a", { href: f.url, download: f.name, "aria-label": `\u4E0B\u8F09 ${f.name}`, children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(Download, { size: 18 }) })
                ] }) }, j)) }),
                (m.status === "failed" || groupEnd(items, i)) && /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: `message-meta ${m.status === "failed" ? "failed" : ""}`, children: m.status === "failed" ? /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("span", { children: m.reason }) : /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)(import_jsx_runtime20.Fragment, { children: [
                  m.own && /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("span", { children: m.read ? "\u5DF2\u8B80" : "\u672A\u8B80" }),
                  /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("time", { children: new Date(m.at).toLocaleTimeString("zh-TW", { hour: "2-digit", minute: "2-digit", hour12: false }) })
                ] }) })
              ] }),
              m.own && !m.removed && m.status !== "sending" && /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(MessageActions, { id: m.id, failed: m.status === "failed", onRetry: () => retry(m.id), onDeleteFailed: () => removeFailed(m.id), onDelete: () => setDeleteId(m.id) })
            ] })
          ] }, m.id);
        })
      ] }),
      deleted && /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "unavailable-area", children: /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "unavailable-notice", role: "status", children: [
        /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(Info, { size: 18 }),
        /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("span", { children: person.deleted === "mentor" ? "\u6B64\u5C0E\u5E2B\u4E0D\u5B58\u5728\uFF0C\u7121\u6CD5\u7E7C\u7E8C\u50B3\u9001\u8A0A\u606F\u3002" : "\u6B64\u5B78\u54E1\u4E0D\u5B58\u5728\uFF0C\u7121\u6CD5\u7E7C\u7E8C\u50B3\u9001\u8A0A\u606F\u3002" })
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "composer-area", children: [
        first && canCompose && s.role === "mentee" && /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "suggestion-scroll", "aria-label": "\u958B\u5834\u5EFA\u8B70", children: suggestions.map((t) => /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("button", { title: t, onClick: () => {
          write(t);
          composer.current?.focus();
        }, children: t }, t)) }),
        /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("form", { className: `composer ${!canCompose ? "is-disabled" : ""}`, onSubmit: (e) => {
          e.preventDefault();
          send();
          setEmojis(false);
        }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "composer-input-row", children: [
            thread.files.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "attachment-drafts", children: thread.files.map((f, i) => /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("span", { children: [
              /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(AttachmentIcon, { file: f }),
              /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("span", { children: f.name }),
              /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(IconButton, { label: `\u79FB\u9664 ${f.name}`, onClick: () => update((t) => ({ ...t, files: t.files.filter((_, j) => i !== j) })), children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(X, { size: 16 }) })
            ] }, i)) }),
            /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("textarea", { disabled: !canCompose, ref: composer, rows: 1, "aria-label": "\u8F38\u5165\u8A0A\u606F", placeholder: deleted ? "\u5C0D\u65B9\u5DF2\u522A\u9664\uFF0C\u7121\u6CD5\u50B3\u9001\u8A0A\u606F" : !canCompose ? "\u7531\u5B78\u54E1\u5148\u767C\u8D77\u5C0D\u8A71" : "\u8F38\u5165\u8A0A\u606F\u2026", value: thread.draft, onChange: (e) => write(e.target.value) })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "composer-controls", children: [
            /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("input", { hidden: true, ref: uploader, type: "file", multiple: true, onChange: (e) => {
              attach(Array.from(e.target.files || []));
              e.target.value = "";
            } }),
            /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(IconButton, { label: "\u9644\u52A0\u6A94\u6848", disabled: !canCompose, onClick: () => uploader.current?.click(), children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(Paperclip, { size: 20 }) }),
            /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "emoji-wrap", children: [
              /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(IconButton, { label: "\u8868\u60C5\u7B26\u865F", disabled: !canCompose, onClick: () => setEmojis(!emojis), children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(Smile, { size: 20 }) }),
              emojis && /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "emoji-picker", children: ["\u{1F60A}", "\u{1F44B}", "\u{1F64C}", "\u2728", "\u{1F44D}", "\u2764\uFE0F"].map((e) => /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("button", { type: "button", onClick: () => {
                write(thread.draft + e);
                setEmojis(false);
                composer.current?.focus();
              }, children: e }, e)) })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("button", { className: "send-button", type: "submit", disabled: !canCompose || !thread.draft.trim() && !thread.files.length || allItems.some((m) => m.status === "sending"), "aria-label": "\u50B3\u9001\u8A0A\u606F", children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(SendHorizontal, { size: 21 }) })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(DeleteConfirmation, { open: !!deleteId, onClose: () => setDeleteId(null), onConfirm: () => {
      update((t) => ({ ...t, messages: t.messages.map((m) => m.id === deleteId ? { ...m, removed: true, text: "", files: [] } : m) }));
      setDeleteId(null);
      composer.current?.focus();
    } })
  ] });
}

// src/Bookings.tsx
var import_react11 = __toESM(require_react(), 1);
var import_jsx_runtime21 = __toESM(require_jsx_runtime(), 1);
function Bookings({ state: s, setState, contact, toast, heading, showHours = false, feedbackUnlisted = false }) {
  const [cards, setCards] = (0, import_react11.useState)(() => feedbackUnlisted ? bookingSeeds.map((card) => card.id === "h1" ? { ...card, feedback: { ...card.feedback, isPublic: false } } : card) : bookingSeeds), [expanded, setExpanded] = (0, import_react11.useState)(null), [action, setAction] = (0, import_react11.useState)(null), [reply, setReply] = (0, import_react11.useState)(""), [feedback, setFeedback] = (0, import_react11.useState)(null);
  (0, import_react11.useEffect)(() => {
    setCards((current) => [...(s.reservations || []).filter((b) => !current.some((c) => c.id === b.id)).map((b) => ({ id: b.id, person: b.person, date: b.date, time: b.time, tab: "pending" })), ...current]);
  }, [s.reservations]);
  const mentor = s.role === "mentor", tab = s.bookingTab, allCards = cards, rows = allCards.filter((b) => b.tab === tab);
  const close = () => {
    setAction(null);
    setReply("");
  };
  function perform() {
    if (!action) return;
    const { card, kind } = action;
    setCards((all) => all.map((b) => b.id !== card.id ? b : kind === "\u63A5\u53D7\u9810\u7D04" ? { ...b, tab: "upcoming" } : { ...b, tab: "history", status: kind === "\u5A49\u62D2\u9810\u7D04" ? "\u5DF2\u5A49\u62D2" : "Cancelled" }));
    close();
    toast(kind === "\u63A5\u53D7\u9810\u7D04" ? "\u5DF2\u63A5\u53D7\u9810\u7D04" : kind === "\u5A49\u62D2\u9810\u7D04" ? "\u5DF2\u5A49\u62D2\u9810\u7D04" : "\u5DF2\u53D6\u6D88\u9810\u7D04");
  }
  return /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("main", { className: "booking-page", children: [
    /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("h1", { children: heading || (mentor ? "\u64D4\u4EFB\u5C0E\u5E2B" : "\u9810\u7D04\u5C0E\u5E2B") }),
    /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("div", { className: "booking-tabs", role: "tablist", "aria-label": "\u9810\u7D04\u72C0\u614B", children: [["upcoming", "\u5373\u5C07\u5230\u4F86"], ["pending", mentor ? "\u5F85\u60A8\u56DE\u8986" : "\u7B49\u5F85\u56DE\u8986"], ["history", "\u6B77\u53F2\u7D00\u9304"]].map(([key, label]) => /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("button", { role: "tab", "aria-selected": tab === key, onClick: () => setState((p) => ({ ...p, bookingTab: key })), children: [
      label,
      /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("span", { children: allCards.filter((b) => b.tab === key).length })
    ] }, key)) }),
    /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("div", { className: "booking-list", children: [
      !rows.length && /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("div", { className: "booking-empty", children: [
        /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(CalendarDays, { size: 28 }),
        /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("h2", { children: tab === "pending" ? "\u76EE\u524D\u6C92\u6709\u5F85\u56DE\u8986\u7684\u9810\u7D04" : tab === "upcoming" ? "\u76EE\u524D\u6C92\u6709\u5373\u5C07\u5230\u4F86\u7684\u9810\u7D04" : "\u76EE\u524D\u6C92\u6709\u6B77\u53F2\u7D00\u9304" })
      ] }),
      rows.map((b) => {
        const p = s.people.find((p2) => p2.id === b.person);
        const unlisted = !mentor && b.feedback?.isPublic === false;
        return /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("article", { className: `booking-card booking-${b.tab}`, children: [
          /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("div", { className: "booking-identity", children: [
            /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(Avatar, { person: p }),
            /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("strong", { children: p.name }),
              /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("p", { children: [
                p.role,
                " \xB7 5\u201310 \u5E74\u5DE5\u4F5C\u7D93\u9A57"
              ] })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("div", { className: "booking-status", children: unlisted ? /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)(import_jsx_runtime21.Fragment, { children: [
              /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("span", { className: "status-badge feedback-unlisted-badge", children: "\u8A55\u50F9\u672A\u516C\u958B" }),
              /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(IconButton, { label: expanded === b.id ? "\u6536\u5408\u8A55\u50F9\u672A\u516C\u958B\u8AAA\u660E" : "\u5C55\u958B\u8A55\u50F9\u672A\u516C\u958B\u8AAA\u660E", onClick: () => setExpanded(expanded === b.id ? null : b.id), children: expanded === b.id ? /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(ChevronUp, { size: 16 }) : /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(ChevronDown, { size: 16 }) })
            ] }) : b.status ? /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)(import_jsx_runtime21.Fragment, { children: [
              /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("span", { className: "status-badge", children: b.status }),
              b.feedback && /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(IconButton, { label: expanded === b.id ? "\u6536\u5408\u6703\u8AC7\u7D00\u9304" : "\u5C55\u958B\u6703\u8AC7\u7D00\u9304", onClick: () => setExpanded(expanded === b.id ? null : b.id), children: expanded === b.id ? /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(ChevronUp, { size: 16 }) : /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(ChevronDown, { size: 16 }) })
            ] }) : b.feedback ? /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("button", { className: "text-action", onClick: () => setExpanded(expanded === b.id ? null : b.id), children: [
              mentor ? "\u67E5\u770B\u7D00\u9304" : "\u67E5\u770B\u56DE\u994B",
              expanded === b.id ? /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(ChevronUp, { size: 16 }) : /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(ChevronDown, { size: 16 })
            ] }) : b.tab === "history" ? /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("button", { className: "primary-button", onClick: () => setFeedback(b), children: mentor ? "\u78BA\u8A8D\u6703\u8AC7" : "\u586B\u5BEB\u56DE\u994B" }) : null })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("div", { className: "booking-time", children: [
            /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("span", { children: [
              /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(CalendarDays, { size: 16 }),
              b.date
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("span", { children: [
              /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(Clock, { size: 16 }),
              b.time
            ] })
          ] }),
          expanded === b.id && b.feedback && /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("div", { className: `booking-feedback ${unlisted ? "booking-feedback--unlisted" : ""}`, children: unlisted ? /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)(import_jsx_runtime21.Fragment, { children: [
            /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("strong", { children: "\u8A55\u50F9\u672A\u516C\u958B" }),
            /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("p", { children: [
              "\u9019\u5834\u6703\u8AC7\u5DF2\u88AB\u6A19\u8A3B\u6C92\u6709\u9032\u884C\uFF0C\u56E0\u6B64\u8A55\u50F9\u4E0D\u6703\u516C\u958B\uFF1B\u5982\u6709\u7591\u554F\u53EF\u4EE5\u900F\u904E",
              /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("a", { href: "https://forms.gle/594hMVdTyoR3Pgtg9", target: "_blank", rel: "noopener noreferrer", children: "\u56DE\u994B\u8868\u55AE" }),
              "\u806F\u7E6B\u6211\u5011\u3002"
            ] })
          ] }) : mentor ? b.feedback.reason ? /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)(import_jsx_runtime21.Fragment, { children: [
            /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("strong", { children: "\u6703\u8AC7\u7D00\u9304" }),
            /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("p", { children: b.feedback.reason })
          ] }) : /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("strong", { children: "\u6703\u8AC7\u7D00\u9304" }),
            b.feedback.attendance !== "no" && /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("span", { children: "Session complete" })
          ] }) : b.feedback.reason ? /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)(import_jsx_runtime21.Fragment, { children: [
            /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("strong", { children: "\u6703\u8AC7\u7D00\u9304" }),
            /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("p", { children: b.feedback.reason })
          ] }) : /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)(import_jsx_runtime21.Fragment, { children: [
            /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("strong", { children: "\u6211\u7684\u56DE\u994B" }),
              /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("span", { children: [
                b.feedback.rating,
                " / 10"
              ] })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("p", { children: b.feedback.comment || "\u6C92\u6709\u7559\u4E0B\u6587\u5B57\u56DE\u994B\u3002" })
          ] }) }),
          showHours && mentor && b.tab === "history" && /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("p", { className: "fr-booking-hours", children: [
            "\u8A8D\u5217\u6642\u6578 \xB7 ",
            b.status || !b.feedback ? "0.0" : "0.5",
            " \u5C0F\u6642"
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("div", { className: "booking-actions", children: [
            /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("button", { className: "outline-button contact-booking", disabled: !!p.deleted, onClick: () => contact(b.person, b.id), children: [
              /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(MessageSquare, { size: 16 }),
              mentor ? "\u806F\u7D61\u5B78\u54E1" : "\u806F\u7D61\u5C0E\u5E2B"
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("div", { children: b.tab === "upcoming" ? /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)(import_jsx_runtime21.Fragment, { children: [
              /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("button", { className: "primary-button danger-button", onClick: () => setAction({ card: b, kind: "\u53D6\u6D88\u9810\u7D04" }), children: "\u53D6\u6D88\u9810\u7D04" }),
              /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("button", { className: "primary-button", onClick: () => setAction({ card: b, kind: "\u6703\u8B70\u8CC7\u8A0A" }), children: "\u52A0\u5165 Google Meet" })
            ] }) : b.tab === "pending" ? mentor ? /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)(import_jsx_runtime21.Fragment, { children: [
              /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("button", { className: "outline-button", onClick: () => setAction({ card: b, kind: "\u5A49\u62D2\u9810\u7D04" }), children: "\u5A49\u62D2\u9810\u7D04" }),
              /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("button", { className: "primary-button", onClick: () => setAction({ card: b, kind: "\u63A5\u53D7\u9810\u7D04" }), children: "\u63A5\u53D7\u9810\u7D04" })
            ] }) : /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("button", { className: "primary-button danger-button", onClick: () => setAction({ card: b, kind: "\u53D6\u6D88\u9810\u7D04" }), children: "\u53D6\u6D88\u9810\u7D04" }) : null })
          ] })
        ] }, b.id);
      })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(Modal, { open: !!action, title: action?.kind || "", onClose: close, actions: action && action.kind !== "\u6703\u8B70\u8CC7\u8A0A" ? /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)(import_jsx_runtime21.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("button", { className: "outline-button", onClick: close, children: "\u8FD4\u56DE" }),
      /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("button", { className: `primary-button ${action.kind === "\u53D6\u6D88\u9810\u7D04" || action.kind === "\u5A49\u62D2\u9810\u7D04" ? "danger-button" : ""}`, disabled: action.kind !== "\u63A5\u53D7\u9810\u7D04" && !reply.trim(), onClick: perform, children: action.kind })
    ] }) : null, children: action?.kind === "\u6703\u8B70\u8CC7\u8A0A" ? /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)(import_jsx_runtime21.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("p", { children: [
        action.card.date,
        " \xB7 ",
        action.card.time
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("p", { children: "\u6703\u8B70\u9023\u7D50\u5DF2\u5BC4\u81F3\u60A8\u7684\u4FE1\u7BB1\u3002" })
    ] }) : /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)(import_jsx_runtime21.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("p", { children: action?.kind === "\u63A5\u53D7\u9810\u7D04" ? "\u78BA\u5B9A\u63A5\u53D7\u9019\u5834\u9810\u7D04\uFF1F" : "\u8ACB\u8AAA\u660E" + (action?.kind === "\u5A49\u62D2\u9810\u7D04" ? "\u5A49\u62D2" : "\u53D6\u6D88") + "\u9810\u7D04\u7684\u539F\u56E0\u3002" }),
      action?.kind !== "\u63A5\u53D7\u9810\u7D04" && /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("textarea", { className: "form-textarea", "aria-label": "\u9810\u7D04\u539F\u56E0", placeholder: "\u60A8\u597D\uFF0C\u2026", value: reply, onChange: (e) => setReply(e.target.value) })
    ] }) }),
    feedback && /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(Feedback, { booking: feedback, person: s.people.find((p) => p.id === feedback.person), mentor, close: () => setFeedback(null), save: (value) => {
      setCards((all) => all.map((b) => b.id === feedback.id ? { ...b, feedback: value, status: value.reason || value.attendance === "no" ? "\u672A\u9032\u884C" : void 0 } : b));
      setFeedback(null);
      toast("\u56DE\u994B\u5DF2\u9001\u51FA", "X-Talent \u5DF2\u6536\u5230\u60A8\u7684\u56DE\u994B\uFF0C\u8B1D\u8B1D\u60A8\uFF01");
    } })
  ] });
}
function Feedback({ booking, person, mentor, close, save }) {
  const [step, setStep] = (0, import_react11.useState)(1), [answer, setAnswer] = (0, import_react11.useState)(""), [rating, setRating] = (0, import_react11.useState)(10), [comment, setComment] = (0, import_react11.useState)(""), [reason, setReason] = (0, import_react11.useState)(""), [other, setOther] = (0, import_react11.useState)("");
  const mentorDirectSubmit = mentor && step === 1 && answer !== "no";
  return /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)(Modal, { open: true, title: mentor ? "\u78BA\u8A8D\u6703\u8AC7" : "\u6703\u8AC7\u56DE\u994B", className: "feedback-dialog", onClose: close, children: [
    /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("div", { className: "feedback-person", children: [
      /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(Avatar, { person }),
      /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("strong", { children: person.name }),
        /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("p", { children: [
          booking.date,
          " \xB7 ",
          booking.time
        ] })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("div", { className: "feedback-step", children: [
      "\u6B65\u9A5F ",
      step,
      " / 2 \xB7 ",
      step === 1 ? "\u78BA\u8A8D\u6703\u8AC7" : answer === "yes" ? "\u4EA4\u6D41\u56DE\u994B" : "\u6703\u8AC7\u72C0\u6CC1"
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("h3", { children: [
      step === 1 ? "\u9019\u5834\u6703\u8AC7\u662F\u5426\u9806\u5229\u9032\u884C\uFF1F" : answer === "yes" ? "\u70BA\u672C\u6B21\u6703\u8B70\u8A55\u5206" : "\u672A\u9032\u884C\u6703\u8AC7\u7684\u539F\u56E0",
      step === 2 && answer === "yes" && /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("span", { className: "privacy-info", tabIndex: 0, "aria-label": "\u59D3\u540D\u906E\u7F69\u8AAA\u660E", children: [
        /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(Info, { size: 16 }),
        /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("span", { role: "tooltip", children: "\u986F\u793A\u6642\u4E0D\u6703\u5B8C\u6574\u516C\u958B\u59D3\u540D\u8207\u500B\u4EBA\u8CC7\u6599" })
      ] })
    ] }),
    step === 1 ? /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)(import_jsx_runtime21.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("p", { children: "\u5148\u544A\u8A34\u6211\u5011\u9019\u6B21\u6703\u8AC7\u7684\u72C0\u6CC1\u3002" }),
      /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("div", { className: "choice-row", children: [["yes", "\u6709\u9032\u884C"], ["no", "\u6C92\u6709\u9032\u884C"]].map(([v, l]) => /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("label", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("input", { type: "radio", name: "attended", checked: answer === v, onChange: () => setAnswer(v) }),
        l
      ] }, v)) })
    ] }) : answer === "yes" ? /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)(import_jsx_runtime21.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("p", { children: [
        "\u8A55\u5206 ",
        /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("b", { className: "score", children: rating }),
        " / 10"
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("div", { className: "rating-stars", role: "radiogroup", "aria-label": "\u8A55\u5206", children: Array.from({ length: 10 }, (_, i) => /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("button", { role: "radio", "aria-checked": rating === i + 1, "aria-label": `${i + 1} \u5206`, onClick: () => setRating(i + 1), children: /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(Star, { fill: i < rating ? "currentColor" : "none", size: 24 }) }, i)) }),
      /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("label", { className: "field-label", children: [
        "\u6587\u5B57\u56DE\u994B\uFF08\u9078\u586B\uFF09",
        /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("textarea", { className: "form-textarea", maxLength: 1e3, value: comment, placeholder: "\u5206\u4EAB\u9019\u6B21\u4EA4\u6D41\u7684\u6536\u7A6B\uFF0C\u6216\u7D66\u5C0E\u5E2B\u4E00\u4E9B\u5EFA\u8B70\u2026", onChange: (e) => setComment(e.target.value) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("div", { className: "field-count", children: [
        comment.length,
        " / 1000"
      ] })
    ] }) : /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)(import_jsx_runtime21.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("p", { children: "\u70BA\u4F55\u6C92\u6709\u6210\u529F\u9032\u884C\uFF1F" }),
      /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("div", { className: "reason-options", children: ["\u96D9\u65B9\u6642\u9593\u7121\u6CD5\u914D\u5408", "\u5C0D\u65B9\u672A\u51FA\u5E2D", "\u672A\u6536\u5230\u6216\u932F\u904E\u6703\u8B70\u901A\u77E5", "\u6280\u8853\uFF0F\u9023\u7DDA\u554F\u984C", "\u5176\u4ED6"].map((l) => /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("label", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("input", { type: "radio", name: "reason", checked: reason === l, onChange: () => setReason(l) }),
        l
      ] }, l)) }),
      reason === "\u5176\u4ED6" && /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)(import_jsx_runtime21.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("label", { className: "field-label", children: [
          "\u88DC\u5145\u8AAA\u660E\uFF08\u9078\u586B\uFF09",
          /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("textarea", { className: "form-textarea", maxLength: 1e3, value: other, onChange: (e) => setOther(e.target.value), placeholder: "\u8AAA\u8AAA\u767C\u751F\u4E86\u4EC0\u9EBC\u4E8B\u2026" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("div", { className: "field-count", children: [
          other.length,
          " / 1000"
        ] })
      ] }),
      mentor && /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("div", { className: "feedback-noshow-warning", role: "note", children: [
        /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(Info, { size: 16 }),
        /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("span", { children: "\u9001\u51FA\u5F8C\u4E0D\u80FD\u4FEE\u6539\u3002\u9019\u5834\u6703\u8AC7\u4E0D\u6703\u8A08\u5165\u5DF2\u5B8C\u6210\u5834\u6B21\uFF0C\u5B78\u54E1\u7684\u8A55\u50F9\u4E5F\u4E0D\u6703\u516C\u958B\u3002" })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("div", { className: "feedback-actions", children: [
      step === 2 && /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("button", { className: "text-action", onClick: () => setStep(1), children: "\u4E0A\u4E00\u6B65" }),
      /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("button", { className: "primary-button", disabled: step === 1 ? !answer : answer === "no" && !reason, onClick: () => mentorDirectSubmit ? save({ attendance: "yes" }) : step === 1 ? setStep(2) : save(answer === "yes" ? { rating, comment } : { attendance: "no", reason: reason === "\u5176\u4ED6" && other.trim() ? "\u5176\u4ED6 \xB7 " + other.trim() : reason }), children: mentorDirectSubmit ? "\u78BA\u5B9A\u9001\u51FA" : step === 1 ? /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)(import_jsx_runtime21.Fragment, { children: [
        "\u4E0B\u4E00\u6B65",
        /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(ArrowRight, { size: 16 })
      ] }) : mentor ? "\u9001\u51FA" : "\u9001\u51FA\u56DE\u994B" })
    ] })
  ] });
}

// src/review-state.ts
function startReview(scene2, snapshot, target, entry) {
  if (snapshot?.scene === scene2 && snapshot.state?.people && snapshot.state?.route && snapshot.presentation) return snapshot;
  let state = initialState(scene2);
  const presentation = { noticeOpen: false, openError: scene2 === "open-failure", loginError: scene2 === "login-failure", toast: scene2 === "login-failure" ? { title: "\u767B\u5165\u5931\u6557", body: "\u8ACB\u91CD\u65B0\u767B\u5165\u5F8C\u518D\u8A66\u3002", error: true } : null };
  if (scene2 === "booking-mentor-contact" && entry?.reservation && entry.person) {
    const authorized = authorizeReservationContact(state, entry.person, entry.reservation);
    if (authorized !== state) {
      state = { ...readThread(authorized, entry.person), route: { view: "chat", active: entry.person, origin: "bookings" } };
      if (entry.partner?.trim()) state.people = state.people.map((p) => p.id === entry.person ? { ...p, name: entry.partner.trim().slice(0, 80) } : p);
    }
    return { scene: scene2, state, presentation };
  }
  if (target) {
    state.route = { view: "chat", active: state.people.some((p) => p.id === target) ? target : "invalid", origin: "profile" };
    if (state.route.active !== "invalid") state = readThread(state, target);
    presentation.noticeOpen = false;
    presentation.openError = false;
    presentation.toast = null;
  }
  return { scene: scene2, state, presentation };
}

// src/app.tsx
var import_jsx_runtime22 = __toESM(require_jsx_runtime(), 1);
var params = new URLSearchParams(location.search);
var scene = params.get("scene") || "profile";
var run = params.get("run") || scene + ":" + (params.get("conversation") || "") + ":" + (params.get("reservation") || "") + ":" + (params.get("person") || "");
var storageKey = "xt-chat-v7:" + run + ":" + (params.get("partner") || "");
function restored() {
  let snapshot = null;
  try {
    snapshot = JSON.parse(sessionStorage.getItem(storageKey) || "null");
  } catch {
  }
  const result = startReview(scene, snapshot, params.get("conversation"), { reservation: params.get("reservation"), person: params.get("person"), partner: params.get("partner") });
  const partner = params.get("partner")?.slice(0, 80);
  if (partner && !snapshot && scene !== "booking-mentor-contact" && result.state.role === "mentee") {
    result.state.people[0] = { ...result.state.people[0], name: partner, avatar: "", role: "\u5C0E\u5E2B" };
    result.state.threads.zahra = emptyThread();
    result.state.role = "mentee";
    if (result.state.member) result.state.route = { view: "chat", active: "zahra", origin: "profile" };
  }
  return result;
}
var initialReview = restored();
function App() {
  const [state, setState] = (0, import_react12.useState)(initialReview.state), [noticeOpen, setNoticeOpen] = (0, import_react12.useState)(initialReview.presentation.noticeOpen), [toast, setToast] = (0, import_react12.useState)(initialReview.presentation.toast), [openError, setOpenError] = (0, import_react12.useState)(initialReview.presentation.openError), [loginTarget, setLoginTarget] = (0, import_react12.useState)("zahra"), [loginError, setLoginError] = (0, import_react12.useState)(initialReview.presentation.loginError);
  const stateRef = (0, import_react12.useRef)(state), nextFailure = (0, import_react12.useRef)(scene === "reservation-message-failure" ? "\u7DB2\u8DEF\u9023\u7DDA\u4E2D\u65B7\uFF0C\u8A0A\u606F\u672A\u9001\u51FA\u3002" : null), pendingTimers = (0, import_react12.useRef)([]), toastTimer = (0, import_react12.useRef)(), contactButton = (0, import_react12.useRef)(), storageWarning = (0, import_react12.useRef)(false);
  stateRef.current = state;
  const unread = Object.values(state.threads).filter((t) => t.unread && isEstablished(t)).length;
  const showToast = (title, body = "", error = true) => {
    clearTimeout(toastTimer.current);
    setToast({ title, body, error });
    toastTimer.current = setTimeout(() => setToast(null), 6500);
  };
  const changeRoute = (route, replace = false) => {
    setState((s) => ({ ...s.route.view === "chat" && route.view !== "chat" ? leaveChat(s) : s, route }));
    history[replace ? "replaceState" : "pushState"]({ chatRun: run, route }, "", location.href);
    window.scrollTo(0, 0);
  };
  const go = (view) => changeRoute({ view, active: null, origin: view });
  const openThread = (id, entry = false) => {
    if (stateRef.current.role === "mentor" && !isEstablished(stateRef.current.threads[id]) && !canMessage(stateRef.current, id)) return;
    const current = stateRef.current.route;
    setNoticeOpen(false);
    if (current.view !== "chat") {
      const list = { view: "chat", active: null, origin: current.view };
      history.pushState({ chatRun: run, route: list }, "", location.href);
    }
    const route = { view: "chat", active: id, origin: current.view === "chat" ? current.origin : current.view };
    history[current.view === "chat" && current.active ? "replaceState" : "pushState"]({ chatRun: run, route }, "", location.href);
    setState((s) => ({ ...readThread(s, id), route, ...entry ? { filter: "all", search: "", scroll: 0 } : {} }));
    window.scrollTo(0, 0);
  };
  const bookingFailure = (0, import_react12.useRef)(scene === "reservation-failure");
  const book = (booking, note) => {
    const current = stateRef.current;
    if (bookingFailure.current) {
      bookingFailure.current = false;
      showToast("\u9810\u7D04\u5931\u6557", "\u76EE\u524D\u7121\u6CD5\u5B8C\u6210\u9810\u7D04\uFF0C\u8ACB\u7A0D\u5F8C\u91CD\u8A66\u3002");
      return false;
    }
    const reason = note.trim() ? nextFailure.current : null;
    const next = confirmReservation(current, booking, note, reason || void 0);
    if (next === current) return false;
    if (note.trim()) nextFailure.current = null;
    stateRef.current = next;
    setState(next);
    if (note.trim()) {
      history.pushState({ chatRun: run, route: { view: "chat", active: null, origin: "profile" } }, "", location.href);
      history.pushState({ chatRun: run, route: next.route }, "", location.href);
      window.scrollTo(0, 0);
      if (reason) showToast("\u9810\u7D04\u5DF2\u6210\u7ACB\uFF0C\u7559\u8A00\u50B3\u9001\u5931\u6557", reason);
      else showToast("\u9810\u7D04\u5DF2\u6210\u7ACB", "\u554F\u984C\u5DF2\u9001\u81F3\u8207\u5C0E\u5E2B\u7684\u804A\u804A\u3002", false);
    } else showToast("\u9810\u7D04\u5DF2\u6210\u7ACB", "\u7B49\u5F85\u5C0E\u5E2B\u56DE\u8986\u3002", false);
    return true;
  };
  const back = () => history.back();
  const openInbox = () => {
    setNoticeOpen(false);
    const r = stateRef.current.route;
    if (r.view === "chat") {
      if (r.active) changeRoute({ ...r, active: null }, true);
    } else changeRoute({ view: "chat", active: null, origin: r.view });
    setState((s) => ({ ...s, search: "", filter: "all", scroll: 0 }));
  };
  const contact = (id = "zahra", bookingId) => {
    const current = stateRef.current;
    if (!current.member) {
      setState((s) => ({ ...s, pendingFavorite: false }));
      setLoginTarget(id);
      go("login");
      return;
    }
    const authorized = bookingId ? authorizeReservationContact(current, id, bookingId) : current;
    if (bookingId && authorized === current || !canMessage(authorized, id)) return;
    if (scene === "open-failure" && current.route.view === "profile") {
      contactButton.current = document.activeElement;
      setOpenError(true);
      return;
    }
    if (authorized !== current) {
      stateRef.current = authorized;
      setState(authorized);
    }
    openThread(id, true);
  };
  const toggleFavorite = () => {
    const current = stateRef.current;
    if (!current.member) {
      setLoginTarget("");
      setState((s) => ({ ...s, pendingFavorite: true }));
      go("login");
      return;
    }
    if (scene === "favorite-self" || current.profileMode === "self") {
      showToast("\u7121\u6CD5\u6536\u85CF\u81EA\u5DF1");
      return;
    }
    setState((s) => ({ ...s, favorite: !s.favorite }));
  };
  function send(retryId, textOnly = false) {
    const s = stateRef.current, id = s.route.active, t = id ? s.threads[id] : null;
    if (!id || !t || !canMessage(s, id)) return;
    const retryMessage = retryId ? t.messages.find((m) => m.id === retryId) : null;
    if (!retryMessage && (!t.draft.trim() && !t.files.length)) return;
    const message = retryMessage ? { ...retryMessage, files: textOnly ? [] : retryMessage.files, status: "sending", reason: void 0 } : { id: crypto.randomUUID(), own: true, text: t.draft.trim(), files: t.files, at: now(s), status: "sending", read: false };
    const failedReason = nextFailure.current;
    nextFailure.current = null;
    setState((p) => ({ ...p, threads: { ...p.threads, [id]: { ...p.threads[id], messages: retryId ? p.threads[id].messages.map((m) => m.id === retryId ? message : m) : [...p.threads[id].messages, message] } } }));
    const delay = scene === "sending" ? 2500 : 700;
    pendingTimers.current.push(setTimeout(() => {
      setState((p) => {
        const thread = p.threads[id];
        if (!thread || !thread.messages.some((m) => m.id === message.id)) return p;
        const status = failedReason ? "failed" : "sent";
        return { ...p, threads: { ...p.threads, [id]: { ...thread, messages: thread.messages.map((m) => m.id === message.id ? { ...m, status, at: now(p), reason: failedReason || void 0 } : m), draft: thread.draft.trim() === message.text ? "" : thread.draft, files: thread.files === message.files ? [] : thread.files } } };
      });
      if (failedReason) showToast("\u50B3\u9001\u5931\u6557", failedReason);
    }, delay));
  }
  (0, import_react12.useEffect)(() => {
    try {
      sessionStorage.setItem(storageKey, JSON.stringify({ scene, state, presentation: { noticeOpen, toast, openError, loginError } }));
    } catch {
      if (!storageWarning.current) {
        storageWarning.current = true;
        showToast("\u8349\u7A3F\u7121\u6CD5\u5132\u5B58", "\u672C\u6A5F\u5132\u5B58\u7A7A\u9593\u4E0D\u8DB3\uFF0C\u9644\u4EF6\u8349\u7A3F\u53EF\u80FD\u7121\u6CD5\u5728\u91CD\u65B0\u6574\u7406\u5F8C\u6062\u5FA9\u3002");
      }
    }
  }, [state, noticeOpen, toast, openError, loginError]);
  (0, import_react12.useEffect)(() => {
    window.parent.postMessage({ type: "chat-review-status", route: state.route }, location.origin);
  }, [state]);
  (0, import_react12.useEffect)(() => {
    document.body.classList.toggle("chat-view", state.route.view === "chat");
    window.parent.postMessage({ type: "chat-preview-view", view: state.route.view }, location.origin);
  }, [state.route.view]);
  (0, import_react12.useEffect)(() => {
    if (history.state?.chatRun !== run) {
      const r = stateRef.current.route;
      if (r.view === "chat") {
        history.replaceState({ chatRun: run, route: { view: r.origin, active: null, origin: r.origin } }, "", location.href);
        history.pushState({ chatRun: run, route: { ...r, active: null } }, "", location.href);
        if (r.active) history.pushState({ chatRun: run, route: r }, "", location.href);
      } else history.replaceState({ chatRun: run, route: r }, "", location.href);
    }
    const pop = (e) => {
      if (e.state?.chatRun === run) {
        const route = e.state.route;
        setState((s) => {
          let next = s.route.view === "chat" && route.view !== "chat" ? leaveChat(s) : s;
          if (route.view === "chat" && route.active && route.active !== "invalid") next = readThread(next, route.active);
          return { ...next, route };
        });
        setNoticeOpen(false);
      }
    };
    window.addEventListener("popstate", pop);
    return () => window.removeEventListener("popstate", pop);
  }, []);
  (0, import_react12.useEffect)(() => {
    const events = (e) => {
      if (e.origin !== location.origin || e.source !== parent || e.data?.type !== "chat-review-command") return;
      const { command, id = "emily" } = e.data;
      if (command === "booking-focus") {
        document.querySelector(".mp-calendar")?.scrollIntoView({ block: "start", behavior: "smooth" });
      }
      if (command === "complete-send") setState((s) => {
        const key = s.route.active, t = key ? s.threads[key] : null;
        if (!key || !t) return s;
        const pending = t.messages.filter((m) => m.status === "sending");
        return { ...s, threads: { ...s.threads, [key]: { ...t, messages: t.messages.map((m) => m.status === "sending" ? { ...m, status: "sent", at: now(s) } : m), draft: pending.some((m) => m.text === t.draft.trim()) ? "" : t.draft, files: pending.some((m) => m.files === t.files) ? [] : t.files } } };
      });
      if (command === "receive") {
        setState((s) => receive(s, id));
      }
      if (command === "receive-failed") setState((s) => receive(s, id, true));
      if (command === "read") setState((s) => {
        const key = s.route.active;
        if (!key || !s.threads[key]) return s;
        return { ...s, threads: { ...s.threads, [key]: { ...s.threads[key], messages: s.threads[key].messages.map((m) => m.own && m.status === "sent" ? { ...m, read: true } : m) } } };
      });
      if (command === "fail-next") {
        nextFailure.current = "\u7DB2\u8DEF\u9023\u7DDA\u4E2D\u65B7\uFF0C\u8A0A\u606F\u672A\u9001\u51FA\u3002";
      }
      if (command === "fail-attachment") {
        nextFailure.current = "\u9644\u4EF6\u4E0A\u50B3\u5931\u6557\uFF0C\u6574\u5247\u8A0A\u606F\u5C1A\u672A\u9001\u51FA\u3002";
      }
      if (command === "reload") location.reload();
      if (command === "attachment-samples") setState((s) => {
        const key = s.route.active;
        if (!key || !s.threads[key]) return s;
        return { ...s, threads: { ...s.threads, [key]: { ...s.threads[key], files: [sampleImage, sampleDocument] } } };
      });
      if (command === "invalid-file") showToast("\u7121\u6CD5\u52A0\u5165\u9644\u4EF6", "\u4E0D\u652F\u63F4\u6B64\u6A94\u6848\u683C\u5F0F\uFF0C\u8ACB\u9078\u64C7\u5716\u7247\u3001\u6587\u4EF6\u6216\u58D3\u7E2E\u6A94\u3002");
      if (command === "file-size") showToast("\u7121\u6CD5\u52A0\u5165\u9644\u4EF6", "\u6A94\u6848\u8D85\u51FA\u4E0A\u50B3\u5927\u5C0F\u9650\u5236\uFF0C\u8ACB\u9078\u64C7\u8F03\u5C0F\u7684\u6A94\u6848\u3002");
      if (command === "file-count") showToast("\u7121\u6CD5\u52A0\u5165\u9644\u4EF6", "\u6BCF\u6B21\u6700\u591A\u53EF\u52A0\u5165 10 \u500B\u6A94\u6848\uFF0C\u8ACB\u79FB\u9664\u90E8\u5206\u6A94\u6848\u5F8C\u518D\u8A66\u3002");
      if (command === "logout") {
        setState((s) => ({ ...leaveChat(s), member: false }));
        go("profile");
      }
    };
    window.addEventListener("message", events);
    return () => window.removeEventListener("message", events);
  }, []);
  (0, import_react12.useEffect)(() => () => {
    pendingTimers.current.forEach(clearTimeout);
    clearTimeout(toastTimer.current);
  }, []);
  (0, import_react12.useEffect)(() => {
    const vv = window.visualViewport;
    if (!vv) return;
    const resize = () => document.documentElement.style.setProperty("--usable-vh", `${vv.height}px`);
    resize();
    vv.addEventListener("resize", resize);
    return () => vv.removeEventListener("resize", resize);
  }, []);
  const closeError = () => {
    setOpenError(false);
    requestAnimationFrame(() => (contactButton.current || document.querySelector('[aria-label="\u806F\u7D61\u5C0E\u5E2B"]'))?.focus());
  };
  return /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)(import_jsx_runtime22.Fragment, { children: [
    state.route.view !== "email" && /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(Header, { state, unread, noticeOpen, setNoticeOpen, onMessages: openInbox, onProfile: () => go("profile"), onFind: () => go("pool"), onLogin: () => {
      setState((s) => ({ ...s, pendingFavorite: false }));
      setLoginTarget("");
      go("login");
    }, roleMenuOpen: scene === "role-switch", onRole: (role) => {
      setState((s) => ({ ...s, role }));
      if (role === "mentor" && state.route.view === "chat" && state.route.active && !isEstablished(state.threads[state.route.active]) && !canMessage({ ...state, role }, state.route.active)) changeRoute({ ...state.route, active: null }, true);
    } }),
    state.member && !["chat", "login", "email"].includes(state.route.view) && /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(ChatFab, { unread, onClick: openInbox }),
    /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { hidden: state.route.view !== "profile", children: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(Profile, { favorite: !!state.favorite, onFavorite: toggleFavorite, v2: scene === "profile-v2", reviewCount: scene === "profile-no-reviews" ? 0 : 12, allowBooking: state.member && state.role === "mentee" && state.profileMode === "normal", onBook: book, initialNote: scene.startsWith("reservation-") && scene !== "reservation-empty" ? "\u4F60\u597D\uFF01\u60F3\u8ACB\u6559 UX \u4F5C\u54C1\u96C6\u7684\u6E96\u5099\u65B9\u5411\u3002" : "", allowContact: !state.member || state.role === "mentee", mode: state.profileMode, onContact: () => contact(), onFind: () => go("pool") }) }),
    /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { className: "chat-page", hidden: state.route.view !== "chat", children: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(Chat, { state, setState, open: (id) => openThread(id), back, find: () => go("pool"), send: () => send(), retry: send, toast: showToast }) }),
    /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { hidden: state.route.view !== "bookings", children: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(Bookings, { feedbackUnlisted: scene === "feedback-unlisted", state, setState, contact: (id, bookingId) => contact(id, bookingId), toast: (a, b) => showToast(a, b, false) }) }),
    state.route.view === "login" && /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(Login, { failed: loginError, onCancel: () => {
      setState((s) => ({ ...s, pendingFavorite: false }));
      go("profile");
    }, onSubmit: () => {
      if (scene === "login-failure" && !loginError) {
        setLoginError(true);
        go("profile");
        showToast("\u767B\u5165\u5931\u6557", "\u8ACB\u91CD\u65B0\u767B\u5165\u5F8C\u518D\u8A66\u3002");
        return;
      }
      if (stateRef.current.pendingFavorite) {
        const own = scene === "favorite-self" || stateRef.current.profileMode === "self";
        setState((s) => ({ ...s, member: true, pendingFavorite: false, favorite: !own }));
        go("profile");
        if (own) showToast("\u7121\u6CD5\u6536\u85CF\u81EA\u5DF1");
        return;
      }
      setState((s) => ({ ...s, member: true }));
      if (loginTarget) {
        const origin = { view: "profile", active: null, origin: "profile" };
        history.replaceState({ chatRun: run, route: origin }, "", location.href);
        history.pushState({ chatRun: run, route: { view: "chat", active: null, origin: "profile" } }, "", location.href);
        const route = { view: "chat", active: loginTarget, origin: "profile" };
        history.pushState({ chatRun: run, route }, "", location.href);
        setState((s) => ({ ...readThread(s, loginTarget), member: true, route }));
      } else go("profile");
    } }),
    state.route.view === "pool" && /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(MentorPool, { onSelect: () => {
      setState((s) => ({ ...s, profileMode: "normal" }));
      go("profile");
    } }),
    toast && /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: `app-toast ${toast.error ? "is-error" : ""}`, role: toast.error ? "alert" : "status", children: [
      /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("strong", { children: toast.title }),
      toast.body && /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("p", { children: toast.body }),
      /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("button", { "aria-label": "\u95DC\u9589\u901A\u77E5", onClick: () => setToast(null), children: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(X, { size: 20 }) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(Modal, { open: openError, title: "\u7121\u6CD5\u958B\u555F\u5C0D\u8A71", onClose: closeError, actions: /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)(import_jsx_runtime22.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("a", { className: "outline-button", href: "https://forms.gle/594hMVdTyoR3Pgtg9", target: "_blank", rel: "noreferrer", children: "\u56DE\u5831\u554F\u984C" }),
      /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("button", { className: "primary-button", onClick: closeError, children: "\u91CD\u8A66" })
    ] }), children: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("p", { children: "\u76EE\u524D\u7121\u6CD5\u958B\u555F\u5C0D\u8A71\uFF0C\u8ACB\u91CD\u65B0\u9EDE\u64CA\u806F\u7D61\u5C0E\u5E2B\uFF0C\u6216\u7A0D\u5F8C\u518D\u8A66\u3002" }) })
  ] });
}
function Login({ failed, onSubmit, onCancel }) {
  const [email, setEmail] = (0, import_react12.useState)("alex.chen@example.com"), [password, setPassword] = (0, import_react12.useState)("prototype"), [show, setShow] = (0, import_react12.useState)(false);
  return /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("main", { className: "login-page", children: [
    /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("h1", { children: "\u767B\u5165 X-Talent \u5E33\u6236" }),
    /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("form", { onSubmit: (e) => {
      e.preventDefault();
      onSubmit();
    }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("label", { children: [
        "\u96FB\u5B50\u90F5\u4EF6",
        /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("input", { type: "email", autoComplete: "off", required: true, value: email, onChange: (e) => setEmail(e.target.value) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("label", { children: [
        "\u5BC6\u78BC",
        /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "password-field", children: [
          /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("input", { type: show ? "text" : "password", autoComplete: "off", required: true, value: password, onChange: (e) => setPassword(e.target.value) }),
          /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(IconButton, { label: show ? "\u96B1\u85CF\u5BC6\u78BC" : "\u986F\u793A\u5BC6\u78BC", onClick: () => setShow(!show), children: show ? /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(EyeOff, { size: 18 }) : /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(Eye, { size: 18 }) })
        ] })
      ] }),
      failed && /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("p", { className: "field-error", role: "alert", children: "\u767B\u5165\u5931\u6557\uFF0C\u8ACB\u78BA\u8A8D\u5E33\u865F\u5BC6\u78BC\u5F8C\u518D\u8A66\u4E00\u6B21\u3002" }),
      /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("button", { className: "primary-button", type: "submit", children: "\u767B\u5165" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { className: "login-divider", children: "\u6216" }),
    /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("button", { className: "outline-button google-signin", onClick: onSubmit, children: "\u4F7F\u7528 Google \u5E33\u865F\u767B\u5165" }),
    /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("button", { className: "text-action", onClick: onCancel, children: "\u53D6\u6D88\uFF0C\u8FD4\u56DE\u5C0E\u5E2B\u500B\u4EBA\u9801" })
  ] });
}
function MentorPool({ onSelect }) {
  const [search, setSearch] = (0, import_react12.useState)(""), [query, setQuery] = (0, import_react12.useState)(""), [saved, setSaved] = (0, import_react12.useState)(false);
  const found = !query || "Zahra Mirzakhani Senior UX Designer CreativeUX Design Studio".toLowerCase().includes(query.toLowerCase().trim());
  return /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("main", { className: "f753", children: [
    /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("section", { className: "f753-hero", children: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("h1", { children: "\u548C Mentors \u4E00\u8D77\u63D0\u5347\u4F60\u7684\u8077\u6DAF\u7D93\u9A57\u5427\uFF01" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("form", { className: "f753-search", onSubmit: (e) => {
      e.preventDefault();
      setQuery(search);
    }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(Search, { size: 22 }),
      /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("input", { "aria-label": "\u641C\u5C0B\u8077\u4F4D\u3001\u516C\u53F8\u6216\u9818\u57DF", placeholder: "\u641C\u5C0B\u8077\u4F4D\u3001\u516C\u53F8\u6216\u9818\u57DF", value: search, onChange: (e) => setSearch(e.target.value) }),
      /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("button", { className: "f753-primary", children: "\u641C\u5C0B" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "f753-list chat-pool-list", children: [
      /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("p", { className: "f753-count", children: [
        "\u627E\u5230 ",
        found ? 1 : 0,
        " \u4F4D\u5C0E\u5E2B"
      ] }),
      found && /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { className: "f753-grid", children: /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("article", { className: "f753-card", children: [
        /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("a", { className: "f753-card-main", href: "?scene=profile", onClick: (e) => {
          e.preventDefault();
          onSelect();
        }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "f753-image", children: [
            /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("img", { className: "f753-photo", src: asset("zahra.png"), alt: "Zahra Mirzakhani" }),
            /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("span", { className: "f753-experience", children: "5\u201310 \u5E74\u5DE5\u4F5C\u7D93\u9A57" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "f753-card-body", children: [
            /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "f753-card-heading", children: [
              /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("h2", { children: "Zahra Mirzakhani" }),
              /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("strong", { className: "f753-rating", children: "8.5 / 10" })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { className: "f753-role", children: "Senior UX Designer \xB7 CreativeUX Design Studio" }),
            /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { className: "f753-completed", children: "\u5DF2\u5B8C\u6210 128 \u5834 1-on-1" }),
            /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("p", { children: "\u900F\u904E\u7814\u7A76\u8207\u8A2D\u8A08\uFF0C\u5E6B\u52A9\u4F60\u91D0\u6E05\u8077\u6DAF\u65B9\u5411\u8207\u4F5C\u54C1\u96C6\u7684\u4E0B\u4E00\u6B65\u3002" }),
            /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "f753-tags", children: [
              /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("span", { children: "UI Design" }),
              /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("span", { children: "UX Design" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("button", { className: "f753-bookmark", "aria-label": "\u6536\u85CF\u5C0E\u5E2B", "aria-pressed": saved, onClick: () => setSaved(!saved), children: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(Bookmark, { size: 20, fill: saved ? "currentColor" : "none" }) })
      ] }) })
    ] })
  ] });
}
document.getElementById("root").dataset.scene = scene;
(0, import_client.createRoot)(document.getElementById("root")).render(/* @__PURE__ */ (0, import_jsx_runtime22.jsx)(App, {}));
/*! Bundled license information:

react/cjs/react.production.min.js:
  (**
   * @license React
   * react.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

scheduler/cjs/scheduler.production.min.js:
  (**
   * @license React
   * scheduler.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom.production.min.js:
  (**
   * @license React
   * react-dom.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react/cjs/react-jsx-runtime.production.min.js:
  (**
   * @license React
   * react-jsx-runtime.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/shared/src/utils.js:
lucide-react/dist/esm/defaultAttributes.js:
lucide-react/dist/esm/Icon.js:
lucide-react/dist/esm/createLucideIcon.js:
lucide-react/dist/esm/icons/arrow-down.js:
lucide-react/dist/esm/icons/arrow-left.js:
lucide-react/dist/esm/icons/arrow-right.js:
lucide-react/dist/esm/icons/arrow-up-right.js:
lucide-react/dist/esm/icons/arrow-up.js:
lucide-react/dist/esm/icons/bell.js:
lucide-react/dist/esm/icons/bookmark.js:
lucide-react/dist/esm/icons/briefcase-business.js:
lucide-react/dist/esm/icons/calendar-days.js:
lucide-react/dist/esm/icons/check.js:
lucide-react/dist/esm/icons/chevron-down.js:
lucide-react/dist/esm/icons/chevron-left.js:
lucide-react/dist/esm/icons/chevron-right.js:
lucide-react/dist/esm/icons/chevron-up.js:
lucide-react/dist/esm/icons/circle-alert.js:
lucide-react/dist/esm/icons/clock-3.js:
lucide-react/dist/esm/icons/clock.js:
lucide-react/dist/esm/icons/download.js:
lucide-react/dist/esm/icons/ellipsis.js:
lucide-react/dist/esm/icons/eye-off.js:
lucide-react/dist/esm/icons/eye.js:
lucide-react/dist/esm/icons/file-archive.js:
lucide-react/dist/esm/icons/file-image.js:
lucide-react/dist/esm/icons/file-spreadsheet.js:
lucide-react/dist/esm/icons/file-text.js:
lucide-react/dist/esm/icons/file.js:
lucide-react/dist/esm/icons/graduation-cap.js:
lucide-react/dist/esm/icons/info.js:
lucide-react/dist/esm/icons/loader-circle.js:
lucide-react/dist/esm/icons/map-pin.js:
lucide-react/dist/esm/icons/message-circle-more.js:
lucide-react/dist/esm/icons/message-circle.js:
lucide-react/dist/esm/icons/message-square.js:
lucide-react/dist/esm/icons/paperclip.js:
lucide-react/dist/esm/icons/pencil.js:
lucide-react/dist/esm/icons/rotate-ccw.js:
lucide-react/dist/esm/icons/search.js:
lucide-react/dist/esm/icons/send-horizontal.js:
lucide-react/dist/esm/icons/smile.js:
lucide-react/dist/esm/icons/star.js:
lucide-react/dist/esm/icons/trash-2.js:
lucide-react/dist/esm/icons/users-round.js:
lucide-react/dist/esm/icons/x.js:
lucide-react/dist/esm/lucide-react.js:
  (**
   * @license lucide-react v0.468.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)
*/
