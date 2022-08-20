import { Fragment } from "react";

export const contentRobotSuiveur = (
  <Fragment>
    <p>
      Pour ma dernière année de lycée, nous devions faire un projet embarqué,
      avec mon groupe. En ce sens, nous avons choisi de réaliser un cartable
      suiveur. Ce projet était très ambitieux, le robot devait être capable de
      suivre l'utilisateur, en plus d'être capable d'éviter tout potentiel
      obstacle.
    </p>
    <p>
      Difficulté supplémentaire, celui-ci devait être fait avec des cartes
      Arduino. Or, ces cartes ne permettent pas le parallélisme ; nous avons
      ainsi été obligés de prendre trois cartes Arduino chacune pour s'occuper
      d'une tâche donnée. Une carte devait s'occuper de localiser l'utilisateur,
      une autre se devait d'analyser les obstacles, et la dernière carte devait
      centraliser les informations des deux autres pour donner les instructions
      de mouvement aux moteurs.
    </p>
    <p>
      Deuxième difficulté, nous devions localiser l'utilisateur par Bluetooth.
      Pour ce faire, le robot était équipé de 3 modules Bluetooth, tous pointant
      sur l'adresse mac du module Bluetooth du téléphone de l'utilisateur. En
      effet, cela permettait d'effectuer une mesure de la puissance du signal
      dans chaque direction (gauche, droite, milieu) afin de savoir où était
      l'utilisateur par rapport au robot.
    </p>
    <p>
      Bien que ce projet avançait plutôt bien, celui-ci était trop ambitieux
      pour pouvoir être terminé en une seule année. En revanche, chacune des
      cartes Arduino était capable d'assurer sa fonction. Il ne restait plus
      qu'à centraliser les informations et faire les derniers tests pour
      finaliser ce projet.
    </p>
  </Fragment>
);

export const contentLaserPourChat = (
  <Fragment>
    <p>
      Votre chat s'ennuie et vous n'avez pas assez de temps à lui consacrer pour
      jouer ? Le laser pour chat répond à cet problématique. Celui-ci permet de
      simuler une aire de jeux sur un demie-cercle et imite les mouvements d'un
      humain pointant un laser sur le sol. Ces mêmes lasers dont les chats
      raffolent.
    </p>
    <p>
      Ce laser automatique a été fait en détournant un bras robot. En effet,
      j'ai enlevé la pince d'origine pour modéliser et imprimer en 3D une pièce
      permettant de fixer un module laser à la place. Le reste consistait en de
      la programmation pure et dure. Un système aléatoire pour les mouvements et
      la durée d'attente entre chaque mouvement. Il suffit alors de poser le
      bras robot sur une table en hauteur et le tout fonctionne.
    </p>
  </Fragment>
);

export const contentListX = (
  <Fragment>
    <p>
      ListX est une application créée entièrement en C++ via le framework Qt.
      Cette application est une base de données utilisateurs. En effet,
      celle-ci, conçue initialement pour le bureau des élèves dont je faisais
      partie devait permettre de recenser la liste des adhérents. Celle-ci, très
      complète permet l'ajout, la suppression, l'exportation et l'importation de
      membre. Bien que non visible sur la vidéo, une fonction de trie a été
      ajoutée, celle-ci permettant de trier par ordre alphabétique (A-Z ou Z-A),
      de trier par année, par groupe... L'application est entièrement
      fonctionnelle et a représenté à elle seule beaucoup de travail et de
      développement. C'est mon projet le plus difficile mais aussi celui qui est
      le plus abouti. ListX étant un projet amateur, celui-ci n'est pas
      disponible en téléchargement et n'est désormais plus en développement.
    </p>
  </Fragment>
);
