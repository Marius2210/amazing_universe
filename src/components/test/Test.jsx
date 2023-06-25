import React, { useState } from "react";
import Footer from "../Footer";
import error from '../../assets/images/error.png'
import check from '../../assets/images/check.png'

const Test = () => {
  const questions = [
    {
      questionText: "How many years of life does the Sun have left?",
      answerOptions: [
        { answerText: "3 billion years", isCorrect: false },
        { answerText: "2.5 billion years", isCorrect: false },
        { answerText: "7.1 billion years", isCorrect: false },
        { answerText: "5.5 billion years", isCorrect: true },
      ],
    },
    {
      questionText: "What is the diameter of the universe?",
      answerOptions: [
        { answerText: "98,000,000,000 million light years", isCorrect: false },
        { answerText: "90,000,000,000 million light years", isCorrect: false },
        { answerText: "93,000,000,000 million light years", isCorrect: true },
        { answerText: "95,000,000,000 million light years", isCorrect: false },
      ],
    },
    {
      questionText:
        "In what year was the first image of a black hole presented?",
      answerOptions: [
        { answerText: "2019", isCorrect: true },
        { answerText: "2020", isCorrect: false },
        { answerText: "2018", isCorrect: false },
        { answerText: "2021", isCorrect: false },
      ],
    },
    {
      questionText: "How many planets have been discovered?",
      answerOptions: [
        { answerText: "4500 planets", isCorrect: false },
        { answerText: "6050 planets", isCorrect: false },
        { answerText: "7837 planets", isCorrect: true },
        { answerText: "5500 planets", isCorrect: false },
      ],
    },
    {
      questionText: "What is a black hole?",
      answerOptions: [
        { answerText: "A type of supernova produced when very massive stars (masses greater than 25 solar masses) collapse at the end of their lives. After exploding as a supernova", isCorrect: false, },
        { answerText: "A powerful and luminous explosion of a star occurs during the late evolutionary stages of a massive star or when a white dwarf is unleashed in an out-of-control nuclear fusion", isCorrect: false, },
        { answerText: "A finite region of space whose interior has a mass concentration high enough to generate a gravitational field such that not even light can escape from it", isCorrect: true, },
        { answerText:"A giant superstructure of galaxies measuring more than 1,000,000,000 light-years in length. It is the largest and most massive structure known, encompassing 11% of the entire observable universe" ,isCorrect: false, },
      ],
    },
    {
      questionText: "What is the largest object in the universe?",
      answerOptions: [
        { answerText: "Supernova", isCorrect: false },
        { answerText: "Hypernova", isCorrect: false },
        { answerText: "Supermassive black hole", isCorrect: false },
        { answerText: "Hercules-Corona Borealis Great Wall", isCorrect: true,},
      ],
    },
    {
      questionText: "How long is a day on Venus?",
      answerOptions: [
        { answerText: "7-8 months", isCorrect: true },
        { answerText: "1 year", isCorrect: false },
        { answerText: "2 years", isCorrect: false },
        { answerText: "8-9 months", isCorrect: false },
      ],
    },
    {
      questionText: "Why can nothing and no one escape the attraction of a black hole?",
      answerOptions: [
        { answerText: "Due to its large size", isCorrect: true },
        { answerText: "Because it has little gravity", isCorrect: false },
        { answerText: "Because of its infinite density", isCorrect: true },
        { answerText: "For his great strength", isCorrect: false },
      ],
    },
    {
      questionText: "How does a supernova form?",
      answerOptions: [
        { answerText: "In the late evolutionary stages of a massive star or when a white dwarf is unleashed in runaway nuclear fusion", isCorrect: true, },
        { answerText: "These are produced when very massive stars (masses greater than 25 solar masses) collapse into each other at the end of their lives.",
          isCorrect: false, },
        { answerText: "As a black hole absorbing all nearby matter and releasing energy in the form of radio waves, infrared, light, ultraviolet and X-rays", isCorrect: false, },
        { answerText: "It forms when a large star uses up all its fuel and explodes. Then what is left collapses and becomes a super compact object", isCorrect: false, },
      ],
    },
    {
      questionText: "When was the Hercules-Corona Borealis Great Wall discovered?",
      answerOptions: [
        { answerText: "2010", isCorrect: false },
        { answerText: "2013", isCorrect: true },
        { answerText: "2012", isCorrect: false },
        { answerText: "2014", isCorrect: false },
      ],
    },
  ];

  /*Estado para iterar en cada pregunta y sus respectivas respuestas*/
  const [currentQuestion, setCurrentQuestion] = useState(0);
  /*Estado para mostrar la puntuación del usuario, iniciará en false*/
  const [showScore, setShowScore] = useState(false);
  /*Estado para manejar la puntuación del usuario, dependiendo si ha contestado correctamente*/
  const [score, setScore] = useState(0);


  /*Función al dar click en una respuesta*/
  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;

    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  /*Función para mostrar un texto dependiendo si aprobó o reprobó*/
  const scoreText = () => {
    if (score < 6) {
      return "Oops, maybe it wasn't what you expected, keep studying to improve!";
    }
    if (score >= 6) {
      return "Very good job, I see you took it seriously, keep it up, you did very well!";
    }
  };

  /*Función para mostrar un imagen dependiendo si aprobó o reprobó*/
  const scoreImg = () => {
    if (score < 6) {
      return error;
    }
    if (score >= 6) {
      return check;
    }
  };

  return (
    <div className="test">
      {showScore ? (
        <div className="score-section">
          <h1>Test result</h1>
          <br/>
          You got <br /> {score} out of {questions.length}
          <br />
          <br />
          <img src={scoreImg()} />
          <p className="score-text">{scoreText()}</p>
          <button onClick={() => {
            setShowScore(false);
            setCurrentQuestion(0);
            setScore(0);
          }}>Try again</button>
        </div>
      ) : (
        <>
          <div className="question-section">
            <h1>Test</h1>
            <p>Solve the following test, select the answer that you consider correct, at the end of the test your score will be shown. Luck!.</p>
            <div className="question-count">
              <h1>
                Question {currentQuestion + 1}/{questions.length}
              </h1>
            </div>
            <div className="question-text">
              {questions[currentQuestion].questionText}
            </div>
          </div>
          <div className="answer-section">
            {questions[currentQuestion].answerOptions.map((answerOption, index) => (
              <button className="answer-button" key={index} onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>
                {answerOption.answerText}
              </button>
            ))}
          </div>
        </>
      )}
      <Footer />
    </div>
  );
};

export default Test;
