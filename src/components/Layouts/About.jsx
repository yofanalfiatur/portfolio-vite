import Section from "../Elements/Section";
import TitleSection from "../Elements/TitleSection";

const About = () => {
  return (
    <Section id="about">
      <TitleSection>About</TitleSection>
      <div className="flex w-full">
        <div className="">
          <img
            src="/svg/about.svg"
            alt=""
            width={400}
            height={400}
            className=""
          />
        </div>
      </div>
    </Section>
  );
};

export default About;
