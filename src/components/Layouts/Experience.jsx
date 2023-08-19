import { experience } from "../../constants/data";
import Section from "../Elements/Section";
import TitleSection from "../Elements/TitleSection";
import CardExperience from "../Fragments/CardExperience";

const Experience = () => {
  return (
    <Section id="experience">
      <TitleSection>Education & Experience</TitleSection>
      <div className="flex flex-col gap-6  w-full">
        {experience.map(({ job, company, time, summary }, index) => (
          <CardExperience
            key={index}
            job={job}
            company={company}
            time={time}
            summary={summary}
          />
        ))}
      </div>
    </Section>
  );
};

export default Experience;
