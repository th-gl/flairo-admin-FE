import { useEffect, useState } from 'react';
export default function useLocalStorage(key, initialValue) {
  const [data, setData] = useState(initialValue);
  useEffect(() => {
    const getData = window.localStorage.getItem(key);

    if (getData) {
      setData(JSON.parse(getData));
    }
  }, [key]);

  const storeData = updateValue => {
    setData(updateValue);
    window.localStorage.setItem(key, JSON.stringify(updateValue));
  };

  return {
    data,
    storeData
  };
}