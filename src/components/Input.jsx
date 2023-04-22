import React from 'react'
import styled from 'styled-components';

const Cmninput = styled.input`
  font-size: 1rem;
  background-color:#eaedf2;
  border:none;
  border-radius:30px;
  padding: 16px 30px;
  box-shadow: 3px 3px .7em #aab0bc inset, -5px -5px .8em #fff inset;
  margin:0 10px;

`

function CmnInput({children, ...rest}) {
  return (
    <Cmninput {...rest}>{children}</Cmninput>
  )
}

export default CmnInput;