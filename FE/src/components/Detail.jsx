import '../sass/detail.scss';
import axios from 'axios';
import Breadcrumb from '../componentLittle/Breadcrumb';
import Footer from './Footer';
import Header from './Header';

import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Detail() {
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
    useEffect(() => {
        fetch("http://localhost:8000/cart")
            .then((res) => res.json())
            .then((data) => dispatch({ type: "SAVE_CART", payload: data }))
            .catch((err) => console.log(err));
    }, [dispatch])
    let listItem = [
        {
            img: <img src="./image/giay.webp" alt="" />,
            bonus: 'Free shipping',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab iusto porro minus tempora ducimus sapiente nobis velit placeat explicabo, magnam sint odio alias minima error rerum libero doloribus itaque.',
            price: 26,
            sale: 20,
        },
        {
            img: <img src="./image/giay.webp" alt="" />,
            bonus: 'Free shipping',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab iusto porro minus tempora ducimus sapiente nobis velit placeat explicabo, magnam sint odio alias minima error rerum libero doloribus itaque.',
            price: 26,
            sale: 20,
        },
        {
            img: <img src="./image/giay.webp" alt="" />,
            bonus: 'Free shipping',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab iusto porro minus tempora ducimus sapiente nobis velit placeat explicabo, magnam sint odio alias minima error rerum libero doloribus itaque.',
            price: 26,
            sale: 20,
        },
    ]
    return (
        <>
            <div className='detail-container'>
                <Header />
                <Breadcrumb />
                <div className='pad-15-20'>
                    <div className='detail-product-1 col-10'>
                        <div className='detail-product-image col-10'>
                            <div className='dt-product-image'>
                                {selectedProduct?.detail?.img.map((item, i) => {
                                    return (
                                        <div className='dt-item-img' key={i}>
                                            <img src={item} alt="" />
                                        </div>
                                    )
                                })}
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
                                            <div className="tag-item" key={i}>{item}</div>
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
                        <div className='related-arrow1 col-1'><i class="fa-solid fa-chevron-left"></i></div>
                        <div className='related-listItem col-10'>
                            {/* {products.length > 0 && products.map((item, i) => (
                                <Item key={i} element={item}/>
                            ))} */}
                            <div>product : {id}</div>
                        </div>
                        <div className='related-arrow2 col-1'><i class="fa-solid fa-chevron-right"></i></div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default Detail;