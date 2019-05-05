let hamburgerLink = document.querySelector('#hamburger_link');
let wrapElement = document.querySelector('#wrap');
let closeSidebarIcon = document.querySelector('#icon-close-sidebar');
let sidebar = document.querySelector('#sidebar');

hamburgerLink.addEventListener('click', (e) => {
  e.preventDefault();
  wrapElement.classList.toggle('wrap--collapse');
}, false);

closeSidebarIcon.addEventListener('click', function() {
  wrapElement.classList.remove('wrap--collapse');
}, false);
