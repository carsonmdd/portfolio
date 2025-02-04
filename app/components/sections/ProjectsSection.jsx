'use client';

import ProjectCard from '../ProjectCard';
import { useInView } from 'react-intersection-observer';

const ProjectsSection = () => {
	const { ref, inView } = useInView({
		triggerOnce: true,
		threshold: 0.25,
	});

	const projects = [
		{
			id: 1,
			thumbnail: '/images/dionysus-thumbnail.png',
			alt: 'Screenshot of Dionysus dashboard',
			name: 'Dionysus',
			description:
				'AI GitHub assitant web app built with Next.js, Google Gemini, AssemblyAI, and Stripe',
			repoLink: 'https://github.com/carsonmdd/dionysus',
			demoLink: 'https://dionysus-kappa.vercel.app/',
		},
		{
			id: 2,
			thumbnail: '/images/InstaLog-thumbnail.png',
			alt: 'Screenshot of InstaLog interface',
			name: 'InstaLog',
			description:
				'Offline data logging application with CSV, GPS, and Shapefile integration built with Tkinter and Pandas',
			repoLink: 'https://github.com/carsonmdd/InstaLog',
		},
		{
			id: 3,
			thumbnail: '/images/shelterfy-thumbnail.png',
			alt: 'Screenshot of Shelterfy Find Shelter page',
			name: 'Shelterfy',
			description:
				'Wildfire and shelter locator web app built with Next.js and Tailwind CSS',
			repoLink: 'https://github.com/carsonmdd/shelterfy',
			devpostLink: 'https://devpost.com/software/shelterfy',
		},
		{
			id: 4,
			thumbnail: '/images/product-store-thumbnail.png',
			alt: 'Screenshot of Product Store home page',
			name: 'Product Store',
			description:
				'Full-stack general product store application built leveraging the MERN stack (MongoDB, Express.js, React, Node.js)',
			repoLink: 'https://github.com/carsonmdd/product-store',
		},
		{
			id: 5,
			thumbnail: '/images/flower-classifier-thumbnail.png',
			alt: 'Screenshot showing different flower species',
			name: 'Flower Classifier',
			description:
				'Convolutional neural network for flower species identification built with Keras, Scikit-Learn, and Pandas',
			repoLink: 'https://github.com/carsonmdd/Flower-Classification',
		},
		{
			id: 6,
			thumbnail: '/images/ZotMusic-thumbnail.png',
			alt: 'Screenshot of Zot Music merge page',
			name: 'Zot Music',
			description:
				'Full-stack Spotify library management and recommendation application built with Flask, Bootstrap, and SQLite',
			repoLink: 'https://github.com/carsonmdd/Zot-Music',
		},
		{
			id: 7,
			thumbnail: '/images/heart-disease-thumbnail.jpeg',
			alt: 'Illustration of a glowing anatomical heart to represent heart disease',
			name: 'Heart Disease Predictor',
			description:
				'Heart disease prediction model with data visualization, preprocessing, and grid search built with Scikit-Learn, Pandas, and Seaborn',
			repoLink: 'https://github.com/carsonmdd/Heart-Disease-Predictor',
		},
		{
			id: 8,
			thumbnail: '/images/snake-game-thumbnail.png',
			alt: 'Screenshot of Snake Game interface',
			name: 'Snake Game',
			description:
				'Classic snake game developed with Pygame, featuring dynamic gameplay, a score-tracking system, and powerups',
			repoLink: 'https://github.com/carsonmdd/Snake-Game',
		},
		{
			id: 9,
			thumbnail: '/images/maze-solver-thumbnail.png',
			alt: 'Screenshot of Maze Solver output showing an unsolved and solved maze',
			name: 'Maze Solver',
			description:
				'Maze generator and solver utilizing BFS and DFS algorithms built in Java',
			repoLink: 'https://github.com/carsonmdd/Maze-Solver',
		},
	];

	return (
		<section id='projects' className='pt-32 px-14'>
			<h1
				ref={ref}
				className={`text-center text-5xl font-semibold mb-20 opacity-0 ${
					inView && 'animate-slide-top'
				}`}
			>
				{'Projects'}
			</h1>
			<div className='grid grid-cols-1 gap-16 place-items-center px-15 min-[1010px]:grid-cols-2 min-[1010px]:max-w-5xl min-[1500px]:grid-cols-3 min-[1500px]:max-w-[90rem] mx-auto'>
				{projects.map((project) => (
					<ProjectCard
						key={project.id}
						thumbnail={project.thumbnail}
						alt={project.alt}
						name={project.name}
						description={project.description}
						repoLink={project.repoLink}
						demoLink={project.demoLink}
						devpostLink={project.devpostLink}
					/>
				))}
			</div>
		</section>
	);
};

export default ProjectsSection;
