import { HiOutlineArrowSmallDown } from "react-icons/hi2";

const HomeSection = () => {
  return (
    <section
      id="home"
      className="w-full h-screen flex flex-col items-center justify-center text-center"
    >
      <h1 className="text-5xl mb-5 font-light">
        {"Hi, I'm "}
        <span className="text-emerald-500">Carson</span>.
      </h1>
      <p className="text-3xl mb-16 max-w-2xl font-extralight">
        {
          "I'm passionate about full-stack web development and artifical intelligence."
        }
      </p>
      <a
        href="#about"
        className="flex p-3 text-xl rounded-xl border-2 border-emerald-500 font-light"
      >
        <span className="mr-2">View my work</span>
        <HiOutlineArrowSmallDown className="my-auto" />
      </a>
    </section>
  );
};

export default HomeSection;
