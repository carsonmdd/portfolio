"use client";

import ProjectCard from "../ProjectCard";
import InstaLogImg from "../../../public/InstaLog-thumbnail.png";
import ZotMusicImg from "../../../public/ZotMusic-thumbnail.png";
import FlowerClassifierImg from "../../../public/flower-classifier-thumbnail.png";
import HeartDiseaseImg from "../../../public/heart-disease-thumbnail.jpeg";
import MazeSolverImg from "../../../public/maze-solver-thumbnail.png";
import SnakeGameImg from "../../../public/snake-game-thumbnail.png";
import ProductStoreImg from "../../../public/product-store-thumbnail.png";
import { useInView } from "react-intersection-observer";

const ProjectsSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const projects = [
    {
      id: 1,
      thumbnail: InstaLogImg,
      name: "InstaLog",
      description:
        "Offline data logging application with CSV and Shapefile integration built with Tkinter and Pandas",
      link: "https://github.com/carsonmdd/InstaLog",
    },
    {
      id: 2,
      thumbnail: ProductStoreImg,
      name: "Product Store",
      description:
        "Full-stack general product store application built leveraging the MERN stack (MongoDB, Express.js, React, Node.js)",
      link: "https://github.com/carsonmdd/product-store",
    },
    {
      id: 3,
      thumbnail: FlowerClassifierImg,
      name: "Flower Classifier",
      description:
        "Convolutional neural network for flower speceis identification built with Keras, Scikit-Learn, and Pandas",
      link: "https://github.com/carsonmdd/Flower-Classification",
    },
    {
      id: 4,
      thumbnail: ZotMusicImg,
      name: "Zot Music",
      description:
        "Full-stack Spotify library management and recommendation application built with Flask, Bootstrap, and SQLite",
      link: "https://github.com/carsonmdd/Zot-Music",
    },
    {
      id: 5,
      thumbnail: HeartDiseaseImg,
      name: "Heart Disease Predictor",
      description:
        "Heart disease prediction model with data visualization, preprocessing, and grid search built with Scikit-Learn, Pandas, and Seaborn",
      link: "https://github.com/carsonmdd/Heart-Disease-Predictor",
    },
    {
      id: 6,
      thumbnail: SnakeGameImg,
      name: "Snake Game",
      description:
        "Classic snake game developed with Pygame, featuring dynamic gameplay, a score-tracking system, and powerups",
      link: "https://github.com/carsonmdd/Snake-Game",
    },
    {
      id: 7,
      thumbnail: MazeSolverImg,
      name: "Maze Solver",
      description:
        "Maze generator and solver utilizing BFS and DFS algorithms built in Java",
      link: "https://github.com/carsonmdd/Maze-Solver",
    },
  ];

  return (
    <section id="projects" className="pt-32 px-8">
      <h1
        ref={ref}
        className={`text-center text-5xl font-semibold mb-20 invisible ${
          inView ? "slide-in-top-animation" : ""
        }`}
      >
        Projects
      </h1>
      <div className="grid grid-cols-1 gap-16 place-items-center px-15 min-[1010px]:grid-cols-2 min-[1010px]:max-w-5xl min-[1500px]:grid-cols-3 min-[1500px]:max-w-[90rem] mx-auto">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            thumbnail={project.thumbnail}
            name={project.name}
            description={project.description}
            link={project.link}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
