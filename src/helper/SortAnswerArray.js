const sortAnswerArray = (ans) => {
  let res = ans.sort((a, b) => {
    if (b.upvotes !== a.upvotes) return b.upvotes - a.upvotes;
    return a.downvotes - b.downvotes;
  });
  return res;
};

export default sortAnswerArray;
