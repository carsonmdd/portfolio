const Navbar = () => {
	return (
		<nav className='sticky top-0 z-50 bg-[#2e405aa0] backdrop-blur-md px-4 md:px-16 py-4 shadow-md border-b border-white/10'>
			<ul className='flex flex-wrap justify-center md:justify-end items-center gap-4 sm:gap-8 md:gap-12 text-xl font-medium'>
				{["home", "about", "projects", "contact"].map((section) => (
					<li key={section}>
						<a
							href={`#${section}`}
							className='relative text-white transition-all duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-emerald-400 hover:after:w-full after:transition-all after:duration-300'
						>
							{section.charAt(0).toUpperCase() + section.slice(1)}
						</a>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default Navbar;
