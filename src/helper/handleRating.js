const handleRating = (user, users, question) => {
  const currentUser = users.get(user.userId);
  if (currentUser.hasRated.includes(question.id)) {
    question.rating--;
    const index = currentUser.hasRated.indexOf(question.id);
    if (index > -1) currentUser.hasRated.splice(index, 1);
  } else {
    currentUser.hasRated.push(question.id);
    question.rating++;
  }
};

export default handleRating;
