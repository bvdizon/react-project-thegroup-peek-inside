import { useEffect, useState } from 'react';

export const useFetch = (url) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const getBrochures = async (url) => {
    const resp = await fetch(url);
    const brochures = await resp.json();
    setData(brochures.feed.entry);
  };

  useEffect(() => {
    getBrochures(url);
  }, []);

  return { loading, data };
};
