// src/components/Projects.jsx
import React from "react";

const projects = [
  {
    id: 1,
    title: "Portfolio Site",
    description: "My portfolio made with React and Bootstrap.",
    // liveDemo: "https://sanjaygaire.github.io/portfolio/",
    repo: "https://github.com/sanjaygaire/sanjaygaire.github.io",
  },
  
];

export default function Projects() {
  return (
    <section id="projects" className="container my-5">
      <h2 className="mb-4 text-center">Projects</h2>
      <div className="row">
        {projects.map((project) => (
          <div key={project.id} className="col-md-6 mb-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text flex-grow-1">{project.description}</p>
                <div>
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-secondary"
                  >
                    GitHub Repo
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
