import React, { useState } from "react";

import {
  IonButton,
  IonItem,
  IonInput,
  IonCard,
  IonIcon,
  IonLoading,
  IonPage,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonContent,
  IonTitle,
} from "@ionic/react";
import { logInOutline, logInSharp } from "ionicons/icons";
import { Link } from "react-router-dom";
import { loginUser } from "../firebaseConfig";
import { toast } from "../toast";

const Login: React.FC = () => {
  const [busy, setBusy] = useState<boolean>(false);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function login() {
    setBusy(true);
    const res = await loginUser(username, password);
    if (res) {
      toast("You have logged in!");
    }
    setBusy(false);
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Login</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div className="container">
          <IonLoading message="Logging in..." duration={0} isOpen={busy} />
          <IonCard className="ion-padding">
            <IonItem>
              <IonInput
                placeholder="Username?"
                onIonChange={(e: any) => setUsername(e.target.value)}
              ></IonInput>
            </IonItem>
            <IonItem>
              <IonInput
                type="password"
                placeholder="Password?"
                onIonChange={(e: any) => setPassword(e.target.value)}
              ></IonInput>
            </IonItem>
            <IonButton onClick={login}>
              <IonIcon
                ios={logInOutline}
                md={logInSharp}
                slot="start"
              ></IonIcon>
              Login
            </IonButton>
            <p>
              Don't have an account? <Link to="/Register">Register</Link>
            </p>
          </IonCard>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Login;
