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
  IonInput,
  IonListHeader,
  IonNote,
  IonIcon,
  IonSelect,
  IonSelectOption,
} from "@ionic/react";
import { arrowBack } from "ionicons/icons";
import { toast } from "../toast";

const Division: React.FC = () => {
  const [difficulty, setDifficulty] = useState(1);
  const [param1, setParam1] = useState(Math.floor(Math.random() * 999 + 100));
  const [param2, setParam2] = useState(Math.floor(Math.random() * 99 + 2));
  const [correct, setCorrect] = useState(0);
  const [wrong, setWrong] = useState(0);
  const [highScore, setHighScore] = useState(0);

  const userInputRef = useRef<HTMLIonInputElement>(null);
  const date = moment().format("MMMM Do YYYY");
  const selectedDifficulty = difficulty;

  const checkAnswer = () => {
    const userAnswer = userInputRef.current!.value;
    const answer = (+param1 / +param2).toFixed(0);
    console.log(answer);

    if (!userAnswer) {
      toast("Please enter a valid number in your answer field");
      return;
    }

    if (answer === "Infinity" && +userAnswer === 0) {
      toast("Well Done! That's Correct");
      userInputRef.current!.value = "";
      setCorrect(correct + 1);
      setParam1(Math.floor(Math.random() * (999 + 100) * selectedDifficulty));
      setParam2(Math.floor(Math.random() * (99 + 2) * selectedDifficulty));
      console.log(answer);
      return;
    } else if (+userAnswer === +answer) {
      toast("Well Done! That's Correct");
      userInputRef.current!.value = "";
      setCorrect(correct + 1);
      setParam1(Math.floor(Math.random() * (999 + 100) * selectedDifficulty));
      setParam2(Math.floor(Math.random() * (99 + 2) * selectedDifficulty));
      console.log(answer);
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
    setParam1(Math.floor(Math.random() * (999 + 100) * selectedDifficulty));
    setParam2(Math.floor(Math.random() * (99 + 2) * selectedDifficulty));
    console.log(answer);
  };

  if (correct > highScore) {
    setHighScore(correct);
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="warning">
          <IonTitle className="ion-text-center">Division</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonRow>
          <IonCol className="ion-text-left">
            <IonButton routerLink="/Dashboard" color="warning" size="small">
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
              <IonLabel>Difficulty</IonLabel>
              <IonSelect
                value={difficulty}
                onIonChange={(e) => setDifficulty(e.detail.value)}
                interface="action-sheet"
              >
                <IonSelectOption value="4">Easy</IonSelectOption>
                <IonSelectOption value="8">Medium</IonSelectOption>
                <IonSelectOption value="12">Hard</IonSelectOption>
              </IonSelect>
            </IonItem>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
            <IonLabel className="ion-padding ion-text-center">
              <h1>
                {param1} ÷ {param2} =
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
          <IonCol>
            <IonNote>
              <p className="ion-padding ion-text-center">
                Round up or down to the nearest whole number (e.g. 3.5 = 4)
              </p>
            </IonNote>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol className="ion-text-center">
            <IonButton onClick={checkAnswer} color="warning">
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
        <IonItem>
          <IonLabel>High Score</IonLabel>
          <IonNote slot="end" color="warning">
            <h2>{highScore}</h2>
          </IonNote>
        </IonItem>
      </IonContent>
    </IonPage>
  );
};

export default Division;
