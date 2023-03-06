// List of commands that do not require API calls

import * as bin from './index';
import config from '../../../config.json';

// Help
export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort().join(', ');
  var c = '';
  for (let i = 1; i <= Object.keys(bin).sort().length; i++) {
    if (i % 7 === 0) {
      c += Object.keys(bin).sort()[i - 1] + '\n';
    } else {
      c += Object.keys(bin).sort()[i - 1] + ' ';
    }
  }
  return `Cześć! Here are some of the available commands:
\n${c}\n
[tab]: trigger completion.
[ctrl+l]/clear: clear terminal.\n
Type 'sumfetch' or 'neofetch' to display summary.
`;
};

// Redirection
export const repo = async (args: string[]): Promise<string> => {
  window.open(`${config.repo}`);
  return 'Opening Github repository...';
};

// Patreon Redirect
export const patreon = async (args: string[]): Promise<string> => {
  window.open(`${config.patreonurl}`);
  return 'Opening Patreon page...';
};

// About
export const about = async (args: string[]): Promise<string> => {
  return `Hi, I am ${config.name}. 
Take a look around and help out if you can!
More about me:
'sumfetch' or 'neofetch' - short summary.
'resume' - my latest resume.
'readme' - my readme.`;
};

export const resume = async (args: string[]): Promise<string> => {
  window.open(`${config.resume_url}`);
  return 'Opening resume...';
};

// Donate
export const donate = async (args: string[]): Promise<string> => {
  return `I'm sure you're just looking, but consider a small donation towards my school and learning fund. 
Here are some of the ways you can support my development:
- <u>BTC : bc1qqqzzhfymcvfjenj40grpfem3yct5mgqf035329</u>
- <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.donate_urls.patreon}" target="_blank">patreon</a></u>
`;
};

// Contact
export const email = async (args: string[]): Promise<string> => {
  window.open(`mailto:${config.email}`);
  return `Opening mailto:${config.email}...`;
};

export const github = async (args: string[]): Promise<string> => {
  window.open(`https://github.com/${config.social.github}/`);

  return 'Opening Github...';
};

export const linkedin = async (args: string[]): Promise<string> => {
  window.open(`https://www.linkedin.com/in/${config.social.linkedin}/`);

  return 'Opening Linkedin...';
};

// Search
export const google = async (args: string[]): Promise<string> => {
  window.open(`https://google.com/search?q=${args.join(' ')}`);
  return `Searching google for ${args.join(' ')}...`;
};

export const duckduckgo = async (args: string[]): Promise<string> => {
  window.open(`https://duckduckgo.com/?q=${args.join(' ')}`);
  return `Respect our privacy. Searching duckduckgo for ${args.join(' ')}...`;
};

export const bing = async (args: string[]): Promise<string> => {
  window.open(`https://bing.com/search?q=${args.join(' ')}`);
  return `Searching bing for ${args.join(' ')}?`;
};

export const reddit = async (args: string[]): Promise<string> => {
  window.open(`https://www.reddit.com/search/?q=${args.join(' ')}`);
  return `Searching reddit for ${args.join(' ')}...`;
};

// Typical linux commands
export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ');
};

export const whoami = async (args: string[]): Promise<string> => {
  return `${config.ps1_username}`;
};

export const ls = async (args: string[]): Promise<string> => {
  return `bin  boot  dev	etc  home  lib	lib32  lib64  libx32  lost+found  media
mnt  opt  proc  root  run  sbin  srv  sys  tmp  usr  var`;
};

export const cd = async (args: string[]): Promise<string> => {
  return `ERROR: DIRECTORY ACCESS RESTRICTED
Directories don't come cheap.
Consider supporting me for access. - type 'donate' to learn more.`;
};

export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};

export const time = async (args: string[]): Promise<string> => {
  return new Date.getTime().toString();
};

export const vi = async (args: string[]): Promise<string> => {
  return `woah, you still use 'vi'? just try 'vim'.`;
};

export const vim = async (args: string[]): Promise<string> => {
  return `'vim' is so outdated. how about 'nvim'?`;
};

export const nvim = async (args: string[]): Promise<string> => {
  return `'nvim'? too fancy. why not 'emacs'?`;
};

export const emacs = async (args?: string[]): Promise<string> => {
  return `you know what? just use vscode.`;
};

export const sudo = async (args?: string[]): Promise<string> => {
  window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank'); // ...I'm sorry
  return `Permission denied: with little power comes... no responsibility? `;
};

// Banner
export const banner = (args?: string[]): string => {
  return `
::::    ::::  ::::::::::: ::::::::  :::    :::     :::     :::            :::    ::: 
+:+:+: :+:+:+     :+:    :+:    :+: :+:    :+:   :+: :+:   :+:            :+:   :+:  
+:+ +:+:+ +:+     +:+    +:+        +:+    +:+  +:+   +:+  +:+            +:+  +:+   
+#+  +:+  +#+     +#+    +#+        +#++:++#++ +#++:++#++: +#+            +#++:++    
+#+       +#+     +#+    +#+        +#+    +#+ +#+     +#+ +#+            +#+  +#+   
#+#       #+#     #+#    #+#    #+# #+#    #+# #+#     #+# #+#        #+# #+#   #+#  
###       ### ########### ########  ###    ### ###     ### ########## ### ###    ###         
              
Type 'help' to see the list of available commands.
Type 'sumfetch' to display summary.
Type 'patreon' to visit the Patreon page that's been set up for me.
Type 'repo' or click <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.repo}" target="_blank">here</a></u> for the Github repository.
`;
};

// Michal
export const michal = (args?: string[]): string => {
  return `                                                            
                          .:..                              
                  :^~7??JJY55J?J?7~^.                       
                :JPPGGPPP55YYYYJJJJYJ?7!.                   
              ~J5PP5555555YYYJJJJJJJJJJJ?7!~:               
           .!JP55YYYYYYYYYJJJJJJJ???????7????7~.            
          ~YPP5YYYYYYYYYYJJJJJ??7777777777!777?7:           
        :YGPPP555YYYYYJJJ???J??77777777!!!!!!!!!7~          
       .5GGGPP5555YYYJJJ????????77777!!!!!!!~~~~~7~         
       7BGGGGPPP555YYYJJJ????????7777!!!!!!!~~~~~~7:        
       5BGGGGGPPP5555YYYJJJJJJ????777777!!!!!~~~~~!!        
      :GBGGBGGGGPPP5555YYYYJJJJJJ????777777!!!!~~!!7.       
      ~BBBGBBGGGGPPP5555YYYYYYYYJJJ??????777!!!!!!77:       
      !BBBBBBGGGPPPPPP55555YYY55YYJJJJJJJ???77!!!!77^       
      ~#BBBGGGGGGGPPPP55PPPPPP555YYJJJJYYYJJJ?77!!!7~       
    ^!YBBBGGGPGGGGPPPGGGGGGGGGP5YYJ???J5P55YJ?777!!7~       
   ~BBGGBBGGPPPGGGGGBB###GPP555YJ?7!!7?GB##PP5J7!!~!!~:     
   7#BBBBBGGPPPPPP5555555YYYJYYJ?7!!~~!7JYYJ???7!~~!7J!     
   ^GBGB##BGGPPP55YYYJJJJ??JJ55YJ?7!~~!!!!777!~~~~~!7Y^     
    ~PBB##BGGGPPP55YJJ?????J5P5PP5YJ?7!?7!!!~~~~~~~777      
     ^PBBBBBGGGPPP55YYJJJJJ5PGGBGP55PY?JJ?77!~~~~~!7~.      
      .?PBBBBBGPPPPP55YYYYY55PGP5YJ?7??JJYJ?77!~~~!~.       
        .!YP5PGGGPPPPP55555PPPGP5YJ?77?Y555YJ?7!!!~         
             :PBGGGPPP5555PB######BBGPPPP55YJ?7!!!.         
              :5BGGGPPP5YYPGBB##BBBGGP5J555JJ?777:          
               ~BBBGGGPP555PGPPP555YJ?7?JYYYJ??!:           
              ?BBBBBBGGGPPPPPGGGPP5YJ????JJJJ7^             
              ?G####BBBBBGGPPPPP55YYJ????JJJ7.              
               .!JPB######BBGGP555YJ??JJJ?7~^               
                   .^~7JY5PPPPPGGP5Y??7!^:.                 
                            ...::::.                        
                                                            
`;
};
