export const validate = values => {
  const errors = {};

  if (!values.currentPassword) {
    errors.currentPassword = "Password is required";
  } else if (
    values.currentPassword.length < 7 ||
    values.currentPassword.length > 30
  ) {
    errors.currentPassword = "Password must be between 7 and 30 characters";
  } else if (!/^[a-zA-Z0-9]+$/.test(values.currentPassword)) {
    errors.currentPassword = "Allowed characters for password is a-z, A-Z, 0-9";
  }

  if (!values.newPassword) {
    errors.newPassword = "New Password is required";
  } else if (values.newPassword.length < 7 || values.newPassword.length > 30) {
    errors.newPassword = "Password must be between 7 and 30 characters";
  } else if (!/^[a-zA-Z0-9]+$/.test(values.newPassword)) {
    errors.newPassword = "Allowed characters for password is a-z, A-Z, 0-9";
  }

  if (!values.confirmPassword) {
    errors.confirmPassword = "Confirm Password is required";
  } else if (values.confirmPassword !== values.newPassword) {
    errors.confirmPassword = "Passwords aren't the same";
  }

  return errors;
};
