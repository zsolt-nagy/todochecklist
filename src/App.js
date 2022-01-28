import React, { useState, useEffect } from 'react';
import './App.css';
import FormToDo from "./Components/FormToDo";
import ToDoList from "./Components/ToDoList";

function App() {
  //state
  const [inputText, setInputText] = useState("");
  const [doslist, setDolist] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredDoslist, setFilteredDoslist] = useState([]);

//USE EFFECT
  useEffect(() => {
    filterHandler();
  }, [doslist, status]); 

//FUNCTIONS
  const filterHandler = () => {
    switch (status) {
      case 'completed':
        setFilteredDoslist(doslist.filter((dolist) => dolist.checked === true));
        break;
      case 'incomplete':
        setFilteredDoslist(doslist.filter((dolist) => dolist.completed === false));
        break;
      default:
        setFilteredDoslist(doslist);
        break;
      }
  };
  return (
    <div className="ToDolist">
      <header>
        <h1>What's The Plan Today?</h1>
      </header>
      <FormToDo inputText={inputText}  doslist={doslist} setDolist={setDolist} setInputText={setInputText} setStatus={setStatus} />
      <ToDoList setDolist={setDolist} doslist={doslist} filteredDoslist={filteredDoslist} />
    </div>
  );
}

export default App;