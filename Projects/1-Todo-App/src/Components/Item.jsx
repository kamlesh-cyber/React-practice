import styles from "./Item.module.css"


 const Item = (({foodItem, handleBuyButton, boughtFood}) =>{

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
