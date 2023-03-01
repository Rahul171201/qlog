const handleDownvote = (user, answer, users, answers) => {
  const currentUser = users.get(user.userId);
  const currentAnswer = answers.get(answer.id);
  if (currentUser.hasUpvoted.includes(answer.id)) {
    currentAnswer.downvotes++;
    currentAnswer.upvotes--;
    answer.downvotes++;
    answer.upvotes--;
    const index = currentUser.hasUpvoted.indexOf(answer.id);
    if (index > -1) currentUser.hasUpvoted.splice(index, 1);
    currentUser.hasDownvoted.push(answer.id);
  } else if (currentUser.hasDownvoted.includes(answer.id)) {
    currentAnswer.downvotes--;
    answer.downvotes--;
    const index = currentUser.hasDownvoted.indexOf(answer.id);
    if (index > -1) currentUser.hasDownvoted.splice(index, 1);
  } else {
    currentAnswer.downvotes++;
    answer.downvotes++;
    currentUser.hasDownvoted.push(answer.id);
  }
};

export default handleDownvote;
