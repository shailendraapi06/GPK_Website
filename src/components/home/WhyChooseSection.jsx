import { whyChooseFeatures, whyChooseSectionContent } from "../../data/home/whyChoose";
import { Container } from "../layout/Container";
import { Section } from "../../layouts/Section";
import { FeatureCard } from "./FeatureCard";

export function WhyChooseSection() {
  return (
    <Section className="home-section why-choose-section" aria-labelledby="why-choose-title">
      <Container>
        <div className="why-choose-section__inner">
          <header className="why-choose-section__header">
            <p className="why-choose-section__eyebrow">Institutional Strengths</p>
            <h2 id="why-choose-title" className="why-choose-section__title">
              {whyChooseSectionContent.title}
            </h2>
            <p className="why-choose-section__subtitle">{whyChooseSectionContent.subtitle}</p>
          </header>

          <div className="why-choose-grid" role="list" aria-label="Why choose Government Polytechnic Kanpur">
            {whyChooseFeatures.map((feature) => (
              <div key={feature.id} role="listitem">
                <FeatureCard {...feature} />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
