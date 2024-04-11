import { onMounted } from "vue";
import { createChat } from "@n8n/chat/index";
const webhookUrl = "http://localhost:5678/webhook/f406671e-c954-4691-b39a-66c90aa2f103/chat";
const meta = {
  title: "Chat",
  render: (args) => ({
    setup() {
      onMounted(() => {
        createChat(args);
      });
      return {};
    },
    template: '<div id="n8n-chat" />'
  }),
  parameters: {
    layout: "fullscreen"
  },
  tags: ["autodocs"]
};
export default meta;
export const Fullscreen = {
  args: {
    webhookUrl,
    mode: "fullscreen"
  }
};
export const Windowed = {
  args: {
    webhookUrl,
    mode: "window"
  }
};
