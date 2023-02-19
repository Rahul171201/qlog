import Question from "@/classes/Question";
import users from "./users";

let q0 = new Question(
  0,
  "Why are men becoming lazy day by day?",
  `According to recent studies, men have become lazy over the past decade. 
  Laziness not only reduces productivity but also impacts health. Moreover,
  It has been noticed that men get more lazy during the rainy and autumn months
  in our country.
  <img src="/images/lazy-graph.png" alt="graph" width="300" height="auto" style="display:block">
  I wanted to know the reasons behind this.`,
  "Sainath Reddy",
  16,
  ["research", "health"],
  new Date(),
  124
);
users.forEach((u) => {
  if (q0.ownerId === u.userId) {
    u.asked.push(q0);
  }
});

let q1 = new Question(
  1,
  "How to survive the cold in Delhi?",
  `The temperature in Delhi and Gurgaon has significantly gone down.
   This year the winter is very severe. Why is it happening this year.
   I'm facing a lot of problems including health problems.
   The winter is not only getting out of bounds for us, it's for the outside
   animals as well. The enviornment seems to be be getting extremely survival unfriendly!
   I dont understand! Someone please explain`,
  "Rahul Roy",
  1,
  ["climate", "health", "weather"],
  new Date(),
  263
);
users.forEach((u) => {
  if (q1.ownerId === u.userId) {
    u.asked.push(q1);
  }
});

let q2 = new Question(
  2,
  "Will Narendra Modi become Prime Minister again?",
  `I want to know how the political scenario would be 5 years down the line.
  With the emergence of new political groups supporting Congress, 
  will Modi be able to defend his seat again? Its not only me but the nation wants to know I'm sure.
  Please share your views\n
  <img src="/images/modi.avif" alt="modi" width="300" height="auto" style="display:block">
  `,
  "Jinesh Kanjiya",
  25,
  ["politics", "modi", "india"],
  new Date(),
  25
);
users.forEach((u) => {
  if (q2.ownerId === u.userId) {
    u.asked.push(q2);
  }
});

let q3 = new Question(
  3,
  "What are the latest technological advancements in Web Technology",
  `According to latest sources, Web technology is progressing
  very rapidly with the advancement of many tools. I wanted to know some of the latest 
  progress. Great help if anybody could share!`,
  "Sushant Bhatia",
  49,
  ["technology", "industry"],
  new Date(),
  156
);
users.forEach((u) => {
  if (q3.ownerId === u.userId) {
    u.asked.push(q3);
  }
});

let q4 = new Question(
  4,
  "Who is better Ronaldo or Messi?",
  `Everybody debates on this question. But I wanted to know the views of you folks!
    Is the argentinian star better than the portugese champion? Or is it
    not justified to compare them...
    <img src="/images/messi-ronaldo.webp" alt="messi and ronaldo" width="300" height="auto" style="display:block">
    Messi had a fantastic career with Barcelona, winning the Champions league 
    and golden boot, while the Real Madrid star is not behing in this respect as well.
    So on what ground can we differentiate?
  `,
  "Rahul Roy",
  1,
  ["sports", "football"],
  new Date(),
  367
);
users.forEach((u) => {
  if (q4.ownerId === u.userId) {
    u.asked.push(q4);
  }
});

let q5 = new Question(
  5,
  "Are there more coffee persons in this world than tea?",
  `Which type of people are more in this world? Those who like coffee or those who like tea? Just a curious question!`,
  "Arushi Wadhwa",
  100,
  ["social", "culture", "food", "drinks"],
  new Date(),
  128
);
users.forEach((u) => {
  if (q5.ownerId === u.userId) {
    u.asked.push(q5);
  }
});

let res = [q0, q1, q2, q3, q4, q5];

export default res;
