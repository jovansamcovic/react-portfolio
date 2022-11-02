import React, { useState } from "react";
import QualificationItem from "./QualificationItem";

const QualificationMenu = ({selectedItem}) => {

  // const items = ["Education", "Experience"];
  const [activeItem, setActiveItem] = useState("Education");

  const ItemHandler =  (value) => {
    setActiveItem(value);
    selectedItem(value);
  }

  return (
    <ul className="qualification-menu">
        <QualificationItem
        name={"Education"}
        activeItem={activeItem}
        setActiveItem={ItemHandler}
         />

      <QualificationItem
        name={"Experience"}
        activeItem={activeItem}
        setActiveItem={ItemHandler}
         />
    </ul>
  )
};

export default QualificationMenu;