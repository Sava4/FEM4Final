export const validate = values => {
  const errors = {};

  if (!values.firstName) {
    errors.firstName = "First Name is required";
  } else if (!/^[a-zA-Zа-яА-Я]+$/.test(values.firstName)) {
    errors.firstName = "Allowed characters for First Name is a-z, A-Z, а-я, А-Я"
  } else if (values.firstName.length < 2 || values.firstName.length > 25) {
    errors.firstName = "First Name must be between 2 and 25 characters"
  }

  if (!values.lastName) {
    errors.lastName = "Last Name required";
  } else if (!/^[a-zA-Zа-яА-Я]+$/.test(values.lastName)) {
    errors.lastName = "Allowed characters for Last Name is a-z, A-Z, а-я, А-Я"
  } else if (values.lastName.length < 2 || values.lastName.length > 25) {
    errors.lastName = "Last Name must be between 2 and 25 characters"
  }

  if (!values.currentPassword) {
    errors.currentPassword = "Password is required";
  } else if (values.currentPassword.length < 7 || values.currentPassword.length > 30) {
    errors.currentPassword = "Password must be between 7 and 30 characters"
  } else if (!/^[a-zA-Z0-9]+$/.test(values.currentPassword)) {
    errors.currentPassword = "Allowed characters for password is a-z, A-Z, 0-9"
  }

  if (!values.newPassword) {
    errors.newPassword = "New Password is required";
  } else if (values.newPassword.length < 7 || values.newPassword.length > 30) {
    errors.newPassword = "Password must be between 7 and 30 characters"
  } else if (!/^[a-zA-Z0-9]+$/.test(values.newPassword)) {
    errors.newPassword = "Allowed characters for password is a-z, A-Z, 0-9"
  }

  if (!values.confirmPassword) {
    errors.confirmPassword = "Confirm Password is required"
  } else if (values.confirmPassword !== values.newPassword) {
    errors.confirmPassword = "Passwords aren't the same"
  }

  if (!values.loginOrEmail) {
    errors.loginOrEmail = "Login or Email is required";
  }

  if (!values.login) {
    errors.login = "Login is required";
  } else if (!/^[a-zA-Z0-9]+$/.test(values.login)) {
    errors.login = "Allowed characters for login is a-z, A-Z, 0-9"
  } else if (values.login.length < 3 || values.login.length > 10) {
    errors.login = "Login must be between 3 and 10 characters"
  }

  if (!values.email) {
    errors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "That is not a valid email";
  }

  return errors;
};