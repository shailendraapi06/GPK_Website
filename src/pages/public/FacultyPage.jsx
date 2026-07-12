import { useMemo, useState } from "react";
import { FacultyContactInfo, FacultyDirectory, FacultyFilters } from "../../components/faculty";
import { Container } from "../../components/layout/Container";
import {
  facultyContactInfo,
  facultyDepartments,
  facultyMembers,
  facultyPageContent
} from "../../data/faculty";
import { Section } from "../../layouts/Section";

export function FacultyPage() {
  const [searchValue, setSearchValue] = useState("");
  const [departmentValue, setDepartmentValue] = useState(facultyDepartments[0]);

  const filteredFaculty = useMemo(() => {
    const normalizedSearch = searchValue.trim().toLowerCase();

    return facultyMembers.filter((member) => {
      const matchesDepartment =
        departmentValue === "All Departments" || member.department === departmentValue;

      const matchesSearch =
        !normalizedSearch ||
        [member.name, member.department, member.designation, member.qualification]
          .join(" ")
          .toLowerCase()
          .includes(normalizedSearch);

      return matchesDepartment && matchesSearch;
    });
  }, [departmentValue, searchValue]);

  return (
    <Section className="faculty-page" aria-labelledby="faculty-page-title">
      <Container>
        <div className="faculty-page__header">
          <p className="faculty-page__eyebrow">{facultyPageContent.eyebrow}</p>
          <h1 id="faculty-page-title" className="faculty-page__title">
            {facultyPageContent.title}
          </h1>
          <p className="faculty-page__intro">{facultyPageContent.introduction}</p>
        </div>

        <div className="faculty-page__content">
          <FacultyFilters
            searchValue={searchValue}
            onSearchChange={setSearchValue}
            departmentValue={departmentValue}
            onDepartmentChange={setDepartmentValue}
            departments={facultyDepartments}
            searchPlaceholder={facultyPageContent.searchPlaceholder}
            filterLabel={facultyPageContent.filterLabel}
          />

          <FacultyDirectory faculty={filteredFaculty} />

          <FacultyContactInfo contactInfo={facultyContactInfo} />
        </div>
      </Container>
    </Section>
  );
}
