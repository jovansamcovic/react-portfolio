import React from "react";

const QualificationItem = ({name, activeItem, setActiveItem}) => {

  const itemHandler = () => {
    setActiveItem(name);
  }

  return (
    <li
    onClick={itemHandler}
    className={activeItem === name ? "qualification-menu__item active": "qualification-menu__item"}
    >
      {name}
    </li>
  )
};

export default QualificationItem;