import { Container } from "../../components/layout/Container";
import {
  AdmissionsTable,
  Checklist,
  FaqAccordion,
  ProcessTimeline
} from "../../components/admissions";
import {
  admissionFaqs,
  admissionProcess,
  admissionsPageContent,
  coursesOffered,
  eligibilityCriteria,
  feeStructure,
  importantLinks,
  requiredDocuments,
  scholarshipContent
} from "../../data/admissions";
import { Section } from "../../layouts/Section";

const courseColumns = [
  { key: "course", label: "Course" },
  { key: "duration", label: "Duration" },
  { key: "intake", label: "Intake" }
];

const feeColumns = [
  { key: "category", label: "Fee Head" },
  { key: "amount", label: "Amount" },
  { key: "notes", label: "Notes" }
];

export function AdmissionsPage() {
  return (
    <Section className="admissions-page" aria-labelledby="admissions-page-title">
      <Container>
        <div className="admissions-page__header">
          <div className="admissions-page__intro-block">
            <p className="admissions-page__eyebrow">{admissionsPageContent.eyebrow}</p>
            <h1 id="admissions-page-title" className="admissions-page__title">
              {admissionsPageContent.title}
            </h1>
            <p className="admissions-page__intro">{admissionsPageContent.introduction}</p>
          </div>

          <a
            className="admissions-page__primary-link"
            href={admissionsPageContent.officialLink.url}
            target="_blank"
            rel="noreferrer"
          >
            {admissionsPageContent.officialLink.label}
          </a>
        </div>

        <div className="admissions-page__content">
          <section className="admissions-section" aria-labelledby="admissions-courses-title">
            <div className="admissions-section__heading">
              <h2 id="admissions-courses-title">Courses Offered</h2>
            </div>
            <AdmissionsTable
              caption="Courses offered"
              columns={courseColumns}
              rows={coursesOffered}
            />
          </section>

          <div className="admissions-page__split">
            <section className="admissions-section" aria-labelledby="admissions-eligibility-title">
              <div className="admissions-section__heading">
                <h2 id="admissions-eligibility-title">Eligibility Criteria</h2>
              </div>
              <Checklist items={eligibilityCriteria} />
            </section>

            <section className="admissions-section" aria-labelledby="admissions-documents-title">
              <div className="admissions-section__heading">
                <h2 id="admissions-documents-title">Required Documents</h2>
              </div>
              <Checklist items={requiredDocuments} columns={2} />
            </section>
          </div>

          <section className="admissions-section" aria-labelledby="admissions-process-title">
            <div className="admissions-section__heading">
              <h2 id="admissions-process-title">Admission Process</h2>
            </div>
            <ProcessTimeline steps={admissionProcess} />
          </section>

          <div className="admissions-page__split admissions-page__split--wide-right">
            <section className="admissions-section" aria-labelledby="admissions-fee-title">
              <div className="admissions-section__heading">
                <h2 id="admissions-fee-title">Fee Structure</h2>
              </div>
              <AdmissionsTable
                caption="Fee structure"
                columns={feeColumns}
                rows={feeStructure}
              />
            </section>

            <section className="admissions-section" aria-labelledby="admissions-scholarship-title">
              <div className="admissions-section__heading">
                <h2 id="admissions-scholarship-title">{scholarshipContent.title}</h2>
              </div>
              <div className="admissions-section__content">
                <p>{scholarshipContent.description}</p>
                <a
                  className="admissions-page__secondary-link"
                  href={scholarshipContent.link.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  {scholarshipContent.link.label}
                </a>
              </div>
            </section>
          </div>

          <div className="admissions-page__split admissions-page__split--wide-right">
            <section className="admissions-section" aria-labelledby="admissions-links-title">
              <div className="admissions-section__heading">
                <h2 id="admissions-links-title">Important Links</h2>
              </div>
              <div className="admissions-links" role="list" aria-label="Important admission links">
                {importantLinks.map((link) => (
                  <a
                    key={link.label}
                    className="admissions-links__item"
                    href={link.url}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noreferrer" : undefined}
                    role="listitem"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </section>

            <section className="admissions-section" aria-labelledby="admissions-faq-title">
              <div className="admissions-section__heading">
                <h2 id="admissions-faq-title">FAQs</h2>
              </div>
              <FaqAccordion items={admissionFaqs} />
            </section>
          </div>
        </div>
      </Container>
    </Section>
  );
}
