import '../sass/salepage.scss';
import Header from './Header';
import Footer from './Footer';
import Item from './Item';
import Breadcrumb from './../componentLittle/Breadcrumb';
import CountdownTimer from '../componentLittle/Countdown';

import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
function Salepage() {
    const dispatch = useDispatch();
    const products = useSelector(state => state.products.products);
    const saleProducts = products.filter(item => item.isSale);
    useEffect(() => {
        fetch("http://localhost:8000/products")
            .then((res) => res.json())
            .then((data) => dispatch({ type: "SAVE_PRODUCTS", payload: data }))
            .catch((err) => console.log(err));
    }, [dispatch])
    return (
        <>
            <div className='salepage-container'>
                <Header />
                <Breadcrumb />
                <div className='sale-bar'>
                    <div className='sale-bar-title'>On Sale Now</div>
                    <div className='sale-bar-countdown'>
                        <div> Ends in </div>
                        <div> <CountdownTimer countdownTimestamps={new Date('2023-06-30T20:30:00').getTime()} /></div>
                    </div>
                </div>
                <h2>On Sale Now</h2>
                <div className='salepage-listItem'>
                    {saleProducts.map((item, i) => {
                        return (
                            <div key={item.id}>
                                <Item element={item} />
                            </div>
                        )
                    })}
                </div>
                <Footer />
            </div>
        </>
    );
}

export default Salepage;