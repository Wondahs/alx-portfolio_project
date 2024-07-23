import { useState, useEffect } from 'react';

const useSessionStorage = (key, initialValue) => {
  // Get the stored value or default to initialValue
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = sessionStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error('Error retrieving item from sessionStorage', error);
      return initialValue;
    }
  });

  // Update sessionStorage whenever storedValue changes
  useEffect(() => {
    try {
      sessionStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      console.error('Error setting item in sessionStorage', error);
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
};

export default useSessionStorage;
