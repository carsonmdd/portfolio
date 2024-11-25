import ProjectCard from "../ProjectCard";
import InstaLogPNG from "../../../public/InstaLog-thumbnail.png";
import ZotMusicPNG from "../../../public/ZotMusic-thumbnail.png";
import FlowerClassifierPNG from "../../../public/flower-classifier-thumbnail.png";

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      thumbnail: InstaLogPNG,
      name: "InstaLog",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit voluptate architecto minus pariatur quaerat reiciendis.",
      link: "https://github.com/carsonmdd/InstaLog",
    },
    {
      id: 2,
      thumbnail: ZotMusicPNG,
      name: "Zot Music",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit voluptate architecto minus pariatur quaerat reiciendis.",
      link: "https://github.com/carsonmdd/Zot-Music",
    },
    {
      id: 3,
      thumbnail: FlowerClassifierPNG,
      name: "Flower Classifier",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit voluptate architecto minus pariatur quaerat reiciendis.",
      link: "https://github.com/carsonmdd/Flower-Classification",
    },
  ];

  return (
    <section id="projects" className="pt-32">
      <h1 className="text-center text-4xl font-semibold mb-10">Projects</h1>
      <div className="grid grid-cols-1 gap-16 place-items-center px-10">
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
