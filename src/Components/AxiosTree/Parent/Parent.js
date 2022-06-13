import React, { useState } from "react";
import axios from "axios";
import SingleChild from "../SingleChild/SingleChild";

function Parent({ item, level }) {

  const [selected, setSelected] = useState(item.selected ?? false);
  const [childByCall, setChildByCall] = useState([]);
  const hasChildren = item.childs !== 0 ? true : false;

  const renderChilds = () => {
    if (hasChildren) {
      const newLevel = level + 1;
      return childByCall.map((item) => {
        return <Parent key={item.entry_id} item={item} level={newLevel} />;
      });
    }
    return null;
  };

  const toggleSelected = (id) => {
    //Here we make request based on Parent and Child id
    axios
      .get(`https://wp.x10.mx/laravel8/public/api/fetchAxiosTreeNode/${id}`)
      .then((res) => {
        setChildByCall(res.data.childs);
      });
    setSelected((prev) => !prev);
  };

  return (
    <div>
      <SingleChild
        item={item}
        selected={selected}
        hasChildren={hasChildren}
        level={level}
        onToggle={toggleSelected}
      />
      {selected && renderChilds()}
    </div>
  );
}

export default Parent;
