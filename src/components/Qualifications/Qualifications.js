import './Qualifications.scss';
import QualificationMenu from './../QualificationMenu/QualificationMenu';
import { useState } from 'react';

const Qualification = (props) => {

    const [activeItem, setActiveItem] = useState("Experience");

    const QualificationMenuHandler = (value) => {
        setActiveItem(value);
    };

  return (
    <div className="qualification" ref={props.qualifications}>
    <div className="section">
        <h3 className="section__title">Qualifications</h3>
        <h4 className="section__subtitle">My personal journey</h4>
    </div>

    <QualificationMenu selectedItem={QualificationMenuHandler} />

    {activeItem === "Education" && (
        <div className="timeline">
            <div className="timeline-container left">
                <div className="timeline-content">
                    <strong className="timeline-title"> Faculty of Science, University of Kragujevac</strong>
                    <span className="timline-subtitle">Computer Science</span>
                    <div className="timeline-calendar">
                        <i className="timeline-calendar__icon"></i>
                        <span className="timeline-calendar__value">2015 - 2021</span>
                    </div>
                </div>
            </div>

            <div className="timeline-container right">
                <div className="timeline-content">
                    <strong className="timeline-title">Medical school with student dormitory "Sestre Ninkovic"</strong>
                    <span className="timline-subtitle">Lab technician</span>
                    <div className="timeline-calendar">
                        <i className="timeline-calendar__icon"></i>
                        <span className="timeline-calendar__value">2011 - 2015</span>
                    </div>
                </div>
            </div>
        </div>
    )}

    {activeItem === "Experience" && (
        <div className="timeline">
            <div className="timeline-container left">
                <div className="timeline-content">
                    <strong className="timeline-title">Logispin RS</strong>
                    <span className="timline-subtitle">Frontend Developer</span>
                    <div className="timeline-calendar">
                        <i className="timeline-calendar__icon"></i>
                        <span className="timeline-calendar__value">2020 - present</span>
                    </div>
                </div>
            </div>

            <div className="timeline-container right">
                <div className="timeline-content">
                    <strong className="timeline-title">Logispin RS</strong>
                    <span className="timline-subtitle">Internship</span>
                    <div className="timeline-calendar">
                        <i className="timeline-calendar__icon"></i>
                        <span className="timeline-calendar__value">July 2020</span>
                    </div>
                </div>
            </div>
        </div>
    )}
</div>

  )
};

export default Qualification;