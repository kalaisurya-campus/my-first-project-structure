import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

function Login(props) {
    // const { REACT_APP_BASE_URL } = process.env;
    // console.log(REACT_APP_BASE_URL);
    const [email, SetEmail] = useState("");
    const [password, SetPassword] = useState("");
    const history = useHistory();
    const emails = (e) => {
        SetEmail(e.target.value);
    };
    const passwords = (e) => {
        SetPassword(e.target.value);
    };
    useEffect(() => {
        if (localStorage.getItem("auth")) history.push("/");
    }, []);
    const handlesubmits = (e) => {
        e.preventDefault();
        console.log(email, password);
        if (email === "kalai@gmail.com" && password === "123") {
            history.push("/");
        }
        localStorage.setItem("auth", true);
        SetEmail("");
        SetPassword("");
    };
    return (
        <div>
            <form onSubmit={handlesubmits}>
                <div className="mb-3">
                    <label>Email address</label>
                    <input
                        type="email"
                        onChange={emails}
                        name="email"
                        value={email}
                    />
                </div>
                <div className="mb-3">
                    <label>Password</label>
                    <input
                        type="password"
                        onChange={passwords}
                        name="password"
                        value={password}
                    />
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" />
                    <label>Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>
        </div>
    );
}

export default Login;
