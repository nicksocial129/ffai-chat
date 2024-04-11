"use strict";

var _vue = require("@testing-library/vue");
var _utils = require("@n8n/chat/__tests__/utils");
var _index = require("@n8n/chat/index");
describe("createChat()", () => {
  let app;
  afterEach(() => {
    vi.clearAllMocks();
    app.unmount();
  });
  describe("mode", () => {
    it("should create fullscreen chat app with default options", () => {
      const fetchSpy = vi.spyOn(window, "fetch");
      fetchSpy.mockImplementationOnce((0, _utils.createFetchResponse)((0, _utils.createGetLatestMessagesResponse)()));
      app = (0, _index.createChat)({
        mode: "fullscreen"
      });
      expect((0, _utils.getMountingTarget)()).toBeVisible();
      expect((0, _utils.getChatWrapper)()).toBeVisible();
      expect((0, _utils.getChatWindowWrapper)()).not.toBeInTheDocument();
    });
    it("should create window chat app with default options", () => {
      const fetchSpy = vi.spyOn(window, "fetch");
      fetchSpy.mockImplementationOnce((0, _utils.createFetchResponse)((0, _utils.createGetLatestMessagesResponse)()));
      app = (0, _index.createChat)({
        mode: "window"
      });
      expect((0, _utils.getMountingTarget)()).toBeDefined();
      expect((0, _utils.getChatWindowWrapper)()).toBeVisible();
      expect((0, _utils.getChatWrapper)()).not.toBeVisible();
    });
    it("should open window chat app using toggle button", async () => {
      const fetchSpy = vi.spyOn(window, "fetch");
      fetchSpy.mockImplementationOnce((0, _utils.createFetchResponse)((0, _utils.createGetLatestMessagesResponse)()));
      app = (0, _index.createChat)();
      expect((0, _utils.getMountingTarget)()).toBeVisible();
      expect((0, _utils.getChatWindowWrapper)()).toBeVisible();
      const trigger = (0, _utils.getChatWindowToggle)();
      await _vue.fireEvent.click(trigger);
      expect((0, _utils.getChatWrapper)()).toBeVisible();
    });
  });
  describe("loadPreviousMessages", () => {
    it("should load previous messages on mount", async () => {
      const fetchSpy = vi.spyOn(global, "fetch");
      fetchSpy.mockImplementation((0, _utils.createFetchResponse)((0, _utils.createGetLatestMessagesResponse)()));
      app = (0, _index.createChat)({
        mode: "fullscreen",
        showWelcomeScreen: true
      });
      const getStartedButton = (0, _utils.getGetStartedButton)();
      await _vue.fireEvent.click(getStartedButton);
      expect(fetchSpy.mock.calls[0][1]).toEqual(expect.objectContaining({
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: expect.stringContaining('"action":"loadPreviousSession"'),
        mode: "cors",
        cache: "no-cache"
      }));
    });
  });
  describe("initialMessages", () => {
    it.each(["fullscreen", "window"])("should show initial default messages in %s mode", async mode => {
      const fetchSpy = vi.spyOn(window, "fetch");
      fetchSpy.mockImplementationOnce((0, _utils.createFetchResponse)((0, _utils.createGetLatestMessagesResponse)()));
      const initialMessages = ["Hello tester!", "How are you?"];
      app = (0, _index.createChat)({
        mode,
        initialMessages
      });
      if (mode === "window") {
        const trigger = (0, _utils.getChatWindowToggle)();
        await _vue.fireEvent.click(trigger);
      }
      expect((0, _utils.getChatMessages)().length).toBe(initialMessages.length);
      expect((0, _utils.getChatMessageByText)(initialMessages[0])).toBeInTheDocument();
      expect((0, _utils.getChatMessageByText)(initialMessages[1])).toBeInTheDocument();
    });
  });
  describe("sendMessage", () => {
    it.each(["window", "fullscreen"])("should send a message and render a text message in %s mode", async mode => {
      const input = "Hello User World!";
      const output = "Hello Bot World!";
      const fetchSpy = vi.spyOn(window, "fetch");
      fetchSpy.mockImplementationOnce((0, _utils.createFetchResponse)(_utils.createGetLatestMessagesResponse)).mockImplementationOnce((0, _utils.createFetchResponse)((0, _utils.createSendMessageResponse)(output)));
      app = (0, _index.createChat)({
        mode
      });
      if (mode === "window") {
        const trigger = (0, _utils.getChatWindowToggle)();
        await _vue.fireEvent.click(trigger);
      }
      expect((0, _utils.getChatMessageTyping)()).not.toBeInTheDocument();
      expect((0, _utils.getChatMessages)().length).toBe(2);
      await (0, _vue.waitFor)(() => expect((0, _utils.getChatInputTextarea)()).toBeInTheDocument());
      const textarea = (0, _utils.getChatInputTextarea)();
      const sendButton = (0, _utils.getChatInputSendButton)();
      await _vue.fireEvent.update(textarea, input);
      expect(sendButton).not.toBeDisabled();
      await _vue.fireEvent.click(sendButton);
      expect(fetchSpy.mock.calls[1][1]).toEqual(expect.objectContaining({
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: expect.stringMatching(/"action":"sendMessage"/),
        mode: "cors",
        cache: "no-cache"
      }));
      expect(fetchSpy.mock.calls[1][1]?.body).toContain(`"${input}"`);
      expect((0, _utils.getChatMessages)().length).toBe(3);
      expect((0, _utils.getChatMessageByText)(input)).toBeInTheDocument();
      expect((0, _utils.getChatMessageTyping)()).toBeVisible();
      await (0, _vue.waitFor)(() => expect((0, _utils.getChatMessageTyping)()).not.toBeInTheDocument());
      expect((0, _utils.getChatMessageByText)(output)).toBeInTheDocument();
    });
    it.each(["fullscreen", "window"])("should send a message and render a code markdown message in %s mode", async mode => {
      const input = "Teach me javascript!";
      const output = '# Code\n```js\nconsole.log("Hello World!");\n```';
      const fetchSpy = vi.spyOn(window, "fetch");
      fetchSpy.mockImplementationOnce((0, _utils.createFetchResponse)(_utils.createGetLatestMessagesResponse)).mockImplementationOnce((0, _utils.createFetchResponse)((0, _utils.createSendMessageResponse)(output)));
      app = (0, _index.createChat)({
        mode
      });
      if (mode === "window") {
        const trigger = (0, _utils.getChatWindowToggle)();
        await _vue.fireEvent.click(trigger);
      }
      await (0, _vue.waitFor)(() => expect((0, _utils.getChatInputTextarea)()).toBeInTheDocument());
      const textarea = (0, _utils.getChatInputTextarea)();
      const sendButton = (0, _utils.getChatInputSendButton)();
      await _vue.fireEvent.update(textarea, input);
      await _vue.fireEvent.click(sendButton);
      expect((0, _utils.getChatMessageByText)(input)).toBeInTheDocument();
      expect((0, _utils.getChatMessages)().length).toBe(3);
      await (0, _vue.waitFor)(() => expect((0, _utils.getChatMessageTyping)()).not.toBeInTheDocument());
      const lastMessage = (0, _utils.getChatMessage)(-1);
      expect(lastMessage).toBeInTheDocument();
      expect(lastMessage.querySelector("h1")).toHaveTextContent("Code");
      expect(lastMessage.querySelector("code")).toHaveTextContent('console.log("Hello World!");');
    });
  });
});