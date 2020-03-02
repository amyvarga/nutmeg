import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TextInput from './TextInput';
import copy from '../../container/feeCharges/copy';

describe("Given TextInput", () => {
  const { inputAriaAlert } = copy;
  const props = {
    name: "name",
    id: "id",
    value: "500",
    onChange: jest.fn(),
    label: "label",
    ariaRequired: true,
  };
  const setup = ({
    name, id, value, onChange, label, ariaRequired, error
  }) => {
    const { container } = render(<TextInput
      name={name}
      id={id}
      value={value}
      onChange={onChange}
      label={label}
      ariaRequired={ariaRequired}
      error={error}
    />);

    return {
      label: container.querySelector('label'),
      input: container.querySelector('input'),
      error: container.querySelector('.error')
    };
  };
  beforeEach(() => {
    jest.resetAllMocks();
  });

  describe("Label", () => {
    let result;
    beforeAll(() => {
      result = setup(props);
    });

    it("connects the input with the label", () => {
      expect(result.label.getAttribute('for')).toEqual(result.input.getAttribute('id'));
    });
    it("displays the text provided", () => {
      expect(result.label.innerHTML).toEqual(props.label);
    });
  });
  describe("Input", () => {
    let result;
    beforeAll(() => {
      result = setup(props);
    });

    it("calls the onChange function provided", () => {
      expect(props.onChange).toHaveBeenCalledTimes(0);
      fireEvent.change(
        result.input,
        { target: { value: "value" } }
      );
      expect(props.onChange).toHaveBeenCalledTimes(1);
    });
    it("a text input", () => {
      expect(result.input.getAttribute('type')).toEqual('text');
    });
    it("contains an aria-required attribute set to the boolean provided", () => {
      expect(result.input.getAttribute('aria-required')).toEqual((props.ariaRequired).toString());
    });
    it("contains a value attribute set to the value provided", () => {
      expect(result.input.getAttribute('value')).toEqual(props.value);
    });
    it("contains a name attribute set to the name provided", () => {
      expect(result.input.getAttribute('name')).toEqual(props.name);
    });
    it("contains an id attribute set to the id provided", () => {
      expect(result.input.getAttribute('id')).toEqual(props.id);
    });
  });
  describe("Error section", () => {
    describe("When there is no error", () => {
      let result;
      beforeAll(() => {
        result = setup(props);
      });

      describe("Holding element", () => {
        it("contains a role attribute whose value is alert", () => {
          expect(result.error.getAttribute('role')).toEqual('alert');
        });
        it("contains an aria-labelledby attribute whose values matches the input id", () => {
          expect(result.error.getAttribute('aria-labelledby')).toEqual(props.id);
        });
        it("contains class attribute whose value is hidden", () => {
          expect(result.error.getAttribute('class')).toContain('hidden');
        });
      });
      describe("Copy element", () => {
        it("contains the accessibility message provided ", () => {
          expect(result.error.querySelector('p').innerHTML).toEqual(inputAriaAlert);
        });
      });
    });
    describe("When there is an error", () => {
      let result;
      const error = "error message";
      beforeAll(() => {
        const newProps = { ...props, error };
        result = setup(newProps);
      });

      describe("Holding element", () => {
        it("contains class attribute whose value is visible", () => {
          expect(result.error.getAttribute('class')).toContain('visible');
        });
      });
      describe("Copy element", () => {
        it("contains the error message provided ", () => {
          expect(result.error.querySelector('p').innerHTML).toEqual(error);
        });
      });
    });
  });
});