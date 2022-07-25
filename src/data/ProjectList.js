import coverRobotSuiveur from "../assets/projets/robot_suiveur/robotsuiveur.png";
import coverLaserChat from "../assets/projets/laser_chat/laserchat.png";
import coverListX from "../assets/projets/listx/listx.png";
import coverMontageCI from "../assets/projets/montage/connectinnov.jpg";
import coverSiteWebTheo from "../assets/projets/siteweb/sitewebtheo.png";

export const ProjectList = [
  {
    name: "Robot suiveur",
    type: "robot",
    langage: "c",
    category: "arduino",
    cover: coverRobotSuiveur,
  },
  {
    name: "Laser automatique pour chat",
    type: "robot",
    langage: "c",
    category: "arduino",
    cover: coverLaserChat,
  },
  {
    name: "ListX - Base de donnée utilisateur",
    type: "logiciel",
    langage: "c++",
    category: "programmation",
    cover: coverListX,
  },
  {
    name: "Vidéo pour Connect Innov",
    type: "vidéo",
    langage: "none",
    category: "audiovisuel",
    cover: coverMontageCI,
  },
  {
    name: "Ce site web",
    type: "application web",
    langage: "reactjs",
    category: "programmation",
    cover: coverSiteWebTheo,
  },
];
