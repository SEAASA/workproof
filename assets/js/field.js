const galleries = {
  "capture": [
    [
      "camera",
      "Professional camera"
    ],
    [
      "personal-camera",
      "Personal camera"
    ],
    [
      "area-selection",
      "Area selected on the camera preview"
    ],
    [
      "stamped-photo",
      "Photo with project and time stamps"
    ]
  ],
  "fieldmap": [
    [
      "map",
      "Field map with a photo marker"
    ],
    [
      "projects",
      "Project folders"
    ],
    [
      "site-ids",
      "Site IDs in a project"
    ]
  ],
  "checklists": [
    [
      "build-checklist",
      "Create a checklist"
    ],
    [
      "checklist-item",
      "Add an item with a camera or comment field"
    ],
    [
      "open-checklist",
      "Checklist before inspection"
    ],
    [
      "checklist",
      "Completed inspection checklist"
    ],
    [
      "saved-checklist",
      "Saved checklist"
    ]
  ],
  "verifier": [
    [
      "verify-start",
      "Choose photos to verify"
    ],
    [
      "verify-scan",
      "Verification in progress"
    ],
    [
      "verify",
      "Verification results"
    ],
    [
      "verify-device",
      "Device checks"
    ],
    [
      "verify-seal",
      "Photo seal checks"
    ]
  ],
  "reports": [
    [
      "report-type",
      "Choose a report type"
    ],
    [
      "report-portrait",
      "Portrait photo report"
    ],
    [
      "report",
      "Landscape photo report"
    ],
    [
      "declaration",
      "Declaration preview"
    ]
  ],
  "backup": [
    [
      "sync",
      "Connect Google Drive"
    ],
    [
      "backup-folder",
      "Name the backup folder"
    ],
    [
      "sync-status",
      "Sync status"
    ],
    [
      "drive-folders",
      "Photo and report folders"
    ],
    [
      "drive-sharing",
      "Folder sharing options"
    ]
  ]
};

const choices = [...document.querySelectorAll('.tool button')];
const viewer = document.querySelector('#feature-viewer');
const image = document.querySelector('#view-image');
const caption = document.querySelector('#view-caption');
const narrow = window.matchMedia('(max-width: 680px)');
let activeTool = choices[0];
let slideIndex = 0;

function renderSlide() {
  const slides = galleries[activeTool.parentElement.id];
  const [file, description] = slides[slideIndex];
  image.src = '/assets/field/' + file + '.webp';
  image.alt = description;
  caption.textContent = description + ' · ' + (slideIndex + 1) + ' of ' + slides.length;
}
function moveSlide(step) {
  const length = galleries[activeTool.parentElement.id].length;
  slideIndex = (slideIndex + step + length) % length;
  renderSlide();
}
function placeViewer() {
  const parent = narrow.matches ? activeTool.parentElement : document.querySelector('.tour');
  if (viewer.parentElement !== parent) parent.append(viewer);
}
function selectTool(choice) {
  activeTool = choice;
  slideIndex = 0;
  choices.forEach(item => item.setAttribute('aria-pressed', String(item === choice)));
  placeViewer();
  renderSlide();
}
function followAnchor() {
  const choice = choices.find(item => '#' + item.parentElement.id === location.hash);
  if (choice) selectTool(choice);
}
choices.forEach(choice => choice.addEventListener('click', () => selectTool(choice)));
document.querySelector('#previous-slide').addEventListener('click', () => moveSlide(-1));
document.querySelector('#next-slide').addEventListener('click', () => moveSlide(1));
viewer.addEventListener('keydown', event => {
  if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
    event.preventDefault();
    moveSlide(event.key === 'ArrowLeft' ? -1 : 1);
  }
});
narrow.addEventListener('change', placeViewer);
selectTool(activeTool);
followAnchor();
window.addEventListener('hashchange', followAnchor);
