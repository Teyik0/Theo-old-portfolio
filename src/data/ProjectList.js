import coverRobotSuiveur from "../assets/projets/robot_suiveur/robotsuiveur.webp";
import coverLaserChat from "../assets/projets/laser_chat/laserchat.png";
import coverListX from "../assets/projets/listx/listx.png";
import coverMontageCI from "../assets/projets/montage/connectinnov.jpg";
import coverSiteWebTheo from "../assets/projets/siteweb/sitewebtheo.webp";
import coverTicTacToe from "../assets/projets/tictactoe/tictactoe.png";

import {
  contentRobotSuiveur,
  contentLaserPourChat,
  contentListX,
} from "./Content";

export const ProjectList = [
  {
    slug: "robot-suiveur",
    name: "Robot suiveur",
    date: "2018-2019",
    category: ["arduino", "robot", "C"],
    cover: coverRobotSuiveur,
    img: [coverRobotSuiveur],
    videolink: null,
    url: null,
    content: contentRobotSuiveur,
  },
  {
    slug: "laser-pour-chat",
    name: "Laser automatique pour chat",
    date: "2020-2021",
    category: ["arduino", "robot", "C"],
    cover: coverLaserChat,
    img: [coverLaserChat],
    videolink: "https://www.youtube.com/shorts/rzP0c3chPj8",
    url: null,
    content: contentLaserPourChat,
  },
  {
    slug: "listx",
    name: "ListX - Base de donnée utilisateur",
    date: "2021-2022",
    category: ["programmation", "logiciel", "C++"],
    cover: coverListX,
    img: [coverListX],
    videolink: "https://www.youtube.com/watch?v=cHFLe5QYoQU",
    url: null,
    content: contentListX,
  },
  {
    slug: "video-connect-innov",
    name: "Vidéo pour Connect Innov",
    date: "Mai 2022",
    category: ["premiere pro", "vidéo"],
    cover: coverMontageCI,
    img: [coverMontageCI],
    videolink: "https://www.youtube.com/watch?v=JS38BR8cu88",
    url: "https://www.youtube.com/watch?v=JS38BR8cu88",
  },
  {
    slug: "this-web-site",
    name: "Ce site web",
    date: "Juillet 2022",
    category: ["programmation", "application web", "reactjs"],
    cover: coverSiteWebTheo,
    img: [coverSiteWebTheo],
    videolink: null,
    url: null,
  },
  {
    slug: "tic-tac-toe",
    name: "Tic Tac Toe",
    date: "Août 2022",
    category: ["programmation", "application web", "reactjs"],
    cover: coverTicTacToe,
    img: [coverTicTacToe],
    videolink: null,
    url: "https://complete-tictactoe-game.netlify.app/",
  },
];
