import GlobalStyle from './GlobalStyle';
import './App.css';
import CmnBtn from './components/Button';
import CmnInput from './components/Input';
import Wrapper from './layout/Wrapper';
import { useState } from 'react';
import Select from './components/Select';
import ModalArea from './components/ModalArea';
import BtnArea from './components/BtnArea';

function App() {
  
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

  
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <h1>Button</h1>
        <BtnArea/>  
        
        <h1>Input</h1>
        <form name='price'>
            <label htmlFor='name'>이름</label><CmnInput name='name' value={input.name} onChange={addInputHandler}></CmnInput>
            <label htmlFor='price'>가격</label><CmnInput name='price' value={input.price} onChange={addInputHandler}></CmnInput>
            <CmnBtn type='submit' iconOption={false} onClick={SubmitHandler}>저장</CmnBtn>
        </form>
        <h1>Modal</h1>
        <ModalArea></ModalArea>
        <div className='subject'>
          <h1>Select</h1>
          <form>
            <Select></Select>
          </form>
        </div>
      </Wrapper>
    </>
  );
}

export default App;
