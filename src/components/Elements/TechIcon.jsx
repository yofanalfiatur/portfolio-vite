const TechIcon = (props) => {
  const { title, level, icon } = props;
  return (
    <>
      <div className="flex w-full flex-col p-3 bg-white rounded-md items-center text-center gap-4 hover:shadow-md justify-center">
        <img
          src={icon}
          alt="skill icon"
          typeof="svg"
          className="text-xl w-[35px] h-[35px]"
        />
        <div className="flex flex-col justify-center">
          <p className="font-semibold">{title}</p>
          <p className="text-quaternary">{level}</p>
        </div>
      </div>
    </>
  );
};

export default TechIcon;
