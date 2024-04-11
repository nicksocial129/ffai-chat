"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
module.exports = exports.Windowed = exports.Fullscreen = void 0;
var _vue = require("vue");
var _index = require("@n8n/chat/index");
const webhookUrl = "http://localhost:5678/webhook/f406671e-c954-4691-b39a-66c90aa2f103/chat";
const meta = {
  title: "Chat",
  render: args => ({
    setup() {
      (0, _vue.onMounted)(() => {
        (0, _index.createChat)(args);
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
module.exports = meta;
const Fullscreen = exports.Fullscreen = {
  args: {
    webhookUrl,
    mode: "fullscreen"
  }
};
const Windowed = exports.Windowed = {
  args: {
    webhookUrl,
    mode: "window"
  }
};