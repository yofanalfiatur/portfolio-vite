const ButtonSecondary = (props) => {
  const { href, target, children } = props;
  return (
    <a href={href} target={target} className="w-max">
      <button className="py-3 px-4 text-secondary rounded-lg  ring-2 ring-secondary transition duration-200 hover:bg-secondary hover:text-white flex items-center gap-2">
        {children}
      </button>
    </a>
  );
};

export default ButtonSecondary;
