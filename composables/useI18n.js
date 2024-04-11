"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useI18n = useI18n;
var _useOptions = require("@n8n/chat/composables/useOptions");
function useI18n() {
  const {
    options
  } = (0, _useOptions.useOptions)();
  const language = options?.defaultLanguage ?? "en";
  function t(key) {
    return options?.i18n?.[language]?.[key] ?? key;
  }
  function te(key) {
    return !!options?.i18n?.[language]?.[key];
  }
  return {
    t,
    te
  };
}