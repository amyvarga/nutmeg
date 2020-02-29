const validate = ({ month, start }) => {
  const errors = {};
  if (Number(start) < 500) {
    errors.start = 'Minimum starting amount is £500';
  } else if (isNaN(start)) {
    errors.start = 'Enter a number';
  }

  if (Number(month) < 10) {
    errors.month = 'Minimum monthly contribution is £10';
  } else if (isNaN(month)) {
    errors.month = 'Enter a number';
  }

  return errors;
};

export default validate;