import Answer from "@/classes/Answer";
import questions from "./questions";
import users from "./users";

let a0 = new Answer(
  0,
  64,
  "Abhishek Khurana",
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  0,
  new Date(),
  363,
  15
);
questions[a0.qid].answers.push(a0);
users.forEach((u) => {
  if (a0.ownerId === u.userId) {
    u.answered.push(a0);
  }
});

let a1 = new Answer(
  1,
  25,
  "Jinesh Kanjiya",
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  2,
  new Date(),
  23,
  2
);
questions[a1.qid].answers.push(a1);
users.forEach((u) => {
  if (a1.ownerId === u.userId) {
    u.answered.push(a1);
  }
});

let a2 = new Answer(
  2,
  64,
  "Abhishek Khurana",
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  4,
  new Date(),
  45,
  3
);
questions[a2.qid].answers.push(a2);
users.forEach((u) => {
  if (a2.ownerId === u.userId) {
    u.answered.push(a2);
  }
});

let a3 = new Answer(
  3,
  64,
  "Abhishek Khurana",
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  2,
  new Date(),
  5,
  16
);
questions[a3.qid].answers.push(a3);
users.forEach((u) => {
  if (a3.ownerId === u.userId) {
    u.answered.push(a3);
  }
});

let a4 = new Answer(
  4,
  4,
  "Souvik Patra",
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  1,
  new Date(),
  10,
  26
);
questions[a4.qid].answers.push(a4);
users.forEach((u) => {
  if (a4.ownerId === u.userId) {
    u.answered.push(a4);
  }
});

let a5 = new Answer(
  5,
  4,
  "Souvik Patra",
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  0,
  new Date(),
  360,
  25
);
questions[a5.qid].answers.push(a5);
users.forEach((u) => {
  if (a5.ownerId === u.userId) {
    u.answered.push(a5);
  }
});

let a6 = new Answer(
  6,
  1,
  "Rahul Roy",
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  3,
  new Date(),
  100,
  15
);
questions[a6.qid].answers.push(a6);
users.forEach((u) => {
  if (a6.ownerId === u.userId) {
    u.answered.push(a6);
  }
});

let a7 = new Answer(
  7,
  1,
  "Rahul Roy",
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  0,
  new Date(),
  29,
  0
);
questions[a7.qid].answers.push(a7);
users.forEach((u) => {
  if (a7.ownerId === u.userId) {
    u.answered.push(a7);
  }
});

let a8 = new Answer(
  8,
  49,
  "Sushant Bhatia",
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  0,
  new Date(),
  298,
  37
);
questions[a8.qid].answers.push(a8);
users.forEach((u) => {
  if (a8.ownerId === u.userId) {
    u.answered.push(a8);
  }
});

let a9 = new Answer(
  9,
  36,
  "Dhairya Rachchh",
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  4,
  new Date(),
  899,
  129
);
questions[a9.qid].answers.push(a9);
users.forEach((u) => {
  if (a9.ownerId === u.userId) {
    u.answered.push(a9);
  }
});

let a10 = new Answer(
  10,
  36,
  "Dhairya Rachchh",
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  0,
  new Date(),
  478,
  9
);
questions[a10.qid].answers.push(a10);
users.forEach((u) => {
  if (a10.ownerId === u.userId) {
    u.answered.push(a10);
  }
});

let res = [a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10];

export default res;
