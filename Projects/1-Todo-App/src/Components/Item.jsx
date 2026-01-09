import styles from "./Item.module.css"


 const Item = (({foodItem}) =>{

   const handleCLick = ()=>{
        alert("clicked");
   }

    return(
        <div>
            <li className={`${styles.itemColor} list-group-item`}>
                {foodItem} 
                <button className="p-0" onClick={handleCLick} style={{"float":"right"}}>Buy me</button>
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