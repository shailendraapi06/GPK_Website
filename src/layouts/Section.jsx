export function Section({ as: Component = "section", className = "", children }) {
  const classes = ["layout-section", className].filter(Boolean).join(" ");

  return <Component className={classes}>{children}</Component>;
}
