import { Outlet } from "react-router-dom";
import { ContentWrapper } from "./ContentWrapper";

export function AdminLayout() {
  return (
    <div className="layout-shell layout-shell--admin">
      <ContentWrapper as="main" className="layout-main" contentClassName="layout-main__inner">
        <Outlet />
      </ContentWrapper>
    </div>
  );
}
