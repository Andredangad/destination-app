import { useState, useEffect, SetStateAction } from 'react';

export function useLocalStorage<T>(key: string, initialValue: T): [T, React.Dispatch<SetStateAction<T>>] {
  const [data, setData] = useState<T>(getStorageValue(key, initialValue));

  useEffect(() => {
    try {
      // setData((prevData) => [...prevData, defaultValue]);
      localStorage.setItem(key, JSON.stringify(data));
    } catch (error) {
      console.error(`could not set data to ${key}`, data);
    }
  }, [key, data]);

  return [data, setData];
}

function getStorageValue<T>(key: string, initialValue: T): T {
  const items = localStorage.getItem(key);
  if (items === null) {
    return initialValue;
  }
  return JSON.parse(items);
}
