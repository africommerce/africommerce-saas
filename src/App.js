import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import Registration from './components/auth/Registration';
import { ProductDetail } from './pages/ProductDetail';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product/:id" element={<ProductDetail />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="*" element={<p>Page not found</p>} />
    </Routes>
  );
}

export default App;
