import Section from "../Elements/Section";
import TitleSection from "../Elements/TitleSection";
import CardExperience from "../Fragments/CardExperience";

const Experience = () => {
  return (
    <Section id="experience">
      <TitleSection>Experience</TitleSection>
      <div className="flex ">
        <CardExperience />
      </div>
    </Section>
  );
};

export default Experience;
