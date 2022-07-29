import ProjectItem from "../components/portfolio/ProjectItem";
import { ProjectList } from "../data/ProjectList";

function Portfolio() {
  return (
    <div className="portfolio">
      <div>
        <ul className="project-list">
          {ProjectList.map(
            ({ name, type, langage, category, videolink, id }) => {
              if (videolink !== "none") {
                return (
                  <a href={videolink} key={id} target="_blank" rel="noreferrer">
                    <ProjectItem
                      name={name}
                      type={type}
                      langage={langage}
                      category={category}
                      videolink={videolink}
                    />
                  </a>
                );
              } else {
                return (
                  <ProjectItem
                    name={name}
                    type={type}
                    langage={langage}
                    category={category}
                    videolink={videolink}
                    key={id}
                  />
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
