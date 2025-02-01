import { project } from "../../constants/data";
import Section from "../Elements/Section";
import TitleSection from "../Elements/TitleSection";
import CardPortfolio from "../Fragments/CardPortfolio";
import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import {
  ArrowFatLineLeft,
  ArrowFatLineRight,
} from "@phosphor-icons/react/dist/ssr";

const Portfolio = () => {
  return (
    <Section id="portfolio" className="">
      <TitleSection>Portfolio</TitleSection>
      <p className="mb-4 text-md w-full text-center">
        Personal projects that I have worked on
      </p>
      <div
        className="w-full overflow-hidden"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        <Splide
          options={{
            type: "loop",
            gap: "1rem",
            perPage: 3,
            perMove: 1,
            autoplay: true,
            speed: 700,
            interval: 2000,
            pauseOnFocus: true,
            pauseOnHover: true,
            breakpoints: {
              992: {
                perPage: 1,
              },
            },
          }}
          hasTrack={false}
          className="relative p-1 pb-12"
        >
          <SplideTrack className="overflow-visible">
            {project.map(
              (
                { name, description, preview, techStack, link, repository },
                index
              ) => (
                <SplideSlide key={index} >
                  <CardPortfolio
                    name={name}
                    description={description}
                    preview={preview}
                    techStack={techStack}
                    link={link}
                    repository={repository}
                  />
                </SplideSlide>
              )
            )}
          </SplideTrack>
          <div className="splide__arrows absolute bottom-4 w-full z-10">
            <button className="splide__arrow splide__arrow--prev left-[40%] bg-secondary">
              <ArrowFatLineLeft
                size={28}
                style={{ transform: "scaleX(1)", fill: "white" }}
              />
            </button>
            <button className="splide__arrow splide__arrow--next right-[40%] bg-secondary">
              <ArrowFatLineRight size={28} style={{ fill: "white" }} />
            </button>
          </div>
        </Splide>
      </div>
    </Section>
  );
};

export default Portfolio;
