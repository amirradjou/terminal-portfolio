import { profile } from "../../data/profile";
import { useOpenOnSubmit } from "../../hooks/useOpenOnSubmit";
import { Wrapper } from "../styles/Output.styled";

const Email: React.FC = () => {
  /* ===== open a mail draft when the command is submitted ===== */
  useOpenOnSubmit(`mailto:${profile.email}`, "_self");

  return (
    <Wrapper>
      <span>{profile.email}</span>
    </Wrapper>
  );
};

export default Email;
