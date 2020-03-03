import variables from '../../../globalStyles/variables';
import styled from 'styled-components';

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
        margin-right: ${variables.spacing.default};
      }
    }
    :nth-child(2) {
      > div {
        margin-left: ${variables.spacing.default};
      }
    }
  }
  @media (max-width: ${variables.breakpoints.xl}px) {
    margin-bottom: ${variables.spacing.default};
  }
`;

export const InputWrapper = styled.div`
  display: flex;
`;

export const CurrencyWrapper = styled.div`
  border-bottom: 1px solid ${props => props.hasError ? variables.colors.error_light : variables.colors.greyscale_silver}};
  transition: border-color ease-in-out 0.3s;
`;

export const Currency = styled.div`
  font-family: ${variables.fonts.font_family_light};
  margin-right: 0.25em;
  line-height:  ${variables.forms.input_height_primary};
`;

export const Label = styled.label`
  color: ${variables.colors.greyscale_mineshaft};
  font: inherit;
  font-family: ${variables.fonts.font_family_light};
  font-size: ${variables.typography.font_size_minor};
  font-weight: ${variables.typography.font_weight_minor};
  letter-spacing: ${variables.typography.letter_spacing_wide};
`;

export const Input = styled.input`
  flex: 1;
  padding:0;
  border: none;
  border-bottom: 1px solid ${variables.colors.greyscale_silver};
  height: ${variables.forms.input_height_primary};
  color: ${variables.colors.greyscale_mineshaft};
  font: inherit;
  font-family: ${variables.fonts.font_family_light};
  font-weight: ${variables.typography.font_weight_minor};
  border-bottom: 1px solid ${props => props.hasError ? variables.colors.error_light : variables.colors.greyscale_silver}};
  transition: border-color ease-in-out 0.3s;
`;

export const InputError = styled.p`
  font: inherit;
  font-family: ${variables.fonts.font_family_light};
  font-weight: ${variables.typography.font_weight_minor};
  color: ${variables.colors.error_light};
`;

