import '../sass/account.scss';
import Header from './Header';
import Footer from './Footer';
import Breadcrumb from '../componentLittle/Breadcrumb';

function Account () {
    let tagData = [
        'Terms and Conditions', 'Help', 'Delivery', 'Return', 'Privacy',
    ]
    return (
        <>
            <div className="account-container">
                <Header/>
                <Breadcrumb/>
                <div className='account-content pad-15-20'>
                    <h2>My account</h2>
                    <div className='account-content-infor col-10'>
                        <div className='account-content-1 col-10'> 
                            <i class="fa-solid fa-chevron-left"></i>
                            <a href="/">Log Out</a>
                        </div>
                        <div className='account-content-2 col-10'>
                            <div>
                                <h3>Hello ,</h3>
                            </div>
                            <div className='account-infor-divide'></div>
                            <div className='act-content-email'>
                                <h4>Email</h4>
                                <div className='act-content-email-1 col-10'>
                                    <div>dada@gmail</div>
                                    <a href="/">Change password</a>
                                </div>
                            </div>
                            <div className='act-content-address col-10'>
                                <div className='act-content-address-1 col-10'>
                                    <h4>Billing address</h4>
                                    <div>151 Mill St, Eunice, LA, 70535</div>
                                    <a href="/">Edit</a>
                                </div>
                                <div className='act-content-address-2 col-10'>
                                    <h4>Shipping address</h4>
                                    <div>151 Mill St, Eunice, LA, 70535</div>
                                    <a href="/">Edit</a>
                                </div>
                            </div>
                            <div className='act-content-order col-10'>
                                <div className='act-content-order-1 col-7'>
                                    <h4>Your resent orders #</h4>
                                    <div>You currently have no orders</div>
                                </div>
                                <div className='act-content-order-2 col-3'>
                                    <h4>Date</h4>
                                    <div></div>
                                </div>
                                <div className='act-content-order-3 '>
                                    <h4>Status</h4>
                                    <div></div>
                                </div>
                                <div className='act-content-order-4 '>
                                    <h4>Payment method</h4>
                                    <div></div>
                                </div>
                                <div className='act-content-order-5 '>
                                    <h4>Amount</h4>
                                    <div></div>
                                </div>
                                <div className='act-content-order-6'>
                                    <button>See more</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="account-divide" />
                <div className="tag col-10">
                    {tagData.map((item, i) => {
                        return (
                            <div className="tag-item">{item}</div>
                        )
                    })}
                </div>
                <Footer/>
            </div>
        </>
    )
}

export default Account;