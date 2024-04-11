"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _eventBus = require("./event-bus");
Object.keys(_eventBus).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _eventBus[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _eventBus[key];
    }
  });
});
var _mount = require("./mount");
Object.keys(_mount).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _mount[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _mount[key];
    }
  });
});