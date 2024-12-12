import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/pageHeaderContent";
import { Animate } from "react-simple-animate";
import { DiApple, DiReact, DiPython } from "react-icons/di";
import { FaDev } from "react-icons/fa";

import "./styles.scss";

const personalDetails = [
  {
    label: "Name:",
    value: "John Aye",
  },
  {
    label: "Age:",
    value: "23",
  },
  {
    label: "Location:",
    value: "Torrance, CA",
  },
  {
    label: "Email:",
    value: "jxhnaye@gmail.com",
  },
];

const bio = "bio";

const About = () => {
  return (
    <section id="about" className="about">
      <PageHeaderContent
        headerText="About Me"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="about_content">
        <div className="about_content_personal">
          <Animate
            play
            duration={1.5}
            delay={0.5}
            start={{
              transform: "translateX(-900px)"
            }}
            end={{ transform: "translateX(0px)" }}
          >
            <h3>title</h3>
            <p>{bio}</p>
          </Animate>

          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(500px)"
            }}
            end={{ transform: "translateX(0px)" }}
          >
            <h3 className="personalInfoHeader">Personal Info</h3>
            <ul>
              {personalDetails.map((item, i) => (
                <li key={i}>
                  <span className="title">{item.label}</span>
                  <span className="value">{item.value}</span>
                </li>
              ))}
            </ul>
          </Animate>
        </div>

        <div className="about_content_services">
          <Animate
            play
            duration={1.5}
            delay={1.5}
            start={{
              transform: "translateX(600px)"
            }}
            end={{ transform: "translateX(0px)" }}
          >
            <div className="about_content_services_inner">
              <div>
                <FaDev size={50} color="var(--main-color)" />
              </div>
              <div>
                <DiReact size={60} color="var(--main-color)" />
              </div>
              <div>
                <DiApple size={50} color="var(--main-color)" />
              </div>
              <div>
                <DiPython size={60} color="var(--main-color)" />
              </div>
            </div>
          </Animate>
        </div>
      </div>
    </section>
  );
};

export default About;
