import React, { useState } from 'react';
import data from './data';

const Accordion = () => {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelect, setMultiSelect] = useState(false);
  const [multiple, setMultiple] = useState([]);

  const handleSingleClick = (id) => {
    setSelected(id === selected ? null : id);
  };

  const handleMultipleSelection = (id) => {
    setMultiple((prev) => 
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
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
        )}
      </div>
    </div>
  );
};

export default Accordion;
