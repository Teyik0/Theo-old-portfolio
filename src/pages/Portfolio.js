import ProjectItem from "../components/portfolio/ProjectItem";
import { ProjectList } from "../data/ProjectList";

function Portfolio() {
  return (
    <div className="portfolio">
      <div>
        <ul className="project-list">
          {ProjectList.map(
            ({ name, type, langage, category, cover, content }) => {
              return (
                <ProjectItem
                  name={name}
                  type={type}
                  langage={langage}
                  category={category}
                  cover={cover}
                  content={content}
                />
              );
            }
          )}
        </ul>
      </div>
    </div>
  );
}

export default Portfolio;
