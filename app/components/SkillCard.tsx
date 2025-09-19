import React from "react";
import { useInView } from "react-intersection-observer";

type Props = {
	image: string;
	name: string;
	delays: Map<number, string>;
	animationDelay: number;
};

const SkillCard = ({ image, name, delays, animationDelay }: Props) => {
	const { ref, inView } = useInView({
		triggerOnce: true,
		threshold: 0.25,
	});

	return (
		<div
			ref={ref}
			className={`border border-emerald-500 text-center font-medium flex flex-col items-center justify-center rounded-xl p-3 w-[6.5rem] h-36 hover:-translate-y-2 transition-all duration-300 opacity-0 ${
				inView && `animate-fade-in ${delays[animationDelay]}`
			}`}
		>
			<img
				src={image}
				alt={`${name} icon`}
				width='60'
				height='60'
				className='mb-3'
			/>
			<h3>{name}</h3>
		</div>
	);
};

export default SkillCard;
