import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();

    setIsPending(true);
    setTimeout(() => {
      fetch(url, { signal: abortController.signal })
      .then(res => {
        if (!res.ok) {
          setIsPending(false);
          throw Error('Could not fetch the resource');
        }
        return res.json();
      })
      .then(data => {
        setData(data);
        setIsPending(false);
        setError(null);
      })
      .catch((err) => {
        if (err.name === 'AbortError') {
          console.log('Fetch Aborted');
        } else {
          setIsPending(false);
          setError(err.message);
          setData(null);
        }
      });
    }, 1000);
    return () => abortController.abort();
  }, [url]);

  return { data, setData, isPending, error };
};

export default useFetch;
