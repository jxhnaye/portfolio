import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/pageHeaderContent";
import { skillsData } from "./utils";
import { Animate, AnimateKeyframes } from "react-simple-animate";
import { Line } from "rc-progress";
import "./styles.scss";


const Skills = () => {
  return (
    <section id="skills" className="skills">
      <PageHeaderContent
        headerText="Skills"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="skills_content">
        {skillsData.map((item, i) => (
          <div key={i} className="skills_content_inner">
            <Animate
              play
              duration={1}
              delay={0.3}
              start={{
                transform: "translateX(-200px)",
              }}
              end={{
                transform: "translateX(0px)",
              }}
            >
              <h3 className="skills_content_inner_category">{item.label}</h3>
              <div>
                {item.data.map((skillItem, j) => (
                  <AnimateKeyframes
                    play
                    duration={1}
                    keyframes={["opacity : 1", "opacity : 0"]}
                    iterationCount="1"
                  >
                    <div className="progressBar" key={j}>
                      <p>{skillItem.skillName}</p>
                      <Line
                        percent={skillItem.percentage}
                        strokeWidth="3"
                        strokeColor={"var(--main-color)"}
                        trailWidth="3"
                        strokeLinecap="square"
                      />
                    </div>
                  </AnimateKeyframes>
                ))}
              </div>
            </Animate>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
