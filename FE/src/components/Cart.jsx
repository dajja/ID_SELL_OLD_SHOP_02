import '../sass/cart.scss';
import { Checkbox } from 'antd';
import Header from './Header';
import Footer from './Footer';
import Breadcrumb from './../componentLittle/Breadcrumb';
import { Link } from 'react-router-dom';

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const accuracy = (e) => {
    console.log(`checked = ${e.target.checked}`);
};

function Cart() {
    let cart = useSelector((state) => state.cart);
    let dispatch = useDispatch();
    let totalAmount = cart.reduce((total,currentValue) => {
        return total + currentValue.price* currentValue.number;
    }, 0)
    let handleRemove = (item) => {
        console.log("xoa",item);
        dispatch({
            type: "REMOVE_FROM_CART", payload: item
        })
    }

    let increaseItem = (item) => {
        console.log("them", item);
        dispatch({
            type: "INCREASE", payload: item
        })
    }

    let decreaseItem = (item) => {
        console.log("giam", item);
        dispatch({
            type: "DECREASE", payload: item
        })
    }
    return (
        <>
            <div className='cart-container'>
                <Header />
                <Breadcrumb />
                <div className='cart-content pad-15-20'>
                    <h2>Shopping Cart</h2>
                    <div className='cart-content-infor col-10'>
                        <div className='cart-content-1 col-10'>
                            <i class="fa-solid fa-chevron-left"></i>
                            <Link to="/catalog" >Continue shopping</Link>
                        </div>
                        <div className='cart-content-2 col-10'>
                            <table className='cart-table col-10'>
                                <tbody>
                                    <tr>
                                        <th className='cl-1'>Item</th>
                                        <th className='cl-2'>Color</th>
                                        <th className='cl-2'>Size</th>
                                        <th className='cl-2'>QTY</th>
                                        <th className='cl-2'>Price</th>
                                        <th className='cl-3'></th>
                                    </tr>
                                    {cart.map((item, i) => {
                                        return (
                                            <tr className='col-10' key={i}>
                                                <td className='cl-1 col-10'>
                                                    <div className='td-item'>
                                                        <div className='td-item-img'>
                                                            <img src={item.image} alt="" />
                                                        </div>
                                                        <div className='td-item-name'>
                                                            {item.name}
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className='cl-2 col-10'>
                                                    <div className='td-color'>
                                                        <div></div>
                                                        <div>Black</div>
                                                    </div>
                                                </td>
                                                <td className='cl-2 col-10'>US1000</td>
                                                <td className='col-10'>
                                                    <div className='td-amount'>
                                                        <div style={{ fontSize: '20px' }}>{item.number}</div>
                                                        <div className='td-amount-btn'>
                                                            <button className='td-btn-up' onClick={() => increaseItem(item)}>+</button>
                                                            <button className='td-btn-down' onClick={() => decreaseItem(item)}>-</button>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className='cl-2 col-10'>{item.number * item.price}</td>
                                                <td className='cl-3 col-10'>
                                                    <button onClick={() => handleRemove(item)}>X Remove</button>
                                                </td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                            <div className="cart-shipping">
                                <div>Shipping:</div>
                                <div>Free</div>
                            </div>
                            <div className="cart-shipping">
                                <div>Subtotal:</div>
                                <div>{totalAmount}</div>
                            </div>
                            <div className="cart-shipping">
                                <h3>Cart total:</h3>
                                <div>{totalAmount}</div>
                            </div>
                            <div className="btn-checkout">
                                <Checkbox onChange={accuracy}>I have a coupon code</Checkbox>
                                <Link to="/checkout"><button>Checkout</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}
export default Cart;