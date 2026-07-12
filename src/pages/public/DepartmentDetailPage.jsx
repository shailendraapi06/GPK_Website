import { useMemo } from "react";
import { useParams } from "react-router-dom";
import { departments } from "../../data/departments";
import { Container } from "../../components/layout/Container";
import { Section } from "../../layouts/Section";

export function DepartmentDetailPage() {
  const { slug } = useParams();
  const department = useMemo(
    () => departments.find((item) => item.slug === slug),
    [slug]
  );

  if (!department) {
    return (
      <Section className="department-detail-page" aria-labelledby="department-detail-title">
        <Container>
          <div className="department-detail-page__shell surface">
            <h1 id="department-detail-title" className="department-detail-page__title">
              Department Not Found
            </h1>
            <p className="department-detail-page__intro">
              The requested department page is not available right now.
            </p>
          </div>
        </Container>
      </Section>
    );
  }

  return (
    <Section className="department-detail-page" aria-labelledby="department-detail-title">
      <Container>
        <div className="department-detail-page__shell surface">
          <p className="department-detail-page__eyebrow">Department Overview</p>
          <h1 id="department-detail-title" className="department-detail-page__title">
            {department.name}
          </h1>
          <p className="department-detail-page__intro">{department.description}</p>
          <p className="department-detail-page__hod">
            <span>Head of Department:</span> {department.hodName}
          </p>
          <p className="department-detail-page__note">
            Detailed department content can be connected here later through the backend or admin panel.
          </p>
        </div>
      </Container>
    </Section>
  );
}
