"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _defaults = require("./defaults");
Object.keys(_defaults).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _defaults[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _defaults[key];
    }
  });
});
var _localStorage = require("./localStorage");
Object.keys(_localStorage).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _localStorage[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _localStorage[key];
    }
  });
});
var _symbols = require("./symbols");
Object.keys(_symbols).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _symbols[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _symbols[key];
    }
  });
});