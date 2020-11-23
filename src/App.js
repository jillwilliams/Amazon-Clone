import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Checkout from './Checkout';
import Login from './Login';
// a listener who always keeps track of who is signed in
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Payment from './Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Orders from './Orders';

const promise = loadStripe(
    "pk_test_51HqZjKDi2Q8yJBKC96UXmwUbllU23kGIfPxXBgEBAp45eY5YjTfJns30IyEXOqf19YXX1gLWGkzsb5RhlyC3brXp00vKS0ied9"
);

function App() {

    const [{}, dispatch] = useStateValue();

    useEffect(() => {  //will only run once when the component loads. like an IF stmt
        auth.onAuthStateChanged(authUser  => {
            console.log("The user is:", authUser );

            if (authUser) {
                //the user just logged in or was logged in
                dispatch({
                    type: 'SET_USER',
                    user: authUser
                })
            } else {  // the user is logged out
                dispatch({
                    type: 'SET_USER',
                    user: null
                })
            } //the user is logged out
        })
    }, []);  //on useEffect insert in the empty array, it will fire on the items in the [] if you put any
    return (
        <Router>
            <div className="app">
                <Switch>
                    <Route path="/orders">
                        <Header />
                        <Orders />
                    </Route>
                    <Route path="/login">
                        <Login />
                    </Route>
                    <Route path="/checkout">
                        <Header />
                        <Checkout />
                    </Route>
                    <Route path="/payment">
                        <Header />
                        <Elements stripe={promise}>
                            <Payment />
                        </Elements>
                    </Route>
                    <Route path="/">
                        <Header />
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
