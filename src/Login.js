import React, { useState } from "react";
import axios from "axios";

const Login = () => {
    const [loginData, setLoginData] = useState({
        email: "",
        password: "",
    });
    const [msg, setMsg] = useState("")

    const handleLogin = async () => {
        try {
            const response = await axios.post(
                "http://localhost:5002/login",
                loginData
            );
            setMsg(response.data);


        } catch (error) {
            console.error("error during login:", error);
        }
    };

    return (
        <div className="form">
            {
                msg.message && <p>{msg.message}</p>
            }
            <div className="registerDiv">
                <h2>Login</h2>
                <form>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={loginData.email}
                        onChange={(e) =>
                            setLoginData({ ...loginData, email: e.target.value })
                        }
                        required
                    />

                    <label>Password:</label>
                    <input
                        type="password"
                        value={loginData.password}
                        onChange={(e) =>
                            setLoginData({ ...loginData, password: e.target.value })
                        }
                        required
                    />

                    <button type="button" onClick={handleLogin} className="btn">
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;