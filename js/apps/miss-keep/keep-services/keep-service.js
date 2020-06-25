import { Utils } from '../../../services/utils-service.js';


export const notService = {
  getNotes,
  getInput
};
function getNotes() {
  return notes;
}

function getInput(){
  return ['input-note-txt', 'input-note-img' , 'input-note-todos' ,'input-note-video']
}


var notes = [
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
  }
].map(keep => keep.id = Utils.getRandomId)
