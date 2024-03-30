import { EduIntro, EduList } from "../styles/Education.styled";
import { Wrapper } from "../styles/Output.styled";

const Education: React.FC = () => {
  return (
    <Wrapper data-testid="education">
      <EduIntro>Here is my education background!</EduIntro>
      {eduBg.map(({ title, desc }) => (
        <EduList key={title}>
          <div className="title">{title}</div>
          <div className="desc">{desc}</div>
        </EduList>
      ))}
    </Wrapper>
  );
};

const eduBg = [
  {
    title: "B.Sc in Computer Science",
    desc: "Amirkabir University | 2018 ~ 2022",
  },
  {
    title: "MSc in Computer Science",
    desc: "York University | 2022 - 2024",
  },
];

export default Education;
