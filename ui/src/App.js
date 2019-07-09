import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('/greeting');
      const data = await response.json();
      setGreeting(data.content);
    }
    fetchData();
  }, []);

  return <div className="App">{greeting}</div>;
}

export default App;
