import SkillItem from "../components/home/SkillItem.js";
import { SkillsList } from "../data/SkillsList.js";
import photo from "../assets/photo cv.jpg";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="homecontent">
      <div className="home">
        <div className="img-cover"></div>
        <div className="skills">
          <h3>Compétences</h3>
          <ul className="skill-list">
            {SkillsList.map(
              ({ skillName, logo, category, type, niveau, link }) => {
                if (link !== "none") {
                  return (
                    <a
                      href={link}
                      target="_blank"
                      rel="noreferrer"
                      key={skillName}
                    >
                      <SkillItem
                        skillName={skillName}
                        logo={logo}
                        category={category}
                        type={type}
                        niveau={niveau}
                      />
                    </a>
                  );
                } else
                  return (
                    <SkillItem
                      key={skillName}
                      skillName={skillName}
                      logo={logo}
                      category={category}
                      type={type}
                      niveau={niveau}
                    />
                  );
              }
            )}
          </ul>
        </div>

        <div className="presentation">
          <img
            className="profile-picture"
            src={photo}
            alt="profile"
            height="450px"
          />
          <div className="description">
            <p>
              Passionné d’électronique et d’informatique, je suis un « touche à
              tout » qui aime apprendre en autodidacte.
            </p>
            <br />
            <p>
              Ainsi, j’ai pu développer de nombreuses compétences dans ces deux
              domaines, ce qui me permet aujourd’hui d’analyser, de
              diagnostiquer et de corriger un certain nombre de problèmes pour
              tout type d’appareil électronique et informatique.
            </p>
            <br />
            <p>
              Admis à l’
              <a
                target="_blank"
                className="esgi"
                href="https://www.esgi.fr/"
                rel="noreferrer"
              >
                ESGI
              </a>{" "}
              pour mes études, je m’intéresse notamment au développement web et
              à la blockchain. Je suis donc actuellement en train d’apprendre
              différents langages tels que Solidity pour la création de Smart
              Contract et les langages web tel que HTML, CSS et JavaScript.
            </p>
            <br />
            <p>
              Pour en savoir plus, sur mon parcours, consultez la section « 
              <Link to="/qui-suis-je">Qui suis-je</Link> ».
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
