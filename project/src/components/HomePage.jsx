import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
    return (
        <div className="app-container">
            <h1>Welcome to the Home Page!</h1>
            <Link to="/signup">
                <button className="btn">Sign Up</button>
            </Link>
        </div>
    );
}

export default HomePage;
