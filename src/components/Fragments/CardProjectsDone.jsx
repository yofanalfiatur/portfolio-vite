import ButtonPrimary from "../Elements/ButtonPrimary";

const CardProjectsDone = (props) => {
  const { title, description, thumbnail, techStack, link } = props;
  return (
    <>
      <div className="border-2 border-opacity-50 border-secondary rounded-2xl p-4 gap-y-2 flex flex-col">
        <img
          src={thumbnail}
          alt="project-done"
          className="border-2 border-secondary border-opacity-25"
        />
        <h4 className="text-xl font-semibold h-max w-full mt-4"> {title}</h4>
        <p className="font-light text-sm min-h-[7.5rem]">{description}</p>
        <p className="text-primary font-semibold">Tech Stack :</p>
        <div className="flex gap-2 mb-4">
          {techStack.map((item, index) => (
            <img src={item} alt="" key={index} className="w-8 h-8" />
          ))}
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <ButtonPrimary href={link} target="_blank">
            Preview
          </ButtonPrimary>
        </div>
      </div>
    </>
  );
};

export default CardProjectsDone;
