import { profile } from "../../data/profile";
import {
  Cmd,
  HeroContainer,
  HeroHeadline,
  HeroLinks,
  HeroName,
  HeroTagline,
  Link,
  PreImg,
  Seperator,
} from "../styles/Welcome.styled";

export const heroLinks = [
  { label: "LinkedIn", href: profile.linkedin, external: true },
  { label: "GitHub", href: profile.github, external: true },
  { label: "CV (PDF)", href: profile.cvPath, external: true },
  { label: "Email", href: `mailto:${profile.email}`, external: false },
];

const Welcome: React.FC = () => {
  return (
    <HeroContainer data-testid="welcome">
      <div className="info-section">
        <HeroName data-testid="hero-name">{profile.name}</HeroName>
        <HeroHeadline>{profile.headline}</HeroHeadline>
        <HeroTagline>{profile.tagline}</HeroTagline>
        <HeroLinks aria-label="Profile links">
          {heroLinks.map(({ label, href, external }) => (
            <Link
              key={label}
              href={href}
              target={external ? "_blank" : undefined}
              rel={external ? "noreferrer" : undefined}
            >
              {label}
            </Link>
          ))}
        </HeroLinks>
        <Seperator>----</Seperator>
        <div>
          Try `<Cmd>about</Cmd>`, `<Cmd>experience</Cmd>`, `<Cmd>projects</Cmd>`
          or `<Cmd>cv</Cmd>`, or type `<Cmd>help</Cmd>` for all commands.
        </div>
      </div>
      <div className="illu-section">
        <PreImg>
          {`
                                                  
                                       
              ......---------....                
            ..---+++++++++++++++---   
          -------++--++----++++++++-- 
         +-+--+----...        -++++++++ 
        -+----...               .++++-++  
       .++++.                      .++++-                   ___            _                         ______          _ _             
       .++-                         -+#++                  / _ \\          (_)                        | ___ \\        | (_)     
       .++                           -++--                / /_\\ \\_ __ ___  _ _ __ _ __ ___ ______ _  | |_/ /__ _  __| |_  ___  _   _ 
       .-.                           .-+--                |  _  | '_ \` _ \\| | '__| '__/ _ \\_  / _\` | |    // _\` |/ _\` | |/ _ \\| | | |
       .+-.                ..---.    .++--                | | | | | | | | | | |  | | |  __// / (_| | | |\\ \\ (_| | (_| | | (_) | |_| |
        ++.  .-++++-..  ..----...--.  -++--.              \\_| |_/_| |_| |_|_|_|  |_|  \\___/___\\__,_| \\_| \\_\\__,_|\\__,_| |\\___/ \\__,_|
        ++ .++-..-----   .-++##+++..   +- -                                                                           |__/           
        .+ .--+++---.       .....      +-..               
       ..+  ......                     -.                
        .-                  .          -.                
        .+.       .          ..       .-                 
         -.      ...-++--++-. .-..... .+.                
          +......-..-++...--+-+--.-----+-               
          +----.-++-++-    .-+++- -----+                
          -+---..-----..        -.----+-         
          .+++++.-    ......   .--+++++.           
          .+++++-.   ..--..   .++++++-            
         .  .+++++-.       ....-+++##+             
         ..  .+##+++---------++#####.   .          
        .- .   .+####++++########+    . .          
        ..  .-.....+##########-.  ...... . ..-.    
         .....-++-...-------.-------......---      
          -.. .--++++++---+--++-----.-.--++.    
         `}
        </PreImg>
      </div>
    </HeroContainer>
  );
};

export default Welcome;
