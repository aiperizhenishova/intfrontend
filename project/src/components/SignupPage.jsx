import React, { useState } from 'react';
import axios from 'axios';

function SignupPage() {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://internshipnew-production.up.railway.app/auth/register', {
                email,
                username,
                password,
            });
            setMessage(`Success: ${response.data.message}`);
        } catch (error) {
            setMessage(`Error: ${error.response?.data?.message || 'Something went wrong'}`);
        }
    };

    return (
        <div className="app-container">
            <h2>Sign Up</h2>
            <form onSubmit={handleSignup} className="form">
                <label>
                    Email:
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        required
                    />
                </label>
                <label>
                    Username:
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Enter your username"
                        required
                    />
                </label>
                <label>
                    Password:
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password"
                        required
                    />
                </label>
                <button type="submit" className="btn">Sign Up</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
}

export default SignupPage;
