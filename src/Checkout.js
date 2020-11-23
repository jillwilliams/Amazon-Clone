import React from 'react';
import './Checkout.css';
import Subtotal from './Subtotal';
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';


function Checkout() {
    const [{ basket, user}, dispatch] = useStateValue();
    
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img className="checkout__ad" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB23492668_.jpg" alt="amazon ad" />
                <div>
                    <h3>Hello, {user?.email}</h3>
                    <h2 className="checkout__title">
                        Your Shopping Cart
                    </h2>
                    {basket.map(item => (
                        <CheckoutProduct id={item.id} title={item.title} image={item.image} price={item.price} rating={item.rating}></CheckoutProduct> 
                    ))}
                </div>
            </div>
            <div className="checkout__right">
                <Subtotal />
            </div>
        </div>
    );
}

export default Checkout;
