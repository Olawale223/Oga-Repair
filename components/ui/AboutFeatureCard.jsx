export default function AboutFeatureCard({ title, description, icon: Icon }) {
  return (
    <article className="about-feature-card">
      <div className="about-feature-icon-wrapper">
        <Icon className="about-feature-icon" strokeWidth={1.8} />
      </div>
      <div className="about-feature-content">
        <h3 className="about-feature-title">{title}</h3>
        <p className="about-feature-description">{description}</p>
      </div>
    </article>
  );
}