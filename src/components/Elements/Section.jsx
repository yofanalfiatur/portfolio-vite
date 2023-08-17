const Section = (props) => {
  const { children, id } = props;
  return (
    <section className="section py-12 md:py-16 lg:py-20" id={id}>
      <div className="container mx-auto">{children}</div>
    </section>
  );
};

export default Section;
