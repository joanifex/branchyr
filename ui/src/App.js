import React, { useState, useEffect } from 'react';
import './App.css';

function Loading() {
  return <p>Loading...</p>;
}

function Answer({ answer }) {
  const { label } = answer;
  return <p>{label}</p>;
}

function Question({ question }) {
  const { answers, label } = question;
  return (
    <div>
      <h2>{label}</h2>
      {answers.map(answer => (
        <Answer answer={answer} key={answer.id} />
      ))}
    </div>
  );
}

function Survey({ survey }) {
  const { name, questions } = survey;

  const [firstQuestion] = questions;

  return (
    <div>
      <h1>{name}</h1>
      <Question question={firstQuestion} />
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
      {survey ? <Survey survey={survey} /> : <Loading />}
    </div>
  );
}

export default App;
