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

function App() {

    const [{ }, dispatch] = useStateValue();

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
                    <Route path="/login">
                        <Login />
                    </Route>
                    <Route path="/checkout">
                        <Header />
                        <Checkout />
                    </Route>
                    <Route path="/payment">
                        <Header />
                        <Payment />
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
