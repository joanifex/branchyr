import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [survey, setSurvey] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('/survey/1');
      const data = await response.json();
      console.log(data);
      setSurvey(data);
    }
    fetchData();
  }, []);

  return <div className="App">{JSON.stringify(survey)}</div>;
}

export default App;
