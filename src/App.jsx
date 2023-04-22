import GlobalStyle from './GlobalStyle';
import './App.css';
import CmnBtn from './components/Button';
import CmnInput from './components/Input';
// import Modal from './components/Modal';
import CmnSelect from './components/Select';
import Wrapper from './layout/Wrapper';
import { useState } from 'react';

function App() {
  const alertHandler = () =>{
    alert('버튼을 만들어보세요!');
  }

  const promptHandler = () =>{
    prompt('어렵나요?');
  }
  
  // Input state
  const [input, setInput] = useState({name: '',price:'0'});
  
  const addInputHandler = (e) =>{
    if(e.target.value[0] === '0'){
      e.target.value = e.target.value.slice(1);
    }
    if(e.target.name === 'price'){
      e.target.value = e.target.value.replace(/[^0-9]/g,'').replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }
    
    setInput({...input,[e.target.name]: e.target.value});
  }

  const SubmitHandler = () =>{
    alert(`name: ${input.name}, price: ${input.price}`)
  }

  // Modal controller
  // const [isModalOpen, setIsModalOpen] = useState(false);

  // const openModal = () => setIsModalOpen(true);
  // const closeModal = () => setIs  

  const select = (e) =>{
    let option = e.target;
    option.classList.add('chk')
    console.log(option)
  }

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <div>
          <h1>Button</h1>
          <ol>
              <li><CmnBtn name="txtBtn" onClick={alertHandler} border>Large Primary Button<label htmlFor='txtBtn'><svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L5 5L1 9" stroke="#000000" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"></path></svg></label></CmnBtn></li>
              <li><CmnBtn size='Medium'>Medium</CmnBtn></li>
              <li><CmnBtn size='Small'>Small</CmnBtn></li>
          </ol>
          <ol>
              <li><CmnBtn name="txtBtn02" onClick={promptHandler} alerted type='negative' border>Large Negative Button<label htmlFor='txtBtn02'><svg width="14" height="17" viewBox="0 0 22 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M10 23.5C11.1046 23.5 12 22.6046 12 21.5C12 20.3954 11.1046 19.5 10 19.5C8.89543 19.5 8 20.3954 8 21.5C8 22.6046 8.89543 23.5 10 23.5ZM10 26C12.4853 26 14.5 23.9853 14.5 21.5C14.5 19.0147 12.4853 17 10 17C7.51472 17 5.5 19.0147 5.5 21.5C5.5 23.9853 7.51472 26 10 26Z" fill="black"></path><path d="M0 11C0 5.47715 4.47715 1 10 1C15.5228 1 20 5.47715 20 11V19C20 20.1046 19.1046 21 18 21H2C0.895431 21 0 20.1046 0 19V11Z" fill="white"></path><path fillRule="evenodd" clipRule="evenodd" d="M17.5 18.5V11C17.5 6.85786 14.1421 3.5 10 3.5C5.85786 3.5 2.5 6.85786 2.5 11V18.5H17.5ZM10 1C4.47715 1 0 5.47715 0 11V19C0 20.1046 0.895431 21 2 21H18C19.1046 21 20 20.1046 20 19V11C20 5.47715 15.5228 1 10 1Z" fill="black"></path><circle cx="17.5" cy="4.5" r="4.5" fill="#EB4C4C"></circle></svg></label></CmnBtn></li>
              <li><CmnBtn type='negative' size='Medium'>Medium</CmnBtn></li>
              <li><CmnBtn type='negative' size='Small'>Small</CmnBtn></li>
          </ol>
        </div>
        <h1>Input</h1>
        <form name='price'>
            <label htmlFor='name'>이름</label><CmnInput name='name' value={input.name} onChange={addInputHandler}></CmnInput>
            <label htmlFor='price'>가격</label><CmnInput name='price' value={input.price} onChange={addInputHandler}></CmnInput>
            <CmnBtn type='submit' onClick={SubmitHandler}>저장</CmnBtn>
        </form>
        <h1>Modal</h1>
        <CmnBtn onClick={()=>{}} size="Small">open modal</CmnBtn>
        {/* <Modal style="btnType" isOpen={false}></Modal> */}
        <CmnBtn onClick={()=>{}} type="negative">open modal</CmnBtn>
        {/* <Modal style="backType" isOpen={false}></Modal> */}
        <div className='subject'>
          <h1>Select</h1>
          <form>
            <CmnSelect onClick={select}>
              <div className='button'>
                <div value="자바" className='selected'>자바</div>
                <div>▽</div>
              </div>
              <div className='selectMenu'>
                <div value='자바'>자바</div>
                <div value='스프링'>스프링</div>
                <div value='노드'>노드</div>
                <div value='리액트 네이티브'>리액트 네이티브</div>
                <div value='리액트'>리액트</div>
              </div>
            </CmnSelect>
          </form>
        </div>
      </Wrapper>
    </>
  );
}

export default App;
