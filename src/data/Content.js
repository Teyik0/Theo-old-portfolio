import { Fragment } from 'react';
import connectinnov from '../assets/projets/tablekids/connectinnov.png';

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

export const contentVCI = (
  <Fragment>
    <p>
      Au cours de mon stage de fin d'étude ayant pour objectif de valider mon
      DUT, j’ai effectué un montage vidéo pour mon entreprise, Connect Innov. A
      ce moment, je n’avais encore jamais réalisé de montage vidéo. J'ai ainsi
      appris à utiliser Adobe Premiere Pro et développer mes compétences en
      montage vidéo.
    </p>
  </Fragment>
);

export const contentTWS = (
  <Fragment>
    <p>
      La version 1.0 de mon site est enfin disponible ! Celui-ci a été créé en
      vu de montrer mes compétences en développement web via le framework
      reactjs. En effet, entrant à l'ESGI en Octobre 2022 avec la spécialité
      ingénieur en blockchain, j'ai pris l'initiative d'apprendre en autodidacte
      de zéro tout ce qu'il y a savoir dans le domaine du web afin de devenir
      assez expérimenté en vu de m'orienter dans le monde du web3.
    </p>
    <p>
      Ce site est donc un pas pour moi pour trouver une alternance et exposer
      aux entreprises mon savoir faire et par le même temps mon portfolio. En
      effet, il y a deux mois de cela, débuit juillet 2022, je n'avais encore
      aucune compétence dans le domaine du web bien que j'avais des compétences
      avancé dans les langages C et C++.
    </p>
    <p>
      Or, à terme, mon objectif est de participer activement à la révolution
      web3 qui se met en place et donc de créer des Dapps (Décentralized
      application).
    </p>
    <span>Avec quoi ce site à été réalisé ?</span>
    <p>
      Ce site est entièrement réalisé from scratch (à partir de zéro) avec
      reactjs. Ce site est donc une application web, cela le rend extrêmement
      rapide grâce au système de composant.
    </p>
    <span>Quels sont les difficultés que j'ai pu rencontré ?</span>
    <p>
      Une des difficultés fut de réaliser les animations pour les icones sur la
      page d'accueil et l'animation pour les projets sur la page du portfolio.
      Ensuite, la partie responsive. En effet, modifier tout le style pour que
      tout s'affiche correctement sur tous les appareils est très chronophage.
    </p>
    <p>
      Enfin, la partie la plus longue et qui m'a demandé le plus de réflexion
      est la partie article. Chaque projet sur la page portfolio redirige vers
      un article qui récapitule celui-ci. Je voulais que chaque projet est un
      article dédié pour montrer et expliquer ce que j'ai pu faire. De plus je
      voulais que l'intégration de nouveau projet soit simple pour moi. Ainsi la
      logique d'intégration est rapide et efficace. Cela me permettra à l'avenir
      de rajouter d'autres projets sur lesquelles je vais travailler et de les
      partager efficacement.
    </p>
    <span>Pourquoi reactjs ?</span>
    <p>
      Bien qu'au début je voulais créer ce site avec Wordpress, je ne m'amusais
      pas et ne tirais aucune fierté personnel lors de la création de celui-ci.
      En effet, Wordpress est efficace mais ne pose aucune difficulté et ne
      m'apprends pas plus la programmation. Autre problème, Wordpress reste
      limité en terme de personnalisation si on ne souhaite pas payer. De plus,
      pour interfacer mes futurs Smart Contract avec mes futurs sites, react est
      absolument nécessaire et est aussi le framework le plus utilisé pour la
      création de Dapps.
    </p>
    <span>Conclusion</span>
    <p>
      Ce projet est ma pépite. C'est à l'heure ou j'écris ces lignes celui sur
      lequel j'ai le plus travaillé, celui qui m'a permis d'apprendre le plus de
      chose. En effet, il y a facilement plus de 60h de travaille en terme de
      codage pure. Or en parallèle de la création de celui-ci j'apprenais en
      même temps à utiliser reactjs et javascript. Ainsi lorsque je manquais de
      connaissance pour faire quelque chose que je souhaitais faire, je
      réalisais un autre projet type assez simple pour trouver une solution.
    </p>
  </Fragment>
);

export const contentTicTacToe = (
  <Fragment>
    <p>
      Un simple Tic Tac Toe (ou Morpion) réalisé entièrement avec reactjs en vu
      de m'entrainer à utiliser les hooks de base comme le useEffect et le
      useState permettant la mise à jour des composants dans le DOM sans
      rafraichir la page.
    </p>
    <p>
      Ce petit projet bien que paraissant assez simple demande un peu de
      réflexion quant à sa logique d'implémentation. Ce projet est souvent
      réalisé lors de l'apprentissage de reactjs et de nombreuse solution existe
      sur le net pour le réaliser. De mon côté je n'ai pas regardé de solution
      sur le web et est réfléchi par moi même afin de créer ma propre solution.
    </p>
    <p>
      Le jeu n'est pas responsive mais fonctionne parfaitement. Avec un système
      de compteur de point pour les joueurs et une mise en surbrillance lorsque
      la partie est terminé.
    </p>
    <p>
      Le lien est disponible pour tester le jeu de même que le repository
      (=dépôt) sur github.
    </p>
  </Fragment>
);

export const contentTableKids = (
  <Fragment>
    <p>
      Durant mon stage de fin d'étude pour l'obtention de mon DUT, j'avais
      notamment pour mission l'assemblage et le paramétrage de leur produit
      phare : la Table Kid's.
    </p>
    <p>
      Bien que la Table Kid's ne soit pas un projet personnel, je voulais tout
      de même la présenter sur mon site car c'est un bon produit très bien fini.
    </p>
    <span>Présentation de l'entreprise</span>
    <p>
      ConnectInnov est une start-up dans le domaine du numérique qui a été créé
      en 2014. Ainsi elle propose des solutions tel que la Table Kid's, des
      Totems et autres écrans tactiles.
    </p>
    <p>
      Connect Innov propose un large pannel d'autres produits que je ne vais pas
      détailler ici, vous pouvez retrouvez en bas de cette article un lien vers
      leur site web. Voici ci-dessous une image qui sera plus représentative que
      des mots.
    </p>
    <div className='img'>
      <img src={connectinnov} alt='Produits de Connect Innov' />
    </div>
    <span>Présentation de la Table Kid's</span>
    <p>
      La TableKids est une petite table de 1m² intégrant un écran tactile avec
      des jeux permettant aux parents de faire patienter leurs enfants lors de
      leurs entretiens dans différents endroits comme un opticien par exemple.
      L'objectif étant que :
      <i> "Lorsque les parents shop, les enfants s'amusent"</i>
    </p>
    <p>
      Ainsi, Connect innov réinvente l’espace enfants pour offrir aux
      professionnels et à leur clients (petits et grands), un moment agréable en
      magasin, grâce à un produit ludique et de qualité.
    </p>
  </Fragment>
);

export const contentSrikaStore = (
  <Fragment>
    <p>
      Nouveau projet, et pas des moindres, un site de ecommerce. J'ai appris
      beaucoup de nouvelle chose et ainsi j'ai aggrandi mon stack.
    </p>
    <span>Stack</span>
    <p>
      Pour ce projet, j'ai tout d'abord utilisé le framework NextJS, ce
      framework est un incoutournable pour programmer avec React, il est
      puissant et permet une utilisation simple des APIs et le chargement des
      pages plus efficaces qu'avec une simple application React classique.
    </p>
    <p>
      Ensuite, pour ce projet, j'ai appris le langage Typescript qui est
      incoutournable également. Il permet de typer les variables. Au premier
      abord, j'ai eu l'impression que Typescript complexifiait mon programme
      mais ce langage est très utile pour se rendre compte ou se trouve nos
      erreurs. De ce fait, on ne passe pas 3h à trouver une erreur bête dans le
      programme.
    </p>
    <p>
      Côté UI, j'ai appris le framework Tailwind de plus en plus populaire grâce
      à son efficacité remarquable. Ce framework permet d'augmenter la vitesse
      d'écriture du css et facilite le responsive.
    </p>
    <p>
      Ensuite, au niveau des librairies, j'ai utilisé Zustand qui permet de
      faire à la manière de Redux une gestion des variables en globales et d'y
      avoir accès n'importe où dans le programme. Cependant Zustand est bien
      plus simple et efficace en terme de prise en main que Redux.
    </p>
    <p>
      Pour le backend, j'ai utilisé Sanity qui permet très facilement de créer
      un backend sans connaissance des langages SQL ou PHP et facilite
      grandement la programmation et permet de gagner un temps fou. De plus
      Sanity utilise GROQ pour les appels au niveau de l'API. GROQ est un
      langage de query similaire à GraphQL mais plus simple d'utilisation.
    </p>
    <p>
      Enfin, pour les paiements j'ai utilisé la librairie Stripe, qui permet
      d'intégrer les paiements au site web très facilement.
    </p>
    <span>Qu'est-ce qu'il reste à faire ?</span>
    <p>
      Ce projet n'est actuellement pas complet. En effet, il reste le responsive
      à faire, rajouter la possibilité à l'utilisateur de créer un compte et
      quelques pages d'informations à programmer. De plus les images utilisé
      sont très arbitraire et certaines pas transparente mais j'ai rempli mes
      objectifs avec ce site. Je pense désormais avoir des bases solides en
      développement web. Ainsi, je vais me tourner vers ce que je souhaitais
      faire dès le départ, c'est à dire faire des projets web3.
    </p>
    <p>
      Bien sur, je n'abandonne pas l'idée de terminer ce site un jour, mais ce
      n'est pour l'instant pas mon objectif ni ma priorité.
    </p>
  </Fragment>
);
