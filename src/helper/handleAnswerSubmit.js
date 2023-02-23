import Answer from "@/classes/Answer";

const handleAnswerSubmit = (answers, user, question) => {
  let total_answers = answers.length;
  let id = total_answers;

  const answer = document.getElementById("answerArea").innerHTML;

  let new_answer = new Answer(
    id,
    user.userId,
    user.userName,
    answer,
    question.id,
    new Date()
  );

  const temp_answers = answers;
  temp_answers.push(new_answer);

  const temp_question = question;
  temp_question.answers.push(new_answer);

  const temp_user = user;
  temp_user.answered.push(new_answer);

  return [temp_answers, temp_question, temp_user];
};

export default handleAnswerSubmit;
