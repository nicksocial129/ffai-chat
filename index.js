"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createChat = createChat;
require("./main.scss");
var _vue = require("vue");
var _App = _interopRequireDefault(require("./App.vue"));
var _constants = require("@n8n/chat/constants");
var _utils = require("@n8n/chat/utils");
var _plugins = require("@n8n/chat/plugins");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function createChat(options) {
  const resolvedOptions = {
    ..._constants.defaultOptions,
    ...options,
    webhookConfig: {
      ..._constants.defaultOptions.webhookConfig,
      ...options?.webhookConfig
    },
    i18n: {
      ..._constants.defaultOptions.i18n,
      ...options?.i18n,
      en: {
        ..._constants.defaultOptions.i18n?.en,
        ...options?.i18n?.en
      }
    },
    theme: {
      ..._constants.defaultOptions.theme,
      ...options?.theme
    }
  };
  const mountingTarget = resolvedOptions.target ?? _constants.defaultMountingTarget;
  if (typeof mountingTarget === "string") {
    (0, _utils.createDefaultMountingTarget)(mountingTarget);
  }
  const app = (0, _vue.createApp)(_App.default);
  app.use(_plugins.ChatPlugin, resolvedOptions);
  app.mount(mountingTarget);
  return app;
}