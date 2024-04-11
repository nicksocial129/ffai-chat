"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _chat = require("./chat");
Object.keys(_chat).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _chat[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _chat[key];
    }
  });
});