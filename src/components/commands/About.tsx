import {
  AboutWrapper,
  HighlightAlt,
  HighlightSpan,
} from "../styles/About.styled";

const About: React.FC = () => {
  return (
    <AboutWrapper data-testid="about">
      <p>
        Hi, my name is <HighlightSpan>Amirreza Radjou</HighlightSpan>! Thanks
        for visiting my terminal; I'm thrilled you're here and hope you like it.
      </p>
      <p>
        I'm a{" "}
        <HighlightAlt>
          Software Engineer specializing in backend and decentralized systems
        </HighlightAlt>
        , and a recent graduate of the Master of Computer Science program at
        York University.
      </p>
      <p>
        I am passionate about building secure and scalable software solutions to
        solve complex engineering challenges. My experience includes developing
        distributed network protocols in Go and Rust, architecting robust APIs,
        and contributing to open-source decentralized databases like Go-OrbitDB.
        I am currently seeking new opportunities where I can apply my skills,
        continue to learn, and contribute to innovative, high-impact projects.
      </p>
    </AboutWrapper>
  );
};

export default About;
