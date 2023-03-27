export default function Footer() {
    return (
        <>
            <div className="footer">
                <div className="footer-information">
                    <h2 style={{ fontWeight: 600 }}>MEESTO</h2>
                    <div className="footer-3">
                        <div className="footer-3a">
                            <h4>Services</h4>
                            <a href="/">Sale</a> <br />
                            <a href="/">Men's colleaction </a> <br />
                            <a href="/">Woman's colleaction </a> <br />
                        </div>
                        <div className="footer-3b">
                            <div className="footer-3b-1">
                                <h4>Company</h4>
                                <a href="/">About us</a> <br />
                                <a href="/">Contact us</a> <br />
                                <a href="/">Stores location</a> <br />
                            </div>
                            <div className="footer-3b-2">
                                <h4>Help</h4>
                                <a href="/">Clothing care</a> <br />
                                <a href="/">Shoe care</a> <br />
                                <a href="/">Delivery</a> <br />
                            </div>
                        </div>
                        <div className="footer-3c">
                            <div className="footer-3c-1">
                                <div><i className="fa-brands fa-twitter" /></div>
                                <div><i className="fa-brands fa-facebook" /></div>
                                <div><i className="fa-brands fa-github" /></div>
                                <div><i className="fa-brands fa-instagram" /></div>
                            </div>
                            <div className="divider" />
                            <div className="footer-3c-2">
                                <div>
                                    <img src="./image/Visa_Inc._logo.svg.png" alt="" />
                                </div>
                                <div>
                                    <img src="./image/mastercard.svg.png" alt="" />
                                </div>
                                <div>
                                    <img src="./image/PayPal.svg.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}