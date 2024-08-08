import React, { useState } from 'react'
import data from './data';
// import './styles.css'
const Accordian = () => {

  const [selected, setSelected] = useState(null);
  const [enableMultiSelect, setMultiSelect] = useState(false);
  const [multiple, setMultiple] = useState([]);

  const handleSingleClick = (id) => {
    setSelected(id === selected ? null : id);
  }

  const handleMultipleSelection = (id) => {
    let copyMultiple = [...multiple]
    const findIndexOfCurrentId = copyMultiple.indexOf(id)
    if(findIndexOfCurrentId !== -1) { copyMultiple.push(id)}else{ copyMultiple.slice(findIndexOfCurrentId, 1)}
    setMultiple(copyMultiple)
  }

  return (
    <div className='wrapper'>
      <div className='accordian'>
      <button onClick={()=>setMultiSelect(!enableMultiSelect)}>Enable Multiple selection</button>
        {
          data && data.length > 0 ?
            data.map(dataItem =>
              <div onClick={enableMultiSelect ? ()=> handleMultipleSelection(dataItem.id)  :() => handleSingleClick(dataItem.id)} className='title'>
                <h3>{dataItem.question}</h3>
                <span>+</span>
                {
                  enableMultiSelect ? multiple.indexOf(dataItem.id) !== -1 &&
                  (<div className="content">{dataItem.answer}</div>)
               :selected === data.id && (
                <div className='content'>{dataItem.answer}</div>
               ) }
              </div>)

            : <div><h3>Empty data</h3></div>
        }

      </div>

    </div>
  )
}

export default Accordian