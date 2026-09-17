import { useContext } from "react";
import { projects } from "../../data/profile";
import { useOpenOnSubmit } from "../../hooks/useOpenOnSubmit";
import { isArgInvalid, redirectTarget } from "../../utils/funcs";
import {
  ProjectContainer,
  ProjectDesc,
  ProjectsIntro,
  ProjectTitle,
} from "../styles/Projects.styled";
import { termContext } from "../Terminal";
import Usage from "../Usage";

const projectIds = projects.map(({ id }) => id);

const Projects: React.FC = () => {
  const { arg } = useContext(termContext);

  /* ===== open the project when `projects go <id>` is submitted ===== */
  useOpenOnSubmit(redirectTarget(arg, projects));

  /* ===== check arg is valid ===== */
  const checkArg = () =>
    isArgInvalid(arg, "go", projectIds.map(String)) ? (
      <Usage cmd="projects" />
    ) : null;

  return arg.length > 0 || arg.length > 2 ? (
    checkArg()
  ) : (
    <div data-testid="projects">
      <ProjectsIntro>
        "Talk is cheap. Show me the code"? I got you. <br />
        Here are some of my projects you shouldn't miss
      </ProjectsIntro>
      {projects.map(({ id, title, desc, url }) => (
        <ProjectContainer key={id}>
          <ProjectTitle>{`${id}. ${title}`}</ProjectTitle>
          <ProjectDesc>{desc}</ProjectDesc>
          <ProjectDesc>{url}</ProjectDesc>
        </ProjectContainer>
      ))}

      <Usage cmd="projects" marginY />
    </div>
  );
};

export default Projects;
