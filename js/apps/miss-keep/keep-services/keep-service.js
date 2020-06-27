import { Utils } from "../../../services/utils-service.js";

var gLastRequest = "";

export const noteService = {
  getNotes,
  getInput,
  addVideoNote,
  addImgNote,
  addTodosNote,
  addTxtNote,
  setLastRequest,
  getLastRequest,
  deleteNote,
  setEditMode,
  editVideo,
  editImg,
  editTxt,
  editTodo,
  deleteTodo,
  toggleMarkTodo,
  setBgc
};

function getNotes() {
  const notes = Utils.loadFromStorage("notes");
  if (notes) {
    gNotes = notes;
    return notes;
  }
  return gNotes;
}

function getInput() {
  return [
    "input-note-txt",
    "input-note-img",
    "input-note-todos",
    "input-note-video",
  ];
}

var gNotes = [
  {
    type: "note-txt",
    isPinned: false,
    isOnEdit: false,
    info: {
      txt: "Fullstack Me Baby!",
    },
    style: {
      backgroundColor: "#fff",
    },
  },
  {
    type: "note-img",
    isPinned: true,
    isOnEdit: false,
    info: {
      url:
        "https://d17fnq9dkz9hgj.cloudfront.net/uploads/2018/04/Bulldog_02.jpg",
      title: "Me playing Mi",
    },
    style: {
      backgroundColor: "#fff",
    },
  },
  {
    type: "note-todos",
    isPinned: true,
    isOnEdit: false,
    info: {
      todos: [
        { txt: "Do that", doneAt: null },
        { txt: "Do this", doneAt: 187111111 },
      ],
    },
    style: {
      backgroundColor: "#fff",
    },
  },
  {
    type: "note-video",
    isPinned: false,
    isOnEdit: false,
    info: {
      url: "https://www.youtube.com/embed/UiH9Jt0-fOE",
    },
    style: {
      backgroundColor: "#fff",
    },
  },
].map((keep) => {
  keep.id = Utils.getRandomId();
  return keep;
});

function addTxtNote(text) {
  var txt = {
    id: Utils.getRandomId(),
    isPinned: true,
    type: "note-txt",
    isPinned: false,
    isOnEdit: false,
    info: {
      txt: text,
    },
    style: {
      backgroundColor: "#fff",
    },
  };
  gNotes.unshift(txt);
  Utils.storeToStorage("notes", gNotes);
}

function addImgNote(url) {
  const img = {
    id: Utils.getRandomId(),
    isPinned: false,
    isOnEdit: false,
    type: "note-img",
    info: {
      url: url,
      title: "Me playing Mi",
    },
    style: {
      backgroundColor: "#fff",
    },
  };
  gNotes.unshift(img);
  Utils.storeToStorage("notes", gNotes);
}

function addTodosNote(todo) {
  const todos = {
    id: Utils.getRandomId(),
    isPinned: false,
    isOnEdit: false,
    type: "note-todos",
    info: {
      label: "How was it:",
      todos: [{ txt: todo, doneAt: null }],
    },
    style: {
      backgroundColor: "#fff",
    },
  };
  gNotes.unshift(todos);
  Utils.storeToStorage("notes", gNotes);
}

function addVideoNote(url) {
  const urls = url.split("=");
  const urlId = urls[urls.length - 1];
  const video = {
    id: Utils.getRandomId(),
    isPinned: false,
    isOnEdit: false,
    type: "note-video",
    info: {
      url: `https://www.youtube.com/embed/${urlId}`,
    },
    style: {
      backgroundColor: "#fff",
    },
  };
  gNotes.unshift(video);
  Utils.storeToStorage("notes", gNotes);
}

function setLastRequest(txt) {
  gLastRequest = txt;
}
function getLastRequest() {
  return gLastRequest;
}

function deleteNote(noteId) {
  const idx = gNotes.findIndex((note) => note.id === noteId);
  gNotes.splice(idx, 1);
  Utils.storeToStorage("notes", gNotes);
}

// GENERAL:
function setEditMode(noteId) {
  let note = gNotes.find((note) => note.id === noteId);
  note.isOnEdit = true;
}

function editVideo(noteId, url) {
  let note = gNotes.find((note) => note.id === noteId);
  const urls = url.split("=");
  const urlId = urls[urls.length - 1];
  note.info.url = `https://www.youtube.com/embed/${urlId}`;
  note.isOnEdit = false;
  Utils.storeToStorage("notes", gNotes);
}
function editImg(noteId, url) {
  let note = gNotes.find((note) => note.id === noteId);
  note.info.url = url;
  note.isOnEdit = false;
  Utils.storeToStorage("notes", gNotes);
}

function editTxt(noteId, txt) {
  let note = gNotes.find((note) => note.id === noteId);
  note.info.txt = txt;
  note.isOnEdit = false;
  Utils.storeToStorage("notes", gNotes);
}

function editTodo(noteId, txt) {
  if (!txt) {
    let note = gNotes.find((note) => note.id === noteId);
    note.isOnEdit = false;
  } else {
    let note = gNotes.find((note) => note.id === noteId);
    note.info.todos.push({ txt, doneAt: null });
    note.isOnEdit = false;
  }
  Utils.storeToStorage("notes", gNotes);
}

function deleteTodo(noteId, idx) {
  let note = gNotes.find((note) => note.id === noteId);
  note.info.todos.splice(idx, 1);
  Utils.storeToStorage("notes", gNotes);
}

function toggleMarkTodo(noteId, idx) {
  let note = gNotes.find((note) => note.id === noteId);
  note.info.todos[idx].doneAt = note.info.todos[idx].doneAt ? null : Date.now();
  console.log(note.info.todos[idx].doneAt);
  Utils.storeToStorage("notes", gNotes);
}
function setBgc(noteId ,color){
  let note = gNotes.find((note) => note.id === noteId);
  note.style.backgroundColor = color;
  Utils.storeToStorage("notes", gNotes);
}