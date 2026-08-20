import { useState } from 'react'
import './App.css'
import TodoListItem from './Components/TodoListItem';
import BharatClock from './Components/BharatClock';
import HealthyFood from './Components/HealthyFood';
import Container from './Components/Container';
import ErroreMessage from './Components/ErroreMessage';
import InputBox from './Components/InputBox';
<<<<<<< HEAD
import TodoAppInputContainer from './Components/TodoAppInputContainer'

=======
import ToDoAppInput from './Components/ToDoAppInput';
>>>>>>> fb2eceaad59f0d807f950ba1e0e48d26b310e246
function App() {

  let todoItemsObj = [
    {
      todoName: "Job1",
      todoDate: "12/01/2026",
    },
    {
      todoName: "Job2",
      todoDate: "09/03/2026",
    },
  ]

  let healthyFood = ['Dal','Dosa','Idli','Ragi','Ghee', 'Milk', 'Curd'];
  let emptyMsg = healthyFood.length === 0 ? <h5>Im still hungry!</h5> : null

  function addOrSearchFood(event){
    if(event.key == "Enter"){
      let newFoodItem = [...foodItem, event.target.value]
      event.target.value =""; 
      setFoodItem(newFoodItem);
    }
  }

  const [foodItem, setFoodItem] = useState(['Dal','Dosa','Idli']);
  const [boughtFood, setBoughtFood] = useState([]);

  const handleCLick = (foodItem, event) => {
    if (!boughtFood.includes(foodItem)) {
      const updatedBoughtFood = [...boughtFood, foodItem];
      setBoughtFood(updatedBoughtFood);
      console.log("updatedBoughtFood --->", updatedBoughtFood);
    }
  };


  return (
    <Container>
      <BharatClock></BharatClock>
      <hr />

      {/* START : Todo App */}
      <h1>ToDo App</h1>
<<<<<<< HEAD
      <TodoAppInputContainer></TodoAppInputContainer>
=======
      <ToDoAppInput></ToDoAppInput>
      {todoItemsObj.length == 0 && <h5 style={{marginTop:"10px"}}>Have a Good Day</h5>}
      {todoItemsObj.map((item) => (<TodoListItem key={item.todoName} todoName={item.todoName} todoDate={item.todoDate}></TodoListItem>))}
>>>>>>> fb2eceaad59f0d807f950ba1e0e48d26b310e246
      <hr />
      {/* END : Todo App */}

      <h1>Healthy Foods</h1>
      <InputBox onEnterHandler={(event)=>addOrSearchFood(event)}></InputBox>
      {emptyMsg && <ErroreMessage erroreMessage={"I'm Still Hungry!"}></ErroreMessage>}
<<<<<<< HEAD
      <HealthyFood healthyFoodItemArr={foodItem}></HealthyFood>
=======
      <HealthyFood healthyFoodItemArr={foodItem} boughtFood={boughtFood} handleCLick={(foodItem) => handleCLick(foodItem, event)}></HealthyFood>
>>>>>>> fb2eceaad59f0d807f950ba1e0e48d26b310e246
    </Container>
  )
}

export default App
