import React from 'react';

function DoList ({text, dolist, doslist, setDolist }) {
    const deleteHandler = () => {
        setDolist(doslist.filter(el => el.id !== dolist.id));
    };
    const checkHandler = () => {
        setDolist(doslist.map(item => {
            if(item.id === dolist.id){
                return {
                    ...item, checked: !item.checked
                };
            }
            return item;
        })
        );
    }
    return(
        <div className="DoList">
            <li className={`DoList-item ${dolist.checked ? "checked" : ""}`}>{text}</li>
            <button onClick={checkHandler} className="checklist-btn">
                <i className="fas fa-check-square"></i>
            </button>
            <button onClick={deleteHandler} className="deletelist-btn">
                <i className="fas fa-trash-alt"></i>
            </button>
        </div>
    );
}

export default DoList;
