import Image from "next/image";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const SkillCard = ({ icon, name }) => {
  const [randomDelay, setRandomDelay] = useState(null);

  useEffect(() => {
    const randomNumber = (Math.floor(Math.random() * 6) / 10).toFixed(1);
    setRandomDelay(randomNumber);
  }, []);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <div
      ref={ref}
      className={`border border-emerald-500 flex flex-col items-center justify-center rounded-xl p-3 w-32 h-36 hover:-translate-y-2 transition-all duration-300 opacity-0 ${
        inView ? "fade-in-animation" : ""
      }`}
      style={{ animationDelay: `${randomDelay}s` }}
    >
      <Image src={icon} alt={`${name} Image`} className="w-14 h-14 mb-3" />
      <h3>{name}</h3>
    </div>
  );
};

export default SkillCard;
