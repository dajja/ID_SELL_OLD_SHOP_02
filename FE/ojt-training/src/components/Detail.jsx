import '../sass/detail.scss';
import Breadcrumb from '../componentLittle/Breadcrumb';
import Footer from './Footer';
import Header from './Header';
import Item from './Item';

function Detail() {
    let tagData = [
        'Sneakers', 'Running', 'Trainers', 'Outdoor and active wear'
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
                                <div className='dt-item-img'>
                                    <img src='./image/detail1.jpg' alt="" />
                                </div>
                                <div className='dt-item-img'>
                                    <img src='./image/detail2.jpg' alt="" />
                                </div>
                                <div className='dt-item-img'>
                                    <img src='./image/detail3.jpg' alt="" />
                                </div>
                                <div className='dt-item-img'>
                                    <img src='./image/detail4.jpg' alt="" />
                                </div>
                            </div>
                        </div>
                        <div className='detail-product-review col-10'>
                            <div className='dt-item-ref'>Ref: adadadadda</div>
                            <div className='dt-item-name'>Fashion axe vegan single-origin cotton keffiyeh shoe </div>
                            <div className="dt-item-money">
                                <div className="dt-item-price">$26,40</div>
                                <div className="dt-item-sale">$20</div>
                            </div>
                            <div className='dt-item-description'>Men's black technical lace-up sneakers in contrasting materials with a contrasting cotton-tab at the heel</div>
                            <div className='dt-item-help'>
                                <div><a href="/">Product details</a></div>
                                <div><a href="/">Size guide</a></div>
                            </div>
                            <div className='dt-item-select'>
                                <select name="filter" className="select-size">
                                    <option value={0} selected="selected">Choose your size</option>
                                </select>
                            </div>
                            <div className='dt-btn-cart'>
                                <a href="/" >Add to cart</a>
                            </div>
                        </div>
                    </div>
                    <div className='detail-product-2 col-10'>
                        <div className='detail-product-description'>
                            <div className='dt-product-detail col-10'>
                                <div>
                                    <h3>Product details</h3>
                                </div>
                                <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos porro delectus mollitia voluptatum impedit nesciunt, omnis inventore non voluptatem, ea ad amet, nostrum fugit quis cumque pariatur iste iure? Recusandae!</div>
                                <div>
                                    <ul>
                                        <li>Green juice flexitarian jean shorts</li>
                                        <li>Stumptown mumblecore asymmetrical ugh</li>
                                        <li>Fashion axe vegan signon </li>
                                    </ul>
                                </div>
                                <div className="tag col-10">
                                    {tagData.map((item, i) => {
                                        return (
                                            <div className="tag-item">{item}</div>
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
                                        <li>Green juice flexitarian jean shorts</li>
                                        <li>Stumptown mumblecore asymmetrical ugh</li>
                                        <li>Fashion axe vegan signon </li>
                                    </ul>
                                </div>
                                <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas labore cupiditate, necessitatibus natus doloribus, eligendi saepe ipsam, quo fugit pariatur voluptatem iusto ad illo in voluptatum iure? Similique, cumque delectus?</div>
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
                            {listItem.map((item, i) => (
                                <Item key={i} img={item.img} bonus={item.bonus} description={item.description} price={item.price} sale={item.sale}/>
                            ))}
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