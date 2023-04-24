import React from 'react'
import { useState } from 'react'
import CmnBtn from './Button';
import Modal from './Modal';

function ModalArea() {
    const [firstModal, setFirstModal] = useState(false);
    const [secondModal, setSecondModal] = useState(false);
    const [contents, setContents] = useState({ name: "", value: "" });
    
    // const [show, setShow] = useState(false);

    // const [ModalSetting, setModalSetting] = useState({
    //     show:false,
    //     contents : '닫기와 확인 버튼 2개가 있고, 외부 영역을 눌러도 모달이 닫히지 않아요.',
    //     topClose: false,
    //     onConfirm: true,
    //     onClose:true
    // });

    // ModalArea에서 모달 버튼을 눌렀을 때 어떤 모달을 켜는지 판단하는 역할
    const ModalHandler = (name, value) =>{
        // const {name} = e.target
        // const {value} = e.target
        if(name === "first_modal"){
            setFirstModal(true)
        } else {
            setSecondModal(true)
        }
        setContents({name, value})
        console.log(contents)
    }

    // onConfirm이랑 onClose는 모달에 들어가서 그 모달을 이름을 가지고 끄는 역할을 할 것임.
    // 여기다가 미리 만들어서 모달로 가지고 들어갈거.
    const onConfirm = (name) => {
        if(name === "first_modal"){
            console.log("on!")
            // setFirstModal(!firstModal)
        } else {
            console.log("on!")
            // setSecondModal(!secondModal)
        }
    }

    const onClose = (name) => {
        if(name === "first_modal"){
            setFirstModal(false)
        } else {
            setSecondModal(false)
        }
    }




        // event는 그 element의 고유 유전자 속성만 가지고 올 수 있다.
        // console.log(e.target.name)
        // console.log(e.target.value)
        // console.log(e.target.id)
        // console.log(e.target.class)

        // 브라우저 스크립트? .show?  뭐지?
        // parameter로 들어오는 s는 이전[변경 전] state를 의미해서 이전 show을 의미 = false
        // !false  = >  true
        // 불린 값을 담고 있는 변수는 show( setState의 식별자 ) 
        // 근데 이거를 모달을 켜고 끄는 용도로 쓰고 싶으면 show에 얘를 넣어줘야함

        
    

    return (  
        <div>
            <CmnBtn onClick={(e)=>ModalHandler(e.target.name, e.target.value)} 
                name="first_modal"
                value="닫기와 확인 버튼 2개가 있고, 외부 영역을 눌러도 모달이 닫히지 않아요."
                size="Small" 
            >open modal
            </CmnBtn>

            <CmnBtn onClick={(e)=> ModalHandler(e.target.name, e.target.value)}
                name="second_modal"
                value="닫기 버튼 1개가 있고,외부 영역을 누르면 모달이 닫혀요."
                type="negative"
                iconOption={false}
            >open modal
            </CmnBtn>

            <Modal
                contents={contents} 
                onConfirm={onConfirm} 
                onClose={onClose}
                firstModal={firstModal}
                secondModal={secondModal}
            />
           
        </div>
    )
};

export default ModalArea