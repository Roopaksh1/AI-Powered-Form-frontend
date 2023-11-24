import { useEffect, useState } from 'react';
import { API_CLIENT } from '../utils/api';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      API_CLIENT.get(url)
        .then((res) => {
          setData(res.data);
        })
        .catch((err) => {
          if (err?.response?.status == '401') {
            setError('Please login');
          } else if (err?.response?.status == '404') {
            setError('Not Found');
          } else if (err.request) {
            setError('Server Error');
          }
        })
        .finally(() => {
          setLoading(false);
        });
    };
    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
