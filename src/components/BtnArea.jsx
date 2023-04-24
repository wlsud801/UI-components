import React from 'react'
import CmnBtn from './Button'

function BtnArea() {
  const alertHandler = () =>{
    alert('버튼을 만들어보세요!');
  }
    
  const promptHandler = () =>{
    prompt('어렵나요?');
  }
      
  return (
    <div>
        <ol>
              <li><CmnBtn name="txtBtn" onClick={alertHandler} iconOption={true} border>Large Primary Button</CmnBtn></li>
              <li><CmnBtn size='Medium'>Medium</CmnBtn></li>
              <li><CmnBtn size='Small'>Small</CmnBtn></li>
          </ol>
          <ol>
              <li><CmnBtn name="txtBtn02" onClick={promptHandler} type='negative' iconOption={true} border>Large Negative Button</CmnBtn></li>
              <li><CmnBtn type='negative' size='Medium'>Medium</CmnBtn></li>
              <li><CmnBtn type='negative' size='Small'>Small</CmnBtn></li>
          </ol>
    </div>
  )
}

export default BtnArea