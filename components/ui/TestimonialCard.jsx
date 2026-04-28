import { Quote } from "lucide-react";

export default function TestimonialCard({ title, quote, author, role }) {
  return (
    <article className="testimonial-card">
      <div className="testimonial-header">
        <h3 className="testimonial-title">{title}</h3>
        <span className="testimonial-rating">★★★★★</span>
      </div>
      <p className="testimonial-quote">{quote}</p>
      <div className="testimonial-footer">
        <div className="testimonial-author">
          <div className="testimonial-avatar" />
          <div>
            <p className="testimonial-author-name">{author}</p>
            <p className="testimonial-author-role">{role}</p>
          </div>
        </div>
        <Quote className="testimonial-quote-icon" strokeWidth={2.6} />
      </div>
    </article>
  );
}