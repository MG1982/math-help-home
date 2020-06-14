import React from "react";
import app from "../base";

import { IonButton, IonItem, IonInput, IonCard } from "@ionic/react";

interface ContainerProps {
  name: string;
}
const Login: React.FC<ContainerProps> = ({ name }) => {
  return (
    <div className="container">
      <IonCard>
        <IonItem>
          <IonInput placeholder="Your Name"></IonInput>
        </IonItem>
        <IonItem>
          <IonInput type="password" placeholder="Your Password"></IonInput>
        </IonItem>
        <IonButton className="ion-text-center">Submit</IonButton>
      </IonCard>
    </div>
  );
};

export default Login;
