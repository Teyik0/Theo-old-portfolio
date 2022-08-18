import ProjectItem from "../components/portfolio/ProjectItem";
import { ProjectList } from "../data/ProjectList";
import { Link } from "react-router-dom";

function Portfolio() {
  return (
    <div className="portfolio">
      <div>
        <div className="project-list">
          {ProjectList.map(
            ({ name, type, langage, category, videolink, id, cover }) => {
              if (id === "videoconnectinnov" || id === "tiktactoe") {
                return (
                  <a
                    key={id}
                    href={videolink}
                    target="_blank"
                    rel="noreferrer"
                    className="nav-item"
                  >
                    <ProjectItem
                      name={name}
                      type={type}
                      langage={langage}
                      category={category}
                      videolink={videolink}
                      cover={cover}
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
                      cover={cover}
                      key={id}
                    />
                  </Link>
                );
              }
            }
          )}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
