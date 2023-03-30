import '../sass/register.scss';
import React, { useState, useEffect } from 'react';

function Register() {
    const [values, setValues] = useState({
        email: '',
        username: '',
        password: '',
        confirmpassword: '',
    })
    const [errors, setErrors] = useState("");
    function handleInput(e) {
        const newObj = {...values, [e.target.username]: e.target.value};
        setValues(newObj);
    }
    function handleValidation(e) {
        e.preventDefault();
        
    }
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
                                    <input type="text" name="email" placeholder="Email" onChange={handleInput}/> <br />
                                    <label htmlFor="username">Name</label> <br />
                                    <input type="text" name="username" placeholder="username" onChange={handleInput}/> <br />
                                    <label htmlFor="password">Password</label> <br />
                                    <input type="text" name="password" placeholder="password" onChange={handleInput}/>
                                    <i className="fa-solid fa-eye" /> <br />
                                    <label htmlFor="cfpassword">Confirm password</label> <br />
                                    <input type="text" name="cfpassword" placeholder="confirm password" onChange={handleInput}/>
                                    <i className="fa-solid fa-eye" /> <br />
                                    <button className="form-btn">Register</button> 
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