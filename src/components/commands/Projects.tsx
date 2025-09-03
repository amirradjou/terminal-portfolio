import { useContext, useEffect } from "react";
import {
  checkRedirect,
  getCurrentCmdArry,
  isArgInvalid,
} from "../../utils/funcs";
import {
  ProjectContainer,
  ProjectDesc,
  ProjectsIntro,
  ProjectTitle,
} from "../styles/Projects.styled";
import { termContext } from "../Terminal";
import Usage from "../Usage";

const Projects: React.FC = () => {
  const { arg, history, rerender } = useContext(termContext);

  const projects = [
    {
      id: 1,
      title: "CNSim - A Consensus Network Simulator",
      desc: "An open-source simulator for in-depth analysis of consensus networks, developed by the Enterprise Systems Group of York University.",
      url: "https://github.com/cmg-york/cnsim", // Replace "#" with the actual URL if available
    },
    {
      id: 2,
      title: "go-orbitdb",
      desc: "Go implementation of OrbitDB, a decentralized database for peer-to-peer applications with more than 8K stars on GitHub.",
      url: "https://github.com/orbitdb/go-orbitdb", // Replace "#" with the actual URL if available
    },
    {
      id: 3,
      title: "CO2 Emissions in Bitcoin Mining",
      desc: "Conducted comprehensive environmental impact analyses by quantifying CO2 emissions from Bitcoin mining operations, utilizing data analytics. Demo of the website is available.",
      url: "https://andreapodhorsky.com/btcCO2emissions", // Replace "#" with the actual URL if available
    },
    {
      id: 4,
      title: "Spy Game",
      desc: "It is the first android game I developed and published on the cafebazaar(iranian play store) in 2019 when I was 18. It is not the best, but I love it so much and learned a lot from it.",
      url: "https://cafebazaar.ir/app/com.example.spy?l=en", // Replace "#" with the actual URL if available
    },
  ];

  /* ===== get current command ===== */
  const currentCommand = getCurrentCmdArry(history);

  /* ===== check current command is redirect ===== */
  useEffect(() => {
    if (checkRedirect(rerender, currentCommand, "projects")) {
      projects.forEach(({ id, url }) => {
        id === parseInt(arg[1]) && window.open(url, "_blank");
      });
    }
  }, [arg, rerender, currentCommand]);

  /* ===== check arg is valid ===== */
  const checkArg = () =>
    isArgInvalid(arg, "go", ["1", "2", "3", "4"]) ? (
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
      {projects.map(({ id, title, desc }) => (
        <ProjectContainer key={id}>
          <ProjectTitle>{`${id}. ${title}`}</ProjectTitle>
          <ProjectDesc>{desc}</ProjectDesc>
        </ProjectContainer>
      ))}

      <Usage cmd="projects" marginY />
    </div>
  );
};

export default Projects;
