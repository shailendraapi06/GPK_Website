import { useMemo } from "react";
import { useParams } from "react-router-dom";
import { Container } from "../../components/layout/Container";
import {
  CurriculumSection,
  DepartmentAboutSection,
  DepartmentGallerySection,
  DepartmentHeaderSection,
  FacultySection,
  HodMessageSection,
  PlacementSection
} from "../../components/departments";
import { getDepartmentBySlug } from "../../data/departments";
import { Section } from "../../layouts/Section";

export function DepartmentDetailPage() {
  const { slug } = useParams();
  const department = useMemo(
    () => getDepartmentBySlug(slug),
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
        <div className="department-detail-page__shell">
          <DepartmentHeaderSection department={department} />
          <DepartmentAboutSection about={department.about} />
          <HodMessageSection hod={department.hod} />
          <FacultySection faculty={department.faculty} />
          <CurriculumSection curriculum={department.curriculum} />
          <PlacementSection placement={department.placement} />
          <DepartmentGallerySection gallery={department.gallery} />
        </div>
      </Container>
    </Section>
  );
}
