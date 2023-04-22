import React from 'react'
import styled, { css } from 'styled-components';
// import "../style/pallete.scss"

const Cmnbtn = styled.button`
  /* 공통 스타일 */
  font-size: 1rem;
  padding: 16px 30px;
  margin-right:10px;
  box-sizing:border-box;
  border:${(props) => props.border? '4px solid#4da5c0': 'none'};
  border-radius: 10px;
  cursor: pointer;
  box-shadow: 3px 3px .7em #898e97, -5px -5px .7em #fff;
  &:hover{
    box-shadow:${(props) => props.negative? "3px 3px .7em rgba(0,0,0,.4) inset;" : '3px 3px .7em rgba(0,0,0,.2) inset;'}; 
  }
  background-color:#dfe2e7;
  color:${(props) => props.negative? "white" : '#333'};

  ${props => 
    props.alerted &&
    css`
      background-color:${(props) => props.border? '#dfe2e7' : 'rgb(243,96,144)'};
      border:${(props) => props.border? '4px solidrgb(243,96,144)': 'none'};
      color:${(props) => props.border?'rgb(243,96,144)':'#fff'}
    `
  }

  &>label{
    margin-left:10px;
    cursor:pointer;
  }

  ${props => 
    props.size === 'Medium' &&
    css`
      padding:12px 20px;
    `
  }
  ${props => 
    props.size === 'Small' &&
    css`
      padding:10px 20px;
    `
  }
  
`

function CmnBtn({children, ...rest}) {
  return (
    <Cmnbtn {...rest}>{children}</Cmnbtn>
  )
}

export default CmnBtn;