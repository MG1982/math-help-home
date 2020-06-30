import React from "react";

import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
  IonIcon,
  IonRow,
  IonCol,
} from "@ionic/react";

import {
  logInOutline,
  personAddOutline,
  personAddSharp,
  logInSharp,
} from "ionicons/icons";

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <IonHeader className="ion-padding">
          <IonToolbar>
            <IonTitle className="ion-text-center" size="large">
              Math-Help-Home
            </IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonRow>
          <IonCol>
            <h1 className="ion-text-center">Welcome!</h1>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
            <h1 className="ion-text-center">Login to get started.</h1>
          </IonCol>
        </IonRow>
        <IonRow className="ion-padding">
          <IonCol className="ion-text-center">
            <IonButton size="small" routerLink="/Login">
              <IonIcon slot="start" ios={logInOutline} md={logInSharp} />
              Login
            </IonButton>
            <IonButton size="small" routerLink="/Register">
              <IonIcon
                slot="start"
                ios={personAddOutline}
                md={personAddSharp}
              />
              Register
            </IonButton>
          </IonCol>
        </IonRow>
      </IonContent>
    </IonPage>
  );
};

export default Home;
