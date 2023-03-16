import '../sass/homepage.scss';
import Header from './Header';
import Footer from './Footer';
import Item from './Item';

function Homepage() {
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
            <div className="homepage-container">
                <Header/>
                <div className="homepage-slide">
                    <img className="homepage-slide-img" src="./image/hero.png" alt="" />
                </div>
                <div className="homepage-fashion">
                    <div className="homepage-fashion-3 col-10">
                        <div className="col-10 hp-fashion-img-div">
                            <img className="col-10 hp-fashion-img" src="./image/Object.png" alt="" />
                        </div>
                        <div className="hp-fashion-trig-desc col-10">
                            <div className="hp-fashion-description hp-fs-description-grid">
                                <div className="hp-fs-description-grid-item1">
                                    <p>Part of our responsible edit</p>
                                    <p>Waterproof up to 10,000mm</p>
                                    <p>10,000gm breathable</p>
                                    <p>Signature printed lining</p>
                                    <p>Two internal pockets</p>
                                    <p>Adjustable hood</p>
                                </div>
                                <div className="hp-fs-description-grid-item1">
                                    <p>Funnel neck</p>
                                    <p>Storm placket</p>
                                    <p>Long sleeves</p>
                                    <p>Adjustable wrist cuffs with built</p>
                                </div>
                                <div className="hp-fs-description-grid-item2">A woman has the age she deserves. Luxury
                                    will be
                                    always around, no matter what happenin the world. I've always thought of the T-shirt as
                                    the Alpha and Omega of the fashion alphabet. I think I'd go mad if I didn't have a place
                                    to escape to. I am like a freight train. Working on the details, twisting them and
                                    playing with them over the years, but always staying on the same track.</div>
                                <div className="hp-fs-description-grid-item2">The Parisian heat dictates for plenty of
                                    light
                                    fabrics - louche linens and cool-coloured stonewash denim - and note the combination of
                                    high and low as sharp tailoring is teamed with light shirts and casual Tees</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="homepage-product">
                    <div className="homepage-listItem">
                        {listItem.map((item, i) => (
                            <Item key={i} img={item.img} bonus={item.bonus} description={item.description} price={item.price} sale={item.sale}/>
                        ))}
                    </div>
                </div>
                <div className="homepage-sale">
                    <div className="homepage-sale-item">
                        <div className="hp-sale-item-text">
                            <p>70% off</p>
                            <button><a href="/">Shop now</a></button>
                        </div>
                        <div className="hp-sale-item-img">
                            <img src="./image/placeholder.jpg" alt="" />
                        </div>
                    </div>
                </div>
                <div className="homepage-news">
                    <img src="./image/news.jpg" alt="" />
                </div>
                <div className="homepage-subcribe">
                    <div className="homepage-subcribe-form col-10">
                        <div className="homepage-subcribe-form-item">
                            <div className="hp-subcribe-form-item1 col-10">
                                <div className="hp-sub-form-item1-1 col-3">Newsletter via e-mail</div>
                                <div className="hp-sub-form-item1-2 col-3"><input type="text" /></div>
                                <div className="hp-sub-form-item1-3 col-4"><a href="/">Subcribe</a></div>
                            </div>
                            <div className="hp-subcribe-form-item2">
                                <input type="checkbox" />
                                <p> &nbsp; I have been able to read and understand on the use of my personal data explained
                                    in the
                                    <a href="/">privacy policy</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="homepage-categories">
                    <div className="homepage-categories-form">
                        <div className="homepage-categories-form-item1">
                            <p>The Parisian heat dictates for plenty of light fabrics - louche linens and cool-coloured
                                stonewash denim - and note the combination of high and low as sharp tailoring is teamed with
                                light shirts and casual Tees</p>
                        </div>
                        <div className="homepage-categories-form-item2 col-10">
                            <div><a href="/">Shoe</a></div>
                            <div><a href="/">Bag's</a></div>
                            <div><a href="/">T-shirts</a></div>
                            <div><a href="/">Pants</a></div>
                        </div>
                    </div>
                </div>
                <div className="homepage-instagram">
                    <div className="homepage-instagram-item">
                        <div className="homepage-instagram-item1 col-10">
                            <p>instashop</p>
                            <h4>@misto_insta</h4>
                        </div>
                        <div className="homepage-instagram-item2 col-10">
                            <img className="col-8" src="./image/drill.jpg" alt="" />
                        </div>
                    </div>
                    <div className="hp-instagram-arrow"><i className="fa-solid fa-chevron-up" /></div>
                </div>
                <Footer/>
            </div>
        </>
    )
}
export default Homepage;