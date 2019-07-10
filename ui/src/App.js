import React, { useState, useEffect } from 'react';
import './App.css';

function Loading() {
  return <p>Loading...</p>;
}

function Question({ question }) {
  return <div>question</div>;
}

function Survey({ survey }) {
  const { name, questions } = survey;
  return (
    <div>
      <h1>{name}</h1>
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
