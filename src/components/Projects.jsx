export default function Projects() {
  return (
    <section id="projects" className="my-5">
      <h2>Projects</h2>
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Project 1</h5>
              <p className="card-text">Short description of your project.</p>
              <a href="#" className="btn btn-primary">View Project</a>
            </div>
          </div>
        </div>
        {/* Add more cards as needed */}
      </div>
    </section>
  );
}
