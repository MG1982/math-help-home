import React, { useState, useRef } from "react";
import moment from "moment";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
  IonRow,
  IonCol,
  IonLabel,
  IonItem,
  IonSelect,
  IonSelectOption,
  IonInput,
  IonListHeader,
  IonNote,
  IonIcon,
} from "@ionic/react";
import { arrowBack } from "ionicons/icons";
import { toast } from "../toast";

const Multiplication: React.FC = () => {
  const [param1, setParam1] = useState(1);
  const [param2, setParam2] = useState(Number);
  const [correct, setCorrect] = useState(0);
  const [wrong, setWrong] = useState(0);

  const userInputRef = useRef<HTMLIonInputElement>(null);
  const date = moment().format("MMMM Do YYYY");

  const checkAnswer = () => {
    const userAnswer = userInputRef.current!.value;
    const answer = param1 * param2;

    if (!param2) {
      toast("Please select a times table");
      return;
    } else if (!userAnswer) {
      toast("Please enter a valid number in your answer field");
      return;
    }

    if (userAnswer == answer) {
      toast("Well Done! That's Correct");
      userInputRef.current!.value = "";
      setCorrect(correct + 1);
      setParam1(Math.floor(Math.random() * 12 + 1));
      return;
    }
    if (wrong >= 2) {
      userInputRef.current!.value = "";
      toast("Oops!, Start again");
      setWrong(0);
      setCorrect(0);
      setParam2(0);
      return;
    }
    setWrong(wrong + 1);
    toast("Oops! That's Not Correct");
    userInputRef.current!.value = "";
    setParam1(Math.floor(Math.random() * 12 + 1));
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="tertiary">
          <IonTitle className="ion-text-center">Multiplication</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonRow>
          <IonCol className="ion-text-left">
            <IonButton routerLink="/Dashboard" color="tertiary" size="small">
              <IonIcon ios={arrowBack} slot="start"></IonIcon>
              Return to Dashboard
            </IonButton>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol className="ion-text-right">
            <IonLabel>{date}</IonLabel>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
            <IonItem>
              <IonLabel>Times Table</IonLabel>
              {param2 < 1 ? (
                <IonSelect
                  value={param2}
                  onIonChange={(e) => setParam2(e.detail.value)}
                >
                  <IonSelectOption value="1">1</IonSelectOption>
                  <IonSelectOption value="2">2</IonSelectOption>
                  <IonSelectOption value="3">3</IonSelectOption>
                  <IonSelectOption value="4">4</IonSelectOption>
                  <IonSelectOption value="5">5</IonSelectOption>
                  <IonSelectOption value="6">6</IonSelectOption>
                  <IonSelectOption value="7">7</IonSelectOption>
                  <IonSelectOption value="8">8</IonSelectOption>
                  <IonSelectOption value="9">9</IonSelectOption>
                  <IonSelectOption value="10">10</IonSelectOption>
                  <IonSelectOption value="11">11</IonSelectOption>
                  <IonSelectOption value="12">12</IonSelectOption>
                </IonSelect>
              ) : (
                <IonLabel>{param2}x selected</IonLabel> || <IonLabel></IonLabel>
              )}
            </IonItem>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
            <IonLabel className="ion-padding ion-text-center">
              <h1>
                {param1} x {param2} =
              </h1>
            </IonLabel>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
            <IonItem>
              <IonLabel position="floating">Your Answer</IonLabel>
              <IonInput type="number" ref={userInputRef}></IonInput>
            </IonItem>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol className="ion-text-center">
            <IonButton onClick={checkAnswer} color="tertiary">
              Check Answer
            </IonButton>
          </IonCol>
        </IonRow>
        <IonListHeader>Results</IonListHeader>
        <IonItem>
          <IonLabel>Correct</IonLabel>
          <IonNote slot="end" color="success">
            <h2>{correct}</h2>
          </IonNote>
        </IonItem>
        <IonItem>
          <IonLabel>Wrong</IonLabel>
          <IonNote slot="end" color="danger">
            <h2>{wrong}</h2>
          </IonNote>
        </IonItem>
      </IonContent>
    </IonPage>
  );
};

export default Multiplication;
