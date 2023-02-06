class Question {
  // private fields
  #ratedBy;

  // constructor function
  constructor(id, title, description, ownerName, ownerId, tags) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.ownerName = ownerName;
    this.answers = [];
    this.rating = 0;
    this.tags = tags;

    // initilizing private fields
    this.#ratedBy = new Map();
  }

  /**
   * Checks if the question's owner is the current logged in user and
   * updates the title if check passes
   * @param {number} ownerId
   * @param {string} title
   */
  editQuestionTitle(userId, title) {
    if (this.ownerId === userId) this.title = title;
  }

  /**
   * Checks if the question's owner is the current logged in user and
   * updates the description if check passes
   * @param {number} ownerId
   * @param {string} description
   */
  editQuestionDescription(userId, description) {
    if (this.ownerId === userId) this.description = description;
  }

  /**
   * Checks if the questions' owner is not the current logged in user and
   * adds an anser to the answers array in case check passes
   * @param {Answer} answer
   */
  addAnswer(userId, answer) {
    if (this.ownerId !== userId) this.answers.push(answer);
  }

  /**
   * Checks if the current user has already rated,
   * if not then increases the rating by one
   * @param {number} userId
   * @param {string} userName
   */
  increaseRating(userId, userName) {
    if (!this.#ratedBy.has(userId)) {
      this.#ratedBy.set(userId, userName);
      this.rating += 1;
    }
  }

  /**
   * Adds a tag to the array of question tags if the current user is the question owner
   * @param {number} userId
   * @param {string} tag
   */
  addTag(userId, tag) {
    tag = tag.toLowerCase();
    if (this.ownerName === userId) this.tags.push(tag);
  }

  /**
   * Removes a tag to the array of question tags if the current user is the question owner
   * @param {number} userId
   * @param {string} tag
   */
  removeTag(userId, tag) {
    tag = tag.toLowerCase();
    if (this.ownerName === userId) {
      const index = this.tags.indexOf(tag);
      this.tags.splice(index, 1);
    }
  }
}

export default Question;
