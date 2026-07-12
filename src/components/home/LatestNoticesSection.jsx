import { latestNotices, noticesSectionContent } from "../../data/home/notices";
import { Container } from "../layout/Container";
import { Section } from "../../layouts/Section";
import { NoticeBoard } from "./NoticeBoard";

export function LatestNoticesSection() {
  return (
    <Section className="home-section notices-section" aria-labelledby="latest-notices-title">
      <Container>
        <NoticeBoard {...noticesSectionContent} notices={latestNotices.slice(0, 3)} />
      </Container>
    </Section>
  );
}
