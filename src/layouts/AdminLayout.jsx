import React, { useState, useEffect } from "react";
import { Link, NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import { AdminLoginPage } from "../pages/admin/AdminLoginPage";
import logo from "../assets/branding/logo.png";
import "../styles/admin.css";
import {
  DashboardIcon,
  SettingsIcon,
  SliderIcon,
  DepartmentsIcon,
  FacultyIcon,
  PlacementIcon,
  GalleryIcon,
  ProfileIcon,
  LogoutIcon,
  MenuIcon,
  CloseIcon,
  AboutIcon,
  AdmissionIcon
} from "../components/admin/Icons";

export function AdminLayout() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const loggedIn = localStorage.getItem("admin_logged_in") === "true";
    setIsAuthenticated(loggedIn);
  }, []);

  // Close sidebar on route change (for mobile view)
  useEffect(() => {
    setIsSidebarOpen(false);
  }, [location]);

  const handleLogout = () => {
    localStorage.removeItem("admin_logged_in");
    setIsAuthenticated(false);
    navigate("/admin");
    window.location.reload();
  };

  if (!isAuthenticated) {
    return <AdminLoginPage onLoginSuccess={() => setIsAuthenticated(true)} />;
  }

  const menuItems = [
    { label: "Dashboard", path: "/admin", icon: <DashboardIcon />, exact: true },
    { label: "Homepage Management", path: "/admin/homepage", icon: <SliderIcon /> },
    { label: "Footer Management", path: "/admin/footer", icon: <SettingsIcon /> },
    { label: "About Management", path: "/admin/about", icon: <AboutIcon /> },
    { label: "Admission Management", path: "/admin/admission", icon: <AdmissionIcon /> },
    { label: "Department Management", path: "/admin/departments", icon: <DepartmentsIcon /> },
    { label: "Faculty Management", path: "/admin/faculty", icon: <FacultyIcon /> },
    { label: "Placement Management", path: "/admin/placement", icon: <PlacementIcon /> },
    { label: "Gallery Management", path: "/admin/gallery", icon: <GalleryIcon /> }
  ];

  // Get current page label
  const currentMenuItem = menuItems.find(item => 
    item.exact ? location.pathname === item.path : location.pathname.startsWith(item.path)
  );
  const pageTitle = currentMenuItem ? currentMenuItem.label : "Admin Panel";

  return (
    <div className="admin-shell">
      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div 
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0,0,0,0.4)",
            zIndex: 99
          }}
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`admin-sidebar ${isSidebarOpen ? "admin-sidebar--open" : ""}`}>
        <div className="admin-sidebar__brand">
          <img src={logo} alt="GPK Logo" className="admin-sidebar__logo" />
          <div className="admin-sidebar__title-wrapper">
            <h1 className="admin-sidebar__title">GPK Admin</h1>
            <span className="admin-sidebar__subtitle">Management Console</span>
          </div>
          <button 
            className="admin-navbar__toggle" 
            style={{ display: isSidebarOpen ? "block" : "none", marginLeft: "auto", color: "#fff" }}
            onClick={() => setIsSidebarOpen(false)}
          >
            <CloseIcon style={{ width: "24px", height: "24px" }} />
          </button>
        </div>

        <nav className="admin-sidebar__nav">
          {menuItems.map((item) => {
            const isActive = item.exact 
              ? location.pathname === item.path 
              : location.pathname.startsWith(item.path);

            return (
              <Link
                key={item.path}
                to={item.path}
                className={`admin-sidebar__link ${isActive ? "admin-sidebar__link--active" : ""}`}
              >
                {item.icon}
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="admin-sidebar__footer">
          <button onClick={handleLogout} className="admin-sidebar__logout-btn">
            <LogoutIcon />
            <span>Sign Out</span>
          </button>
        </div>
      </aside>

      {/* Main Area */}
      <div className="admin-main-wrapper">
        <header className="admin-navbar">
          <div className="admin-navbar__left">
            <button 
              className="admin-navbar__toggle" 
              style={{ display: "block" }} 
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
              <MenuIcon style={{ width: "24px", height: "24px" }} />
            </button>
            <h2 className="admin-navbar__title">{pageTitle}</h2>
          </div>

          <div className="admin-navbar__right">
            <div 
              className="admin-navbar__profile"
              onClick={() => setDropdownOpen(!isDropdownOpen)}
            >
              <div className="admin-navbar__avatar">A</div>
              <div className="admin-navbar__user-info" style={{ display: "none" /* Show on desktop */ }}>
                <span className="admin-navbar__username">GPK Administrator</span>
                <span className="admin-navbar__role">Super Admin</span>
              </div>
              
              {isDropdownOpen && (
                <div className="admin-navbar__dropdown">
                  <Link to="/admin/profile" className="admin-navbar__dropdown-item">
                    <ProfileIcon style={{ width: "16px", height: "16px" }} />
                    <span>My Profile</span>
                  </Link>
                  <Link to="/admin/settings" className="admin-navbar__dropdown-item">
                    <SettingsIcon style={{ width: "16px", height: "16px" }} />
                    <span>Settings</span>
                  </Link>
                  <hr style={{ border: 0, borderTop: "1px solid var(--color-neutral-100)", margin: "0.25rem 0" }} />
                  <div onClick={handleLogout} className="admin-navbar__dropdown-item" style={{ color: "var(--color-error-500)" }}>
                    <LogoutIcon style={{ width: "16px", height: "16px" }} />
                    <span>Logout</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </header>

        <main className="admin-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
