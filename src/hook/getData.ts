import { useState, useEffect } from 'react';
import req from '../utils/request';

const useData = <T>(endpoint: string, query: any, deps: any[] = []) => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsloading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    const getData = async (): Promise<void> => {
      try {
        console.log(query);
        const dataResponse = await req<T>(endpoint, query);

        setData(dataResponse);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsloading(false);
      }
    };

    getData();
  }, deps);

  return {
    isLoading,
    isError,
    data,
  };
};

export default useData;
