import {
  AdmissionHighlightsSection,
  ContactPreviewSection,
  DepartmentsSection,
  GalleryPreviewSection,
  HeroSection,
  LatestNoticesSection,
  NewsEventsSection,
  PlacementHighlightsSection,
  PrincipalMessageSection,
  QuickLinksSection,
  StatisticsSection
} from "../../components/home";

export function HomePage() {
  return (
    <>
      <HeroSection />
      <QuickLinksSection />
      <LatestNoticesSection />
      <DepartmentsSection />
      <AdmissionHighlightsSection />
      <PlacementHighlightsSection />
      <PrincipalMessageSection />
      <StatisticsSection />
      <NewsEventsSection />
      <GalleryPreviewSection />
      <ContactPreviewSection />
    </>
  );
}
