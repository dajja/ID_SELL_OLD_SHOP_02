import '../sass/login.scss';
import React, { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import bcrypt from 'bcryptjs';
import { Link, useNavigate } from 'react-router-dom';
import jwt_decode from "jwt-decode";

function Login() {
    let navigate = useNavigate();
    let dispatch = useDispatch();
    var registedUsers = useSelector(state => state.users.registedUsers);
    useEffect(() => {
        axios.get("http://localhost:8000/registerUsers")
            .then(res => dispatch({ type: "SAVE_USERS", payload: res.data }))
            .catch(err => console.log(err));
    }, [])
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm();
    const FormSubmit = (data) => {
        console.log(data);
        dispatch(loginUser(data));
    }
    const loginMessage = {
        email: {
            required: "⚠ You have not entered information",
            pattern: {
                value: /^\S+@\S+\.\S+$/,
                message: "⚠ Wrong format"
            }
        },
        password: {
            required: "⚠ You have not entered information"
        }
    }
    const [passwordType, setPasswordType] = useState("password");
    const hideIcon = useRef("fa-eye");
    const handlePassword = () => {
        if (passwordType === "password") {
            setPasswordType("text");
            hideIcon.current.classList.add("fa-eye-slash");
            hideIcon.current.classList.remove("fa-eye");
        } else {
            setPasswordType("password");
            hideIcon.current.classList.remove("fa-eye-slash");
            hideIcon.current.classList.add("fa-eye");
        }
    }
    const loginUser = (data) => {
        return async (dispatch, getState) => {
            dispatch({ type: "LOGIN_USER_REQUEST" });
            try {
                let authentication = authenUser(data);
                if (authentication) {
                    const res = await axios.post("http://localhost:8000/loginUser", {
                        email: authentication.email,
                        password: authentication.password,
                    })
                    console.log("dang nhap thanh cong");
                    dispatch({ type: "LOGIN_USER_SUCCESS", payload: res.data });
                    // sessionStorage.setItem("user", authentication);
                    navigate("/");
                } else {
                    console.log("dang nhap that bai");
                    dispatch({ type: "LOGIN_USER_ERROR" });
                }
            }
            catch (error) {
                console.log(error);
                dispatch({ type: "LOGIN_USER_ERROR" })
            }
        }
    }
    const authenUser = (data) => {
        console.log(data);
        const userEmail = registedUsers.find(e => e.email === data.email);
        if (userEmail && bcrypt.compareSync(data.password, userEmail?.password)) {
            console.log("dung roi");
            return userEmail;
        } else {
            console.log("sai roi");
            return null;
        }
    }
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
                            <form onSubmit={handleSubmit(FormSubmit)}>
                                <h3 className="form-h3">Hello Again!</h3>
                                <p >Welcome Back</p>
                                <div className="form-input ">
                                    <label htmlFor="email" >Email</label> <br />
                                    <input type="text" placeholder="Email address" name="email" tabIndex={1} {...register("email", loginMessage.email)} /> <br />
                                    <div className='error'>{errors?.email && errors.email.message} </div>
                                    <label htmlFor="password" >Password</label>  <br />
                                    <input type={passwordType} placeholder="Password" name="password" tabIndex={1} {...register("password", loginMessage.password)} />
                                    <i className="fa-solid fa-eye" onClick={handlePassword} ref={hideIcon} /> <br />
                                    <div className='error'>{errors?.password && errors.password.message} </div>
                                    <button className="form-btn" type="submit"> Login </button>  <br />
                                    <div className="right-item-link">
                                        <a href="/">Forgot password</a>
                                        <p>Chưa có tài khoản ?<Link to={"/register"}> Đăng kí </Link> </p>
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