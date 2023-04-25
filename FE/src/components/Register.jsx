import '../sass/register.scss';
import React, { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import bcrypt from 'bcryptjs';

function Register() {
    const registerList = useSelector(state => state.users.registedUsers);
    const dispatch = useDispatch();
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm();
    console.log(errors);
    const FormSubmit = (data) => {
        // console.log(data);
        dispatch(registerUser(data));
        reset();
    }
    let password = watch('password');
    const registerMessage = {
        email: {
            required: "⚠ You have not entered information",
            pattern: {
                value: /^\S+@\S+\.\S+$/,
                message: "⚠ Wrong format"
            },
            validate: (val) => {
                if (registerList.find(e => e.email === val)) {
                    return "⚠ Email already exist"
                }
            }
        },
        firstname: {
            required: "⚠ You have not entered information"
        },
        lastname: {
            required: "⚠ You have not entered information"
        },
        password: {
            required: "⚠ You have not entered information",
            pattern: {
                value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
                message: "⚠ Password need at least one number, one uppercase word"
            },
            minLength: {
                value: 8,
                message: "⚠ Password need more than 8 chars"
            }
        },
        cfpassword: {
            required: "⚠ You have not entered information",
            validate: (val) => {
                if (password !== val) {
                    return "⚠ Password not matching";
                }
            }
        },
    }
    const [passwordType, setPasswordType] = useState("password");
    const hideIcon1 = useRef("fa-eye");
    const handlePass = () => {
        if (passwordType === "password") {
            setPasswordType("text");
            hideIcon1.current.classList.remove("fa-eye");
            hideIcon1.current.classList.add("fa-eye-slash");
        } else {
            setPasswordType("password");
            hideIcon1.current.classList.add("fa-eye");
            hideIcon1.current.classList.remove("fa-eye-slash");
        }
    }
    const [cfpasswordType, setcfPasswordType] = useState("password");
    const hideIcon2 = useRef("fa-eye");
    const handleCfPass = () => {
        if (cfpasswordType === "password") {
            setcfPasswordType("text");
            hideIcon2.current.classList.remove("fa-eye");
            hideIcon2.current.classList.add("fa-eye-slash");
        } else {
            setcfPasswordType("password");
            hideIcon2.current.classList.add("fa-eye");
            hideIcon2.current.classList.remove("fa-eye-slash");
        }
    }
    const registerUser = (data) => {
        return async (dispatch, getState) => {
            var salt = bcrypt.genSaltSync(10);
            var hashPassword = bcrypt.hashSync(data.password, salt);
            dispatch({ type: "REGISTER_USER_REQUEST" });
            try {
                const res = await axios.post("http://localhost:8000/registerUsers", {
                    id: data.id,
                    email: data.email,
                    username: data.firstname + " " + data.lastname,
                    password: hashPassword,
                });
                dispatch({ type: "REGISTER_USER_SUCCESS", payload: res });
                setTimeout(() => {
                    alert("Register Succesfully");
                    window.location.href = "/login";
                }, 1000);
            }
            catch (error) {
                console.log(error);
                dispatch({ type: "REGISTER_USER_ERROR" })
            }
        }
    }
    useEffect(() => {
        axios.get("http://localhost:8000/registerUsers")
        .then((data) => dispatch({type: "SAVE_USERS", payload: data.data}))
        .catch((err) => console.log(err));
    }, [dispatch])
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
                            <form onSubmit={handleSubmit(FormSubmit)}>
                                <h3 className="form-h3">Register</h3>
                                <div className="form-input">
                                    <label htmlFor="email">Email</label> <br />
                                    <input type="text" name="email" placeholder="Email" {...register('email', registerMessage.email)} /> <br />
                                    <div className='error'>{errors?.email && errors.email.message} </div>
                                    <label htmlFor="firstname">Firstname</label> <br />
                                    <input type="text" name="firstname" placeholder="Firstname" {...register('firstname', registerMessage.firstname)} /> <br />
                                    <div className='error'>{errors?.firstname && errors.firstname.message} </div>
                                    <label htmlFor="lastname">Lastname</label> <br />
                                    <input type="text" name="lastname" placeholder="Lastname" {...register('lastname', registerMessage.lastname)} /> <br />
                                    <div className='error'>{errors?.lastname && errors.lastname.message} </div>
                                    <label htmlFor="password">Password</label> <br />
                                    <input type={passwordType} name="password" placeholder="password" {...register('password', registerMessage.password)} />
                                    <i className="fa-solid fa-eye" onClick={handlePass} ref={hideIcon1} /> <br />
                                    <div className='error'>{errors?.password && errors.password.message} </div>
                                    <label htmlFor="cfpassword">Confirm password</label> <br />
                                    <input type={cfpasswordType} name="cfpassword" placeholder="confirm password" {...register('cfpassword', registerMessage.cfpassword)} />
                                    <i className="fa-solid fa-eye" onClick={handleCfPass} ref={hideIcon2} /> <br />
                                    <div className='error'>{errors?.cfpassword && errors.cfpassword.message} </div>
                                    <button className="form-btn">Register</button>
                                    <p>Đã có tài khoản ? <a href="/login">Login</a></p>
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