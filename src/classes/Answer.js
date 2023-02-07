class Answer {
  constructor(id, ownerId, ownerName, content, qid, date) {
    this.id = id;
    this.ownerId = ownerId;
    this.ownerName = ownerName;
    this.content = content;
    this.qid = qid;
    this.upvotes = 363;
    this.downvotes = 15;
    this.date = JSON.stringify(date);
  }

  /**
   * Edits the content of the answer if the owner of the answer,
   * is the current logged in user
   * @param {number} userId
   * @param {string} content
   */
  editAnswer(userId, content) {
    if (userId === ownerId) this.content = content;
  }
}

export default Answer;
