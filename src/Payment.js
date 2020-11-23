import { Link } from 'react-router-dom';
import React from 'react';
import CheckoutProduct from './CheckoutProduct';
import './Payment.css';
import { useStateValue } from './StateProvider';

function Payment() {
    const [{ basket, user }, dispatch] = useStateValue();
    return (
        <div className="payment">
            <div className="payment__container">
                <h3>
                    Back to Cart (<Link to="/checkout">{basket?.length} items</Link>)
                </h3>
                {/* payment section- delivery address*/}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment__address">
                        <p>{user?.email}</p>
                        <p>123 React Ln</p>
                        <p>Los Angeles, CA 91xxx</p>
                    </div>
                </div>
                {/* payment section- review items*/}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Review Items and Delivery Address</h3>
                    </div>
                    <div className="payment__items">
                        {basket.map(item => (
                            <CheckoutProduct 
                                id={item.id} 
                                title={item.title} 
                                image={item.image} 
                                price={item.price} 
                                rating={item.rating} 
                            />
                        ))}
                    </div>
                </div>
                {/* payment section- payment method*/}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment__details">
                        {/* STRIPE CODE GOES HERE */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Payment;
