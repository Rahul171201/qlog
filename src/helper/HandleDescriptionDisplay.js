const handleDescriptionDisplay = (desc, id) => {
  const element = document.createElement("div");
  element.innerHTML = desc;
  let description;
  if (id !== undefined) {
    description = document.getElementById("description" + id);
  } else {
    description = document.getElementById("description");
  }
  description.innerHTML = "";
  description.append(element);
};

export default handleDescriptionDisplay;
