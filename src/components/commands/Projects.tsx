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
      url: "#", // Replace "#" with the actual URL if available
    },
    {
      id: 2,
      title: "CO2 Emissions in Bitcoin Mining",
      desc: "Conducted comprehensive environmental impact analyses by quantifying CO2 emissions from Bitcoin mining operations, utilizing data analytics.",
      url: "#", // Replace "#" with the actual URL if available
    },
    // Add more projects as needed
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
        “Talk is cheap. Show me the code”? I got you. <br />
        Here are some of my projects you shouldn't miss
      </ProjectsIntro>
      {projects.map(({ id, title, desc }) => (
        <ProjectContainer key={id}>
          <ProjectTitle>{`${id}. ${title}`}</ProjectTitle>
          <ProjectDesc>{desc}</ProjectDesc>
        </ProjectContainer>
      ))}

      {/* Personal Projects Section */}
      <ProjectsIntro>Here are some of my personal projects:</ProjectsIntro>
      {personalProjects.map(({ id, title, desc }) => (
        <ProjectContainer key={id}>
          <ProjectTitle>{`${id}. ${title}`}</ProjectTitle>
          <ProjectDesc>{desc}</ProjectDesc>
        </ProjectContainer>
      ))}

      <Usage cmd="projects" marginY />
    </div>
  );
};

const personalProjects = [
  {
    id: 1,
    title: "HashChain",
    desc: "Developed HashChain, an innovative blockchain network leveraging JavaScript for core functionality. Integrated Ethereum blockchain to facilitate secure, decentralized transactions.",
  },
  {
    id: 2,
    title: "FoF",
    desc: "Spearheaded the development of FoF, a dynamic social media platform, using Flutter for an intuitive front-end and Django for a robust back-end.",
  },
  {
    id: 3,
    title: "Price Estimation for Cars",
    desc: "Orchestrated the development of a comprehensive car price estimation tool. Utilized Python for its flexibility and efficiency. Implemented web scraping techniques using BeautifulSoup and Selenium to gather extensive data from various online sources.",
  },
  {
    id: 4,
    title: "Spy Game",
    desc: "Conceptualized and developed 'Spy Game', a captivating multiplayer spy-themed game for Android platforms.",
  },
  // Add more personal projects as needed
];

export default Projects;
