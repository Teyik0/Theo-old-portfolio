import Fade from "react-reveal/Fade";

import cv from "../assets/CV alternance.pdf";

function AboutMe() {
  return (
    <div className="aboutme-content">
      <div className="aboutme">
        <Fade left>
          <div className="block p1">
            <p>
              Diplômé du Baccalauréat Scientifique en spécialité science de
              l’ingénieur avec mention bien (note : 15.5/20), je souhaite
              poursuivre mes études dans le domaine de l’informatique et de
              l’électronique. En effet, ayant beaucoup travaillé avec les cartes
              Arduino que ce soit chez moi ou à l’école, j’ai nourri ma passion
              pour ces deux domaines. D’ailleurs, j’ai pu réaliser un projet
              ambitieux pendant ma dernière année de lycée : un robot suiveur.
              Celui-ci devait être capable de suivre l’utilisateur tout en ayant
              la capacité d’éviter les obstacles. Le défi était très intéressant
              car pour ce faire, j’ai utilisé trois modules Bluetooth détectant
              la puissance du signal émis par le téléphone de l’utilisateur,
              afin d’indiquer la direction que doit prendre le robot.
            </p>
          </div>
        </Fade>
        <Fade right>
          <div className="block img-motherboard"></div>
        </Fade>
        <Fade right delay={200}>
          <div className="block p2">
            <p>
              Afin de poursuivre ma passion et mes ambitions, je souhaite à ce
              moment devenir ingénieur car pour moi, l'ingénieur relève au
              quotidien de nouveau défi en alliant curiosité, réflexion et
              passion du métier. J’ai décidé d’aller en école préparatoire
              (CPGE) en spécialité physique technologique et science de
              l’ingénieur (PTSI). Cependant, je ne me retrouvais pas dans cette
              formation qui était trop générale et dans laquelle l’électronique
              et l’informatique étaient peu étudiées. C’est pourquoi à la fin de
              ma première année, je me suis réorienté en DUT GEII (Génie
              Électrique et Informatique Industrielle). J’ai choisi cette
              formation car elle est plus spécifique et axée pratique, en plus
              d’être la plus recherchée par les écoles d’ingénieurs.
            </p>
          </div>
        </Fade>
        <Fade left delay={200}>
          <div className="block img-setup"></div>
        </Fade>
        <Fade left delay={400}>
          <div className="block p3">
            <p>
              {" "}
              Grâce à ce cursus, j’ai développé mes connaissances et compétences
              en électronique et en informatique, en plus d’en acquérir de
              nouvelles. Malgré tout, du côté électronique, la formation s’est
              avérée moins enrichissante que je l’espérais et j’ai donc décidé
              de me diriger vers l’informatique. Dans cet objectif, j’ai
              renforcé mes compétences en C++ et créé un logiciel (se nommant{" "}
              <a
                href="https://www.youtube.com/watch?v=cHFLe5QYoQU&feature=emb_title"
                target="_blank"
                rel="noreferrer"
              >
                ListX
              </a>
              ), qui est une base de données utilisateurs conçue pour le bureau
              des étudiants de mon département, dans lequel j’étais chargé de
              l’événementiel.
            </p>
          </div>
        </Fade>
        <Fade right delay={400}>
          <div className="block img-robotique"></div>
        </Fade>
        <Fade right delay={600}>
          <div className="block p4">
            <p>
              {" "}
              En parallèle de mes études, je me suis beaucoup intéressé à
              l’univers nouveau que représentent la blockchain et les
              cryptomonnaies, et me suis pris de passion pour celui-ci qui
              réunit l’informatique et l’économie. C’est en me renseignant sur
              les écoles post-DUT que j’ai découvert que l’ESGI (École Supérieur
              de Génie Informatique) proposait une formation dans ce domaine.
              J’ai donc décidé de passer le concours pour intégrer cette école.
            </p>
          </div>
        </Fade>
        <Fade left delay={400}>
          <div className="block img-trading"></div>
        </Fade>
        <Fade left delay={600}>
          <div className="block p6">
            <p>
              Actuellement admis dans cette école, je continue de me
              perfectionner en tant que développeur, en apprenant différents
              langages tels que Solidity pour la création de Smart Contract mais
              aussi les langages web tels que le HTML, le CSS et le JavaScript.
              En vue de cette nouvelle année à l’ESGI, je suis à la recherche
              d’une alternance dans le domaine de la blockchain ou du web (3
              semaines en entreprise – 1 semaine à l’école).
            </p>{" "}
            <br />
            <a href={cv} target="_blank" rel="noreferrer">
              Aperçu de mon CV pour l'alternance
            </a>
          </div>
        </Fade>
        <Fade right delay={600}>
          <div className="block img-iot"></div>
        </Fade>
      </div>
    </div>
  );
}

export default AboutMe;
