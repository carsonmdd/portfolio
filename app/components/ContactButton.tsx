type Props = {
	link: string;
	icon: React.ReactNode;
	title: string;
	classes: string;
};

const ContactButton = ({ link, icon, title, classes }: Props) => {
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
