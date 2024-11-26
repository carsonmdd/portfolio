import ProjectCard from "../ProjectCard";
import InstaLogImg from "../../../public/InstaLog-thumbnail.png";
import ZotMusicImg from "../../../public/ZotMusic-thumbnail.png";
import FlowerClassifierImg from "../../../public/flower-classifier-thumbnail.png";
import HeartDiseaseImg from "../../../public/heart-disease-thumbnail.jpeg";
import MazeSolverImg from "../../../public/maze-solver-thumbnail.png";
import SnakeGameImg from "../../../public/snake-game-thumbnail.png";

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      thumbnail: InstaLogImg,
      name: "InstaLog",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit voluptate architecto minus pariatur quaerat reiciendis.",
      link: "https://github.com/carsonmdd/InstaLog",
    },
    {
      id: 2,
      thumbnail: ZotMusicImg,
      name: "Zot Music",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit voluptate architecto minus pariatur quaerat reiciendis.",
      link: "https://github.com/carsonmdd/Zot-Music",
    },
    {
      id: 3,
      thumbnail: FlowerClassifierImg,
      name: "Flower Classifier",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit voluptate architecto minus pariatur quaerat reiciendis.",
      link: "https://github.com/carsonmdd/Flower-Classification",
    },
    {
      id: 4,
      thumbnail: HeartDiseaseImg,
      name: "Heart Disease Predictor",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit voluptate architecto minus pariatur quaerat reiciendis.",
      link: "https://github.com/carsonmdd/Heart-Disease-Predictor",
    },
    {
      id: 5,
      thumbnail: MazeSolverImg,
      name: "Maze Solver",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit voluptate architecto minus pariatur quaerat reiciendis.",
      link: "https://github.com/carsonmdd/Maze-Solver",
    },
    {
      id: 6,
      thumbnail: SnakeGameImg,
      name: "Snake Game",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit voluptate architecto minus pariatur quaerat reiciendis.",
      link: "https://github.com/carsonmdd/Snake-Game",
    },
  ];

  return (
    <section id="projects" className="pt-32">
      <h1 className="text-center text-4xl font-semibold mb-20">Projects</h1>
      <div className="grid grid-cols-1 gap-16 place-items-center px-10 min-[840px]:grid-cols-2 min-[840px]:max-w-4xl xl:grid-cols-3 xl:max-w-[90rem] mx-auto">
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
