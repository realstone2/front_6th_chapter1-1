export class EventDelegator {
  static instance: EventDelegator | null = null;
  handlers: {
    [K in keyof HTMLElementEventMap]?: Map<string, (e: HTMLElementEventMap[K]) => void>;
  };

  static getInstance() {
    if (!EventDelegator.instance) {
      EventDelegator.instance = new EventDelegator();
    }
    return EventDelegator.instance;
  }

  constructor() {}

  dispatch(type: keyof HTMLElementEventMap, e: HTMLElementEventMap[keyof HTMLElementEventMap]) {
    const target = e.target;

    if (!(target instanceof HTMLElement)) {
      return;
    }

    const handlerMap = this.handlers[type];
    if (!handlerMap) {
      return;
    }

    const matchedEntry = [...handlerMap.entries()].find(([id]) => target.closest(`#${id}`));

    if (matchedEntry) {
      const [id, handler] = matchedEntry;
      handler(e as any); // 타입 단언 필요 (타입 안전하게 하려면 제네릭 활용 가능)
    }
  }

  register<K extends keyof HTMLElementEventMap>(type: K, id: string, handler: (e: HTMLElementEventMap[K]) => void) {
    let eventMap = this.handlers[type];

    if (eventMap) {
      eventMap.set(id, handler);
      return;
    }

    eventMap = new Map();
    eventMap.set(id, handler);

    document.body.addEventListener(type, this.dispatch.bind(this, type));
  }

  unregister(type: keyof HTMLElementEventMap, id: string) {
    this.handlers[type]?.delete(id);
  }
}
