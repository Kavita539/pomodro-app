var passwordFormat = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const validFormChecker = userDetail => {
  const { name, lastName, email, password, confirmPassword, agreement } = userDetail;
  const err = {};
  if (!name) {
    err.name = "Enter valid name";
  }

  if (!lastName) {
    err.lastName = "Enter valid lastname";
  }

  if (!email.match(mailFormat)) {
    err.email = "Enter valid email";
  }

  if (!password) {
    err.password = "Enter valid password";
  } else if (!password.match(passwordFormat)) {
    err.password = "Too weak!!";
  }
  if (!confirmPassword) {
    err.confirmPassword = "Confirm the password";
  } else if (confirmPassword !== password) {
    err.confirmPassword = "Password should match";
  }

  if (agreement === "not agree") {
    err.agreement = "Please check this box if you want to proceed";
  }
  return err;
};

const validLoginFormChecker = userDetail => {
  const { email, password } = userDetail;
  const err = {};

  if (!email.match(mailFormat)) {
    err.email = "Enter valid email";
  }

  if (!password) {
    err.password = "Enter valid password";
  }

  return err;
};

export { validFormChecker, validLoginFormChecker };