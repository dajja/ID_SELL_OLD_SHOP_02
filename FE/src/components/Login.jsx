import '../sass/login.scss';
function Login() {
    return (
        <>
            <div className="login-container">
                <div className="login-content">
                    <div className="login-content-left col-10">
                        <div className="login-content-left-item">
                            <img src="./image/logo.jpg" alt="" />
                            <p className="login-content-left-item-p">Meesto - Web ban hang</p>
                        </div>
                    </div>
                    <div className="login-content-right col-10">
                        <div className="login-content-right-item">
                            <form>
                                <h3 className="form-h3">Hello Again!</h3>
                                <p >Welcome Back</p>
                                <div className="form-input ">
                                    <label htmlFor="email" >Email</label> <br />
                                    <input type="text" placeholder="Email address" name="email" tabIndex={1} /> <br />
                                    <label htmlFor="password" >Password</label>  <br />
                                    <input type="text" placeholder="Password" name="password" tabIndex={1} />
                                    <i className="fa-solid fa-eye-slash" /> <br />
                                    <button className="form-btn"> <a href="/"> Login</a> </button>  <br />
                                    <div className="right-item-link">
                                        <a href="/">Forgot password</a>
                                        <p>Chưa có tài khoản ?<a href="/"> Đăng kí </a> </p>
                                    </div>
                                </div>
                                <div className="right-item-otherlink">
                                    <div className="otherlink-divide" />
                                    <div>Hoặc</div>
                                    <div className="otherlink-divide" />
                                </div>
                                <div className="right-item-social">
                                    <div><i className="fa-brands fa-facebook" /></div>
                                    <div><i className="fa-brands fa-google" /></div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;