import { HiOutlineArrowSmallDown } from "react-icons/hi2";

export default function Home() {
  return (
    <div>
      <main>
        <section className="w-full h-screen bg-slate-800 flex flex-col items-center justify-center text-center">
          <h1 className="text-white text-5xl mb-5 font-medium">
            Hi, I'm Carson.
          </h1>
          <p className="text-white text-3xl mb-10 max-w-2xl">
            I'm passionate about full-stack web development and artifical
            intelligence.
          </p>
          <button className="bg-slate-700 text-white flex p-3 text-2xl rounded-xl ">
            <span className="mr-2">View my work</span>
            <HiOutlineArrowSmallDown className="my-auto" />
          </button>
        </section>
        <section>
          <h1>Hello world</h1>
        </section>
      </main>
    </div>
  );
}
