import heroFrontImage from "../../assets/home/hero-front.jfif";
import heroAuditoriumImage from "../../assets/home/hero-auditorium.jpg";
import heroTeachersImage from "../../assets/home/hero-teachers.jpeg";

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
    {
      id: "campus-front",
      src: heroFrontImage,
      alt: "Front view of Government Polytechnic Kanpur campus"
    },
    {
      id: "campus-auditorium",
      src: heroAuditoriumImage,
      alt: "Auditorium gathering at Government Polytechnic Kanpur"
    },
    {
      id: "campus-teachers",
      src: heroTeachersImage,
      alt: "Faculty group at Government Polytechnic Kanpur"
    }
  ]
};
