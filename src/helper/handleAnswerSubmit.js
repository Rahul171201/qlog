import Answer from "@/classes/Answer";

const handleAnswerSubmit = (answers, user, question, answerArea) => {
  let total_answers = answers.length;
  let id = total_answers;

  const answer = answerArea.current.innerHTML;

  let new_answer = {
    id: id,
    ownerId: user.userId,
    ownerName: user.userName,
    content: answer,
    qid: question.id,
    date: new Date(),
    upvotes: 0,
    downvotes: 0,
  };

  return new_answer;
};

export default handleAnswerSubmit;
