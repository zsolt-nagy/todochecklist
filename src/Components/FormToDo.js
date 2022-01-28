import React from 'react';

function FormToDo ({setInputText, doslist, setDolist, inputText, setStatus}) {
    const inputDoHandler = (e) => {
        setInputText(e.target.value);
    };
    const submitDoHandler  = (e) => {
        e.preventDefault();
        setDolist([
            ...doslist, {text: inputText, completed: false, id: Math.random()*1000 },
        ]);
        setInputText("");
    };
    const statusHandler = (e) => {
        setStatus(e.target.value);
    };
    return(
        <form>
            <input value={inputText} onChange={inputDoHandler} type="text" className="dolist-input" />
            <button onClick={submitDoHandler} className="dolist-button" type="submit">
                <i className="fas fa-plus-circle"></i>
            </button>
            <div className="select">
                <select onChange={statusHandler} name="list" className="filter-dolist">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="incomplete">InComplete</option>
                </select>
            </div>
        </form>
    );
}

export default FormToDo;