"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useChat = useChat;
var _vue = require("vue");
var _constants = require("@n8n/chat/constants");
function useChat() {
  return (0, _vue.inject)(_constants.ChatSymbol);
}