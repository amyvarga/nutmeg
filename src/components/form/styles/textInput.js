import styled from 'styled-components';
import variables from '../../../globalStyles/variables';

export const Wrapper = styled.div`
  @media (min-width: ${variables.breakpoints.xl}px) {
    flex-basis: 50%;
  }
  @media (max-width: ${variables.breakpoints.xl}px) {
    flex-basis: 100%;
  }
  @media (min-width: ${variables.breakpoints.xl}px) {
    :first-child {
      > div {
        margin-right: var(--size-spacing-m);
      }
    }
    :nth-child(2) {
      > div {
        margin-left: var(--size-spacing-m);
      }
    }
  }
  @media (max-width: ${variables.breakpoints.xl}px) {
    margin-bottom: var(--size-spacing-m);
  }
`;

export const InputWrapper = styled.div`
  display: flex;
`;

export const CurrencyWrapper = styled.div`
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${props => props.hasError ? "var(--color-base-error-light)" : "var(--color-base-greyscale-silver)"};
  transition: border-color ease-in-out 0.3s;
`;

export const Currency = styled.div`
  font-family: var(--font-base-family-light);
  margin-right: 0.25em;
  line-height: var(--size-forms-input-input-height-l);
`;

export const Label = styled.label`
  color: var(--color-base-greyscale-mineshaft);
  font: inherit;
  font-family: var(--font-base-family-light);
  font-size: var(--size-typography-font-size-s);
  font-weight: var(--size-typography-font-weight-lite);
`;

export const Input = styled.input`
  flex: 1;
  padding:0;
  border: none;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  height: var(--size-forms-input-input-height-l);
  color: var(--color-base-greyscale-mineshaft);
  font: inherit;
  font-family: var(--font-base-family-light);
  font-weight: var(--size-typography-font-weight-lite);
  border-bottom-color: ${props => props.hasError ? "var(--color-base-error-light)" : "var(--color-base-greyscale-silver)"};
  transition: border-color ease-in-out 0.3s;
`;

export const InputError = styled.p`
  font: inherit;
  font-family: var(--font-base-family-light);
  font-weight: var(--size-typography-font-weight-lite);
  color: var(--color-base-error-light);
`;

