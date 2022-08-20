import coverRobotSuiveur from "../assets/projets/robot_suiveur/robotsuiveur.webp";
import imgRobotSuiveur1 from "../assets/projets/robot_suiveur/robot_suiveur1.jpg";
import imgRobotSuiveur2 from "../assets/projets/robot_suiveur/robot_suiveur2.jpg";
import imgRobotSuiveur3 from "../assets/projets/robot_suiveur/robot_suiveur3.jpg";
import imgRobotSuiveur4 from "../assets/projets/robot_suiveur/robot_suiveur4.jpg";

import coverLaserChat from "../assets/projets/laser_chat/laserchat.png";
import imgLaserChat1 from "../assets/projets/laser_chat/laserchat1.jpg";
import imgLaserChat2 from "../assets/projets/laser_chat/laserchat2.jpg";

import coverListX from "../assets/projets/listx/listx.png";
import imgListX1 from "../assets/projets/listx/listx1.webp";

import coverMontageCI from "../assets/projets/montage/connectinnov.jpg";
import imgMontageCI1 from "../assets/projets/montage/connectinnov1.png";

import coverSiteWebTheo from "../assets/projets/siteweb/sitewebtheo.webp";
import imgSiteWebTheo1 from "../assets/projets/siteweb/sitewebtheo.png";
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
    img: [
      imgRobotSuiveur1,
      imgRobotSuiveur2,
      imgRobotSuiveur3,
      imgRobotSuiveur4,
    ],
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
    img: [imgLaserChat1, imgLaserChat2],
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
    img: [coverListX, imgListX1],
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
    img: [coverMontageCI, imgMontageCI1],
    videolink: "https://www.youtube.com/watch?v=JS38BR8cu88",
    url: null,
  },
  {
    slug: "this-web-site",
    name: "Ce site web",
    date: "Juillet 2022",
    category: ["programmation", "application web", "reactjs"],
    cover: coverSiteWebTheo,
    img: [coverSiteWebTheo, imgSiteWebTheo1],
    videolink: null,
    url: "https://www.theosamarasinghe.fr/",
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
