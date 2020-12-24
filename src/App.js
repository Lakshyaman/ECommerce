import React, { useState, useEffect } from 'react';
import { commerce } from './lib/commerce'
// import Products from './components/Products/Products';
// import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Products, Navbar, Cart, Checkout } from './components';

const App = ({object}) => {
    const [ products, setProducts ] = useState([]);
    const [ cart, setCart ] = useState({});

    const fetchProducts = async() => {
        const { data } = await commerce.products.list();

        setProducts(data);
    }

    const fetchCart = async() => {
        setCart(await commerce.cart.retrieve());
    }

    const handleAddToCart = async(productId, quantity) => {
        const item = await commerce.cart.add(productId, quantity);
        
        setCart(item.cart);
    }

    const handleUpdateQuantity = async(productId, quantity) => {
        const item = await commerce.cart.update(productId, {quantity});

        setCart(item.cart);
    } 

    const handleRemoveButton = async(productId) => {
        const item = await commerce.cart.remove(productId);

        setCart(item.cart);
    }

    const handleEmptyCart = async(productId) => {
        const item = await commerce.cart.empty();

        setCart(item.cart);
    }


    useEffect(() => {
        fetchProducts();
        fetchCart();
    }, []);



    console.log(products);
    console.log(cart);


    return (
        <div>
            <Router>
                <Navbar totalItems={cart.total_items}/>
                <Switch>
                    <Route exact path="/">
                        <Products products={products} onAddToCart={handleAddToCart} />
                    </Route>
                    <Route exact path="/cart">
                        <Cart cart={cart} handleUpdateQuantity={handleUpdateQuantity} handleRemoveButton={handleRemoveButton} handleEmptyCart={handleEmptyCart}/>
                    </Route>
                    <Route exact path="/checkout">
                        <Checkout />
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default App
