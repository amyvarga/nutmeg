import React, { useState, useRef } from "react";
import TextInput from '../../components/form/TextInput';
import SubmitButton from '../../components/form/SubmitButton';
import Result from './Result';
import validate from './validation';
import calculateTotalFees from '../../calculateTotalFees';
import { useFormik } from "formik";

const FeeCharges = props => {
  const alertDiv = useRef();
  const maxMonths = 36;
  const currency = "£";
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
      alertDiv.current.focus();
    }
  });
  return (

    <div>
      <section role="form">
        <h3>Fee charges</h3>
        <form onSubmit={formik.handleSubmit}>
          <fieldset>
            <legend>Calculate fee charges</legend>
            <h4>Set your amounts</h4>
            <TextInput
              name="start"
              id="start"
              value={formik.values.start}
              onChange={formik.handleChange}
              label="Starting contribution"
              ariaRequired="true"
              error={formik.errors.start}
            />
            <TextInput
              name="month"
              id="month"
              value={formik.values.month}
              onChange={formik.handleChange}
              label="Monthly contribution"
              ariaRequired="true"
              error={formik.errors.month}
            />
            <Result
              ref={alertDiv}
              fee={calc.fee}
              currency={currency}
              start={calc.start}
              monthly={calc.monthly}
              months={maxMonths}
            />
            <SubmitButton text="Calculate" />
          </fieldset>
        </form>
      </section>
    </div >
  )
}

export default FeeCharges;