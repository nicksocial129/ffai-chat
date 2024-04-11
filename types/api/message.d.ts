import type { ChatOptions, LoadPreviousSessionResponse, SendMessageResponse } from '../types';
export declare function loadPreviousSession(sessionId: string, options: ChatOptions): Promise<LoadPreviousSessionResponse>;
export declare function sendMessage(message: string, sessionId: string, options: ChatOptions): Promise<SendMessageResponse>;
