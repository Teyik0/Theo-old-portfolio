import coverRobotSuiveur from "../assets/projets/robot_suiveur/robotsuiveur.webp";
import coverLaserChat from "../assets/projets/laser_chat/laserchat.png";
import coverListX from "../assets/projets/listx/listx.png";
import coverMontageCI from "../assets/projets/montage/connectinnov.jpg";
import coverSiteWebTheo from "../assets/projets/siteweb/sitewebtheo.webp";

export const ProjectList = [
  {
    name: "Robot suiveur",
    type: "robot",
    langage: "c",
    category: "arduino",
    cover: coverRobotSuiveur,
    content:
      "Le robot doit suivre l'utilisateur, en plus d'être capable d'éviter tout potentiel obstacle. Le suivit de l'utilisateur via l'intermédiaire de modules Bluetooth.",
  },
  {
    name: "Laser automatique pour chat",
    type: "robot",
    langage: "c",
    category: "arduino",
    cover: coverLaserChat,
    content:
      "Votre chat s'ennuie et vous n'avez pas assez de temps à lui consacrer pour jouer ? Le laser pour chat répond à cette problématique. Celui-ci permet de simuler une aire de jeux sur un demie-cercle et imite les mouvements d'un humain pointant un laser sur le sol. ",
  },
  {
    name: "ListX - Base de donnée utilisateur",
    type: "logiciel",
    langage: "c++",
    category: "programmation",
    cover: coverListX,
    content:
      "ListX est une application créée entièrement en C++ via le framework Qt. Cette application est une base de données utilisateurs. En effet, celle-ci, conçue initialement pour le bureau des élèves dont je faisais partie devait permettre de recenser la liste des adhérents.",
  },
  {
    name: "Vidéo pour Connect Innov",
    type: "vidéo",
    langage: "none",
    category: "audiovisuel",
    cover: coverMontageCI,
    content:
      "Pour mon stage de fin d'étude, j'ai réalisé pour mon entreprise Connect innov une vidéo de présentation au format vertical",
  },
  {
    name: "Ce site web",
    type: "application web",
    langage: "reactjs",
    category: "programmation",
    cover: coverSiteWebTheo,
    content:
      "En vu de mon année à venir à l'ESGI, j'ai créé mon site web afin de montrer mes acquis et trouver une alternance.",
  },
];
