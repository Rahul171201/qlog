class User {
  // fields
  #upvoted;
  #downvoted;
  #rated;

  // constructor function
  constructor(
    userId,
    userName,
    email,
    password,
    profileImage,
    asked,
    answered
  ) {
    this.userId = userId;
    this.userName = userName;
    this.email = email;

    if (asked) this.asked = asked;
    else this.asked = [];

    if (answered) this.answered = answered;
    else this.answered = [];

    this.#upvoted = new Map();
    this.#downvoted = new Map();
    this.#rated = new Map();
    this.password = password;

    if (profileImage) this.profileImage = profileImage;
    else this.profileImage = "/profiles/unknown-user.png";
  }

  /**
   * Adds an answer by the user into answered array
   * @param {Answer} answer
   */
  answer(answer) {
    this.answered.push(answer);
  }

  /**
   * Upvotes an answer and stores the answer into user's database
   * @param {Answer} answer
   */
  upvote(answer) {
    if (this.#downvoted.has(answer.id)) {
      this.#downvoted.delete(answer.id);
      this.#upvoted.set(answer.id, answer);
      answer.upvotes += 1;
      answer.downvotes -= 1;
    } else if (!this.#upvoted.has(answer.id)) {
      this.#upvoted.set(answer.id, answer);
      answer.upvotes += 1;
    } else {
      this.#upvoted.delete(answer.id);
      answer.upvotes -= 1;
    }
  }

  /**
   * Downvotes an answer and stores the answer into user's database
   * @param {Answer} answer
   */
  downvote(answer) {
    if (this.#upvoted.has(answer.id)) {
      this.#upvoted.delete(answer.id);
      this.#downvoted.set(answer.id, answer);
      answer.downvotes += 1;
      answer.upvotes -= 1;
    } else if (!this.#downvoted.has(answer.id)) {
      this.#downvoted.set(answer.id, answer);
      answer.downvotes += 1;
    } else {
      this.#downvoted.delete(answer.id);
      answer.downvotes -= 1;
    }
  }

  /**
   * Increases the rating of a question by one if the user has not already rated
   * @param {Question} question
   */
  rate(question) {
    if (!this.#rated.has(question.id)) {
      this.#rated.set(question.id, question);
      question.rating += 1;
    } else {
      this.#rated.delete(question.id);
      question.rating -= 1;
    }
  }
}

export default User;
