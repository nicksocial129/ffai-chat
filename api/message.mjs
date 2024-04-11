import { get, post } from "@n8n/chat/api/generic";
export async function loadPreviousSession(sessionId, options) {
  const method = options.webhookConfig?.method === "POST" ? post : get;
  return await method(
    `${options.webhookUrl}`,
    {
      action: "loadPreviousSession",
      [options.chatSessionKey]: sessionId,
      ...options.metadata ? { metadata: options.metadata } : {}
    },
    {
      headers: options.webhookConfig?.headers
    }
  );
}
export async function sendMessage(message, sessionId, options) {
  const method = options.webhookConfig?.method === "POST" ? post : get;
  return await method(
    `${options.webhookUrl}`,
    {
      action: "sendMessage",
      [options.chatSessionKey]: sessionId,
      [options.chatInputKey]: message,
      ...options.metadata ? { metadata: options.metadata } : {}
    },
    {
      headers: options.webhookConfig?.headers
    }
  );
}
