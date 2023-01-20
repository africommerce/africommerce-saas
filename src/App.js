import { useEffect, useState } from 'react';
import useHttp from './adapter/hooks/useHttp';
import { MasterRoutes } from './routes/MasterRoutes';

function App() {
  return (
    <>
      <MasterRoutes />
    </>
  );
}

export default App;
