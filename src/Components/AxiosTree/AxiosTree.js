import React from "react";
import Parent from './Parent/Parent';
import "./../../App.css";

function AxiosTree({ data }) {
  return (
    <div className="main">
      <h1>Axios Call Tree</h1>
      {data.map((item) => {
        return <Parent key={item.entry_id} item={item} level={0} />;
      })}
    </div>
  );
}

export default AxiosTree;
