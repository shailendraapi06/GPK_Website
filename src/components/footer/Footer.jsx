import { NavLink } from "react-router-dom";
import { footerLinkGroups } from "../../data/footerLinks";
import { socialLinks } from "../../data/socialLinks";
import { PageContainer } from "../../layouts/PageContainer";

const collegeInfo = {
  title: "Government Polytechnic Kanpur",
  description:
    "A professional academic web platform foundation for institutional information, student services, and future API-driven updates."
};

const contactDetails = [
  "Kanpur, Uttar Pradesh, India",
  "info@gpk.example",
  "+91 00000 00000"
];

function FooterLinkGroup({ title, links }) {
  return (
    <section className="footer__group" aria-labelledby={`footer-${title.toLowerCase().replace(/\s+/g, "-")}`}>
      <h2
        id={`footer-${title.toLowerCase().replace(/\s+/g, "-")}`}
        className="footer__heading"
      >
        {title}
      </h2>
      <ul className="footer__links" role="list">
        {links.map((link) => (
          <li key={link.to}>
            <NavLink className="footer__link" to={link.to} end={link.to === "/"}>
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </section>
  );
}

function SocialLinkList() {
  return (
    <section className="footer__group" aria-labelledby="footer-social-links">
      <h2 id="footer-social-links" className="footer__heading">
        Social Links
      </h2>
      <ul className="footer__socials" role="list">
        {socialLinks.map((link) => (
          <li key={link.label}>
            <a
              className="footer__social-link"
              href={link.href}
              target="_blank"
              rel="noreferrer"
              aria-label={link.label}
            >
              <span aria-hidden="true">{link.shortLabel}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" role="contentinfo">
      <PageContainer className="footer__container">
        <div className="footer__grid">
          <section className="footer__group footer__group--wide" aria-labelledby="footer-college-info">
            <h2 id="footer-college-info" className="footer__heading">
              College Info
            </h2>
            <div className="footer__info flow">
              <p className="footer__brand">{collegeInfo.title}</p>
              <p className="footer__copy">{collegeInfo.description}</p>
            </div>
          </section>

          {footerLinkGroups.map((group) => (
            <FooterLinkGroup key={group.title} title={group.title} links={group.links} />
          ))}

          <section className="footer__group" aria-labelledby="footer-contact-information">
            <h2 id="footer-contact-information" className="footer__heading">
              Contact Information
            </h2>
            <address className="footer__contact">
              <ul className="footer__links" role="list">
                {contactDetails.map((item) => (
                  <li key={item} className="footer__contact-item">
                    {item}
                  </li>
                ))}
              </ul>
            </address>
          </section>

          <SocialLinkList />
        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">
            © {currentYear} Government Polytechnic Kanpur. All rights reserved.
          </p>
        </div>
      </PageContainer>
    </footer>
  );
}
