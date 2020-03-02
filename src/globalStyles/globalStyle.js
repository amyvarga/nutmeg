import { createGlobalStyle } from 'styled-components';
import variables from './variables';

const GlobalStyle = createGlobalStyle`
  html {
    color: ${variables.colors.greyscale_cod};
    font-size: ${variables.typography.font_size_primary};
    line-height: ${variables.typography.line_height_primary};
  }
  h3 {
    color: ${variables.colors.greyscale_cod};
    font-size: ${variables.typography.font_size_h3};
    line-height: ${variables.typography.line_height_primary};
  }
  h4 {
    font-size: ${variables.typography.font_size_h4};
    margin-bottom: 0;
  }
  p {
    font-size: ${variables.typography.font_size_major};
  }
  fieldset {
    border: 1px solid ${variables.colors.greyscale_mercury};
    border-radius: ${variables.forms.border_radius};
    background-color: ${variables.colors.basic};
    border-radius: ${variables.forms.border_radius};
    filter: drop-shadow(0.15em 0.15em 0.4em ${variables.colors.greyscale_mercury});
  }
  form-group {
    text-align: left;
    position: relative;
  }
  legend, .hidden {
    display: none;
  }
  .visible {
    display: inline-block;
  }
  *:focus {
    outline: none;
    }
`;



export default GlobalStyle;