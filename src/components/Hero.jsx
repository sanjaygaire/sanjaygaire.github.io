export default function Hero() {
  return (
    <section
      id="hero"
      className="d-flex flex-column justify-content-center align-items-center"
      style={{ height: '100vh', textAlign: 'center', padding: '0 1rem', maxWidth: '600px', margin: 'auto' }}
    >
      <h1 data-aos="fade-down" className="mb-3">Hi, I'm Sanjay Gaire</h1>
      <p data-aos="fade-up" className="mb-4 fs-5">
        My journey started in Nepal, driven by curiosity and passion for programming. From exploring simple Python scripts to building interactive web apps with React, I constantly strive to learn and improve.
      </p>
      <p data-aos="fade-up" data-aos-delay="200" className="mb-4 fs-5">
        Today, I focus on creating clean, modern web experiences and expanding my skills in full-stack development.
      </p>
      <a href="#projects" className="btn btn-primary btn-lg" data-aos="zoom-in" data-aos-delay="400">
        Check out my projects
      </a>
    </section>
  );
}
