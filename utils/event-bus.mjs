export function createEventBus() {
  const handlers = /* @__PURE__ */ new Map();
  function off(eventName, fn) {
    const eventFns = handlers.get(eventName);
    if (eventFns) {
      eventFns.splice(eventFns.indexOf(fn) >>> 0, 1);
    }
  }
  function on(eventName, fn) {
    let eventFns = handlers.get(eventName);
    if (!eventFns) {
      eventFns = [fn];
    } else {
      eventFns.push(fn);
    }
    handlers.set(eventName, eventFns);
    return () => off(eventName, fn);
  }
  function emit(eventName, event) {
    const eventFns = handlers.get(eventName);
    if (eventFns) {
      eventFns.slice().forEach(async (handler) => {
        await handler(event);
      });
    }
  }
  return {
    on,
    off,
    emit
  };
}
