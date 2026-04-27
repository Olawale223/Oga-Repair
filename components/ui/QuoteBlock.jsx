import Image from "next/image";

export default function QuoteBlock({ quote, author, role, avatar }) {
  return (
    <section className="testimonial-outline mx-auto max-w-[1240px] px-4 py-10 sm:px-10 sm:py-16">
      <div className="mx-auto flex max-w-[780px] flex-col items-center gap-10 py-8 text-center sm:py-12">
        <blockquote className="text-balance text-[2rem] font-semibold leading-tight text-ink sm:text-[2.8rem]">
          “{quote}”
        </blockquote>
        <div className="flex items-center gap-5">
          <Image
            src={avatar}
            alt={author}
            className="h-16 w-16 rounded-[14px] object-cover"
          />
          <div className="text-left">
            <p className="text-xl font-semibold text-ink">{author}</p>
            <p className="text-lg text-mutedDark">{role}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
