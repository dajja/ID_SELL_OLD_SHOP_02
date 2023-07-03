import '../sass/login.scss';
import React, { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import bcrypt from 'bcryptjs';
import { Link, useNavigate } from 'react-router-dom';
import Cookies from "js-cookie";

function Login() {
    let navigate = useNavigate();
    let dispatch = useDispatch();
    var users = useSelector(state => state.userss.users);
    const [errorMessage, setErrorMessage] = useState('');
    useEffect(() => {
        axios.get("http://localhost:8000/users")
            .then(res => dispatch({ type: "SAVE_USERS", payload: res.data }))
            .catch(err => console.log(err));
        //eslint-disable-next-line
    }, [])
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors }
    } = useForm();
    const FormSubmit = (data) => {
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
                    await axios.post("http://localhost:5000/login", {
                        id: authentication.id,
                        username: authentication.username,
                    }, {
                        headers: {
                            'Authorization': "backenddaucac"
                        }
                    })
                        .then(data1 => {
                            axios.get("http://localhost:8000/users/" + authentication.id)
                                .then(data => {
                                    pushToken(data);
                                })
                            function pushToken(data2) {
                                data2.data.token.push(data1.data.token);
                                axios.put("http://localhost:8000/users/" + authentication.id, data2.data, {
                                    headers: {
                                        'Authorization': "backenddaucac"
                                    },
                                })
                                    .then((res) => {
                                        if (res.status === 200) {
                                            dispatch({ type: "LOGIN_USER_SUCCESS", payload: res });
                                            localStorage.setItem("token", data1.data.token);
                                            reset();
                                            navigate("/");
                                        }
                                    })
                            }
                        })
                        .catch(error => {
                            console.log(error);
                            dispatch({ type: "LOGIN_USER_ERROR" });
                        })
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
        const userEmail = users.find(e => e.email === data.email);
        if (userEmail && bcrypt.compareSync(data.password, userEmail?.password)) {
            console.log("dung roi");
            setErrorMessage("");
            return userEmail;
        } else {
            setErrorMessage("⚠ Thông tin xác thực không chính xác");
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
                                    <input type={passwordType} placeholder="Password" name="password" tabIndex={1} {...register("password", loginMessage.password)} autoComplete='on' />
                                    <i className="fa-solid fa-eye" onClick={handlePassword} ref={hideIcon} /> <br />
                                    <div className='error'>{errors?.password && errors.password.message} </div>
                                    {errorMessage && <div className='error'>{errorMessage}</div>}
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