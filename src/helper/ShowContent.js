const showContent = (e, qid, id) => {
  const continueBox = document.getElementById("continueBox" + qid);
  continueBox.style.display = "none";
  const contentBox = document.getElementById("description" + id);
  contentBox.style.height = "min-content";
  contentBox.style.opacity = "1";
};

export default showContent;
