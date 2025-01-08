import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Home.module.css"; // Import the module CSS file
import logo from "../../assets/log.gif"; // Import your logo image

function Home() {
    const navigate = useNavigate();

    const handleLogout = () => {
        // Perform any logout logic here (e.g., clearing session or tokens)
        navigate("/welcome");
    };

    return (
        <div className={styles.homeContainer}>
            <header className={styles.header}>
                <h1>Welcome to the Home Page!</h1>
            </header>

            <main className={styles.mainContent}>
                <h3>Hello, you're successfully logged in!</h3>
                <p>
                    Explore the application, and enjoy your experience.
                </p>
            </main>

            <footer className={styles.footer}>
                <button onClick={handleLogout} className={styles.logoutButton}>
                    Logout
                </button>
                <p>© 2025 Your App Name. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default Home;

