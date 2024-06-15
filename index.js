function toggleSidebar() {
  const sidebar = document.querySelector(".whiteBox");
  const whiteBoxButton = document.querySelector(".whiteBox-button");
  const sidebarButton = document.querySelector(".sidebar-button");
  const content = document.querySelector(".clickText");
  if (sidebar.style.width === "129px") {
    sidebar.style.width = "392px";
    sidebarButton.style.width = "392px";
    whiteBoxButton.style.display = "none";
    sidebar.style.zIndex = "100";
    content.style.display = "flex";
  } else {
    sidebar.style.width = "129px";
    whiteBoxButton.style.display = "flex";
    sidebarButton.style.width = "129px";
    sidebar.style.zIndex = "0";
    content.style.display = "none";
  }
}

// Event Listeners
// document
//   .querySelector(".whiteBox-button")
//   .addEventListener("click", toggleSidebar);
document.querySelector(".whiteBox").addEventListener("click", toggleSidebar);
