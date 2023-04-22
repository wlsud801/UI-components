import React from 'react'
import styled from 'styled-components';
import CmnBtn from './Button'

const Modal = styled.div`
  width:100%;
  height:100vh;
  background-color:rgba(0,0,0,.7);
`

function modal() {
  return (
    <Modal>
        <article>
            <CmnBtn onClick={()=>{}}>닫기</CmnBtn>
            <p>닫기 버튼 1개가 있고 외부 영역을 누르면 모달이 닫혀요.</p>
        </article>
    </Modal>
  )
}

export default modal;