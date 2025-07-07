export const createStore = <T extends object | unknown[]>(initValue: T) => {
  let value = initValue;

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
