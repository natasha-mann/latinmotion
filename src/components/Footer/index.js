import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer border-top py-3 text-center">
      <div>
        © Latin Motion. Designed and Built by{" "}
        <a
          className="portfolio-link"
          href="natasha-mann.github.io/portfolio-react"
          target="_blank"
          rel="no referrer"
        >
          Natasha Mann
        </a>
      </div>
    </footer>
  );
};

export default Footer;
