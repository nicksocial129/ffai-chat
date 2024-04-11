import { createChat } from "@n8n/chat/index";
export function createTestChat(options = {}) {
  const app = createChat(options);
  const container = app._container;
  const unmount = () => app.unmount();
  return {
    unmount,
    container
  };
}
