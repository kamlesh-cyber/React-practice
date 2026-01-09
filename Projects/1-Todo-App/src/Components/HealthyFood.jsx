import React from "react";
import Item from "./Item";

function HealthyFood(){
    // let healthyFood = [];
    let healthyFood = ['Dal','Dosa','Idli','Ragi','Ghee', 'Milk', 'Curd'];
    let emptyMsg = healthyFood.length === 0 ? <h3>Im still hungry!</h3> : null
    // if(healthyFood.length === 0) return <h3>Im still hungry! - if else method</h3>
    return (
        <React.Fragment>
            {/* {emptyMsg} */}
            {/* {healthyFood.length === 0 ? <h3>Im still hungry! - ternery operator</h3> : null} */}
            {healthyFood.length === 0 && <h3>Im still hungry! - logical operator</h3>}
            <ul className="list-group">
                {healthyFood.map((item)=>(<Item key={item} foodItem={item}></Item>))}
                
            </ul>
        </React.Fragment>
    )
}

export default HealthyFood;