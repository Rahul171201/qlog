import Question from "@/classes/Question";

const handleQuestionSubmit = (e, questions, user) => {
  e.preventDefault();

  const questionTitle = e.target[0].value;

  /**
   * FIXME: DOM MANUPILATION OR NOT;
   */
  const text = e.target[0].parentNode.nextSibling.lastChild.innerHTML;
  const questionDescription = text;

  const questionTags = [];
  for (let i = 1; i < e.target.length; i++) {
    if (e.target[i].value !== undefined && e.target[i].value !== "")
      questionTags.push(e.target[i].value);
  }

  const newQuestion = new Question(
    questions.length,
    questionTitle,
    questionDescription,
    user.userName,
    user.userId,
    questionTags,
    new Date()
  );

  const temp_ques = questions;
  temp_ques.push(newQuestion);

  return [newQuestion, temp_ques];
};

export default handleQuestionSubmit;
