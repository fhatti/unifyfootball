import { useState, useEffect } from 'react';

const useFetch = (url, apiKey) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${url}&APIkey=${apiKey}`);
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };      

    fetchData();
  }, [url, apiKey]);

  return { data, loading, error };
};

export default useFetch;
