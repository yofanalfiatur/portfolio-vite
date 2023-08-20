const ButtonPrimary = (props) => {
  const { href, target, children } = props;
  return (
    <a href={href} target={target} className="w-max">
      <button className="py-3 px-4 text-white rounded-lg bg-primary ring-2 ring-primary hover:ring-secondary hover:bg-transparent transition duration-200 hover:text-secondary flex items-center">
        {children}
      </button>
    </a>
  );
};

export default ButtonPrimary;
