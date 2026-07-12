import {
  AdmissionHighlightsSection,
  ContactPreviewSection,
  DepartmentSection,
  GalleryPreviewSection,
  HeroSection,
  LatestNoticesSection,
  NewsEventsSection,
  PlacementHighlightsSection,
  PrincipalMessageSection,
  QuickLinksSection
} from "../../components/home";

export function HomePage() {
  return (
    <>
      <HeroSection />
      <QuickLinksSection />
      <LatestNoticesSection />
      <DepartmentSection />
      <AdmissionHighlightsSection />
      <PlacementHighlightsSection />
      <PrincipalMessageSection />
      <NewsEventsSection />
      <GalleryPreviewSection />
      <ContactPreviewSection />
    </>
  );
}
