import { useState } from 'react'
import Container from './Container';
import InputDisplay from './InputDisplay'
import ButtonContainer from './ButtonContainer'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {

  const [inputValue, setInputValue] = useState("");

  let buttonsArr = ['C', '1', '2', '3', '+', '4', '5', '6', '-', '7', '8', '9', '*', '0', '.', '=', '/'];

  // console.log(inputValue);

  const handleClickBtn = (btnValue) => {
    // const btnValue = e.target.innerText;
    if(btnValue === 'C'){
      setInputValue("");
    } else if(btnValue === '='){
        try{
          const result = eval(inputValue);
          setInputValue(result.toString());
        } catch (error) {
          setInputValue("Error");
        }
    }else if(btnValue === '+' || btnValue === '-' || btnValue === '*' || btnValue === '/'){
        // debugger;
        const lastChar = inputValue[inputValue.length - 1];
        if(lastChar === '+' || lastChar === '-' || lastChar === '*' || lastChar === '/'){
          setInputValue(inputValue.slice(0, -1) + btnValue);
        } else {
          setInputValue(inputValue + btnValue);
        }
    } else {
      setInputValue(inputValue + btnValue);
    }
  }

  return (
    <>
    <Container>
      <div className='d-flex flex-column justify-content-center' style={{width: "250px", margin: "0 auto"}}>
        <h2 className='text-center mt-2'>Calculator App</h2>
        <div className='border mt-3 p-3'>
          <InputDisplay value={inputValue} setValue={setInputValue} />
          <ButtonContainer buttonsArr={buttonsArr} clickBtnFunction={handleClickBtn} />
        </div>
      </div>
    </Container>

    {/* <Container>Above is my calculator app</Container> */}

    </>
  )
}

export default App
