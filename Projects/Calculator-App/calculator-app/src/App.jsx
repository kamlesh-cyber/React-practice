import { useState } from 'react'
import Container from './Container';
import InputDisplay from './InputDisplay'
import ButtonContainer from './ButtonContainer'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Container>
      <div className='d-flex flex-column justify-content-center' style={{width: "250px", margin: "0 auto"}}>
        <h2 className='text-center mt-2'>Calculator App</h2>
        <div className='border mt-3 p-3'>
          <InputDisplay></InputDisplay>
          <ButtonContainer></ButtonContainer>
        </div>
      </div>
    </Container>

    {/* <Container>Above is my calculator app</Container> */}

    </>
  )
}

export default App
