import React from 'react';

const ProjectCard = ({ title, description, imgUrl }) => {
  return (
    <div className="project-card">
      <img src={imgUrl} alt={title} />
      <center><h3>{title}</h3></center>
      <p>{description}</p>
    </div>
  );
};

export default ProjectCard;

