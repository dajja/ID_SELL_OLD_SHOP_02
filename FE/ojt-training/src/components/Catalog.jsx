import '../sass/catalog.scss';
import Header from './Header';
import Footer from './Footer';
import Breadcrumb from '../componentLittle/Breadcrumb';
import Item from './Item';

function Catalog() {
    let tagData = [
        'Sneakers', 'Running', 'Sport', 'Casual', 'Clothing', 'Adidas'
    ]
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
        {
            img: <img src="./image/giay.webp" alt="" />,
            bonus: 'Free shipping',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab iusto porro minus tempora ducimus sapiente nobis velit placeat explicabo, magnam sint odio alias minima error rerum libero doloribus itaque.',
            price: 26,
            sale: 20,
        }
    ]
    return (
        <>
            <div className="catalog-container">
                <Header />
                <Breadcrumb />
                <div className="catalog-filter pad-15-20 col-8">
                    <div className="catalog-filter-1 col-6">
                        <p className="catalog-filter-p">View: </p>
                        <div>
                            <select name="sort" id className="select">
                                <option value={0} selected="selected">Sort</option>
                                <option value={1}> Theo chu cai (A-&gt;Z)</option>
                                <option value={2}> Theo chu cai (Z-&gt;A)</option>
                                <option value={3}> Theo so tien (S-&gt;B)</option>
                                <option value={4}> Theo so tien (B-&gt;S)</option>
                            </select>
                        </div>
                    </div>
                    <div className="catalog-filter-2 col-8">
                        <select name="filter" id className="select col-8">
                            <option value={0} selected="selected">View filter</option>
                            <option value={1}> Giày</option>
                            <option value={2}> Túi</option>
                            <option value={3}> Khác</option>
                        </select>
                    </div>
                </div>
                <div className="catalog-listItem pad-15-20">
                    <div className="catalog-list-grid">
                        {listItem.map((item, i) => (
                            <Item key={i} img={item.img} bonus={item.bonus} description={item.description} price={item.price} sale={item.sale} />
                        ))}
                    </div>
                </div>
                <div className="catalog-btn">
                    <button>Load More</button>
                </div>
                <div className="ctl-divide" />
                <div className="tag col-10">
                    {tagData.map((item, i) => {
                        return (
                            <div className="tag-item">{item}</div>
                        )
                    })}
                </div>
                <Footer />
            </div>
        </>
    )
}

export default Catalog;