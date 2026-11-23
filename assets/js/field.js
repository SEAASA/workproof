const choices = [...document.querySelectorAll('.tool a')];
const viewer = document.querySelector('.viewer');
const image = document.querySelector('#view-image');
const imageLink = document.querySelector('#view-link');
const caption = document.querySelector('#view-caption');
const narrow = window.matchMedia('(max-width: 680px)');

function selectTool(choice) {
  choices.forEach(item => item.setAttribute('aria-current', String(item === choice)));
  image.src = choice.href;
  image.alt = choice.dataset.caption;
  imageLink.href = choice.href;
  imageLink.setAttribute('aria-label', 'Open full screenshot of ' + choice.dataset.caption);
  caption.textContent = choice.dataset.caption;
  if (narrow.matches) choice.parentElement.append(viewer);
  else document.querySelector('.tour').append(viewer);
}
function followAnchor() {
  const choice = choices.find(item => '#' + item.parentElement.id === location.hash);
  if (choice) selectTool(choice);
}
choices.forEach(choice => choice.addEventListener('click', event => {
  if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
  event.preventDefault();
  selectTool(choice);
}));
narrow.addEventListener('change', () => selectTool(choices.find(item => item.getAttribute('aria-current') === 'true')));
selectTool(choices[0]);
followAnchor();
window.addEventListener('hashchange', followAnchor);
