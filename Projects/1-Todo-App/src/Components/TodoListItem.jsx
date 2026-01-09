
function TodoListItem({todoName, todoDate}){

    return(
        <div className="row g-2 text-start my-1">
            <div className="col-5">{todoName}</div>
            <div className="col-5">{todoDate}</div>
            <div className="col-2"><button className='btn btn-danger'>Delete</button></div>
        </div>
    )
}

export default TodoListItem;