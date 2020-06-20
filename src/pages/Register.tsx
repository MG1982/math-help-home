import React, { useState } from "react";

import {
  IonButton,
  IonItem,
  IonInput,
  IonCard,
  IonIcon,
  IonLoading,
  IonPage,
  IonToolbar,
  IonHeader,
  IonButtons,
  IonMenuButton,
  IonTitle,
  IonContent,
} from "@ionic/react";
import { logOutOutline, logOutSharp } from "ionicons/icons";
import { Link } from "react-router-dom";
import { toast } from "../toast";
import { registerUser } from "../firebaseConfig";

const Register: React.FC = () => {
  const [busy, setBusy] = useState<boolean>(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");

  async function register() {
    // validation
    setBusy(true);
    if (password !== cpassword) {
      return toast("Passwords do not match");
    }
    if (username.trim() === "" || password.trim() === "") {
      return toast("Username and password are required");
    }

    const res = await registerUser(username, password);
    if (res) {
      toast("Registration successful!");
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
          <IonTitle>Register</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Register</IonTitle>
          </IonToolbar>
        </IonHeader>

        <div className="container">
          <IonLoading
            message="Registration in progress..."
            duration={0}
            isOpen={busy}
          />
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
            <IonItem>
              <IonInput
                type="password"
                placeholder="Confirm Password?"
                onIonChange={(e: any) => setCPassword(e.target.value)}
              ></IonInput>
            </IonItem>
            <IonButton onClick={register}>
              <IonIcon
                ios={logOutOutline}
                md={logOutSharp}
                slot="start"
              ></IonIcon>
              Register
            </IonButton>
            <p>
              Already have an account? <Link to="/Login">Login</Link>
            </p>
          </IonCard>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Register;
