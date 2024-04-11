"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _useChat = require("./useChat");
Object.keys(_useChat).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _useChat[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _useChat[key];
    }
  });
});
var _useI18n = require("./useI18n");
Object.keys(_useI18n).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _useI18n[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _useI18n[key];
    }
  });
});
var _useOptions = require("./useOptions");
Object.keys(_useOptions).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _useOptions[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _useOptions[key];
    }
  });
});