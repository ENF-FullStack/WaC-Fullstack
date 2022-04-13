(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var _es6module = require("./es6module");

var _obj;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

console.log("Some ES6 features", _es6module.PI); // Working with function parameters

(0, _es6module.test)();
(0, _es6module.test)(1, 2, 3, 4); // Array spread

var ar = [5, 6, 7, 8, 9];

_es6module.test.apply(void 0, ar); // Array match


var a = ar[0],
    b = ar[1];
console.log(a, b);
(0, _es6module.arrayMatch)(ar); // New features for object literals

var prop = "z",
    q = 12;
var obj = (_obj = {
  x: 10,
  y: 17
}, _defineProperty(_obj, prop, 9), _defineProperty(_obj, "q", q), _obj);
obj["q"] = 4;
console.log(obj); // Object match

var x = obj.x;
console.log(x);
(0, _es6module.objectMatch)(obj);
var s = "Many\nlines\nand a variable ".concat(obj.y);
console.log("String interpolation", s);

},{"./es6module":2}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.test = test;
exports.arrayMatch = arrayMatch;
exports.objectMatch = objectMatch;
exports.PI = void 0;

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

// consts
var PI = 3.14; // Default values for parameters, rest-parameters

exports.PI = PI;

function test(a) {
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;

  for (var _len = arguments.length, rest = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    rest[_key - 2] = arguments[_key];
  }

  console.log("test", a, b, rest);
} // As the name says


function arrayMatch(_ref) {
  var _ref2 = _slicedToArray(_ref, 2),
      a = _ref2[0],
      b = _ref2[1];

  console.log("ArrayMatch", a, b);
} // As the name says


function objectMatch(_ref3) {
  var y = _ref3.y;
  console.log("ObjectMatch", y);
}

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJqc2Fkdi9lczZtYWluLmpzIiwianNhZHYvZXM2bW9kdWxlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNTQTs7Ozs7O0FBRUEsT0FBTyxDQUFDLEdBQVIsQ0FBWSxtQkFBWixFQUFnQyxhQUFoQyxFLENBRUE7O0FBQ0E7QUFDQSxxQkFBSyxDQUFMLEVBQU8sQ0FBUCxFQUFTLENBQVQsRUFBVyxDQUFYLEUsQ0FFQTs7QUFDQSxJQUFJLEVBQUUsR0FBQyxDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxFQUFPLENBQVAsRUFBUyxDQUFULENBQVA7O0FBQ0EsOEJBQVEsRUFBUixFLENBRUE7OztJQUNLLEMsR0FBSyxFO0lBQUgsQyxHQUFHLEU7QUFDVixPQUFPLENBQUMsR0FBUixDQUFZLENBQVosRUFBYyxDQUFkO0FBQ0EsMkJBQVcsRUFBWCxFLENBRUE7O0FBQ0EsSUFBSSxJQUFJLEdBQUMsR0FBVDtBQUFBLElBQWEsQ0FBQyxHQUFDLEVBQWY7QUFDQSxJQUFJLEdBQUc7QUFBRSxFQUFBLENBQUMsRUFBQyxFQUFKO0FBQU8sRUFBQSxDQUFDLEVBQUM7QUFBVCx5QkFBYSxJQUFiLEVBQW1CLENBQW5CLDhCQUFxQixDQUFyQixRQUFQO0FBQ0EsR0FBRyxDQUFDLEdBQUQsQ0FBSCxHQUFTLENBQVQ7QUFDQSxPQUFPLENBQUMsR0FBUixDQUFZLEdBQVosRSxDQUVBOztJQUNLLEMsR0FBRyxHLENBQUgsQztBQUNMLE9BQU8sQ0FBQyxHQUFSLENBQVksQ0FBWjtBQUNBLDRCQUFZLEdBQVo7QUFFQSxJQUFJLENBQUMseUNBRVksR0FBRyxDQUFDLENBRmhCLENBQUw7QUFHQSxPQUFPLENBQUMsR0FBUixDQUFZLHNCQUFaLEVBQW1DLENBQW5DOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkNBO0FBQ08sSUFBTSxFQUFFLEdBQUMsSUFBVCxDLENBRVA7Ozs7QUFDTyxTQUFTLElBQVQsQ0FBYyxDQUFkLEVBQTRCO0FBQUEsTUFBWixDQUFZLHVFQUFWLENBQVU7O0FBQUEsb0NBQUwsSUFBSztBQUFMLElBQUEsSUFBSztBQUFBOztBQUMvQixFQUFBLE9BQU8sQ0FBQyxHQUFSLENBQVksTUFBWixFQUFtQixDQUFuQixFQUFxQixDQUFyQixFQUF1QixJQUF2QjtBQUNILEMsQ0FFRDs7O0FBQ08sU0FBUyxVQUFULE9BQTBCO0FBQUE7QUFBQSxNQUFMLENBQUs7QUFBQSxNQUFILENBQUc7O0FBQzdCLEVBQUEsT0FBTyxDQUFDLEdBQVIsQ0FBWSxZQUFaLEVBQXlCLENBQXpCLEVBQTJCLENBQTNCO0FBQ0gsQyxDQUVEOzs7QUFDTyxTQUFTLFdBQVQsUUFBeUI7QUFBQSxNQUFILENBQUcsU0FBSCxDQUFHO0FBQzVCLEVBQUEsT0FBTyxDQUFDLEdBQVIsQ0FBWSxhQUFaLEVBQTBCLENBQTFCO0FBQ0giLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCIvKlxyXG5UaGlzIGZpbGUgYW5kIGVzNm1vZHVsZS5qcyBkZW1vbnN0cmF0ZXMgc29tZSBvZiB0aGUgZmVhdHVyZXMgb2YgRVM2LlxyXG5cclxuWW91ciB0YXNrIGlzIHRvIGNyZWF0ZSBhIG5ldyBndWxwLXRhc3QgdG8gZ3VscGZpbGUuanMgdGhhdCBjb21waWxlcyB0aGlzIGludG8gXCJlczYuYnVuZGxlLmpzXCIgYW5kIGNhbiBiZSBydW4gdGhyb3VnaCBub2RlOlxyXG4+IG5vZGUgZXM1LmJ1bmRsZS5qc1xyXG5cclxuWW91IGNhbiBzdGFydCBieSBtYWtpbmcgYSBjb3B5IG9mIGpzeC10YXNrIGFuZCB0aGVuIG1vZGlmeWluZyB0aGUgY29weSBzbGlnaHRseS5cclxuKi9cclxuXHJcbmltcG9ydCB7UEksdGVzdCxhcnJheU1hdGNoLG9iamVjdE1hdGNofSBmcm9tICcuL2VzNm1vZHVsZSc7XHJcblxyXG5jb25zb2xlLmxvZyhcIlNvbWUgRVM2IGZlYXR1cmVzXCIsUEkpO1xyXG5cclxuLy8gV29ya2luZyB3aXRoIGZ1bmN0aW9uIHBhcmFtZXRlcnNcclxudGVzdCgpO1xyXG50ZXN0KDEsMiwzLDQpO1xyXG5cclxuLy8gQXJyYXkgc3ByZWFkXHJcbmxldCBhcj1bNSw2LDcsOCw5XTtcclxudGVzdCguLi5hcik7XHJcblxyXG4vLyBBcnJheSBtYXRjaFxyXG5sZXQgW2EsYl09YXI7XHJcbmNvbnNvbGUubG9nKGEsYik7XHJcbmFycmF5TWF0Y2goYXIpO1xyXG5cclxuLy8gTmV3IGZlYXR1cmVzIGZvciBvYmplY3QgbGl0ZXJhbHNcclxubGV0IHByb3A9XCJ6XCIscT0xMjtcclxubGV0IG9iaj17eDoxMCx5OjE3LFtwcm9wXTo5LHF9O1xyXG5vYmpbXCJxXCJdPTQ7XHJcbmNvbnNvbGUubG9nKG9iaik7XHJcblxyXG4vLyBPYmplY3QgbWF0Y2hcclxubGV0IHt4fT1vYmo7XHJcbmNvbnNvbGUubG9nKHgpO1xyXG5vYmplY3RNYXRjaChvYmopO1xyXG5cclxubGV0IHM9YE1hbnlcclxubGluZXNcclxuYW5kIGEgdmFyaWFibGUgJHtvYmoueX1gO1xyXG5jb25zb2xlLmxvZyhcIlN0cmluZyBpbnRlcnBvbGF0aW9uXCIscyk7XHJcbiIsIlxyXG4vLyBjb25zdHNcclxuZXhwb3J0IGNvbnN0IFBJPTMuMTQ7XHJcblxyXG4vLyBEZWZhdWx0IHZhbHVlcyBmb3IgcGFyYW1ldGVycywgcmVzdC1wYXJhbWV0ZXJzXHJcbmV4cG9ydCBmdW5jdGlvbiB0ZXN0KGEsYj0yLC4uLnJlc3Qpe1xyXG4gICAgY29uc29sZS5sb2coXCJ0ZXN0XCIsYSxiLHJlc3QpO1xyXG59XHJcblxyXG4vLyBBcyB0aGUgbmFtZSBzYXlzXHJcbmV4cG9ydCBmdW5jdGlvbiBhcnJheU1hdGNoKFthLGJdKXtcclxuICAgIGNvbnNvbGUubG9nKFwiQXJyYXlNYXRjaFwiLGEsYik7XHJcbn1cclxuXHJcbi8vIEFzIHRoZSBuYW1lIHNheXNcclxuZXhwb3J0IGZ1bmN0aW9uIG9iamVjdE1hdGNoKHt5fSl7XHJcbiAgICBjb25zb2xlLmxvZyhcIk9iamVjdE1hdGNoXCIseSk7XHJcbn0iXX0=
