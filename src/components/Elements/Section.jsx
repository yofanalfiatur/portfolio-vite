const Section = (props) => {
  const { children } = props;
  return (
    <section className="section py-20">
      <div className="xl:container mx-auto">{children}</div>
    </section>
  );
};

export default Section;
