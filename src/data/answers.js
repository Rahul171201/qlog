import questions from "./questions";
import users from "./users";

let a0 = {
  id: 0,
  ownerId: 64,
  ownerName: "Abhishek Khurana",
  content:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  qid: 0,
  date: new Date(),
  upvotes: 363,
  downvotes: 15,
  attachments: [],
};

const q0 = questions.get(a0.qid);
q0.answers.push(a0.id);
const u0 = users.get(a0.ownerId);
u0.answered.push(a0);

let a1 = {
  id: 1,
  ownerId: 1,
  ownerName: "Rahul Roy",
  content:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  qid: 2,
  date: new Date(),
  upvotes: 23,
  downvotes: 2,
  attachments: [],
};
const q1 = questions.get(a1.qid);
q1.answers.push(a1.id);
const u1 = users.get(a1.ownerId);
u1.answered.push(a1);

let a2 = {
  id: 2,
  ownerId: 64,
  ownerName: "Abhishek Khurana",
  content:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  qid: 4,
  date: new Date(),
  upvotes: 45,
  downvotes: 3,
  attachments: [],
};
const q2 = questions.get(a2.qid);
q2.answers.push(a2.id);
const u2 = users.get(a2.ownerId);
u2.answered.push(a2);

let a3 = {
  id: 3,
  ownerId: 64,
  ownerName: "Abhishek Khurana",
  content:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  qid: 2,
  date: new Date(),
  upvotes: 5,
  downvotes: 16,
  attachments: [],
};
const q3 = questions.get(a3.qid);
q3.answers.push(a3.id);
const u3 = users.get(a3.ownerId);
u3.answered.push(a3);

let a4 = {
  id: 4,
  ownerId: 4,
  ownerName: "Souvik Patra",
  content:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  qid: 1,
  date: new Date(),
  upvotes: 10,
  downvotes: 26,
  attachments: [],
};
const q4 = questions.get(a4.qid);
q4.answers.push(a4.id);
const u4 = users.get(a4.ownerId);
u4.answered.push(a4);

let a5 = {
  id: 5,
  ownerId: 4,
  ownerName: "Souvik Patra",
  content:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  qid: 0,
  date: new Date(),
  upvotes: 360,
  downvotes: 25,
  attachments: [],
};
const q5 = questions.get(a5.qid);
q5.answers.push(a5.id);
const u5 = users.get(a5.ownerId);
u5.answered.push(a5);

let a6 = {
  id: 6,
  ownerId: 1,
  ownerName: "Rahul Roy",
  content:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  qid: 3,
  date: new Date(),
  upvotes: 100,
  downvotes: 15,
  attachments: [],
};
const q6 = questions.get(a6.qid);
q6.answers.push(a6.id);
const u6 = users.get(a6.ownerId);
u6.answered.push(a6);

let a7 = {
  id: 7,
  ownerId: 1,
  ownerName: "Rahul Roy",
  content:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  qid: 0,
  date: new Date(),
  upvotes: 29,
  downvotes: 0,
  attachments: [],
};
const q7 = questions.get(a7.qid);
q7.answers.push(a7.id);
const u7 = users.get(a7.ownerId);
u7.answered.push(a7);

let a8 = {
  id: 8,
  ownerId: 49,
  ownerName: "Sushant Bhatia",
  content:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  qid: 0,
  date: new Date(),
  upvotes: 298,
  downvotes: 37,
  attachments: [],
};
const q8 = questions.get(a8.qid);
q8.answers.push(a8.id);
const u8 = users.get(a8.ownerId);
u8.answered.push(a8);

let a9 = {
  id: 9,
  ownerId: 36,
  ownerName: "Dhairya Rachchh",
  content:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  qid: 4,
  date: new Date(),
  upvotes: 899,
  downvotes: 129,
  attachments: [],
};
const q9 = questions.get(a9.qid);
q9.answers.push(a9.id);
const u9 = users.get(a9.ownerId);
u9.answered.push(a9);

let a10 = {
  id: 10,
  ownerId: 36,
  ownerName: "Dhairya Rachchh",
  content:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  qid: 0,
  date: new Date(),
  upvotes: 478,
  downvotes: 9,
  attachments: [],
};
const q10 = questions.get(a10.qid);
q10.answers.push(a10.id);
const u10 = users.get(a10.ownerId);
u10.answered.push(a10);

let res = new Map();
res.set(a0.id, a0);
res.set(a1.id, a1);
res.set(a2.id, a2);
res.set(a3.id, a3);
res.set(a4.id, a4);
res.set(a5.id, a5);
res.set(a6.id, a6);
res.set(a7.id, a7);
res.set(a8.id, a8);
res.set(a9.id, a9);
res.set(a10.id, a10);

export default res;
