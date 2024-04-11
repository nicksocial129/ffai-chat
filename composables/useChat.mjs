import { inject } from "vue";
import { ChatSymbol } from "@n8n/chat/constants";
export function useChat() {
  return inject(ChatSymbol);
}
