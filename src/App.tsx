import React, { useEffect } from "react";
import { IonApp, IonRouterOutlet } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { Route } from "react-router-dom";
import { getCurrentUser } from "./firebaseConfig";
import { setUserState } from "./redux/actions";
import { useDispatch } from "react-redux";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Multiplication from "./pages/Multiplication";
import Addition from "./pages/Addition";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";

const App: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getCurrentUser().then((user: any) => {
      if (user) {
        // User is logged in
        dispatch(setUserState(user.email));
        window.history.replaceState({}, "", "/Dashboard");
      } else {
        window.history.replaceState({}, "", "/");
      }
    });
  });

  return (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet id="main">
          <Route path="/" component={Home} exact />
          <Route path="/Login" component={Login} exact />
          <Route path="/Register" component={Register} exact />
          <Route path="/Dashboard" component={Dashboard} exact />
          <Route path="/Multiplication" component={Multiplication} exact />
          <Route path="/Addition" component={Addition} exact />
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
