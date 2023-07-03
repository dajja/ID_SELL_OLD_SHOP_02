import {useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useState, useEffect } from "react";
export default function Header() {
    let dispatch=useDispatch()
    let cart = useSelector((state) => state.products.cart);
    const [showBar, setShowBar] = useState(false);
    let handleSidebar = () => {
        setShowBar(!showBar);
    }
    
    useEffect(() => {
        fetch("http://localhost:8000/cart")
        .then((res) => res.json())
        .then((data) => dispatch({type: "SAVE_CART", payload: data}))
        .catch((error) => console.log(error));
    }, [dispatch])
    const resetPage =() => {
        dispatch({type: "RESET_FS"});
    }
    return (
        <>
            <div className="header">
                <div className="header-3 col-10">
                    <div className="header-3a header-3-item col-3">
                        <button onClick={handleSidebar}>
                            <img src="/image/3dots.svg" alt="" /> <br />
                        </button>
                        <div>
                            {showBar ? <Sidebar active="active" showBar={handleSidebar}/> : <Sidebar /> }
                        </div>
                        <div className="header-3a header-3-item-2">
                            <Link to="/sale" className="a-header">Sale</Link>
                        </div>
                        <div className="header-3a header-3-item-2">Men</div>
                        <div className="header-3a header-3-item-2">Woman</div>
                    </div>
                    <div className="header-3b header-3-item col-4">
                        <div>
                            <Link to={'/'} onClick={() => resetPage()} className="a-header"><h2 style={{ fontWeight: 600 }}>MESSTO</h2></Link>
                        </div>
                    </div>
                    <div className="header-3c header-3-item col-4">
                        <div><i className="fa-solid fa-magnifying-glass" /></div>
                        <div className="header-3-dola">En | USD</div>
                        <div className="header-3-itemCart">
                            <Link to={'/cart'} ><i className="fa-solid fa-cart-shopping" /> </Link>
                            {cart.length>0 ? <div className="header-3-itemAmount"> {cart.length} </div> :""}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}