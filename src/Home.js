import React from 'react';
import './Home.css';
import Body from './images/body.jpg';
import Product from './Product';
import Lean from './images/lean.png';
import Kenwood from './images/kenwood.png';
import Mulan from './images/mulan.png';
import Coppertone from './images/coppertone.png';
import Headphones from './images/headphones.png';
import Computer from './images/windows.png';

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img src={Body} alt="body" className="bodyImage" />
                <div className="home__row">
                    <Product id="12321341" title="The Lean StartUp: How Constant Innovation Creates Radically Successful Businesses, Paperback" price={19.99} image={Lean} rating={3} />
                    <Product id="49538094" title="Kenwood Mix Stand Mixer for Baking, Includes k-beater, Dough Hook, and Whisk" price={239.00} rating={4} image={Kenwood} />
                </div>
                <div className="home__row">
                    <Product id="48560163" title="Mulan DVD/Blue-Ray" price={25.99} rating={4} image={Mulan} />
                    <Product id="92740132" title="Copperfit Compression Gloves" price={19.99} rating={5} image={Coppertone} />
                    <Product id="12574665" title="Gaming Headset for PS4, PC, Xbox" price={39.99} rating={4} image={Headphones} />
                </div>
                <div className="home__row">
                    <Product id="23485776" title="15.6-inch Windows 10 Laptop" price={379.99} rating={4} image={Computer} />
                </div>
            </div>
        </div>
    );
}

export default Home;
