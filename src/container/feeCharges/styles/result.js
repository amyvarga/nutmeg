import styled from 'styled-components';
import variables from '../../../globalStyles/variables';

export const Div = styled.div`
  p {
    margin-bottom: 0;
    @media (max-width: ${variables.breakpoints.xl}px) {
      margin-top: 0;
    }
  } 
  
`;