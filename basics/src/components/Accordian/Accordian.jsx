<<<<<<< Updated upstream
import React, { useState } from 'react';
import data from './data';

const Accordion = () => {
=======
//single selection
//multiple selection

import { useState } from "react";
import data from "./data";
import "./styles.css";

export default function Accordian() {
>>>>>>> Stashed changes
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

<<<<<<< Updated upstream
  const handleSingleClick = (id) => {
    setSelected(id === selected ? null : id);
  };

  const handleMultipleSelection = (id) => {
    setMultiple((prev) => 
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };
=======
  function handleSingleSelection(getCurrentId) {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  }

  function handleMultiSelection(getCurrentId) {
    let cpyMutiple = [...multiple];
    const findIndexOfCurrentId = cpyMutiple.indexOf(getCurrentId);

    console.log(findIndexOfCurrentId);
    if (findIndexOfCurrentId === -1) cpyMutiple.push(getCurrentId);
    else cpyMutiple.splice(findIndexOfCurrentId, 1);

    setMultiple(cpyMutiple);
  }
>>>>>>> Stashed changes

  console.log(selected, multiple);
  return (
<<<<<<< Updated upstream
    <div className="wrapper">
      <div className="accordion">
        <button onClick={() => setMultiSelect(!enableMultiSelect)}>
          {enableMultiSelect ? "Disable" : "Enable"} Multiple Selection
        </button>
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div
              key={dataItem.id}
              onClick={
                enableMultiSelect
                  ? () => handleMultipleSelection(dataItem.id)
                  : () => handleSingleClick(dataItem.id)
              }
              className="title"
            >
              <h3>{dataItem.question}</h3>
              <span>+</span>
              {enableMultiSelect
                ? multiple.includes(dataItem.id) && (
                    <div className="content">{dataItem.answer}</div>
                  )
                : selected === dataItem.id && (
                    <div className="content">{dataItem.answer}</div>
                  )}
            </div>
          ))
        ) : (
          <div>
            <h3>Empty data</h3>
          </div>
=======
    <div className="acc-wrapper">
      <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>
        Enable Multi Selection
      </button>
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="item">
              <div
                onClick={
                  enableMultiSelection
                    ? () => handleMultiSelection(dataItem.id)
                    : () => handleSingleSelection(dataItem.id)
                }
                className="title"
              >
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>
              {enableMultiSelection
                ? multiple.indexOf(dataItem.id) !== -1 && (
                    <div className="acc-content ">{dataItem.answer}</div>
                  )
                : selected === dataItem.id && (
                    <div className="acc-content ">{dataItem.answer}</div>
                  )}
              {/* {selected === dataItem.id ||
              multiple.indexOf(dataItem.id) !== -1 ? (
                <div className="content">{dataItem.answer}</div>
              ) : null} */}
            </div>
          ))
        ) : (
          <div>No data found !</div>
>>>>>>> Stashed changes
        )}
      </div>
    </div>
  );
<<<<<<< Updated upstream
};

export default Accordion;
=======
}
>>>>>>> Stashed changes
