import { useEffect, useState } from 'react';
import useHttp from './adapter/hooks/useHttp';
import { MasterRoutes } from './routes/MasterRoutes';

function App() {
  const [data, setData] = useState([]);
  const { isLoading, error, sendRequest: fetchData } = useHttp();
  console.log(data);

  useEffect(() => {
    const transformData = (newData) => {
      setData(newData);
    };

    fetchData(
      { url: 'https://fakestoreapi.com/products?limit=5' },
      transformData
    );
  }, [fetchData]);

  return (
    <>
      <MasterRoutes />
    </>
  );
}

export default App;
