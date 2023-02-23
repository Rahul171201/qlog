const uploadImage = (e, node) => {
  const uploadImageButton = e.target;

  let reader = new FileReader();
  reader.readAsDataURL(uploadImageButton.files[0]);

  reader.onload = () => {
    const img = `<img src=${reader.result} alt='question-image' style='width: 30vw; display: block; height: auto;' />`;
    node.innerHTML = node.innerHTML + img;
  };
  e.target.value = "";
};

export default uploadImage;
