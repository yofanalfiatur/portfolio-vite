// SliderComponent.js
import { useEffect } from "react";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";

const SliderProjectDone = ({ items }) => {
  useEffect(() => {
    // Initialize Splide on component mount
    new Splide(".splide", {
      type: "carousel",
      perPage: 1,
      focus: "center",
      pagination: false,
      breakpoints: {
        600: {
          perPage: 2,
        },
        800: {
          perPage: 3,
        },
      },
    }).mount();
  }, []);

  return (
    <Splide
      className="splide"
      options={{
        type: "carousel",
        perPage: 1,
        focus: "center",
        pagination: false,
        breakpoints: {
          600: {
            perPage: 2,
          },
          800: {
            perPage: 3,
          },
        },
      }}
    >
      {items.map((item, index) => (
        <SplideSlide key={index}>
          <img src={item.imageUrl} alt={`Slide ${index + 1}`} />
        </SplideSlide>
      ))}
    </Splide>
  );
};

export default SliderProjectDone;
