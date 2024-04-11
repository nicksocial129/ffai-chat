"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createFetchResponse = createFetchResponse;
exports.createSendMessageResponse = exports.createGetLatestMessagesResponse = void 0;
function createFetchResponse(data) {
  return async () => ({
    json: async () => await new Promise(resolve => resolve(data))
  });
}
const createGetLatestMessagesResponse = (data = []) => ({
  data
});
exports.createGetLatestMessagesResponse = createGetLatestMessagesResponse;
const createSendMessageResponse = output => ({
  output
});
exports.createSendMessageResponse = createSendMessageResponse;