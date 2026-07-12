function FeatureIcon({ icon }) {
  const icons = {
    faculty: (
      <path
        d="M12 4L20 8L12 12L4 8L12 4ZM7 10.5V14.5C7 16.2 9.2 17.5 12 17.5C14.8 17.5 17 16.2 17 14.5V10.5M20 8V13"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
    laboratory: (
      <path
        d="M10 4V9.5L5.5 17C5 17.8 5.6 19 6.6 19H17.4C18.4 19 19 17.8 18.5 17L14 9.5V4M9 9H15"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
    curriculum: (
      <path
        d="M7 5.5H17C18.1 5.5 19 6.4 19 7.5V16.5C19 17.6 18.1 18.5 17 18.5H7C5.9 18.5 5 17.6 5 16.5V7.5C5 6.4 5.9 5.5 7 5.5ZM8.5 9H15.5M8.5 12H15.5M8.5 15H13"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
    placement: (
      <path
        d="M4 18H20M6.5 18V11M12 18V7M17.5 18V13M5 8L8.5 5L12 9L19 4.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
    government: (
      <path
        d="M12 4L20 8V9.5H4V8L12 4ZM6 10.5V16.5M10 10.5V16.5M14 10.5V16.5M18 10.5V16.5M4 19H20"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
    library: (
      <path
        d="M6.5 5H10.5V19H6.5C5.7 19 5 18.3 5 17.5V6.5C5 5.7 5.7 5 6.5 5ZM13.5 5H17.5C18.3 5 19 5.7 19 6.5V17.5C19 18.3 18.3 19 17.5 19H13.5V5Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    )
  };

  return (
    <span className="feature-card__icon" aria-hidden="true">
      <svg viewBox="0 0 24 24" role="img">
        {icons[icon] || icons.faculty}
      </svg>
    </span>
  );
}

export function FeatureCard({ title, description, icon }) {
  return (
    <article className="feature-card surface">
      <FeatureIcon icon={icon} />
      <div className="feature-card__content">
        <h3 className="feature-card__title">{title}</h3>
        <p className="feature-card__description">{description}</p>
      </div>
    </article>
  );
}
