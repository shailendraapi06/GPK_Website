import {
  ContactPreviewSection,
  DepartmentSection,
  GalleryPreviewSection,
  HeroSection,
  LatestNoticesSection,
  NewsEventsSection,
  PlacementSection,
  PrincipalMessageSection,
  QuickLinksSection,
  WhyChooseSection
} from "../../components/home";

export function HomePage() {
  return (
    <>
      <HeroSection />
      <QuickLinksSection />
      <LatestNoticesSection />
      <DepartmentSection />
      <WhyChooseSection />
      <PlacementSection />
      <PrincipalMessageSection />
      <NewsEventsSection />
      <GalleryPreviewSection />
      <ContactPreviewSection />
    </>
  );
}
