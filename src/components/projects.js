import React from 'react';
import '../styles/projects.css';

const projects=[
    {
        id:1,
        title:'React Portfolio',
        Description :"My basic React project learning react framework"
    },
    {
        id:2,
        title:'AI & Machine learning Models',
        Description :"Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah"
    }
];

const Projects = () => (
    <section id ='projects'>
        <h2>My projects</h2>
        <div className="projects-container">
            {
                projects.map(project =>(
                    <div key={project.id} className="project">
                        <h3>{project.title}</h3>
                        <p>{project.Description}</p>
                    </div>
                ))
            }
        </div>
    </section>
);

export default Projects;