const ContactButton = ({ link, icon, title }) => {
	return (
		<a
			href={link}
			target="_blank"
			title={title}
			className="hover:scale-110 transition-all duration-300"
		>
			{icon}
		</a>
	);
};

export default ContactButton;
