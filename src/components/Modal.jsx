import React from 'react'
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import CmnBtn from './Button'

const Modal = styled.div`
  position:fixed;
  top:0;
  left:0;
  width:100%;
  height:100vh;
  background-color:rgba(0,0,0,.5);

  &>.btnWrap{
    display:${(props) => props.type? 'none':'flex'}
  }

  &>article{
    position:absolute;
    top:50%;
    left:50%;
    width:50%;
    transform:translate(-50%, -50%);
    padding:30px;
    background-color:#fff;
    border-radius:30px;
  }
`

function modal({show,closeModal}) {
  if(!show) return null;
  return ReactDOM.createPortal(
    <Modal  onClick={closeModal}>
        <article>
            <CmnBtn onClick={closeModal}>닫기</CmnBtn>
            <p>닫기 버튼 1개가 있고 외부 영역을 누르면 모달이 닫혀요.</p>
            <div className='btnWrap flx'>
              <CmnBtn>확인</CmnBtn>
              <CmnBtn>닫기</CmnBtn>
            </div>
        </article>
    </Modal>
    ,
    document.getElementById("portal")
  )
}

export default modal;