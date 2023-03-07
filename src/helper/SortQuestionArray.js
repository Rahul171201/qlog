const sortQuestionArray = (arr) => {
  if (!arr) return null;
  let res = arr.sort((a, b) => {
    return b.rating - a.rating;
  });
  return res;
};

export default sortQuestionArray;
