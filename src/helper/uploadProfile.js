const uploadProfile = (e, user) => {
  const profileImage = e.target;
  let reader = new FileReader();
  let temp_user = user;
  reader.readAsDataURL(profileImage.files[0]);
  reader.onload = () => {
    temp_user = user;
    temp_user.profileImage = reader.result;
  };
  e.target.value = "";

  return temp_user;
};

export default uploadProfile;
