import { Redirect, Route, Switch } from "react-router-dom";
import { Suspense, lazy } from "react";

//const AddCarrier = lazy(() => import("pages/AddCarrier"));


const AppRoutes: React.FC = () => {
    return (
        //<Suspense fallback={<LoaderUI />}>
            <Switch>
                {/* <Route path="/callback" component={AuthorizationCallback} /> */}
                {/* <Route path="/fallback" component={Fallback} /> */}
                <Route>
                    <Switch>
                        {/* <PrivateRoute exact path="/newcarrier" keys={{ entity: "CARRIER", action: "CREATE" }} component={AddCarrier} /> */}
                        <Redirect to="/fallback" />
                    </Switch>
                </Route>
            </Switch>
        //</Suspense>
    );
};

export default AppRoutes;
