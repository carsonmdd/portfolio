const ContactButton = ({ link, icon, title, classes }) => {
	return (
		<a
			href={link}
			target='_blank'
			title={title}
			className={`hover:scale-110 transition-all duration-300 ${classes}`}
		>
			{icon}
		</a>
	);
};

export default ContactButton;
