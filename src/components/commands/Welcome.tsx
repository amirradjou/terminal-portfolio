import {
  Cmd,
  HeroContainer,
  Link,
  PreImg,
  PreName,
  PreNameMobile,
  PreWrapper,
  Seperator,
} from "../styles/Welcome.styled";

const Welcome: React.FC = () => {
  return (
    <HeroContainer data-testid="welcome">
      <div className="info-section">
        <PreName>
          {`        
        `}
        </PreName>
        <PreWrapper>
        </PreWrapper>
        <Seperator>----</Seperator>
        <div>
          For a list of available commands, type `<Cmd>help</Cmd>`.
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
