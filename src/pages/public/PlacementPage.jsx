import { Container } from "../../components/layout/Container";
import {
  PlacementDrivesSection,
  PlacementNoticesSection,
  PlacementOfficerSection,
  PlacementOverviewSection,
  PlacementProcessTimeline,
  RecruitersWall,
  TrainingProgramsSection
} from "../../components/placement";
import {
  placementDrives,
  placementNotices,
  placementOfficer,
  placementOverview,
  placementPageContent,
  placementProcess,
  recruiters,
  trainingPrograms
} from "../../data/placement";
import { Section } from "../../layouts/Section";

export function PlacementPage() {
  return (
    <Section className="placement-page" aria-labelledby="placement-page-title">
      <Container>
        <div className="placement-page__header">
          <p className="placement-page__eyebrow">{placementPageContent.eyebrow}</p>
          <h1 id="placement-page-title" className="placement-page__title">
            {placementPageContent.title}
          </h1>
          <p className="placement-page__intro">{placementPageContent.introduction}</p>
        </div>

        <div className="placement-page__content">
          <PlacementOverviewSection overview={placementOverview} />
          <PlacementOfficerSection officer={placementOfficer} />
          <PlacementProcessTimeline steps={placementProcess} />
          <RecruitersWall recruiters={recruiters} />
          <TrainingProgramsSection programs={trainingPrograms} />
          <PlacementNoticesSection notices={placementNotices} />
          <PlacementDrivesSection drives={placementDrives} />
        </div>
      </Container>
    </Section>
  );
}
