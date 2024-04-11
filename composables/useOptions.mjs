import { inject } from "vue";
import { ChatOptionsSymbol } from "@n8n/chat/constants";
export function useOptions() {
  const options = inject(ChatOptionsSymbol);
  return {
    options
  };
}
