import React from "react";
import { useState } from "react"
import { Link } from "react-router-dom";
import styles from "./LoginIn.module.css";
import smileGif from "../../assets/person.jpeg"
import loginImg from "../../assets/login.png"
import axios from "axios"
import { useNavigate } from "react-router-dom";

function LoginIn() {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const [error, setError] = useState("");

    const navigate = useNavigate();


    function handleSubmit(event) {
        event.preventDefault();
        setError("");
        axios.post('http://localhost:3001/login', { email, password })
            .then(result => {
                console.log(result)
                if (result.data === "Success") {
                    navigate("/Home")
                } else {
                    setError(result.data.message || "Invalid email or password!");
                }
            })
            .catch((err) => {
                // Handle server or network errors
                console.error(err);
                setError("An error occurred. Please try again.");
            });
    }

    return (
        <div className={styles.fullScreen}>
            <div className={styles.loginContainer}>

                <img
                    src={smileGif}
                    alt="login"
                    className={styles.gif}
                />


                {error && <div className={styles.errorMessage}>{error}</div>}

                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="email">
                            <strong>Email</strong>
                        </label>
                        <input
                            type="email"
                            placeholder="enter you email"
                            autoComplete="off"
                            name="email"
                            className="signUpBoxEmail"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div>
                        <label htmlFor="password">
                            <strong>Password</strong>
                        </label>
                        <input
                            type="password"
                            placeholder="enter you password"
                            autoComplete="off"
                            name="password"
                            className="signUpBoxPassword"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <button type="submit" className={styles.submitButton}>
                        Login
                    </button>
                </form>

                <Link to="/welcome" className={styles.backButton}>
                    Back
                </Link>
            </div>
        </div >
    );
}

export default LoginIn;

