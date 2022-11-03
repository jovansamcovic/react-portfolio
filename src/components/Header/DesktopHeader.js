import { useState } from "react";
import DesktopHeaderItem from "./DesktopHeaderItem";

const DesktopHeader = ({toHome, toAbout, toSkills, toQualification, toContact}) => {

  const items = ["Home", "About","Skills","Qualification","Contact"];
  const [activeItem, setActiveItem] = useState("Home");

  return (
    <ul className="desktop-header">
        {items.map((item) => (
          <DesktopHeaderItem
            key={Math.random()}
            name={item}
            activeItem={activeItem}
            setActiveItem={setActiveItem}

            toHome={toHome}
            toAbout={toAbout}
            toSkills={toSkills}
            toQualification={toQualification}
            toContact={toContact}
          />
        ))

        }
    </ul>
  )
};

export default DesktopHeader;