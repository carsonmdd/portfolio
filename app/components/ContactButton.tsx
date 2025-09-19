import { forwardRef } from "react";

type Props = {
	link: string;
	icon: React.ReactNode;
	title: string;
	classes: string;
};

const ContactButton = forwardRef<HTMLAnchorElement, Props>(
	({ link, icon, title, classes }, ref) => {
		return (
			<a
				href={link}
				target='_blank'
				title={title}
				className={`hover:scale-110 transition-all duration-300 ${classes}`}
				ref={ref}
			>
				{icon}
			</a>
		);
	}
);

ContactButton.displayName = "ContactButton";

export default ContactButton;
