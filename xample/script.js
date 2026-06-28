const storageKeys = {
  syllabus: 'study-planner-syllabus',
  targets: 'study-planner-targets',
  papers: 'study-planner-papers',
  notes: 'study-planner-notes',
  weak: 'study-planner-weak',
  important: 'study-planner-important',
  revision: 'study-planner-revision',
};

const defaultData = {
  syllabus: [
    // Reasoning
    { id: crypto.randomUUID(), group: 'Reasoning', name: 'Analogy', completed: false, revisions: 0 },
    { id: crypto.randomUUID(), group: 'Reasoning', name: 'Classification', completed: false, revisions: 0 },
    { id: crypto.randomUUID(), group: 'Reasoning', name: 'Series', completed: false, revisions: 0 },
    { id: crypto.randomUUID(), group: 'Reasoning', name: 'Coding-Decoding', completed: false, revisions: 0 },
    { id: crypto.randomUUID(), group: 'Reasoning', name: 'Venn Diagram', completed: false, revisions: 0 },
    { id: crypto.randomUUID(), group: 'Reasoning', name: 'Syllogism', completed: false, revisions: 0 },
    { id: crypto.randomUUID(), group: 'Reasoning', name: 'Statement & Conclusion', completed: false, revisions: 0 },
    { id: crypto.randomUUID(), group: 'Reasoning', name: 'Non-Verbal Reasoning', completed: false, revisions: 0 },
    { id: crypto.randomUUID(), group: 'Reasoning', name: 'Problem Solving', completed: false, revisions: 0 },
    { id: crypto.randomUUID(), group: 'Reasoning', name: 'Decision Making', completed: false, revisions: 0 },
    { id: crypto.randomUUID(), group: 'Reasoning', name: 'Visual Memory', completed: false, revisions: 0 },
    { id: crypto.randomUUID(), group: 'Reasoning', name: 'Emotional & Social Intelligence', completed: false, revisions: 0 },
    // General Awareness
    { id: crypto.randomUUID(), group: 'General Awareness', name: 'Current Affairs', completed: false, revisions: 0 },
    { id: crypto.randomUUID(), group: 'General Awareness', name: 'History', completed: false, revisions: 0 },
    { id: crypto.randomUUID(), group: 'General Awareness', name: 'Geography', completed: false, revisions: 0 },
    { id: crypto.randomUUID(), group: 'General Awareness', name: 'Polity', completed: false, revisions: 0 },
    { id: crypto.randomUUID(), group: 'General Awareness', name: 'Economics', completed: false, revisions: 0 },
    { id: crypto.randomUUID(), group: 'General Awareness', name: 'Science', completed: false, revisions: 0 },
    { id: crypto.randomUUID(), group: 'General Awareness', name: 'Culture', completed: false, revisions: 0 },
    { id: crypto.randomUUID(), group: 'General Awareness', name: 'Environment', completed: false, revisions: 0 },
    { id: crypto.randomUUID(), group: 'General Awareness', name: 'India & Neighbouring Countries', completed: false, revisions: 0 },
    // Quantitative Aptitude
    { id: crypto.randomUUID(), group: 'Quantitative Aptitude', name: 'Number System', completed: false, revisions: 0 },
    { id: crypto.randomUUID(), group: 'Quantitative Aptitude', name: 'Percentage', completed: false, revisions: 0 },
    { id: crypto.randomUUID(), group: 'Quantitative Aptitude', name: 'Ratio & Proportion', completed: false, revisions: 0 },
    { id: crypto.randomUUID(), group: 'Quantitative Aptitude', name: 'Average', completed: false, revisions: 0 },
    { id: crypto.randomUUID(), group: 'Quantitative Aptitude', name: 'Profit & Loss', completed: false, revisions: 0 },
    { id: crypto.randomUUID(), group: 'Quantitative Aptitude', name: 'Simple & Compound Interest', completed: false, revisions: 0 },
    { id: crypto.randomUUID(), group: 'Quantitative Aptitude', name: 'Time & Work', completed: false, revisions: 0 },
    { id: crypto.randomUUID(), group: 'Quantitative Aptitude', name: 'Time, Speed & Distance', completed: false, revisions: 0 },
    { id: crypto.randomUUID(), group: 'Quantitative Aptitude', name: 'Partnership', completed: false, revisions: 0 },
    { id: crypto.randomUUID(), group: 'Quantitative Aptitude', name: 'Mixture & Alligation', completed: false, revisions: 0 },
    { id: crypto.randomUUID(), group: 'Quantitative Aptitude', name: 'Algebra', completed: false, revisions: 0 },
    { id: crypto.randomUUID(), group: 'Quantitative Aptitude', name: 'Geometry', completed: false, revisions: 0 },
    { id: crypto.randomUUID(), group: 'Quantitative Aptitude', name: 'Mensuration', completed: false, revisions: 0 },
    { id: crypto.randomUUID(), group: 'Quantitative Aptitude', name: 'Trigonometry', completed: false, revisions: 0 },
    { id: crypto.randomUUID(), group: 'Quantitative Aptitude', name: 'Data Interpretation', completed: false, revisions: 0 },
    // English
    { id: crypto.randomUUID(), group: 'English', name: 'Vocabulary', completed: false, revisions: 0 },
    { id: crypto.randomUUID(), group: 'English', name: 'Grammar', completed: false, revisions: 0 },
    { id: crypto.randomUUID(), group: 'English', name: 'Synonyms', completed: false, revisions: 0 },
    { id: crypto.randomUUID(), group: 'English', name: 'Antonyms', completed: false, revisions: 0 },
    { id: crypto.randomUUID(), group: 'English', name: 'Idioms & Phrases', completed: false, revisions: 0 },
    { id: crypto.randomUUID(), group: 'English', name: 'One Word Substitution', completed: false, revisions: 0 },
    { id: crypto.randomUUID(), group: 'English', name: 'Error Spotting', completed: false, revisions: 0 },
    { id: crypto.randomUUID(), group: 'English', name: 'Fill in the Blanks', completed: false, revisions: 0 },
    { id: crypto.randomUUID(), group: 'English', name: 'Reading Comprehension', completed: false, revisions: 0 },
    { id: crypto.randomUUID(), group: 'English', name: 'Sentence Improvement', completed: false, revisions: 0 },
    // Exam Pattern
    { id: crypto.randomUUID(), group: 'Exam Pattern', name: 'Reasoning - 25 Q', completed: false, revisions: 0 },
    { id: crypto.randomUUID(), group: 'Exam Pattern', name: 'GA - 25 Q', completed: false, revisions: 0 },
    { id: crypto.randomUUID(), group: 'Exam Pattern', name: 'Quant - 25 Q', completed: false, revisions: 0 },
    { id: crypto.randomUUID(), group: 'Exam Pattern', name: 'English - 25 Q', completed: false, revisions: 0 },
    { id: crypto.randomUUID(), group: 'Exam Pattern', name: 'Total - 100 Q / 200 Marks', completed: false, revisions: 0 },
    { id: crypto.randomUUID(), group: 'Exam Pattern', name: 'Negative Marking - 0.50', completed: false, revisions: 0 },
  ],
  targets: [
    { id: crypto.randomUUID(), text: 'Revise 3 formulas', completed: false },
    { id: crypto.randomUUID(), text: 'Solve 10 practice questions', completed: true },
  ],
  papers: [],
  notes: [
    { id: crypto.randomUUID(), title: 'Trigonometry', content: 'sin²θ + cos²θ = 1', fileName: '', dataUrl: '', fileType: '' },
  ],
  weak: ['Integration by parts'],
  important: ['Electrostatics', 'Calculus'],
  revision: [
    { id: crypto.randomUUID(), topic: 'General Awareness', progress: 40, note: 'Read 2 current affairs pages' },
  ],
};

function mergeSyllabusTopics(existingTopics = []) {
  const existingByKey = new Map(existingTopics.map((item) => [`${item.group}::${item.name}`, item]));
  const mergedTopics = [...existingTopics];

  defaultData.syllabus.forEach((topic) => {
    const key = `${topic.group}::${topic.name}`;
    if (!existingByKey.has(key)) {
      mergedTopics.push({ ...topic, id: crypto.randomUUID() });
    }
  });

  return mergedTopics;
}

const initialSyllabus = loadState(storageKeys.syllabus, defaultData.syllabus);
const mergedSyllabus = mergeSyllabusTopics(initialSyllabus);

if (mergedSyllabus.length !== initialSyllabus.length) {
  saveState(storageKeys.syllabus, mergedSyllabus);
}

const state = {
  syllabus: mergedSyllabus,
  targets: loadState(storageKeys.targets, defaultData.targets),
  papers: loadState(storageKeys.papers, defaultData.papers),
  notes: loadState(storageKeys.notes, defaultData.notes),
  weak: loadState(storageKeys.weak, defaultData.weak),
  important: loadState(storageKeys.important, defaultData.important),
  revision: loadState(storageKeys.revision, defaultData.revision),
};

const syllabusForm = document.getElementById('syllabusForm');
const syllabusInput = document.getElementById('syllabusInput');
const syllabusChecklist = document.getElementById('syllabusChecklist');

const targetForm = document.getElementById('targetForm');
const targetInput = document.getElementById('targetInput');
const targetList = document.getElementById('targetList');

const revisionForm = document.getElementById('revisionForm');
const revisionTopic = document.getElementById('revisionTopic');
const revisionProgress = document.getElementById('revisionProgress');
const revisionList = document.getElementById('revisionList');

const paperForm = document.getElementById('paperForm');
const paperInput = document.getElementById('paperInput');
const paperList = document.getElementById('paperList');

const noteForm = document.getElementById('noteForm');
const noteTitle = document.getElementById('noteTitle');
const noteContent = document.getElementById('noteContent');
const noteFileInput = document.getElementById('noteFileInput');
const noteList = document.getElementById('noteList');

const weakForm = document.getElementById('weakForm');
const weakInput = document.getElementById('weakInput');
const weakList = document.getElementById('weakList');

const importantForm = document.getElementById('importantForm');
const importantInput = document.getElementById('importantInput');
const importantList = document.getElementById('importantList');

const dashboardPage = document.getElementById('dashboardPage');
const plannerPage = document.getElementById('planner');
const sectionPage = document.getElementById('sectionPage');
const sectionContent = document.getElementById('sectionContent');
const sectionGrid = document.querySelector('.section-grid');
const backToDashboardButton = document.getElementById('backToPlanner');
const closeSectionPageButton = document.getElementById('closeSectionPage');
const paperFilePreview = document.getElementById('paperFilePreview');
const noteFilePreview = document.getElementById('noteFilePreview');
const completedCount = document.getElementById('completedCount');
const targetCount = document.getElementById('targetCount');
const progressPercent = document.getElementById('progressPercent');
const progressFill = document.getElementById('progressFill');

let activeSectionCard = null;
let activeSectionKey = null;
let currentPageKey = 'dashboard';
const pageScrollPositions = { dashboard: 0, planner: 0 };
const sectionScrollPositions = {};

function saveScrollPosition() {
  const currentY = window.scrollY || window.pageYOffset || 0;

  if (activeSectionKey) {
    sectionScrollPositions[activeSectionKey] = currentY;
    return;
  }

  if (currentPageKey === 'planner') {
    pageScrollPositions.planner = currentY;
  } else if (currentPageKey === 'dashboard') {
    pageScrollPositions.dashboard = currentY;
  }
}

function restoreScrollPosition(pageKey, sectionKey = null) {
  const targetY = sectionKey
    ? sectionScrollPositions[sectionKey] ?? 0
    : pageScrollPositions[pageKey] ?? 0;

  requestAnimationFrame(() => window.scrollTo(0, targetY));
}

function resetSectionCardView() {
  if (!activeSectionCard) return;

  activeSectionCard.classList.remove('open');
  const sectionBody = activeSectionCard.querySelector('.section-body');
  if (sectionBody) sectionBody.style.display = '';
  sectionGrid.appendChild(activeSectionCard);
  activeSectionCard = null;
  activeSectionKey = null;
  sectionContent.innerHTML = '';
}

const countdownItems = {
  days: document.getElementById('days'),
  hours: document.getElementById('hours'),
  minutes: document.getElementById('minutes'),
  seconds: document.getElementById('seconds'),
};

const targetDate = new Date(Date.now() + 339 * 24 * 60 * 60 * 1000);

syllabusForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = syllabusInput.value.trim();
  if (!name) return;

  state.syllabus.unshift({ id: crypto.randomUUID(), group: 'Custom Topics', name, completed: false, revisions: 0 });
  saveState(storageKeys.syllabus, state.syllabus);
  syllabusInput.value = '';
  render();
});

targetForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const text = targetInput.value.trim();
  if (!text) return;
  state.targets.unshift({ id: crypto.randomUUID(), text, completed: false });
  saveState(storageKeys.targets, state.targets);
  targetInput.value = '';
  render();
});

revisionForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const topic = revisionTopic.value.trim();
  const progress = Number(revisionProgress.value) || 0;
  if (!topic) return;
  state.revision.unshift({ id: crypto.randomUUID(), topic, progress, note: 'Updated after session' });
  saveState(storageKeys.revision, state.revision);
  revisionForm.reset();
  revisionProgress.value = 30;
  render();
});

paperForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  const file = paperInput.files[0];
  if (!file) return;

  const blobId = await saveUploadedFile(file);
  state.papers.unshift({
    id: crypto.randomUUID(),
    name: file.name,
    blobId,
    fileType: file.type,
    size: file.size,
  });
  saveState(storageKeys.papers, state.papers);
  paperForm.reset();
  updateFilePreview(paperFilePreview, null);
  render();
});

noteForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  const title = noteTitle.value.trim();
  const content = noteContent.value.trim();
  const file = noteFileInput.files[0];
  let blobId = '';
  let fileName = '';
  let fileType = '';

  if (file) {
    blobId = await saveUploadedFile(file);
    fileName = file.name;
    fileType = file.type;
  }

  if (!title && !content && !file) return;
  state.notes.unshift({
    id: crypto.randomUUID(),
    title: title || fileName,
    content: content || 'Uploaded note',
    fileName,
    blobId,
    fileType,
    size: file?.size || 0,
  });
  saveState(storageKeys.notes, state.notes);
  noteForm.reset();
  updateFilePreview(noteFilePreview, null);
  render();
});

paperInput.addEventListener('change', () => updateFilePreview(paperFilePreview, paperInput.files[0]));
noteFileInput.addEventListener('change', () => updateFilePreview(noteFilePreview, noteFileInput.files[0]));

weakForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const text = weakInput.value.trim();
  if (!text) return;
  state.weak.unshift(text);
  saveState(storageKeys.weak, state.weak);
  weakInput.value = '';
  render();
});

importantForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const text = importantInput.value.trim();
  if (!text) return;
  state.important.unshift(text);
  saveState(storageKeys.important, state.important);
  importantInput.value = '';
  render();
});

function render() {
  renderSyllabus();
  renderTargets();
  renderRevision();
  renderPapers();
  renderNotes();
  renderList('weak', state.weak, weakList);
  renderList('important', state.important, importantList);
  updateSummary();
}

function renderSyllabus() {
  const groupOrder = ['Reasoning', 'General Awareness', 'Quantitative Aptitude', 'English', 'Exam Pattern', 'Custom Topics'];
  const groups = state.syllabus.reduce((accumulator, item) => {
    if (!accumulator[item.group]) accumulator[item.group] = [];
    accumulator[item.group].push(item);
    return accumulator;
  }, {});

  const sortedEntries = Object.entries(groups).sort(([a], [b]) => {
    const ai = groupOrder.indexOf(a);
    const bi = groupOrder.indexOf(b);
    if (ai === -1 && bi === -1) return a.localeCompare(b);
    if (ai === -1) return 1;
    if (bi === -1) return -1;
    return ai - bi;
  });

  const html = sortedEntries
    .map(([groupName, items]) => `
      <div class="checklist-group">
        <h4>${escapeHtml(groupName)}</h4>
        <ul>
          ${items
            .map(
              (item) => `
                <li>
                  <div class="custom-topic-row">
                    <div class="syllabus-main">
                      <input type="checkbox" ${item.completed ? 'checked' : ''} data-action="toggle-syllabus" data-id="${item.id}" />
                      <span class="syllabus-topic-label">${escapeHtml(item.name)}</span>
                      <span class="meta">(${item.revisions} rev)</span>
                    </div>
                    <div class="syllabus-actions">
                      <button class="small-btn" data-action="edit-syllabus" data-id="${item.id}">Edit</button>
                      <button class="small-btn danger" data-action="delete-syllabus" data-id="${item.id}">Delete</button>
                    </div>
                  </div>
                </li>
              `
            )
            .join('')}
        </ul>
      </div>
    `)
    .join('');

  syllabusChecklist.innerHTML = html || '<div class="empty-state">No syllabus topics yet.</div>';
}

function renderTargets() {
  if (!state.targets.length) {
    targetList.innerHTML = '<li class="empty-state">No targets yet. Start with one small step.</li>';
    return;
  }

  targetList.innerHTML = state.targets
    .map(
      (item) => `
        <li class="list-item">
          <div class="left">
            <input type="checkbox" ${item.completed ? 'checked' : ''} data-action="toggle-target" data-id="${item.id}" />
            <div>
              <div>${escapeHtml(item.text)}</div>
              <div class="meta">${item.completed ? 'Completed' : 'Pending'}</div>
            </div>
          </div>
          <div class="actions">
            <button class="small-btn" data-action="edit-target" data-id="${item.id}">Edit</button>
            <button class="small-btn danger" data-action="delete-target" data-id="${item.id}">Delete</button>
          </div>
        </li>
      `
    )
    .join('');
}

function renderRevision() {
  if (!state.revision.length) {
    revisionList.innerHTML = '<li class="empty-state">No revision sessions yet.</li>';
    return;
  }

  revisionList.innerHTML = state.revision
    .map(
      (item) => `
        <li class="list-item">
          <div>
            <div>${escapeHtml(item.topic)}</div>
            <div class="meta">Progress ${item.progress}% • ${escapeHtml(item.note)}</div>
          </div>
          <div class="actions">
            <button class="small-btn" data-action="edit-revision" data-id="${item.id}">Update</button>
            <button class="small-btn danger" data-action="delete-revision" data-id="${item.id}">Delete</button>
          </div>
        </li>
      `
    )
    .join('');
}

function renderPapers() {
  if (!state.papers.length) {
    paperList.innerHTML = '<li class="empty-state">Upload a paper to keep it handy.</li>';
    return;
  }

  paperList.innerHTML = state.papers
    .map(
      (item) => `
        <li class="list-item" style="flex-direction:column;align-items:stretch;gap:10px">
          <div style="display:flex;justify-content:space-between;align-items:center;gap:8px">
            <div>
              <div>${escapeHtml(item.name)}</div>
              <div class="meta">Saved locally</div>
            </div>
            <div class="actions">
              <button class="small-btn" data-action="preview-paper" data-id="${item.id}">View</button>
              <button class="small-btn danger" data-action="delete-paper" data-id="${item.id}">Delete</button>
            </div>
          </div>
          <div id="paper-preview-${item.id}" class="inline-preview hidden"></div>
        </li>
      `
    )
    .join('');
}

function renderNotes() {
  if (!state.notes.length) {
    noteList.innerHTML = '<li class="empty-state">No formula notes yet.</li>';
    return;
  }

  noteList.innerHTML = state.notes
    .map(
      (item) => `
        <li class="list-item note-card">
          <div style="display:flex;justify-content:space-between;align-items:flex-start;gap:8px;width:100%;flex-wrap:wrap">
            <div>
              <strong>${escapeHtml(item.title)}</strong>
              <div style="margin-top:4px;color:var(--muted);font-size:0.9rem">${escapeHtml(item.content)}</div>
            </div>
            <div class="actions">
              <button class="small-btn" data-action="preview-note" data-id="${item.id}">View File</button>
              <button class="small-btn" data-action="edit-note" data-id="${item.id}">Edit</button>
              <button class="small-btn danger" data-action="delete-note" data-id="${item.id}">Delete</button>
            </div>
          </div>
          <div id="note-preview-${item.id}" class="inline-preview hidden" style="width:100%"></div>
        </li>
      `
    )
    .join('');
}

function renderList(kind, items, targetElement) {
  if (!items.length) {
    targetElement.innerHTML = `<li class="empty-state">No ${kind === 'weak' ? 'weak' : 'important'} topics yet.</li>`;
    return;
  }

  targetElement.innerHTML = items
    .map(
      (item, index) => `
        <li class="list-item">
          <div class="left">
            <span>${index + 1}.</span>
            <span>${escapeHtml(item)}</span>
          </div>
          <button class="small-btn danger" data-action="delete-${kind}" data-index="${index}">Delete</button>
        </li>
      `
    )
    .join('');
}

function updateSummary() {
  const completed = state.syllabus.filter((item) => item.completed).length;
  const total = state.syllabus.length || 1;
  const pendingTargets = state.targets.filter((item) => !item.completed).length;
  completedCount.textContent = completed;
  targetCount.textContent = pendingTargets;
  const percent = Math.round((completed / total) * 100);
  progressPercent.textContent = `${percent}%`;
  progressFill.style.width = `${percent}%`;
}

function saveState(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function loadState(key, fallback) {
  const value = localStorage.getItem(key);
  return value ? JSON.parse(value) : fallback;
}

const fileDbName = 'study-planner-files';
const fileStoreName = 'files';
let fileDb = null;

function openFileDatabase() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(fileDbName, 1);
    request.onupgradeneeded = () => {
      if (!request.result.objectStoreNames.contains(fileStoreName)) {
        request.result.createObjectStore(fileStoreName, { keyPath: 'id' });
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error || new Error('Could not open file database'));
  });
}

async function ensureFileDatabase() {
  if (fileDb) return fileDb;
  fileDb = await openFileDatabase();
  return fileDb;
}

async function saveUploadedFile(file) {
  const blobId = crypto.randomUUID();
  const db = await ensureFileDatabase();
  await new Promise((resolve, reject) => {
    const tx = db.transaction(fileStoreName, 'readwrite');
    const store = tx.objectStore(fileStoreName);
    const request = store.put({ id: blobId, blob: file, name: file.name, fileType: file.type, size: file.size });
    request.onsuccess = () => resolve();
    request.onerror = () => reject(request.error || new Error('Could not save uploaded file'));
  });
  return blobId;
}

async function loadStoredFile(blobId) {
  if (!blobId) return null;
  const db = await ensureFileDatabase();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(fileStoreName, 'readonly');
    const request = tx.objectStore(fileStoreName).get(blobId);
    request.onsuccess = () => resolve(request.result || null);
    request.onerror = () => reject(request.error || new Error('Could not load stored file'));
  });
}

async function deleteStoredFile(blobId) {
  if (!blobId) return;
  const db = await ensureFileDatabase();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(fileStoreName, 'readwrite');
    const request = tx.objectStore(fileStoreName).delete(blobId);
    request.onsuccess = () => resolve();
    request.onerror = () => reject(request.error || new Error('Could not delete stored file'));
  });
}

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function updateCountdown() {
  const now = new Date();
  const distance = targetDate - now;

  if (distance <= 0) {
    countdownItems.days.textContent = '00';
    countdownItems.hours.textContent = '00';
    countdownItems.minutes.textContent = '00';
    countdownItems.seconds.textContent = '00';
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((distance / (1000 * 60)) % 60);
  const seconds = Math.floor((distance / 1000) % 60);

  countdownItems.days.textContent = String(days).padStart(2, '0');
  countdownItems.hours.textContent = String(hours).padStart(2, '0');
  countdownItems.minutes.textContent = String(minutes).padStart(2, '0');
  countdownItems.seconds.textContent = String(seconds).padStart(2, '0');
}

setInterval(updateCountdown, 1000);
updateCountdown();

function showDeleteConfirmation(onConfirm) {
  const existing = document.getElementById('deleteConfirmModal');
  if (existing) existing.remove();

  const modal = document.createElement('div');
  modal.id = 'deleteConfirmModal';
  modal.className = 'confirm-modal';
  modal.innerHTML = `
    <div class="confirm-modal-backdrop"></div>
    <div class="confirm-modal-dialog" role="dialog" aria-modal="true" aria-labelledby="confirmDeleteTitle">
      <div class="confirm-modal-icon">🗑️</div>
      <h3 id="confirmDeleteTitle">Are you sure you want to delete?</h3>
      <p>This action cannot be undone.</p>
      <div class="confirm-modal-actions">
        <button type="button" class="confirm-btn cancel" data-confirm-action="cancel">Cancel</button>
        <button type="button" class="confirm-btn confirm" data-confirm-action="confirm">Delete</button>
      </div>
    </div>
  `;

  document.body.appendChild(modal);
  requestAnimationFrame(() => modal.classList.add('is-visible'));

  const teardown = () => {
    modal.classList.remove('is-visible');
    window.setTimeout(() => modal.remove(), 180);
  };

  const backdrop = modal.querySelector('.confirm-modal-backdrop');
  backdrop.addEventListener('click', () => teardown());

  modal.querySelector('[data-confirm-action="cancel"]').addEventListener('click', () => teardown());
  modal.querySelector('[data-confirm-action="confirm"]').addEventListener('click', () => {
    teardown();
    onConfirm();
  });

  document.addEventListener('keydown', function escListener(event) {
    if (event.key === 'Escape') {
      teardown();
      document.removeEventListener('keydown', escListener);
    }
  });
}

function showEditValueModal({ title, description, initialValue, inputType = 'text', placeholder = '', onSave }) {
  const existing = document.getElementById('editTopicModal');
  if (existing) existing.remove();

  const modal = document.createElement('div');
  modal.id = 'editTopicModal';
  modal.className = 'edit-modal';
  modal.innerHTML = `
    <div class="edit-modal-backdrop"></div>
    <div class="edit-modal-dialog" role="dialog" aria-modal="true" aria-labelledby="editTopicTitle">
      <div class="edit-modal-icon">✏️</div>
      <h3 id="editTopicTitle">${escapeHtml(title)}</h3>
      <p>${escapeHtml(description)}</p>
      <form class="edit-modal-form">
        <input id="editTopicInput" type="${inputType}" value="${escapeHtml(String(initialValue))}" placeholder="${escapeHtml(placeholder)}" required />
        <div class="confirm-modal-actions">
          <button type="button" class="confirm-btn cancel" data-edit-action="cancel">Cancel</button>
          <button type="submit" class="confirm-btn confirm">Save</button>
        </div>
      </form>
    </div>
  `;

  document.body.appendChild(modal);
  requestAnimationFrame(() => modal.classList.add('is-visible'));

  const input = modal.querySelector('#editTopicInput');
  input.focus();
  input.select();

  const teardown = () => {
    modal.classList.remove('is-visible');
    window.setTimeout(() => modal.remove(), 180);
  };

  const form = modal.querySelector('.edit-modal-form');
  const backdrop = modal.querySelector('.edit-modal-backdrop');
  backdrop.addEventListener('click', () => teardown());
  modal.querySelector('[data-edit-action="cancel"]').addEventListener('click', () => teardown());

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const rawValue = input.value.trim();
    if (!rawValue) return;
    teardown();
    onSave(rawValue);
  });

  document.addEventListener('keydown', function escListener(event) {
    if (event.key === 'Escape') {
      teardown();
      document.removeEventListener('keydown', escListener);
    }
  });
}

// ── Modal / full-screen preview ──────────────────────────────────────────────
function openModal(content, fileType, fileName, options = {}) {
  const existing = document.getElementById('fileModal');
  if (existing) existing.remove();

  let inner = '';
  const isObjectUrl = typeof content === 'string' && content.startsWith('blob:');
  const isText = fileType && (fileType.startsWith('text/') || fileType === 'application/json');

  if (fileType === 'application/pdf' || isObjectUrl && fileType === 'application/pdf') {
    inner = `<iframe src="${content}" style="width:100%;height:85vh;border:none;border-radius:12px;background:#fff"></iframe>`;
  } else if (fileType && fileType.startsWith('image/')) {
    inner = `<img src="${content}" alt="${escapeHtml(fileName)}" style="max-width:100%;max-height:85vh;border-radius:12px;display:block;margin:auto" />`;
  } else if (isText) {
    inner = `<pre style="white-space:pre-wrap;word-break:break-word;color:#dcecff;margin:0;font-size:0.9rem;max-height:85vh;overflow:auto">${escapeHtml(content)}</pre>`;
  } else {
    inner = `<a href="${content}" download="${escapeHtml(fileName)}" class="small-btn" style="text-decoration:none;display:inline-block">Download ${escapeHtml(fileName)}</a>`;
  }

  const modal = document.createElement('div');
  modal.id = 'fileModal';
  modal.innerHTML = `
    <div class="modal-backdrop" id="modalBackdrop">
      <div class="modal-box">
        <div class="modal-header">
          <span class="modal-title">${escapeHtml(fileName)}</span>
          <button class="modal-close" id="modalClose">✕</button>
        </div>
        <div class="modal-body">${inner}</div>
      </div>
    </div>
  `;
  document.body.appendChild(modal);

  requestAnimationFrame(() => {
    modal.classList.add('is-visible');
  });

  const closeModal = () => {
    if (options.objectUrl) URL.revokeObjectURL(options.objectUrl);
    modal.remove();
  };

  document.getElementById('modalClose').addEventListener('click', closeModal);
  document.getElementById('modalBackdrop').addEventListener('click', (e) => {
    if (e.target === document.getElementById('modalBackdrop')) closeModal();
  });
  document.addEventListener('keydown', function escListener(e) {
    if (e.key === 'Escape') {
      closeModal();
      document.removeEventListener('keydown', escListener);
    }
  });
}

// ── Page navigation ───────────────────────────────────────────────────────────
function showPage(page, pageKey = null) {
  [dashboardPage, plannerPage, sectionPage].forEach((node) => node.classList.add('hidden'));
  page.classList.remove('hidden');
  currentPageKey = pageKey || (page.id === 'dashboardPage' ? 'dashboard' : page.id === 'planner' ? 'planner' : 'section');
}

function handleNavigation() {
  const hash = window.location.hash;
  if (hash.startsWith('#section-')) {
    const sectionKey = hash.replace('#section-', '');
    openSectionPage(sectionKey, false);
  } else if (hash === '#planner') {
    saveScrollPosition();
    showPage(plannerPage, 'planner');
    restoreScrollPosition('planner');
  } else {
    saveScrollPosition();
    showPage(dashboardPage, 'dashboard');
    restoreScrollPosition('dashboard');
  }
}

function openSectionPage(sectionKey, updateHash = true) {
  const card = document.querySelector(`.section-card[data-section="${sectionKey}"]`);
  if (!card) return;

  saveScrollPosition();
  resetSectionCardView();
  activeSectionCard = card;
  activeSectionKey = sectionKey;
  sectionContent.innerHTML = '';
  sectionContent.appendChild(card);

  card.classList.add('open');
  const sectionBody = card.querySelector('.section-body');
  if (sectionBody) sectionBody.style.display = 'block';

  const titleElement = card.querySelector('h3');
  const label = card.dataset.section?.replace(/-/g, ' ') || 'Section';
  document.getElementById('sectionTitle').textContent = titleElement ? titleElement.textContent : 'Section Details';
  document.getElementById('sectionTypeLabel').textContent = `${label.charAt(0).toUpperCase()}${label.slice(1)}`;
  showPage(sectionPage, 'section');
  requestAnimationFrame(() => restoreScrollPosition('section', sectionKey));
  if (updateHash) {
    history.pushState(null, '', `#section-${sectionKey}`);
  }
}

function closeSectionPage() {
  saveScrollPosition();
  resetSectionCardView();
  showPage(plannerPage, 'planner');
  history.pushState(null, '', '#planner');
  requestAnimationFrame(() => restoreScrollPosition('planner'));
}

window.addEventListener('hashchange', handleNavigation);
window.addEventListener('popstate', handleNavigation);
handleNavigation();

document.querySelectorAll('.section-toggle').forEach((button) => {
  button.addEventListener('click', (event) => {
    event.preventDefault();
    const card = button.closest('.section-card');
    openSectionPage(card.dataset.section);
  });
});

// Back button → Dashboard
backToDashboardButton.addEventListener('click', () => {
  saveScrollPosition();
  resetSectionCardView();
  showPage(dashboardPage, 'dashboard');
  history.pushState(null, '', '#');
  restoreScrollPosition('dashboard');
});

closeSectionPageButton.addEventListener('click', () => {
  closeSectionPage();
});

document.addEventListener('change', (event) => {
  const target = event.target;
  if (target.dataset.action === 'toggle-syllabus') {
    const item = state.syllabus.find((entry) => entry.id === target.dataset.id);
    if (item) {
      item.completed = target.checked;
      saveState(storageKeys.syllabus, state.syllabus);
      render();
    }
  }

  if (target.dataset.action === 'toggle-target') {
    const item = state.targets.find((entry) => entry.id === target.dataset.id);
    if (item) {
      item.completed = target.checked;
      saveState(storageKeys.targets, state.targets);
      render();
    }
  }
});

document.addEventListener('click', async (event) => {
  const button = event.target.closest('button');
  if (!button) return;

  const action = button.dataset.action;
  const id = button.dataset.id;

  if (action === 'delete-syllabus') {
    showDeleteConfirmation(() => {
      state.syllabus = state.syllabus.filter((item) => item.id !== id);
      saveState(storageKeys.syllabus, state.syllabus);
      render();
    });
  }

  if (action === 'edit-syllabus') {
    const item = state.syllabus.find((entry) => entry.id === id);
    if (!item) return;
    showEditValueModal({
      title: 'Edit syllabus topic',
      description: 'Update the name for this syllabus topic.',
      initialValue: item.name,
      placeholder: 'Topic name',
      onSave: (updatedName) => {
        item.name = updatedName;
        saveState(storageKeys.syllabus, state.syllabus);
        render();
      },
    });
  }

  if (action === 'delete-target') {
    showDeleteConfirmation(() => {
      state.targets = state.targets.filter((item) => item.id !== id);
      saveState(storageKeys.targets, state.targets);
      render();
    });
  }

  if (action === 'edit-target') {
    const item = state.targets.find((entry) => entry.id === id);
    if (!item) return;
    showEditValueModal({
      title: 'Edit target',
      description: 'Change the study target for this item.',
      initialValue: item.text,
      placeholder: 'Study target',
      onSave: (updatedText) => {
        item.text = updatedText;
        saveState(storageKeys.targets, state.targets);
        render();
      },
    });
  }

  if (action === 'delete-revision') {
    showDeleteConfirmation(() => {
      state.revision = state.revision.filter((item) => item.id !== id);
      saveState(storageKeys.revision, state.revision);
      render();
    });
  }

  if (action === 'edit-revision') {
    const item = state.revision.find((entry) => entry.id === id);
    if (!item) return;
    showEditValueModal({
      title: 'Update revision progress',
      description: 'Adjust the revision progress percentage.',
      initialValue: item.progress,
      inputType: 'number',
      placeholder: 'Progress %',
      onSave: (updatedProgress) => {
        item.progress = Number(updatedProgress) || 0;
        saveState(storageKeys.revision, state.revision);
        render();
      },
    });
  }

  if (action === 'delete-paper') {
    const item = state.papers.find((entry) => entry.id === id);
    if (item) {
      showDeleteConfirmation(async () => {
        await deleteStoredFile(item.blobId);
        state.papers = state.papers.filter((entry) => entry.id !== id);
        saveState(storageKeys.papers, state.papers);
        render();
      });
    }
  }

  if (action === 'delete-note') {
    const item = state.notes.find((entry) => entry.id === id);
    if (item) {
      showDeleteConfirmation(async () => {
        await deleteStoredFile(item.blobId);
        state.notes = state.notes.filter((entry) => entry.id !== id);
        saveState(storageKeys.notes, state.notes);
        render();
      });
    }
  }

  if (action === 'edit-note') {
    const item = state.notes.find((entry) => entry.id === id);
    if (!item) return;
    showEditValueModal({
      title: 'Edit note',
      description: 'Update the content of this note.',
      initialValue: item.content,
      placeholder: 'Note content',
      onSave: (updatedContent) => {
        item.content = updatedContent;
        saveState(storageKeys.notes, state.notes);
        render();
      },
    });
  }

  if (action === 'delete-weak') {
    const idx = parseInt(button.dataset.index, 10);
    if (!isNaN(idx)) {
      showDeleteConfirmation(() => {
        state.weak.splice(idx, 1);
        saveState(storageKeys.weak, state.weak);
        render();
      });
    }
  }

  if (action === 'delete-important') {
    const idx = parseInt(button.dataset.index, 10);
    if (!isNaN(idx)) {
      showDeleteConfirmation(() => {
        state.important.splice(idx, 1);
        saveState(storageKeys.important, state.important);
        render();
      });
    }
  }

  // Modal-based file preview (replaces inline expand)
  if (action === 'preview-paper') {
    const item = state.papers.find((entry) => entry.id === id);
    if (!item) return;
    const storedFile = item.blobId ? await loadStoredFile(item.blobId) : null;
    const content = item.dataUrl || (storedFile?.blob ? URL.createObjectURL(storedFile.blob) : '');
    if (!content) return;
    const fileType = item.fileType || storedFile?.fileType || '';
    const fileName = item.name || storedFile?.name || 'Saved file';
    if (storedFile?.blob && storedFile.blob.type.startsWith('text/')) {
      const text = await storedFile.blob.text();
      openModal(text, fileType, fileName);
    } else if (storedFile?.blob && storedFile.blob.type === 'application/json') {
      const text = await storedFile.blob.text();
      openModal(text, fileType, fileName);
    } else if (storedFile?.blob) {
      openModal(content, fileType, fileName, { objectUrl: content.startsWith('blob:') ? content : null });
    } else {
      openModal(content, fileType, fileName);
    }
  }

  if (action === 'preview-note') {
    const item = state.notes.find((entry) => entry.id === id);
    if (!item) return;
    const storedFile = item.blobId ? await loadStoredFile(item.blobId) : null;
    const content = item.dataUrl || (storedFile?.blob ? URL.createObjectURL(storedFile.blob) : '');
    if (!content) return;
    const fileType = item.fileType || storedFile?.fileType || '';
    const fileName = item.fileName || item.title || storedFile?.name || 'Saved note';
    if (storedFile?.blob && (storedFile.blob.type.startsWith('text/') || storedFile.blob.type === 'application/json')) {
      const text = await storedFile.blob.text();
      openModal(text, fileType, fileName);
    } else if (storedFile?.blob) {
      openModal(content, fileType, fileName, { objectUrl: content.startsWith('blob:') ? content : null });
    } else {
      openModal(content, fileType, fileName);
    }
  }
});

function updateFilePreview(container, file) {
  if (!container) return;
  if (!file) {
    container.classList.add('hidden');
    container.innerHTML = '';
    return;
  }
  const size = file.size ? `${Math.round(file.size / 1024)} KB` : 'Unknown size';
  container.innerHTML = `
    <div class="preview-meta">
      <strong>${escapeHtml(file.name)}</strong>
      <div class="meta">${escapeHtml(file.type || 'Unknown type')} • ${escapeHtml(size)}</div>
    </div>
  `;
  container.classList.remove('hidden');
}

render();