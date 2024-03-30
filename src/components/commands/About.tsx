import {
  AboutWrapper,
  HighlightAlt,
  HighlightSpan,
} from "../styles/About.styled";

const About: React.FC = () => {
  return (
    <AboutWrapper data-testid="about">
      <p>
        Hi, my name is <HighlightSpan>Amirreza Radjou</HighlightSpan>!
      </p>
      <p>
        I'm <HighlightAlt>a Software Developer</HighlightAlt> currently pursuing my Master of Computer Science at York University in Toronto, Ontario, Canada.
      </p>
      <p>
        I am passionate about developing software solutions and contributing to innovative projects. With experience in various programming languages and technologies, I aim to leverage my skills to create impactful web applications that address real-life challenges.
      </p>
    </AboutWrapper>
  );
};

export default About;
