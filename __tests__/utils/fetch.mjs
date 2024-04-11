export function createFetchResponse(data) {
  return async () => ({
    json: async () => await new Promise((resolve) => resolve(data))
  });
}
export const createGetLatestMessagesResponse = (data = []) => ({ data });
export const createSendMessageResponse = (output) => ({
  output
});
