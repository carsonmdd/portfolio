import { AiOutlineMail, AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import ContactButton from "../ContactButton";

const ContactSection = () => {
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
    <section id="contact" className="p-32">
      <h1 className="text-center text-4xl font-semibold mb-6">Contact</h1>
      <div className="text-center">
        <p className="mb-8 text-xl">
          {"Have a question or want to work together? Let's connect!"}
        </p>
        <div className="text-4xl text-emerald-500 flex justify-evenly max-w-md mx-auto">
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
