import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

function Home(props) {
    const [logout, SetLogout] = useState(false);
    const history = useHistory();
    useEffect(() => {
        if (!localStorage.getItem("auth")) {
            history.push("/login");
        }
    }, [logout]);
    const handlesubmits = (e) => {
        e.preventDefault();
        localStorage.removeItem("auth");
        SetLogout(true);
    };
    return (
        <div>
            Home Page
            <h1>Welcome to Home Page!!!</h1>
            <button
                onClick={handlesubmits}
                style={{
                    border: "none",
                    backgroundColor: "red",
                    color: "white",
                    padding: "15px",
                    outline: "none",
                    borderRadius: "20px",
                    fontSize: "1.4rem",
                    fontWeight: "600",
                }}
            >
                Logout
            </button>
        </div>
    );
}

export default Home;
