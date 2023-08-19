import { experience } from "../../constants/data";
import Section from "../Elements/Section";
import TitleSection from "../Elements/TitleSection";
import CardExperience from "../Fragments/CardExperience";

const Experience = () => {
  return (
    <Section id="experience">
      <TitleSection>Education & Experience</TitleSection>
      <div className="card-experience flex flex-col gap-10 w-full md:[&>*:nth-child(odd)]:self-start [&>*:nth-child(even)]:self-end">
        {experience.map(({ job, company, time, summary, image }, index) => (
          <CardExperience
            key={index}
            job={job}
            company={company}
            time={time}
            summary={summary}
            image={image}
          />
        ))}
      </div>
    </Section>
  );
};

export default Experience;
