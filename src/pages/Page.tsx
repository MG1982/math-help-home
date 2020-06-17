import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";
import { useParams, Route } from "react-router";
import Login from "./Login";
import Register from "./Register";
import Home from "./Home";
import Dashboard from "./Dashboard";

import "./Page.css";

const RoutingSystem: React.FC = () => {
  return (
    <div>
      <Route path="/page/Home" component={Home} exact />
      <Route path="/page/Login" component={Login} exact />
      <Route path="/page/Register" component={Register} exact />
      <Route path="/page/Dashboard" component={Dashboard} exact />
    </div>
  );
};

const Page: React.FC = () => {
  const { name } = useParams<{ name: string }>();

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
        <RoutingSystem />
      </IonContent>
    </IonPage>
  );
};

export default Page;
