import type { ChatOptions } from '@n8n/chat/types';
export declare function loadPreviousSession(sessionId: string, options: ChatOptions): Promise<any>;
export declare function sendMessage(message: string, sessionId: string, options: ChatOptions): Promise<any>;
