import { Container } from "../../components/layout/Container";
import { DepartmentGrid } from "../../components/departments/DepartmentGrid";
import { departments, departmentsPageContent } from "../../data/departments";
import { Section } from "../../layouts/Section";

export function DepartmentsPage() {
  return (
    <Section className="departments-page" aria-labelledby="departments-page-title">
      <Container>
        <div className="departments-page__header">
          <p className="departments-page__eyebrow">Academic Programs</p>
          <h1 id="departments-page-title" className="departments-page__title">
            {departmentsPageContent.title}
          </h1>
          <p className="departments-page__intro">{departmentsPageContent.introduction}</p>
        </div>

        <DepartmentGrid departments={departments} />
      </Container>
    </Section>
  );
}
