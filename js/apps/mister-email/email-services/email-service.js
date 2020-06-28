export const emailService = {
  query,
  addEmail,
  deleteEmail,
  getEmailById,
  toggleIsRead,
  unMarkEmail,
  deleteEmail
};

import { Utils } from "../../../services/utils-service.js";

var gEmails = [
  {
    sentBy: 'Rani',
    emailAddress: 'rani_Rahav_HonoraryConsulOfSeychellesIslands@gmail.com',
    id: Utils.getRandomId(),
    subject: `Welcome to AliExpress! Confirm your email address for security!`,
    body: `Dear IL,

    Welcome to the AliExpress family!
    
    Add another layer of security to your AliExpress account by confirming your email address.
    By confirming your email address you can easily track orders, receive promotional emails and recover your account details.
    
    Just click the button below. Too easy!`,
    isRead: true,
    sentAt: Date.now(),
  },
  {
    sentBy: 'Rani',
    emailAddress: 'rani_Rahav_HonoraryConsulOfSeychellesIslands@gmail.com',
    id: Utils.getRandomId(),
    subject: `How did we do?`,
    body: `Hello,

    We'd love to hear about your recent Arrivals experience, so we'd really appreciate you taking a few moments to answer a couple of questions.
    
    Please click on the link to leave your feedback
    
    Submit
    
    Thank you for your time.
    
    `,
    isRead: true,
    sentAt: 1593010094350,
  },
  {
    sentBy: 'Rani',
    emailAddress: 'rani_Rahav_HonoraryConsulOfSeychellesIslands@gmail.com',
    id: Utils.getRandomId(),
    subject: `Your Air Europa boarding pass`,
    body: `Dear Customer,

    We confirm that check-in for your flight has been successful.
    
    The PDF attached contains your boarding pass: you can print it or save it on your mobile device for presentation at the airport, at security check points as well as boarding gate.
    
    Thank you for choosing Air Europa, we wish you a pleasant trip.
    
    Air Europa
    
    If you need further assistance visit www.aireuropa.com.
    
    We recommend that you do not forward this email as it contains your personal information.
    Please do not reply to this email, as this email account is only used for outgoing emails.
    
    © 2014 Air Europa Líneas Aéreas, S.A.U.
    
    Privacy Policy | General Conditions
    
    `,
    isRead: false,
    sentAt: 1593000094350,
  },
  {
    sentBy: 'Rani',
    emailAddress: 'rani_Rahav_HonoraryConsulOfSeychellesIslands@gmail.com',
    id: Utils.getRandomId(),
    subject: `Your cancellation request was successful – ES683059570`,
    body: `
    Dear Yair Haraz,

As per your instructions we have now cancelled your booking. Any refund amount due should be in your bank account within the next 10 business days.

We hope to welcome you back on the RentSpain website in the near future    
    `,
    isRead: true,
    sentAt: 1593010094350,
  },
  {
    sentBy: 'Rani',
    emailAddress: 'rani_Rahav_HonoraryConsulOfSeychellesIslands@gmail.com',
    id: Utils.getRandomId(),
    subject: `These projects teach you how to become an AWS Cloud Architect`,
    body: `
    Drive your organization’s cloud architecture strategy
     
    Build and deploy reliable, scalable, and secure cloud services on AWS
    
    Our new AWS Cloud Architect Nanodegree program enables you to become a Cloud Architect. You’ll focus on building skills in designing cloud computing solutions that help you drive an organization’s cloud architecture strategy.
    
    In a series of real-world projects, you'll work with AWS CLI, AWS CloudFormation, Terraform, AWS Security Hub, and diagramming software like Lucidchart to design and build high availability infrastructure, and then move on to building scalable, secure, and cost-optimized architecture.
    
    By the end of the program, you'll have a portfolio that demonstrates your skill in architecting cloud infrastructure for the future of cloud computing.
    
    Your Nanodegree program projects include:
    
    Recoverability in AWS
     
    Recoverability in AWS
    
    Build a multi-availability zone, multi-region database, as well as a versioned website that can be protected from accidental or malicious disruption, with the ability to revert to previous settings if needed.
    
    Design, Provision, and Monitor AWS Infrastructure at Scale
     
    Design, Provision, and Monitor AWS Infrastructure at Scale
    
    Plan, design, provision, and monitor infrastructure in AWS using industry-standard and open source tools. Optimize infrastructure for cost and performance and use Terraform to provision AWS services in a global configuration.
    
    Securing the Recipe Vault Application
     
    Securing the Recipe Vault Application
    
    Test the security of a web application by simulating an attack scenario and exploiting cloud configuration vulnerabilities. Set up monitoring to identify suspicious behavior and vulnerable configurations and propose a DevOps build pipeline that includes security best practices.
    
    VIEW SYLLABUS
    `,
    isRead: true,
    sentAt: 1592916142555,
  },
];

function query() {
  var emails = Utils.loadFromStorage("emails");
  if (emails) return Promise.resolve(emails);
  Utils.storeToStorage("emails", gEmails)
  return Promise.resolve(gEmails);
}


function addEmail(newEmail) {
  let email = {
    sentBy: 'Rani',
    emailAddress: 'rani_Rahav_HonoraryConsulOfSeychellesIslands@gmail.com',
    id: Utils.getRandomId(),
    subject: newEmail.subject,
    body: newEmail.body,
    isRead: false,
    sentAt: Date.now(),
  }
  gEmails.unshift(email);
  Utils.storeToStorage("emails", gEmails);
}


function getEmailById(emailId) {
  var emails = Utils.loadFromStorage('emails');
  const email = emails.find((email) => email.id === emailId);
  return Promise.resolve(email)
}

function toggleIsRead(emailId) {
  var emails = Utils.loadFromStorage('emails');
  const idx = emails.findIndex(email => {
    return email.id === emailId
  })
  emails[idx].isRead = !emails[idx].isRead
  gEmails = emails;
  Utils.storeToStorage("emails", gEmails);

  return Promise.resolve(gEmails)
}

function unMarkEmail(emailId){
   var emails = Utils.loadFromStorage('emails');
  const idx = emails.findIndex(email => {
    return email.id === emailId
  })
  emails[idx].isRead = false
  gEmails = emails;
  Utils.storeToStorage("emails", gEmails);
  return Promise.resolve(gEmails)
}


function deleteEmail(emailId){
  var emails = Utils.loadFromStorage('emails');
  const idx = emails.findIndex(email => {
    return email.id === emailId
  })
  emails.splice(idx ,1)
  gEmails = emails;
  Utils.storeToStorage("emails", gEmails);
  return Promise.resolve(gEmails)
}

