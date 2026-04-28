import Image from "next/image";

export default function QuoteBlock({ quote, author, role, avatar }) {
  return (
    <section className="quote-block">
      <div className="quote-block-inner">
        <blockquote className="quote-text">“{quote}”</blockquote>
        <div className="quote-author">
          <Image src={avatar} alt={author} className="quote-avatar" />
          <div className="quote-author-info">
            <p className="quote-author-name">{author}</p>
            <p className="quote-author-role">{role}</p>
          </div>
        </div>
      </div>
    </section>
  );
}