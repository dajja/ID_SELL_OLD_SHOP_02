import '../sass/catalog.scss';
import Header from './Header';
import Footer from './Footer';
import Breadcrumb from '../componentLittle/Breadcrumb';

function Catalog() {
    return (
        <>
            <div className="catalog-container">
                <Header/>
                <Breadcrumb/>
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
                        <div className="catalog-item">
                            <div className="ctl-item-img">
                                <img src="./image/giay.webp" alt="" />
                            </div>
                            <div className="ctl-item-bonus">Free shipping</div>
                            <div className="ctl-item-description">Lorem isicing elit. Nulla numquam modi, consectetur sit minus! Consequuntur, placeat repellat?</div>
                            <div className="clt-item-money">
                                <div className="ctl-item-price">$26,40</div>
                                <div className="ctl-item-sale">$20</div>
                            </div>
                        </div>
                        <div className="catalog-item">
                            <div className="ctl-item-img">
                                <img src="./image/giay.webp" alt="" />
                            </div>
                            <div className="ctl-item-bonus">Free shipping</div>
                            <div className="ctl-item-description">Lorem isicing elit. Nulla numquam modi, consectetur sit minus! Consequuntur, placeat repellat?</div>
                            <div className="clt-item-money">
                                <div className="ctl-item-price"><del>$26,40</del></div>
                                <div className="ctl-item-sale">$20</div>
                            </div>
                        </div>
                        <div className="catalog-item">
                            <div className="ctl-item-img">
                                <img src="./image/giay.webp" alt="" />
                            </div>
                            <div className="ctl-item-bonus">Free shipping</div>
                            <div className="ctl-item-description">Lorem isicing elit. Nulla numquam modi, consectetur sit minus! Consequuntur, placeat repellat?</div>
                            <div className="clt-item-money">
                                <div className="ctl-item-price">$26,40</div>
                                <div className="ctl-item-sale">$20</div>
                            </div>
                        </div>
                        <div className="catalog-item">
                            <div className="ctl-item-img">
                                <img src="./image/giay.webp" alt="" />
                            </div>
                            <div className="ctl-item-bonus">Free shipping</div>
                            <div className="ctl-item-description">Lorem isicing elit. Nulla numquam modi, consectetur sit minus! Consequuntur, placeat repellat?</div>
                            <div className="clt-item-money">
                                <div className="ctl-item-price">$26,40</div>
                                <div className="ctl-item-sale">$20</div>
                            </div>
                        </div>
                        <div className="catalog-item">
                            <div className="ctl-item-img">
                                <img src="./image/giay.webp" alt="" />
                            </div>
                            <div className="ctl-item-bonus">Free shipping</div>
                            <div className="ctl-item-description">Lorem isicing elit. Nulla numquam modi, consectetur sit minus! Consequuntur, placeat repellat?</div>
                            <div className="clt-item-money">
                                <div className="ctl-item-price">$26,40</div>
                                <div className="ctl-item-sale">$20</div>
                            </div>
                        </div>
                        <div className="catalog-item">
                            <div className="ctl-item-img">
                                <img src="./image/giay.webp" alt="" />
                            </div>
                            <div className="ctl-item-bonus">Free shipping</div>
                            <div className="ctl-item-description">Lorem isicing elit. Nulla numquam modi, consectetur sit minus! Consequuntur, placeat repellat?</div>
                            <div className="clt-item-money">
                                <div className="ctl-item-price">$26,40</div>
                                <div className="ctl-item-sale">$20</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="catalog-btn">
                    <button>Load More</button>
                </div>
                <div className="ctl-divide" />
                <div className="catalog-tag col-10">
                    <div className="clt-tag-item">Sneakers</div>
                    <div className="clt-tag-item">Running</div>
                    <div className="clt-tag-item">Sport</div>
                    <div className="clt-tag-item">Casual</div>
                    <div className="clt-tag-item">Clothing</div>
                    <div className="clt-tag-item">Adidas</div>
                </div>
                <Footer/>
            </div>
        </>
    )
}

export default Catalog;