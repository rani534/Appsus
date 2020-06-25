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
    isPinned: true,
    info: {
      txt: "Fullstack Me Baby!",
    },
  },
  {
    type: "note-img",
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
