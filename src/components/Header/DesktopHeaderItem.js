import React from "react";

const DesktopHeaderItem = (props) => {

  const itemHandler = () => {
    props.setActiveItem(props.name);

    if (props.name === "Home") {
      props.toHome();
    }

    if (props.name === "About") {
      props.toAbout();
    }

    if (props.name === "Skills") {
      props.toSkills();
    }

    if(props.name === "Qualifications") {
      props.toQualifications();
    }

    if (props.name === "Contact") {
      props.toContact();
    }

    if (props.name === "Projects") {
      props.toProjects();
    }
  }

  return (
    <li
    onClick={itemHandler}
    className={props.activeItem === props.name ? "desktop-header__item active": "desktop-header__item"}
    >
      {props.name}
    </li>
  )
};

export default DesktopHeaderItem;