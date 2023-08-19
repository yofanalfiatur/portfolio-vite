import { BiRightArrow } from "react-icons/bi";

const CardExperience = (props) => {
  const { job, company, time, summary } = props;
  return (
    <div
      className={`p-8 shadow-lg rounded-xl w-full md:w-3/4 flex-col flex border-2 border-tertiary border-b-white gap-2`}
    >
      <p className="text-2xl font-bold">{job}</p>
      <p className="text-xl">{company}</p>
      <p className="text-[#84817E]">{time}</p>
      <ul className="flex flex-col gap-2 mt-4 ml-2">
        {summary.map((item, index) => (
          <li key={index} className="flex items-center gap-2">
            <BiRightArrow className="text-secondary w-[5%]" height={20} />{" "}
            <span className="w-[95%]">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CardExperience;
