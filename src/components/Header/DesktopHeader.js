import { useState } from "react";
import DesktopHeaderItem from "./DesktopHeaderItem";

const DesktopHeader = ({toHome, toAbout, toSkills, toQualifications, toContact,toProjects}) => {

  const items = ["Home", "About","Skills","Qualifications","Projects","Contact"];
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
            toQualifications={toQualifications}
            toContact={toContact}
            toProjects={toProjects}
          />
        ))

        }
    </ul>
  )
};

export default DesktopHeader;