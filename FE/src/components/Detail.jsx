import '../sass/detail.scss';
import axios from 'axios';
import Breadcrumb from '../componentLittle/Breadcrumb';
import Footer from './Footer';
import Header from './Header';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from "swiper";
import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function Detail() {
    const isMobile = useMediaQuery({ query: '(max-width: 600px)' });
    let productsMain = useSelector((state) => state.products);
    let cart = useSelector((state) => state.cart);
    let dispatch = useDispatch();
    let { id } = useParams();
    useEffect(() => {
        async function fetchData() {
            try {
                const res = await fetch("http://localhost:8000/productsMain");
                const data = await res.json();
                dispatch({ type: "SAVE_PRODUCTS", payload: data });
            } catch (error) {
                console.error(error);
            }
        }
        fetchData();
    }, [dispatch])
    useEffect(() => {
        fetch("http://localhost:8000/cart")
            .then((res) => res.json())
            .then((data) => dispatch({ type: "SAVE_CART", payload: data }))
            .catch((err) => console.log(err));
    }, [dispatch])
    const selectedProduct = productsMain.find(item => item.id === parseInt(id));
    const randomSo = Math.floor(Math.random() * 1000000);
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let randomChu = '';
    for (let i = 0; i < 2; i++) {
        randomChu += alphabet.charAt(Math.floor(Math.random() * alphabet.length)).toUpperCase()
    }
    let ref = `${randomSo}${randomChu}`;
    selectedProduct && selectedProduct.detail && (selectedProduct.detail.href = ref);
    const addToCart = (selectedProduct) => {
        let findIndexCart = cart.findIndex((e, i) => e.id === selectedProduct.id)
        console.log(findIndexCart);
        if (findIndexCart === -1) {
            axios.post("http://localhost:8000/cart", {
                id: selectedProduct.id,
                name: selectedProduct.name,
                image: selectedProduct.image,
                price: selectedProduct.price,
                number: 1
            })
                .then(res => {
                    dispatch({
                        type: "ADD_TO_CART", paycak: selectedProduct
                    })
                })
                .catch(err => {
                    console.log(err);
                })
        } else {
            axios.put(`http://localhost:8000/cart/${cart[findIndexCart].id}`,
                {
                    id: cart[findIndexCart].id,
                    name: cart[findIndexCart].name,
                    image: cart[findIndexCart].image,
                    price: cart[findIndexCart].price,
                    number: cart[findIndexCart].number + 1
                })
                .then(res => {
                    dispatch({
                        type: "EDIT_TO_CART", paycak: selectedProduct
                    })
                })
                .catch(err => {
                    alert(err)
                })
        }
    }
    function slider() {
        return (
            <Swiper slidesPerView={1}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper">
                {selectedProduct?.detail?.img.map((item, i) => {
                    return (
                        <SwiperSlide key={item.id}><img src={item} alt="" /></SwiperSlide>
                    )
                })}
            </Swiper>
        )
    }
    // random product
    const productClone = productsMain.slice();
    productClone.splice(productsMain.indexOf(selectedProduct), 1);
    const n = 7;
    const shuffledProduct = productClone.sort(() => 0.5 - Math.random());
    const lastRandomProduct = shuffledProduct.slice(0, n);
    console.log(lastRandomProduct);
    return (
        <>
            <div className='detail-container'>
                <Header />
                <Breadcrumb />
                <div className='pad-15-20'>
                    <div className='detail-product-1 col-10'>
                        <div className='detail-product-image col-10'>
                            <div className='dt-product-image'>
                                {isMobile ? slider()
                                    : (
                                        <>
                                            {selectedProduct?.detail?.img.map((item, i) => {
                                                return (
                                                    <div className='dt-item-img' key={i}>
                                                        <img src={item} alt="" />
                                                    </div>
                                                )
                                            })}
                                        </>
                                    )
                                }
                            </div>
                        </div>
                        <div className='detail-product-review col-10'>
                            <div className='dt-item-ref'>Ref: {selectedProduct?.detail?.href}</div>
                            <div className='dt-item-name'>{selectedProduct?.name}</div>
                            <div className="dt-item-money">
                                <div className="dt-item-price">${selectedProduct?.price}</div>
                                <div className="dt-item-sale"></div>
                            </div>
                            <div className='dt-item-description'>{selectedProduct?.detail?.content}</div>
                            <div className='dt-item-help'>
                                <div><a href="/">Product details</a></div>
                                <div><a href="/">Size guide</a></div>
                            </div>
                            <div className='dt-item-select'>
                                <select name="filter" className="select-size" defaultValue="">
                                    <option value="">Choose your size</option>
                                </select>
                            </div>
                            <div className='dt-btn-cart'>
                                <button onClick={() => addToCart(selectedProduct)}>Add to cart</button>
                            </div>
                        </div>
                    </div>
                    <div className='detail-product-2 col-10'>
                        <div className='detail-product-description'>
                            <div className='dt-product-detail col-10'>
                                <div>
                                    <h3>Product details</h3>
                                </div>
                                <div>{selectedProduct?.detail?.description?.infor1}</div>
                                <div>
                                    <ul>
                                        {selectedProduct?.detail?.description?.list.map((item, i) => {
                                            return (
                                                <li key={i}>{item}</li>
                                            )
                                        })}
                                    </ul>
                                </div>
                                <div className="tag col-10">
                                    {selectedProduct?.detail?.tag.map((item, i) => {
                                        return (
                                            <div className="tag-item" key={item}>{item}</div>
                                        )
                                    })}
                                </div>
                            </div>
                            <div className='dt-product-information col-10'>
                                <div>
                                    <h3>Information</h3>
                                </div>
                                <div>
                                    <ul>
                                        {selectedProduct?.detail?.description?.list.map((item, i) => {
                                            return (
                                                <li key={i}>{item}</li>
                                            )
                                        })}
                                    </ul>
                                </div>
                                <div>{selectedProduct?.detail?.description?.infor2}</div>
                                <div className='dt-item-help'>
                                    <div><a href="/">Delivery</a></div>
                                    <div><a href="/">Return</a></div>
                                    <div><a href="/">Help</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='detail-divide'></div>
                    <div className='related-product'>
                        <div className='related-listItem col-10'>
                            {isMobile ? <Swiper slidesPerView={2}
                                loop={true}
                                pagination={{
                                    clickable: true,
                                }}
                                navigation={true}
                                modules={[Pagination, Navigation]}
                                className="mySwiper">
                                {lastRandomProduct.map((item, i) => {
                                    return (
                                        <>
                                            <SwiperSlide key={item.id} className="item">
                                                <div className="item-img">
                                                    <img src={item.image} alt={item.name} />
                                                </div>
                                                <div className="item-bonus">{item.bonus}</div>
                                                <Link to={`/products/${item.id}`} style={{ color: '#0a95ff', textDecoration: 'none' }}><div className="item-description">{item.name}</div></Link>
                                                <div className="item-money">
                                                    <div className="item-price">${item.price}</div>
                                                </div>
                                            </SwiperSlide>
                                        </>
                                    )
                                })}
                            </Swiper> : <Swiper slidesPerView={3}
                                loop={true}
                                pagination={{
                                    clickable: true,
                                }}
                                spaceBetween={10}
                                autoplay={{
                                    delay: 2500,
                                    disableOnInteraction: false,
                                }}
                                navigation={true}
                                modules={[Pagination, Navigation, Autoplay]}
                                className="mySwiper">
                                {lastRandomProduct.map((item, i) => {
                                    return (
                                        <>
                                            <SwiperSlide key={item.id} className="item">
                                                <div className="item-img">
                                                    <img src={item.image} alt={item.name} />
                                                </div>
                                                <div className="item-bonus">{item.bonus}</div>
                                                <Link to={`/products/${item.id}`} style={{ color: '#0a95ff', textDecoration: 'none' }}><div className="item-description">{item.name}</div></Link>
                                                <div className="item-money">
                                                    <div className="item-price">${item.price}</div>
                                                </div>
                                            </SwiperSlide>
                                        </>
                                    )
                                })}
                            </Swiper>}
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default Detail;