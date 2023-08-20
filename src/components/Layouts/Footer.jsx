import { identity, linkMenu, sosmed } from "../../constants/data";
import Section from "../Elements/Section";

const Footer = () => {
  const { name } = identity;
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };
  return (
    <>
      <footer>
        <Section id="footer" className="md:bg-primary">
          <div className="w-full flex flex-wrap max-md:hidden">
            {/* Footer Left */}
            <div className="w-full md:w-2/3 flex flex-col gap-4">
              <h3 className="text-white text-2xl font-semibold">{name} 👋</h3>
              <div className="flex gap-4">
                {sosmed.map(({ LogoSosmed, link }, index) => (
                  <a href={link} key={index} target="_blank">
                    <LogoSosmed className="w-8 h-8 text-secondary" />
                  </a>
                ))}
              </div>
              <p className="text-white">
                © {getCurrentYear()} {name}
              </p>
            </div>
            {/* Footer Right */}
            <div className="w-full md:w-1/3 ">
              <p className="text-white text-2xl font-semibold mb-4">Menu </p>
              <ul className="grid grid-cols-2 text-white gap-1">
                {linkMenu.map(({ title, href }, index) => (
                  <li key={index}>
                    <a
                      href={href}
                      className="max-w-max hover:text-secondary transition duration-200"
                    >
                      {title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex gap-4 fixed bottom-8 left-1/2 -translate-x-1/2   md:hidden bg-white p-4 rounded-lg shadow-md z-30">
            {sosmed.map(({ LogoSosmed, link }, index) => (
              <a href={link} key={index} target="_blank">
                <LogoSosmed className="w-8 h-8 text-secondary" />
              </a>
            ))}
          </div>
        </Section>
      </footer>
    </>
  );
};

export default Footer;
