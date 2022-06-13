import React, { useState } from "react";

function SingleChild({ item, hasChildren, level, onToggle }) {

  const [isActive, setActive] = useState("false");

  const ToggleClass = () => {
    setActive(!isActive);
  };

  const multiClick = () => {
    ToggleClass();
    onToggle(item.entry_id);
  };

  return (
    <div className="parent" style={{ paddingLeft: `${level * 30}px` }}>
      <span className="child">{item.name}</span>
      {hasChildren && (
        <span
          className={isActive ? "entryToggler" : "entryToggler entryActive"}
          onClick={multiClick}
        >
          {" "}
          <img
            className="arrowImg"
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Arrow_png_image.png"
            alt=""
          />{" "}
        </span>
      )}
    </div>
  );
}

export default SingleChild;
