import ReactPNG from "../../../public/react.png";
import MongoDBPNG from "../../../public/mongodb.png";
import ExpressPNG from "../../../public/express.png";
import TensorflowPNG from "../../../public/tensorflow.png";
import NodePNG from "../../../public/node.png";
import ScikitLearnPNG from "../../../public/scikit-learn.png";
import JavaPNG from "../../../public/Java.png";
import CppPNG from "../../../public/c++.png";
import GitPNG from "../../../public/git.png";
import FlaskPNG from "../../../public/flask.png";
import TailwindPNG from "../../../public/tailwind.png";
import PandasPNG from "../../../public/pandas.png";
import SkillCard from "../SkillCard";

const AboutSection = () => {
  const skills = [
    { id: 1, icon: ReactPNG, name: "React" },
    { id: 2, icon: MongoDBPNG, name: "MongoDB" },
    { id: 3, icon: ExpressPNG, name: "Express.js" },
    { id: 4, icon: TensorflowPNG, name: "Tensorflow" },
    { id: 5, icon: NodePNG, name: "Node.js" },
    { id: 6, icon: ScikitLearnPNG, name: "Scikit-Learn" },
    { id: 7, icon: JavaPNG, name: "Java" },
    { id: 8, icon: CppPNG, name: "C++" },
    { id: 9, icon: GitPNG, name: "Git" },
    { id: 10, icon: FlaskPNG, name: "Flask" },
    { id: 11, icon: TailwindPNG, name: "Tailwind CSS" },
    { id: 12, icon: PandasPNG, name: "Pandas" },
  ];

  return (
    <section id="about" className="pt-32">
      <h1 className="text-center text-4xl font-semibold mb-20">About</h1>
      <div className="flex flex-col items-center lg:flex lg:flex-row lg:items-start lg:justify-center lg:gap-14">
        <div className="px-5 mb-10 md:max-w-lg">
          <h2 className="font-medium mb-2 text-2xl">Carson Davis</h2>
          <p className="leading-7 text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, ab
            exercitationem possimus sequi, quos ipsam rem sed molestias laborum
            eum quis voluptatibus reprehenderit, et voluptatum numquam
            necessitatibus nesciunt cumque ratione.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-5 place-items-center px-10 w-[35rem] md:gap-10">
          {skills.map((skill) => (
            <SkillCard key={skill.id} icon={skill.icon} name={skill.name} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
