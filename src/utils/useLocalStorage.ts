/**
 * Достает и записывает данные в LocalStorage
 * @param {string} key - ключ LocalStorage
 * @param {T} value - значение LocalStorage
 */

export const useLocalStorage = <T>(key: string): [() => T | null, (value: T) => void] => {
    const checkLS = (): T | null => {
      const res = localStorage.getItem(key);
      return res ? JSON.parse(res) : null;
    }
  
    const writeToLS = (value: T): void => {
      const data = JSON.stringify(value);
      localStorage.setItem(key, data)
    }
  
    return [checkLS, writeToLS];
  }
  