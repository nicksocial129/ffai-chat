import { useOptions } from "@n8n/chat/composables/useOptions";
export function useI18n() {
  const { options } = useOptions();
  const language = options?.defaultLanguage ?? "en";
  function t(key) {
    return options?.i18n?.[language]?.[key] ?? key;
  }
  function te(key) {
    return !!options?.i18n?.[language]?.[key];
  }
  return { t, te };
}
