export function Container({ as: Component = "div", className = "", children }) {
  const classes = ["container", className].filter(Boolean).join(" ");

  return <Component className={classes}>{children}</Component>;
}
