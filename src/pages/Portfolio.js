import ProjectItem from "../components/portfolio/ProjectItem";
import { ProjectList } from "../data/ProjectList";
import { Link } from "react-router-dom";

function Portfolio() {
  return (
    <div className="portfolio">
      <div>
        <div className="project-list">
          {ProjectList.map(
            ({ name, type, langage, category, videolink, id, cover, url }) => {
              if (url) {
                return (
                  <a key={id} href={url} target="_blank" rel="noreferrer">
                    <ProjectItem
                      name={name}
                      category={category}
                      videolink={videolink}
                      cover={cover}
                    />
                  </a>
                );
              } else {
                return (
                  <Link key={id} to={"/portfolio/" + id}>
                    <ProjectItem
                      name={name}
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
