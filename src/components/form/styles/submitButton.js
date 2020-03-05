import styled from 'styled-components';

const Button = styled.button`
  color: var(--color-base-basic);
  background-color: ${props => props.hasError ? "var(--color-base-greyscale-boulder)" : "var(--color-base-nutmeg-primary)"};
  border: none;
  cursor: pointer;
  padding: 0.5em 2em;
  font: inherit;
  font-family:  var(--font-base-family-light);
  font-weight: var(--size-typography-font-weight-lite);
  letter-spacing: var(--size-typography-letter-spacing-xs);
  border-radius: var(--size-forms-border-border-radius);
  text-shadow: 0.3px 0.3px 0.3px rgba(0,0,0,0.2);
  :hover {
    background-color: ${props => props.hasError ? "var(--color-base-greyscale-boulder)" : "var(--color-base-nutmeg-dark)"};
  }
`;

export default Button;