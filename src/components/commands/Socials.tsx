import { useContext } from "react";
import { socials } from "../../data/profile";
import { useOpenOnSubmit } from "../../hooks/useOpenOnSubmit";
import { ProjectsIntro } from "../styles/Projects.styled";
import { Cmd, CmdDesc, CmdList, HelpWrapper } from "../styles/Help.styled";
import { generateTabs, isArgInvalid, redirectTarget } from "../../utils/funcs";
import { termContext } from "../Terminal";
import Usage from "../Usage";

const socialIds = socials.map(({ id }) => id);
const longestTitle = Math.max(...socials.map(({ title }) => title.length));

const Socials: React.FC = () => {
  const { arg } = useContext(termContext);

  /* ===== open the profile when `socials go <id>` is submitted ===== */
  useOpenOnSubmit(redirectTarget(arg, socials));

  /* ===== check arg is valid ===== */
  const checkArg = () =>
    isArgInvalid(arg, "go", socialIds.map(String)) ? (
      <Usage cmd="socials" />
    ) : null;

  return arg.length > 0 || arg.length > 2 ? (
    checkArg()
  ) : (
    <HelpWrapper data-testid="socials">
      <ProjectsIntro>Here are my social links</ProjectsIntro>
      {socials.map(({ id, title, url }) => (
        <CmdList key={title}>
          <Cmd>{`${id}. ${title}`}</Cmd>
          {generateTabs(longestTitle - title.length + 1)}
          <CmdDesc>- {url}</CmdDesc>
        </CmdList>
      ))}
      <Usage cmd="socials" marginY />
    </HelpWrapper>
  );
};

export default Socials;
