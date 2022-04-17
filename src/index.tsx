import App from "./App";
import AuthContextProvider from "components/AuthContextProvider/AuthContextProvider";
import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
    <React.StrictMode>
        <AuthContextProvider>
            <App />
        </AuthContextProvider>
    </React.StrictMode>,
    document.getElementById("root")
);
