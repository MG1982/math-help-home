import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
} from "@ionic/react";

import React from "react";
import {
  logInOutline,
  logInSharp,
  personAddOutline,
  personAddSharp,
  homeOutline,
  homeSharp,
  calculatorOutline,
  calculatorSharp,
} from "ionicons/icons";

import "./Menu.css";

const Menu: React.FC = () => (
  <>
    <IonMenu side="start" contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          {/* welcome message for logged in user or hello message for guest */}
          <IonListHeader>Welcome Back!</IonListHeader>
          <IonNote>user name here</IonNote>

          <IonMenuToggle autoHide={false}>
            <IonItem
              routerLink="./Home"
              routerDirection="none"
              lines="none"
              detail={false}
            >
              <IonIcon ios={homeOutline} md={homeSharp} slot="start"></IonIcon>
              <IonLabel>Home</IonLabel>
            </IonItem>
            <IonItem
              routerLink="./Dashboard"
              routerDirection="none"
              lines="none"
              detail={false}
            >
              <IonIcon
                ios={calculatorOutline}
                md={calculatorSharp}
                slot="start"
              ></IonIcon>
              <IonLabel>Dashboard</IonLabel>
            </IonItem>
            <IonItem
              routerLink="./Login"
              routerDirection="none"
              lines="none"
              detail={false}
            >
              <IonIcon
                ios={logInOutline}
                md={logInSharp}
                slot="start"
              ></IonIcon>
              <IonLabel>Login</IonLabel>
            </IonItem>
            <IonItem
              routerLink="./Register"
              routerDirection="none"
              lines="none"
              detail={false}
            >
              <IonIcon
                ios={personAddOutline}
                md={personAddSharp}
                slot="start"
              ></IonIcon>
              <IonLabel>Register</IonLabel>
            </IonItem>
          </IonMenuToggle>
        </IonList>
      </IonContent>
    </IonMenu>
  </>
);

export default Menu;
