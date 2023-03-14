import '../sass/detail.scss';
import Breadcrumb from '../componentLittle/Breadcrumb';
import Footer from './Footer';
import Header from './Header';

function Detail () {
    return (
        <>
            <div className='detail-container'>
                <Header/>
                <Breadcrumb/>
                <div className='pad-15-20'>
                    <div className='detail-product-1'>
                        <div className='detail-product-image'>
                            <div className='dt-item-img'>
                                <img src='./image/detail1.jpg' alt="" />
                            </div>
                        </div>
                        <div className='detail-product-review'>
                            <div className='dt-item-ref'>Ref: adadadadda</div>
                            <div className='dt-item-name'>Fashion axe vegan single-origin cotton keffiyeh shoe </div>
                            <div className="dt-item-money">
                                <div className="dt-item-price">$26,40</div>
                                <div className="dt-item-sale">$20</div>
                            </div>
                            <div className='dt-item-description'>Men's black technical lace-up sneakers in contrasting materials with a contrasting cotton-tab at the heel</div>
                        </div>
                    </div>
                    <div className='detail-product-2'>
                        <div className='detail-product-description'>
                            <div className='dt-product-detail'>
                                <div></div>
                                <div></div>
                            </div>
                            <div className='dt-product-information'>
                                <div></div>
                                <div></div>
                            </div>
                        </div>
                    </div>
                    <div className='detail-divide'></div>
                    <div className='other-product'>

                    </div>
                </div>
                <Footer/>
            </div>
        </>
    )
}

export default Detail;