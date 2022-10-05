const drawerButton = document.getElementById('drawerButton');
const drawerNavigation = document.getElementById('drawerNavigation');
const content = document.getElementById('content');

drawerButton.addEventListener('click', () => {
  drawerNavigation.classList.toggle('open');
});

content.addEventListener('click', () => {
  drawerNavigation.classList.remove('open');
});
