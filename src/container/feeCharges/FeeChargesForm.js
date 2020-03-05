import React from "react";
import TextInput from '../../components/form/TextInput';
import SubmitButton from '../../components/form/SubmitButton';
import Result from './Result';
import { Section, TextInputWrapper, ButtonWrapper, SectionWrapper } from './styles';
import copy from "./copy";

const FeeChargesForm = ({
  values,
  errors,
  handleSubmit,
  handleChange,
  currency,
  maxMonths,
  calc
}) => {
  return (
    <SectionWrapper>
      <Section role="form">
        <h3>{copy.majorHeading}</h3>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <legend>{copy.formLegend}</legend>
            <h4>{copy.secondaryHeading}</h4>
            <TextInputWrapper>
              <TextInput
                name="start"
                id="start"
                value={values.start}
                onChange={handleChange}
                label={copy.inputStart}
                ariaRequired="true"
                error={errors.start}
                currency={currency}
              />
              <TextInput
                name="month"
                id="month"
                value={values.month}
                onChange={handleChange}
                label={copy.inputMonth}
                ariaRequired="true"
                error={errors.month}
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
              <SubmitButton text={copy.buttonSubmit} error={errors} />
            </ButtonWrapper>
          </fieldset>
        </form>
      </Section>
    </SectionWrapper>

  )
}

export default FeeChargesForm;