import { AiOutlineMail, AiFillLinkedin, AiFillGithub } from "react-icons/ai";

const ContactSection = () => {
  return (
    <section id="contact" className="p-32">
      <h1 className="text-center text-4xl font-semibold mb-6">Contact</h1>
      <div className="text-center">
        <p className="mb-8 text-xl">
          Have a question or want to work together? Let's connect!
        </p>
        <div className="text-4xl text-emerald-500 flex justify-evenly">
          <a href="mailto:cmd52465@gmail.com">
            <AiOutlineMail />
          </a>
          <a href="https://www.linkedin.com/in/carsonmdavis/" target="_blank">
            <AiFillLinkedin />
          </a>
          <a href="https://github.com/carsonmdd/" target="_blank">
            <AiFillGithub />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
