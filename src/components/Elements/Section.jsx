const Section = (props) => {
  const { children, id, className } = props;
  return (
    <section className={`section py-12 md:py-16 lg:py-20 ${className}`} id={id}>
      <div className="container mx-auto">{children}</div>
    </section>
  );
};

export default Section;
