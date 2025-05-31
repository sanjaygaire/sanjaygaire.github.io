import React from "react";

export default function About() {
  return (
    <section id="about" className="container my-5">
      <h2 className="mb-4 text-center">More About Me</h2>

      <p>
        👋 Hi, I’m <strong>Sanjay Gaire</strong>.  
        🎯 I'm a curious developer passionate about <strong>Systems Design, Backend Development, Android App Development, and AI systems.</strong> I also dabble in game development for fun—and I'm currently gearing up for <strong>GMTK Game Jam 2025!</strong>
      </p>

      <hr />

      <div className="row">
        <div className="col-md-6">
          <h4>🚀 Currently Learning</h4>
          <ul>
            <li>Django REST Framework for building scalable APIs</li>
            <li>Kotlin for modern Android development</li>
            <li>Rust for safe and performant systems programming</li>
          </ul>

          <h4>🧠 Exploring</h4>
          <ul>
            <li>Real-time systems (WebSockets, Redis)</li>
            <li>Modular backend architectures</li>
            <li>AI-driven tools and creative automation</li>
          </ul>
        </div>

        <div className="col-md-6">
          <h4>🎮 Game Development</h4>
          <ul>
            <li>Practicing with Pygame and Godot</li>
            <li>Preparing for GMTK Game Jam 2025</li>
          </ul>

          <h4>🤝 Let’s Collaborate</h4>
          <p>Open to teaming up on:</p>
          <ul>
            <li>🛠 Open source projects</li>
            <li>🕹 Game jams and creative coding</li>
            <li>🚀 Emerging tech prototypes</li>
          </ul>
        </div>
      </div>

      <hr />

      <h4>🧰 Tech Stack</h4>
      <div className="row">
        <div className="col-md-6">
          <p><strong>Languages:</strong> Python, Kotlin, C, C++, Rust, JavaScript</p>
          <p><strong>Frameworks:</strong> Django, Django REST Framework</p>
          <p><strong>Mobile:</strong> Android (Kotlin)</p>
        </div>
        <div className="col-md-6">
          <p><strong>Databases:</strong> PostgreSQL, SQLite, Firebase</p>
          <p><strong>Tools:</strong> Git, Docker, Linux, Postman, Pygame</p>
          <p><strong>Fun:</strong> Godot</p>
        </div>
      </div>
    </section>
  );
}
