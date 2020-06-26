import { Utils } from "../../../services/utils-service.js";

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
    info: {
      txt: "Fullstack Me Baby!",
    },
  },
  {
    type: "note-img",
    isPinned: true,
    info: {
      url: "http://some-img/me",
      title: "Me playing Mi",
    },
    style: {
      backgroundColor: "#00d",
    },
  },
  {
    type: "note-todos",
    isPinned: true,
    info: {
      placeholder: "How was it:",
      todos: [
        { txt: "Do that", doneAt: null },
        { txt: "Do this", doneAt: 187111111 },
      ],
    },
  },
  {
    type: "note-video",
    isPinned: false,
    info: {
      url: "http://some-img/me",
    },
  },
].map((keep) => {
  keep.id = Utils.getRandomId();
  return keep;
});

function addTxtNote(val) {
  var txt = {
    id: Utils.getRandomId(),
    isPinned: true,
    type: "note-txt",
    isPinned: false,
    info: {
      txt: val,
    },
  };
  gNotes.push(txt);
  Utils.storeToStorage("notes", gNotes);
}

function addImgNote(val) {
  const img = {
    id: Utils.getRandomId(),
    isPinned: false,
    type: "note-img",
    info: {
      url: val,
      title: "Me playing Mi",
    },
    style: {
      backgroundColor: "#00d",
    },
  };
  gNotes.push(img);
  Utils.storeToStorage("notes", gNotes);
}

function addTodosNote(val) {
  const todos = {
    id: Utils.getRandomId(),
    isPinned: false,
    type: "note-todos",
    info: {
      label: "How was it:",
      todos: [
        { txt: val, doneAt: null },
        { txt: val, doneAt: 187111111 },
      ],
    },
  };
  gNotes.push(todos);
  Utils.storeToStorage("notes", gNotes);
}

function addVideoNote(val) {
  const video = {
    id: Utils.getRandomId(),
    isPinned: false,
    type: "note-video",
    info: {
      url: val,
    },
  };
  gNotes.push(video);
  Utils.storeToStorage("notes", gNotes);
}

var gLastRequest = "";

function setLastRequest(txt) {
  gLastRequest = txt;
}
function getLastRequest() {
  return gLastRequest;
}

function deleteNote(noteId) {
  const idx = gNotes.findIndex((note) => note.id === noteId);
  console.log(idx)
  gNotes.splice(idx, 1);
  Utils.storeToStorage("notes", gNotes);
}