import "./FooterCSS/Footer.css";

function LinksFooter() {
  return (
    <div>
      <a target="_blank" href="https://www.linkedin.com/in/lucinaldo-costa">
        <img
          className="links_footer"
          src="https://d33wubrfki0l68.cloudfront.net/7f29579dde49e02480372aa49f7189c5536b0118/34b92/assets/png/linkedin-ico.png
"
          alt="LC - Code Profile Linkedin"
        />
      </a>

      <a target="_blank" href="https://github.com/lucinaldocosta">
        <img
          className="links_footer"
          src="https://d33wubrfki0l68.cloudfront.net/5557d5a11584d7201a38ee1a95200f57a4cc0f88/15085/assets/png/github-ico.png
"
          alt="LC - Code Profile Github"
        />
      </a>

      <a
        target="_blank"
        href="https://www.youtube.com/channel/UCkryn9jdUSAp3x9UI1RT_0A"
      >
        <img
          className="links_footer"
          src="https://d33wubrfki0l68.cloudfront.net/493f1aa6da674c05bc606ba5b9e8092b881e8626/67c76/assets/png/yt-ico.png"
          alt="LC - Code Profile Youtube"
        />
      </a>
    </div>
  );
}

export default LinksFooter;
