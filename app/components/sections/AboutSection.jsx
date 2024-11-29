"use client";

import ReactImg from "../../../public/react.png";
import MongoDBImg from "../../../public/mongodb.png";
import ExpressImg from "../../../public/express.png";
import TensorflowImg from "../../../public/tensorflow.png";
import NodeImg from "../../../public/node.png";
import ScikitLearnImg from "../../../public/scikit-learn.png";
import JavaImg from "../../../public/java.png";
import CppImg from "../../../public/c++.png";
import GitImg from "../../../public/git.png";
import FlaskImg from "../../../public/flask.png";
import TailwindImg from "../../../public/tailwind.png";
import PandasImg from "../../../public/pandas.png";
import SkillCard from "../SkillCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { useInView } from "react-intersection-observer";

const AboutSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const skills = [
    { id: 1, icon: ReactImg, name: "React" },
    { id: 2, icon: MongoDBImg, name: "MongoDB" },
    { id: 3, icon: ExpressImg, name: "Express.js" },
    { id: 4, icon: NodeImg, name: "Node.js" },
    { id: 5, icon: FlaskImg, name: "Flask" },
    { id: 6, icon: TailwindImg, name: "Tailwind CSS" },
    { id: 7, icon: ScikitLearnImg, name: "Scikit-Learn" },
    { id: 8, icon: TensorflowImg, name: "Tensorflow" },
    { id: 9, icon: PandasImg, name: "Pandas" },
    { id: 10, icon: GitImg, name: "Git" },
    { id: 11, icon: JavaImg, name: "Java" },
    { id: 12, icon: CppImg, name: "C++" },
  ];

  return (
    <section id="about" className="pt-32 px-8">
      <h1
        ref={ref}
        className={`text-center text-5xl font-semibold mb-20 invisible ${
          inView ? "slide-in-top-animation" : ""
        }`}
      >
        {"About"}
      </h1>
      <div className="flex justify-center mx-15">
        <div className="flex flex-col items-center xl:flex-row xl:items-center xl:justify-center max-w-7xl">
          <div
            ref={ref}
            className={`px-12 mb-10 md:max-w-2xl lg:flex-1 invisible ${
              inView ? "slide-in-left-animation" : ""
            }`}
          >
            <div className="text-center mb-16">
              <FontAwesomeIcon
                icon={faUser}
                className="text-[10rem] text-emerald-400"
              />
            </div>
            <h2 className="font-medium mb-2 text-3xl">Carson Davis</h2>
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
