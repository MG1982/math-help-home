import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  IonSpinner,
} from "@ionic/react";
import React, { useEffect, useState } from "react";
import { useParams, Route } from "react-router";
import Login from "./Login";
import Register from "./Register";
import { getCurrentUser } from "../firebaseConfig";
import "./Page.css";
import Home from "./Home";

const RoutingSystem: React.FC = () => {
  return (
    <div>
      <Route path="/page/Home" component={Home} exact />
      <Route path="/page/Login" component={Login} exact />
      <Route path="/page/Register" component={Register} exact />
    </div>
  );
};

const Page: React.FC = () => {
  const [busy, setBusy] = useState(true);
  const { name } = useParams<{ name: string }>();

  useEffect(() => {
    getCurrentUser().then((user) => {
      console.log(user);
      if (user) {
        // User is logged in
        window.history.replaceState({}, "", "/page/Home");
      } else {
        window.history.replaceState({}, "", "/");
      }
      setBusy(false);
    });
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>{name}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{name}</IonTitle>
          </IonToolbar>
        </IonHeader>
        {busy ? <IonSpinner /> : <RoutingSystem />}
      </IonContent>
    </IonPage>
  );
};

export default Page;
