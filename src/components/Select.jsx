import React from 'react'
import styled, { css } from 'styled-components'
import { useState } from 'react'

const SelectBox = styled.div`
  width:250px;
  height:50px;
  line-height:50px;
  font-size: 1rem;
  padding: 0 30px;
  margin-right:10px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  box-shadow: 3px 3px .7em #aab0bc, -5px -5px .8em #fff;
  background-color:#dfe2e7;
  &::after {
    content: "⌵";
    display:block;
    width:10px;
    transform:translate(240px, -52px);
    color: #333;
    font-size: 20px;
  }
`;

const Label = styled.label`
  font-size:18px;
`

const SelectOption = styled.ul`
  position:absolute;
  width:310px;
  max-height: ${(props) => (props.show ? "none" : "0")};
  padding:0;
  background-color:#ebeff5;
  box-shadow: 3px 3px .7em #aab0bc;
  overflow:hidden;
  transform:translate(-30px, -10px);
  transition:.3s;
`

const Option = styled.li`
  width:100%;
  padding:0 30px;
  &:hover{
    background-color:#ccc;
  }
`
  

function Select() {
  const optionData = ['자바','노드','스프링','리액트','리액트 네이티브']

  const [currentValue, setCurrentValue] = useState('자바')

  const handleOnChangeSelectValue = (e) => {
    const {innerText} = e.target;
    setCurrentValue(innerText);
  }
  const [isShow, setShow] = useState(false); 

  return (
    <SelectBox onClick={() => setShow((s) => !s)}>
      <Label>{currentValue}</Label>
      <SelectOption show={isShow}>
        {optionData.map((option) => (
          <Option key={option} value={option} onClick={handleOnChangeSelectValue}>{option}</Option>
        ))}
      </SelectOption>
    </SelectBox>
  )
}

export default Select