import React from 'react';
import { render } from '@testing-library/react';
import Result from '../Result';
import copy from '../copy';

describe("Given Result", () => {
  const { resultAriaAlert } = copy;

  const props = {
    fee: null,
    currency: "£",
    start: 500,
    month: 250,
    months: 36
  };

  const setup = ({
    fee, currency, start, month, months
  }) => {
    const { container } = render(<Result
      fee={fee}
      currency={currency}
      start={start}
      month={month}
      months={months}
    />);

    return {
      holdingEle: container.querySelector('.result'),
      copy: container.querySelector('p'),
    };
  };
  beforeEach(() => {
    jest.resetAllMocks();
  });

  describe("When there is no fee", () => {
    let result;
    beforeAll(() => {
      result = setup(props);
    });

    describe("Holding element", () => {
      it("contains a role attribute whose value is alert", () => {
        expect(result.holdingEle.getAttribute('role')).toEqual('alert');
      });

      it("contains an aria-labelledby attribute whose values matches the input id", () => {
        expect(result.holdingEle.getAttribute('aria-labelledby')).toEqual("form");
      });

      it("contains class attribute whose value is hidden", () => {
        expect(result.holdingEle.getAttribute('class')).toContain('hidden');
      });
    });
    describe("Copy element", () => {
      it("contains the accessibility message provided ", () => {
        expect(result.holdingEle.querySelector('p').innerHTML).toEqual(resultAriaAlert);
      });
    });
  });
  describe("When there is a fee", () => {
    let result;
    const fee = 100;
    beforeAll(() => {
      const newProps = { ...props, fee };
      result = setup(newProps);
    });
    const resultCopy = `With a starting contribution of <strong><span>${props.currency}</span>${props.start}</strong> and a monthly contribution of <strong><span>${props.currency}</span>${props.month}</strong> we will deduct a total of <strong><span>${props.currency}</span>${fee}</strong> in a timeframe of <strong>${props.months}</strong> months.`;

    describe("Holding element", () => {
      it("contains class attribute whose value is visible", () => {
        expect(result.holdingEle.getAttribute('class')).toContain('visible');
      });
    });

    describe("Copy element", () => {
      it("contains the result message provided ", () => {
        expect(result.holdingEle.querySelector('p').innerHTML).toEqual(resultCopy);
      });
    });
  });

});