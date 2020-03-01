import copy from './copy';

const minStart = Number(500);
const minMonth = Number(10);

const validate = ({ month, start }) => {
  const errors = {};
  if (Number(start) < minStart) {
    errors.start = copy.errorStartMin;
  } else if (isNaN(start)) {
    errors.start = copy.errorNum;
  }
  if (Number(month) < minMonth) {
    errors.month = copy.errorMonthtMin;
  } else if (isNaN(month)) {
    errors.month = copy.errorNum;
  }
  return errors;
};

export default validate;