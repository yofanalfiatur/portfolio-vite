import { identity } from "../../constants/data";

const Footer = () => {
  const { name } = identity;
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };
  return (
    <>
      <footer>
        <div>
          <h2>
            © {getCurrentYear()} {name}
          </h2>
        </div>
      </footer>
    </>
  );
};

export default Footer;
