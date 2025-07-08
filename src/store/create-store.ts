type Listener = () => any;

const cleanUpListenerList = new Set<() => void>();

export const clearSubscribers = () => {
  cleanUpListenerList.forEach((cleanUp) => cleanUp());
  cleanUpListenerList.clear();
};

export const createStore = <T extends object | unknown[] | null>(initValue: T) => {
  let value = initValue;
  let listeners: Listener[] = [];

  return {
    get value() {
      return value;
    },

    setValue: (updater: T | ((prev: T) => T)) => {
      if (typeof updater === "function") {
        value = updater(value);
      } else {
        value = updater;
      }
      listeners.forEach((listener) => listener());
    },

    subscribe: (listener: Listener) => {
      listeners.push(listener);
      // 클린업 함수 반환

      const cleanUpCallback = () => {
        listeners = listeners.filter((l) => l !== listener);
      };

      cleanUpListenerList.add(cleanUpCallback);

      return cleanUpCallback;
    },
  };
};

export const createPersistStore = <T extends object | unknown[]>(key: string, initValue: T) => {
  const storedValue = localStorage.getItem(key);
  const parsedValue = storedValue ? JSON.parse(storedValue) : initValue;

  const store = createStore(parsedValue);

  return {
    ...store,
    setValue: (updater: T | ((prev: T) => T)) => {
      store.setValue(updater);
      localStorage.setItem(key, JSON.stringify(store.value));
    },
  };
};
