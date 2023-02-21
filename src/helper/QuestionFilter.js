import nonKeyWords from "@/data/non_keywords";

const QuestionFilter = (questions, search_words) => {
  if (search_words === undefined) return questions;

  let res = questions.filter((q) => {
    let flag = false;
    let titleArray = q.title.split(" ");
    let descriptionArray = q.description.split(" ");
    let tagsArray = q.tags;

    titleArray.forEach((item) => {
      if (search_words.includes(item) && !nonKeyWords.includes(item)) {
        flag = true;
      }
    });

    descriptionArray.forEach((item) => {
      if (search_words.includes(item) && !nonKeyWords.includes(item)) {
        flag = true;
      }
    });

    tagsArray.forEach((item) => {
      if (search_words.includes(item) && !nonKeyWords.includes(item)) {
        flag = true;
      }
    });

    return flag;
  });

  return res;
};

export default QuestionFilter;
