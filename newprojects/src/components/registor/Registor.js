import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { USERNAME } from "../../redux/actions/Action";
function Registor(props) {
    const [name, SetName] = useState("");
    const [email, SetEmail] = useState("");
    const [password, SetPassword] = useState("");
    const dispatch = useDispatch();
    const history = useHistory();
    console.log(history);
    const names = (e) => {
        SetName(e.target.value);
    };
    const emails = (e) => {
        SetEmail(e.target.value);
    };
    const passwords = (e) => {
        SetPassword(e.target.value);
    };

    useEffect(() => {});
    const handlesubmits = (e) => {
        e.preventDefault();

        // console.log(name, email, password);
        // props.usernames(name);
        // SetName("");
        // SetEmail("");
        // SetPassword("");

        if (email === "kalai@gmail.com" && password === "123") {
            history.push("/");
            dispatch({ type: USERNAME, data: name });
        }
        SetName("");
        SetEmail("");
        SetPassword("");
    };
    const usenames = useSelector((state) => state.usernames.username);
    console.log(usenames);
    return (
        <div className="container ">
            <h1>
                <span>welcome{usenames}</span>
            </h1>

            <form onSubmit={handlesubmits}>
                <input type="text" onChange={names} name="name" value={name} />
                <input
                    type="email"
                    onChange={emails}
                    name="email"
                    value={email}
                />
                <input
                    type="password"
                    onChange={passwords}
                    name="password"
                    value={password}
                />
                <button type="submit" class="btn btn-primary">
                    Submit
                </button>
            </form>
            {/* <div className="mt-5 w-100 mx-auto d-flex justify-content-center flex-column"> */}
            {/* <form className="col-lg-5" onSubmit={handlesubmits}>
                    <div class="mb-3">
                        <label for="username" class="form-label">
                            User Name
                        </label>
                        <input
                            type="text"
                            class="form-control"
                            onChange={names}
                            name="name"
                            value={name}
                        />
                    </div>
                    <div class="mb-3">
                        <label for="email" class="form-label">
                            Email
                        </label>
                        <input
                            type="email"
                            class="form-control"
                            onChange={emails}
                            name="email"
                            value={email}
                        />
                    </div>
                    <div class="mb-3">
                        <label for="password" class="form-label">
                            Password
                        </label>
                        <input
                            type="password"
                            class="form-control"
                            onChange={passwords}
                            name="password"
                            value={password}
                        />
                    </div>

                    <button type="submit" class="btn btn-primary">
                        Submit
                    </button>
                </form> */}
            {/* </div> */}
        </div>
    );
}

// const mapStateToProps = (state) => {
//     return {
//         name: state.usernames.username,
//     };
// };

// const mapDispatchToProps = (dispatch) => {
//     return {
//         usernames: (name) => {
//             console.log("names", name);
//             dispatch({ type: USERNAME, data: name });
//         },
//     };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Registor);

export default Registor;
