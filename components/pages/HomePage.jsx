import Image from "next/image";
import Button from "@/components/ui/Button";
import MotionSection from "@/components/ui/MotionSection";
import QuoteBlock from "@/components/ui/QuoteBlock";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceCard from "@/components/ui/ServiceCard";
import TextField from "@/components/ui/TextField";
import WorldMapSection from "@/components/ui/WorldMapSection";
import { media } from "@/data/media";
import { homeNationwideThumbs, homeServices } from "@/data/siteData";
import "./pages.css"

const homeCollage = [
  { image: media.collageOne, alt: "Bricklayer on site" },
  { image: media.collageTwo, alt: "Craftsperson wearing hearing protection" },
  { image: media.collageThree, alt: "Room under renovation" },
  { image: media.collageFour, alt: "Technician working on a ladder" }
];

export default function HomePage() {
  return (
    <main>
      <section className="hero-section">
        <div className="section-shell">
          <MotionSection className="hero-content">
            <h1 className="hero-title">
              Trusted Handyman
              <br />
              Services at Your Fingertips
            </h1>
            <p className="hero-subtitle">
              Quick fixes, professional help - anytime, anywhere.
            </p>
            <div className="hero-buttons">
              <Button href="/signup" size="lg">
                Create Account
              </Button>
              <Button href="/jobs" variant="secondary" size="lg">
                Find Handyman
              </Button>
            </div>
          </MotionSection>
        </div>
      </section>

      <section id="services" className="section-gap bg-surface">
        <div className="section-shell">
          <MotionSection>
            <SectionHeading
              accent="Featured"
              suffix="Services"
              subtitle="Essential Repairs That Keep Life Running Smoothly."
            />
          </MotionSection>
          <div className="features-grid">
            {homeServices.map((service, index) => (
              <MotionSection key={service.title} delay={index * 0.08}>
                <ServiceCard
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                  featured={service.featured}
                />
              </MotionSection>
            ))}
          </div>
        </div>
      </section>

      <section className="section-gap bg-surface">
        <div className="section-shell">
          <MotionSection>
            <SectionHeading
              suffix="How it Works"
              subtitle="At Oga Repair, we make it easy for you to find trusted handymen and skilled technicians for all your home and office repair needs. Here's how it works:"
            />
          </MotionSection>
          <div className="how-it-works-grid">
            <MotionSection className="how-it-works-content">
              <h3 className="how-it-works-title">Tell Us What You Need</h3>
              <p className="how-it-works-description">
                Choose from a wide range of services — plumbing, electrical, painting, furniture
                assembly, AC repairs, and more. Whether it&apos;s a quick fix or a full setup,
                we&apos;ve got you covered.
              </p>
            </MotionSection>
            <MotionSection delay={0.1}>
              <div className="how-it-works-image">
                <Image
                  src={media.heroSupport}
                  alt="Support specialists helping customers"
                  className="h-auto w-full object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </MotionSection>
          </div>
        </div>
      </section>

      <section className="bg-surface">
        <div className="booking-grid">
          <div className="booking-image-wrapper">
            <Image
              src={media.bookingTools}
              alt="Repair tools arranged on a wall"
              fill
              className="booking-image"
              sizes="(max-width: 1024px) 100vw, 56vw"
            />
          </div>
          <MotionSection className="booking-content">
            <div className="booking-inner">
              <h3 className="booking-title">Book a Professional</h3>
              <p className="booking-description">
                Enter your preferred time and location. We&apos;ll match you with a qualified,
                background-checked technician in your area. You&apos;ll see the price upfront,
                with no hidden fees.
              </p>
              <Button href="/signup" className="booking-button">
                Get Started
              </Button>
            </div>
          </MotionSection>
        </div>
      </section>

      <section className="section-gap bg-surface">
        <div className="section-shell">
          <MotionSection>
            <div className="collage-grid">
              {homeCollage.map((item, index) => (
                <div
                  key={item.alt}
                  className="collage-item"
                >
                  <Image
                    src={item.image}
                    alt={item.alt}
                    className="collage-image"
                    sizes="(max-width: 640px) 50vw, 18vw"
                  />
                </div>
              ))}
            </div>
          </MotionSection>
          <MotionSection className="center-text-wrapper">
            <h2 className="center-title">
              Get It Done, <span className="center-title-accent">Hassle</span>-Free
            </h2>
            <p className="center-subtitle">
              Our technician arrives on time, completes the job with professional tools and
              quality materials, and ensures everything is working perfectly before leaving.
            </p>
          </MotionSection>
        </div>
      </section>

      <section className="section-gap bg-surface">
        <div className="section-shell">
          <MotionSection>
            <WorldMapSection
              prefix="Serving Homes and Offices"
              suffix="Nationwide"
              subtitle="Expert Service, From Your Living Room to Your Boardroom"
            >
              <div className="nationwide-thumbs">
                {homeNationwideThumbs.map((item) => (
                  <div key={item.title} className="thumb-item">
                    <Image
                      src={item.image}
                      alt={item.title}
                      className="thumb-image"
                    />
                  </div>
                ))}
              </div>
            </WorldMapSection>
          </MotionSection>
        </div>
      </section>

      <section id="testimonials" className="bg-surface pb-8 pt-6">
        <div className="section-shell">
          <MotionSection>
            <QuoteBlock
              quote="We use Oga Repair for all our office maintenance needs. Reliable, efficient, and easy to work with"
              author="Akunne Jecinta"
              role="Entrepreneur"
              avatar={media.testimonialAvatar}
            />
          </MotionSection>
        </div>
      </section>

      <section id="contact" className="section-gap bg-surface pt-10">
        <div className="section-shell contact-grid">
          <MotionSection>
            <div className="contact-image-wrapper">
              <Image
                src={media.contactTools}
                alt="Workbench with hand tools"
                className="contact-image"
                sizes="(max-width: 1024px) 100vw, 42vw"
              />
            </div>
          </MotionSection>
          <MotionSection delay={0.08}>
            <form className="contact-form" action="#">
              <TextField
                id="name"
                name="name"
                placeholder="Your Name"
                inputClassName="contact-input"
              />
              <TextField
                id="email"
                name="email"
                type="email"
                placeholder="Your Email"
                inputClassName="contact-input"
              />
              <TextField
                id="message"
                name="message"
                placeholder="Your Message"
                textarea
                inputClassName="contact-input"
              />
              <div className="form-button-wrapper">
                <Button type="submit" className="px-9">
                  Send Message
                </Button>
              </div>
            </form>
          </MotionSection>
        </div>
      </section>
    </main>
  );
}