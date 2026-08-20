import styles from "./Item.module.css"


<<<<<<< HEAD
 const Item = (({foodItem, handleBuyButton, bought}) =>{
=======
 const Item = (({foodItem, handleBuyButton, boughtFood}) =>{
>>>>>>> fb2eceaad59f0d807f950ba1e0e48d26b310e246

    return(
        <div>
            <li className={`${styles.itemColor} list-group-item d-flex justify-content-between ${boughtFood && "bg-warning"}`}>
                <span>{foodItem}</span> 
                <button className="py-1 btn btn-primary" onClick={()=>handleBuyButton(foodItem)}>Buy me</button>
            </li>
        </div>
    )
})
 export default Item;
