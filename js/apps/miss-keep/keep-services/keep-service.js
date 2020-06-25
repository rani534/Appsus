import { Utils } from "../../../services/utils-service.js";

export const noteService = {
  getNotes,
  getInput,
  // addVideoNote,
  // addImgNote,
  // addTodosNote,
  addTxtNote,
};
function getNotes() {
  const notes = Utils.loadFromStorage('notes')
  if(notes){
    gNotes =  notes
    return notes
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
      placeholder: "How was it:",
      todos: [
        { txt: "Do that", doneAt: null },
        { txt: "Do this", doneAt: 187111111 },
      ],
    },
  },
].map((keep) => {
  keep.id = Utils.getRandomId();
  return keep;
});

// function addVideoNote(val) {

// }
// function addImgNote(val) {

// }
// function addTodosNote(val) {

// }
function addTxtNote(val) {
  var txt = {
     type: "note-txt",
     isPinned: false,
     info: {
       txt: val
     },
  }
  gNotes.push(txt);
     Utils.storeToStorage('notes' , gNotes)
}

