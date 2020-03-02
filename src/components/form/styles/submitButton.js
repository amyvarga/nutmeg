import variables from '../../../globalStyles/variables';
import styled from 'styled-components';

const Button = styled.button`
  color: ${(variables.colors.basic)};
  background-color: ${variables.colors.nutmeg_primary};
  border: none;
  cursor: pointer;
  padding: 0.5em 2em;
  font: inherit;
  font-family: ${variables.fonts.font_family_light};
  font-weight: ${variables.typography.font_weight_minor};
  letter-spacing: ${variables.typography.letter_spacing_wide};
  border-radius: ${variables.forms.border_radius};
  text-shadow: 0.3px 0.3px 0.3px rgba(0,0,0,0.2);
  :hover {
    background-color: ${variables.colors.nutmeg_dark};
  }
`;

export default Button;