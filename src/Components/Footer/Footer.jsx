import LinksFooter from "./LinksFooter";
import { Link } from "react-router-dom";
import "./FooterCSS/Footer.css";

function Footer() {
  return (
    <footer>
      <section className="social_section_footer">
        <article className="title_article_footer">
          <h2>LC - Code</h2>
          <p>
            A Fullstack Web Developer proficient in both frontend and backend
            technologies, creating seamless websites and web applications that
            contribute to the overall success of the product.
          </p>
        </article>

        <article className="social_article_footer">
          <h2>SOCIAL</h2>
          <LinksFooter />
        </article>
      </section>

      <hr />

      <section className="copyright_section_footer">
        <p>
          © Copyright 2023. Made by{" "}
          <Link className="copyright_link_footer" to="/">
            LC - Code
          </Link>
        </p>
      </section>
    </footer>
  );
}

export default Footer;
