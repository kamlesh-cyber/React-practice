import TodoListItem from "./TodoListItem";
import ErroreMessage from "./ErroreMessage";
import Item from "./Item";
import { useState } from "react";

const TodoAppInputContainer = () =>{
    let todoListItem = [
        {
        todoName : "Job 1",
        todoDate : "12/01/2026"
        },
        {
        todoName : "Job 2",
        todoDate : "13/01/2026"
        },
    ];

    let[todoName, setTodoName] = useState();
    let[todoDate, setTodoDate] = useState();
    let[todoList, setTodoList] = useState(todoListItem);

    const handleAddBtnClicked = (toDoName, dueDate) =>{
        console.log("Todo Name :" + toDoName +", Todo Date :" + dueDate);
        // debugger;
        if(!toDoName || !dueDate){
            alert("Please enter both todo name and due date");
            return;
        }
        //convert dueDate to dd/mm/yyyy format
        if(dueDate){
            let date = new Date(dueDate);
            dueDate = date.toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' });
        }
        
        let newTodoList = [...todoList, {todoName:toDoName, todoDate:dueDate}]
        setTodoList(newTodoList);
    }


    return(
        <>
            <div className="row g-2 mt-3">
                <div className="col-5"><input onChange={(event)=> setTodoName(event.target.value)} type="text" className='form-control' placeholder='Enter todo Here' name="todoName" /></div>
                <div className="col-5"><input onChange={(event)=> setTodoDate(event.target.value)} type="date" className='form-control' placeholder='Choose Date dd/mm/yyy' name="todoDate" /></div>
                <div className="col-2"><button className='btn btn-success w-100' onClick={(event)=>handleAddBtnClicked(todoName,todoDate)}>Add</button></div>
            </div>

            {!todoList.length && <ErroreMessage erroreMessage={"Hey.. Add todo item !"}></ErroreMessage> }
            {todoList.map((item) =>(<TodoListItem key={item.todoName} todoName={item.todoName} todoDate={item.todoDate}></TodoListItem>))}
        </>
    )
}

export default TodoAppInputContainer;