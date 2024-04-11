export declare function createFetchResponse<T>(data: T): () => Promise<Response>;
export declare const createGetLatestMessagesResponse: (data?: LoadPreviousSessionResponse) => LoadPreviousSessionResponse;
export declare const createSendMessageResponse: (output: SendMessageResponse) => SendMessageResponse;
