import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";

const createStoreWithMiddleware = applyMiddleware()(createStore);

import Header from "./components/common/header";
import Hero from "./components/hero";

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <div className="">
            <Header />
            <Hero />
        </div>
    </Provider>
    , document.getElementById("index")
);