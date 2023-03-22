import React from 'react'
import ProjectItem from './ProjectItem'

function ProjectList(props) {



  return (
    <>
        {props.projectsFilter.map((project) => (
        <ProjectItem key={project.id} {... project} />
      ))}
    </>
  )
}

export default ProjectList