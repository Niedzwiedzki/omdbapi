import React from 'react';
import { StyledInput } from './style';

interface InputProps {
  value: string;
  inputHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
 };
 
 

const Input: React.FC<InputProps> = (props) => {
  return (
      <StyledInput placeholder="Search title..." value={props.value} onChange={props.inputHandler}/>
  );
}

export default Input;
