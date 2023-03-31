import Header from "./Header";
import Breadcrumb from "../componentLittle/Breadcrumb";
import Footer from "./Footer";
import { Link } from "react-router-dom";

import '../sass/checkout.scss';

import React from 'react';
import { useSelector } from 'react-redux';

function Checkout() {
    let cart = useSelector((state) => state.cart)
    let totalAmount = cart.reduce((total,currentValue) => {
        return total + currentValue.price* currentValue.number;
    }, 0)
    return (
        <>
            <div className="checkout-container">
                <Header />
                <Breadcrumb />
                <div className='pad-15-20'>
                    <div className="checkout-content">
                        <div className="checkout-cart col-10">
                            <div className="ck-cart-title">Shopping cart</div>
                            <div className="ck-cart-item">
                                {cart.map((item, i) => {
                                    return (
                                        <>
                                            <div className="item" key={i}>
                                                <div className="item-img">
                                                    <img src={item.image} alt={item.name} />
                                                </div>
                                                <div className="item-description">{item.name}</div>
                                                <div className="item-money">
                                                    <div className="item-price">${item.price * item.number}</div> 
                                                </div>
                                            </div>
                                        </>
                                    )
                                })}
                                <div className="ck-cart-edit"> <Link to="/cart"> Edit cart</Link></div>
                            </div>
                            <div className="ck-cart-shipping">
                                <div>Shipping:</div>
                                <div>Free</div>
                            </div>
                            <div className="ck-cart-subtotal">
                                <div>Subtotal: </div>
                                <div>{totalAmount}</div>
                            </div>
                            <div className="ck-cart-total">
                                <div>Cart total:</div>
                                <div>{totalAmount}</div>
                            </div>
                            <div className="ck-cart-code"><input type="checkbox" /> I have a coupon code </div>
                        </div>
                        <div className="checkout-form col-10">
                            <div className="ck-form-title">Login</div>
                            <div className="ck-form-user ">
                                <div className="ck-form-user-email col-10">
                                    <label htmlFor="email">Email*</label> <br />
                                    <input type="text" name="email" />
                                </div>
                                <div className="ck-form-user-password col-10">
                                    <label htmlFor="password"> Password*</label> <br />
                                    <input type="text" name="password" />  <br />
                                    <a href="/">Forgot password</a>
                                </div>
                                <div className="ck-form-user-btn col-3">
                                    <button>Login</button>
                                </div>
                            </div>
                            <div className="ck-form-title">1. Billing</div>
                            <div className="ck-form-billing">
                                <div className="ck-form-billing-1">
                                    <label htmlFor="email">Email*</label> <br />
                                    <input type="text" name="email" />
                                </div>
                                <div className="ck-form-billing-2">
                                    <div className="ck-form-billing-2-2">
                                        <div className="col-10">
                                            <label htmlFor="firstname">First name*</label> <br />
                                            <input type="text" name="firstname" />
                                        </div>
                                        <div className="col-10">
                                            <label htmlFor="lastname">Last name*</label> <br />
                                            <input type="text" name="lastname" />
                                        </div>
                                    </div>
                                    <div className="ck-form-billing-2-2">
                                        <div className="col-10">
                                            <label htmlFor="phone">Phone</label> <br />
                                            <input type="text" name="phone" />
                                        </div>
                                        <div className="col-10">
                                            <label htmlFor="company">Company name</label> <br />
                                            <input type="text" name="company" />
                                        </div>
                                    </div>
                                    <div className="ck-form-billing-2-2">
                                        <div className="col-10">
                                            <label htmlFor="country">Country</label> <br />
                                            <select name="country">
                                                <option value={0}>Vietnam</option>
                                            </select>
                                        </div>
                                        <div className="col-10" >
                                            <label htmlFor="zipcode">Zip code*</label> <br />
                                            <input type="text" name="zipcode" />
                                        </div>
                                    </div>
                                    <div className="ck-form-billing-2-2">
                                        <div className="ck-form-billing-2-2-2 col-10">
                                            <div className="col-10">
                                                <label htmlFor="house">House number*</label> <br />
                                                <input type="text" name="house" />
                                            </div>
                                            <div className="col-10">
                                                <label htmlFor="apartment">Apartment</label> <br />
                                                <input type="text" name="apartment" />
                                            </div>
                                        </div>
                                        <div className="col-10">
                                            <label htmlFor="street">Street name*</label> <br />
                                            <input type="text" name="street" />
                                        </div>
                                    </div>
                                    <div className="ck-form-billing-2-2">
                                        <div className="col-10">
                                            <label htmlFor="city">City*</label> <br />
                                            <input type="text" name="city" />
                                        </div>
                                        <div className="col-10"> 
                                            <label htmlFor="state">State</label> <br />
                                            <input type="text" name="state" />
                                        </div>
                                    </div>
                                </div>
                                <div className="ck-form-billing-3">
                                    <div>
                                        <input type="checkbox" name="choose1" />
                                        <label htmlFor="choose1">Ship to a different address</label>
                                    </div>
                                    <div>
                                        <input type="checkbox" name="choose2" />
                                        <label htmlFor="choose2">Create an account</label>
                                    </div>
                                </div>
                            </div>
                            <div className="ck-form-title">2. Shipping</div>
                            <div className="ck-form-shipping">
                                <div className="ck-form-billing-2">
                                    <div className="ck-form-billing-2-2">
                                        <div className="col-10">
                                            <label htmlFor="firstname">First name*</label> <br />
                                            <input type="text" name="firstname" />
                                        </div>
                                        <div className="col-10">
                                            <label htmlFor="lastname">Last name*</label> <br />
                                            <input type="text" name="lastname" />
                                        </div>
                                    </div>
                                    <div className="ck-form-billing-2-2">
                                        <div className="col-10">
                                            <label htmlFor="phone">Phone</label> <br />
                                            <input type="text" name="phone" />
                                        </div>
                                        <div className="col-10">
                                            <label htmlFor="company">Company name</label> <br />
                                            <input type="text" name="company" />
                                        </div>
                                    </div>
                                    <div className="ck-form-billing-2-2">
                                        <div className="col-10">
                                            <label htmlFor="country">Country</label> <br />
                                            <select name="country">
                                                <option value={0}>Vietnam</option>
                                            </select>
                                        </div>
                                        <div className="col-10">
                                            <label htmlFor="zipcode">Zip code*</label> <br />
                                            <input type="text" name="zipcode" />
                                        </div>
                                    </div>
                                    <div className="ck-form-billing-2-2">
                                        <div className="ck-form-billing-2-2-2 col-10">
                                            <div className="col-10">
                                                <label htmlFor="house">House number*</label> <br />
                                                <input type="text" name="house" />
                                            </div>
                                            <div className="col-10">
                                                <label htmlFor="apartment">Apartment</label> <br />
                                                <input type="text" name="apartment" />
                                            </div>
                                        </div>
                                        <div className="col-10">
                                            <label htmlFor="street">Street name*</label> <br />
                                            <input type="text" name="street" />
                                        </div>
                                    </div>
                                    <div className="ck-form-billing-2-2">
                                        <div className="col-10">
                                            <label htmlFor="city">City*</label> <br />
                                            <input type="text" name="city" />
                                        </div>
                                        <div className="col-10">
                                            <label htmlFor="state">State</label> <br />
                                            <input type="text" name="state" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="ck-form-method">
                                <div className="ck-form-method-1 col-10">
                                    <div className="ck-form-title">3. Shipping method</div>
                                    <div className="ck-form-method-choose">
                                        <div className="ck-form-method-choose-1">
                                            <input type="radio" name="freeship" />
                                            <label htmlFor="freeship">USPS - Freeshipping</label>
                                        </div>
                                        <div className="ck-form-method-divide"></div>
                                        <div className="ck-form-method-choose-1">
                                            <input type="radio" name="standartship" />
                                            <label htmlFor="standartship">DHL - Starndart shipping</label>
                                        </div>
                                    </div>
                                    <div className="ck-form-method-effort">
                                        <div className="ck-form-method-eI">
                                            <i class="fa-solid fa-check"></i>
                                            <div>Free shipping other $125</div>
                                        </div>
                                        <div className="ck-form-method-eI">
                                            <i class="fa-solid fa-check"></i>
                                            <div>All the rules and conditions of each shipping company apply to customer</div>
                                        </div>
                                        <div className="ck-form-method-eI">
                                            <i class="fa-solid fa-check"></i>
                                            <div>Free store delivery and free returns</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="ck-form-method-2 col-10">
                                    <div className="ck-form-title">4. Payment method</div>
                                    <div className="ck-form-method-choose">
                                        <div className="ck-form-method-choose-2">
                                            <input type="radio" name="pphone" />
                                            <label htmlFor="pphone">Pay by phone</label>
                                        </div>
                                        <div className="ck-form-method-divide"></div>
                                        <div className="ck-form-method-choose-2">
                                            <input type="radio" name="paypal" />
                                            <label htmlFor="paypal">
                                                Paypal
                                                <div className="ck-form-paypal">
                                                    <div className="ck-form-pp1">
                                                        <img src="./image/PayPal.svg.png" alt="" />
                                                        <a href="https://www.paypal.com/vn/webapps/mpp/account-selection">What's Paypal ?</a>
                                                    </div>
                                                    <div className="ck-form-pp2">
                                                        <p>You can pay with your credit if you dont have Paypal acount</p>
                                                    </div>
                                                </div>
                                            </label>

                                        </div>
                                    </div>
                                    <div className="ck-form-method-payment">
                                        <div className="ck-cart-payment">
                                            <div>Order total:</div>
                                            <div>$250</div>
                                        </div>
                                        <div className="ck-cart-access">
                                            <div className="ck-cart-access1 col-10">
                                                <input type="checkbox" name="privacy" />
                                                <div>I accept the <a href="/"> Terms and Condition </a> and <a href="/"> Privacys statement </a></div>
                                            </div>
                                            <div className="col-10">
                                                <button>Proceed to Payment</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}
export default Checkout;