import nonKeyWords from "@/data/nonKeywords";

const QuestionFilter = (questions, search_words) => {
  if (search_words === undefined) return Array.from(questions.values());

  let result = [];

  for (let key of questions.keys()) {
    console.log("andar aa gaya");

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
  console.log(result);
  return result;
};

export default QuestionFilter;
