export const defaultOptions = {
  webhookUrl: "http://localhost:5678",
  webhookConfig: {
    method: "POST",
    headers: {}
  },
  target: "#n8n-chat",
  mode: "window",
  loadPreviousSession: true,
  chatInputKey: "chatInput",
  chatSessionKey: "sessionId",
  defaultLanguage: "en",
  showWelcomeScreen: false,
  initialMessages: ["Hi there! \u{1F44B}", "My name is Nathan. How can I assist you today?"],
  i18n: {
    en: {
      title: "Hi there! \u{1F44B}",
      subtitle: "Start a chat. We're here to help you 24/7.",
      footer: "",
      getStarted: "New Conversation",
      inputPlaceholder: "Type your question.."
    }
  },
  theme: {}
};
export const defaultMountingTarget = "#n8n-chat";