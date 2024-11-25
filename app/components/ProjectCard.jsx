import Image from "next/image";

const ProjectCard = ({ thumbnail, name, description, link }) => {
  return (
    <div className="border border-emerald-500 rounded-xl w-96 h-[26rem] bg-slate-700 shadow-2xl hover:-translate-y-2 transition-all duration-300">
      <div className="h-48 flex p-5">
        <Image
          src={thumbnail}
          alt={`${name} Thumbnail`}
          className="object-contain"
        />
      </div>
      <div className="px-5">
        <h3 className="text-xl mb-2">{name}</h3>
        <p className="leading-7 mb-8">{description}</p>
        <a
          href={link}
          target="_blank"
          className="p-3 rounded-xl border-2 border-emerald-500 font-light cursor-pointer hover:bg-emerald-500 hover:border-emerald-700 transition-all duration-300"
        >
          <span>Github Project</span>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
