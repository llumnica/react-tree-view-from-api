import React, { useState } from "react";
import Child from "../Child/Child";

function Entry({ item, level }) {

  const [selected, setSelected] = useState(item.selected ?? false);
  const hasChildren = item.childs.length > 0 ? true : false;

  const renderChilds = () => {
    if (hasChildren) {
      const newLevel = level + 1;

      return item.childs.map((child) => {
        return <Entry key={child.entry_id} item={child} level={newLevel} />;
      });
    }
    return null;
  };

  const toggleSelected = () => {
    setSelected((prev) => !prev);
  };

  return (
    <div>
      <Child
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

export default Entry;
