import './App.scss';
import Nav from './components/nav/Nav';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Footer from './components/footer/Footer';
import ShopProvider from './context/Shop';
import Product from './pages/Product';
import Cart from './components/cart/Cart';

function App() {
  return (
    <ShopProvider>
      <Router>
        <Nav />
        <Cart />
        
        <Container as='main' className='py-4' fluid="lg">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<Product />} />
          </Routes>
        </Container>

        <Footer />
      </Router>
    </ShopProvider>
  );
}

export default App;
