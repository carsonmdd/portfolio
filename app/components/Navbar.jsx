const Navbar = () => {
  return (
    <nav className="sticky top-0 bg-slate-600 py-6 px-5 md:px-16 shadow-xl z-50">
      <ul className="px-6 flex justify-center gap-6 text-xl font-medium md:justify-end md:gap-10 lg:gap-20">
        <li>
          <a
            href="#home"
            className="cursor-pointer hover:text-emerald-500 transition-all duration-300"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#about"
            className="cursor-pointer hover:text-emerald-500 transition-all duration-300"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#projects"
            className="cursor-pointer hover:text-emerald-500 transition-all duration-300"
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className="cursor-pointer hover:text-emerald-500 transition-all duration-300"
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
