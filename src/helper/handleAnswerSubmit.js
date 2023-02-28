const handleAnswerSubmit = (answers, user, question, content, attachments) => {
  let total_answers = answers.size;
  let id = total_answers;

  let new_answer = {
    id: id,
    ownerId: user.userId,
    ownerName: user.userName,
    content: content,
    qid: question.id,
    date: new Date(),
    upvotes: 0,
    downvotes: 0,
    attachments: attachments,
  };

  return new_answer;
};

export default handleAnswerSubmit;
