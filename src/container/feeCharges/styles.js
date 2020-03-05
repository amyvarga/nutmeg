import styled from 'styled-components';
import variables from '../../globalStyles/variables';

export const SectionWrapper = styled.div`
  display: flex;
`;

export const Section = styled.section`
  @media (min-width: ${variables.breakpoints.xxl}px) {
    flex-basis: 37.5%;
  }
  @media (min-width: ${variables.breakpoints.lg}px) and (max-width: ${variables.breakpoints.xxl}px) {
    flex-basis: 60%;
  }
  @media (max-width: ${variables.breakpoints.lg}px) {
    flex-basis: 100%;
  }
  background: var(--color-base-greyscale-wildsand);
  margin: 0 auto;
  padding: 1em 1em 4em 1em;
`;

export const TextInputWrapper = styled.div`
  display: flex;
  @media (max-width: ${variables.breakpoints.xl}px) {
    flex-wrap: wrap;
  }
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