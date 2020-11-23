import React, { useState } from 'react';
import './Login.css';
import Logo from './images/logo.png';
import { Link, useHistory } from 'react-router-dom';
import { auth } from './firebase';


function Login() {
    const history = useHistory();   // allows us to programatically change the url
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const signIn = (e) => {
        e.preventDefault();  //prevents the page from refreshing 
// some fancy firebase login code goes here
        auth.signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push('/')
            })
            .catch(error => alert(error.message));
    }

    const register = (e) => {
        e.preventDefault();
// some fancy firebase registration code goes here
        auth.createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                // it successfully created a new user with email and password
                if (auth) {
                    history.push('/')
                }
            })
            .catch(error => alert(error.message));
    }

    return (
        <div className="login">
            <Link to="/">
                <img src={Logo} alt="logo" className="login__logo" />
            </Link>

            <div className="login__container">
                <h1>Sign In</h1>
                <form>
                    <h5>Email</h5>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)} className="" placeholder="Enter email..." />

                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} className="" placeholder="Enter password..." />
                    
                    <button onClick={signIn} type="submit" className="login__signInButton">
                        Sign In
                    </button>
                </form>

                <p>
                    By signing-in you agree to Amazon's FAKE CLONE Conditions of Use & Sale.  Please see our Privacy Notice, our Cookies Notice and our Interest-based Ads Notice.
                </p>
                
                <button onClick={register} className="login__registerButton">
                    Create an Amazon Account
                </button>
            </div>
        </div>
    );
}

export default Login;
