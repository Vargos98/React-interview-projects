import React, { useState } from 'react'
import data from './data';
const Accordian = () => {

  const [selected, setSelected] = useState(null);

  const handleSingleClick = (id) => {
    setSelected(id === selected ? null : id);
  }

  return (
    <div className='flex items-center justify-center'>
      <div className='flex items-center justify-center'>
        {
          data && data.length > 0 ?
            data.map(dataItem =>
              <div onClick={() => handleSingleClick(dataItem.id)} className='title'>
                <h3>{dataItem.question}</h3>
                <span>+</span>
                {
                  selected === dataItem.id ? <div className='content'><h4>{dataItem.answer}</h4></div> : null
                }
              </div>)

            : <div><h3>Empty data</h3></div>
        }

      </div>

    </div>
  )
}

export default Accordian