import React from 'react'
import styled from 'styled-components'


const CmnSelect = styled.div`
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

  &>.button{
    display:flex;
    justify-content:space-between;
  }

  &>.selectMenu{
    position:absolute;
    width:250px;
    display:none;
    padding: 10px 30px 0;
    background-color:#ebeff5;
    box-shadow: 3px 3px .7em #aab0bc;
    overflow:visible;
    transform:translate(-30px, -10px);
  }

  &:focus{
    outline:0;
  }
  
  &.chk{
    height:inherit;
  }
`

function Select({children, ...rest}) {
  return (<CmnSelect {...rest}>{children}</CmnSelect>)
}

export default Select