import { profile } from "../../data/profile";
import { useOpenOnSubmit } from "../../hooks/useOpenOnSubmit";
import { Wrapper } from "../styles/Output.styled";
import { Link } from "../styles/Welcome.styled";

export const cvCommands = ["cv", "resume"];

const Cv: React.FC = () => {
  /* ===== open the CV in a new tab when the command is submitted ===== */
  useOpenOnSubmit(profile.cvPath);

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
