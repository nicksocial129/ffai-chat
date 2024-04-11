"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadPreviousSession = loadPreviousSession;
exports.sendMessage = sendMessage;
var _generic = require("@n8n/chat/api/generic");
async function loadPreviousSession(sessionId, options) {
  const method = options.webhookConfig?.method === "POST" ? _generic.post : _generic.get;
  return await method(`${options.webhookUrl}`, {
    action: "loadPreviousSession",
    [options.chatSessionKey]: sessionId,
    ...(options.metadata ? {
      metadata: options.metadata
    } : {})
  }, {
    headers: options.webhookConfig?.headers
  });
}
async function sendMessage(message, sessionId, options) {
  const method = options.webhookConfig?.method === "POST" ? _generic.post : _generic.get;
  return await method(`${options.webhookUrl}`, {
    action: "sendMessage",
    [options.chatSessionKey]: sessionId,
    [options.chatInputKey]: message,
    ...(options.metadata ? {
      metadata: options.metadata
    } : {})
  }, {
    headers: options.webhookConfig?.headers
  });
}