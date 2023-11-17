import React from 'react'

export const ToggleColumns = (props) => {
  const onCheckboxClick = (e, column) => {
    // TODO: implement checkbox click handler
    props?.onCheckboxClick(e.target.checked, column);
  }

  // TODO: Bind handlers and props
  return (
    <div className="toggle-columns">
      { 
        props.columns.map((column, index) => {
          return ( 
          <div key={index}>
            <label htmlFor={column}>
              {column}
            </label>
            <input
              id={column}
              name={column}
              type="checkbox"
              onChange={e => onCheckboxClick(e, column)}
               />
          </div>)
        })
      }
    </div>
  );
}
