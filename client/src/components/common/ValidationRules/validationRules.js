export function firstNameValidate(firstName) {
  if (!firstName) {
    return "First Name is required";
  } else if (!/^[a-zA-Zа-яА-Я]+$/.test(firstName)) {
    return "Allowed characters for First Name is a-z, A-Z, а-я, А-Я";
  } else if (firstName.length < 2 || firstName.length > 25) {
    return "First Name must be between 2 and 25 characters";
  }
}

export function lastNameValidate(lastName) {
  if (!lastName) {
    return "Last Name required";
  } else if (!/^[a-zA-Zа-яА-Я]+$/.test(lastName)) {
    return "Allowed characters for Last Name is a-z, A-Z, а-я, А-Я";
  } else if (lastName.length < 2 || lastName.length > 25) {
    return "Last Name must be between 2 and 25 characters";
  }
}

export function emailValidate(email) {
  if (!email) {
    return "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    return "That is not a valid email";
  }
}

export function telephoneValidate(telephone) {
  if (!/^\+380\d{3}\d{2}\d{2}\d{2}$/.test(telephone)) {
    return "Phone number should start +380";
  }
}

export function passwordValidate(password) {
  if (!password) {
    return "Password is required";
  } else if (password.length < 7 || password.length > 30) {
    return "Password must be between 7 and 30 characters";
  } else if (!/^[a-zA-Z0-9]+$/.test(password)) {
    return "Allowed characters for password is a-z, A-Z, 0-9";
  }
}

export function confirmPasswordValidate(confirmPassword, password) {
  if (!confirmPassword) {
    return "Confirm Password is required";
  } else if (confirmPassword !== password) {
    return "Passwords aren't the same";
  }
}

export function loginValidate(login) {
  if (!login) {
    return "Login is required";
  } else if (!/^[a-zA-Z0-9]+$/.test(login)) {
    return "Allowed characters for login is a-z, A-Z, 0-9";
  } else if (login.length < 3 || login.length > 10) {
    return "Login must be between 3 and 10 characters";
  }
}

export function loginOrEmailValidate(loginOrEmail) {
  if (!loginOrEmail) {
    return "Login or Email is required";
  }
}

export const validate = values => {
  const errors = {};
  const firstName = firstNameValidate(values.firstName);
  const lastName = lastNameValidate(values.lastName);
  const email = emailValidate(values.email);
  const telephone = telephoneValidate(values.telephone);
  const password = passwordValidate(values.password);
  const confirmPassword = confirmPasswordValidate(values.confirmPassword);
  const login = loginValidate(values.login);
  const loginOrEmail = loginOrEmailValidate(values.loginOrEmail);

  if (firstName) {
    errors.firstName = firstName;
  }

  if (lastName) {
    errors.lastName = lastName;
  }

  if (email) {
    errors.email = email;
  }

  if (telephone) {
    errors.telephone = telephone;
  }

  if (password) {
    errors.password = password;
  }

  if (confirmPassword) {
    errors.confirmPassword = confirmPassword;
  }

  if (login) {
    errors.login = login;
  }

  if (loginOrEmail) {
    errors.loginOrEmail = loginOrEmail;
  }

  return errors;
};
