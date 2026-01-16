import { useState } from 'react'
import './App.css'
import TodoListItem from './Components/TodoListItem';
import BharatClock from './Components/BharatClock';
import HealthyFood from './Components/HealthyFood';
import Container from './Components/Container';
import ErroreMessage from './Components/ErroreMessage';
import InputBox from './Components/InputBox';

function App() {

  let healthyFood = ['Dal','Dosa','Idli','Ragi','Ghee', 'Milk', 'Curd'];
  let emptyMsg = healthyFood.length === 0 ? <h3>Im still hungry!</h3> : null

  function addOrSearchFood(event){
    if(event.key == "Enter"){
      let newFoodItem = [...foodItem, event.target.value]
      event.target.value =""; 
      setFoodItem(newFoodItem);
    }
  }

  const [foodItem, setFoodItem] = useState(['Dal','Dosa','Idli']);


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
      <InputBox onEnterHandler={(event)=>addOrSearchFood(event)}></InputBox>
      {emptyMsg && <ErroreMessage erroreMessage={"I'm Still Hungry!"}></ErroreMessage>}
      <HealthyFood healthyFoodItemArr={foodItem} handleCLick={handleCLick}></HealthyFood>
    </Container>
  )
}

export default App
