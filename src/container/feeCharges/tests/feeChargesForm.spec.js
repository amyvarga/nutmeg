import React from 'react';
import { render, fireEvent, act } from '@testing-library/react';
import FeeChargesForm from '../FeeChargesForm';
import copy from '../copy';
import Result from '../Result';
import wait from 'waait';

jest.mock('../../../calculateTotalFees');
jest.mock('../Result', () => jest.fn(() => null));

describe("Given FeeCharges", () => {
  const props = {
    values: { start: 500, month: 250 },
    errors: { start: undefined, month: undefined },
    handleSubmit: jest.fn(),
    handleChange: jest.fn(),
    currency: "£",
    maxMonths: 36,
    calc: { fee: 100.00, start: 500, month: 250 }
  };

  const setup = ({
    values,
    errors,
    handleSubmit,
    handleChange,
    currency,
    maxMonths,
    calc
  }) => {

    const { container } = render(<FeeChargesForm
      values={values}
      errors={errors}
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      currency={currency}
      maxMonths={maxMonths}
      calc={calc}
    />);

    const h3 = container.querySelector('h3');
    const h4 = container.querySelector('h4');
    const legend = container.querySelector('legend');
    const start = container.querySelector('input#start');
    const month = container.querySelector('input#month');
    const button = container.querySelector('button');

    return { h3, h4, legend, start, month, button };
  };

  describe("Semantic copy", () => {
    let result;
    beforeAll(() => {
      result = setup(props);
    });

    it("contains majorHeading copy", () => {
      expect(result.h3.innerHTML).toBe(copy.majorHeading);
    });
    it("contains secondaryHeading copy", () => {
      expect(result.h4.innerHTML).toBe(copy.secondaryHeading);
    });
    it("contains formLegend copy", () => {
      expect(result.legend.innerHTML).toBe(copy.formLegend);
    });
  });

  describe("Form", () => {
    let result;
    beforeAll(() => {
      result = setup(props);
    });

    it("contains an input for start", () => {
      expect(result.start).toBeTruthy();
    });
    it("contains an input for month", () => {
      expect(result.month).toBeTruthy();
    });
    it("contains a button", () => {
      expect(result.button).toBeTruthy();
    });
  });

  describe("On change", () => {
    let result;

    beforeAll(async () => {
      result = setup(props);

      act(() => {
        fireEvent.change(
          result.start,
          { target: { value: props.values.start } }
        );
      });
      await wait(0);
    });

    it("calls onChange with the correct parameters", async () => {
      console.log(result.start.onChange.mocks);
      expect(props.handleChange).toBeCalledWith(props.values.start);
    });
  });

  describe("On submit", () => {
    let result;

    beforeAll(async () => {
      result = setup(props);

      act(() => {
        fireEvent.click(result.button);
      });
      await wait(0);
    });

    it("calls onSubmit with the correct parameters", async () => {
      // expect(calculateTotalFees).toBeCalledWith(props.start, props.month, props.months);
      console.log('props', props.handleSubmit.mock);
      expect(props.handleSubmit).toBeCalledWith(props.values.start, props.values.month, props.maxMonths);
    });

    it("updates Result component with the correct props", () => {
      expect(Result).toBeCalledWith({
        fee: props.calc.fee,
        currency: props.currency,
        start: props.calc.start,
        month: props.calc.month,
        months: props.maxMonths
      }, {});
    });
  });
});