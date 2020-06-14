import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React, { useContext } from "react";
import { useParams, Route } from "react-router";
import Login from "../components/Login";
import SignUp from "../components/SignUp";
import Multiplication from "../components/Multiplication";
import { AuthContext } from "../Auth";
import "./Page.css";

const Page: React.FC = () => {
  const { name } = useParams<{ name: string }>();
  const { currentUser } = useContext(AuthContext);
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
        <Route path="/page/Multiplication" component={Multiplication} exact />
        <Route path="/page/Login" component={Login} exact />
        <Route path="/page/SignUp" component={SignUp} exact />
      </IonContent>
    </IonPage>
  );
};

export default Page;
