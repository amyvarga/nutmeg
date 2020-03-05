import React, { useState } from "react";
import { useFormik } from "formik";
import TextInput from '../../components/form/TextInput';
import SubmitButton from '../../components/form/SubmitButton';
import Result from './Result';
import validate from './validation';
import calculateTotalFees from '../../calculateTotalFees';
import { Section, TextInputWrapper, ButtonWrapper, SectionWrapper } from './styles';
import copy from "./copy";

const FeeCharges = () => {
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
    }
  });

  return (
    <SectionWrapper>
      <Section role="form">
        <h3>{copy.majorHeading}</h3>
        <form onSubmit={formik.handleSubmit}>
          <fieldset>
            <legend>{copy.formLegend}</legend>
            <h4>{copy.secondaryHeading}</h4>
            <TextInputWrapper>
              <TextInput
                name="start"
                id="start"
                value={formik.values.start}
                onChange={formik.handleChange}
                label={copy.inputStart}
                ariaRequired="true"
                error={formik.errors.start}
                currency={currency}
              />
              <TextInput
                name="month"
                id="month"
                value={formik.values.month}
                onChange={formik.handleChange}
                label={copy.inputMonth}
                ariaRequired="true"
                error={formik.errors.month}
                currency={currency}
              />
            </TextInputWrapper>
            <Result
              fee={calc.fee}
              currency={currency}
              start={calc.start}
              month={calc.month}
              months={maxMonths}
            />
            <ButtonWrapper>
              <SubmitButton text={copy.buttonSubmit} error={formik.errors} />
            </ButtonWrapper>
          </fieldset>
        </form>
      </Section>
    </SectionWrapper>

  )
}

export default FeeCharges;