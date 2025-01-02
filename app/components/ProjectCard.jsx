import Image from "next/image";
import { useInView } from "react-intersection-observer";

const ProjectCard = ({ thumbnail, name, description, repoLink, demoLink }) => {
	const { ref, inView } = useInView({
		triggerOnce: true,
		threshold: 0.15,
	});

	return (
		<div
			ref={ref}
			className={`border border-emerald-500 rounded-xl w-[22rem] h-[30rem] sm:w-[448px] sm:h-[480px] bg-slate-700 shadow-2xl hover:-translate-y-2 transition-all duration-300 opacity-0 ${
				inView && `animate-slide-bottom`
			}`}
		>
			<div className="h-[15rem] flex justify-center p-5">
				<Image
					src={thumbnail}
					alt={`${name} Thumbnail`}
					className="object-contain"
				/>
			</div>
			<div className="px-5">
				<div className="h-[10rem]">
					<h3 className="text-xl mb-2">{name}</h3>
					<p className="leading-7 mb-8">{description}</p>
				</div>
				<a
					href={repoLink}
					target="_blank"
					className="p-3 rounded-xl border-2 border-emerald-500 font-light cursor-pointer hover:bg-emerald-500 hover:border-emerald-700 transition-all duration-300"
				>
					<span>GitHub Repo</span>
				</a>
				{demoLink && (
					<a
						href={demoLink}
						target="_blank"
						className="p-3 ml-3 rounded-xl border-2 border-emerald-500 font-light cursor-pointer hover:bg-emerald-500 hover:border-emerald-700 transition-all duration-300"
					>
						<span>Live Demo</span>
					</a>
				)}
			</div>
		</div>
	);
};

export default ProjectCard;
