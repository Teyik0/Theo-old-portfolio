function Robotsuiveur() {
  return (
    <div className="robotsuiveur-content">
      <h1>Robot Suiveur - Terminale S-SI - 2018/2019</h1>
      <div className="robotsuiveur-description">
        <div className="block img robotsuiveur1"></div>
        <p className="block p1">
          Pour ma dernière année de lycée, nous devions faire un projet
          embarqué, avec mon groupe. En ce sens, nous avons choisi de réaliser
          un cartable suiveur. Ce projet était très ambitieux, le robot devait
          être capable de suivre l'utilisateur, en plus d'être capable d'éviter
          tout potentiel obstacle.
        </p>
        <div className="block img robotsuiveur2"></div>
        <p className="block p2">
          Difficulté supplémentaire, celui-ci devait être fait avec des cartes
          Arduino. Or, ces cartes ne permettent pas le parallélisme ; nous avons
          ainsi été obligés de prendre trois cartes Arduino chacune pour
          s'occuper d'une tâche donnée. Une carte devait s'occuper de localiser
          l'utilisateur, une autre se devait d'analyser les obstacles, et la
          dernière carte devait centraliser les informations des deux autres
          pour donner les instructions de mouvement aux moteurs.
        </p>
        <div className="block img robotsuiveur3"></div>
        <p className="block p3">
          Deuxième difficulté, nous devions localiser l'utilisateur par
          Bluetooth. Pour ce faire, le robot était équipé de 3 modules
          Bluetooth, tous pointant sur l'adresse mac du module Bluetooth du
          téléphone de l'utilisateur. En effet, cela permettait d'effectuer une
          mesure de la puissance du signal dans chaque direction (gauche,
          droite, milieu) afin de savoir où était l'utilisateur par rapport au
          robot.
        </p>
        <div className="block img robotsuiveur4"></div>
        <p className="block p4">
          Bien que ce projet avançait plutôt bien, celui-ci était trop ambitieux
          pour pouvoir être terminé en une seule année. En revanche, chacune des
          cartes Arduino était capable d'assurer sa fonction. Il ne restait plus
          qu'à centraliser les informations et faire les derniers tests pour
          finaliser ce projet.
        </p>
      </div>
    </div>
  );
}

export default Robotsuiveur;
