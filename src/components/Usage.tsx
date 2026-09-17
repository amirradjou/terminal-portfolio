import { projects, socials } from "../data/profile";
import { UsageDiv } from "./styles/Output.styled";

type Props = {
  cmd: "themes" | "projects" | "socials";
  marginY?: boolean;
};

const arg = {
  themes: { placeholder: "theme-name", example: "ubuntu" },
  projects: { placeholder: "project-no", example: String(projects[0].id) },
  socials: { placeholder: "social-no", example: String(socials[0].id) },
};

const Usage: React.FC<Props> = ({ cmd, marginY = false }) => {
  const action = cmd === "themes" ? "set" : "go";
  return (
    <UsageDiv data-testid={`${cmd}-invalid-arg`} marginY={marginY}>
      Usage: {cmd} {action} &#60;{arg[cmd].placeholder}&#62; <br />
      eg: {cmd} {action} {arg[cmd].example}
    </UsageDiv>
  );
};

export default Usage;
