import React, { useState } from "react";

const Register = () => {
    const [registerData, setRegisterData] = useState({
        name: "",
        password: "",
        email: "",
        phone: "",
    });
    const [msg, setMsg] = useState("")

    const handleRegister = async () => {
        try {
            const response = await fetch("http://localhost:5002/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(registerData),
            });

            if (response.ok) {
                const data = await response.json();
                setMsg(data.messege);
            } else {
                console.error("Not registered, Try again");
            }
        } catch (error) {
            console.error("Error during registration:", error.message);
        }
    };

    return (
        <div className="form">
            {
                msg && <p>{msg}</p>
            }
            <div className="registerDiv">
                <h2>Sign Up with Prepbytes</h2>

                <form>
                    <label>Name:</label>
                    <input type="text" value={registerData.name} onChange={(e) => setRegisterData({ ...registerData, name: e.target.value })} required /><br></br>

                    <label>Phone:</label>
                    <input type="tel" value={registerData.phone} onChange={(e) => setRegisterData({ ...registerData, phone: e.target.value })} required /><br></br>

                    <label>Email:</label>
                    <input type="email" value={registerData.email} onChange={(e) => setRegisterData({ ...registerData, email: e.target.value })} required /><br></br>

                    <label>Password:</label>
                    <input type="password" value={registerData.password} onChange={(e) => setRegisterData({ ...registerData, password: e.target.value })} required /><br></br>

                    <button type="button" onClick={handleRegister} className="btn">Register</button>
                </form>
            </div>
        </div>
    );
};

export default Register;