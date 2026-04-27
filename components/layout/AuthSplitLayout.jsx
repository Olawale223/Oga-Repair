import Image from "next/image";
import "./component.css";

export default function AuthSplitLayout({ image, imageAlt, children }) {
  return (
    <main className="main">
      <section className="section-left">
        <div className="content-wrapper">{children}</div>
      </section>
      <section className="section-right">
        <div className="auth-photo-mask">
          <Image
            src={image}
            alt={imageAlt}
            fill
            priority
            className="image-cover"
            sizes="50vw"
          />
        </div>
      </section>
    </main>
  );
}
