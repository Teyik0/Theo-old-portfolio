import coverRobotSuiveur from "../assets/projets/robot_suiveur/robotsuiveur.webp";
import coverLaserChat from "../assets/projets/laser_chat/laserchat.png";
import coverListX from "../assets/projets/listx/listx.png";
import coverMontageCI from "../assets/projets/montage/connectinnov.jpg";
import coverSiteWebTheo from "../assets/projets/siteweb/sitewebtheo.webp";
import coverTicTacToe from "../assets/projets/tictactoe/tictactoe.png";

export const ProjectList = [
  {
    name: "Robot suiveur",
    id: "robotsuiveur",
    type: "robot",
    langage: "c",
    category: ["arduino", "robot", "C"],
    cover: coverRobotSuiveur,
    videolink: null,
    url: null,
  },
  {
    name: "Laser automatique pour chat",
    id: "laserpourchat",
    category: ["arduino", "robot", "C"],
    cover: coverLaserChat,
    videolink: "https://www.youtube.com/shorts/rzP0c3chPj8",
    url: null,
  },
  {
    name: "ListX - Base de donnée utilisateur",
    id: "listx",
    category: ["programmation", "logiciel", "C++"],
    cover: coverListX,
    videolink: "https://www.youtube.com/watch?v=cHFLe5QYoQU",
    url: null,
  },
  {
    name: "Vidéo pour Connect Innov",
    id: "videoconnectinnov",
    category: ["premiere pro", "vidéo"],
    cover: coverMontageCI,
    videolink: "https://www.youtube.com/watch?v=JS38BR8cu88",
    url: "https://www.youtube.com/watch?v=JS38BR8cu88",
  },
  {
    name: "Ce site web",
    id: "home",
    category: ["programmation", "application web", "reactjs"],
    cover: coverSiteWebTheo,
    videolink: null,
    url: null,
  },
  {
    name: "Tic Tac Toe",
    id: "tictactoe",
    category: ["programmation", "application web", "reactjs"],
    cover: coverTicTacToe,
    videolink: null,
    url: "https://complete-tictactoe-game.netlify.app/",
  },
];
