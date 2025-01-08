import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styles from "./SignUp.module.css"; // Import the module CSS file

function SignUp() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [mobile, setMobile] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [error, setError] = useState("");

    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();

        if (!firstName || !lastName || !mobile || !email || !password) {
            setError("All fields are required! Please fill out every field.");
            return; // Stop form submission
        }

        axios
            .post("http://localhost:3001/register", {
                firstName,
                lastName,
                mobile,
                email,
                password,
            })
            .then((result) => {
                console.log(result);
                navigate("/login");
            })
            .catch((err) => console.log(err));
    };

    return (
        <>
            <div className={styles.fullScreen}>
                <div className={styles.signUpBox}>
                    <h2>Register</h2>
                    {error && <div className={styles.errorMessage}>{error}</div>}
                    <form onSubmit={handleRegister}>
                        <div className={styles.signUpBoxName}>
                            <label htmlFor="firstName">
                                <strong>First Name</strong>
                            </label>
                            <input
                                type="text"
                                placeholder="Enter your first name"
                                autoComplete="off"
                                name="firstName"
                                className={styles.signUpBoxItemsFirstName}
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                        </div>

                        <div className={styles.signUpBoxLastName}>
                            <label htmlFor="lastName">
                                <strong>Last Name</strong>
                            </label>
                            <input
                                type="text"
                                placeholder="Enter your last name"
                                autoComplete="off"
                                name="lastName"
                                className={styles.signUpBoxLastName}
                                onChange={(e) => setLastName(e.target.value)}
                            />
                        </div>

                        <div className={styles.signUpBoxMobileNumber}>
                            <label htmlFor="mobile">
                                <strong>Mobile Number</strong>
                            </label>
                            <input
                                type="number"
                                placeholder="Enter your mobile number"
                                autoComplete="off"
                                name="mobile"
                                className={styles.signUpBoxMobileNumber}
                                onChange={(e) => setMobile(e.target.value)}
                            />
                        </div>

                        <div>
                            <label htmlFor="email">
                                <strong>Email</strong>
                            </label>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                autoComplete="off"
                                name="email"
                                className={styles.signUpBoxEmail}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        <div>
                            <label htmlFor="password">
                                <strong>Password</strong>
                            </label>
                            <input
                                type="password"
                                placeholder="Enter your password"
                                autoComplete="off"
                                name="password"
                                className={styles.signUpBoxPassword}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>

                        <button
                            type="submit"
                            className={`${styles.signUpBoxSumbitButton} btn btn-success`}
                        >
                            Register
                        </button>
                    </form>

                    <Link to="/welcome" className={`${styles.btn} ${styles.btnDanger}`}>
                        Back
                    </Link>
                </div>
            </div>
        </>
    );
}

export default SignUp;
