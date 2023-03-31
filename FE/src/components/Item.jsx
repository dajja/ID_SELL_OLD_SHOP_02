import '../sass/item.scss';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import axios from 'axios';


function Item(props) {


    /*  let {item} = props; */
    
    
    let dispatch = useDispatch();
    useEffect(() => {
        fetch("http://localhost:8000/cart")
            .then((res) => res.json())
            .then((data) => dispatch({ type: "SAVE_CART", payload: data }))
            .catch((error) => console.log(error));
            
            
        fetch("http://localhost:8000/products")
            .then((res) => res.json())
            .then((data) =>{
                console.log(data);
             dispatch({type: "SAVE_PRODUCTS", payload: data})})
            .catch((error) => console.log(error));
    }, [])
    let cart = useSelector((state) => state.cart)
    let handleClick = (element) => {
        console.log(element);
        console.log(element.id);
        console.log(cart);
        /* console.log("hadadad", element);
        dispatch({
            type: "ADD_TO_CART", paycak: element
        }) */
        let findIndexCart = cart.findIndex((e, i) => e.id === element.id)
        console.log(findIndexCart);
        if (findIndexCart === -1) {
            
            axios.post("http://localhost:8000/cart",
                {
                    id: element.id,
                    name: element.name,
                    image: element.image,
                    price: element.price,
                    number: 1

                })
                .then(res => {
                    dispatch({
                        type: "ADD_TO_CART", paycak: element
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
                        type: "EDIT_TO_CART", paycak: element
                    })
                })
                .catch(err => {
                    alert("ERRO")
                })
        }

    }
    let products = useSelector((state) =>  state.products)
    return (
        <>
            {products?.length > 0 && products.map((element, i) => {
                return (
                    <>
                        <div key={i} className="item">
                            <div className="item-img">
                                <img src={element.image} alt={element.name} />
                            </div>
                            <div className="item-bonus">{element.bonus}</div>
                            <div className="item-description">{element.name}</div>
                            <div className="item-money">
                                <div className="item-price">${element.price}</div>
                                <div className="item-sale"></div>
                                <Link to={`/product/${element.id}`} style={{ color: '#0a95ff', textDecoration: 'none' }}>Detail</Link>
                                <button onClick={() => handleClick(element)}>Add to cart</button>
                            </div>
                        </div>
                    </>)
            })}

        </>
    )
}
export default Item;