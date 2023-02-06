import Question from "@/classes/Question";

let q0 = new Question(
  0,
  "Why are men becoming lazy day by day?",
  `According to recent studies, men have become lazy over the past decade. 
  Laziness not only reduces productivity but also impacts health. 
  I wanted to know the reasons behind this.`,
  "Sainath Reddy",
  16,
  ["research", "health"]
);

let q1 = new Question(
  1,
  "How to survive the cold in Delhi?",
  `The temperature in Delhi and Gurgaon has significantly gone down.
   This year the winter is very severe. Why is it happening this year.
   I'm facing a lot of problems including health problems.
   I dont understand! Someone please explain`,
  "Rahul Roy",
  1,
  ["climate", "health", "weather"]
);

let q2 = new Question(
  2,
  "Will Narendra Modi become Prime Minister again?",
  `My simple question is : WILL NARENDRA MODI BECOME PM AGAIN THIS YEAR?.
  With the emergence of new political groups supporting Congress, 
  will Modi be able to defend his seat again? Its not only me but the nation wants to know.
  Please share your views`,
  "Jinesh Kanjiya",
  25,
  ["politics", "modi", "india"]
);

let q3 = new Question(
  3,
  "What are the latest technological advancements in Web Technology",
  `According to latest sources, Web technology is progressing
  very rapidly with the advancement of many tools. I wanted to know some of the latest 
  progress. Great help if anybody could share!`,
  "Sushant Bhatia",
  49,
  ["technology", "industry"]
);

let q4 = new Question(
  4,
  "Who is better Ronaldo or Messi?",
  `Everybody debates on this question. But I wanted to know the views of you folks!`,
  "Rahul Roy",
  1,
  ["sports", "football"]
);

let res = [q0, q1, q2, q3, q4];

export default res;
