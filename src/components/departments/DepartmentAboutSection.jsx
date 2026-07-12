export function DepartmentAboutSection({ about }) {
  return (
    <section className="department-detail-section" aria-labelledby="department-about-title">
      <div className="department-detail-section__heading">
        <p className="department-detail-section__eyebrow">Overview</p>
        <h2 id="department-about-title" className="department-detail-section__title">
          {about.heading}
        </h2>
      </div>

      <div className="department-about">
        <div className="department-about__content">
          {about.summary.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <div className="department-about__focus surface">
          <h3 className="department-about__focus-title">Key Focus Areas</h3>
          <ul className="department-about__focus-list">
            {about.focusAreas.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
