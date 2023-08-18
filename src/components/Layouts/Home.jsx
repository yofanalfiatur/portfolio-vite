import { useState, useEffect } from "react";
import { identity } from "../../constants/data";
import Section from "../Elements/Section";
import { LuArrowBigDownDash } from "react-icons/lu";

const Home = () => {
  const { name, position, region, description, profile, cv } = identity;
  const [isMdScreen, setIsMdScreen] = useState(false);
  useEffect(() => {
    // Mendeteksi ukuran layar saat komponen dimuat
    const handleResize = () => {
      setIsMdScreen(window.innerWidth > 767);
    };
    // Tambahkan event listener saat komponen dimuat
    window.addEventListener("resize", handleResize);
    handleResize(); // Panggil fungsi handleResize agar state awal diatur sesuai ukuran layar saat komponen dimuat

    // Hapus event listener saat komponen dibongkar
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <Section id="home">
      <div className="flex flex-wrap max-w-full justify-center md:items-center gap-y-8">
        <div className="md:w-1/2 flex flex-col gap-3">
          <p className="text-primary">Hello I'am 👋</p>
          <h1 className="bg-gradient-to-r from-primary from-10% to-secondary to-80% bg-clip-text text-transparent text-6xl font-bold w-max">
            {name}
          </h1>
          <p className="text-primary font-bold text-3xl">{position}</p>
          <p className="text-primary mb-10">{description}</p>

          <div className="flex gap-8 items-center">
            <a
              href={cv}
              target="_blank"
              className="w-max text-white rounded-xl p-4 bg-primary hover:ring-2 hover:ring-secondary hover:bg-transparent transition duration-200 hover:text-secondary"
            >
              Here is My CV 📃
            </a>

            <a
              href="#contact"
              className="w-fit text-primary font-bold animate-bounce flex items-center gap-2"
            >
              Let's Talk <LuArrowBigDownDash className="" />
            </a>
          </div>
        </div>
        <div className="md:w-1/2 relative flex justify-center overflow-hidden">
          <img
            src={isMdScreen ? profile[0] : profile[1]}
            alt="Profil Yofan"
            className="mx-auto"
            width={300}
          />
          <span className="absolute top-0 -z-10">
            <svg
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full "
            >
              <path
                fill="#FCA311"
                d="M62.9,-62C78.9,-47,87.3,-23.5,85,-2.3C82.7,18.8,69.6,37.7,53.7,51.7C37.7,65.6,18.8,74.7,-1.1,75.8C-21,76.9,-42,70,-58.2,56C-74.3,42,-85.6,21,-86.1,-0.5C-86.6,-22,-76.3,-44,-60.1,-59C-44,-74,-22,-82.1,0.8,-82.9C23.5,-83.6,47,-77,62.9,-62Z"
                transform="translate(100 100)"
              />
            </svg>
            <svg
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full scale-125 -mt-24 -z-20"
            >
              <path
                fill="#14213D"
                d="M62.9,-62C78.9,-47,87.3,-23.5,85,-2.3C82.7,18.8,69.6,37.7,53.7,51.7C37.7,65.6,18.8,74.7,-1.1,75.8C-21,76.9,-42,70,-58.2,56C-74.3,42,-85.6,21,-86.1,-0.5C-86.6,-22,-76.3,-44,-60.1,-59C-44,-74,-22,-82.1,0.8,-82.9C23.5,-83.6,47,-77,62.9,-62Z"
                transform="translate(100 100)"
              />
            </svg>
          </span>
        </div>
      </div>
    </Section>
  );
};

export default Home;
