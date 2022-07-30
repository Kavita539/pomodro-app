const validSignupFormChecker = userDetail => {
    const { firstName, lastName, email, password, confirmPassword, agreement } = userDetail;
  const err = {};
  if (!firstName) {
    err.firstName = "Enter valid name";
  }

  if (!lastName) {
    err.lastName = "Enter valid lastname";
  }

  if (!email) {
    err.email = "Enter valid email";
  }

  if (!password) {
    err.password = "Enter valid password";
  }
  else if (!password) {
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

const validLoginFormChecker = userDetail =>{
    const { email, password } = userDetail;
  const err = {};

  if (!email) {
    err.email = "Enter valid email";
  }

  if (!password) {
    err.password = "Enter valid password";
  }

  return err;
};

export {validSignupFormChecker, validLoginFormChecker};
