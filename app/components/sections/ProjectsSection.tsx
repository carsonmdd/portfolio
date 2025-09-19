"use client";

import { projects } from "../../data/projectsData";
import ProjectCard from "../ProjectCard";
import { useInView } from "react-intersection-observer";

const ProjectsSection = () => {
	const { ref, inView } = useInView({
		triggerOnce: true,
		threshold: 0.25,
	});

	return (
		<section id='projects' className='pt-32 px-14'>
			<h1
				ref={ref}
				className={`text-center text-5xl font-semibold mb-20 opacity-0 ${
					inView && "animate-slide-top"
				}`}
			>
				{"Projects"}
			</h1>
			<div className='grid grid-cols-1 gap-16 place-items-center px-15 min-[1010px]:grid-cols-2 min-[1010px]:max-w-5xl min-[1500px]:grid-cols-3 min-[1500px]:max-w-[90rem] mx-auto'>
				{projects.map(
					(
						{
							thumbnail,
							alt,
							name,
							description,
							repoLink,
							demoLink,
							devpostLink,
						},
						index
					) => (
						<ProjectCard
							key={index}
							thumbnail={thumbnail}
							alt={alt}
							name={name}
							description={description}
							repoLink={repoLink}
							demoLink={demoLink}
							devpostLink={devpostLink}
						/>
					)
				)}
			</div>
		</section>
	);
};

export default ProjectsSection;
