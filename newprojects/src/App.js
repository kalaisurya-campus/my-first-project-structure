import React from "react";
import "./App.css";
import Routing from "./pages/Routing";
import { Provider } from "react-redux";
import Stores from "./redux/store/Store";
function App() {
    return (
        <div className="App">
            <Provider store={Stores}>
                <Routing />
            </Provider>
        </div>
    );
}

export default App;
