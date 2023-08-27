import { services } from "../../constants/data";
import Section from "../Elements/Section";
import TitleSection from "../Elements/TitleSection";
import CardService from "../Fragments/CardService";

const Services = () => {
  return (
    <Section id="services">
      <TitleSection>Services</TitleSection>
      <div className="w-full flex shadow-md rounded-md overflow-hidden">
        {services.map(
          (
            { title, description, service, IconTab, subheading, listExample },
            index
          ) => (
            <CardService
              key={index}
              index={index}
              title={title}
              description={description}
              subheading={subheading}
              service={service}
              IconTab={IconTab}
              listExample={listExample}
            />
          )
        )}
      </div>
    </Section>
  );
};

export default Services;
