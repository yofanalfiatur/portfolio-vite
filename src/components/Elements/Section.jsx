const Section = (props) => {
  const { children } = props;
  return (
    <section className="section py-12 md:py-16 lg:py-20">
      <div className="container mx-auto">{children}</div>
    </section>
  );
};

export default Section;
