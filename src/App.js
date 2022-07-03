import { Route,Routes,Navigate, } from 'react-router-dom';
import './App.css';




// Components
import Store from './components/Store';
import ProductDetail from './components/ProductDetail';

// Context
import ProductContextProvider from './context/ProductContextProvider';
import CartContextProvider from './context/CartContextProvider.js';

function App() {
  return (
    <ProductContextProvider>
      <CartContextProvider>
      <Routes>
        <Route path='/products/' element={<Store/>} />
        <Route path='/products/:id' element={<ProductDetail/>} />
        <Route path='/' element={<Navigate to="/products" />} />
      </Routes>
      </CartContextProvider>
    </ProductContextProvider>
  );
}

export default App;
