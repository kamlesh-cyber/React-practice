import React from "react";
import Item from "./Item";

<<<<<<< HEAD
function HealthyFood({healthyFoodItemArr}){
    let bought = false;
    const handleCLick = (foodItem, event)=>{
        // console.log("event-->", event);
        if(event.target.innerText == "Buy me"){
            event.target.classList.remove("btn-primary");
            event.target.classList.add("btn-warning");
            event.target.innerText = "Bought";
             bought = true;
            alert(foodItem + " is bought");
        }
        else{
            event.target.innerText = "Buy me";
            event.target.classList.add("btn-primary");
            event.target.classList.remove("btn-warning");
            bought = false;
            alert(foodItem + " is removed from bought list");
        }
    }
=======
function HealthyFood({healthyFoodItemArr, handleCLick, boughtFood}){
    // let healthyFoodItemArr = [];
    
>>>>>>> fb2eceaad59f0d807f950ba1e0e48d26b310e246
    // if(healthyFoodItemArr.length === 0) return <h3>Im still hungry! - if else method</h3>
    return (
        <React.Fragment>
            {/* {emptyMsg} */}
            {/* {healthyFoodItemArr.length === 0 ? <h3>Im still hungry! - ternery operator</h3> : null} */}
            {/* {healthyFoodItemArr.length === 0 && <h3>Im still hungry! - logical operator</h3>} */}
            <ul className="list-group">
                {/* {healthyFoodItemArr.map((item)=>(<Item key={item} foodItem={item} handleBuyButton={()=>alert(`${item} is clicked`)}></Item>))} */}
<<<<<<< HEAD
                {healthyFoodItemArr.map((item)=>(<Item key={item} foodItem={item} handleBuyButton={(event)=>handleCLick(item, event)} bought={bought}></Item>))}
                
=======
                {healthyFoodItemArr.map((item)=>(<Item key={item}   foodItem={item} boughtFood={boughtFood.includes(item)} handleBuyButton={()=>handleCLick(item)}></Item>))}
>>>>>>> fb2eceaad59f0d807f950ba1e0e48d26b310e246
            </ul>
        </React.Fragment>
    )
}

export default HealthyFood;