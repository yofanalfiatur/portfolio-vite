const TitleSection = (props) => {
  const { children } = props;
  return (
    <>
      <h2 className="text-3xl font-bold text-primary">{children}</h2>
    </>
  );
};

export default TitleSection;
