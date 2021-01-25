import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import Hero from './components/Hero';
import Products from './components/Products';
import {productData, productDataSweet} from './components/Products/data';
import Feature from './components/Feature';
import Footer from './components/Footer';



function App() {
  return (
    <>
    <Router> 
      <GlobalStyle /> 
      
       <Hero/>
       <Products heading='Escolha sua pizza' data={productData}/>
       <Feature/>
        <Products heading='Doces mais pedidos' data={productDataSweet} />
        <Footer/>

       
      </Router>
    </>
  );
}

export default App;
