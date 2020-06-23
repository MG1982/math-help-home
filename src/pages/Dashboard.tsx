import React, { useState } from "react";
import { useSelector } from "react-redux";
import { logoutUser } from "../firebaseConfig";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonLoading,
  IonIcon,
  IonButton,
  IonRow,
  IonCol,
} from "@ionic/react";
import { useHistory } from "react-router";
import {
  logOutOutline,
  logOutSharp,
  closeOutline,
  closeSharp,
} from "ionicons/icons";

const Dashboard: React.FC = () => {
  const username = useSelector((state: any) => state.user.username);
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
      <IonContent>
        <IonLoading message="Logging out..." duration={0} isOpen={busy} />
        <IonHeader className="ion-padding">
          <IonToolbar>
            <IonTitle className="ion-text-center" size="large">
              Dashboard
            </IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonRow className="ion-padding">
          <IonCol>
            <p className="ion-text-left">Welcome back {username}</p>
          </IonCol>
          <IonCol className="ion-text-right">
            <IonButton size="small" color="danger" onClick={logout}>
              <IonIcon
                ios={logOutOutline}
                md={logOutSharp}
                slot="end"
              ></IonIcon>
              Logout
            </IonButton>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
            <IonButton routerLink="/Multiplication" expand="full">
              <IonIcon ios={closeOutline} md={closeSharp} slot="end"></IonIcon>
              Multiplication
            </IonButton>
          </IonCol>
        </IonRow>
      </IonContent>
    </IonPage>
  );
};

export default Dashboard;
