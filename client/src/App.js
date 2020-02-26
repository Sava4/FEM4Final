import React from "react";
import {Provider} from "react-redux";
import {Routes} from "./routes";
import {BrowserRouter} from "react-router-dom";
import store from "./store";

//import {Header, Spinner} from "./components";

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Routes/>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
