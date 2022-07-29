import coverRobotSuiveur from "../assets/projets/robot_suiveur/robotsuiveur.webp";
import coverLaserChat from "../assets/projets/laser_chat/laserchat.png";
import coverListX from "../assets/projets/listx/listx.png";
import coverMontageCI from "../assets/projets/montage/connectinnov.jpg";
import coverSiteWebTheo from "../assets/projets/siteweb/sitewebtheo.webp";

export const ProjectList = [
  {
    name: "Robot suiveur",
    id: "robotsuiveur",
    type: "robot",
    langage: "c",
    category: "arduino",
    cover: coverRobotSuiveur,
    videolink: "none",
  },
  {
    name: "Laser automatique pour chat",
    id: "laserpourchat",
    type: "robot",
    langage: "c",
    category: "arduino",
    cover: coverLaserChat,
    videolink: "https://www.youtube.com/shorts/rzP0c3chPj8",
  },
  {
    name: "ListX - Base de donnée utilisateur",
    id: "listx",
    type: "logiciel",
    langage: "c++",
    category: "programmation",
    cover: coverListX,
    videolink: "https://www.youtube.com/watch?v=cHFLe5QYoQU",
  },
  {
    name: "Vidéo pour Connect Innov",
    id: "videoconnectinnov",
    type: "vidéo",
    langage: "none",
    category: "audiovisuel",
    cover: coverMontageCI,
    videolink: "https://www.youtube.com/watch?v=JS38BR8cu88",
  },
  {
    name: "Ce site web",
    id: "home",
    type: "application web",
    langage: "reactjs",
    category: "programmation",
    cover: coverSiteWebTheo,
    videolink: "none",
  },
];
