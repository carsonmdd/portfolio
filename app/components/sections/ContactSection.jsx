"use client";

import { AiOutlineMail, AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import ContactButton from "../ContactButton";
import { useInView } from "react-intersection-observer";

const ContactSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const contactButtons = [
    { id: 1, link: "mailto:cmd52465@gmail.com", icon: AiOutlineMail },
    {
      id: 2,
      link: "https://www.linkedin.com/in/carsonmdavis/",
      icon: AiFillLinkedin,
    },
    { id: 3, link: "https://github.com/carsonmdd/", icon: AiFillGithub },
  ];

  return (
    <section id="contact" className="px-14 pt-32 pb-6">
      <h1
        ref={ref}
        className={`text-center text-5xl font-semibold mb-6 invisible ${
          inView ? "slide-in-left-animation" : ""
        }`}
      >
        {"Contact"}
      </h1>
      <div className="text-center">
        <p
          ref={ref}
          className={`mb-8 text-xl invisible ${
            inView ? "slide-in-right-animation" : ""
          }`}
        >
          {"Have a question or want to work together? Let's connect!"}
        </p>
        <div
          ref={ref}
          className={`text-4xl text-emerald-500 flex justify-evenly max-w-xs mx-auto invisible ${
            inView ? "slide-in-bottom-animation" : ""
          }`}
        >
          {contactButtons.map((button) => (
            <ContactButton
              key={button.id}
              link={button.link}
              icon={<button.icon />}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
