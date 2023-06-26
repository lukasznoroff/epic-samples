import { useState, useEffect } from 'react';

interface SampleProps {
  id: string;
  fields: {
    name: string;
    image: {
      url: string;
    }[];
    audio: {
      url: string;
    }[];
  };
}

interface FetchResult {
  data: SampleProps[];
  loading: boolean;
  error: Error | null;
}

export const useFetch = (url: string): FetchResult => {
  const [data, setData] = useState<SampleProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        const response = await fetch(url, {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_TOKEN}`,
          },
        });
        if (!response.ok) {
          throw new Error('Request failed');
        }
        const responseData: { records: SampleProps[] } = await response.json();
        setData(responseData.records);
        setLoading(false);
      } catch (error) {
        // setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};
