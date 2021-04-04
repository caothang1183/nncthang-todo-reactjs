import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import appStore from "./redux/store/AppStore";
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(
    <Provider store={appStore}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Provider>,
    document.getElementById("root")
);

reportWebVitals();