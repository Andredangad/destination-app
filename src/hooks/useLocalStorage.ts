import { useState, useEffect } from 'react';

interface State<T> {
  data: T;
  setData: React.Dispatch<React.SetStateAction<T>>;
}

export function useLocalStorage<T>(key: string, defaultValue: T): State<T> {
  const [data, setData] = useState(() => {
    return getStorageValue(key, defaultValue);
  });
  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch (error) {
      console.error(`could not set data to ${key}`, data);
    }
  }, [key, data]);

  return { data, setData };
}

function getStorageValue<T>(key: string, defaultValue: T): T {
  const items = localStorage.getItem(key);
  if (items === null) {
    return defaultValue;
  }
  return JSON.parse(items);
}
