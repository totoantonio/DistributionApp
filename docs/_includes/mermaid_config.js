(function () {
  // Diagrams in Apple's look: white (or dark grey) rounded boxes, grey lines, app blue for the centre; follows Light/Dark
  var dark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  var box = dark ? "#2c2c2e" : "#ffffff", text = dark ? "#f5f5f7" : "#1d1d1f", edge = dark ? "#48484a" : "#d2d2d7";
  var v = {
    fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Helvetica Neue', Arial, sans-serif",
    fontSize: "15px",
    background: "transparent",
    primaryColor: box, primaryTextColor: text, primaryBorderColor: edge,
    secondaryColor: box, tertiaryColor: box,
    lineColor: dark ? "#8e8e93" : "#86868b",
    textColor: text,
    clusterBkg: dark ? "#1c1c1e" : "#f5f5f7", clusterBorder: edge,
    edgeLabelBackground: dark ? "#1c1c1e" : "#f5f5f7"
  };
  // Mind map: same white boxes and grey lines as the other diagrams (owner prefers this to many colours), centre too
  for (var i = 0; i < 12; i++) { v["cScale" + i] = box; v["cScaleInv" + i] = box; v["cScaleLabel" + i] = text; }
  v.git0 = box; v.gitBranchLabel0 = text; // centre circle, plain like the rest (owner)
  return { theme: "base", themeVariables: v };
})()
