import ReactSVG from "../../../public/react.png";
import MongoDBSVG from "../../../public/mongodb.png";
import ExpressSVG from "../../../public/express.png";
import TensorflowSVG from "../../../public/tensorflow.png";
import NodeSVG from "../../../public/node.png";
import ScikitLearnSVG from "../../../public/scikit-learn.png";
import SkillCard from "../SkillCard";

const AboutSection = () => {
  const skills = [
    { id: 1, icon: ReactSVG, name: "React" },
    { id: 2, icon: MongoDBSVG, name: "MongoDB" },
    { id: 3, icon: ExpressSVG, name: "Express.js" },
    { id: 4, icon: TensorflowSVG, name: "Tensorflow" },
    { id: 5, icon: NodeSVG, name: "Node.js" },
    { id: 6, icon: ScikitLearnSVG, name: "Scikit-learn" },
  ];

  return (
    <section id="about" className="pt-32">
      <h1 className="text-center text-4xl font-semibold mb-20">About</h1>
      <div className="md:flex md:justify-center lg:gap-14">
        <div className="px-5 mb-10 md:max-w-lg">
          <h2 className="font-medium mb-2 text-2xl">Carson Davis</h2>
          <p className="leading-7 text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, ab
            exercitationem possimus sequi, quos ipsam rem sed molestias laborum
            eum quis voluptatibus reprehenderit, et voluptatum numquam
            necessitatibus nesciunt cumque ratione.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-5 place-items-center px-10 md:grid-cols-2 md:gap-10 lg:grid-cols-3">
          {skills.map((skill) => (
            <SkillCard key={skill.id} icon={skill.icon} name={skill.name} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
