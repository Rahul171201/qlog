import removeTag from "./RemoveTag";

const addTag = (e) => {
  e.preventDefault();
  const parentElement = e.target.parentNode;
  const newElement = document.createElement("div");
  const inputElement = document.createElement("input");
  const deleteButton = document.createElement("button");
  inputElement.style.width = "160px";
  inputElement.style.height = "40px";
  inputElement.style.padding = "10px";
  inputElement.type = "text";
  inputElement.required = "true";
  deleteButton.style.width = "30px";
  deleteButton.style.height = "30px";
  deleteButton.style.backgroundColor = "#B73E3E";
  deleteButton.style.border = "none";
  deleteButton.style.borderRadius = "50%";
  deleteButton.style.color = "white";
  deleteButton.style.cursor = "pointer";
  deleteButton.style.fontSize = "1.5rem";
  deleteButton.onmouseenter = (e) => {
    e.target.style.backgroundColor = "#DD5353";
  };
  deleteButton.onmouseleave = (e) => {
    e.target.style.backgroundColor = "#B73E3E";
  };
  deleteButton.onclick = (e) => {
    removeTag(e.target.parentNode);
  };
  deleteButton.style.display = "flex";
  deleteButton.style.justifyContent = "center";
  deleteButton.style.alignItems = "center";
  deleteButton.innerHTML = "-";
  newElement.append(inputElement);
  newElement.append(deleteButton);
  newElement.style.display = "flex";
  newElement.style.width = "200px";
  newElement.style.justifyContent = "space-between";
  newElement.style.alignItems = "center";
  newElement.style.marginBottom = "20px";
  parentElement.prepend(newElement);
};

export default addTag;
