import User from "@/classes/User";

const handleRegister = (e, registeredUsers) => {
  e.preventDefault();

  let finalRegisteredUsers = undefined;

  const email = e.target[0].value;
  const userName = e.target[1].value;
  const password = e.target[2].value;
  const confirmPassword = e.target[3].value;
  let total_users = registeredUsers.length;

  if (password === confirmPassword) {
    let temp_users = registeredUsers;
    temp_users.push(
      new User((total_users + 1) * (total_users + 1), userName, email, password)
    );
    finalRegisteredUsers = temp_users;
  }
  return finalRegisteredUsers;
};

export default handleRegister;
