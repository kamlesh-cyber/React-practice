import { useState } from 'react'
import './App.css'
import TodoListItem from './Components/TodoListItem';
import BharatClock from './Components/BharatClock';
import HealthyFood from './Components/HealthyFood';
import Container from './Components/Container';
import ErroreMessage from './Components/ErroreMessage';

function App() {

  return (
    <Container>
      <BharatClock></BharatClock>
      <hr />

      <h1>ToDo App</h1>

      <div className="row g-2 mt-3">
        <div className="col-5"><input type="text" className='form-control' placeholder='Enter todo Here' /></div>
        <div className="col-5"><input type="date" className='form-control' placeholder='dd/mm/yyy' /></div>
        <div className="col-2"><button className='btn btn-success'>Save</button></div>
      </div>

      <TodoListItem todoName="Job 1" todoDate="12/01/2025"></TodoListItem>
      <TodoListItem todoName="Job 2" todoDate="32/12/2025"></TodoListItem>
      <hr />

      <h1>Healthy Foods</h1>
      <ErroreMessage erroreMessage={erroreMessage}></ErroreMessage>
      <HealthyFood></HealthyFood>
    </Container>
  )
}

export default App
