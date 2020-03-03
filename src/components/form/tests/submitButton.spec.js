import React from "react";
import { render } from "@testing-library/react";
import SubmitButton from "../SubmitButton";

describe("Given submitButton", () => {
  const text = "Submit";
  const error = { start: "has an error" };
  const { container } = render(<SubmitButton error={error} text={text} />);
  const button = container.querySelector('button');

  it("displays the text provided", () => {
    expect(button.innerHTML).toEqual(text);
  });

  it("is disabled when there is an error", () => {
    expect(button.disabled).toBeTruthy();
  });
});