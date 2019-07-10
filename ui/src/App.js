import React, { useState, useEffect } from 'react';
import './App.css';

function Loading() {
  return <p>Loading...</p>;
}

function Answer({ answer, checked, onChange }) {
  const { id, label } = answer;
  return (
    <div>
      <label htmlFor={label}>{label}</label>
      <input
        checked={checked}
        id={label}
        name="question"
        type="radio"
        value={id}
        onChange={() => onChange(id)}
      />
    </div>
  );
}

function Question({ question, updateSurvey }) {
  const { answers, label, selected } = question;
  function updateQuestion(selected) {
    const updatedQuestion = {
      ...question,
      selected,
    };
    updateSurvey(updatedQuestion);
  }

  return (
    <div>
      <h2>{label}</h2>
      <form>
        {answers.map(answer => (
          <Answer
            answer={answer}
            checked={answer.id === selected}
            onChange={updateQuestion}
            key={answer.id}
          />
        ))}
        <button disabled={!selected} type="submit" onClick={() => {}}>
          Next
        </button>
      </form>
    </div>
  );
}

function getNextQuestion(survey) {
  let currentQuestion = survey.questions[0];
  while (currentQuestion && currentQuestion.selected !== 0) {
    const nextQuestionId = currentQuestion.answers.find(
      answer => answer.id === currentQuestion.selected,
    ).nextQuestion;

    const nextQuestion = survey.questions.find(
      question => question.id === nextQuestionId,
    );

    console.log(nextQuestion);
    currentQuestion = nextQuestion;
  }
  return currentQuestion;
}

function Survey({ survey, setSurvey }) {
  const { name } = survey;

  const question = getNextQuestion(survey);
  // const [question] = survey.questions;

  function updateSurvey(updatedQuestion) {
    const updatedSurvey = {
      ...survey,
      questions: survey.questions.map(question =>
        question.id === updatedQuestion.id ? updatedQuestion : question,
      ),
    };
    setSurvey(updatedSurvey);
  }

  return (
    <div>
      <h1>{name}</h1>
      {question ? (
        <Question question={question} updateSurvey={updateSurvey} />
      ) : (
        <p>All done!</p>
      )}
    </div>
  );
}

function App() {
  const [survey, setSurvey] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('/survey/1');
      const data = await response.json();
      setSurvey(data);
    }
    fetchData();
  }, []);

  return (
    <div className="App">
      {survey ? <Survey survey={survey} setSurvey={setSurvey} /> : <Loading />}
    </div>
  );
}

export default App;
