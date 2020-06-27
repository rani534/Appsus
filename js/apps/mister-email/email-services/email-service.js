export const emailService = {
  query,
  addEmail,
  deleteEmail,
  getEmailById,
  toggleIsRead
};

import { Utils } from "../../../services/utils-service.js";

var gEmails = [
  {
    id: Utils.getRandomId(),
    subject: "Wassdap?",
    body: `תיאור התפקידלחבר שירות לסוכני ביטוח לתחום החיתום יאור התפקידלחבר שירות לסוכני ביטוח לתחום החיתוםיאור התפקידלחבר שירות לסוכני ביטוח לתחום החיתוםיאור התפקידלחבר שירות לסוכני ביטוח לתחום החיתוםיאור התפקידלחבר שירות לסוכני ביטוח לתחום החיתום`,
    isRead: false,
    sentAt: 1593236528118,
  },
  {
    id: Utils.getRandomId(),
    subject: "Waap?",
    body: `מוקד קטן ומשפחתימענה לסוכנים בלבד-ל יאור התפקידלחבר שירות לסוכני ביטוח לתחום החיתום!`,
    isRead: true,
    sentAt: 1593010094350 ,
  },
  {
    id: Utils.getRandomId(),
    subject: "Wasap?",
    body: `א ללקוחות!יאור התפקידלחבר שירות לסוכני ביטוח לתחום החיתוםיאור התפקידלחבר שירות לסוכני ביטוח לתחום החיתום`,
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
    return Promise.resolve(email)
}

function toggleIsRead(emailId){
  var emails = Utils.loadFromStorage('emails');
  const idx = emails.findIndex(email =>{
       return email.id === emailId
       })
       emails[idx].isRead = !emails[idx].isRead
       gEmails = emails;
       Utils.storeToStorage("emails", gEmails);
         
       return Promise.resolve(gEmails)
}
