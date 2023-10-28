const TitleSection = (props) => {
  const { children } = props;
  return (
    <>
      <h3
        className="text-5xl font-bold text-primary self-center text-center mb-8 bg-gradient-to-t from-tertiary to-secondary from-5% to-95% bg-clip-text text-transparent "
        data-aos="zoom-in"
        data-aos-delay="100"
      >
        {children}
      </h3>
    </>
  );
};

export default TitleSection;
