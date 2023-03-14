import '../sass/register.scss';
function Register() {
    return (
        <>
            <div className="register-container">
                <div className="register-content">
                    <div className="register-content-left col-10">
                        <div className="register-content-left-item">
                            <img src="./image/logo.jpg" alt="" />
                            <p className="register-content-left-item-p">Meesto - Web ban hang</p>
                        </div>
                    </div>
                    <div className="register-content-right col-10">
                        <div className="register-content-right-item">
                            <form>
                                <h3 className="form-h3">Register</h3>
                                <div className="form-input">
                                    <label htmlFor="email">Email</label> <br />
                                    <input type="text" name="email" placeholder="Email" /> <br />
                                    <label htmlFor="username">Name</label> <br />
                                    <input type="text" name="username" placeholder="username" /> <br />
                                    <label htmlFor="password">Password</label> <br />
                                    <input type="text" name="password" placeholder="password" />
                                    <i className="fa-solid fa-eye" /> <br />
                                    <label htmlFor="cfpassword">Confirm password</label> <br />
                                    <input type="text" name="cfpassword" placeholder="confirm password" />
                                    <i className="fa-solid fa-eye" /> <br />
                                    <button className="form-btn"><a href="/"> Register</a></button>
                                    <p>Da co tai khoan ? <a href="/">Dang nhap</a></p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Register;