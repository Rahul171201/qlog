const handleQuestionSubmit = (e, questions, user, attachments) => {
  e.preventDefault();

  const questionTitle = e.target[0].value;
  const questionDescription = e.target[1].value;

  const questionTags = [];
  for (let i = 2; i < e.target.length; i++) {
    if (e.target[i].value !== undefined && e.target[i].value !== "")
      questionTags.push(e.target[i].value);
  }

  const newQuestion = {
    id: questions.size,
    title: questionTitle,
    description: questionDescription,
    ownerName: user.userName,
    ownerId: user.userId,
    tags: questionTags,
    date: new Date(),
    rating: 0,
    answers: [],
    attachments: attachments,
  };

  return newQuestion;
};

export default handleQuestionSubmit;
