export const emailService = {
  query,
  addEmail,
  deleteEmail,
  getEmailById
};

import { Utils } from "../../../services/utils-service.js";

var gEmails = [
  {
    id: Utils.getRandomId(),
    subject: "Wassdap?",
    body: `תיאור התפקידלחבר שירות לסוכני ביטוח לתחום החיתום`,
    isRead: false,
    sentAt: new Date(),
  },
  {
    id: Utils.getRandomId(),
    subject: "Waap?",
    body: `מוקד קטן ומשפחתימענה לסוכנים בלבד-ל!`,
    isRead: true,
    sentAt: 1593010094350 ,
  },
  {
    id: Utils.getRandomId(),
    subject: "Wasap?",
    body: `א ללקוחות!`,
    isRead: false,
    sentAt:  1592916142555 ,
  },
];

function query() {
  var emails = Utils.loadFromStorage("emails");
  if (emails) return Promise.resolve(emails);
  Utils.storeToStorage("emails", gEmails)
  return Promise.resolve(gEmails);
}

function addEmail(email) {
  gEmails.unshift(email);
  Utils.storeToStorage("emails", gEmails);
}
function deleteEmail(emailId) {
  const idx = gEmails.findIndex((email) => {
    return email.id === emailId;
  });
  gEmails.splice(idx, 1);
  Utils.storeToStorage("emails", gEmails);
}

function getEmailById(emailId) {
    var emails = Utils.loadFromStorage('emails');
    const email = emails.find((email) => email.id === emailId);
    console.log(email)
    return Promise.resolve(email);
}


