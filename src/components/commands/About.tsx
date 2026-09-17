import { profile } from "../../data/profile";
import {
  AboutWrapper,
  HighlightAlt,
  HighlightSpan,
} from "../styles/About.styled";

const About: React.FC = () => {
  return (
    <AboutWrapper data-testid="about">
      <p>
        Hi, my name is <HighlightSpan>{profile.name}</HighlightSpan>! Thanks for
        visiting my terminal; I'm thrilled you're here and hope you like it.
      </p>
      <p>
        I'm a{" "}
        <HighlightAlt>
          {profile.role} at {profile.company}
        </HighlightAlt>{" "}
        in {profile.location}, and a Software Engineer with 4+ years building
        backend services and distributed systems.
      </p>
      <p>
        I'm strong in Go and Python across microservices, gRPC/REST/GraphQL
        APIs, service mesh, and consensus/peer-to-peer protocols, with proven
        experience in regulated banking and research settings. I care about
        solid testing, CI/CD and containerized delivery, and I'm comfortable
        full-stack with Vue.js and React. I hold an M.Sc. in Computer Science
        from York University.
      </p>
    </AboutWrapper>
  );
};

export default About;
