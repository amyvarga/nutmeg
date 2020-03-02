import React from "react";
import copy from '../../container/feeCharges/copy';
import { Input, Label, Wrapper, InputWrapper, InputError, Currency, CurrencyWrapper } from './styles/textInput';

const TextInput = ({
  name,
  id,
  value,
  onChange,
  label,
  ariaRequired,
  error,
  currency
}) => {
  return (
    <Wrapper>
      <div>
        <Label htmlFor={id}>{label}</Label>
        <InputWrapper>
          <CurrencyWrapper hasError={!!error} >
            <Currency>{currency}</Currency>
          </CurrencyWrapper>
          <Input
            hasError={!!error}
            className='form-control'
            name={name}
            id={id}
            type="text"
            value={value}
            onChange={onChange}
            aria-required={ariaRequired}
          />
        </InputWrapper>
        <div role="alert" aria-labelledby={id} className={`error ${error ? "visible" : "hidden"}`}>
          {error ?
            <InputError>{error}</InputError>
            :
            <p>{copy.inputAriaAlert}</p>
          }
        </div>
      </div>
    </Wrapper>
  )
};

export default TextInput;