const handleDescriptionDisplay = (desc) => {
  const element = document.createElement("div");
  element.innerHTML = desc;
  const description = document.getElementById("description");
  description.innerHTML = "";
  description.append(element);
};

export default handleDescriptionDisplay;
