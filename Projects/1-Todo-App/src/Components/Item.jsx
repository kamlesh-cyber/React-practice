import styles from "./Item.module.css"


 const Item = (({foodItem}) =>{

   const handleCLick = (foodItem, event)=>{
    console.log("event-->", event);
        alert(`${foodItem} is clicked`);
   }

    return(
        <div>
            <li className={`${styles.itemColor} list-group-item d-flex justify-content-between`}>
                <span>{foodItem}</span> 
                <button className="py-1 btn btn-primary" onClick={()=> handleCLick(foodItem, event)}>Buy me</button>
            </li>
        </div>
    )
})
 export default Item;

// export default function Item({foodItem}) {
//     return(
//         <div>
//             <li className={`${styles.itemColor} list-group-item`}>
//                 {foodItem} 
//                 <button className="p-0" style={{"float":"right"}}>Buy me</button>
//             </li>
//         </div>
//     )
// } 