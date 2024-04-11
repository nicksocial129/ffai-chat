"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ChatPlugin = void 0;
var _vue = require("vue");
var _uuid = require("uuid");
var _eventBuses = require("@n8n/chat/event-buses");
var api = _interopRequireWildcard(require("@n8n/chat/api"));
var _constants = require("@n8n/chat/constants");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const ChatPlugin = exports.ChatPlugin = {
  install(app, options) {
    app.provide(_constants.ChatOptionsSymbol, options);
    const messages = (0, _vue.ref)([]);
    const currentSessionId = (0, _vue.ref)(null);
    const waitingForResponse = (0, _vue.ref)(false);
    const initialMessages = (0, _vue.computed)(() => (options.initialMessages ?? []).map(text => ({
      id: (0, _uuid.v4)(),
      text,
      sender: "bot",
      createdAt: /* @__PURE__ */new Date().toISOString()
    })));
    async function sendMessage(text) {
      const sentMessage = {
        id: (0, _uuid.v4)(),
        text,
        sender: "user",
        createdAt: /* @__PURE__ */new Date().toISOString()
      };
      messages.value.push(sentMessage);
      waitingForResponse.value = true;
      void (0, _vue.nextTick)(() => {
        _eventBuses.chatEventBus.emit("scrollToBottom");
      });
      const sendMessageResponse = await api.sendMessage(text, currentSessionId.value, options);
      let textMessage = sendMessageResponse.output ?? sendMessageResponse.text ?? "";
      if (textMessage === "" && Object.keys(sendMessageResponse).length > 0) {
        try {
          textMessage = JSON.stringify(sendMessageResponse, null, 2);
        } catch (e) {}
      }
      const receivedMessage = {
        id: (0, _uuid.v4)(),
        text: textMessage,
        sender: "bot",
        createdAt: /* @__PURE__ */new Date().toISOString()
      };
      messages.value.push(receivedMessage);
      waitingForResponse.value = false;
      void (0, _vue.nextTick)(() => {
        _eventBuses.chatEventBus.emit("scrollToBottom");
      });
    }
    async function loadPreviousSession() {
      if (!options.loadPreviousSession) {
        return;
      }
      const sessionId = localStorage.getItem(_constants.localStorageSessionIdKey) ?? (0, _uuid.v4)();
      const previousMessagesResponse = await api.loadPreviousSession(sessionId, options);
      const timestamp = /* @__PURE__ */new Date().toISOString();
      messages.value = (previousMessagesResponse?.data || []).map((message, index) => ({
        id: `${index}`,
        text: message.kwargs.content,
        sender: message.id.includes("HumanMessage") ? "user" : "bot",
        createdAt: timestamp
      }));
      if (messages.value.length) {
        currentSessionId.value = sessionId;
      }
      return sessionId;
    }
    async function startNewSession() {
      currentSessionId.value = (0, _uuid.v4)();
      localStorage.setItem(_constants.localStorageSessionIdKey, currentSessionId.value);
    }
    const chatStore = {
      initialMessages,
      messages,
      currentSessionId,
      waitingForResponse,
      loadPreviousSession,
      startNewSession,
      sendMessage
    };
    app.provide(_constants.ChatSymbol, chatStore);
    app.config.globalProperties.$chat = chatStore;
  }
};