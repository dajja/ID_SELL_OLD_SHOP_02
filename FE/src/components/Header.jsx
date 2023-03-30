import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useState } from "react";
export default function Header() {
    let cart = useSelector((state) => state.cart);
    let total = cart.reduce((pre, cur) => (pre += cur.number), 0);
    const [showBar, setShowBar] = useState(false);
    let handleSidebar = () => {
        setShowBar(!showBar);
    }
    // console.log(showBar);
    return (
        <>
            <div className="header">
                <div className="header-3 col-10">
                    <div className="header-3a header-3-item col-3">
                        <button onClick={handleSidebar}>
                            <img src="./image/3dots.svg" alt="" /> <br />
                        </button>
                        <div>
                            {showBar ? <Sidebar active="active" showBar={handleSidebar}/> : <Sidebar /> }
                        </div>
                        <div className="header-3a header-3-item-2">Sale</div>
                        <div className="header-3a header-3-item-2">Men</div>
                        <div className="header-3a header-3-item-2">Woman</div>
                    </div>
                    <div className="header-3b header-3-item col-4">
                        <div>
                            <Link to={'/'} style={{ textDecoration: 'none', color: 'black' }}><h2 style={{ fontWeight: 600 }}>MESSTO</h2></Link>
                        </div>
                    </div>
                    <div className="header-3c header-3-item col-4">
                        <div><i className="fa-solid fa-magnifying-glass" /></div>
                        <div className="header-3-dola">En | USD</div>
                        <div className="header-3-itemCart">
                            <Link to={'/checkout'} ><i className="fa-solid fa-cart-shopping" /> </Link>
                            <div className="header-3-itemAmount"> {total} </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}