import users from "./users";
let q0 = {
  id: 0,
  title: "Why are men becoming lazy day by day?",
  description: `According to recent studies, men have become lazy over the past decade. 
  Laziness not only reduces productivity but also impacts health. Moreover,
  It has been noticed that men get more lazy during the rainy and autumn months
  in our country.
  <img src="/images/lazy-graph.png" alt="graph" width="300" height="auto" style="display:block">
  I wanted to know the reasons behind this.`,
  ownerName: "Sainath Reddy",
  ownerId: 16,
  tags: ["research", "health"],
  date: new Date(),
  rating: 124,
  answers: [],
  attachments: [],
};
const user0 = users.get(q0.ownerId);
user0.asked.push(q0);

let q1 = {
  id: 1,
  title: "How to survive the cold in Delhi?",
  description: `The temperature in Delhi and Gurgaon has significantly gone down.
   This year the winter is very severe. Why is it happening this year.
   I'm facing a lot of problems including health problems.
   The winter is not only getting out of bounds for us, it's for the outside
   animals as well. The enviornment seems to be be getting extremely survival unfriendly!
   I dont understand! Someone please explain`,
  ownerName: "Rahul Roy",
  ownerId: 1,
  tags: ["climate", "health", "weather"],
  date: new Date(),
  rating: 263,
  answers: [],
  attachments: [],
};
const user1 = users.get(q1.ownerId);
user1.asked.push(q1);

let q2 = {
  id: 2,
  title: "Will Narendra Modi become Prime Minister again?",
  description: `I want to know how the political scenario would be 5 years down the line.
  With the emergence of new political groups supporting Congress, 
  will Modi be able to defend his seat again? Its not only me but the nation wants to know I'm sure.
  Please share your views\n
  <img src="/images/modi.avif" alt="modi" width="300" height="auto" style="display:block">
  `,
  ownerName: "Jinesh Kanjiya",
  ownerId: 25,
  tags: ["politics", "modi", "india"],
  date: new Date(),
  rating: 25,
  answers: [],
  attachments: [],
};
const user2 = users.get(q2.ownerId);
user2.asked.push(q2);

let q3 = {
  id: 3,
  title: "What are the latest technological advancements in Web Technology",
  description: `According to latest sources, Web technology is progressing
  very rapidly with the advancement of many tools. I wanted to know some of the latest 
  progress. Great help if anybody could share!`,
  ownerName: "Sushant Bhatia",
  ownerId: 49,
  tags: ["technology", "industry"],
  date: new Date(),
  rating: 156,
  answers: [],
  attachments: [],
};
const user3 = users.get(q3.ownerId);
user3.asked.push(q3);

let q4 = {
  id: 4,
  title: "Who is better Ronaldo or Messi?",
  description: `Everybody debates on this question. But I wanted to know the views of you folks!
    Is the argentinian star better than the portugese champion? Or is it
    not justified to compare them...
    <img src="/images/messi-ronaldo.webp" alt="messi and ronaldo" width="300" height="auto" style="display:block">
    Messi had a fantastic career with Barcelona, winning the Champions league 
    and golden boot, while the Real Madrid star is not behing in this respect as well.
    So on what ground can we differentiate?
  `,
  ownerName: "Rahul Roy",
  ownerId: 1,
  tags: ["sports", "football"],
  date: new Date(),
  rating: 367,
  answers: [],
  attachments: [],
};
const user4 = users.get(q4.ownerId);
user4.asked.push(q4);

let q5 = {
  id: 5,
  title: "Are there more coffee persons in this world than tea?",
  description: `Which type of people are more in this world? Those who like coffee or those who like tea? Just a curious question!`,
  ownerName: "Arushi Wadhwa",
  ownerId: 100,
  tags: ["social", "culture", "food", "drinks"],
  date: new Date(),
  rating: 128,
  answers: [],
  attachments: [],
};
const user5 = users.get(q5.ownerId);
user5.asked.push(q5);

let res = new Map();
res.set(q0.id, q0);
res.set(q1.id, q1);
res.set(q2.id, q2);
res.set(q3.id, q3);
res.set(q4.id, q4);
res.set(q5.id, q5);

export default res;
