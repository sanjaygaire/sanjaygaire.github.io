export default function Contact() {
  return (
    <section id="contact" className="container my-5 text-center">
      <h2 className="mb-4">Contact Me</h2>
      <p>Find me on social media!</p>
      <div className="d-flex justify-content-center gap-4 fs-1">
        <a
          href="https://instagram.com/sanjay_gaire404"
          target="_blank"
          rel="noreferrer"
          aria-label="Instagram"
          className="text-decoration-none text-dark"
        >
          <i className="bi bi-instagram"></i>
        </a>
        <a
          href="https://www.facebook.com/gairesanjay404/"
          target="_blank"
          rel="noreferrer"
          aria-label="Facebook"
          className="text-decoration-none text-dark"
        >
          <i className="bi bi-facebook"></i>
        </a>
        <a
          href="https://github.com/sanjaygaire"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
          className="text-decoration-none text-dark"
        >
          <i className="bi bi-github"></i>
        </a>
      </div>
    </section>
  );
}
