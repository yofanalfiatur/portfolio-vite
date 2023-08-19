import Section from "../Elements/Section";
import TitleSection from "../Elements/TitleSection";
import CardPortfolio from "../Fragments/CardPortfolio";

const Portfolio = () => {
  return (
    <Section id="portfolio">
      <TitleSection>Portfolio</TitleSection>
      <div>
        <CardPortfolio />
      </div>
    </Section>
  );
};

export default Portfolio;
