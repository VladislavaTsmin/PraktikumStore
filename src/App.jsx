import './App.css';
import CartContainer from './components/CartContainer';
import Header from './components/Header';
import { useState } from 'react';
import LastPurchase from './components/LastPurchase';

function App() {

  const [cartProducts, setCartProducts] = useState([]);
  const [lastPurchase, setLastPurchase] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  

  const addToCart = (product) => {
    setCartProducts((prev) => {
      const dublicate = prev.find(item => item.id === product.id);
      if (dublicate) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, productCount: item.productCount + 1 }
            : item
        );
      } else {
        return [...prev, { ...product, productCount: 1 }];
      }
    });
  };


  return (
    <div className="wrapper">
      <Header addToCart={addToCart} />
      <CartContainer
        cartProducts={cartProducts}
        setCartProducts={setCartProducts}
        setLastPurchase={setLastPurchase}
        setIsVisible={setIsVisible}
        isVisible={isVisible} />
      <LastPurchase
        lastPurchase={lastPurchase}
        visible={isVisible} />
    </div>

  )
}

export default App
