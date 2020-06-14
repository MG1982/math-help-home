import React, { useCallback } from "react";
import { withRouter } from "react-router";
import app from "../base";

import { IonButton, IonItem, IonInput, IonCard } from "@ionic/react";

const SignUp = ({ history }) => {
  const handleSignUp = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .createUserWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );
  return (
    <div className="container">
      <IonCard>
        <IonItem>
          <IonInput placeholder="Your Name"></IonInput>
        </IonItem>
        <IonItem>
          <IonInput type="password" placeholder="Your Password"></IonInput>
        </IonItem>
        <IonItem>
          <IonInput type="password" placeholder="Confirm Password"></IonInput>
        </IonItem>
        <IonButton onClick={handleSignUp} className="ion-text-center">
          Signup
        </IonButton>
      </IonCard>
    </div>
  );
};

export default withRouter(SignUp);
