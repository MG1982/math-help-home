import Menu from "./components/Menu";
import Page from "./pages/Page";
import React, { useEffect, useState } from "react";
import {
  IonApp,
  IonRouterOutlet,
  IonSplitPane,
  IonSpinner,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { Redirect, Route } from "react-router-dom";
import { getCurrentUser } from "./firebaseConfig";

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
  const [busy, setBusy] = useState(true);

  useEffect(() => {
    getCurrentUser().then((user) => {
      console.log(user);
      if (user) {
        // User is logged in
        window.history.replaceState({}, "", "/page/Dashboard");
      } else {
        window.history.replaceState({}, "", "/Home");
      }
      setBusy(false);
    });
  }, []);

  return (
    <IonApp>
      <IonReactRouter>
        <IonSplitPane contentId="main">
          <Menu />
          <IonRouterOutlet id="main">
            {busy ? (
              <IonSpinner />
            ) : (
              <Route path="/page/:name" component={Page} exact />
            )}
            <Redirect from="/" to="/page/Home" exact />
          </IonRouterOutlet>
          )
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
