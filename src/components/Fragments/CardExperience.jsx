import { BiRightArrow } from "react-icons/bi";

const CardExperience = (props) => {
  const { job, company, time, summary, image } = props;
  return (
    <div
      className={`p-8 shadow-lg rounded-xl w-full md:w-3/4 flex-col flex border-2 bg-white border-tertiary border-b-white gap-2 relative z-0 hover:scale-105 transition duration-200`}
    >
      <p className="text-2xl font-bold max-w-max">{job}</p>
      <p className="text-xl  max-w-max">📌 {company}</p>
      <p className="text-quaternary flex items-center gap-2  max-w-max">
        📅 {time}
      </p>
      <ul className="flex flex-col gap-2 mt-4">
        {summary.map((item, index) => (
          <li key={index} className="flex items-center justify-start gap-2">
            <BiRightArrow className="text-secondary w-[5%]" height={20} />{" "}
            <span className="w-[95%]">{item}</span>
          </li>
        ))}
      </ul>
      <div className="max-md:hidden absolute -top-6 -right-4 flex justify-end overflow-hidden">
        <img
          src={image}
          alt="experience"
          className="w-1/2 p-2 rounded-lg bg-gradient-to-b from-tertiary from-10% to-white to-90% shadow-md"
        />
      </div>
    </div>
  );
};

export default CardExperience;
