import nonKeyWords from "@/data/nonKeywords";

/**
 * Filters the questions into an array of questions containing the
 * search text result matches
 * @param {Map} questions
 * @param {Array} search_words
 * @returns
 */
const QuestionFilter = (questions, search_words) => {
  if (search_words === undefined) return Array.from(questions.values());

  // final array of questions
  let result = [];

  for (let key of questions.keys()) {
    let pushed = false; // to track if the question is already filtered out

    let titleArray = questions.get(key).title.split(" ");
    let descriptionArray = questions.get(key).description.split(" ");
    let tagsArray = questions.get(key).tags;

    titleArray.forEach((item) => {
      if (search_words.includes(item) && !nonKeyWords.includes(item)) {
        result.push(questions.get(key));
        pushed = true;
      }
    });

    if (!pushed) {
      descriptionArray.forEach((item) => {
        if (search_words.includes(item) && !nonKeyWords.includes(item)) {
          result.push(questions.get(key));
          pushed = true;
        }
      });
    }

    if (!pushed) {
      tagsArray.forEach((item) => {
        if (search_words.includes(item) && !nonKeyWords.includes(item)) {
          result.push(questions.get(key));
          pushed = true;
        }
      });
    }
  }
  return result;
};

export default QuestionFilter;
