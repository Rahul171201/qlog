class Answer {
  constructor(id, ownerId, ownerName, content, qid) {
    this.id = id;
    this.content = content;
    this.qid = qid;
    this.upvotes = 0;
    this.downvotes = 0;
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
