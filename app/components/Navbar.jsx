const Navbar = () => {
  return (
    <nav className="sticky top-0 bg-slate-700 py-6 px-5 md:px-16">
      <ul className="flex gap-8 justify-center text-xl font-medium md:justify-end md:gap-10 lg:gap-20">
        <li>
          <a href="#home" className="cursor-pointer">
            Home
          </a>
        </li>
        <li>
          <a href="#about" className="cursor-pointer">
            About
          </a>
        </li>
        <li>
          <a href="#projects" className="cursor-pointer">
            Projects
          </a>
        </li>
        <li>
          <a href="#contact" className="cursor-pointer">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
