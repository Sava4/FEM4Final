export const validate = values => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = "Required";
  }
  if (!values.lastName) {
    errors.lastName = "Required";
  }
  if (!values.shipping) {
    errors.shipping = "Required";
  }
  if (!values.payment) {
    errors.payment = "Required";
  }
  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  if (!values.phone) {
    errors.phone = "Required";
  } else if (
    !/^((\+3)8)((0\(\d{2}\)?)|(\(0\d{2}\))|(0\d{2}))\d{7}$/.test(values.phone)
  ) {
    errors.phone = "Invalid phone. The phone number have to start +380";
  }
  return errors;
};
