import { AiFillGithub } from "react-icons/ai";
import { SiDevpost } from "react-icons/si";
import { FiExternalLink } from "react-icons/fi";
import { useInView } from "react-intersection-observer";

const ProjectCard = ({
	thumbnail,
	alt,
	name,
	description,
	repoLink,
	demoLink,
	devpostLink,
}) => {
	const { ref, inView } = useInView({
		triggerOnce: true,
		threshold: 0.15,
	});

	return (
		<div
			ref={ref}
			className={`border border-emerald-500 rounded-xl w-[22rem] h-[30rem] sm:w-[448px] sm:h-[480px] bg-[#2e405a] shadow-2xl  hover:scale-[1.03] transition-all duration-300 opacity-0 ${
				inView && `animate-slide-bottom`
			}`}
		>
			<div className='h-[15rem] flex justify-center p-5'>
				<img src={thumbnail} alt={alt} className='object-contain' />
			</div>
			<div className='px-5'>
				<div className='h-[10rem]'>
					<h2 className='text-2xl font-semibold mb-3'>{name}</h2>
					<p className='text-gray-300 leading-7 mb-8'>
						{description}
					</p>
				</div>
				<a
					href={repoLink}
					target='_blank'
					className='inline-flex items-center justify-center gap-2 px-3 py-2 rounded-xl border-2 border-emerald-500 text-emerald-500 font-medium cursor-pointer hover:bg-emerald-500 hover:text-white hover:border-emerald-700 transition-all duration-300'
				>
					<AiFillGithub className='text-[1.4rem]' />
					<span>GitHub</span>
				</a>
				{demoLink && (
					<a
						href={demoLink}
						target='_blank'
						className='inline-flex items-center justify-center gap-2 px-3 py-2 ml-3 rounded-xl border-2 border-emerald-500 text-emerald-500 font-medium cursor-pointer hover:bg-emerald-500 hover:text-white hover:border-emerald-700 transition-all duration-300'
					>
						<FiExternalLink className='text-[1.4rem]' />
						<span>Live Demo</span>
					</a>
				)}
				{devpostLink && (
					<a
						href={devpostLink}
						target='_blank'
						className='inline-flex items-center justify-center gap-2 px-3 py-2 ml-3 rounded-xl border-2 border-emerald-500 text-emerald-500 font-medium cursor-pointer hover:bg-emerald-500 hover:text-white hover:border-emerald-700 transition-all duration-300'
					>
						<SiDevpost className='text-[1.4rem]' />
						<span>Devpost</span>
					</a>
				)}
			</div>
		</div>
	);
};

export default ProjectCard;
