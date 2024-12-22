import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
    const [userData, setUserData] = useState(null);
    const [error, setError] = useState(null);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');

    const handleSignup = async () => {
        try {
            const response = await axios.post('https://internshipnew-production.up.railway.app/auth/register', {
                email: email,
                password: password,
                username: username,
            });
            setUserData(response.data);
        } catch (err) {
            setError('Signup failed: ' + (err.response?.data?.message || err.message));
        }
    };

    const handleLogin = async () => {
        try {
            const response = await axios.post('https://internshipnew-production.up.railway.app/auth/login', {
                email: email,
                password: password,
                username: username,
            });
            setUserData(response.data);
        } catch (err) {
            setError('Login failed: ' + (err.response?.data?.message || err.message));
        }
    };

    return (
        <div className="app-container">
            <div className="form-container">
                <h1 className="title">WELCOME</h1>
                <h2> entry management system</h2>

                {userData ? (
                    <div>
                        <h2>Welcome, {userData.email}!</h2>
                        <p>Your ID is: {userData.id}</p>
                    </div>
                ) : (
                    <div>
                        <p>No user data available.</p>
                    </div>
                )}

                {error && <p className="error">{error}</p>}

                <div className="form">
                    <h3>Log In</h3>
                    <label>
                        Email:
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                        />
                    </label>
                    <label>
                        Password:
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter your password"
                        />
                    </label>


                    <button className="btn" onClick={handleLogin}>
                        Log In
                    </button>



                    <button className="btn" onClick={handleSignup}>
                        Sign Up
                    </button>
                </div>
            </div>
        </div>
    );
}

export default App;
