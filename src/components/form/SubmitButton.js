import React from "react";
import Button from './styles/submitButton';

const SubmitButton = ({ error, text }) => {
  let hasError = false;
  if (Object.entries(error).length > 0) hasError = true;
  return (
    <Button disabled={hasError} hasError={hasError} type="submit">{text}</Button>
  );
}

export default SubmitButton;