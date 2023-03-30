import '../sass/about.scss';
import Header from './Header';
import Breadcrumb from '../componentLittle/Breadcrumb';
import Footer from './Footer';

export default function About () {
    let tagData = [
        'Terms and Conditions', 'Help', 'Delivery', 'Return', 'Privacy',
    ]
    return (
        <>
            <div className='about-container'>
                <Header/>
                <Breadcrumb/>
                <div className='about-content pad-15-20 col-10'>   
                    <div className='abt-content col-10'>
                        <div className='abt-content-1 col-10'>
                            <div className='abt-content-img col-10'>
                                <img className='col-8' src="./image/about1.jpg" alt="" />
                            </div>
                            <div className='abt-content-description col-10'>
                                <h4>Innovative and conscious retail concept</h4>
                                <p>Iceland small batch art party asymmetrical waistcoat locavore. Dreamcatcher chillwave drinking vinegar, pop-up kombucha chartreuse gluten-free single-origin coffee VHS tumeric deep v slow-carb vinyl raclette. Austin brunch plaid quinoa pug. Hammock taxidermy activated charcoal migas kinfolk shaman gluten-free palo santo ugh try-hard +1.</p>
                                <div className='abt-content-icon'>
                                    <i class="fa-brands fa-facebook"></i>
                                    <i class="fa-brands fa-solid fa-instagram"></i>
                                    <i class="fa-brands fa-twitter"></i>
                                    <i class="fa-solid fa-bell"></i>
                                </div>
                            </div>
                        </div>
                        <div className='abt-content-2 col-10'>
                            <div className='abt-content-description col-10'>
                                <p>Opening hours from 9AM until 8PM CET time on business days</p>
                                <p>69 Chapel Street <br/>  Woodbridge, VA 22191</p>
                                <p>0692326555</p>
                                <p>mistomail@email.com</p>
                            </div>
                            <div className='abt-content-img col-10'>
                                <img className='col-8' src="./image/about2.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="about-divide" />
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