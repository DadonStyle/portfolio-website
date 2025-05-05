import { useState, useEffect } from "react";
import { textsImgsArr } from "./helper";
import Glitch from "../../components/Glitch/Glitch";
import S from "./styled";

const Projects = () => {
  const [projects, setProjects] = useState(textsImgsArr);
  const [bouncingIndexes, setBouncingIndexes] = useState<number[]>([]);

  const handleDragStart = (
    e: React.DragEvent<HTMLDivElement>,
    index: number
  ) => {
    e.dataTransfer.setData("draggedIndex", index.toString());
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>, index: number) => {
    const draggedIndex = e.dataTransfer.getData("draggedIndex");
    if (draggedIndex === null) return;

    const updatedProjects = [...projects];
    const [draggedItem] = updatedProjects.splice(parseInt(draggedIndex, 10), 1);
    updatedProjects.splice(index, 0, draggedItem);

    setProjects(updatedProjects);
    setBouncingIndexes([parseInt(draggedIndex, 10), index]);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  useEffect(() => {
    if (bouncingIndexes.length > 0) {
      const timer = setTimeout(() => setBouncingIndexes([]), 2000);
      return () => clearTimeout(timer);
    }
  }, [bouncingIndexes]);

  return (
    <>
      <S.HeaderWrapper>
        <Glitch text={"Projects Highlights"} />
      </S.HeaderWrapper>
      <S.BodyWrapper>
        {projects.map((project, index) => (
          <S.ProjectCard
            key={index}
            draggable
            onDragStart={(e) => handleDragStart(e, index)}
            onDrop={(e) => handleDrop(e, index)}
            onDragOver={handleDragOver}
            className={bouncingIndexes.includes(index) ? "bouncing" : ""}
          >
            <S.ProjectImage src={project.img} alt={project.name} />
            <S.ProjectDetails>
              <S.ProjectName>{project.name}</S.ProjectName>
              <S.ProjectDescription>{project.desc}</S.ProjectDescription>
              <S.ProjectTech>Tech Stack: {project.tech}</S.ProjectTech>
              <S.ProjectLink
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </S.ProjectLink>
            </S.ProjectDetails>
          </S.ProjectCard>
        ))}
      </S.BodyWrapper>
    </>
  );
};

export default Projects;
