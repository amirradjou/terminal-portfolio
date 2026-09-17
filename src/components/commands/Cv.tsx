import { useContext } from "react";
import _ from "lodash";
import { profile } from "../../data/profile";
import { Wrapper } from "../styles/Output.styled";
import { Link } from "../styles/Welcome.styled";
import { termContext } from "../Terminal";

export const cvCommands = ["cv", "resume"];

const Cv: React.FC = () => {
  const { history, rerender } = useContext(termContext);

  /* ===== get current command ===== */
  const currentCommand = _.split(history[0], " ");

  /* ===== open the CV in a new tab when the command is submitted ===== */
  if (rerender && cvCommands.includes(currentCommand[0])) {
    window.open(profile.cvPath, "_blank");
  }

  return (
    <Wrapper data-testid="cv">
      CV (PDF, updated {profile.cvUpdated}):{" "}
      <Link href={profile.cvPath} target="_blank" rel="noreferrer">
        {profile.website}
        {profile.cvPath}
      </Link>
    </Wrapper>
  );
};

export default Cv;
