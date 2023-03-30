import '../sass/sidebar.scss';
import { Link } from 'react-router-dom';
import { useState} from 'react';
function Sidebar({ showBar, active }) {
    // console.log(showBar);
    // console.log(active);
    let text = "Austin brunch cloud bread cronut photo booth locavore crucifix edison bulb pork belly distillery. Before they sold out palo santo try-hard, vaporware salvia cardigan letterpress ugh butcher bitters brooklyn."
    const [showList, setShowList] = useState(false);
    let handleSidebar = () => {
        showBar('dadad')
    }
    let hoverBar = () => {
        setShowList(!showList);
    }
    return (
        <>
            <div className={`sidebar-container ${active}`} >
                <button onClick={handleSidebar}>X</button>
                <div className="sidebar-content">
                    <div className='sidebar-user'>
                        <i class="fa-regular fa-user"></i>
                        <div>Xin chao user</div>
                    </div>
                    <div>
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </div>
                    <div>Sale</div>
                    <div>Man</div>
                    <div>Woman</div>
                    <div>Lookbook</div>
                    <div className='sidebar-pagelist'>
                        <div>Pages </div>
                        <div>
                            <div onClick={() => hoverBar()} className="sidebar-pagelist-1">
                                {showList ? <>
                                    <i class="fa-solid fa-chevron-right actived"></i>
                                <ul>
                                    <li className='li-actived'> <Link to={'/about'}>About</Link></li>
                                    <li className='li-actived'> <Link to={'/catalog'}>Our Products</Link></li>
                                    <li className='li-actived'> <Link to={'/login'}>Login</Link></li>
                                </ul>
                                </>
                                 : <i class="fa-solid fa-chevron-right"></i> }
                            </div>
                        </div>
                    </div>
                    <div className='sidebar-information'>
                        <div>
                            {text}
                        </div>
                    </div>
                    <div className='sidebar-social'>
                        <i class="fa-brands fa-facebook"></i>
                        <i class="fa-brands fa-instagram"></i>
                        <i class="fa-brands fa-twitter"></i>
                        <i class="fa-solid fa-square-phone"></i>
                        <i class="fa-regular fa-bell"></i>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Sidebar;