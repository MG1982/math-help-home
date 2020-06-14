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
  IonButton,
} from "@ionic/react";

import React from "react";
import { useLocation } from "react-router-dom";
import {
  logInOutline,
  logInSharp,
  personAddOutline,
  personAddSharp,
  closeSharp,
  closeOutline,
} from "ionicons/icons";

import app from "../base";

import "./Menu.css";

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: "Login",
    url: "/page/Login",
    iosIcon: logInOutline,
    mdIcon: logInSharp,
  },
  {
    title: "SignUp",
    url: "/page/SignUp",
    iosIcon: personAddOutline,
    mdIcon: personAddSharp,
  },
  {
    title: "Multiplication",
    url: "/page/Multiplication",
    iosIcon: closeOutline,
    mdIcon: closeSharp,
  },
];

const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>Username here</IonListHeader>
          <IonNote>user email here</IonNote>
          <IonButton onClick={() => app.auth().signOut()}>Logout</IonButton>
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem
                  className={
                    location.pathname === appPage.url ? "selected" : ""
                  }
                  routerLink={appPage.url}
                  routerDirection="none"
                  lines="none"
                  detail={false}
                >
                  <IonIcon
                    slot="start"
                    ios={appPage.iosIcon}
                    md={appPage.mdIcon}
                  />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
