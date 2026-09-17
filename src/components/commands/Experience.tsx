import { experience } from "../../data/profile";
import { ExpIntro, ExpItem } from "../styles/Experience.styled";
import { Wrapper } from "../styles/Output.styled";

const Experience: React.FC = () => {
  return (
    <Wrapper data-testid="experience">
      <ExpIntro>Here is my professional experience!</ExpIntro>
      {experience.map(({ company, role, location, period, bullets }) => (
        <ExpItem key={`${company}-${role}`}>
          <div className="title">
            {role} @ {company}
          </div>
          <div className="meta">
            {location} | {period}
          </div>
          <ul>
            {bullets.map(bullet => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
        </ExpItem>
      ))}
    </Wrapper>
  );
};

export default Experience;
