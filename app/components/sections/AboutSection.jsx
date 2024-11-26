import ReactImg from "../../../public/react.png";
import MongoDBImg from "../../../public/mongodb.png";
import ExpressImg from "../../../public/express.png";
import TensorflowImg from "../../../public/tensorflow.png";
import NodeImg from "../../../public/node.png";
import ScikitLearnImg from "../../../public/scikit-learn.png";
import JavaImg from "../../../public/Java.png";
import CppImg from "../../../public/c++.png";
import GitImg from "../../../public/git.png";
import FlaskImg from "../../../public/flask.png";
import TailwindImg from "../../../public/tailwind.png";
import PandasImg from "../../../public/pandas.png";
import SkillCard from "../SkillCard";

const AboutSection = () => {
  const skills = [
    { id: 1, icon: ReactImg, name: "React" },
    { id: 2, icon: MongoDBImg, name: "MongoDB" },
    { id: 3, icon: ExpressImg, name: "Express.js" },
    { id: 4, icon: TensorflowImg, name: "Tensorflow" },
    { id: 5, icon: NodeImg, name: "Node.js" },
    { id: 6, icon: ScikitLearnImg, name: "Scikit-Learn" },
    { id: 7, icon: JavaImg, name: "Java" },
    { id: 8, icon: CppImg, name: "C++" },
    { id: 9, icon: GitImg, name: "Git" },
    { id: 10, icon: FlaskImg, name: "Flask" },
    { id: 11, icon: TailwindImg, name: "Tailwind CSS" },
    { id: 12, icon: PandasImg, name: "Pandas" },
  ];

  return (
    <section id="about" className="pt-32">
      <h1 className="text-center text-4xl font-semibold mb-20">About</h1>
      <div className="flex justify-center mx-15">
        <div className="flex flex-col items-center xl:flex-row xl:items-start xl:justify-center max-w-7xl">
          <div className="px-12 mb-10 md:max-w-2xl lg:flex-1">
            <h2 className="font-medium mb-2 text-2xl">Carson Davis</h2>
            <p className="leading-7 text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem,
              ab exercitationem possimus sequi, quos ipsam rem sed molestias
              laborum eum quis voluptatibus reprehenderit, et voluptatum numquam
              necessitatibus nesciunt cumque ratione.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-5 place-items-center px-10 w-[35rem] md:grid-cols-4 md:w-[40rem] md:gap-10 lg:flex-1">
            {skills.map((skill) => (
              <SkillCard key={skill.id} icon={skill.icon} name={skill.name} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
