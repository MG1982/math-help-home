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
  IonLoading,
} from "@ionic/react";

import React, { useEffect, useState } from "react";
import { getCurrentUser, logoutUser } from "../firebaseConfig";
import { toast } from "../toast";
import {
  logInOutline,
  logInSharp,
  personAddOutline,
  personAddSharp,
  homeOutline,
  homeSharp,
  calculatorOutline,
  calculatorSharp,
  logOutOutline,
  logOutSharp,
} from "ionicons/icons";

import "./Menu.css";

const Menu: React.FC = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    getCurrentUser().then((user) => {
      console.log(user);
      if (!user) {
        // User is not logged in
        setLoggedIn(false);
      }
      // User is logged in
      setLoggedIn(true);
    });
  }, []);

  async function logout() {
    setBusy(true);
    const res = await logoutUser();
    if (res) {
      toast("You have logged out!");
    }
    setBusy(false);
  }

  return (
    <>
      <IonLoading message="Logging out..." duration={0} isOpen={busy} />
      <IonMenu side="start" contentId="main" type="overlay">
        <IonContent>
          <IonList id="inbox-list">
            <IonListHeader>Welcome Back!</IonListHeader>
            <IonNote>user name here</IonNote>

            <IonMenuToggle autoHide={false}>
              <IonItem href="/Home" lines="none" detail={false}>
                <IonIcon
                  ios={homeOutline}
                  md={homeSharp}
                  slot="start"
                ></IonIcon>
                <IonLabel>Home</IonLabel>
              </IonItem>

              {loggedIn ? (
                <IonItem onClick={logout} lines="none">
                  <IonIcon
                    ios={logOutOutline}
                    md={logOutSharp}
                    slot="start"
                  ></IonIcon>
                  <IonLabel>Logout</IonLabel>
                </IonItem>
              ) : (
                (
                  <IonItem href="/Login" lines="none" detail={false}>
                    <IonIcon
                      ios={logInOutline}
                      md={logInSharp}
                      slot="start"
                    ></IonIcon>
                    <IonLabel>Login</IonLabel>
                  </IonItem>
                ) && (
                  <IonItem href="/Register" lines="none" detail={false}>
                    <IonIcon
                      ios={personAddOutline}
                      md={personAddSharp}
                      slot="start"
                    ></IonIcon>
                    <IonLabel>Register</IonLabel>
                  </IonItem>
                )
              )}

              <IonItem href="/Dashboard" lines="none" detail={false}>
                <IonIcon
                  ios={calculatorOutline}
                  md={calculatorSharp}
                  slot="start"
                ></IonIcon>
                <IonLabel>Dashboard</IonLabel>
              </IonItem>
            </IonMenuToggle>
          </IonList>
        </IonContent>
      </IonMenu>
    </>
  );
};

export default Menu;
