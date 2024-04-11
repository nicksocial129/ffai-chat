"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getChatInput = getChatInput;
exports.getChatInputSendButton = getChatInputSendButton;
exports.getChatInputTextarea = getChatInputTextarea;
exports.getChatMessage = getChatMessage;
exports.getChatMessageByText = getChatMessageByText;
exports.getChatMessageTyping = getChatMessageTyping;
exports.getChatMessages = getChatMessages;
exports.getChatWindowToggle = getChatWindowToggle;
exports.getChatWindowWrapper = getChatWindowWrapper;
exports.getChatWrapper = getChatWrapper;
exports.getGetStartedButton = getGetStartedButton;
exports.getMountingTarget = getMountingTarget;
var _vue = require("@testing-library/vue");
var _constants = require("@n8n/chat/constants");
function getMountingTarget(target = _constants.defaultMountingTarget) {
  return document.querySelector(target);
}
function getChatWindowWrapper() {
  return document.querySelector(".chat-window-wrapper");
}
function getChatWindowToggle() {
  return document.querySelector(".chat-window-toggle");
}
function getChatWrapper() {
  return document.querySelector(".chat-wrapper");
}
function getChatMessages() {
  return document.querySelectorAll(".chat-message:not(.chat-message-typing)");
}
function getChatMessage(index) {
  const messages = getChatMessages();
  return index < 0 ? messages[messages.length + index] : messages[index];
}
function getChatMessageByText(text) {
  return _vue.screen.queryByText(text, {
    selector: ".chat-message:not(.chat-message-typing) .chat-message-markdown p"
  });
}
function getChatMessageTyping() {
  return document.querySelector(".chat-message-typing");
}
function getGetStartedButton() {
  return document.querySelector(".chat-get-started .chat-button");
}
function getChatInput() {
  return document.querySelector(".chat-input");
}
function getChatInputTextarea() {
  return document.querySelector(".chat-input textarea");
}
function getChatInputSendButton() {
  return document.querySelector(".chat-input .chat-input-send-button");
}