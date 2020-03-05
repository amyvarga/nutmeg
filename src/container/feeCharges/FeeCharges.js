import { useState } from "react";
import { useFormik } from "formik";
import validate from './validation';
import calculateTotalFees from '../../calculateTotalFees';

const FeeCharges = ({ render, maxMonths, currency }) => {
  const [calc, setCalc] = useState({
    start: null,
    month: null,
    fee: null
  });
  const formik = useFormik({
    initialValues: {
      start: 500,
      month: 250
    },
    validate,
    onSubmit: ({ start, month }, { setSubmitting }) => {
      const myFees = calculateTotalFees(start, month, maxMonths).toFixed(2);
      setCalc({
        start: start,
        month: month,
        fee: myFees
      });
      setSubmitting(false);
    }
  });
  return render({ ...formik, maxMonths, calc, currency });
};

export default FeeCharges;