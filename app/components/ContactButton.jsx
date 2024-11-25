const ContactButton = ({ link, icon }) => {
  return (
    <a
      href={link}
      target="_blank"
      className="hover:scale-110 transition-all duration-300"
    >
      {icon}
    </a>
  );
};

export default ContactButton;
