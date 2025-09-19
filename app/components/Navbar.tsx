const Navbar = () => {
	return (
		<nav className='sticky top-0 z-50 flex justify-center px-4 py-3 md:px-16'>
			<ul className='flex items-center gap-5 sm:gap-6 md:gap-8 rounded-full bg-[#2e405aa0] backdrop-blur-sm px-8 py-3 shadow-lg border border-white/10'>
				{["home", "about", "projects", "contact"].map((section) => (
					<li key={section}>
						<a
							href={`#${section}`}
							className='relative text-white text-lg font-medium transition-all duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-emerald-400 hover:after:w-full after:transition-all after:duration-300'
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
