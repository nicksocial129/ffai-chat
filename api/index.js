"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _generic = require("./generic");
Object.keys(_generic).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _generic[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _generic[key];
    }
  });
});
var _message = require("./message");
Object.keys(_message).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _message[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _message[key];
    }
  });
});