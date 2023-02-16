class Answer {
  constructor(id, ownerId, ownerName, content, qid, date, upvotes, downvotes) {
    this.id = id;
    this.ownerId = ownerId;
    this.ownerName = ownerName;
    this.content = content;
    this.qid = qid;

    if (upvotes) this.upvotes = upvotes;
    else this.upvotes = 0;

    if (downvotes) this.downvotes = downvotes;
    else this.downvotes = 0;

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
