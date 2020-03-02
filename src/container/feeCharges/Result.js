import React, { useEffect, useRef } from 'react';
import copy from './copy';
import { ResultWrapper } from './styles';

const Result = ({
  fee,
  currency,
  start,
  month,
  months
}) => {
  const alert = useRef();

  useEffect(() => {
    if (fee) alert.current.focus();
  }, [fee]);

  return (
    <ResultWrapper ref={alert} tabIndex="0" role="alert" aria-labelledby="form" className={`${fee ? "visible" : "hidden"} result`}>
      {fee ?
        <p>With a starting contribution of <strong><span>{currency}</span>{start}</strong> and a monthly contribution of <strong><span>{currency}</span>{month}</strong> we will deduct a total of <strong><span>{currency}</span>{fee}</strong> in a timeframe of <strong>{months}</strong> months.</p>
        :
        <p>{copy.resultAriaAlert}</p>
      }
    </ResultWrapper>
  )
};

export default Result;