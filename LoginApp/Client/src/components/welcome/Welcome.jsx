import { useState } from "react"
import { Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import styles from "./Welcome.module.css";
import smileGif from "../../assets/log.gif"

function Welcome() {

    return (
        <div className={styles.container}>
            {/* Logo */}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className={styles.logo}
                fill="currentColor"
                viewBox="0 0 16 16"
            >
                <path d="M8.5 2a5 5 0 0 1 4.905 4.027A3 3 0 0 1 13 12H3.5A3.5 3.5 0 0 1 .035 9H5.5a.5.5 0 0 0 0-1H.035a3.5 3.5 0 0 1 3.871-2.977A5 5 0 0 1 8.5 2m-6 8a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1zM0 13.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5" />
            </svg>

            {/* Welcome Message */}
            <h6 className={styles.title}>Cloud Space</h6>

            {/* Smile GIF */}
            <img
                src={smileGif} /* Replace with your GIF URL */
                alt="Smile GIF"
                className={styles.gif}
            />

            {/* SignUp and Login */}
            <div className={styles.actions}>
                <Link to="/register" className={`btn btn-primary ${styles.customLink}`}>
                    SignUp
                </Link>
                <p className={styles.signUpBoxAlreadyLogin}> or already have an account</p>
                <Link to="/login" className={`btn btn-primary ${styles.customLink}`}>
                    Login
                </Link>
            </div>
        </div>
    );
}
export default Welcome