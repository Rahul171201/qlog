const handleUpvote = (user, answer, users, answers) => {
  const currentUser = users.get(user.userId);
  const currentAnswer = answers.get(answer.id);
  if (currentUser.hasDownvoted.includes(answer.id)) {
    currentAnswer.downvotes--;
    currentAnswer.upvotes++;
    answer.downvotes--;
    answer.upvotes++;
    const index = currentUser.hasDownvoted.indexOf(answer.id);
    if (index > -1) currentUser.hasDownvoted.splice(index, 1);
    currentUser.hasUpvoted.push(answer.id);
  } else if (currentUser.hasUpvoted.includes(answer.id)) {
    currentAnswer.upvotes--;
    answer.upvotes--;
    const index = currentUser.hasUpvoted.indexOf(answer.id);
    if (index > -1) currentUser.hasUpvoted.splice(index, 1);
  } else {
    currentAnswer.upvotes++;
    answer.upvotes++;
    currentUser.hasUpvoted.push(answer.id);
  }
};

export default handleUpvote;
