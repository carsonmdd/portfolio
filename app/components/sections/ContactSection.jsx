"use client";

import { AiOutlineMail, AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import ContactButton from "../ContactButton";
import { useInView } from "react-intersection-observer";

const ContactSection = () => {
	const { ref, inView } = useInView({
		triggerOnce: true,
		threshold: 0.1,
	});

	const contactButtons = [
		{
			id: 1,
			link: "mailto:cmd52465@gmail.com",
			icon: AiOutlineMail,
			title: "Send me an email",
		},
		{
			id: 2,
			link: "https://www.linkedin.com/in/carsonmdavis/",
			icon: AiFillLinkedin,
			title: "Connect with me on LinkedIn",
		},
		{
			id: 3,
			link: "https://github.com/carsonmdd/",
			icon: AiFillGithub,
			title: "Visit my GitHub",
		},
	];

	return (
		<section id="contact" className="px-14 pt-32 pb-20">
			<h1
				ref={ref}
				className={`text-center text-5xl font-semibold mb-6 opacity-0 ${
					inView && "animate-slide-left"
				}`}
			>
				{"Contact"}
			</h1>
			<div className="text-center">
				<p
					ref={ref}
					className={`mb-8 text-xl opacity-0 ${
						inView && "animate-slide-right"
					}`}
				>
					{"Have a question or want to work together? Let's connect!"}
				</p>
				<div
					ref={ref}
					className={`text-4xl text-emerald-500 flex justify-evenly max-w-xs mx-auto opacity-0 ${
						inView && "animate-slide-bottom"
					}`}
				>
					{contactButtons.map((button) => (
						<ContactButton
							key={button.id}
							link={button.link}
							icon={<button.icon />}
							title={button.title}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default ContactSection;
