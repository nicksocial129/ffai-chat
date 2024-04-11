import "./main.scss";
import { createApp } from "vue";
import App from "./App.vue";
import { defaultMountingTarget, defaultOptions } from "@n8n/chat/constants";
import { createDefaultMountingTarget } from "@n8n/chat/utils";
import { ChatPlugin } from "@n8n/chat/plugins";
export function createChat(options) {
  const resolvedOptions = {
    ...defaultOptions,
    ...options,
    webhookConfig: {
      ...defaultOptions.webhookConfig,
      ...options?.webhookConfig
    },
    i18n: {
      ...defaultOptions.i18n,
      ...options?.i18n,
      en: {
        ...defaultOptions.i18n?.en,
        ...options?.i18n?.en
      }
    },
    theme: {
      ...defaultOptions.theme,
      ...options?.theme
    }
  };
  const mountingTarget = resolvedOptions.target ?? defaultMountingTarget;
  if (typeof mountingTarget === "string") {
    createDefaultMountingTarget(mountingTarget);
  }
  const app = createApp(App);
  app.use(ChatPlugin, resolvedOptions);
  app.mount(mountingTarget);
  return app;
}
