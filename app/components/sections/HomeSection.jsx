"use client";

import { HiOutlineArrowSmallDown } from "react-icons/hi2";
import { useInView } from "react-intersection-observer";

const HomeSection = () => {
	const { ref, inView } = useInView({
		triggerOnce: true,
		threshold: 0.25,
	});

	return (
		<section
			id="home"
			className="w-full h-screen flex flex-col items-center justify-center text-center pt-6 px-6"
		>
			<h1
				ref={ref}
				className={`text-5xl mb-5 font-light opacity-0 ${
					inView && "animate-slide-left"
				}`}
			>
				{"Hi, I'm "}
				<span className="text-emerald-500">{"Carson"}</span>.
			</h1>
			<p
				ref={ref}
				className={`text-3xl mb-16 max-w-2xl font-extralight opacity-0 ${
					inView && "animate-slide-right"
				}`}
			>
				{
					"I'm passionate about full-stack web development and artifical intelligence."
				}
			</p>
			<a
				href="#about"
				ref={ref}
				className={`flex p-3 text-xl rounded-xl border-2 border-emerald-500 font-light hover:shadow-[inset_12rem_0_0_0] hover:shadow-emerald-600 hover:border-emerald-500 transition-[box-shadow, border-color] duration-[300ms,300ms] opacity-0 ${
					inView && "animate-slide-bottom animation-delay-300"
				}`}
			>
				<span className="mr-2">{"View my work"}</span>
				<HiOutlineArrowSmallDown className="my-auto" />
			</a>
		</section>
	);
};

export default HomeSection;
