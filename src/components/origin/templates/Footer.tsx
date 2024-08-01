const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 flex w-full items-center justify-center py-1 backdrop-blur">
      <p>
        Developed and managed by{" "}
        <a
          className="hover:text-blue-500"
          href="https://bento.me/naotani"
          target="_blank"
          rel="noopener"
        >
          @naotani
        </a>{" "}
        .
      </p>
    </footer>
  );
};

export default Footer;
