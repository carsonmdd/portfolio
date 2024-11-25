import Image from "next/image";

const ProjectCard = ({ thumbnail, name, description, link }) => {
  return (
    <div className="border border-emerald-500 rounded-xl p-8 w-96 bg-slate-700 shadow-2xl">
      <Image src={thumbnail} alt={`${name} Thumbnail`} className="mb-5" />
      <h3 className="text-xl mb-2">{name}</h3>
      <p className="leading-7 mb-8">{description}</p>
      <a
        href={link}
        target="_blank"
        className="p-3 rounded-xl border-2 border-emerald-500 font-light cursor-pointer"
      >
        <span>Github Project</span>
      </a>
    </div>
  );
};

export default ProjectCard;
