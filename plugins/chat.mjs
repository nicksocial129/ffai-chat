import { computed, nextTick, ref } from "vue";
import { v4 as uuidv4 } from "uuid";
import { chatEventBus } from "@n8n/chat/event-buses";
import * as api from "@n8n/chat/api";
import { ChatOptionsSymbol, ChatSymbol, localStorageSessionIdKey } from "@n8n/chat/constants";
export const ChatPlugin = {
  install(app, options) {
    app.provide(ChatOptionsSymbol, options);
    const messages = ref([]);
    const currentSessionId = ref(null);
    const waitingForResponse = ref(false);
    const initialMessages = computed(
      () => (options.initialMessages ?? []).map((text) => ({
        id: uuidv4(),
        text,
        sender: "bot",
        createdAt: (/* @__PURE__ */ new Date()).toISOString()
      }))
    );
    async function sendMessage(text) {
      const sentMessage = {
        id: uuidv4(),
        text,
        sender: "user",
        createdAt: (/* @__PURE__ */ new Date()).toISOString()
      };
      messages.value.push(sentMessage);
      waitingForResponse.value = true;
      void nextTick(() => {
        chatEventBus.emit("scrollToBottom");
      });
      const sendMessageResponse = await api.sendMessage(
        text,
        currentSessionId.value,
        options
      );
      let textMessage = sendMessageResponse.output ?? sendMessageResponse.text ?? "";
      if (textMessage === "" && Object.keys(sendMessageResponse).length > 0) {
        try {
          textMessage = JSON.stringify(sendMessageResponse, null, 2);
        } catch (e) {
        }
      }
      const receivedMessage = {
        id: uuidv4(),
        text: textMessage,
        sender: "bot",
        createdAt: (/* @__PURE__ */ new Date()).toISOString()
      };
      messages.value.push(receivedMessage);
      waitingForResponse.value = false;
      void nextTick(() => {
        chatEventBus.emit("scrollToBottom");
      });
    }
    async function loadPreviousSession() {
      if (!options.loadPreviousSession) {
        return;
      }
      const sessionId = localStorage.getItem(localStorageSessionIdKey) ?? uuidv4();
      const previousMessagesResponse = await api.loadPreviousSession(sessionId, options);
      const timestamp = (/* @__PURE__ */ new Date()).toISOString();
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
      currentSessionId.value = uuidv4();
      localStorage.setItem(localStorageSessionIdKey, currentSessionId.value);
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
    app.provide(ChatSymbol, chatStore);
    app.config.globalProperties.$chat = chatStore;
  }
};
