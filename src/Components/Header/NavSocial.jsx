import React from "react";
import "./HeaderCSS/NavSocial.css";

function NavSocial({ NavPosition }) {
  return (
    <article
      className={
        NavPosition ? "social_article_header" : "social_article_header_off"
      }
    >
      <a
        target="_blank"
        rel="noreferrer"
        href="https://www.linkedin.com/in/lucinaldo-costa"
      ></a>
      <img
        className="social_header"
        src="https://d33wubrfki0l68.cloudfront.net/7f29579dde49e02480372aa49f7189c5536b0118/34b92/assets/png/linkedin-ico.png
"
        alt="LC - Code Profile Linkedin"
      />
      <a
        target="_blank"
        rel="noreferrer"
        href="https://github.com/lucinaldocosta"
      ></a>
      <img
        className="social_header"
        src="https://d33wubrfki0l68.cloudfront.net/5557d5a11584d7201a38ee1a95200f57a4cc0f88/15085/assets/png/github-ico.png
"
        alt="LC - Code Profile Github"
      />
      <a
        target="_blank"
        rel="noreferrer"
        href="https://www.youtube.com/channel/UCkryn9jdUSAp3x9UI1RT_0A"
      ></a>
      <img
        className="social_header"
        src="https://d33wubrfki0l68.cloudfront.net/493f1aa6da674c05bc606ba5b9e8092b881e8626/67c76/assets/png/yt-ico.png"
        alt="LC - Code Profile Youtube"
      />
    </article>
  );
}

export default NavSocial;
