import React from "react";
import "./AboutCSS/Certificates.css";

function Certificates() {
  return (
    <section className="section_certificates">
      <h2>Certificates</h2>

      <article className="article_certificates">
        <div className="div_certificates_text">
          <h3>CS50 Harvard</h3>
          <p>
            CS50x is an introductory computer science course offered by Harvard
            University. It's part of the university's online education program
            and is designed to teach the fundamentals of programming and
            computer science.
          </p>
        </div>
        <div className="div_certificates_photo">
          <img
            className="img_certificates CS50"
            src="CS50_certificate.png"
            alt="CS50 Certificate"
          />
        </div>
      </article>

      <article className="article_certificates article_EFSET">
        <div className="div_certificates_photo">
          <img
            className="img_certificates EFSET"
            src="EFSET_certificate.png"
            alt="EFSET Certificate"
          />
        </div>
        <div className="div_certificates_text">
          <h3>EFSET Standard English Test</h3>
          <p>
            The EF Standard English Test (EFSET) is an English skills assessment
            test developed by EF Education First, a global education
            organization with a focus on language instruction. The EFSET is
            designed to measure listening and reading comprehension skills in
            English accurately and reliably.
          </p>
        </div>
      </article>

      <article className="article_certificates">
        <div className="div_certificates_text">
          <h3>Scrum Foundation Professional - SFPC</h3>
          <p>
            The "Scrum Foundation Professional" (SFPC) certification is a
            credential that acknowledges the understanding and knowledge of the
            fundamental concepts of Scrum, an extensively used agile framework
            in software development and project management. The SFPC is designed
            for individuals seeking to acquire a solid foundation in Scrum and
            its philosophy.
          </p>
        </div>
        <div className="div_certificates_photo">
          <img
            className="img_certificates SFPC"
            src="SFPC_certificate.png"
            alt="SFPC Certificate"
          />
        </div>
      </article>
    </section>
  );
}

export default Certificates;
