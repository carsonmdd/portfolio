import Image from "next/image";

const SkillCard = ({ icon, name }) => {
  return (
    <div className="border border-emerald-500 flex flex-col items-center justify-center rounded-xl p-3 w-32 h-36 hover:-translate-y-2 transition-all duration-300">
      <Image src={icon} alt={`${name} Image`} className="w-14 h-14 mb-3" />
      <h3>{name}</h3>
    </div>
  );
};

export default SkillCard;
