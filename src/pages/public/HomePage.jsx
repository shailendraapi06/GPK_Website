import {
  ContactSection,
  DepartmentSection,
  GallerySection,
  HeroSection,
  LeadershipSection,
  LatestNoticesSection,
  NotificationBar,
  PlacementSection,
  PrincipalSection,
  QuickLinksSection,
  WhyChooseSection
} from "../../components/home";

export function HomePage() {
  return (
    <>
      <HeroSection />
      <NotificationBar />
      <LeadershipSection />
      <QuickLinksSection />
      <LatestNoticesSection />
      <DepartmentSection />
      <WhyChooseSection />
      <PlacementSection />
      <PrincipalSection />
      <GallerySection />
      <ContactSection />
    </>
  );
}
