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
  toggleEditNote,
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
      backgroundColor: "#000",
    },
  },
  {
    type: "note-img",
    isPinned: true,
    isOnEdit: false,
    info: {
      url: "https://www.youtube.com/embed/tgbNymZ7vqY",
      title: "Me playing Mi",
    },
    style: {
      backgroundColor: "#000",
    },
  },
  {
    type: "note-todos",
    isPinned: true,
    isOnEdit: false,
    info: {
      placeholder: "How was it:",
      todos: [
        { txt: "Do that", doneAt: null },
        { txt: "Do this", doneAt: 187111111 },
      ],
    },
    style: {
      backgroundColor: "#000",
    },
  },
  {
    type: "note-video",
    isPinned: false,
    isOnEdit: false,
    info: {
      url: "https://www.youtube.com/embed/tgbNymZ7vqY",
    },
    style: {
      backgroundColor: "#000",
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
    isOnEdit: false,
    info: {
      txt: val,
    },
    style: {
      backgroundColor: "#000",
    },
  };
  gNotes.push(txt);
  Utils.storeToStorage("notes", gNotes);
}

function addImgNote(val) {
  const img = {
    id: Utils.getRandomId(),
    isPinned: false,
    isOnEdit: false,
    type: "note-img",
    info: {
      url: val,
      title: "Me playing Mi",
    },
    style: {
      backgroundColor: "#000",
    },
  };
  gNotes.push(img);
  Utils.storeToStorage("notes", gNotes);
}

function addTodosNote(val) {
  const todos = {
    id: Utils.getRandomId(),
    isPinned: false,
    isOnEdit: false,
    type: "note-todos",
    info: {
      label: "How was it:",
      todos: [
        { txt: val, doneAt: null },
        { txt: val, doneAt: 187111111 },
      ],
    },
    style: {
      backgroundColor: "#000",
    },
  };
  gNotes.push(todos);
  Utils.storeToStorage("notes", gNotes);
}

function addVideoNote(val) {
  const video = {
    id: Utils.getRandomId(),
    isPinned: false,
    isOnEdit: false,
    type: "note-video",
    info: {
      url: `https://www.youtube.com/embed/${val}`,
    },
    style: {
      backgroundColor: "#000",
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
  gNotes.splice(idx, 1);
  Utils.storeToStorage("notes", gNotes);
}

function toggleEditNote(noteId){
  let note = gNotes.find((note) => note.id === noteId);
    note.isOnEdit = !note.isOnEdit;  
}