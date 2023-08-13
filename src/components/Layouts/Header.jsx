export const Header = () => {
  return (
    <header>
      <nav className="w-screen flex justify-between p-8">
        <div className="text-primary">
          <h1>Yofan Alfiatur</h1>
        </div>
        <div className="">
          <ul className="flex gap-8">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
        <div className="">
          <a href="#">☀️</a>
        </div>
      </nav>
    </header>
  );
};
