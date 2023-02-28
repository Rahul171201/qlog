import User from "@/classes/User";

const handleRegister = (e, registeredUsers) => {
  e.preventDefault();

  const email = e.target[0].value;
  const userName = e.target[1].value;
  const password = e.target[2].value;
  const confirmPassword = e.target[3].value;
  let total_users = registeredUsers.size;

  if (password === confirmPassword) {
    let finalRegisteredUsers = registeredUsers;
    finalRegisteredUsers.set((total_users + 1) * (total_users + 1), {
      userId: (total_users + 1) * (total_users + 1),
      userName,
      email,
      password,
    });
    return finalRegisteredUsers;
  } else {
    alert("Confirm password must match password field");
  }
};

export default handleRegister;
