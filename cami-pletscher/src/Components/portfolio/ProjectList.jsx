import React from 'react'
import ProjectItem from './ProjectItem'

function ProjectList(props) {
  return (
    <div>
        {props.projects.map((project) => (
        <ProjectItem key={project.id} image={project.image} id={project.id} title={project.title} video={project.video} code={project.code} />
      ))}
    </div>
  )
}

export default ProjectList