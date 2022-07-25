import ProjectItem from "../components/portfolio/ProjectItem";
import { ProjectList } from "../data/ProjectList";

function Portfolio() {
  return (
    <div className="portfolio">
      <div>
        <ul className="project-list">
          {ProjectList.map(({ name, type, langage, category, cover }) => {
            return (
              <ProjectItem
                name={name}
                type={type}
                langage={langage}
                categroy={category}
                cover={cover}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Portfolio;
