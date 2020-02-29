import React from 'react';

const Result = ({
  ref,
  fee,
  currency,
  start,
  month,
  months
}) => {
  return (
    <div ref={ref} tabIndex="0" role="alert" aria-labelledby="form" className={`${fee ? "visible" : "hidden"} result`}>
      {fee ?
        <p> With a starting contribution of <strong><span>{currency}</span>{start}</strong> and a monthly contribution of <strong><span>{currency}</span>{month}</strong> we will deduct a total of <strong><span>{currency}</span>{fee}</strong> in a timeframe of <strong>{months}</strong> months.</p>
        :
        <p>The alert will trigger when the calculate button has successful submitted</p>
      }
    </div>
  )
};

export default Result;