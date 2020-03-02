import React from 'react';
import { render, fireEvent, act } from '@testing-library/react';
import FeeCharges from '../FeeCharges';
import copy from '../copy';
import calculateTotalFees from '../../../calculateTotalFees';
import Result from '../Result';
import wait from 'waait';

jest.mock('../../../calculateTotalFees');
jest.mock('../Result', () => jest.fn(() => null));

describe("Given FeeCharges", () => {
  const setup = () => {
    const { container } = render(<FeeCharges />);
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
      result = setup();
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
      result = setup();
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

  describe("On submit", () => {
    let result;
    const start = 500;
    const month = 250;
    const months = 36;
    const fee = 100;
    const currency = "£";

    beforeAll(async () => {
      result = setup();
      calculateTotalFees.mockImplementation(() => fee);

      act(() => {
        fireEvent.change(
          result.start,
          { target: { value: start } }
        );
        fireEvent.change(
          result.month,
          { target: { value: month } }
        );
        fireEvent.click(result.button);
      });

      await wait(0);
    });

    it("calls calculateTotalFees with the correct parameters", async () => {
      expect(calculateTotalFees).toBeCalledWith(start, month, months);
    });

    it("updates Result component with the correct props", () => {
      expect(Result).toBeCalledWith({
        fee: Number(fee).toFixed(2),
        currency,
        start,
        month,
        months
      }, {});
    });
  });
});