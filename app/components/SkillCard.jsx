import { useInView } from "react-intersection-observer";

const SkillCard = ({ image, name, delays, animationDelay }) => {
	const { ref, inView } = useInView({
		triggerOnce: true,
		threshold: 0.25,
	});

	return (
		<div
			ref={ref}
			className={`border border-emerald-500 text-center flex flex-col items-center justify-center rounded-xl p-3 w-[6.5rem] h-36 hover:-translate-y-2 transition-all duration-300 opacity-0 ${
				inView && `animate-fade-in ${delays[animationDelay]}`
			}`}
		>
			<img
				src={image}
				alt={`${name} Image`}
				width="60"
				height="60"
				className="mb-3"
			/>
			<h3>{name}</h3>
		</div>
	);
};

export default SkillCard;
