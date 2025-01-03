"use client";

import SkillCard from "../SkillCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { useInView } from "react-intersection-observer";

const AboutSection = () => {
	const { ref, inView } = useInView({
		triggerOnce: true,
		threshold: 0.1,
	});

	const skills = [
		{ id: 1, image: "/images/react.png", name: "React" },
		{ id: 2, image: "/images/mongodb.png", name: "MongoDB" },
		{ id: 3, image: "/images/express.png", name: "Express.js" },
		{ id: 4, image: "/images/node.png", name: "Node.js" },
		{ id: 5, image: "/images/flask.png", name: "Flask" },
		{ id: 6, image: "/images/postgresql.png", name: "PostgreSQL" },
		{ id: 7, image: "/images/nextjs.png", name: "Next.js" },
		{ id: 8, image: "/images/trpc.png", name: "tRPC" },
		{ id: 9, image: "/images/shadcn.png", name: "ShadCN" },
		{ id: 10, image: "/images/tailwind.png", name: "Tailwind CSS" },
		{ id: 11, image: "/images/scikit-learn.png", name: "Scikit-Learn" },
		{ id: 12, image: "/images/tensorflow.png", name: "Tensorflow" },
		{ id: 13, image: "/images/pandas.png", name: "Pandas" },
		{ id: 14, image: "/images/git.png", name: "Git" },
		{ id: 15, image: "/images/java.png", name: "Java" },
		{ id: 16, image: "/images/c++.png", name: "C++" },
	];

	const delays = {
		50: "animation-delay-[50ms]",
		100: "animation-delay-[100ms]",
		150: "animation-delay-[150ms]",
		200: "animation-delay-[200ms]",
		250: "animation-delay-[250ms]",
		300: "animation-delay-[300ms]",
		350: "animation-delay-[350ms]",
		400: "animation-delay-[400ms]",
		450: "animation-delay-[450ms]",
		500: "animation-delay-[500ms]",
		550: "animation-delay-[550ms]",
		600: "animation-delay-[600ms]",
		650: "animation-delay-[650ms]",
		700: "animation-delay-[700ms]",
		750: "animation-delay-[750ms]",
		800: "animation-delay-[800ms]",
	};

	return (
		<section id="about" className="pt-32">
			<h1
				ref={ref}
				className={`text-center text-5xl font-semibold mb-20 opacity-0 ${
					inView && "animate-slide-top"
				}`}
			>
				{"About"}
			</h1>
			<div
				ref={ref}
				className="flex flex-col items-center w-full md:flex-row md:justify-center"
			>
				<div
					className={`flex flex-col justify-center p-6 max-w-[40rem] md:flex-1 opacity-0 ${
						inView && "animate-slide-left"
					}`}
				>
					<FontAwesomeIcon
						icon={faUser}
						className="text-[10rem] text-emerald-400 mb-16"
					/>
					<div>
						<h2 className="font-medium mb-2 text-3xl">
							Carson Davis
						</h2>
						<p className="leading-8 text-2xl">
							{"I'm a third year student studying "}
							<span className="text-emerald-500 font-normal">
								{"Software Engineering "}
							</span>
							{"at UC Irvine with a deep passion for "}
							<span className="text-emerald-500 font-normal">
								{"full-stack web development "}
							</span>
							{"and "}
							<span className="text-emerald-500 font-normal">
								{"artificial intelligence"}
							</span>
							{
								". With a focus on problem-solving and user-centered design, I strive to create solutions for "
							}
							<span className="text-emerald-500 font-normal">
								{"real-world problems"}
							</span>
							{
								". Outside of coding, I like to spend my time playing piano, fishing, and exploring the outdoors. I'm always eager to learn and connect with like-minded individuals and grow as a developer."
							}
						</p>
					</div>
				</div>
				<div className="grid grid-cols-3 place-items-center gap-5 w-full max-w-[25rem] p-5 md:flex-1 lg:grid-cols-4 lg:max-w-[35rem] lg:gap-10">
					{skills.map((skill, index) => (
						<SkillCard
							key={skill.id}
							image={skill.image}
							name={skill.name}
							delays={delays}
							animationDelay={index * 50}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default AboutSection;
