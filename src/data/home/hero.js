import heroCampusOne from "../../assets/home/hero-campus-1.svg";
import heroCampusTwo from "../../assets/home/hero-campus-2.svg";
import heroCampusThree from "../../assets/home/hero-campus-3.svg";

export const heroContent = {
  title: "Government Polytechnic Kanpur",
  tagline:
    "Career-focused technical education with academic discipline, practical learning, and student-centered growth.",
  ctaButtons: [
    { label: "Admissions Open", to: "/admissions", variant: "primary" },
    { label: "Download Prospectus", to: "/admissions#prospectus", variant: "secondary" }
  ],
  badges: [
    { label: "AICTE Approved" },
    { label: "Government Institute" },
    { label: "Placements" },
    { label: "Skilled Faculty" }
  ],
  slides: [
    { id: "campus-1", src: heroCampusOne, alt: "Illustrated academic block placeholder" },
    { id: "campus-2", src: heroCampusTwo, alt: "Illustrated institutional building placeholder" },
    { id: "campus-3", src: heroCampusThree, alt: "Illustrated college campus facade placeholder" }
  ]
};
