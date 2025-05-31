const skills = [
  'React',
  'JavaScript',
  'Bootstrap',
  'Python',
  'Django',
  'C++',
  'Git',
  'HTML',
  'CSS',
];

export default function Skills() {
  return (
    <section id="skills" className="container my-5">
      <h2 className="mb-4 text-center">Skills</h2>
      <div className="d-flex flex-wrap justify-content-center gap-3">
        {skills.map((skill, idx) => (
          <span
            key={idx}
            className="badge bg-primary fs-6 px-3 py-2"
            data-aos="zoom-in"
            data-aos-delay={idx * 100}
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
