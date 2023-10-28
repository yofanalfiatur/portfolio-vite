import { project } from "../../constants/data";
import Section from "../Elements/Section";
import TitleSection from "../Elements/TitleSection";
import CardPortfolio from "../Fragments/CardPortfolio";

const Portfolio = () => {
  return (
    <Section id="portfolio">
      <TitleSection>Portfolio</TitleSection>
      <div className="w-full">
        <p>Projects I've worked on</p>
        <div
          className="flex flex-col md:flex-row w-full gap-8"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          {project.map(
            (
              { name, description, preview, techStack, link, repository },
              index
            ) => (
              <CardPortfolio
                key={index}
                name={name}
                description={description}
                preview={preview}
                techStack={techStack}
                link={link}
                repository={repository}
              />
            )
          )}
        </div>
      </div>
    </Section>
  );
};

export default Portfolio;
