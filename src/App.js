import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Product from './components/Product';
import productsData from './components/productsData';



function App(props) {
  const products = productsData.map((item)=>{
    return <Product
    productImg={item.productImg}
    productName={item.productName}
    price={item.price}
    rating={item.rating}
    key={item.id}
    productId={item.id}
    cart={props.cart}
    setCart={props.setCart}
    
    
    
    />
  })
  return (
    <div className="App">
        <Navbar quantity={props.cart.length}/>
        <div className="products--list">
          {products}
        </div>
    </div>
  );
}

export default App;
