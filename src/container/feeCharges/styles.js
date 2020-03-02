import styled from 'styled-components';
import { grid } from 'styled-components-grid';
import variables from '../../globalStyles/variables';

export const SectionWrapper = styled.div`
  ${grid({})}
`;

export const Section = styled.section`
  ${grid.unit({ size: { xxl: 4 / 8 } })};
  background: ${variables.colors.greyscale_wildsand};
  margin: 0 auto;
  padding: 1em 1em 4em 1em;
`;

export const TextInputWrapper = styled.div`
  ${grid({})}
  margin-top: 1em;
  p {
    margin-bottom: 0;
    margin-top: 0;
  }
`;

export const ButtonWrapper = styled.div`
  margin: 1em 0;
`;

export const ResultWrapper = styled.div`
  p {
    margin-bottom: 0;
    @media (max-width: ${variables.breakpoints.xl}px) {
      margin-top: 0;
    }
  } 
  
`;