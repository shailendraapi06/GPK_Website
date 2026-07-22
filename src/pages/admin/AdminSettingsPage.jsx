import React, { useState } from "react";

export function AdminSettingsPage() {
  const [activeTab, setActiveTab] = useState("general");
  const [isSaved, setIsSaved] = useState(false);

  // Settings state
  const [settings, setSettings] = useState({
    collegeName: "Government Polytechnic Kanpur",
    establishedYear: "1958",
    aicteCode: "1-12345678",
    affiliateUniversity: "Board of Technical Education, Uttar Pradesh (BTEUP)",
    primaryEmail: "info@gpk.ac.in",
    admissionEmail: "admission@gpk.ac.in",
    phone: "+91 512 258 0123",
    address: "GT Road, Sharda Nagar, Kanpur, Uttar Pradesh - 208024",
    facebook: "https://facebook.com/gpk",
    youtube: "https://youtube.com/c/gpk",
    linkedin: "https://linkedin.com/school/gpk",
    twitter: "https://twitter.com/gpk_kanpur",
    maintenanceMode: false,
    announcementTicker: "Admission 2026 registration dates are now extended! Check details."
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSettings(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
    setIsSaved(false);
  };

  const handleSave = (e) => {
    e.preventDefault();
    setIsSaved(true);
    setTimeout(() => {
      setIsSaved(false);
    }, 3000);
  };

  const tabs = [
    { id: "general", label: "General Information" },
    { id: "contact", label: "Contact Details" },
    { id: "social", label: "Social Media Links" },
    { id: "maintenance", label: "System State & Ticker" }
  ];

  return (
    <div>
      <div className="admin-page-header">
        <div className="admin-page-header__info">
          <h1 className="admin-page-header__title">Website Settings</h1>
          <p className="admin-page-header__desc">Configure college metadata, contact details, social links, and system notifications.</p>
        </div>
      </div>

      <div className="admin-settings-tabs">
        {tabs.map(tab => (
          <button
            key={tab.id}
            className={`admin-settings-tab ${activeTab === tab.id ? "admin-settings-tab--active" : ""}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <form onSubmit={handleSave} className="admin-card" style={{ maxWidth: "800px" }}>
        {isSaved && (
          <div className="admin-badge admin-badge--success" style={{ width: "100%", padding: "0.75rem", marginBottom: "1.5rem", borderRadius: "var(--radius-sm)", display: "block", textAlign: "center" }}>
            Settings saved successfully! (Simulation)
          </div>
        )}

        {activeTab === "general" && (
          <div>
            <h3 style={{ marginBottom: "1.25rem", color: "var(--color-primary-900)" }}>General Information</h3>
            <div className="admin-form-group">
              <label className="admin-label" htmlFor="collegeName">College Name</label>
              <input
                id="collegeName"
                type="text"
                name="collegeName"
                className="admin-input"
                value={settings.collegeName}
                onChange={handleChange}
              />
            </div>
            
            <div className="admin-form-group--row">
              <div className="admin-form-group">
                <label className="admin-label" htmlFor="establishedYear">Established Year</label>
                <input
                  id="establishedYear"
                  type="text"
                  name="establishedYear"
                  className="admin-input"
                  value={settings.establishedYear}
                  onChange={handleChange}
                />
              </div>
              <div className="admin-form-group">
                <label className="admin-label" htmlFor="aicteCode">AICTE Approval Code</label>
                <input
                  id="aicteCode"
                  type="text"
                  name="aicteCode"
                  className="admin-input"
                  value={settings.aicteCode}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="admin-form-group">
              <label className="admin-label" htmlFor="affiliateUniversity">Affiliating Board / University</label>
              <input
                id="affiliateUniversity"
                type="text"
                name="affiliateUniversity"
                className="admin-input"
                value={settings.affiliateUniversity}
                onChange={handleChange}
              />
            </div>
          </div>
        )}

        {activeTab === "contact" && (
          <div>
            <h3 style={{ marginBottom: "1.25rem", color: "var(--color-primary-900)" }}>Contact Details</h3>
            <div className="admin-form-group--row">
              <div className="admin-form-group">
                <label className="admin-label" htmlFor="primaryEmail">General Inquiries Email</label>
                <input
                  id="primaryEmail"
                  type="email"
                  name="primaryEmail"
                  className="admin-input"
                  value={settings.primaryEmail}
                  onChange={handleChange}
                />
              </div>
              <div className="admin-form-group">
                <label className="admin-label" htmlFor="admissionEmail">Admissions Office Email</label>
                <input
                  id="admissionEmail"
                  type="email"
                  name="admissionEmail"
                  className="admin-input"
                  value={settings.admissionEmail}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="admin-form-group">
              <label className="admin-label" htmlFor="phone">Phone Helpline</label>
              <input
                id="phone"
                type="text"
                name="phone"
                className="admin-input"
                value={settings.phone}
                onChange={handleChange}
              />
            </div>

            <div className="admin-form-group">
              <label className="admin-label" htmlFor="address">Campus Postal Address</label>
              <textarea
                id="address"
                name="address"
                className="admin-textarea"
                value={settings.address}
                onChange={handleChange}
              />
            </div>
          </div>
        )}

        {activeTab === "social" && (
          <div>
            <h3 style={{ marginBottom: "1.25rem", color: "var(--color-primary-900)" }}>Social Media Links</h3>
            <div className="admin-form-group">
              <label className="admin-label" htmlFor="facebook">Facebook Page URL</label>
              <input
                id="facebook"
                type="url"
                name="facebook"
                className="admin-input"
                value={settings.facebook}
                onChange={handleChange}
              />
            </div>
            
            <div className="admin-form-group">
              <label className="admin-label" htmlFor="youtube">YouTube Channel URL</label>
              <input
                id="youtube"
                type="url"
                name="youtube"
                className="admin-input"
                value={settings.youtube}
                onChange={handleChange}
              />
            </div>

            <div className="admin-form-group">
              <label className="admin-label" htmlFor="linkedin">LinkedIn Page URL</label>
              <input
                id="linkedin"
                type="url"
                name="linkedin"
                className="admin-input"
                value={settings.linkedin}
                onChange={handleChange}
              />
            </div>

            <div className="admin-form-group">
              <label className="admin-label" htmlFor="twitter">Twitter / X Handle URL</label>
              <input
                id="twitter"
                type="url"
                name="twitter"
                className="admin-input"
                value={settings.twitter}
                onChange={handleChange}
              />
            </div>
          </div>
        )}

        {activeTab === "maintenance" && (
          <div>
            <h3 style={{ marginBottom: "1.25rem", color: "var(--color-primary-900)" }}>System Configurations</h3>
            
            <div className="admin-form-group">
              <label className="admin-label" htmlFor="announcementTicker">Announcements Ticker text</label>
              <input
                id="announcementTicker"
                type="text"
                name="announcementTicker"
                className="admin-input"
                value={settings.announcementTicker}
                onChange={handleChange}
              />
            </div>

            <div className="admin-form-group" style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginTop: "1.5rem" }}>
              <input
                id="maintenanceMode"
                type="checkbox"
                name="maintenanceMode"
                className="admin-input"
                checked={settings.maintenanceMode}
                onChange={handleChange}
              />
              <label className="admin-label" htmlFor="maintenanceMode" style={{ margin: 0, cursor: "pointer" }}>
                Activate Website Maintenance Mode
              </label>
            </div>
            <p style={{ fontSize: "var(--font-size-xs)", color: "var(--color-text-muted)", marginLeft: "1.75rem", marginTop: "-0.5rem" }}>
              When enabled, a maintenance page will display to public users, blocking regular website contents.
            </p>
          </div>
        )}

        <div className="admin-form-actions">
          <button type="submit" className="admin-btn admin-btn--primary">
            Save Settings
          </button>
        </div>
      </form>
    </div>
  );
}
