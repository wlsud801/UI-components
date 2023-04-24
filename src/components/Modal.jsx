import React from 'react'
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import CmnBtn from './Button'

const ModalWrap = styled.div`
  &>.overlay{
    position:fixed;
    top:0;
    left:0;
    width:100%;
    height:100vh;
    background-color:rgba(0,0,0,.5);
  }
`
const Modal = styled.div`
  position:absolute;
  top:50%;
  left:50%;
  width:50%;
  transform:translate(-50%, -50%);
  padding:30px;
  background-color:#fff;
  border-radius:30px;
`









// function Modal({
//   children,
//   firstModal,
//   secondModal,
//   contents,
//   confirmText,
//   cancelText,
//   onConfirm,
//   onCancel,
// }) {
//   // console.log(contents);
//   if (!firstModal && !secondModal) return null;

//   const outerCloseDoor = (event) => {
//       if (contents.name === "second_modal") {
//           onCancel(contents.name);
//       } else {
//           return;
//       }
//   };

//   const eventStopHandler = (event) => {
//       if (contents.name === "second_modal") {
//           event.stopPropagation();
//       } else {
//           return;
//       }
//   };

//   return (
//       <StDarkBackGround onClick={outerCloseDoor}>
//           <StModalContent onClick={(e) => eventStopHandler(e)}>
//               <p>{contents.value}</p>
//               <StButtonGroup>
//                   <Buttons
//                       color="red"
//                       size="small"
//                       onClick={() => onCancel(contents.name)}
//                   >
//                       {cancelText}
//                   </Buttons>
//                   {contents.name === "first_modal" ? (
//                       <Buttons
//                           color="green"
//                           size="small"
//                           onClick={() => onConfirm(contents.name)}
//                       >
//                           {confirmText}
//                       </Buttons>
//                   ) : null}
//               </StButtonGroup>
//           </StModalContent>
//       </StDarkBackGround>
//   );
// }

// Modal.defaultProps = {
//   cancelText: "닫기",
//   confirmText: "확인",
// };


// contents={contents}  => { name: "", value: "" }
// onConfirm={onConfirm} 
// onClose={onClose}


function modal({contents, onConfirm, onClose, firstModal, secondModal}) {


  const outerCloseDoor = () => {
    // 두 번째 모달이면 바깥 영역 눌러도 닫히게 해야 하니까 onClose를 해줌.
    if(contents.name === "second_modal"){
      onClose(contents.name)
    } else {
      return;
    }
  }



  // 맨 처음에 초기값은 무조건 false. !false => true   // if(true && true ) 조건문 통과 return null; => 즉, 모달 안 보여주겠다는 뜻.
  if(!firstModal && !secondModal) return null;
  // if(!show) return null;
  return ReactDOM.createPortal(
  // return(
    <ModalWrap >
      <div onClick={outerCloseDoor} className='overlay'></div>
      <Modal>
        <p>{contents.value}</p>
        <CmnBtn onClick={()=>onClose(contents.name)}>닫기</CmnBtn>
        {
          contents.name === "second_modal"? null : <CmnBtn onClick={()=>onConfirm(contents.name)}>확인</CmnBtn>
        }
      </Modal>
    </ModalWrap>
      ,
    document.getElementById("portal")
  )  
  
  // )
}

export default modal;