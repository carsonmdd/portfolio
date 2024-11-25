const Navbar = () => {
  return (
    <nav className="sticky top-0">
      <ul className="flex gap-4 justify-between text-lg py-6 px-5 bg-slate-700">
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
