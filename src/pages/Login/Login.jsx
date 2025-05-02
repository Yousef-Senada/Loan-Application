import React, { useState } from "react";
import "./Login.css";
import NavBar from "../../components/NavBar";
const Login = () => {
    const [mode, setMode] = useState(false);
    return (
        <>
            <NavBar />
            <section className="main-container">
                <div
                    className={`wrapper ${
                        mode ? "animated-signin" : "animated-signup"
                    }`}
                >
                    <div className="form-container sign-up">
                        <form action="#">
                            <h2>sign up</h2>
                            <div className="form-group">
                                <input type="text" required />
                                <i className="fas fa-user"></i>
                                <label htmlFor="">username</label>
                            </div>
                            <div className="form-group">
                                <input type="email" required />
                                <i className="fas fa-at"></i>
                                <label htmlFor="">email</label>
                            </div>
                            <div className="form-group">
                                <input type="password" required />
                                <i className="fas fa-lock"></i>
                                <label htmlFor="">password</label>
                            </div>
                            <div className="form-group">
                                <input type="password" required />
                                <i className="fas fa-lock"></i>
                                <label htmlFor="">confirm password</label>
                            </div>
                            <button type="submit" className="btn">
                                sign up
                            </button>
                            <div className="link">
                                <p>
                                    You already have an account ?
                                    <a
                                        className="signin-link cursor-pointer"
                                        onClick={() => {
                                            setMode(false);
                                        }}
                                    >
                                        sign in
                                    </a>
                                </p>
                            </div>
                        </form>
                    </div>
                    <div className="form-container sign-in">
                        <form action="#">
                            <h2>login</h2>
                            <div className="form-group">
                                <input type="text" required />
                                <i className="fas fa-user"></i>
                                <label htmlFor="">username</label>
                            </div>
                            <div className="form-group">
                                <input type="password" required />
                                <i className="fas fa-lock"></i>
                                <label htmlFor="">password</label>
                            </div>
                            <button type="submit" className="btn">
                                login
                            </button>
                            <div className="link">
                                <p>
                                    Don't have an account ?
                                    <a
                                        className="signup-link cursor-pointer"
                                        onClick={() => {
                                            setMode(true);
                                        }}
                                    >
                                        sign up
                                    </a>
                                </p>
                                <p className="forgot-pass">
                                    <a href="#">forgot password ?</a>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Login;
