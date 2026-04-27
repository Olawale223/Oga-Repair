import Image from "next/image";
import MotionSection from "@/components/ui/MotionSection";
import AboutFeatureCard from "@/components/ui/AboutFeatureCard";
import FaqAccordion from "@/components/ui/FaqAccordion";
import SectionHeading from "@/components/ui/SectionHeading";
import TestimonialCard from "@/components/ui/TestimonialCard";
import WorldMapSection from "@/components/ui/WorldMapSection";
import { media } from "@/data/media";
import { aboutFeatures, aboutTestimonials, faqItems } from "@/data/siteData";
import "./pages.css"
export default function AboutPage() {
  return (
    <main className="bg-surface">
      <section className="about-hero">
        <div className="section-shell">
          <MotionSection>
            <h1 className="about-hero-title">About Oga Repair</h1>
          </MotionSection>
        </div>
      </section>

      <section className="section-gap">
        <div className="section-shell">
          <div className="about-grid">
            <MotionSection>
              <h2 className="about-heading">Who we are</h2>
            </MotionSection>
            <MotionSection delay={0.06}>
              <div className="about-text">
                <p>
                  At Oga Repair, we believe that fixing your home or office shouldn’t be
                  stressful. Whether it’s a leaking tap, faulty wiring, broken furniture, or a
                  full AC installation, we connect you with trusted technicians who get the job
                  done – properly and on time.
                </p>
                <p>
                  We started Oga Repair with one simple goal: to make quality repair services
                  accessible to everyone, everywhere. Too often, finding a reliable handyman feels
                  like a gamble. We’re changing that by building a platform that combines speed,
                  transparency, and trust.
                </p>
              </div>
            </MotionSection>
          </div>

          <MotionSection className="about-image-wrapper">
            <Image
              src={media.aboutHero}
              alt="Craftsperson carefully working on wood"
              className="about-image"
              sizes="100vw"
            />
          </MotionSection>
        </div>
      </section>

      <section className="section-gap pt-10">
        <div className="section-shell">
          <MotionSection>
            <SectionHeading
              suffix="What We Do"
              subtitle="Whether you book online or through our mobile app, you get:"
            />
          </MotionSection>
          <div className="features-grid">
            {aboutFeatures.map((feature, index) => (
              <MotionSection key={feature.title} delay={index * 0.05}>
                <AboutFeatureCard {...feature} />
              </MotionSection>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="section-gap">
        <div className="section-shell">
          <MotionSection className="testimonials-wrapper">
            <SectionHeading
              suffix="Testimonials"
              subtitle="Reviews and feedback from our customers"
              titleClassName="text-surface"
              subtitleClassName="text-white/88"
              className="text-surface"
            />
            <div className="testimonials-grid">
              {aboutTestimonials.map((item, index) => (
                <MotionSection key={`${item.author}-${index}`} delay={index * 0.04}>
                  <TestimonialCard {...item} />
                </MotionSection>
              ))}
            </div>
          </MotionSection>
        </div>
      </section>

      <section className="section-gap pt-8">
        <div className="section-shell">
          <MotionSection>
            <SectionHeading
              suffix="Frequently Asked Questions"
              subtitle="Get answers to the frequently most asked questions"
            />
          </MotionSection>
          <MotionSection className="faq-wrapper">
            <FaqAccordion items={faqItems} />
          </MotionSection>
        </div>
      </section>

      <section className="section-gap pt-6">
        <div className="section-shell">
          <MotionSection>
            <WorldMapSection className="space-y-0" />
          </MotionSection>
        </div>
      </section>
    </main>
  );
}