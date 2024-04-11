"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createTestChat = createTestChat;
var _index = require("@n8n/chat/index");
function createTestChat(options = {}) {
  const app = (0, _index.createChat)(options);
  const container = app._container;
  const unmount = () => app.unmount();
  return {
    unmount,
    container
  };
}