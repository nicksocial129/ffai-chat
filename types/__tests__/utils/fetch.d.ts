import type { LoadPreviousSessionResponse, SendMessageResponse } from '../../types';
export declare function createFetchResponse<T>(data: T): () => Promise<Response>;
export declare const createGetLatestMessagesResponse: (data?: LoadPreviousSessionResponse['data']) => LoadPreviousSessionResponse;
export declare const createSendMessageResponse: (output: SendMessageResponse['output']) => SendMessageResponse;
