import React, { useState } from "react";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonTitle,
  IonContent,
  IonIcon,
  IonButton,
  IonLoading,
} from "@ionic/react";

import { logOutOutline, logOutSharp } from "ionicons/icons";

import { useSelector } from "react-redux";
import { logoutUser } from "../firebaseConfig";
import { useHistory } from "react-router";

const Dashboard: React.FC = () => {
  const username = useSelector((state: any) => state.user.username || "Guest");
  const history = useHistory();
  const [busy, setBusy] = useState(false);

  async function logout() {
    setBusy(true);
    await logoutUser();
    setBusy(false);
    history.replace("/");
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Dashboard</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonLoading message="Logging out..." duration={0} isOpen={busy} />
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Dashboard</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div className="container">
          <p>Hello {username}</p>
          <IonButton size="small" color="danger" onClick={logout}>
            <IonIcon
              ios={logOutOutline}
              md={logOutSharp}
              slot="start"
            ></IonIcon>
            Logout
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Dashboard;
