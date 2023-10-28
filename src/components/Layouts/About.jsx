import { identity, about } from "../../constants/data";
import Section from "../Elements/Section";
import TitleSection from "../Elements/TitleSection";

const About = () => {
  const { name, position, region } = identity;
  return (
    <Section id="about">
      <TitleSection>About</TitleSection>
      <div className="flex-col md:flex-row flex w-full gap-8 items-center">
        {/* About Left */}
        <div className="about-right w-full md:w-1/2">
          <img
            src="/svg/about.svg"
            alt="about img"
            className=""
            data-aos="zoom-in"
            data-aos-delay="100"
          />
        </div>

        {/* About Right */}
        <div className="about-left w-full md:w-1/2 flex flex-col gap-2">
          <h3
            className="text-2xl font-bold text-center"
            data-aos="fade-down"
            data-aos-delay="100"
          >
            I'm {name},<br />
            as a<span className="text-secondary"> {position}</span>
          </h3>
          <p className="text-justify mb-4">
            📍 based in <span className="font-bold text-primary">{region}</span>
          </p>
          {identity.aboutMe.map((aboutMe, index) => (
            <p key={index} className="text-justify">
              {aboutMe}
            </p>
          ))}
          <div className="flex text-center gap-6 mt-6">
            {about.map(
              ({ topDescription, counted, bottomDescription }, index) => (
                <div
                  className="w-1/2 p-4 rounded-xl border-4 border-white shadow-xl flex flex-col justify-between gap-4 hover:border-primary transition duration-200"
                  key={index}
                  data-aos="zoom-out"
                  data-aos-delay="300"
                >
                  <p>{topDescription}</p>
                  <p className="text-5xl after:content-['+'] font-semibold text-secondary">
                    {counted}
                  </p>
                  <p>{bottomDescription}</p>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
