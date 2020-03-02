import React from "react";
import { render } from "@testing-library/react";
import SubmitButton from "../SubmitButton";

describe("Given submitButton", () => {
  it("displays the text provided", () => {
    const text = "Submit";
    const { container } = render(<SubmitButton text={text} />);
    const button = container.querySelector('button');
    expect(button.innerHTML).toEqual(text);
  });
});