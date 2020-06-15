import React, { useState } from "react";

import { IonButton, IonItem, IonInput, IonCard, IonIcon } from "@ionic/react";
import { logOutOutline, logOutSharp } from "ionicons/icons";
import { Link } from "react-router-dom";
import { toast } from "../toast";
import { registerUser } from "../firebaseConfig";

const Register: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");

  async function register() {
    // validation
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
  }

  return (
    <div className="container">
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
          <IonIcon ios={logOutOutline} md={logOutSharp} slot="start"></IonIcon>
          Signup
        </IonButton>
        <p>
          Already have an account? <Link to="/page/Login">Login</Link>
        </p>
      </IonCard>
    </div>
  );
};

export default Register;
