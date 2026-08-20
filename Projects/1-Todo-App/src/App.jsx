import { useState } from 'react'
import './App.css'
import TodoListItem from './Components/TodoListItem';
import BharatClock from './Components/BharatClock';
import HealthyFood from './Components/HealthyFood';
import Container from './Components/Container';
import ErroreMessage from './Components/ErroreMessage';
import InputBox from './Components/InputBox';
import TodoAppInputContainer from './Components/TodoAppInputContainer'

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
      <TodoAppInputContainer></TodoAppInputContainer>
      <hr />

      <h1>Healthy Foods</h1>
      <InputBox onEnterHandler={(event)=>addOrSearchFood(event)}></InputBox>
      {emptyMsg && <ErroreMessage erroreMessage={"I'm Still Hungry!"}></ErroreMessage>}
      <HealthyFood healthyFoodItemArr={foodItem}></HealthyFood>
    </Container>
  )
}

export default App
