import { skills } from "../../constants/data";
import Section from "../Elements/Section";
import TechIcon from "../Elements/TechIcon";
import TitleSection from "../Elements/TitleSection";

const Wrapper = (props) => {
  const { children, title } = props;
  return (
    <>
      <div className="grid grid-cols-2 lg:grid-cols-3 w-full md:w-1/2 p-4 md:p-6 lg:p-8 rounded-md bg-gradient-to-br from-tertiary from-5% to-white  gap-2 shadow-md relative">
        <p className="text-2xl font-bold text-primary absolute -top-12 right-1/2 translate-x-1/2 w-max text-center border-b-4 border-secondary p-2">
          {title}
        </p>
        {children}
      </div>
    </>
  );
};

const Skills = () => {
  const skillSet = skills.filter((skills) => skills.type === "Skill");
  const toolSet = skills.filter((skills) => skills.type === "Tool");
  return (
    <Section id="skills">
      <TitleSection>Skills</TitleSection>
      <div className="flex flex-col md:flex-row w-full gap-8 h-auto mt-12">
        <Wrapper title="Tech Stack 💻">
          {skillSet.map(({ title, level, type, icon }, index) => (
            <TechIcon
              key={index}
              title={title}
              level={level}
              type={type}
              icon={icon}
            />
          ))}
        </Wrapper>
        <Wrapper title="Tools ⚙️">
          {toolSet.map(({ title, level, type, icon }, index) => (
            <TechIcon
              key={index}
              title={title}
              level={level}
              type={type}
              icon={icon}
            />
          ))}
        </Wrapper>
      </div>
    </Section>
  );
};

export default Skills;
