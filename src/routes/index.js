import React, { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";

const Main = lazy(() => import("../screens/Main"));

export default function Index() {
    return (
        <Suspense fallback={<h1 style={{ width: "100%", margin: "auto", minHeight: "100vh" }}></h1>}>
            <Switch>
                <Route exact path="/" component={Main} />
            </Switch>
        </Suspense>
    );
}
