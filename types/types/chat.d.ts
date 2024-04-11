import type { Ref } from 'vue';
import type { ChatMessage } from './messages';
export interface Chat {
    initialMessages: Ref<ChatMessage[]>;
    messages: Ref<ChatMessage[]>;
    currentSessionId: Ref<string | null>;
    waitingForResponse: Ref<boolean>;
    loadPreviousSession: () => Promise<string | undefined>;
    startNewSession: () => Promise<void>;
    sendMessage: (text: string) => Promise<void>;
}
