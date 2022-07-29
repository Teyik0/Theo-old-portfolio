import ProjectItem from "../components/portfolio/ProjectItem";
import { ProjectList } from "../data/ProjectList";
import { Link } from "react-router-dom";

function Portfolio() {
  return (
    <div className="portfolio">
      <div>
        <ul className="project-list">
          {ProjectList.map(
            ({ name, type, langage, category, videolink, id }) => {
              if (id === "videoconnectinnov") {
                return (
                  <a key={id} href={videolink} target="_blank" rel="noreferrer">
                    <ProjectItem
                      name={name}
                      type={type}
                      langage={langage}
                      category={category}
                      videolink={videolink}
                      key={id}
                    />
                  </a>
                );
              } else {
                return (
                  <Link key={id} className="nav-item" to={"/portfolio/" + id}>
                    <ProjectItem
                      name={name}
                      type={type}
                      langage={langage}
                      category={category}
                      videolink={videolink}
                      key={id}
                    />
                  </Link>
                );
              }
            }
          )}
        </ul>
      </div>
    </div>
  );
}

export default Portfolio;
