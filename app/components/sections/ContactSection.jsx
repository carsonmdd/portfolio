"use client";

import { contacts } from "@/app/data/contactsData";
import ContactButton from "../ContactButton";
import { useInView } from "react-intersection-observer";

const ContactSection = () => {
	const { ref, inView } = useInView({
		triggerOnce: true,
		threshold: 0.1,
	});

	const delays = [
		"animation-delay-[400ms]",
		"animation-delay-[500ms]",
		"animation-delay-[600ms]",
	];

	return (
		<section id='contact' className='px-14 pt-32 pb-20'>
			<h1
				ref={ref}
				className={`text-center text-5xl font-semibold mb-6 opacity-0 ${
					inView && "animate-slide-bottom"
				}`}
			>
				{"Contact"}
			</h1>
			<div className='text-center'>
				<p
					ref={ref}
					className={`mb-8 text-xl opacity-0 ${
						inView && "animate-slide-bottom animation-delay-150"
					}`}
				>
					{"Have a question or want to work together? Let's connect!"}
				</p>
				<div
					ref={ref}
					className={`text-4xl text-emerald-500 flex justify-evenly max-w-[17rem] mx-auto`}
				>
					{contacts.map((button, index) => (
						<ContactButton
							key={index}
							ref={ref}
							link={button.link}
							icon={<button.icon />}
							title={button.title}
							classes={`opacity-0 ${delays[index]} ${
								inView && "animate-slide-bottom"
							}`}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default ContactSection;
