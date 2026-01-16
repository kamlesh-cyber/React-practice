import React from "react";
import Item from "./Item";

function HealthyFood({healthyFoodItemArr, handleCLick}){
    // let healthyFoodItemArr = [];
    
    const handleCLick = (foodItem, event)=>{
        console.log("event-->", event);
        alert(`${foodItem} is clicked`);
    }
    // if(healthyFoodItemArr.length === 0) return <h3>Im still hungry! - if else method</h3>
    return (
        <React.Fragment>
            {/* {emptyMsg} */}
            {/* {healthyFoodItemArr.length === 0 ? <h3>Im still hungry! - ternery operator</h3> : null} */}
            {/* {healthyFoodItemArr.length === 0 && <h3>Im still hungry! - logical operator</h3>} */}
            <ul className="list-group">
                {/* {healthyFoodItemArr.map((item)=>(<Item key={item} foodItem={item} handleBuyButton={()=>alert(`${item} is clicked`)}></Item>))} */}
                {healthyFoodItemArr.map((item)=>(<Item key={item} foodItem={item} handleBuyButton={(event)=>handleCLick(item, event)}></Item>))}
                
            </ul>
        </React.Fragment>
    )
}

export default HealthyFood;