"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useOptions = useOptions;
var _vue = require("vue");
var _constants = require("@n8n/chat/constants");
function useOptions() {
  const options = (0, _vue.inject)(_constants.ChatOptionsSymbol);
  return {
    options
  };
}