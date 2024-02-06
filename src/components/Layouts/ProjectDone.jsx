import Section from "../Elements/Section";
import TitleSection from "../Elements/TitleSection";
import { projectDone } from "../../constants/data";
import CardProjectsDone from "../Fragments/CardProjectsDone";
import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import {
  ArrowFatLineLeft,
  ArrowFatLineRight,
} from "@phosphor-icons/react/dist/ssr";

const ProjectDone = () => {
  return (
    <Section id="project-done" className="">
      <TitleSection>Completed Projects</TitleSection>
      <p className="mb-4 text-md w-full text-center">
        Projects from companies that I have completed
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
            breakpoints: {
              992: {
                perPage: 1,
              },
            },
          }}
          hasTrack={false}
          className="relative pb-10 "
        >
          <SplideTrack>
            {projectDone.map(
              ({ title, description, thumbnail, techStack, link }, index) => (
                <SplideSlide key={index}>
                  <CardProjectsDone
                    title={title}
                    description={description}
                    thumbnail={thumbnail}
                    techStack={techStack}
                    link={link}
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

export default ProjectDone;
