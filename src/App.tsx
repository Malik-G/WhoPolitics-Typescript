import "semantic-ui-css/semantic.min.css";
import "react-toastify/dist/ReactToastify.css";
import "@itm21st/faceted-filter/dist/style.css";
import "./styles/styles.scss";
import "./styles/kendo.scss";

// import { Slide, ToastContainer } from "react-toastify";

import AppRoutes from "AppRoutes";
// import { AuthContext } from "components/AuthContextProvider/AuthContextProvider";
// import { Grid } from "semantic-ui-react";
// import IdleTimeout from "@itm21st/idle-timeout-react";
// import Navbar from "./components/Navbar";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { useContext } from "react";

export const NotImplemented = () => <p>Not implemented</p>;

const App: React.FC = () => {
    //const { user, onLogout } = useContext(AuthContext);
    return (
        <>
            <div>
                <p>
                    <div></div>
                </p>
            </div>
            {/* <Router>
             <ToastContainer theme="colored" transition={Slide} />
             <IdleTimeout onIdle={onLogout} />
             {!!user && <Navbar />}
             <Grid padded="horizontally">
                 <Grid.Row centered>
                     <Grid.Column width={16}>
                         <AppRoutes />
                     </Grid.Column>
                 </Grid.Row>
             </Grid>
         </Router> */}
        </>
    );
};

export default App;
