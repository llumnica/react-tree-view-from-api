import React from 'react';
import Entry from './Entry/Entry';
import "./../../App.css";

function CompleteTree({ data }) {

  return (
    <div className='main'>
      <h1>Complete Tree</h1>
        {data.map((item) => {
          return <Entry key={item.entry_id} item={item} level={0} />;
        })}
    </div>
  );
}

export default CompleteTree;
